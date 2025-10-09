"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react"

export default function EducationPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const educationStats = {
    totalLearners: 892,
    coursesCompleted: 1247,
    averageCompletion: 78,
    certificationsIssued: 456,
    activeMentors: 67
  }

  const learningPaths = [
    {
      path: "Citizenship Fundamentals",
      description: "Essential knowledge for all citizens about rights, responsibilities, and governance",
      duration: "4 weeks",
      modules: 8,
      difficulty: "Beginner",
      enrolled: 892,
      completion: 94
    },
    {
      path: "Blockchain & Web3",
      description: "Technical foundation in decentralized technologies and smart contracts",
      duration: "6 weeks",
      modules: 12,
      difficulty: "Intermediate",
      enrolled: 456,
      completion: 76
    },
    {
      path: "Governance Leadership",
      description: "Advanced training for citizens interested in leadership and policy-making",
      duration: "8 weeks",
      modules: 16,
      difficulty: "Advanced",
      enrolled: 234,
      completion: 82
    },
    {
      path: "Economic Systems",
      description: "Understanding tokenomics, sustainable finance, and economic policy",
      duration: "5 weeks",
      modules: 10,
      difficulty: "Intermediate",
      enrolled: 345,
      completion: 71
    }
  ]

  const educationalResources = [
    {
      category: "Video Lectures",
      items: [
        "Introduction to Network States",
        "Digital Citizenship Rights",
        "Blockchain Governance Models",
        "Sustainable Economic Systems",
        "Cybersecurity Fundamentals"
      ]
    },
    {
      category: "Interactive Courses",
      items: [
        "Smart Contract Development",
        "Proposal Writing Workshop",
        "Community Moderation Training",
        "Data Privacy & Security",
        "Conflict Resolution Skills"
      ]
    },
    {
      category: "Reading Materials",
      items: [
        "Network State Constitution",
        "Governance Best Practices",
        "Economic Policy Framework",
        "Digital Rights Handbook",
        "Community Guidelines"
      ]
    },
    {
      category: "Practical Exercises",
      items: [
        "Proposal Simulation",
        "Budget Allocation Exercise",
        "Mediation Role-Playing",
        "Security Audit Practice",
        "Leadership Scenarios"
      ]
    }
  ]

  const mentorshipPrograms = [
    {
      program: "Peer Mentorship",
      description: "Connect with experienced citizens for personalized guidance",
      mentors: 67,
      mentees: 234,
      avgSession: "45 min",
      satisfaction: 96
    },
    {
      program: "Technical Mentorship",
      description: "Get help with blockchain development and technical challenges",
      mentors: 23,
      mentees: 89,
      avgSession: "60 min",
      satisfaction: 98
    },
    {
      program: "Leadership Development",
      description: "Accelerated learning for aspiring community leaders",
      mentors: 12,
      mentees: 45,
      avgSession: "90 min",
      satisfaction: 95
    }
  ]

  const certificationTracks = [
    {
      track: "Digital Citizenship",
      description: "Foundational certification for all citizens",
      requirements: ["Complete Citizenship Fundamentals", "Pass knowledge assessment", "Agree to code of conduct"],
      validity: "Lifetime",
      issued: 892
    },
    {
      track: "Governance Specialist",
      description: "Advanced certification for governance participants",
      requirements: ["Digital Citizenship cert", "Complete Governance Leadership", "Active participation record"],
      validity: "2 years",
      issued: 234
    },
    {
      track: "Technical Expert",
      description: "Certification for blockchain and technical specialists",
      requirements: ["Complete Blockchain & Web3", "Contribute to technical projects", "Peer review approval"],
      validity: "1 year",
      issued: 156
    },
    {
      track: "Community Leader",
      description: "Elite certification for proven community leaders",
      requirements: ["All other certifications", "Leadership experience", "Community election"],
      validity: "3 years",
      issued: 67
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-foreground mb-6">Education & Learning</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Empowering citizens through comprehensive education. From foundational knowledge
              to advanced leadership training, our educational ecosystem supports lifelong learning
              and active participation in our network state.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Start Learning</Button>
              <Button size="lg" variant="outline">
                Become a Mentor
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
            <TabsTrigger value="courses">Learning Paths</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Learners</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{educationStats.totalLearners.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    Currently enrolled
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{educationStats.coursesCompleted.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    Total completions
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Completion</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{educationStats.averageCompletion}%</div>
                  <p className="text-xs text-muted-foreground">
                    Course completion rate
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Certifications</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m4.318-4.318a4.5 4.5 0 00-6.364 0L3 12.5c-.5.5-.5 1.5 0 2l6.364 6.364a4.5 4.5 0 006.364 0L21 12.5c.5-.5.5-1.5 0-2l-6.682-6.682z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{educationStats.certificationsIssued.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">
                    Issued this year
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Educational Philosophy</CardTitle>
                  <CardDescription>Our approach to citizen education</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Lifelong Learning</h4>
                      <p className="text-sm text-muted-foreground">Education continues throughout citizenship, not just at the beginning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Practical Application</h4>
                      <p className="text-sm text-muted-foreground">Learning is reinforced through real governance participation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Peer Learning</h4>
                      <p className="text-sm text-muted-foreground">Citizens learn from each other through mentorship and collaboration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Inclusive Access</h4>
                      <p className="text-sm text-muted-foreground">All citizens have equal access to educational resources</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mentorship Network</CardTitle>
                  <CardDescription>Connect and learn from experienced citizens</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mentorshipPrograms.map((program, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-md">
                      <div>
                        <h4 className="font-semibold text-sm">{program.program}</h4>
                        <p className="text-xs text-muted-foreground">{program.mentees} active pairs</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        {program.satisfaction}% satisfaction
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Learning Paths</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Structured educational journeys designed to develop well-rounded citizens.
                  Each path combines theoretical knowledge with practical application.
                </p>
              </div>

              <div className="grid gap-6">
                {learningPaths.map((path, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold">{path.path}</h3>
                            <Badge className={
                              path.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                              path.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                              'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                            }>
                              {path.difficulty}
                            </Badge>
                          </div>
                          <CardDescription className="mb-3">{path.description}</CardDescription>
                          <div className="grid md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Duration:</span>
                              <div className="font-semibold">{path.duration}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Modules:</span>
                              <div className="font-semibold">{path.modules}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Enrolled:</span>
                              <div className="font-semibold">{path.enrolled}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Completion:</span>
                              <div className="font-semibold text-green-600">{path.completion}%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button className="flex-1">Enroll Now</Button>
                        <Button variant="outline">Preview Course</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Learning Methodology</CardTitle>
                  <CardDescription>How our educational system maximizes learning outcomes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Active Learning</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Interactive exercises and simulations</li>
                        <li>• Real governance participation</li>
                        <li>• Peer discussion and debate</li>
                        <li>• Practical project work</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Assessment Methods</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Continuous evaluation</li>
                        <li>• Peer assessment</li>
                        <li>• Practical demonstrations</li>
                        <li>• Portfolio submissions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Educational Resources</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive learning materials designed for different learning styles
                  and knowledge levels. All resources are freely accessible to citizens.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {educationalResources.map((category, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                      <CardDescription>
                        {category.category === 'Video Lectures' ? 'Visual learning through expert presentations' :
                         category.category === 'Interactive Courses' ? 'Hands-on learning with exercises' :
                         category.category === 'Reading Materials' ? 'In-depth written resources' :
                         'Practical application exercises'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                              category.category === 'Video Lectures' ? 'bg-red-500' :
                              category.category === 'Interactive Courses' ? 'bg-blue-500' :
                              category.category === 'Reading Materials' ? 'bg-green-500' :
                              'bg-purple-500'
                            }`} />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full mt-4">
                        Browse {category.category}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Learning Analytics</CardTitle>
                  <CardDescription>Track your educational progress and achievements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                      <div className="text-sm text-muted-foreground">Courses Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
                      <div className="text-sm text-muted-foreground">Avg Score</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
                      <div className="text-sm text-muted-foreground">Study Hours</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                      <div className="text-sm text-muted-foreground">Certifications</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="certifications">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Certification Programs</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Earn recognized credentials that demonstrate your knowledge and commitment
                  to our network state. Certifications validate your expertise and open doors
                  to leadership opportunities.
                </p>
              </div>

              <div className="grid gap-6">
                {certificationTracks.map((cert, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{cert.track}</CardTitle>
                          <CardDescription className="mb-3">{cert.description}</CardDescription>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Validity: {cert.validity}</span>
                            <span>Issued: {cert.issued}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Requirements</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {cert.requirements.map((req, idx) => (
                              <li key={idx}>• {req}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1">Start Certification</Button>
                          <Button variant="outline">Learn More</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Certification Benefits</CardTitle>
                  <CardDescription>Advantages of earning network state certifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Professional Recognition</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Demonstrated expertise</li>
                        <li>• Credibility in governance</li>
                        <li>• Leadership eligibility</li>
                        <li>• Professional networking</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Practical Advantages</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Enhanced voting power</li>
                        <li>• Priority in committees</li>
                        <li>• Mentorship opportunities</li>
                        <li>• Exclusive events access</li>
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