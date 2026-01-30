/**
 * Authentication Microservice
 * 
 * This service handles user authentication, registration, and token management.
 * It implements JWT-based authentication with secure password hashing.
 * 
 * Features:
 * - User registration and login
 * - JWT token generation and validation
 * - Password hashing with bcrypt
 * - Token refresh mechanism
 * - Zero-knowledge proof authentication option
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');
const crypto = require('crypto');
const { ethers } = require('ethers');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const axios = require('axios');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
// Enable CORS for all routes with maximum permissiveness
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// Also keep the regular cors middleware as a fallback
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'auth',
  user: process.env.DB_USER || 'nandan',
  password: process.env.DB_PASSWORD || '',
});

// JWT configuration
const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(64).toString('hex');
const JWT_EXPIRY = process.env.JWT_EXPIRY || '24h';

// MailerLite service configuration
const MAILERLITE_SERVICE_URL = process.env.MAILERLITE_SERVICE_URL || 'http://mailerlite-service:8000';

// Connect to database and create tables if they don't exist
async function initializeDatabase() {
  const client = await db.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'user',
        wallet_address VARCHAR(255) UNIQUE,
        auth_provider VARCHAR(50) DEFAULT 'jwt',
        provider_id VARCHAR(255),
        verified_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS refresh_tokens (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        token VARCHAR(255) UNIQUE NOT NULL,
        expires_at TIMESTAMP NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS login_attempts (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        ip_address VARCHAR(45),
        success BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS proposals (
        id SERIAL PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        description TEXT NOT NULL,
        author_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        category VARCHAR(100),
        status VARCHAR(50) DEFAULT 'pending',
        funding_requested DECIMAL(20,2),
        voting_start TIMESTAMP,
        voting_end TIMESTAMP,
        quorum INTEGER DEFAULT 100,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS votes (
        id SERIAL PRIMARY KEY,
        proposal_id INTEGER REFERENCES proposals(id) ON DELETE CASCADE,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        vote VARCHAR(10) NOT NULL CHECK (vote IN ('for', 'against')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(proposal_id, user_id)
      );

      CREATE TABLE IF NOT EXISTS funding_pledges (
        id SERIAL PRIMARY KEY,
        proposal_id INTEGER REFERENCES proposals(id) ON DELETE CASCADE,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        amount DECIMAL(20,2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(proposal_id, user_id)
      );
    `);
    console.log('Database initialized successfully');
  } catch (err) {
    console.error('Error initializing database:', err);
    throw err;
  } finally {
    client.release();
  }
}

// Helper functions
function generateToken(user) {
  return jwt.sign(
    { 
      userId: user.id, 
      email: user.email,
      role: user.role 
    }, 
    JWT_SECRET, 
    { expiresIn: JWT_EXPIRY }
  );
}

function generateRefreshToken(userId) {
  const token = crypto.randomBytes(40).toString('hex');
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 30); // 30 days expiry
  
  return { token, expiresAt };
}

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    
    req.user = user;
    next();
  });
}

// Routes
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required' });
  }
  
  try {
    // Check if user already exists
    const userCheck = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    
    if (userCheck.rows.length > 0) {
      return res.status(409).json({ message: 'User with this email already exists' });
    }
    
    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Create new user
    const result = await db.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, role',
      [name, email, hashedPassword]
    );
    
    const user = result.rows[0];
    
    // Generate tokens
    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user.id);
    
    // Store refresh token
    await db.query(
      'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
      [user.id, refreshToken.token, refreshToken.expiresAt]
    );
    
    // Log successful registration
    await db.query(
      'INSERT INTO login_attempts (email, ip_address, success) VALUES ($1, $2, $3)',
      [email, req.ip, true]
    );
    
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token,
      refreshToken: refreshToken.token
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  
  try {
    // Get user by email
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    
    if (result.rows.length === 0) {
      // Log failed attempt
      await db.query(
        'INSERT INTO login_attempts (email, ip_address, success) VALUES ($1, $2, $3)',
        [email, req.ip, false]
      );
      
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const user = result.rows[0];
    
    // Check password
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      // Log failed attempt
      await db.query(
        'INSERT INTO login_attempts (email, ip_address, success) VALUES ($1, $2, $3)',
        [email, req.ip, false]
      );
      
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // Generate tokens
    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user.id);
    
    // Store refresh token
    await db.query(
      'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
      [user.id, refreshToken.token, refreshToken.expiresAt]
    );
    
    // Log successful login
    await db.query(
      'INSERT INTO login_attempts (email, ip_address, success) VALUES ($1, $2, $3)',
      [email, req.ip, true]
    );
    
    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token,
      refreshToken: refreshToken.token
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
});

app.post('/api/auth/refresh', async (req, res) => {
  const { refreshToken } = req.body;
  
  if (!refreshToken) {
    return res.status(400).json({ message: 'Refresh token is required' });
  }
  
  try {
    // Find the refresh token
    const tokenResult = await db.query(
      'SELECT * FROM refresh_tokens WHERE token = $1 AND expires_at > NOW()',
      [refreshToken]
    );
    
    if (tokenResult.rows.length === 0) {
      return res.status(403).json({ message: 'Invalid or expired refresh token' });
    }
    
    const tokenData = tokenResult.rows[0];
    
    // Get user
    const userResult = await db.query('SELECT * FROM users WHERE id = $1', [tokenData.user_id]);
    
    if (userResult.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const user = userResult.rows[0];
    
    // Generate new tokens
    const newToken = generateToken(user);
    const newRefreshToken = generateRefreshToken(user.id);
    
    // Delete old refresh token
    await db.query('DELETE FROM refresh_tokens WHERE token = $1', [refreshToken]);
    
    // Store new refresh token
    await db.query(
      'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
      [user.id, newRefreshToken.token, newRefreshToken.expiresAt]
    );
    
    res.json({
      message: 'Token refreshed successfully',
      token: newToken,
      refreshToken: newRefreshToken.token
    });
  } catch (err) {
    console.error('Token refresh error:', err);
    res.status(500).json({ message: 'Server error during token refresh' });
  }
});

app.post('/api/auth/logout', authenticateToken, async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  try {
    // Delete refresh tokens for user
    await db.query('DELETE FROM refresh_tokens WHERE user_id = $1', [req.user.userId]);
    
    res.json({ message: 'Logged out successfully' });
  } catch (err) {
    console.error('Logout error:', err);
    res.status(500).json({ message: 'Server error during logout' });
  }
});

app.get('/api/users/profile', authenticateToken, async (req, res) => {
  try {
    const result = await db.query(
      'SELECT id, name, email, role, created_at FROM users WHERE id = $1',
      [req.user.userId]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Profile fetch error:', err);
    res.status(500).json({ message: 'Server error fetching profile' });
  }
});

app.put('/api/users/profile', authenticateToken, async (req, res) => {
  const { name, email } = req.body;
  
  try {
    // Check if email is already taken by another user
    if (email) {
      const emailCheck = await db.query(
        'SELECT * FROM users WHERE email = $1 AND id != $2',
        [email, req.user.userId]
      );
      
      if (emailCheck.rows.length > 0) {
        return res.status(409).json({ message: 'Email is already taken' });
      }
    }
    
    // Update user profile
    const updateFields = [];
    const values = [];
    let valueIndex = 1;
    
    if (name) {
      updateFields.push(`name = $${valueIndex}`);
      values.push(name);
      valueIndex++;
    }
    
    if (email) {
      updateFields.push(`email = $${valueIndex}`);
      values.push(email);
      valueIndex++;
    }
    
    updateFields.push(`updated_at = NOW()`);
    
    if (updateFields.length === 1) {
      return res.status(400).json({ message: 'No fields to update' });
    }
    
    values.push(req.user.userId);
    
    const result = await db.query(
      `UPDATE users SET ${updateFields.join(', ')} WHERE id = $${valueIndex} RETURNING id, name, email, role`,
      values
    );
    
    res.json({
      message: 'Profile updated successfully',
      user: result.rows[0]
    });
  } catch (err) {
    console.error('Profile update error:', err);
    res.status(500).json({ message: 'Server error updating profile' });
  }
});

app.post('/api/users/change-password', authenticateToken, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  
  if (!currentPassword || !newPassword) {
    return res.status(400).json({ message: 'Current password and new password are required' });
  }
  
  try {
    // Get user with password
    const result = await db.query('SELECT * FROM users WHERE id = $1', [req.user.userId]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    const user = result.rows[0];
    
    // Verify current password
    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }
    
    // Hash new password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
    
    // Update password
    await db.query(
      'UPDATE users SET password = $1, updated_at = NOW() WHERE id = $2',
      [hashedPassword, req.user.userId]
    );
    
    // Invalidate all refresh tokens for security
    await db.query('DELETE FROM refresh_tokens WHERE user_id = $1', [req.user.userId]);
    
    res.json({ message: 'Password changed successfully' });
  } catch (err) {
    console.error('Password change error:', err);
    res.status(500).json({ message: 'Server error changing password' });
  }
});

/**
 * Web3 Authentication
 */

