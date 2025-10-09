"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [showCreateDiscussion, setShowCreateDiscussion] = useState(false)
  const [showJoinGroup, setShowJoinGroup] = useState(false)

  const [discussionForm, setDiscussionForm] = useState({
    title: "",
    content: "",
    category: "GENERAL",
  })

  const handleCreateDiscussion = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Discussion "${discussionForm.title}" posted successfully!`)
    setShowCreateDiscussion(false)
    setDiscussionForm({ title: "", content: "", category: "GENERAL" })
  }

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
            <h1 className="text-5xl font-bold text-foreground mb-6">Community Hub</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect, collaborate, and build together in our vibrant network state community.
              Join discussions, participate in working groups, and help shape our collective future.
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

            <div className="grid md:grid-cols-2 gap-8">
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
        </TabsRoot>
      </div>
    </div>
  )
}