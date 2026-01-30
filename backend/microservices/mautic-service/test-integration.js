/**
 * Test script for Mautic newsletter integration
 * Run with: node test-integration.js
 */

const axios = require('axios');

const MAILERLITE_SERVICE_URL = 'http://localhost:8000';
const AUTH_SERVICE_URL = 'http://localhost:3001';

async function testMailerLiteService() {
  console.log('Testing MailerLite Service Integration...\n');

  try {
    // Test 1: Health check
    console.log('1. Testing MailerLite service health...');
    const healthResponse = await axios.get(`${MAILERLITE_SERVICE_URL}/api/health`);
    console.log('✓ MailerLite service is healthy:', healthResponse.data);

    // Test 2: Test subscriber creation
    console.log('\n2. Testing subscriber creation...');
    const testEmail = `test${Date.now()}@example.com`;
    const subscriberResponse = await axios.post(`${MAILERLITE_SERVICE_URL}/api/subscribers`, {
      email: testEmail,
      fields: {
        name: 'Test User',
        subscription_status: 'pending'
      }
    });
    console.log('✓ Subscriber created:', subscriberResponse.data);

    // Test 3: Test subscriber retrieval
    console.log('\n3. Testing subscriber retrieval...');
    const getSubscriberResponse = await axios.get(`${MAILERLITE_SERVICE_URL}/api/subscribers/email/${testEmail}`);
    console.log('✓ Subscriber retrieved:', getSubscriberResponse.data);

    // Test 4: Test newsletter subscription via auth service
    console.log('\n4. Testing newsletter subscription via auth service...');
    const subscribeResponse = await axios.post(`${AUTH_SERVICE_URL}/api/newsletter/subscribe`, {
      email: `subscriber${Date.now()}@example.com`
    });
    console.log('✓ Newsletter subscription initiated:', subscribeResponse.data);

    console.log('\n✅ All tests passed! MailerLite integration is working.');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
    process.exit(1);
  }
}

// Run tests
testMailerLiteService();