// Web3 challenge for signature verification
app.post('/api/auth/web3/connect', async (req, res) => {
  const { walletAddress, chainId } = req.body;

  if (!walletAddress || !chainId) {
    return res.status(400).json({ message: 'Wallet address and chain ID are required' });
  }

  try {
    // Generate challenge message
    const challenge = `Sign this message to authenticate with your wallet: ${walletAddress}\nTimestamp: ${Date.now()}\nChain: ${chainId}`;
    const message = ethers.hashMessage(challenge);

    res.json({
      message: challenge,
      challenge: message,
      walletAddress,
      chainId,
      timestamp: Date.now()
    });
  } catch (err) {
    console.error('Web3 connect error:', err);
    res.status(500).json({ message: 'Error generating challenge' });
  }
});

// Web3 authentication with signature verification
app.post('/api/auth/web3/authenticate', async (req, res) => {
  const { walletAddress, signature, chainId, originalMessage } = req.body;

  if (!walletAddress || !signature || !chainId || !originalMessage) {
    return res.status(400).json({ message: 'Wallet address, signature, chain ID, and original message are required' });
  }

  try {
    // Verify signature
    const recoveredAddress = ethers.verifyMessage(originalMessage, signature);

    if (recoveredAddress.toLowerCase() !== walletAddress.toLowerCase()) {
      return res.status(401).json({ message: 'Invalid signature' });
    }

    // Check if user exists with this wallet
    let userResult = await db.query('SELECT * FROM users WHERE LOWER(wallet_address) = LOWER($1)', [walletAddress]);

    let user;
    if (userResult.rows.length === 0) {
      // Create new user with wallet address
      const result = await db.query(
        'INSERT INTO users (name, email, wallet_address, auth_provider, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [`Web3 User ${walletAddress.slice(0, 8)}`, `${walletAddress.toLowerCase()}@wallet.local`, walletAddress, 'web3', 'web3_auth']
      );
      user = result.rows[0];
    } else {
      user = userResult.rows[0];
    }

    // Generate tokens
    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user.id);

    // Store refresh token
    await db.query(
      'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
      [user.id, refreshToken.token, refreshToken.expiresAt]
    );

    // Log successful authentication
    await db.query(
      'INSERT INTO login_attempts (email, ip_address, success) VALUES ($1, $2, $3)',
      [user.email, req.ip, true]
    );

    res.json({
      message: 'Web3 authentication successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        walletAddress: user.wallet_address,
        authProvider: user.auth_provider,
        role: user.role
      },
      token,
      refreshToken: refreshToken.token
    });
  } catch (err) {
    console.error('Web3 authentication error:', err);
    res.status(500).json({ message: 'Web3 authentication failed' });
  }
});

