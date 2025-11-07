"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState, useEffect } from "react"
import { getCurrentUser } from "@/lib/authService"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [showCreateDiscussion, setShowCreateDiscussion] = useState(false)
  const [showJoinGroup, setShowJoinGroup] = useState(false)
  const [showCreateSolution, setShowCreateSolution] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)

  const [discussionForm, setDiscussionForm] = useState({
    title: "",
    content: "",
    category: "GENERAL",
  })

  const [solutionForm, setSolutionForm] = useState({
    title: "",
    description: "",
    proposalId: "",
    estimatedCost: "",
    timeline: "",
  })

  // Check authentication on mount
  useEffect(() => {
    const user = getCurrentUser()
    setCurrentUser(user)
  }, [])

  const handleCreateDiscussion = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Discussion "${discussionForm.title}" posted successfully!`)
    setShowCreateDiscussion(false)
    setDiscussionForm({ title: "", content: "", category: "GENERAL" })
  }

  const handleCreateSolution = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Solution "${solutionForm.title}" submitted successfully!`)
    setShowCreateSolution(false)
    setSolutionForm({ title: "", description: "", proposalId: "", estimatedCost: "", timeline: "" })
  }

  // Collaboration data (requires login)
  const activeProposals = [
    {
      id: "prop-001",
      title: "Sustainable Energy Infrastructure",
      description: "Implement renewable energy solutions across the network state",
      status: "DISCUSSION",
      category: "INFRASTRUCTURE",
      discussions: 24,
      participants: 89,
      deadline: "2024-02-15",
      priority: "HIGH"
    },
    {
      id: "prop-002",
      title: "Digital Education Platform",
      description: "Create comprehensive online learning resources for citizens",
      status: "IMPLEMENTATION",
      category: "EDUCATION",
      discussions: 156,
      participants: 234,
      deadline: "2024-03-01",
      priority: "HIGH"
    }
  ]

  const activeProjects = [
    {
      id: "proj-001",
      title: "Solar Panel Pilot Program",
      proposalId: "prop-001",
      description: "Install solar panels on 50 government buildings as a pilot program",
      status: "IN_PROGRESS",
      progress: 65,
      teamSize: 12,
      deadline: "2024-02-20",
      budget: "150,000 LLD",
      tasks: [
        { id: "task-001", title: "Site assessment completed", status: "COMPLETED", assignee: "Mike Johnson" },
        { id: "task-002", title: "Vendor selection", status: "IN_PROGRESS", assignee: "Sarah Chen" },
        { id: "task-003", title: "Installation planning", status: "PENDING", assignee: "Alex Rivera" }
      ]
    },
    {
      id: "proj-002",
      title: "Math Curriculum Development",
      proposalId: "prop-002",
      description: "Create interactive math courses for grades K-12",
      status: "PLANNING",
      progress: 25,
      teamSize: 8,
      deadline: "2024-03-15",
      budget: "75,000 LLD",
      tasks: [
        { id: "task-004", title: "Learning objectives defined", status: "COMPLETED", assignee: "Prof. Rodriguez" },
        { id: "task-005", title: "Content outline", status: "IN_PROGRESS", assignee: "Dr. Davis" },
        { id: "task-006", title: "Interactive elements design", status: "PENDING", assignee: "James Wilson" }
      ]
    }
  ]

  const availableRoles = [
    {
      id: "role-001",
      projectId: "proj-001",
      title: "Solar Installation Specialist",
      description: "Oversee solar panel installation and maintenance",
      skills: ["Electrical Engineering", "Project Management", "Safety Protocols"],
      commitment: "Full-time (3 months)",
      compensation: "50,000 LLD"
    },
    {
      id: "role-002",
      projectId: "proj-002",
      title: "Math Content Developer",
      description: "Create engaging math lesson plans and exercises",
      skills: ["Mathematics", "Education", "Content Creation"],
      commitment: "Part-time (6 months)",
      compensation: "30,000 LLD"
    }
  ]

  const solutions = [
    {
      id: "sol-001",
      title: "AI-Powered Learning Analytics",
      author: "Dr. Lisa Wong",
      proposalId: "prop-002",
      description: "Implement machine learning algorithms to personalize learning paths and identify struggling students early",
      upvotes: 45,
      status: "UNDER_REVIEW",
      estimatedCost: "120,000 LLD",
      timeline: "6 months",
      tags: ["AI", "education", "analytics"]
    },
    {
      id: "sol-002",
      title: "Community Solar Cooperatives",
      author: "Environmental Solutions Inc.",
      proposalId: "prop-001",
      description: "Create citizen-owned solar cooperatives to reduce costs and increase community investment in renewable energy",
      upvotes: 38,
      status: "IMPLEMENTING",
      estimatedCost: "500,000 LLD",
      timeline: "12 months",
      tags: ["renewable", "cooperative", "community"]
    }
  ]

  const initiatives = [
    {
      id: "init-001",
      title: "Green City Challenge",
      description: "Transform urban areas into sustainable, green communities",
      category: "ENVIRONMENT",
      participants: 156,
      progress: 40,
      status: "ACTIVE",
      deadline: "2024-06-01"
    },
    {
      id: "init-002",
      title: "Digital Literacy for All",
      description: "Ensure every citizen has access to digital skills training",
      category: "EDUCATION",
      participants: 89,
      progress: 65,
      status: "ACTIVE",
      deadline: "2024-08-15"
    }
  ]

  const discussions = [
    {
      id: 1,
      title: "Improving Citizen Participation in Governance",
      author: "Alex Chen",
      category: "GOVERNANCE",
      replies: 24,
      lastActivity: "2 hours ago",
      content: "How can we increase citizen engagement in our governance processes? I'd like to discuss strategies for better participation rates.",
      tags: ["governance", "participation", "engagement"]
    },
    {
      id: 2,
      title: "Community Garden Initiative - Volunteers Needed",
      author: "Sarah Johnson",
      category: "COMMUNITY",
      replies: 18,
      lastActivity: "5 hours ago",
      content: "We're starting a community garden project in the urban center. Looking for volunteers interested in sustainable agriculture.",
      tags: ["volunteer", "sustainability", "environment"]
    },
    {
      id: 3,
      title: "Digital Education Platform Feedback",
      author: "Marcus Rodriguez",
      category: "EDUCATION",
      replies: 31,
      lastActivity: "1 day ago",
      content: "The new digital education platform is live! Please share your feedback on the courses and user experience.",
      tags: ["education", "platform", "feedback"]
    }
  ]

  const workingGroups = [
    {
      id: 1,
      name: "Sustainable Development Committee",
      description: "Focus on environmental sustainability and green initiatives",
      members: 47,
      projects: 8,
      category: "ENVIRONMENT",
      status: "ACTIVE",
      nextMeeting: "Tomorrow, 3 PM UTC"
    },
    {
      id: 2,
      name: "Digital Infrastructure Working Group",
      description: "Maintain and improve our network state's technical infrastructure",
      members: 23,
      projects: 5,
      category: "TECHNICAL",
      status: "ACTIVE",
      nextMeeting: "Friday, 2 PM UTC"
    },
    {
      id: 3,
      name: "Education & Culture Committee",
      description: "Develop educational programs and cultural initiatives",
      members: 35,
      projects: 12,
      category: "EDUCATION",
      status: "ACTIVE",
      nextMeeting: "Next Monday, 4 PM UTC"
    },
    {
      id: 4,
      name: "Economic Policy Council",
      description: "Design and implement economic policies for sustainable growth",
      members: 19,
      projects: 6,
      category: "ECONOMY",
      status: "FORMING",
      nextMeeting: "TBD"
    }
  ]

  const events = [
    {
      id: 1,
      title: "Monthly Town Hall Meeting",
      date: "2024-01-20",
      time: "19:00 UTC",
      type: "TOWN_HALL",
      attendees: 156,
      description: "Monthly community meeting to discuss current initiatives and upcoming proposals"
    },
    {
      id: 2,
      title: "Sustainable Development Workshop",
      date: "2024-01-25",
      time: "14:00 UTC",
      type: "WORKSHOP",
      attendees: 42,
      description: "Hands-on workshop on sustainable development practices and community projects"
    },
    {
      id: 3,
      title: "New Citizen Orientation",
      date: "2024-01-28",
      time: "16:00 UTC",
      type: "ORIENTATION",
      attendees: 28,
      description: "Welcome session for new citizens covering governance, rights, and responsibilities"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-foreground mb-6">Community Center</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect, socialize, and engage with fellow citizens in our vibrant network state community.
              Join discussions, attend events, and participate in community activities that bring us together.
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => setShowCreateDiscussion(true)}>
                Start Discussion
              </Button>
              <Button size="lg" variant="outline">
                Join Working Group
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
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="groups">Working Groups</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="projects" disabled={!currentUser}>
              <span className={!currentUser ? "opacity-50" : ""}>Projects</span>
            </TabsTrigger>
            <TabsTrigger value="teams" disabled={!currentUser}>
              <span className={!currentUser ? "opacity-50" : ""}>Team Finder</span>
            </TabsTrigger>
            <TabsTrigger value="solutions" disabled={!currentUser}>
              <span className={!currentUser ? "opacity-50" : ""}>Solutions</span>
            </TabsTrigger>
            <TabsTrigger value="initiatives" disabled={!currentUser}>
              <span className={!currentUser ? "opacity-50" : ""}>Initiatives</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Discussions</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">247</div>
                  <p className="text-xs text-muted-foreground">
                    +12% this month
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Working Groups</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                  <p className="text-xs text-muted-foreground">
                    Active groups
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Events</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">
                    Community events
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Citizens</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,247</div>
                  <p className="text-xs text-muted-foreground">
                    Engaged this month
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Community Principles</CardTitle>
                  <CardDescription>What makes our community special</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Inclusive Participation</h4>
                      <p className="text-sm text-muted-foreground">Everyone has a voice and role to play in our community</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Collaborative Spirit</h4>
                      <p className="text-sm text-muted-foreground">We work together to achieve common goals and shared prosperity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Continuous Learning</h4>
                      <p className="text-sm text-muted-foreground">We embrace feedback and constantly improve our community practices</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>How to become an active community member</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center text-sm font-semibold text-blue-600 dark:text-blue-400">1</div>
                      <div>
                        <h4 className="font-semibold">Complete Your Profile</h4>
                        <p className="text-sm text-muted-foreground">Set up your citizen profile and interests</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center text-sm font-semibold text-green-600 dark:text-green-400">2</div>
                      <div>
                        <h4 className="font-semibold">Join Discussions</h4>
                        <p className="text-sm text-muted-foreground">Participate in community conversations</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-sm font-semibold text-purple-600 dark:text-purple-400">3</div>
                      <div>
                        <h4 className="font-semibold">Find Your Group</h4>
                        <p className="text-sm text-muted-foreground">Join working groups that match your interests</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Related Spaces */}
            <Card>
              <CardHeader>
                <CardTitle>Related Spaces</CardTitle>
                <CardDescription>Explore other areas of community engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-md">
                        <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Collaboration Hub</h4>
                        <p className="text-sm text-muted-foreground">Work on projects and implement proposals</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Join active projects, form teams, and contribute solutions to turn proposals into reality.
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      Visit Collaboration Hub
                    </Button>
                  </div>

                  <div className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Governance Dashboard</h4>
                        <p className="text-sm text-muted-foreground">Vote on proposals and participate in democracy</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Review active proposals, cast your votes, and help shape our network state's future.
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      Visit Governance Dashboard
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="discussions">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Community Discussions</h2>
                  <p className="text-muted-foreground">Engage in meaningful conversations about our network state</p>
                </div>
                <Button onClick={() => setShowCreateDiscussion(true)}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  New Discussion
                </Button>
              </div>

              {/* Create Discussion Modal */}
              {showCreateDiscussion && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                  <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Start New Discussion</CardTitle>
                        <Button variant="ghost" size="sm" onClick={() => setShowCreateDiscussion(false)}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </Button>
                      </div>
                      <CardDescription>Share your thoughts and start a conversation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleCreateDiscussion} className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Discussion Title *</label>
                          <Input
                            value={discussionForm.title}
                            onChange={(e) => setDiscussionForm({ ...discussionForm, title: e.target.value })}
                            placeholder="What would you like to discuss?"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Content *</label>
                          <Textarea
                            value={discussionForm.content}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDiscussionForm({ ...discussionForm, content: e.target.value })}
                            placeholder="Share your thoughts, questions, or ideas..."
                            className="min-h-[120px]"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Category *</label>
                          <select
                            value={discussionForm.category}
                            onChange={(e) => setDiscussionForm({ ...discussionForm, category: e.target.value })}
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            <option value="GENERAL">General Discussion</option>
                            <option value="GOVERNANCE">Governance</option>
                            <option value="COMMUNITY">Community</option>
                            <option value="TECHNICAL">Technical</option>
                            <option value="ECONOMY">Economy</option>
                          </select>
                        </div>
                        <div className="flex gap-3 pt-4">
                          <Button type="submit" className="flex-1">Post Discussion</Button>
                          <Button type="button" variant="outline" onClick={() => setShowCreateDiscussion(false)}>
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              )}

              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-foreground mb-2 hover:text-blue-600 cursor-pointer">
                            {discussion.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span>By {discussion.author}</span>
                            <Badge variant="outline" className="text-xs">
                              {discussion.category}
                            </Badge>
                            <span>{discussion.lastActivity}</span>
                          </div>
                          <p className="text-muted-foreground mb-3">{discussion.content}</p>
                          <div className="flex gap-2">
                            {discussion.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-2xl font-bold text-blue-600">{discussion.replies}</div>
                          <div className="text-sm text-muted-foreground">replies</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Reply
                          </Button>
                          <Button variant="ghost" size="sm">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Like
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm">
                          View Discussion
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="groups">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Working Groups</h2>
                  <p className="text-muted-foreground">Specialized teams focused on specific areas of our network state</p>
                </div>
                <Button onClick={() => setShowJoinGroup(true)}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Join Group
                </Button>
              </div>

              {/* Join Group Modal */}
              {showJoinGroup && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Join Working Group</CardTitle>
                        <Button variant="ghost" size="sm" onClick={() => setShowJoinGroup(false)}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </Button>
                      </div>
                      <CardDescription>Select a working group to join</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {workingGroups.map((group) => (
                          <div key={group.id} className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 cursor-pointer">
                            <div>
                              <h4 className="font-semibold">{group.name}</h4>
                              <p className="text-sm text-muted-foreground">{group.members} members</p>
                            </div>
                            <Button size="sm">Join</Button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-4">
                        <Button className="flex-1" onClick={() => setShowJoinGroup(false)}>Done</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {workingGroups.map((group) => (
                  <Card key={group.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{group.name}</CardTitle>
                          <CardDescription className="mb-3">{group.description}</CardDescription>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{group.members} members</span>
                            <span>{group.projects} active projects</span>
                          </div>
                        </div>
                        <Badge
                          className={
                            group.status === 'ACTIVE' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                            'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          }
                        >
                          {group.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm">
                          <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-muted-foreground">Next meeting:</span>
                          <span className="font-medium">{group.nextMeeting}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {group.category}
                          </Badge>
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" className="flex-1">View Projects</Button>
                          <Button size="sm" variant="outline">Join Group</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>How Working Groups Work</CardTitle>
                  <CardDescription>The structure and benefits of our collaborative groups</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Group Structure</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Self-organizing teams with shared goals</li>
                        <li>• Regular meetings and progress updates</li>
                        <li>• Project-based collaboration</li>
                        <li>• Open to all interested citizens</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Benefits</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Deep expertise in specific areas</li>
                        <li>• Faster decision-making on technical issues</li>
                        <li>• Building lasting professional relationships</li>
                        <li>• Contributing to network state development</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Community Events</h2>
                  <p className="text-muted-foreground">Upcoming events and community gatherings</p>
                </div>
                <Button>Suggest Event</Button>
              </div>

              <div className="grid gap-6">
                {events.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                          <CardDescription className="mb-3">{event.description}</CardDescription>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              <span>{event.attendees} attending</span>
                            </div>
                          </div>
                        </div>
                        <Badge
                          className={
                            event.type === 'TOWN_HALL' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                            event.type === 'WORKSHOP' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                            'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                          }
                        >
                          {event.type.replace('_', ' ')}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">RSVP</Button>
                        <Button size="sm" variant="outline">Add to Calendar</Button>
                        <Button size="sm" variant="outline">Share</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Event Guidelines</CardTitle>
                  <CardDescription>How to participate in community events</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Town Halls</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Monthly community governance meetings</li>
                        <li>• Open to all citizens</li>
                        <li>• Voice concerns and suggestions</li>
                        <li>• Vote on urgent matters</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Workshops</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Hands-on learning sessions</li>
                        <li>• Skill-building and collaboration</li>
                        <li>• Limited attendance (RSVP required)</li>
                        <li>• Interactive participation encouraged</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Projects Tab - Requires Login */}
          <TabsContent value="projects">
            {!currentUser ? (
              <Card className="p-8 text-center">
                <div className="space-y-4">
                  <svg className="w-16 h-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Login Required</h3>
                  <p className="text-muted-foreground">Please log in to access project collaboration features and contribute to our network state initiatives.</p>
                  <Button asChild>
                    <a href="/login">Log In to Continue</a>
                  </Button>
                </div>
              </Card>
            ) : (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">Active Projects</h2>
                    <p className="text-muted-foreground">Collaborate on active projects and track progress</p>
                  </div>
                  <Button>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Propose Project
                  </Button>
                </div>

                <div className="grid gap-6">
                  {activeProjects.map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {activeProposals.find(p => p.id === project.proposalId)?.title}
                              </Badge>
                              <Badge
                                className={
                                  project.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                                  project.status === 'PLANNING' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                  'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                }
                              >
                                {project.status.replace('_', ' ')}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                            <CardDescription className="mb-4">{project.description}</CardDescription>

                            <div className="grid md:grid-cols-3 gap-4 mb-4">
                              <div className="text-center">
                                <p className="text-2xl font-bold text-blue-600">{project.progress}%</p>
                                <p className="text-sm text-muted-foreground">Complete</p>
                              </div>
                              <div className="text-center">
                                <p className="text-2xl font-bold text-green-600">{project.teamSize}</p>
                                <p className="text-sm text-muted-foreground">Team Members</p>
                              </div>
                              <div className="text-center">
                                <p className="text-2xl font-bold text-purple-600">{project.budget}</p>
                                <p className="text-sm text-muted-foreground">Budget</p>
                              </div>
                            </div>

                            <div className="w-full bg-muted rounded-full h-2 mb-4">
                              <div
                                className="bg-blue-600 h-full rounded-full transition-all"
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <h4 className="font-semibold">Current Tasks</h4>
                          <div className="space-y-2">
                            {project.tasks.map((task) => (
                              <div key={task.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                                <div className="flex items-center gap-3">
                                  <input
                                    type="checkbox"
                                    checked={task.status === 'COMPLETED'}
                                    readOnly
                                    className="rounded"
                                  />
                                  <span className={task.status === 'COMPLETED' ? 'line-through text-muted-foreground' : ''}>
                                    {task.title}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Badge
                                    variant="outline"
                                    className={
                                      task.status === 'COMPLETED' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                                      task.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                                      'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                                    }
                                  >
                                    {task.status.replace('_', ' ')}
                                  </Badge>
                                  <span className="text-sm text-muted-foreground">{task.assignee}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Due: {project.deadline}</span>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">View Details</Button>
                              <Button size="sm">Contribute</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* Team Finder Tab - Requires Login */}
          <TabsContent value="teams">
            {!currentUser ? (
              <Card className="p-8 text-center">
                <div className="space-y-4">
                  <svg className="w-16 h-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Login Required</h3>
                  <p className="text-muted-foreground">Please log in to find team members and collaborate on projects.</p>
                  <Button asChild>
                    <a href="/login">Log In to Continue</a>
                  </Button>
                </div>
              </Card>
            ) : (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">Team Finder</h2>
                    <p className="text-muted-foreground">Find collaborators and build teams for projects</p>
                  </div>
                  <Button>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Find Team Members
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {availableRoles.map((role) => (
                    <Card key={role.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{role.title}</CardTitle>
                            <CardDescription className="mb-3">{role.description}</CardDescription>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {activeProjects.find(p => p.id === role.projectId)?.title}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Required Skills:</h4>
                            <div className="flex flex-wrap gap-1">
                              {role.skills.map((skill, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Commitment:</span>
                              <p className="font-medium">{role.commitment}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Compensation:</span>
                              <p className="font-medium">{role.compensation}</p>
                            </div>
                          </div>

                          <Button className="w-full">Apply for Role</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Building Effective Teams</CardTitle>
                    <CardDescription>Tips for successful collaboration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold">Team Composition</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Mix of technical and domain experts</li>
                          <li>• Include diverse perspectives</li>
                          <li>• Balance experience levels</li>
                          <li>• Consider time availability</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold">Success Factors</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Clear communication channels</li>
                          <li>• Regular progress updates</li>
                          <li>• Shared vision and goals</li>
                          <li>• Recognition of contributions</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          {/* Solutions Tab - Requires Login */}
          <TabsContent value="solutions">
            {!currentUser ? (
              <Card className="p-8 text-center">
                <div className="space-y-4">
                  <svg className="w-16 h-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Login Required</h3>
                  <p className="text-muted-foreground">Please log in to submit solutions and contribute innovative ideas to proposals.</p>
                  <Button asChild>
                    <a href="/login">Log In to Continue</a>
                  </Button>
                </div>
              </Card>
            ) : (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">Solution Center</h2>
                    <p className="text-muted-foreground">Share innovative solutions and discover implementation ideas</p>
                  </div>
                  <Button onClick={() => setShowCreateSolution(true)}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Submit Solution
                  </Button>
                </div>

                {/* Create Solution Modal */}
                {showCreateSolution && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>Submit a Solution</CardTitle>
                          <Button variant="ghost" size="sm" onClick={() => setShowCreateSolution(false)}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </Button>
                        </div>
                        <CardDescription>Share your innovative solution to proposal challenges</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleCreateSolution} className="space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Solution Title *</label>
                            <Input
                              value={solutionForm.title}
                              onChange={(e) => setSolutionForm({ ...solutionForm, title: e.target.value })}
                              placeholder="Name your solution"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Related Proposal *</label>
                            <select
                              value={solutionForm.proposalId}
                              onChange={(e) => setSolutionForm({ ...solutionForm, proposalId: e.target.value })}
                              className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                              required
                            >
                              <option value="">Select a proposal</option>
                              {activeProposals.map((proposal) => (
                                <option key={proposal.id} value={proposal.id}>
                                  {proposal.title}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Solution Description *</label>
                            <Textarea
                              value={solutionForm.description}
                              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSolutionForm({ ...solutionForm, description: e.target.value })}
                              placeholder="Describe your solution in detail..."
                              className="min-h-[120px]"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">Estimated Cost</label>
                              <Input
                                value={solutionForm.estimatedCost}
                                onChange={(e) => setSolutionForm({ ...solutionForm, estimatedCost: e.target.value })}
                                placeholder="e.g., 50,000 LLD"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-foreground">Timeline</label>
                              <Input
                                value={solutionForm.timeline}
                                onChange={(e) => setSolutionForm({ ...solutionForm, timeline: e.target.value })}
                                placeholder="e.g., 6 months"
                              />
                            </div>
                          </div>
                          <div className="flex gap-3 pt-4">
                            <Button type="submit" className="flex-1">Submit Solution</Button>
                            <Button type="button" variant="outline" onClick={() => setShowCreateSolution(false)}>
                              Cancel
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                )}

                <div className="grid gap-6">
                  {solutions.map((solution) => (
                    <Card key={solution.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {activeProposals.find(p => p.id === solution.proposalId)?.title}
                              </Badge>
                              <Badge
                                className={
                                  solution.status === 'UNDER_REVIEW' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                  solution.status === 'IMPLEMENTING' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                                  'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                }
                              >
                                {solution.status.replace('_', ' ')}
                              </Badge>
                            </div>
                            <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                            <CardDescription className="mb-3">By {solution.author}</CardDescription>
                            <p className="text-muted-foreground mb-3">{solution.description}</p>
                            <div className="flex gap-2 mb-3">
                              {solution.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  #{tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600">{solution.upvotes}</div>
                            <div className="text-sm text-muted-foreground">upvotes</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <span className="text-sm text-muted-foreground">Estimated Cost:</span>
                            <p className="font-medium">{solution.estimatedCost}</p>
                          </div>
                          <div>
                            <span className="text-sm text-muted-foreground">Timeline:</span>
                            <p className="font-medium">{solution.timeline}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Upvote ({solution.upvotes})
                          </Button>
                          <Button size="sm" className="flex-1">View Details</Button>
                          <Button size="sm" variant="outline">Comment</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* Initiatives Tab - Requires Login */}
          <TabsContent value="initiatives">
            {!currentUser ? (
              <Card className="p-8 text-center">
                <div className="space-y-4">
                  <svg className="w-16 h-16 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-xl font-semibold">Login Required</h3>
                  <p className="text-muted-foreground">Please log in to join community initiatives and contribute to large-scale projects.</p>
                  <Button asChild>
                    <a href="/login">Log In to Continue</a>
                  </Button>
                </div>
              </Card>
            ) : (
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">Community Initiatives</h2>
                    <p className="text-muted-foreground">Browse and join community initiatives</p>
                  </div>
                  <Button>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Propose Initiative
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {initiatives.map((initiative) => (
                    <Card key={initiative.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <Badge
                              className={
                                initiative.category === 'ENVIRONMENT' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                                initiative.category === 'EDUCATION' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                                'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                              }
                            >
                              {initiative.category}
                            </Badge>
                            <CardTitle className="text-lg mb-2 mt-2">{initiative.title}</CardTitle>
                            <CardDescription className="mb-4">{initiative.description}</CardDescription>
                          </div>
                          <Badge
                            className={
                              initiative.status === 'ACTIVE' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                              'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                            }
                          >
                            {initiative.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Participants:</span>
                              <p className="font-medium">{initiative.participants}</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Progress:</span>
                              <p className="font-medium">{initiative.progress}%</p>
                            </div>
                          </div>

                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-green-600 h-full rounded-full transition-all"
                              style={{ width: `${initiative.progress}%` }}
                            />
                          </div>

                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <span>Due: {initiative.deadline}</span>
                          </div>

                          <Button className="w-full">Join Initiative</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Starting an Initiative</CardTitle>
                    <CardDescription>How to propose and lead community initiatives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold">Requirements</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Clear problem statement and goals</li>
                          <li>• Realistic timeline and milestones</li>
                          <li>• Resource requirements and budget</li>
                          <li>• Success metrics and evaluation</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold">Best Practices</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Start small and scale gradually</li>
                          <li>• Engage stakeholders early</li>
                          <li>• Regular progress communication</li>
                          <li>• Celebrate milestones and achievements</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
        </TabsRoot>
      </div>
    </div>
  )
}
