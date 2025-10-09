"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      title: "Healthcare",
      description: "Decentralized healthcare solutions for network state members",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      articles: [
        { title: "Telemedicine Infrastructure", slug: "telemedicine-infrastructure" },
        { title: "Health Data Sovereignty", slug: "health-data-sovereignty" },
        { title: "Cross-Border Healthcare Access", slug: "cross-border-healthcare" },
      ],
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      title: "Treasury",
      description: "Transparent and efficient treasury management systems",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      articles: [
        { title: "Multi-Signature Wallets", slug: "multi-sig-wallets" },
        { title: "Treasury Diversification Strategies", slug: "treasury-diversification" },
        { title: "Transparent Fund Allocation", slug: "transparent-allocation" },
      ],
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      title: "Governance Policies",
      description: "Democratic decision-making frameworks and protocols",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      articles: [
        { title: "Quadratic Voting Systems", slug: "quadratic-voting" },
        { title: "Proposal Lifecycle Management", slug: "proposal-lifecycle" },
        { title: "Delegation Mechanisms", slug: "delegation-mechanisms" },
      ],
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Media & Cultural Discourse",
      description: "Platforms for community expression and cultural development",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      articles: [
        { title: "Decentralized Content Publishing", slug: "decentralized-publishing" },
        { title: "Community Storytelling", slug: "community-storytelling" },
        { title: "Cultural Identity Formation", slug: "cultural-identity" },
      ],
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Badge className="mb-4">Features</Badge>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Network State Infrastructure
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore the core components that power our decentralized network state, from healthcare to governance.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`${feature.bgColor} ${feature.color} p-3 rounded-md`}>
                  {feature.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">{feature.title}</h2>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {feature.articles.map((article, articleIndex) => (
                  <Link key={articleIndex} href={`/articles/${article.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
                      <CardHeader>
                        <CardTitle className="text-lg">{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          Read article
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Build Your Network State?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our community and start implementing these features in your own network state.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/learn">
              <Button size="lg" variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