/**
 * OAuth2 Authentication
 */

// Initialize Passport
app.use(passport.initialize());

// Google OAuth Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID || 'your_google_client_id',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'your_google_client_secret',
    callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3001/api/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user exists with this Google ID
      let userResult = await db.query('SELECT * FROM users WHERE provider_id = $1 AND auth_provider = $2',
                                        [profile.id, 'google']);

      let user;
      if (userResult.rows.length === 0) {
        // Check if email already exists
        const emailCheck = await db.query('SELECT * FROM users WHERE email = $1', [profile.emails[0].value]);

        if (emailCheck.rows.length > 0) {
          user = emailCheck.rows[0];
          // Update with OAuth info
          await db.query(
            'UPDATE users SET provider_id = $1, auth_provider = $2 WHERE id = $3',
            [profile.id, 'google', user.id]
          );
        } else {
          // Create new user
          const result = await db.query(
            'INSERT INTO users (name, email, auth_provider, provider_id, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [profile.displayName, profile.emails[0].value, 'google', profile.id, 'oauth_auth']
          );
          user = result.rows[0];
        }
      } else {
        user = userResult.rows[0];
      }

      done(null, user);
    } catch (err) {
      console.error('Google OAuth error:', err);
      done(err, null);
    }
  }
));

// GitHub OAuth Strategy
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID || 'your_github_client_id',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || 'your_github_client_secret',
    callbackURL: process.env.GITHUB_CALLBACK_URL || 'http://localhost:3001/api/auth/github/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user exists with this GitHub ID
      let userResult = await db.query('SELECT * FROM users WHERE provider_id = $1 AND auth_provider = $2',
                                        [profile.id, 'github']);

      let user;
      if (userResult.rows.length === 0) {
        // Check if email already exists
        let email = profile.emails && profile.emails[0] ? profile.emails[0].value : `${profile.username}@github.local`;

        const emailCheck = await db.query('SELECT * FROM users WHERE email = $1', [email]);

        if (emailCheck.rows.length > 0) {
          user = emailCheck.rows[0];
          // Update with OAuth info
          await db.query(
            'UPDATE users SET provider_id = $1, auth_provider = $2 WHERE id = $3',
            [profile.id, 'github', user.id]
          );
        } else {
          // Create new user
          const result = await db.query(
            'INSERT INTO users (name, email, auth_provider, provider_id, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [profile.displayName || profile.username, email, 'github', profile.id, 'oauth_auth']
          );
          user = result.rows[0];
        }
      } else {
        user = userResult.rows[0];
      }

      done(null, user);
    } catch (err) {
      console.error('GitHub OAuth error:', err);
      done(err, null);
    }
  }
));

