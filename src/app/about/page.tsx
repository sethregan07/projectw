"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const principles = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global",
      description: "Building a worldwide network of aligned communities",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
      title: "Open",
      description: "Transparent governance and open-source technology",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaborative",
      description: "Fostering cooperation across borders and cultures",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovative",
      description: "Pioneering new models of social organization",
    },
  ]

  const values = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation",
      description: "We constantly push boundaries and explore new possibilities in governance and community building.",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Purpose",
      description: "Every action is driven by our mission to create sustainable, thriving network states.",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Sustainability",
      description: "Building systems that can grow and adapt for generations to come.",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Security",
      description: "Protecting our members and their data with enterprise-grade security.",
    },
  ]

  const milestones = [
    {
      year: "2021",
      title: "Foundation",
      description: "Started with a vision to reimagine governance",
    },
    {
      year: "2022",
      title: "First Community",
      description: "Launched our first network state with 100 members",
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Reached 50+ countries and 10,000+ members",
    },
    {
      year: "2024",
      title: "Recognition",
      description: "Gained international recognition and partnerships",
    },
  ]

  const team = [
    {
      name: "Alex Rivera",
      role: "Founder & CEO",
      bio: "Visionary leader with 15 years in tech and governance",
      color: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400",
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      bio: "Former blockchain architect, building the future",
      color: "bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
    },
    {
      name: "Marcus Johnson",
      role: "Head of Community",
      bio: "Community builder connecting thousands worldwide",
      color: "bg-green-500/10 text-green-600 dark:bg-green-500/20 dark:text-green-400",
    },
    {
      name: "Elena Popov",
      role: "Legal Counsel",
      bio: "International law expert navigating new territories",
      color: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400",
    },
  ]

  const stats = [
    { value: "10K+", label: "Active Members" },
    { value: "50+", label: "Countries" },
    { value: "100+", label: "Communities" },
    { value: "95%", label: "Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/40 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">About Us</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            The World's First Network State
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building a new kind of nation—one that exists primarily online, united by shared values and purpose, with the capacity for collective action that transcends traditional borders.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What is a Network State?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A highly aligned online community with a capacity for collective action that crowdfunds territory around the world and eventually gains diplomatic recognition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="text-center border-border/40 hover:border-primary/30 hover:shadow-md transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="pt-8 pb-6">
                  <div className="text-primary mb-4 flex justify-center opacity-80">{principle.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/40 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-primary flex-shrink-0 opacity-80">{value.icon}</div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{value.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              From vision to reality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/40 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <Badge className="w-fit mb-3 bg-primary/10 text-primary border-primary/20">{milestone.year}</Badge>
                  <CardTitle className="text-xl">{milestone.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{milestone.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border/40 shadow-lg bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="text-primary mb-6 flex justify-center opacity-80">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                To empower individuals to create and participate in network states that align with their values, enabling new forms of governance, community, and collective action that transcend traditional geographic boundaries.
              </p>
              <Button size="lg" className="shadow-md hover:shadow-lg transition-shadow">Join Our Mission</Button>
            </CardContent>
          </Card>
        </div>
      </section>


      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Built on Modern Technology
            </h2>
            <p className="text-lg text-muted-foreground">
              Leveraging cutting-edge tools to build the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/40 bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-8 pb-6">
                <div className="text-primary mb-3 flex justify-center opacity-80">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Blockchain</h3>
                <p className="text-sm text-muted-foreground">Decentralized infrastructure</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/40 bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-8 pb-6">
                <div className="text-primary mb-3 flex justify-center opacity-80">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Encryption</h3>
                <p className="text-sm text-muted-foreground">End-to-end security</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/40 bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-8 pb-6">
                <div className="text-primary mb-3 flex justify-center opacity-80">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Cloud</h3>
                <p className="text-sm text-muted-foreground">Scalable architecture</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/40 bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-8 pb-6">
                <div className="text-primary mb-3 flex justify-center opacity-80">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">AI</h3>
                <p className="text-sm text-muted-foreground">Intelligent automation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Community Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from our network state members
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Joining this network state changed my perspective on what's possible for human organization.",
                author: "Maria Santos",
                role: "Community Member",
              },
              {
                quote: "The governance model here is truly revolutionary. Everyone has a voice and real impact.",
                author: "David Kim",
                role: "DAO Participant",
              },
              {
                quote: "I've found my tribe—people who share my values and vision for a better future.",
                author: "Aisha Patel",
                role: "Early Adopter",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border/40 bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <svg className="w-10 h-10 text-primary/60 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 px-6 bg-gradient-to-br from-blue-600/90 to-purple-600/90 dark:from-blue-900/80 dark:to-purple-900/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQgMi42ODYtNiA2LTZzNiAyLjY4NiA2IDYtMi42ODYgNi02IDYtNi0yLjY4Ni02LTZ6TTAgMTZjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnpNMzYgNTJjMC0zLjMxNCAyLjY4Ni02IDYtNnM2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNnpNMCA1MmMwLTMuMzE0IDIuNjg2LTYgNi02czYgMi42ODYgNiA2LTIuNjg2IDYtNiA2LTYtMi42ODYtNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join the Future?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Be part of the world's first network state and help shape the future of human organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
