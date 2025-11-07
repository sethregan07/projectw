/**
 * Newsletter API client
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface NewsletterSubscriptionResponse {
  message: string;
  verificationUrl?: string;
}

export interface NewsletterStatusResponse {
  subscribed: boolean;
  status: string;
  subscribedAt?: string;
  verifiedAt?: string;
}

/**
 * Subscribe to newsletter
 */
export async function subscribeToNewsletter(email: string): Promise<NewsletterSubscriptionResponse> {
  const response = await fetch(`${API_BASE_URL}/api/newsletter/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to subscribe to newsletter');
  }

  return response.json();
}

/**
 * Verify newsletter subscription
 */
export async function verifyNewsletterSubscription(token: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/newsletter/verify/${token}`, {
    method: 'GET',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to verify subscription');
  }
}

/**
 * Unsubscribe from newsletter
 */
export async function unsubscribeFromNewsletter(email: string): Promise<{ message: string }> {
  const response = await fetch(`${API_BASE_URL}/api/newsletter/unsubscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to unsubscribe from newsletter');
  }

  return response.json();
}

/**
 * Get newsletter subscription status (requires authentication)
 */
export async function getNewsletterStatus(token?: string): Promise<NewsletterStatusResponse> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}/api/newsletter/status`, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to get newsletter status');
  }

  return response.json();
}
