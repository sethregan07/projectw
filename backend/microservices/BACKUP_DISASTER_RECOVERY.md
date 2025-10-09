# Backup and Disaster Recovery Plan

This document outlines the comprehensive backup and disaster recovery procedures for our microservices architecture deployed across multiple VPS providers and regions.

## Backup Strategy

### Database Backups

| Database | Backup Frequency | Retention Period | Storage Location |
|----------|------------------|------------------|------------------|
| Auth DB | Hourly | 24 hours | Primary region |
| Auth DB | Daily | 7 days | All regions |
| Auth DB | Weekly | 30 days | All regions + encrypted offsite |
| Ghost DB | Hourly | 24 hours | Primary region |
| Ghost DB | Daily | 7 days | All regions |
| Ghost DB | Weekly | 30 days | All regions + encrypted offsite |
| Mautic DB | Daily | 7 days | Primary region |
| Mautic DB | Weekly | 30 days | All regions + encrypted offsite |
| Analytics DB | Daily | 30 days | Region-specific only |

### File System Backups

| Content | Backup Frequency | Retention Period | Storage Location |
|---------|------------------|------------------|------------------|
| Ghost content | Daily | 30 days | All regions + encrypted offsite |
| Mautic assets | Daily | 30 days | All regions + encrypted offsite |
| User uploads | Real-time | 90 days | Primary region + encrypted offsite |
| Configuration files | On change | 10 versions | All regions + encrypted offsite |
| Logs | Daily | 90 days | Region-specific + encrypted offsite |

### Blockchain Data

| Content | Backup Frequency | Retention Period | Storage Location |
|---------|------------------|------------------|------------------|
| Blockchain state | Hourly | 7 days | All regions |
| Wallet backups | Daily | Indefinite | Encrypted offsite (multiple locations) |
| Smart contracts | On deployment | All versions | All regions + encrypted offsite |

## Backup Implementation

### Database Backup Process

1. **PostgreSQL Streaming Replication**:
   - Continuous replication between primary and standby nodes
   - WAL (Write-Ahead Log) archiving for point-in-time recovery

2. **Logical Backups**:
   - `pg_dump` for schema and data backups
   - Compression and encryption of backup files
   - Integrity verification with checksums

3. **Backup Automation**:
   - Scheduled via cron jobs
   - Monitored via Prometheus alerts
   - Automated testing of backup integrity

### File System Backup Process

1. **Incremental Backups**:
   - rsync for efficient incremental backups
   - Compression and encryption of backup files
   - Metadata preservation

2. **Object Storage Integration**:
   - Automatic upload to S3-compatible storage
   - Versioning enabled for accidental deletion protection
   - Cross-region replication

3. **Cold Storage**:
   - Critical data archived to cold storage
   - Quarterly verification of cold storage integrity
   - Geographic distribution of cold storage

## Disaster Recovery Procedures

### Scenario 1: Single Service Failure

1. **Detection**:
   - Monitoring alerts via Prometheus/Grafana
   - Health check failures
   - Error rate threshold exceeded

2. **Response**:
   - Automatic restart of failed service
   - If restart fails, deploy new instance from image
   - Route traffic to healthy instance

3. **Recovery**:
   - Investigate root cause
   - Apply fixes
   - Update service images
   - Verify service health

### Scenario 2: Database Failure

1. **Detection**:
   - Database connectivity monitoring
   - Query performance degradation
   - Replication lag alerts

2. **Response**:
   - Promote standby to primary
   - Redirect application connections
   - Provision new standby

3. **Recovery**:
   - Restore failed database from backup if needed
   - Re-establish replication
   - Verify data integrity
   - Return to normal operation when safe

### Scenario 3: Region Failure

1. **Detection**:
   - Multiple service failures in same region
   - Network connectivity issues
   - Provider status page alerts

2. **Response**:
   - Activate global DNS failover
   - Route traffic to healthy regions
   - Notify operations team