// OAuth routes
app.get('/api/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/api/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async (req, res) => {
    try {
      const token = generateToken(req.user);
      const refreshToken = generateRefreshToken(req.user.id);

      await db.query(
        'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
        [req.user.id, refreshToken.token, refreshToken.expiresAt]
      );

      // Redirect to frontend with tokens
      res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5000'}/auth/callback?token=${token}&refreshToken=${refreshToken.token}&provider=google`);
    } catch (err) {
      console.error('OAuth callback error:', err);
      res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5000'}/login?error=oauth_failed`);
    }
  }
);

app.get('/api/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

app.get('/api/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  async (req, res) => {
    try {
      const token = generateToken(req.user);
      const refreshToken = generateRefreshToken(req.user.id);

      await db.query(
        'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
        [req.user.id, refreshToken.token, refreshToken.expiresAt]
      );

      res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5000'}/auth/callback?token=${token}&refreshToken=${refreshToken.token}&provider=github`);
    } catch (err) {
      console.error('OAuth callback error:', err);
      res.redirect(`${process.env.FRONTEND_URL || 'http://localhost:5000'}/login?error=oauth_failed`);
    }
  }
);

// Auth methods endpoint to show available options
app.get('/api/auth/methods', (req, res) => {
  res.json({
    methods: {
      jwt: {
        enabled: true,
        description: 'Traditional username/password authentication'
      },
      web3: {
        enabled: true,
        description: 'MetaMask, WalletConnect and other crypto wallets',
        supportedChains: ['ethereum', 'polygon', 'bnb-smart-chain']
      },
      oauth: {
        google: {
          enabled: !!process.env.GOOGLE_CLIENT_ID,
          description: 'Google account authentication'
        },
        github: {
          enabled: !!process.env.GITHUB_CLIENT_ID,
          description: 'GitHub account authentication'
        }
      }
    }
  });
});

/**
 * Newsletter Subscription System
 */

