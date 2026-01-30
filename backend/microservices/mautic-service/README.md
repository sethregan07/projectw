# MailerLite Newsletter Integration

This service provides integration between your application and MailerLite for newsletter management.

## Setup

1. **Environment Variable**: Set your MailerLite API key
   ```bash
   export MAILERLITE_API_KEY="your-mailerlite-api-key"
   ```

2. **Start the Service**:
   ```bash
   cd backend/microservices
   docker-compose up -d mailerlite-service
   ```

## API Endpoints

### Health Check
```
GET /api/health
```
Returns service health status.

### Subscriber Management
```
GET /api/subscribers/email/:email
POST /api/subscribers
```
Manage subscribers in MailerLite.

### Groups (Lists)
```
GET /api/groups
```
Retrieve available subscriber groups.

### Newsletter Operations
```
POST /api/newsletter/send-verification
POST /api/newsletter/confirm-subscription
POST /api/newsletter/unsubscribe
POST /api/newsletter/sync-subscribers
```
Handle newsletter subscriptions and verification.

## Testing

Run the integration tests:
```bash
cd backend/microservices/mautic-service
npm test
```

## MailerLite Dashboard Setup

1. **Create Groups**: Set up subscriber groups/lists in MailerLite
2. **Automation Workflows**: Configure automations for:
   - Welcome emails for new subscribers
   - Verification email sending
   - Regular newsletter campaigns
3. **Campaigns**: Create email campaigns for newsletters

## Integration Flow

1. User subscribes via your app
2. Subscriber is added to MailerLite with "pending" status
3. Verification email is sent via MailerLite automation
4. User clicks verification link
5. Subscriber status updated to "active" in MailerLite
6. User can receive newsletters and campaigns

## API Key Security

- Store the API key securely as an environment variable
- Never commit API keys to version control
- Rotate API keys regularly for security