"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"

export default function LearnPage() {
  const learningPaths = [
    {
      title: "Getting Started",
      description: "Learn the fundamentals of Network State",
      lessons: 12,
      duration: "2 hours",
      level: "Beginner",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    },
    {
      title: "Governance",
      description: "Understanding decentralized governance",
      lessons: 8,
      duration: "1.5 hours",
      level: "Intermediate",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
    },
    {
      title: "Economics",
      description: "Token economics and sustainable models",
      lessons: 10,
      duration: "2.5 hours",
      level: "Advanced",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
    {
      title: "Community Building",
      description: "Build and grow your network state",
      lessons: 15,
      duration: "3 hours",
      level: "Intermediate",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    },
  ]

  const advancedTopics = [
    {
      title: "Blockchain Integration",
      description: "Connect your network state to blockchain",
      articles: 5,
      badge: "Technical",
    },
    {
      title: "Legal Frameworks",
      description: "Navigate legal considerations",
      articles: 8,
      badge: "Legal",
    },
    {
      title: "Scaling Strategies",
      description: "Grow from 100 to 10,000 members",
      articles: 6,
      badge: "Growth",
    },
  ]

  const browseByTopic = [
    { name: "Vision", count: 24, icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> },
    { name: "Technology", count: 18, icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { name: "Governance", count: 15, icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
    { name: "Economics", count: 12, icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
  ]

  const resources = [
    {
      title: "Network State Whitepaper",
      description: "Comprehensive guide to building network states",
      type: "PDF",
      size: "2.4 MB",
    },
    {
      title: "Community Toolkit",
      description: "Essential tools for community management",
      type: "ZIP",
      size: "15 MB",
    },
    {
      title: "Governance Templates",
      description: "Ready-to-use governance frameworks",
      type: "DOCS",
      size: "1.2 MB",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4">Knowledge Center</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Network State Knowledge Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Everything you need to build, grow, and govern your network state. From fundamentals to advanced strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative flex-1 w-full">
                <Input
                  type="search"
                  placeholder="Search articles, guides, and resources..."
                  className="pl-10 h-12"
                />
                <svg
                  className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <Button size="lg" className="w-full sm:w-auto">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Learning Paths</h2>
            <p className="text-muted-foreground">
              Structured courses to take you from beginner to expert
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="text-primary mb-3">{path.icon}</div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {path.title}
                  </CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{path.lessons} lessons</span>
                    <span>{path.duration}</span>
                  </div>
                  <Badge variant="secondary">{path.level}</Badge>
                  <Button variant="outline" className="w-full mt-2">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Topics */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Advanced Topics</h2>
            <p className="text-muted-foreground">
              Deep dives into specialized areas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {advancedTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{topic.badge}</Badge>
                    <span className="text-sm text-muted-foreground">{topic.articles} articles</span>
                  </div>
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between">
                    View Articles
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Topic */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Browse by Topic</h2>
            <p className="text-muted-foreground">
              Explore content organized by subject area
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {browseByTopic.map((topic, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-primary">{topic.icon}</div>
                      <div>
                        <h3 className="font-semibold text-foreground">{topic.name}</h3>
                        <p className="text-sm text-muted-foreground">{topic.count} resources</p>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <TabsRoot defaultValue="guides">
            <TabsList className="mb-8">
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="guides">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Complete Setup Guide</CardTitle>
                    <CardDescription>Step-by-step instructions for launching your network state</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline">Read Guide</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Governance Best Practices</CardTitle>
                    <CardDescription>Learn from successful network states</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline">Read Guide</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tutorials">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Building Your First DAO</CardTitle>
                    <CardDescription>Hands-on tutorial for creating a decentralized organization</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline">Start Tutorial</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Token Economics 101</CardTitle>
                    <CardDescription>Design sustainable token models</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline">Start Tutorial</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="case-studies">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Network State Alpha</CardTitle>
                    <CardDescription>How they grew from 50 to 5,000 members in 6 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline">Read Case Study</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Digital Nomad Collective</CardTitle>
                    <CardDescription>Building a global community of remote workers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline">Read Case Study</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="faq">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">What is a Network State?</h3>
                    <p className="text-muted-foreground">
                      A network state is a highly aligned online community with a capacity for collective action that crowdfunds territory around the world and eventually gains diplomatic recognition.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">How do I get started?</h3>
                    <p className="text-muted-foreground">
                      Begin with our "Getting Started" learning path to understand the fundamentals, then explore specific topics based on your interests.
                    </p>
                  </div>
                  <Button variant="outline">View All FAQs</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </TabsRoot>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Downloadable Resources</h2>
            <p className="text-muted-foreground">
              Templates, toolkits, and documentation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>{resource.type}</Badge>
                    <span className="text-xs text-muted-foreground">{resource.size}</span>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-900 dark:to-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Contribute to Network State Knowledge
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Share your expertise and help others build successful network states
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
              Submit an Article
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