// Initialize newsletter database table
async function initializeNewsletterTable() {
  const client = await db.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        subscription_status VARCHAR(50) DEFAULT 'pending',
        verification_token VARCHAR(255) UNIQUE,
        verified_at TIMESTAMP,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        unsubscribed_at TIMESTAMP,
        preferences JSONB DEFAULT '{}',
        ip_address INET,
        user_agent TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
      CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscribers(subscription_status);
      CREATE INDEX IF NOT EXISTS idx_newsletter_token ON newsletter_subscribers(verification_token);
      CREATE INDEX IF NOT EXISTS idx_newsletter_verified ON newsletter_subscribers(verified_at);

      CREATE OR REPLACE FUNCTION update_updated_at_column()
      RETURNS TRIGGER AS $$
      BEGIN
          NEW.updated_at = CURRENT_TIMESTAMP;
          RETURN NEW;
      END;
      $$ language 'plpgsql';

      DROP TRIGGER IF EXISTS update_newsletter_subscribers_updated_at ON newsletter_subscribers;
      CREATE TRIGGER update_newsletter_subscribers_updated_at
          BEFORE UPDATE ON newsletter_subscribers
          FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    `);
    console.log('Newsletter database initialized successfully');
  } catch (err) {
    console.error('Error initializing newsletter database:', err);
  } finally {
    client.release();
  }
}

// Newsletter subscription endpoint
app.post('/api/newsletter/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    // Check if email is already subscribed
    const existingSubscriber = await db.query(
      'SELECT * FROM newsletter_subscribers WHERE email = $1',
      [email.toLowerCase()]
    );

    if (existingSubscriber.rows.length > 0) {
      const subscriber = existingSubscriber.rows[0];
      if (subscriber.subscription_status === 'active') {
        return res.status(409).json({ message: 'Email is already subscribed to our newsletter' });
      } else if (subscriber.subscription_status === 'pending') {
        return res.status(409).json({ message: 'Email subscription is pending verification. Please check your email.' });
      }
    }

    // Generate verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');

    // Create or update subscriber
    const result = await db.query(`
      INSERT INTO newsletter_subscribers (email, verification_token, ip_address, user_agent)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (email)
      DO UPDATE SET
        verification_token = EXCLUDED.verification_token,
        subscription_status = 'pending',
        updated_at = CURRENT_TIMESTAMP
      RETURNING *
    `, [email.toLowerCase(), verificationToken, req.ip, req.get('User-Agent')]);

    const subscriber = result.rows[0];

    // Send verification email via Mautic
    const verificationUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/newsletter/verify?token=${verificationToken}`;

    try {
      await axios.post(`${MAILERLITE_SERVICE_URL}/api/newsletter/send-verification`, {
        email: email.toLowerCase(),
        verificationToken,
        verificationUrl
      });

      console.log(`Newsletter verification email sent to ${email}`);

      res.status(201).json({
        message: 'Subscription request received. Please check your email to verify your subscription.',
        verificationUrl: process.env.NODE_ENV === 'development' ? verificationUrl : undefined
      });
    } catch (emailError) {
      console.error('Failed to send verification email:', emailError.message);

      // Still return success but log the error - don't fail the subscription
      res.status(201).json({
        message: 'Subscription request received. Please check your email to verify your subscription.',
        verificationUrl: process.env.NODE_ENV === 'development' ? verificationUrl : undefined,
        warning: 'Email delivery may be delayed'
      });
    }
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    res.status(500).json({ message: 'Server error during subscription' });
  }
});

