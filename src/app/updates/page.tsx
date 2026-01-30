"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface UpdateItem {
  type: 'feature' | 'improvement' | 'fix' | 'content'
  title: string
  description: string
}

interface Release {
  version: string
  date: string
  title: string
  description: string
  updates: UpdateItem[]
}

export default function UpdatesPage() {
  const releases: Release[] = [
    {
      version: "v1.3.1",
      date: "January 2026",
      title: "Newsletter & Proposals Integration",
      description: "Added comprehensive newsletter subscription system and proposals management features with enhanced backend services",
      updates: [
        {
          type: "feature",
          title: "Newsletter Subscription System",
          description: "Complete newsletter subscription with email verification, welcome flows, and subscription management"
        },
        {
          type: "feature",
          title: "Proposals API and Dashboard",
          description: "New proposals management system with API endpoints and dashboard integration for governance"
        },
        {
          type: "improvement",
          title: "Enhanced Learn Courses",
          description: "Updated governance and getting-started courses with improved content and user experience"
        },
        {
          type: "improvement",
          title: "Backend Microservices Updates",
          description: "Enhanced API gateway, auth service, and database configurations for better performance"
        },
        {
          type: "improvement",
          title: "Deployment and Infrastructure",
          description: "Updated deployment scripts, Docker configurations, and VPS setup tools"
        }
      ]
    },
    {
      version: "v1.3.0",
      date: "November 2025",
      title: "Community & Collaboration Enhancement",
      description: "Major information architecture restructuring with integrated collaboration features and authentication-gated content",
      updates: [
        {
          type: "feature",
          title: "Unified Community Center",
          description: "Integrated Community Hub functionality into Community Center with social and collaborative features"
        },
        {
          type: "feature",
          title: "Authentication-Gated Collaboration",
          description: "Projects, Team Finder, Solutions, and Initiatives tabs require login for deeper engagement"
        },
        {
          type: "improvement",
          title: "Progressive Disclosure UX",
          description: "Public access to discussions and events, with login prompts for advanced collaboration features"
        },
        {
          type: "feature",
          title: "Healthcare Feature System",
          description: "Comprehensive healthcare platform with telemedicine, preventive care, and wellness services"
        },
        {
          type: "improvement",
          title: "Governance System Enhancement",
          description: "Integrated voting demos and content into Governance page with interactive proposal system"
        },
        {
          type: "improvement",
          title: "Navigation Streamlining",
          description: "Cleaned up navigation by removing redundant Community Center link, accessible via Features dropdown"
        },
        {
          type: "feature",
          title: "Cross-Linking Architecture",
          description: "Bidirectional navigation between Community Center and Governance Dashboard for better user flow"
        }
      ]
    },
    {
      version: "v1.2.0",
      date: "November 2025",
      title: "Learning Platform Launch",
      description: "Major expansion with comprehensive educational content and professional course interface",
      updates: [
        {
          type: "feature",
          title: "Documention System",
          description: "Complete learning platform with 4 comprehensive courses covering network state fundamentals"
        },
        {
          type: "content",
          title: "25+ Course Modules",
          description: "Getting Started, Governance, Economics, and Community Building courses with detailed content"
        },
        {
          type: "feature",
          title: "Interactive Course Interface",
          description: "Video/documentation tabs, progress tracking, and module navigation for each course"
        },
        {
          type: "improvement",
          title: "Professional Course Design",
          description: "Consistent styling, completion tracking, and seamless user experience across all courses"
        },
        {
          type: "content",
          title: "Comprehensive Network State Content",
          description: "In-depth coverage of governance models, token economics, DeFi, and community building"
        }
      ]
    },
    {
      version: "v1.1.0",
      date: "October 2025",
      title: "Platform Enhancement",
      description: "Improved user experience and expanded feature set",
      updates: [
        {
          type: "feature",
          title: "Enhanced Dashboard",
          description: "Improved user dashboard with better organization and navigation"
        },
        {
          type: "improvement",
          title: "Mobile Responsiveness",
          description: "Better mobile experience across all platform features"
        },
        {
          type: "fix",
          title: "Authentication Fixes",
          description: "Resolved login and session management issues"
        }
      ]
    },
    {
      version: "v1.0.0",
      date: "September 2025",
      title: "Platform Launch",
      description: "Initial release of the Network State platform",
      updates: [
        {
          type: "feature",
          title: "Core Platform Features",
          description: "Basic governance, community, and economic tools"
        },
        {
          type: "content",
          title: "Initial Documentation",
          description: "Basic guides and documentation for platform usage"
        },
        {
          type: "feature",
          title: "User Authentication",
          description: "Secure user registration and login system"
        }
      ]
    }
  ]

  const getUpdateIcon = (type: UpdateItem['type']) => {
    switch (type) {
      case 'feature':
        return '✨'
      case 'improvement':
        return '🔧'
      case 'fix':
        return '🐛'
      case 'content':
        return '📚'
      default:
        return '📝'
    }
  }

  const getUpdateColor = (type: UpdateItem['type']) => {
    switch (type) {
      case 'feature':
        return 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
      case 'improvement':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800'
      case 'fix':
        return 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
      case 'content':
        return 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800'
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4">Updates</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Platform Updates
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Stay up to date with the latest features, improvements, and content additions to our Network State platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/features/community">
                <Badge variant="secondary" className="px-4 py-2 cursor-pointer hover:bg-white/20">
                  🆕 Latest: Newsletter & Proposals v1.3.1
                </Badge>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-3">Release History</h2>
            <p className="text-muted-foreground">
              Track our platform evolution and upcoming features
            </p>
          </div>

          <div className="space-y-8">
            {releases.map((release, index) => (
              <Card key={release.version} className="relative">
                {/* Timeline connector */}
                {index < releases.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-16 bg-border" />
                )}

                <CardHeader>
                  <div className="flex items-start gap-4">
                    {/* Version indicator */}
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {release.version.split('.')[1]}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">{release.title}</CardTitle>
                        <Badge variant="outline">{release.version}</Badge>
                        <span className="text-sm text-muted-foreground">{release.date}</span>
                      </div>
                      <CardDescription className="text-base mb-4">
                        {release.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4 ml-20">
                    {release.updates.map((update, updateIndex) => (
                      <div key={updateIndex} className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm ${getUpdateColor(update.type)}`}>
                          {getUpdateIcon(update.type)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {update.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {update.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Update Categories Legend */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Update Categories</h2>
            <p className="text-muted-foreground">
              Understanding our update types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-50 text-green-700 border-2 border-green-200 rounded-full flex items-center justify-center text-xl mx-auto mb-3 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800">
                    ✨
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">New Features</h3>
                  <p className="text-sm text-muted-foreground">
                    Major new functionality and capabilities
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-50 text-blue-700 border-2 border-blue-200 rounded-full flex items-center justify-center text-xl mx-auto mb-3 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800">
                    🔧
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Improvements</h3>
                  <p className="text-sm text-muted-foreground">
                    Enhanced existing features and UX
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-50 text-red-700 border-2 border-red-200 rounded-full flex items-center justify-center text-xl mx-auto mb-3 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800">
                    🐛
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Bug Fixes</h3>
                  <p className="text-sm text-muted-foreground">
                    Resolved issues and technical problems
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-50 text-purple-700 border-2 border-purple-200 rounded-full flex items-center justify-center text-xl mx-auto mb-3 dark:bg-purple-900/20 dark:text-purple-400 dark:border-purple-800">
                    📚
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Content</h3>
                  <p className="text-sm text-muted-foreground">
                    New articles, guides, and educational materials
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            What's Coming Next
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Advanced Analytics</CardTitle>
                <CardDescription>
                  Comprehensive platform analytics and insights dashboard
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mobile App</CardTitle>
                <CardDescription>
                  Native mobile applications for iOS and Android
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">API Integrations</CardTitle>
                <CardDescription>
                  Third-party integrations and developer tools
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-600 dark:to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Follow our development progress and get notified about new releases
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://github.com/sethregan07/projectw" target="_blank">
              <Badge variant="secondary" className="px-4 py-2 cursor-pointer hover:bg-white/20">
                📊 View on GitHub
              </Badge>
            </Link>
            <Link href="/learn">
              <Badge variant="outline" className="px-4 py-2 cursor-pointer border-white text-white hover:bg-white/10">
                📚 Explore New Courses
              </Badge>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
