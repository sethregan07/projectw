/**
 * Authentication Microservice (SQLite Version for Testing)
 * 
 * This service handles user authentication, registration, and token management.
 * It implements JWT-based authentication with secure password hashing.
 * Modified to use SQLite for demonstration purposes.
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();
const crypto = require('crypto');
const { ethers } = require('ethers');
const path = require('path');

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

// SQLite database setup
const db = new sqlite3.Database('./auth_db.sqlite', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Initialize database tables
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'user',
      wallet_address TEXT UNIQUE,
      auth_provider TEXT DEFAULT 'jwt',
      provider_id TEXT,
      verified_at TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  db.run(`
    CREATE TABLE IF NOT EXISTS refresh_tokens (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      token TEXT UNIQUE NOT NULL,
      expires_at TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  db.run(`
    CREATE TABLE IF NOT EXISTS login_attempts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      ip_address TEXT,
      success BOOLEAN DEFAULT 0,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  console.log('SQLite database initialized successfully');
});

// JWT configuration
const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(64).toString('hex');
const JWT_EXPIRY = process.env.JWT_EXPIRY || '24h';

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
    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, row) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Server error during registration' });
      }
      
      if (row) {
        return res.status(409).json({ message: 'User with this email already exists' });
      }
      
      try {
        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        // Create new user
        db.run(
          'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
          [name, email, hashedPassword],
          function(err) {
            if (err) {
              console.error('Error creating user:', err);
              return res.status(500).json({ message: 'Server error during registration' });
            }
            
            const user = { id: this.lastID, name, email, role: 'user' };
            
            // Generate tokens
            const token = generateToken(user);
            const refreshToken = generateRefreshToken(user.id);
            
            // Store refresh token
            db.run(
              'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (?, ?, ?)',
              [user.id, refreshToken.token, refreshToken.expiresAt.toISOString()]
            );
            
            // Log successful registration
            db.run(
              'INSERT INTO login_attempts (email, ip_address, success) VALUES (?, ?, ?)',
              [email, req.ip, 1]
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
          }
        );
      } catch (hashErr) {
        console.error('Password hashing error:', hashErr);
        res.status(500).json({ message: 'Server error during registration' });
      }
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
    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Server error during login' });
      }
      
      if (!user) {
        // Log failed attempt
        db.run(
          'INSERT INTO login_attempts (email, ip_address, success) VALUES (?, ?, ?)',
          [email, req.ip, 0]
        );
        
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      
      try {
        // Check password
        const passwordMatch = await bcrypt.compare(password, user.password);
        
        if (!passwordMatch) {
          // Log failed attempt
          db.run(
            'INSERT INTO login_attempts (email, ip_address, success) VALUES (?, ?, ?)',
            [email, req.ip, 0]
          );
          
          return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        // Generate tokens
        const token = generateToken(user);
        const refreshToken = generateRefreshToken(user.id);
        
        // Store refresh token
        db.run(
          'INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (?, ?, ?)',
          [user.id, refreshToken.token, refreshToken.expiresAt.toISOString()]
        );
        
        // Log successful login
        db.run(
          'INSERT INTO login_attempts (email, ip_address, success) VALUES (?, ?, ?)',
          [email, req.ip, 1]
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
      } catch (compareErr) {
        console.error('Password comparison error:', compareErr);
        res.status(500).json({ message: 'Server error during login' });
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'auth-service', database: 'sqlite' });
});

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
      }
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
  console.log(`JWT Secret: ${JWT_SECRET.substring(0, 20)}...`);
  console.log(`Database: SQLite`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});

module.exports = app; // For testing