// Newsletter verification endpoint
app.get('/api/newsletter/verify/:token', async (req, res) => {
  const { token } = req.params;

  if (!token) {
    return res.status(400).json({ message: 'Verification token is required' });
  }

  try {
    // Find subscriber by token
    const result = await db.query(
      'SELECT * FROM newsletter_subscribers WHERE verification_token = $1 AND subscription_status = $2',
      [token, 'pending']
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Invalid or expired verification token' });
    }

    const subscriber = result.rows[0];

    // Update subscriber status
    await db.query(
      'UPDATE newsletter_subscribers SET subscription_status = $1, verified_at = CURRENT_TIMESTAMP, verification_token = NULL WHERE id = $2',
      ['active', subscriber.id]
    );

    // Notify MailerLite of confirmed subscription
    try {
      await axios.post(`${MAILERLITE_SERVICE_URL}/api/newsletter/confirm-subscription`, {
        email: subscriber.email
      });
      console.log(`Newsletter subscription confirmed in MailerLite for ${subscriber.email}`);
    } catch (mailerliteError) {
      console.error('Failed to update MailerLite subscription status:', mailerliteError.message);
      // Don't fail the verification if MailerLite update fails
    }

    // Redirect to welcome page
    const welcomeUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/newsletter/welcome?email=${encodeURIComponent(subscriber.email)}`;
    res.redirect(welcomeUrl);
  } catch (err) {
    console.error('Newsletter verification error:', err);
    res.status(500).json({ message: 'Server error during verification' });
  }
});

// Newsletter unsubscribe endpoint
app.post('/api/newsletter/unsubscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const result = await db.query(
      'UPDATE newsletter_subscribers SET subscription_status = $1, unsubscribed_at = CURRENT_TIMESTAMP WHERE email = $2 AND subscription_status = $3 RETURNING *',
      ['unsubscribed', email.toLowerCase(), 'active']
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Active subscription not found for this email' });
    }

    // Notify MailerLite of unsubscription
    try {
      await axios.post(`${MAILERLITE_SERVICE_URL}/api/newsletter/unsubscribe`, {
        email: email.toLowerCase()
      });
      console.log(`Newsletter unsubscription processed in MailerLite for ${email}`);
    } catch (mailerliteError) {
      console.error('Failed to update MailerLite unsubscription status:', mailerliteError.message);
      // Don't fail the unsubscription if MailerLite update fails
    }

    res.json({ message: 'Successfully unsubscribed from newsletter' });
  } catch (err) {
    console.error('Newsletter unsubscribe error:', err);
    res.status(500).json({ message: 'Server error during unsubscription' });
  }
});

// Get newsletter subscriber status (for authenticated users)
app.get('/api/newsletter/status', authenticateToken, async (req, res) => {
  try {
    const result = await db.query(
      'SELECT email, subscription_status, subscribed_at, verified_at FROM newsletter_subscribers WHERE email = $1',
      [req.user.email]
    );

    if (result.rows.length === 0) {
      return res.json({ subscribed: false });
    }

    const subscriber = result.rows[0];
    res.json({
      subscribed: subscriber.subscription_status === 'active',
      status: subscriber.subscription_status,
      subscribedAt: subscriber.subscribed_at,
      verifiedAt: subscriber.verified_at
    });
  } catch (err) {
    console.error('Newsletter status error:', err);
    res.status(500).json({ message: 'Server error fetching subscription status' });
  }
});

// Sync newsletter subscribers to Mautic (admin endpoint)
app.post('/api/newsletter/sync-to-mautic', authenticateToken, async (req, res) => {
  try {
    // Check if user is admin (you might want to add role checking)
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required' });
    }

    // Fetch all newsletter subscribers
    const result = await db.query(
      'SELECT email, subscription_status, subscribed_at, verified_at FROM newsletter_subscribers ORDER BY created_at DESC'
    );

    const subscribers = result.rows;

    // Send to MailerLite service
    const syncResponse = await axios.post(`${MAILERLITE_SERVICE_URL}/api/newsletter/sync-subscribers`, {
      subscribers
    });

    res.json({
      message: 'Newsletter subscribers synced to MailerLite',
      totalSubscribers: subscribers.length,
      syncResult: syncResponse.data
    });
  } catch (err) {
    console.error('Newsletter sync error:', err);
    res.status(500).json({ message: 'Server error syncing subscribers to MailerLite' });
  }
});

/**
 * Governance API Endpoints
 */

// Get all proposals
app.get('/api/proposals', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT
        p.*,
        u.name as author_name,
        u.email as author_email,
        COALESCE(votes_for.count, 0) as votes_for,
        COALESCE(votes_against.count, 0) as votes_against,
        COALESCE(votes_for.count, 0) + COALESCE(votes_against.count, 0) as total_votes
      FROM proposals p
      JOIN users u ON p.author_id = u.id
      LEFT JOIN (
        SELECT proposal_id, COUNT(*) as count
        FROM votes
        WHERE vote = 'for'
        GROUP BY proposal_id
      ) votes_for ON p.id = votes_for.proposal_id
      LEFT JOIN (
        SELECT proposal_id, COUNT(*) as count
        FROM votes
        WHERE vote = 'against'
        GROUP BY proposal_id
      ) votes_against ON p.id = votes_against.proposal_id
      ORDER BY p.created_at DESC
    `);

    const proposals = result.rows.map(proposal => ({
      id: proposal.id,
      title: proposal.title,
      description: proposal.description,
      author: proposal.author_name,
      category: proposal.category,
      status: proposal.status,
      votesFor: parseInt(proposal.votes_for),
      votesAgainst: parseInt(proposal.votes_against),
      totalVotes: parseInt(proposal.total_votes),
      quorum: proposal.quorum,
      fundingRequested: proposal.funding_requested ? `${proposal.funding_requested} LLD` : 'N/A',
      created: proposal.created_at.toISOString().split('T')[0],
      votingStart: proposal.voting_start,
      votingEnd: proposal.voting_end
    }));

    res.json(proposals);
  } catch (err) {
    console.error('Error fetching proposals:', err);
    res.status(500).json({ message: 'Server error fetching proposals' });
  }
});

