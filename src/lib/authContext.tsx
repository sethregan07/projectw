import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserData } from './authService';
import { getCurrentUser, login, logout, register } from './authService';

// Define the shape of the authentication context
interface AuthContextType {
  user: UserData | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<UserData>;
  register: (name: string, email: string, password: string) => Promise<UserData>;
  logout: () => void;
}

// Create the AuthContext with a default value
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {
    throw new Error('AuthContext not initialized');
  },
  register: async () => {
    throw new Error('AuthContext not initialized');
  },
  logout: () => {
    throw new Error('AuthContext not initialized');
  }
});

// AuthProvider component to wrap the app
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on mount and when the component updates
  useEffect(() => {
    const checkAuthStatus = () => {
      const currentUser = getCurrentUser();
      setUser(currentUser);
      setIsAuthenticated(!!currentUser);
    };

    checkAuthStatus();

    // Listen for storage changes (login/logout from other tabs)
    const handleStorageChange = () => checkAuthStatus();
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Login handler
  const handleLogin = async (email: string, password: string) => {
    try {
      const userData = await login(email, password);
      setUser(userData);
      setIsAuthenticated(true);
      return userData;
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      throw error;
    }
  };

  // Register handler
  const handleRegister = async (name: string, email: string, password: string) => {
    try {
      const userData = await register(name, email, password);
      setUser(userData);
      setIsAuthenticated(true);
      return userData;
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      throw error;
    }
  };

  // Logout handler
  const handleLogout = () => {
    logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider 
      value={{
        user,
        isAuthenticated,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
