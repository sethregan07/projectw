/**
 * Authentication Service Client
 * 
 * This module provides client-side functions to interact with the authentication microservice.
 * It handles user registration, login, token management, and session validation.
 */

import { jwtDecode } from 'jwt-decode';

// Configuration for the auth service
// Using Next.js API routes as a proxy to avoid CORS issues
const AUTH_SERVICE_URL = '/api';

// Types
export interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface DecodedToken {
  userId: string;
  email: string;
  role: string;
  exp: number;
}

/**
 * Register a new user
 * @param name User's full name
 * @param email User's email address
 * @param password User's password
 * @returns Promise resolving to the user data
 */
export async function register(name: string, email: string, password: string): Promise<UserData> {
  try {
    const response = await fetch(`${AUTH_SERVICE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    const data = await response.json();
    
    // Store the token in localStorage
    localStorage.setItem('authToken', data.token);
    
    return data.user;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
}

/**
 * Log in an existing user
 * @param email User's email address
 * @param password User's password
 * @returns Promise resolving to the user data
 */
export async function login(email: string, password: string): Promise<UserData> {
  try {
    const response = await fetch(`${AUTH_SERVICE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const data = await response.json();
    
    // Store the token in localStorage
    localStorage.setItem('authToken', data.token);
    
    return data.user;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

/**
 * Log out the current user
 */
export function logout(): void {
  localStorage.removeItem('authToken');
  // Optionally, you could also call the backend to invalidate the token
  // await fetch(`${AUTH_SERVICE_URL}/auth/logout`, { ... });
}

/**
 * Get the current authenticated user
 * @returns The current user or null if not authenticated
 */
export function getCurrentUser(): UserData | null {
  try {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      return null;
    }
    
    const decoded = jwtDecode<DecodedToken>(token);
    
    // Check if token is expired
    if (decoded.exp * 1000 < Date.now()) {
      localStorage.removeItem('authToken');
      return null;
    }
    
    return {
      id: decoded.userId,
      email: decoded.email,
      role: decoded.role,
      name: '' // Name is not typically included in JWT payload to keep it small
    };
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

/**
 * Check if the user is authenticated
 * @returns Boolean indicating if the user is authenticated
 */
export function isAuthenticated(): boolean {
  return getCurrentUser() !== null;
}

/**
 * Get the authentication token
 * @returns The current auth token or null
 */
export function getAuthToken(): string | null {
  return localStorage.getItem('authToken');
}

/**
 * Refresh the authentication token
 * @returns Promise resolving to the new token
 */
export async function refreshToken(): Promise<string> {
  try {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      throw new Error('No token to refresh');
    }
    
    const response = await fetch(`${AUTH_SERVICE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Token refresh failed');
    }

    const data = await response.json();
    
    // Store the new token
    localStorage.setItem('authToken', data.token);
    
    return data.token;
  } catch (error) {
    console.error('Token refresh error:', error);
    // If refresh fails, log the user out
    logout();
    throw error;
  }
}

/**
 * Update user profile
 * @param userData User data to update
 * @returns Promise resolving to the updated user data
 */
export async function updateProfile(userData: Partial<UserData>): Promise<UserData> {
  try {
    const token = getAuthToken();

    if (!token) {
      throw new Error('Not authenticated');
    }

    const response = await fetch(`${AUTH_SERVICE_URL}/auth/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Profile update failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Profile update error:', error);
    throw error;
  }
}

/**
 * Change user password
 * @param currentPassword Current password
 * @param newPassword New password
 * @returns Promise resolving to success message
 */
export async function changePassword(currentPassword: string, newPassword: string): Promise<{ message: string }> {
  try {
    const token = getAuthToken();

    if (!token) {
      throw new Error('Not authenticated');
    }

    const response = await fetch(`${AUTH_SERVICE_URL}/auth/change-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ currentPassword, newPassword }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Password change failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Password change error:', error);
    throw error;
  }
}
