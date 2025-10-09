const fetch = require('node-fetch');

async function testAuthService() {
  try {
    // Test health endpoint
    console.log('Testing health endpoint...');
    const healthResponse = await fetch('http://localhost:3001/health');
    
    if (!healthResponse.ok) {
      console.error('Health check failed:', healthResponse.status, healthResponse.statusText);
      return;
    }
    
    const healthData = await healthResponse.json();
    console.log('Health check response:', healthData);
    
    // Test registration
    console.log('\nTesting registration endpoint...');
    const registerResponse = await fetch('http://localhost:3001/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
      }),
    });
    
    console.log('Registration status:', registerResponse.status);
    
    try {
      const registerData = await registerResponse.json();
      console.log('Registration response:', registerData);
    } catch (e) {
      console.error('Failed to parse registration response:', e);
      const text = await registerResponse.text();
      console.log('Raw response:', text);
    }
    
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testAuthService();