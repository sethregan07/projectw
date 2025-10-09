-- Database initialization script
-- This script creates the necessary databases and users for all microservices

-- Create databases
CREATE DATABASE IF NOT EXISTS auth_db;
CREATE DATABASE IF NOT EXISTS ghost_db;
CREATE DATABASE IF NOT EXISTS mautic_db;
CREATE DATABASE IF NOT EXISTS analytics_db;

-- Switch to auth_db and create schema
\c auth_db;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Refresh tokens table
CREATE TABLE IF NOT EXISTS refresh_tokens (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  token VARCHAR(255) UNIQUE NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Login attempts table for security monitoring
CREATE TABLE IF NOT EXISTS login_attempts (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  ip_address VARCHAR(45),
  success BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User profiles for additional user data
CREATE TABLE IF NOT EXISTS user_profiles (
  id SERIAL PRIMARY KEY,
  user_id INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  bio TEXT,
  avatar_url VARCHAR(255),
  location VARCHAR(100),
  website VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User settings for preferences
CREATE TABLE IF NOT EXISTS user_settings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  email_notifications BOOLEAN DEFAULT TRUE,
  two_factor_enabled BOOLEAN DEFAULT FALSE,
  theme VARCHAR(50) DEFAULT 'light',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_user_id ON refresh_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_login_attempts_email ON login_attempts(email);
CREATE INDEX IF NOT EXISTS idx_login_attempts_created_at ON login_attempts(created_at);

-- Switch to analytics_db and create schema
\c analytics_db;

-- Page views table
CREATE TABLE IF NOT EXISTS page_views (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  session_id VARCHAR(255) NOT NULL,
  page_url VARCHAR(255) NOT NULL,
  referrer_url VARCHAR(255),
  user_agent TEXT,
  ip_address VARCHAR(45),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User events table
CREATE TABLE IF NOT EXISTS user_events (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  session_id VARCHAR(255) NOT NULL,
  event_type VARCHAR(50) NOT NULL,
  event_data JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for analytics
CREATE INDEX IF NOT EXISTS idx_page_views_user_id ON page_views(user_id);
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at);
CREATE INDEX IF NOT EXISTS idx_user_events_user_id ON user_events(user_id);
CREATE INDEX IF NOT EXISTS idx_user_events_event_type ON user_events(event_type);
CREATE INDEX IF NOT EXISTS idx_user_events_created_at ON user_events(created_at);

-- Create a read-only user for analytics
CREATE USER analytics_reader WITH PASSWORD 'analytics_password';
GRANT CONNECT ON DATABASE analytics_db TO analytics_reader;
GRANT USAGE ON SCHEMA public TO analytics_reader;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO analytics_reader;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO analytics_reader;

-- Create admin users for each database
CREATE USER auth_admin WITH PASSWORD 'auth_password';
CREATE USER ghost_admin WITH PASSWORD 'ghost_password';
CREATE USER mautic_admin WITH PASSWORD 'mautic_password';
CREATE USER analytics_admin WITH PASSWORD 'analytics_password';

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE auth_db TO auth_admin;
GRANT ALL PRIVILEGES ON DATABASE ghost_db TO ghost_admin;
GRANT ALL PRIVILEGES ON DATABASE mautic_db TO mautic_admin;
GRANT ALL PRIVILEGES ON DATABASE analytics_db TO analytics_admin;

-- Create a backup user with read-only access to all databases
CREATE USER backup_user WITH PASSWORD 'backup_password';
GRANT CONNECT ON DATABASE auth_db TO backup_user;
GRANT CONNECT ON DATABASE ghost_db TO backup_user;
GRANT CONNECT ON DATABASE mautic_db TO backup_user;
GRANT CONNECT ON DATABASE analytics_db TO backup_user;

GRANT USAGE ON SCHEMA public TO backup_user;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO backup_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO backup_user;