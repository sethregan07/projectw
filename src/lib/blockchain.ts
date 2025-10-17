// MARKER: Blockchain Integration Layer
// Connects the dashboard to the privacy-focused blockchain

export interface GovernanceProposal {
  id: string;
  title: string;
  description: string;
  creator: string;
  created_at: number;
  voting_deadline: number;
  for_votes: number;
  against_votes: number;
  status: string;
  treasury_request?: number;
}

export interface Voter {
  address: string;
  voting_power: number;
  reputation: number;
}

class BlockchainService {
  private baseUrl: string;

  constructor(baseUrl: string = 'http://localhost:8001') {
    this.baseUrl = baseUrl;
  }

  // Health check for blockchain service
  async getHealth(): Promise<{ success: boolean; message?: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/health`);
      const data = await response.json();
      return { success: data.success, message: data.data };
    } catch (error) {
      return { success: false, message: error instanceof Error ? error.message : 'Unknown error' };
    }
  }

  // Get all governance proposals
  async getProposals(): Promise<GovernanceProposal[]> {
    try {
      const response = await fetch(`${this.baseUrl}/proposals`);
      const data = await response.json();
      return data.success ? data.data || [] : [];
    } catch (error) {
      console.error('Failed to fetch proposals:', error);
      return [];
    }
  }

  // Create a new governance proposal
  async createProposal(data: {
    title: string;
    description: string;
    creator_address: string;
    treasury_request?: number;
    voting_period_days: number;
  }): Promise<GovernanceProposal | null> {
    try {
      const response = await fetch(`${this.baseUrl}/proposals`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result.success ? result.data : null;
    } catch (error) {
      console.error('Failed to create proposal:', error);
      return null;
    }
  }

  // Cast a vote on a proposal
  async castVote(data: {
    proposal_id: string;
    vote: boolean; // true = for, false = against
    voter_address: string;
    signature: string;
  }): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return {
        success: result.success,
        message: result.success ? result.data : result.error || 'Vote failed'
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Vote failed'
      };
    }
  }

  // Get voter information
  async getVoter(address: string): Promise<Voter | null> {
    try {
      const response = await fetch(`${this.baseUrl}/voter/${address}`);
      const data = await response.json();
      return data.success ? data.data : null;
    } catch (error) {
      console.error('Failed to get voter:', error);
      return null;
    }
  }

  // Sign governance actions (would integrate with wallet)
  signGovernanceAction(action: string, data: any, privateKey?: string): string {
    // MARKER: Placeholder for cryptographic signing
    // In production, this would use the user's wallet/private key
    // For now, return a mock signature
    const message = JSON.stringify({ action, data, timestamp: Date.now() });
    // This would be replaced with actual Ed25519 signing
    return `mock_signature_${Date.now()}`;
  }
}

// Create global instance
export const blockchainService = new BlockchainService();

// MARKER: React hooks for blockchain integration
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useBlockchainHealth = () => {
  return useQuery({
    queryKey: ['blockchain-health'],
    queryFn: () => blockchainService.getHealth(),
    refetchInterval: 30000, // Check every 30 seconds
  });
};

export const useProposals = () => {
  return useQuery({
    queryKey: ['proposals'],
    queryFn: () => blockchainService.getProposals(),
    refetchInterval: 10000, // Refresh every 10 seconds
  });
};

export const useCreateProposal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockchainService.createProposal,
    onSuccess: () => {
      // Invalidate and refetch proposals
      queryClient.invalidateQueries({ queryKey: ['proposals'] });
    },
  });
};

export const useCastVote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blockchainService.castVote,
    onSuccess: () => {
      // Invalidate and refetch proposals
      queryClient.invalidateQueries({ queryKey: ['proposals'] });
    },
  });
};

export const useVoter = (address: string) => {
  return useQuery({
    queryKey: ['voter', address],
    queryFn: () => blockchainService.getVoter(address),
    enabled: !!address,
  });
};

// MARKER: Wallet Integration Utilities
export class WalletIntegration {
  // Check if MetaMask or similar wallet is available
  static isWalletAvailable(): boolean {
    return typeof window !== 'undefined' &&
           (window as any).ethereum !== undefined;
  }

  // Request wallet connection
  static async connectWallet(): Promise<string | null> {
    if (!this.isWalletAvailable()) {
      throw new Error('No Ethereum wallet detected');
    }

    try {
      const accounts = await (window as any).ethereum.request({
        method: 'eth_requestAccounts'
      });
      return accounts[0] || null;
    } catch (error) {
      throw new Error('Failed to connect wallet: ' + (error as Error).message);
    }
  }

  // Sign a message for governance actions
  static async signMessage(message: string): Promise<string> {
    if (!this.isWalletAvailable()) {
      throw new Error('No Ethereum wallet available');
    }

    try {
      const accounts = await (window as any).ethereum.request({
        method: 'eth_requestAccounts'
      });
      const account = accounts[0];

      const signature = await (window as any).ethereum.request({
        method: 'personal_sign',
        params: [message, account],
      });

      return signature;
    } catch (error) {
      throw new Error('Failed to sign message: ' + (error as Error).message);
    }
  }

  // Get current connected account
  static async getConnectedAccount(): Promise<string | null> {
    if (!this.isWalletAvailable()) {
      return null;
    }

    try {
      const accounts = await (window as any).ethereum.request({
        method: 'eth_accounts'
      });
      return accounts[0] || null;
    } catch (error) {
      return null;
    }
  }
}

// MARKER: Integration with dashboard voting buttons
export const integrateProposalsWithBlockchain = async () => {
  // This function would be called from the dashboard to replace
  // the current mock voting with real blockchain integration

  console.log('🔗 Blockchain integration ready!');
  console.log('📊 Loading proposals from privacy blockchain...');

  const health = await blockchainService.getHealth();
  if (health.success) {
    console.log('✅ Blockchain service connected');
  } else {
    console.log('⚠️ Blockchain service not available');
  }
};
