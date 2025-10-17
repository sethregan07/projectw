-- Insert test users for development
-- This script runs after init-db.sql and creates some test users

-- Insert test users with hashed passwords
-- Password for all test users is: 'test123'
-- Hash generated with bcrypt, 10 salt rounds
-- Note: These are static hashes for consistent testing across deployments

INSERT INTO users (name, email, password, role) VALUES
('Test User', 'test@example.com', '$2a$10$xFUj2L8IghDJDEzQTyHYaeSbYUoTmepTkxWVjUGWpJiSXk5fMXqLq', 'user'),
('Test User 2', 'test2@example.com', '$2a$10$xFUj2L8IghDJDEzQTyHYaeSbYUoTmepTkxWVjUGWpJiSXk5fMXqLq', 'user'),
('Alena', 'alena@example.com', '$2a$10$xFUj2L8IghDJDEzQTyHYaeSbYUoTmepTkxWVjUGWpJiSXk5fMXqLq', 'user')
ON CONFLICT (email) DO NOTHING;

-- Insert refresh tokens for test users (optional, will be created on login)
-- These are example tokens, real ones are generated dynamically