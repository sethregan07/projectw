"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react"

export default function SecurityPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const securityMetrics = {
    uptime: 99.97,
    threatsBlocked: 2470000,
    responseTime: 2.3,
    encryptionStrength: "AES-256",
    activeNodes: 1247,
    securityScore: 98
  }

  const securityLayers = [
    {
      layer: "Network Security",
      description: "Protecting the underlying network infrastructure",
      technologies: ["DDoS Protection", "Web Application Firewall", "Network Segmentation", "Zero Trust Architecture"],
      status: "Active",
      icon: "🌐"
    },
    {
      layer: "Application Security",
      description: "Securing applications and user interfaces",
      technologies: ["Input Validation", "Secure Coding", "API Security", "Authentication & Authorization"],
      status: "Active",
      icon: "🛡️"
    },
    {
      layer: "Data Security",
      description: "Protecting sensitive data and privacy",
      technologies: ["End-to-End Encryption", "Data Classification", "Access Controls", "Audit Logging"],
      status: "Active",
      icon: "🔒"
    },
    {
      layer: "Identity Security",
      description: "Managing digital identities and access",
      technologies: ["Multi-Factor Authentication", "Biometric Verification", "Decentralized Identity", "Session Management"],
      status: "Active",
      icon: "👤"
    }
  ]

  const threatIntelligence = [
    {
      type: "DDoS Attacks",
      severity: "High",
      incidents: 23,
      mitigated: 23,
      trend: "Decreasing",
      lastIncident: "2024-01-15"
    },
    {
      type: "Phishing Attempts",
      severity: "Medium",
      incidents: 156,
      mitigated: 154,
      trend: "Stable",
      lastIncident: "2024-01-18"
    },
    {
      type: "Malware Infections",
      severity: "Low",
      incidents: 3,
      mitigated: 3,
      trend: "Decreasing",
      lastIncident: "2024-01-08"
    },
    {
      type: "Unauthorized Access",
      severity: "Medium",
      incidents: 67,
      mitigated: 65,
      trend: "Stable",
      lastIncident: "2024-01-20"
    }
  ]

  const securityProtocols = [
    {
      protocol: "Zero Trust Architecture",
      description: "Never trust, always verify - every access request is authenticated and authorized",
      implementation: "All network access requires continuous verification",
      compliance: 100
    },
    {
      protocol: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using military-grade encryption",
      implementation: "AES-256 encryption for all communications and storage",
      compliance: 100
    },
    {
      protocol: "Multi-Signature Security",
      description: "Critical operations require multiple approvals to prevent single points of failure",
      implementation: "3-of-5 multi-signature for treasury operations",
      compliance: 100
    },
    {
      protocol: "Regular Security Audits",
      description: "Independent security audits conducted quarterly by certified professionals",
      implementation: "Automated and manual security assessments",
      compliance: 100
    }
  ]

  const incidentResponse = {
    phases: [
      {
        phase: "Detection",
        description: "Automated monitoring and anomaly detection systems",
        time: "< 5 minutes",
        tools: ["SIEM", "Intrusion Detection", "Log Analysis"]
      },
      {
        phase: "Assessment",
        description: "Rapid evaluation of threat severity and impact",
        time: "< 15 minutes",
        tools: ["Threat Intelligence", "Impact Analysis", "Risk Assessment"]
      },
      {
        phase: "Containment",
        description: "Isolate affected systems and prevent spread",
        time: "< 30 minutes",
        tools: ["Network Segmentation", "Access Controls", "Isolation Protocols"]
      },
      {
        phase: "Recovery",
        description: "Restore systems and validate security",
        time: "< 2 hours",
        tools: ["Backup Restoration", "System Validation", "Security Testing"]
      }
    ],
    successRate: 99.7,
    averageResolutionTime: "1.2 hours"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-foreground mb-6">Security & Defense</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our digital sovereignty depends on robust security. We employ military-grade
              protection, proactive defense strategies, and continuous monitoring to safeguard our network state.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Security Dashboard</Button>
              <Button size="lg" variant="outline">
                Report Vulnerability
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <TabsRoot value={activeTab} onValueChange={(details) => setActiveTab(details.value)}>
          <TabsList className="mb-12">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="threats">Threat Intelligence</TabsTrigger>
            <TabsTrigger value="protocols">Security Protocols</TabsTrigger>
            <TabsTrigger value="response">Incident Response</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{securityMetrics.uptime}%</div>
                  <p className="text-xs text-muted-foreground">
                    99.97% uptime this month
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Threats Blocked</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{(securityMetrics.threatsBlocked / 1000000).toFixed(1)}M</div>
                  <p className="text-xs text-muted-foreground">
                    Threats mitigated this year
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Response Time</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{securityMetrics.responseTime}m</div>
                  <p className="text-xs text-muted-foreground">
                    Average incident response
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Security Score</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">{securityMetrics.securityScore}/100</div>
                  <p className="text-xs text-muted-foreground">
                    Overall security rating
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Security Architecture</CardTitle>
                  <CardDescription>Multi-layered defense strategy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {securityLayers.map((layer, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-2xl">{layer.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{layer.layer}</h4>
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            {layer.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{layer.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {layer.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Principles</CardTitle>
                  <CardDescription>Core security philosophy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Defense in Depth</h4>
                      <p className="text-sm text-muted-foreground">Multiple security layers ensure no single point of failure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Zero Trust</h4>
                      <p className="text-sm text-muted-foreground">Never trust, always verify - continuous authentication required</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Proactive Defense</h4>
                      <p className="text-sm text-muted-foreground">Threat hunting and prevention rather than reactive responses</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Transparency</h4>
                      <p className="text-sm text-muted-foreground">Open security practices and regular public audits</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="threats">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Threat Intelligence</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Real-time monitoring and analysis of security threats targeting our network state.
                  Our advanced threat intelligence system provides proactive defense capabilities.
                </p>
              </div>

              <div className="grid gap-6">
                {threatIntelligence.map((threat, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{threat.type}</h3>
                            <Badge className={
                              threat.severity === 'High' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                              threat.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                              'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            }>
                              {threat.severity} Risk
                            </Badge>
                          </div>
                          <div className="grid md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Incidents:</span>
                              <div className="font-semibold">{threat.incidents}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Mitigated:</span>
                              <div className="font-semibold text-green-600">{threat.mitigated}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Trend:</span>
                              <div className={`font-semibold ${
                                threat.trend === 'Decreasing' ? 'text-green-600' :
                                threat.trend === 'Stable' ? 'text-blue-600' : 'text-red-600'
                              }`}>
                                {threat.trend}
                              </div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Last Incident:</span>
                              <div className="font-semibold">{threat.lastIncident}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          Mitigation Rate: {((threat.mitigated / threat.incidents) * 100).toFixed(1)}%
                        </div>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Threat Intelligence Network</CardTitle>
                  <CardDescription>Global collaboration for threat detection and prevention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Intelligence Sources</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Global threat intelligence feeds</li>
                        <li>• Dark web monitoring</li>
                        <li>• Honeypot network analysis</li>
                        <li>• Citizen security reports</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Automated Response</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• AI-powered threat detection</li>
                        <li>• Automated mitigation rules</li>
                        <li>• Predictive threat modeling</li>
                        <li>• Real-time signature updates</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="protocols">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Security Protocols</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive security protocols that protect our digital infrastructure,
                  data, and citizens. Every protocol is regularly audited and updated.
                </p>
              </div>

              <div className="grid gap-6">
                {securityProtocols.map((protocol, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{protocol.protocol}</CardTitle>
                          <CardDescription className="mb-3">{protocol.description}</CardDescription>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Compliance:</span>
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                              {protocol.compliance}%
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-muted p-4 rounded-md">
                        <h4 className="font-semibold mb-2">Implementation</h4>
                        <p className="text-sm text-muted-foreground">{protocol.implementation}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Security Audits & Compliance</CardTitle>
                  <CardDescription>Regular independent verification of our security measures</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                      <div className="text-sm text-muted-foreground">Quarterly Audits</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                      <div className="text-sm text-muted-foreground">Compliance Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">47</div>
                      <div className="text-sm text-muted-foreground">Security Researchers</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="response">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Incident Response</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our incident response system ensures rapid detection, assessment, and resolution
                  of security incidents. Every team member is trained in incident response protocols.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                    </div>
                    <CardTitle className="text-lg">Detection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Automated monitoring and anomaly detection systems
                    </p>
                    <div className="text-2xl font-bold text-blue-600">{incidentResponse.phases[0].time}</div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                    </div>
                    <CardTitle className="text-lg">Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Rapid evaluation of threat severity and impact
                    </p>
                    <div className="text-2xl font-bold text-green-600">{incidentResponse.phases[1].time}</div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                    </div>
                    <CardTitle className="text-lg">Containment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Isolate affected systems and prevent spread
                    </p>
                    <div className="text-2xl font-bold text-purple-600">{incidentResponse.phases[2].time}</div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-orange-600 dark:text-orange-400 font-bold">4</span>
                    </div>
                    <CardTitle className="text-lg">Recovery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">
                      Restore systems and validate security
                    </p>
                    <div className="text-2xl font-bold text-orange-600">{incidentResponse.phases[3].time}</div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Response Metrics</CardTitle>
                    <CardDescription>Incident response performance indicators</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Success Rate</span>
                      <span className="font-semibold text-green-600">{incidentResponse.successRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Avg Resolution Time</span>
                      <span className="font-semibold">{incidentResponse.averageResolutionTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">False Positives</span>
                      <span className="font-semibold text-green-600">{"< 0.1%"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Team Readiness</span>
                      <span className="font-semibold text-green-600">100%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                  <CardTitle>Emergency Contacts</CardTitle>
                  <CardDescription>24/7 security incident reporting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center text-sm font-semibold text-red-600 dark:text-red-400">🚨</div>
                      <div>
                        <h4 className="font-semibold">Security Emergency</h4>
                        <p className="text-sm text-muted-foreground">security@networkstate.org</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400">💬</div>
                      <div>
                        <h4 className="font-semibold">Incident Hotline</h4>
                        <p className="text-sm text-muted-foreground">+1 (555) 0123</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center text-sm font-semibold text-green-600 dark:text-green-400">🔐</div>
                      <div>
                        <h4 className="font-semibold">Encryption Issues</h4>
                        <p className="text-sm text-muted-foreground">encryption@networkstate.org</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Post-Incident Analysis</CardTitle>
                <CardDescription>Learning from incidents to improve security</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Root Cause Analysis</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Detailed forensic investigation</li>
                      <li>• Timeline reconstruction</li>
                      <li>• Vulnerability assessment</li>
                      <li>• Impact analysis</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Preventive Measures</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Security control updates</li>
                      <li>• Process improvements</li>
                      <li>• Training enhancements</li>
                      <li>• System hardening</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            </div>
          </TabsContent>
        </TabsRoot>
      </div>
    </div>
  )
}