3. **Recovery**:
   - Once region is available, restore services from backups
   - Verify data integrity and synchronization
   - Gradually return traffic to recovered region
   - Update documentation with lessons learned

### Scenario 4: Catastrophic Multi-Region Failure

1. **Detection**:
   - Multiple region failures
   - Global service degradation
   - External monitoring alerts

2. **Response**:
   - Activate emergency response team
   - Deploy emergency infrastructure in unaffected regions
   - Restore from offsite backups
   - Implement minimal viable services

3. **Recovery**:
   - Prioritize critical services restoration
   - Communicate status to users
   - Gradually rebuild full infrastructure
   - Conduct post-mortem analysis

## VPS Cloning and Disaster Recovery Script

We've implemented an automated VPS cloning and disaster recovery script that can quickly provision new instances across different providers. See [vps_disaster_recovery.sh](../scripts/vps_disaster_recovery.sh) for implementation details.

Key features:
- Cross-provider compatibility (works with Hetzner, DigitalOcean, Linode, Vultr)
- Automated provisioning of new instances
- Configuration synchronization
- Data restoration from backups
- Health verification
- DNS updates

## Testing and Verification

### Regular Testing Schedule

| Test Type | Frequency | Scope |
|-----------|-----------|-------|
| Backup restoration | Weekly | Random service, random backup |
| Failover testing | Monthly | Simulated service failure |
| Region recovery | Quarterly | Simulated region failure |
| Full DR test | Bi-annually | Complete recovery from backups |

### Verification Procedures

1. **Backup Integrity**:
   - Automated verification after each backup
   - Random restoration tests
   - Data consistency checks

2. **Recovery Time Objectives (RTO)**:
   - Single service: < 5 minutes
   - Database: < 15 minutes
   - Region: < 1 hour
   - Catastrophic: < 24 hours

3. **Recovery Point Objectives (RPO)**:
   - Authentication data: < 5 minutes
   - Transaction data: < 5 minutes
   - Content data: < 1 hour
   - Analytics data: < 24 hours

## Documentation and Training

1. **Documentation Requirements**:
   - Step-by-step recovery procedures
   - Contact information for responsible personnel
   - Access credentials (stored securely)
   - External dependencies and contacts

2. **Training Program**:
   - Quarterly DR training for all operations staff
   - Hands-on recovery exercises
   - Role-playing for emergency scenarios
   - Post-exercise debriefing and improvement

## Privacy and Security Considerations

1. **Encryption**:
   - All backups encrypted at rest
   - Different encryption keys for different data categories
   - Key rotation schedule
   - Secure key management

2. **Access Control**:
   - Strict access controls for backup systems
   - Multi-factor authentication for recovery procedures
   - Audit logging of all backup and recovery operations
   - Regular access review

3. **Data Sovereignty**:
   - Region-specific data remains in region
   - Compliance with local data protection laws
   - Documentation of data flows during recovery

## Continuous Improvement

1. **Metrics Collection**:
   - Backup success rate
   - Backup completion time
   - Recovery time measurements
   - Data integrity verification results

2. **Review Process**:
   - Monthly review of backup metrics
   - Quarterly review of recovery tests
   - Annual comprehensive DR plan review
   - Post-incident analysis and plan updates

3. **Automation Improvements**:
   - Ongoing development of recovery automation
   - Integration with infrastructure as code
   - Chaos engineering implementation

## Appendices

### A. Recovery Checklists

Detailed step-by-step checklists for common recovery scenarios:
- Single service recovery
- Database recovery
- Region recovery
- Full system recovery

### B. Contact Information

Emergency contacts for:
- Internal response team
- VPS providers
- Domain registrar
- External dependencies

### C. External Dependencies

List of external services and their impact on recovery:
- DNS providers
- CDN services
- Payment processors
- Email delivery services

### D. Backup Storage Locations

Detailed information about backup storage:
- Primary storage locations
- Secondary storage locations
- Cold storage locations
- Access procedures