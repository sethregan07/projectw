/**
 * MailerLite Service Microservice
 *
 * This service provides integration with MailerLite email marketing platform.
 * It handles subscriber management and newsletter functionality.
 *
 * Features:
 * - Subscriber management via MailerLite API
 * - Newsletter campaign management
 * - Automated email sending
 */

const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// MailerLite API configuration
const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_BASE_URL = 'https://api.mailerlite.com/api/v2';

/**
 * Make authenticated request to MailerLite API
 */
async function mailerliteRequest(method, endpoint, data = null) {
  const config = {
    method,
    url: `${MAILERLITE_BASE_URL}${endpoint}`,
    headers: {
      'X-MailerLite-ApiKey': MAILERLITE_API_KEY,
      'Content-Type': 'application/json'
    }
  };

  if (data) {
    config.data = data;
  }

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(`MailerLite API request failed: ${method} ${endpoint}`, error.response?.data || error.message);
    throw error;
  }
}

// Health check endpoint
app.get('/api/health', async (req, res) => {
  try {
    // Test MailerLite connection by getting groups
    await mailerliteRequest('GET', '/groups');
    res.json({ status: 'ok', service: 'mailerlite-service' });
  } catch (error) {
    res.status(503).json({ status: 'error', service: 'mailerlite-service', message: error.message });
  }
});

// Get subscriber by email
app.get('/api/subscribers/email/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const subscriber = await mailerliteRequest('GET', `/subscribers/${encodeURIComponent(email)}`);
    res.json(subscriber);
  } catch (error) {
    if (error.response?.status === 404) {
      res.status(404).json({ message: 'Subscriber not found' });
    } else {
      console.error('Error fetching subscriber:', error);
      res.status(500).json({ message: 'Error fetching subscriber' });
    }
  }
});

// Create or update subscriber
app.post('/api/subscribers', async (req, res) => {
  try {
    const subscriberData = req.body;

    if (!subscriberData.email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // MailerLite API for creating/updating subscribers
    const result = await mailerliteRequest('POST', '/subscribers', subscriberData);
    res.json(result);
  } catch (error) {
    console.error('Error creating/updating subscriber:', error);
    res.status(500).json({ message: 'Error creating/updating subscriber' });
  }
});

// Get groups (lists)
app.get('/api/groups', async (req, res) => {
  try {
    const groups = await mailerliteRequest('GET', '/groups');
    res.json(groups);
  } catch (error) {
    console.error('Error fetching groups:', error);
    res.status(500).json({ message: 'Error fetching groups' });
  }
});

// Create campaign
app.post('/api/campaigns', async (req, res) => {
  try {
    const campaignData = req.body;
    const result = await mailerliteRequest('POST', '/campaigns', campaignData);
    res.json(result);
  } catch (error) {
    console.error('Error creating campaign:', error);
    res.status(500).json({ message: 'Error creating campaign' });
  }
});

// Newsletter-specific endpoints

// Send newsletter verification email
app.post('/api/newsletter/send-verification', async (req, res) => {
  try {
    const { email: subscriberEmail, verificationToken, verificationUrl } = req.body;

    if (!subscriberEmail || !verificationToken || !verificationUrl) {
      return res.status(400).json({ message: 'Email, verification token, and URL are required' });
    }

    // Create subscriber in MailerLite with pending status
    const subscriberData = {
      email: subscriberEmail,
      fields: {
        verification_token: verificationToken,
        verification_url: verificationUrl
      },
      groups: [] // Add to newsletter group if needed
    };

    try {
      const subscriber = await mailerliteRequest('POST', '/subscribers', subscriberData);

      // For MailerLite, we need to create a campaign to send the verification email
      // Since MailerLite doesn't have direct transactional emails, we'll use automation or campaigns
      // For now, return success and note that email sending needs to be configured in MailerLite dashboard

      res.json({
        success: true,
        message: 'Subscriber added to MailerLite. Configure automation in MailerLite dashboard to send verification emails.',
        subscriberId: subscriber.id
      });
    } catch (subscriberError) {
      if (subscriberError.response?.status === 409) {
        // Subscriber already exists
        res.json({
          success: true,
          message: 'Subscriber already exists in MailerLite. Verification email should be sent via automation.'
        });
      } else {
        throw subscriberError;
      }
    }
  } catch (error) {
    console.error('Error adding subscriber to MailerLite:', error);
    res.status(500).json({ message: 'Error adding subscriber to MailerLite' });
  }
});

// Confirm newsletter subscription
app.post('/api/newsletter/confirm-subscription', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Update subscriber fields to mark as verified
    const updateData = {
      fields: {
        subscription_status: 'verified',
        verified_at: new Date().toISOString()
      }
    };

    await mailerliteRequest('PUT', `/subscribers/${encodeURIComponent(email)}`, updateData);

    res.json({ success: true, message: 'Subscription confirmed successfully' });
  } catch (error) {
    console.error('Error confirming subscription:', error);
    res.status(500).json({ message: 'Error confirming subscription' });
  }
});

// Unsubscribe from newsletter
app.post('/api/newsletter/unsubscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Update subscriber to mark as unsubscribed
    const updateData = {
      fields: {
        subscription_status: 'unsubscribed',
        unsubscribed_at: new Date().toISOString()
      },
      type: 'unsubscribed' // MailerLite unsubscribed status
    };

    await mailerliteRequest('PUT', `/subscribers/${encodeURIComponent(email)}`, updateData);

    res.json({ success: true, message: 'Unsubscribed successfully' });
  } catch (error) {
    console.error('Error unsubscribing:', error);
    res.status(500).json({ message: 'Error unsubscribing' });
  }
});

// Sync newsletter subscribers from auth service
app.post('/api/newsletter/sync-subscribers', async (req, res) => {
  try {
    const { subscribers } = req.body;

    if (!Array.isArray(subscribers)) {
      return res.status(400).json({ message: 'Subscribers array is required' });
    }

    const results = {
      synced: 0,
      failed: 0,
      errors: []
    };

    for (const subscriber of subscribers) {
      try {
        const { email, subscription_status, verified_at, subscribed_at } = subscriber;

        // Prepare subscriber data for MailerLite
        const subscriberData = {
          email: email,
          fields: {
            subscription_status: subscription_status,
            subscribed_at: subscribed_at,
            verified_at: verified_at
          },
          type: subscription_status === 'unsubscribed' ? 'unsubscribed' : 'active'
        };

        // Try to create/update subscriber
        try {
          await mailerliteRequest('POST', '/subscribers', subscriberData);
        } catch (createError) {
          if (createError.response?.status === 409) {
            // Subscriber exists, update instead
            await mailerliteRequest('PUT', `/subscribers/${encodeURIComponent(email)}`, subscriberData);
          } else {
            throw createError;
          }
        }

        results.synced++;
      } catch (error) {
        console.error(`Failed to sync subscriber ${subscriber.email}:`, error.message);
        results.failed++;
        results.errors.push({
          email: subscriber.email,
          error: error.message
        });
      }
    }

    res.json({
      success: true,
      message: `Synced ${results.synced} subscribers, ${results.failed} failed`,
      results
    });
  } catch (error) {
    console.error('Error syncing subscribers:', error);
    res.status(500).json({ message: 'Error syncing subscribers' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`MailerLite service running on port ${PORT}`);
});

module.exports = app;