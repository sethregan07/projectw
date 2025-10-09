"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react"

export default function CitizenshipPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [showApplyModal, setShowApplyModal] = useState(false)

  const [applicationForm, setApplicationForm] = useState({
    fullName: "",
    email: "",
    country: "",
    reason: "",
    commitment: "",
  })

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Application submitted successfully! We'll review your application and get back to you within 7 days.`)
    setShowApplyModal(false)
    setApplicationForm({ fullName: "", email: "", country: "", reason: "", commitment: "" })
  }

  const citizenshipLevels = [
    {
      level: "Observer",
      description: "Passive participation and learning",
      requirements: ["Complete identity verification", "Agree to code of conduct"],
      rights: ["Access to public forums", "View governance proposals", "Receive newsletters"],
      responsibilities: ["Follow community guidelines", "Respect other members"],
      color: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
    },
    {
      level: "Citizen",
      description: "Active participation in governance",
      requirements: ["6 months as Observer", "Complete citizenship education", "Hold governance tokens"],
      rights: ["Vote on proposals", "Submit proposals", "Join working groups", "Access citizen-only resources"],
      responsibilities: ["Participate in governance", "Follow network state laws", "Contribute to community"],
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
      level: "Senior Citizen",
      description: "Leadership and mentorship roles",
      requirements: ["2 years as Citizen", "Leadership experience", "High participation rate"],
      rights: ["All Citizen rights", "Serve on committees", "Mentor new citizens", "Priority in decision-making"],
      responsibilities: ["Lead initiatives", "Mentor others", "Represent network state"],
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
    },
    {
      level: "Council Member",
      description: "Elected leadership positions",
      requirements: ["3 years as Senior Citizen", "Elected by citizens", "Demonstrated leadership"],
      rights: ["All Senior Citizen rights", "Executive decision-making", "Budget allocation authority"],
      responsibilities: ["Governance oversight", "Strategic planning", "Accountability to citizens"],
      color: "bg-gold-100 text-gold-800 dark:bg-gold-900/30 dark:text-gold-400"
    }
  ]

  const rightsAndResponsibilities = [
    {
      category: "Fundamental Rights",
      items: [
        "Freedom of expression within community guidelines",
        "Right to participate in governance decisions",
        "Access to network state services and resources",
        "Protection from discrimination and harassment",
        "Right to due process in disputes"
      ]
    },
    {
      category: "Digital Rights",
      items: [
        "Control over personal data and privacy",
        "Secure digital identity and authentication",
        "Access to decentralized services",
        "Right to digital property and assets",
        "Protection against cyber threats"
      ]
    },
    {
      category: "Responsibilities",
      items: [
        "Respect community standards and laws",
        "Participate actively in governance",
        "Contribute to network state development",
        "Protect fellow citizens' rights",
        "Maintain digital security practices"
      ]
    },
    {
      category: "Civic Duties",
      items: [
        "Stay informed about network state affairs",
        "Vote on important proposals",
        "Serve on juries when called",
        "Report security vulnerabilities",
        "Help onboard new citizens"
      ]
    }
  ]

  const citizenshipStats = {
    totalCitizens: 1247,
    newThisMonth: 89,
    activeParticipants: 892,
    countriesRepresented: 67,
    averageParticipation: 76
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-foreground mb-6">Digital Citizenship</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our network state as a digital citizen and become part of a new form of governance.
              Experience true democratic participation, digital sovereignty, and collective prosperity.
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => setShowApplyModal(true)}>
                Apply for Citizenship
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Apply for Digital Citizenship</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setShowApplyModal(false)}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              </div>
              <CardDescription>Begin your journey as a digital citizen</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleApply} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name *</label>
                  <Input
                    value={applicationForm.fullName}
                    onChange={(e) => setApplicationForm({ ...applicationForm, fullName: e.target.value })}
                    placeholder="Your full legal name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address *</label>
                  <Input
                    type="email"
                    value={applicationForm.email}
                    onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Country of Residence *</label>
                  <Input
                    value={applicationForm.country}
                    onChange={(e) => setApplicationForm({ ...applicationForm, country: e.target.value })}
                    placeholder="Your current country"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Why do you want to become a citizen? *</label>
                  <textarea
                    value={applicationForm.reason}
                    onChange={(e) => setApplicationForm({ ...applicationForm, reason: e.target.value })}
                    placeholder="Share your motivation and what you hope to contribute..."
                    className="w-full min-h-[80px] px-3 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Commitment Statement *</label>
                  <textarea
                    value={applicationForm.commitment}
                    onChange={(e) => setApplicationForm({ ...applicationForm, commitment: e.target.value })}
                    placeholder="How do you plan to contribute to our network state?"
                    className="w-full min-h-[80px] px-3 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-4">
                  <p className="text-sm text-blue-900 dark:text-blue-100">
                    <strong>Application Review:</strong> All applications are reviewed within 7 business days.
                    Successful applicants will receive an invitation to complete identity verification and citizenship education.
                  </p>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1">Submit Application</Button>
                  <Button type="button" variant="outline" onClick={() => setShowApplyModal(false)}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <TabsRoot value={activeTab} onValueChange={(details) => setActiveTab(details.value)}>
          <TabsList className="mb-12">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="levels">Citizenship Levels</TabsTrigger>
            <TabsTrigger value="rights">Rights & Duties</TabsTrigger>
            <TabsTrigger value="process">Application Process</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Citizens</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{citizenshipStats.totalCitizens.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    Active digital citizens
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">New This Month</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">+{citizenshipStats.newThisMonth}</div>
                  <p className="text-xs text-muted-foreground">
                    New citizens onboarded
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Countries</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{citizenshipStats.countriesRepresented}</div>
                  <p className="text-xs text-muted-foreground">
                    Countries represented
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Participation</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{citizenshipStats.averageParticipation}%</div>
                  <p className="text-xs text-muted-foreground">
                    Average participation rate
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>What is Digital Citizenship?</CardTitle>
                  <CardDescription>Understanding citizenship in the network state</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Digital Sovereignty</h4>
                      <p className="text-sm text-muted-foreground">Control over your digital identity and participation in governance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Global Community</h4>
                      <p className="text-sm text-muted-foreground">Connect with citizens worldwide in a borderless digital nation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Direct Democracy</h4>
                      <p className="text-sm text-muted-foreground">Participate directly in decisions that affect your digital life</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Citizenship Benefits</CardTitle>
                  <CardDescription>Advantages of becoming a digital citizen</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400">1</div>
                      <div>
                        <h4 className="font-semibold">Governance Rights</h4>
                        <p className="text-sm text-muted-foreground">Vote on proposals and shape network state policies</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center text-sm font-semibold text-green-600 dark:text-green-400">2</div>
                      <div>
                        <h4 className="font-semibold">Exclusive Services</h4>
                        <p className="text-sm text-muted-foreground">Access citizen-only resources and communities</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-600 dark:text-purple-400">3</div>
                      <div>
                        <h4 className="font-semibold">Economic Opportunities</h4>
                        <p className="text-sm text-muted-foreground">Participate in token economy and governance rewards</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="levels">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Citizenship Levels</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our citizenship system features progressive levels that reward active participation
                  and provide increasing levels of responsibility and influence.
                </p>
              </div>

              <div className="grid gap-6">
                {citizenshipLevels.map((level, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className={level.color}>{level.level}</Badge>
                            <span className="text-sm text-muted-foreground">Level {index + 1}</span>
                          </div>
                          <CardTitle className="text-xl mb-2">{level.level}</CardTitle>
                          <CardDescription className="mb-4">{level.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">Requirements</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {level.requirements.map((req, idx) => (
                              <li key={idx}>• {req}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Rights</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {level.rights.map((right, idx) => (
                              <li key={idx}>• {right}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">Responsibilities</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {level.responsibilities.map((resp, idx) => (
                              <li key={idx}>• {resp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Level Progression</CardTitle>
                  <CardDescription>How citizens advance through levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Advancement Criteria</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Consistent participation in governance</li>
                        <li>• Completion of education modules</li>
                        <li>• Positive community contributions</li>
                        <li>• Time-based requirements</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Benefits of Advancement</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Increased voting power and influence</li>
                        <li>• Access to leadership opportunities</li>
                        <li>• Enhanced governance rewards</li>
                        <li>• Recognition and prestige</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rights">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Rights & Responsibilities</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Digital citizenship comes with both rights and responsibilities.
                  Understanding and upholding these principles ensures a healthy, thriving network state.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {rightsAndResponsibilities.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                      <CardDescription>
                        {category.category.includes('Rights') ? 'What citizens are entitled to' :
                         category.category.includes('Responsibilities') ? 'What citizens must uphold' :
                         'Civic duties and obligations'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              category.category.includes('Rights') ? 'bg-blue-600' :
                              category.category.includes('Responsibilities') ? 'bg-orange-600' :
                              'bg-purple-600'
                            }`} />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Legal Framework</CardTitle>
                  <CardDescription>The foundation of our digital citizenship system</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Constitutional Principles</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Digital sovereignty and self-determination</li>
                        <li>• Democratic governance and participation</li>
                        <li>• Protection of individual rights and freedoms</li>
                        <li>• Sustainable development and prosperity</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Enforcement Mechanisms</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Community arbitration for disputes</li>
                        <li>• Automated compliance monitoring</li>
                        <li>• Progressive accountability measures</li>
                        <li>• Right to appeal decisions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="process">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Citizenship Application Process</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Becoming a digital citizen is a meaningful commitment. Our thorough application process
                  ensures that all citizens are committed to our shared values and ready to contribute.
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                    </div>
                    <CardTitle className="text-lg">Application</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Submit your application with personal information and motivation statement
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-green-600 dark:text-green-400 font-bold">2</span>
                    </div>
                    <CardTitle className="text-lg">Review</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Citizenship committee reviews your application within 7 business days
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
                    </div>
                    <CardTitle className="text-lg">Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Complete citizenship education modules and demonstrate understanding
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-orange-600 dark:text-orange-400 font-bold">4</span>
                    </div>
                    <CardTitle className="text-lg">Activation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Receive digital citizenship credentials and begin participating
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Application Requirements</CardTitle>
                    <CardDescription>What we look for in applicants</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Commitment to Values</h4>
                        <p className="text-sm text-muted-foreground">Demonstrated alignment with network state principles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Community Mindset</h4>
                        <p className="text-sm text-muted-foreground">Interest in collaborative problem-solving</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Digital Literacy</h4>
                        <p className="text-sm text-muted-foreground">Basic understanding of blockchain and web3 concepts</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Support & Resources</CardTitle>
                    <CardDescription>Help throughout your citizenship journey</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400">?</div>
                        <div>
                          <h4 className="font-semibold">FAQ & Guides</h4>
                          <p className="text-sm text-muted-foreground">Comprehensive guides and answers to common questions</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center text-sm font-semibold text-green-600 dark:text-green-400">👥</div>
                        <div>
                          <h4 className="font-semibold">Mentorship Program</h4>
                          <p className="text-sm text-muted-foreground">Connect with experienced citizens for guidance</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-600 dark:text-purple-400">💬</div>
                        <div>
                          <h4 className="font-semibold">Community Support</h4>
                          <p className="text-sm text-muted-foreground">24/7 support from our community team</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </TabsRoot>
      </div>
    </div>
  )
}