// Create a new proposal
app.post('/api/proposals', authenticateToken, async (req, res) => {
  const { title, description, category, fundingRequested, quorum } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  try {
    const result = await db.query(
      `INSERT INTO proposals (title, description, author_id, category, funding_requested, quorum)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, description, req.user.userId, category, fundingRequested, quorum || 100]
    );

    const proposal = result.rows[0];
    res.status(201).json({
      message: 'Proposal created successfully',
      proposal: {
        id: proposal.id,
        title: proposal.title,
        description: proposal.description,
        category: proposal.category,
        status: proposal.status,
        fundingRequested: proposal.funding_requested,
        quorum: proposal.quorum,
        created: proposal.created_at
      }
    });
  } catch (err) {
    console.error('Error creating proposal:', err);
    res.status(500).json({ message: 'Server error creating proposal' });
  }
});

// Get a specific proposal
app.get('/api/proposals/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(`
      SELECT
        p.*,
        u.name as author_name,
        u.email as author_email,
        COALESCE(votes_for.count, 0) as votes_for,
        COALESCE(votes_against.count, 0) as votes_against,
        COALESCE(votes_for.count, 0) + COALESCE(votes_against.count, 0) as total_votes
      FROM proposals p
      JOIN users u ON p.author_id = u.id
      LEFT JOIN (
        SELECT proposal_id, COUNT(*) as count
        FROM votes
        WHERE vote = 'for'
        GROUP BY proposal_id
      ) votes_for ON p.id = votes_for.proposal_id
      LEFT JOIN (
        SELECT proposal_id, COUNT(*) as count
        FROM votes
        WHERE vote = 'against'
        GROUP BY proposal_id
      ) votes_against ON p.id = votes_against.proposal_id
      WHERE p.id = $1
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Proposal not found' });
    }

    const proposal = result.rows[0];
    res.json({
      id: proposal.id,
      title: proposal.title,
      description: proposal.description,
      author: proposal.author_name,
      category: proposal.category,
      status: proposal.status,
      votesFor: parseInt(proposal.votes_for),
      votesAgainst: parseInt(proposal.votes_against),
      totalVotes: parseInt(proposal.total_votes),
      quorum: proposal.quorum,
      fundingRequested: proposal.funding_requested ? `${proposal.funding_requested} LLD` : 'N/A',
      created: proposal.created_at.toISOString().split('T')[0],
      votingStart: proposal.voting_start,
      votingEnd: proposal.voting_end
    });
  } catch (err) {
    console.error('Error fetching proposal:', err);
    res.status(500).json({ message: 'Server error fetching proposal' });
  }
});

// Vote on a proposal
app.post('/api/proposals/:id/vote', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { vote } = req.body; // 'for' or 'against'

  if (!vote || !['for', 'against'].includes(vote)) {
    return res.status(400).json({ message: 'Vote must be either "for" or "against"' });
  }

  try {
    // Check if proposal exists and is active
    const proposalResult = await db.query('SELECT * FROM proposals WHERE id = $1', [id]);
    if (proposalResult.rows.length === 0) {
      return res.status(404).json({ message: 'Proposal not found' });
    }

    const proposal = proposalResult.rows[0];
    if (proposal.status !== 'active') {
      return res.status(400).json({ message: 'Proposal is not currently active for voting' });
    }

    // Check if user already voted
    const existingVote = await db.query(
      'SELECT * FROM votes WHERE proposal_id = $1 AND user_id = $2',
      [id, req.user.userId]
    );

    if (existingVote.rows.length > 0) {
      // Update existing vote
      await db.query(
        'UPDATE votes SET vote = $1 WHERE proposal_id = $2 AND user_id = $3',
        [vote, id, req.user.userId]
      );
      res.json({ message: 'Vote updated successfully' });
    } else {
      // Insert new vote
      await db.query(
        'INSERT INTO votes (proposal_id, user_id, vote) VALUES ($1, $2, $3)',
        [id, req.user.userId, vote]
      );
      res.json({ message: 'Vote cast successfully' });
    }
  } catch (err) {
    console.error('Error voting on proposal:', err);
    res.status(500).json({ message: 'Server error casting vote' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'auth-service' });
});

// Start server
app.listen(PORT, async () => {
  console.log(`Auth service running on port ${PORT}`);
  await initializeDatabase();
  await initializeNewsletterTable();
});

module.exports = app; // For testing
