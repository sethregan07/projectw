"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

export default function ProposalsPage() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const proposals = [
    {
      id: 1,
      title: "Establish Network State Healthcare System",
      author: "Dr. Sarah Chen",
      category: "Healthcare",
      status: "active",
      votesFor: 2450,
      votesAgainst: 340,
      totalVotes: 2790,
      quorum: 3000,
      timeLeft: "2 days",
      description: "Proposal to create a decentralized healthcare network with telemedicine infrastructure, health data sovereignty, and cross-border access for all network state citizens.",
      fundingRequested: "500,000 LLD",
      created: "2024-01-10",
    },
    {
      id: 2,
      title: "Treasury Diversification Strategy",
      author: "Marcus Johnson",
      category: "Treasury",
      status: "active",
      votesFor: 1890,
      votesAgainst: 210,
      totalVotes: 2100,
      quorum: 3000,
      timeLeft: "5 days",
      description: "Diversify treasury holdings across multiple assets including stablecoins, ETH, and real-world assets to reduce risk and ensure long-term sustainability.",
      fundingRequested: "N/A",
      created: "2024-01-12",
    },
    {
      id: 3,
      title: "Implement Quadratic Voting for Major Decisions",
      author: "Elena Popov",
      category: "Governance",
      status: "pending",
      votesFor: 0,
      votesAgainst: 0,
      totalVotes: 0,
      quorum: 3000,
      timeLeft: "7 days",
      description: "Transition from simple majority voting to quadratic voting for proposals requesting over 100,000 LLD to ensure more democratic outcomes.",
      fundingRequested: "50,000 LLD",
      created: "2024-01-14",
    },
    {
      id: 4,
      title: "Launch Community Media Platform",
      author: "Alex Rivera",
      category: "Media",
      status: "passed",
      votesFor: 3200,
      votesAgainst: 450,
      totalVotes: 3650,
      quorum: 3000,
      timeLeft: "Ended",
      description: "Create a decentralized media platform for community storytelling, cultural discourse, and content publishing with built-in monetization.",
      fundingRequested: "250,000 LLD",
      created: "2024-01-05",
    },
    {
      id: 5,
      title: "Establish Physical Embassy in Dubai",
      author: "Network State Council",
      category: "Expansion",
      status: "active",
      votesFor: 2100,
      votesAgainst: 890,
      totalVotes: 2990,
      quorum: 3000,
      timeLeft: "1 day",
      description: "Secure physical presence with an embassy/co-working space in Dubai to facilitate real-world coordination and diplomatic recognition.",
      fundingRequested: "1,000,000 LLD",
      created: "2024-01-08",
    },
    {
      id: 6,
      title: "Network State Census and Metrics Dashboard",
      author: "Data Analytics Team",
      category: "Infrastructure",
      status: "pending",
      votesFor: 0,
      votesAgainst: 0,
      totalVotes: 0,
      quorum: 3000,
      timeLeft: "10 days",
      description: "Build comprehensive census system to track population, economic activity, and key metrics for diplomatic recognition.",
      fundingRequested: "75,000 LLD",
      created: "2024-01-15",
    },
  ]

  const filteredProposals = proposals.filter(p => {
    const matchesFilter = filter === "all" || p.status === filter
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch(status) {
      case "active": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
      case "pending": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
      case "passed": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "rejected": return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
              Dashboard
            </Link>
            <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-foreground font-medium">Proposals</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">All Proposals</h1>
          <p className="text-muted-foreground">Review, vote, and track all network state proposals</p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <Input
              placeholder="Search proposals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button 
              variant={filter === "active" ? "default" : "outline"}
              onClick={() => setFilter("active")}
            >
              Active
            </Button>
            <Button 
              variant={filter === "pending" ? "default" : "outline"}
              onClick={() => setFilter("pending")}
            >
              Pending
            </Button>
            <Button 
              variant={filter === "passed" ? "default" : "outline"}
              onClick={() => setFilter("passed")}
            >
              Passed
            </Button>
          </div>
        </div>

        {/* Proposals List */}
        <div className="space-y-6">
          {filteredProposals.map((proposal) => (
            <Card key={proposal.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex gap-2">
                    <Badge className={getStatusColor(proposal.status)}>
                      {proposal.status.toUpperCase()}
                    </Badge>
                    <Badge variant="outline">{proposal.category}</Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{proposal.timeLeft}</span>
                </div>
                <CardTitle className="text-2xl mb-2">
                  <Link href={`/dashboard/proposals/${proposal.id}`} className="hover:text-primary">
                    {proposal.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">{proposal.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Author:</span>
                    <p className="font-medium text-foreground">{proposal.author}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Funding:</span>
                    <p className="font-medium text-foreground">{proposal.fundingRequested}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Created:</span>
                    <p className="font-medium text-foreground">{proposal.created}</p>
                  </div>
                </div>

                {proposal.status === "active" || proposal.status === "passed" ? (
                  <>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-green-600 dark:text-green-400">
                          For: {proposal.votesFor.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground">
                          {proposal.totalVotes.toLocaleString()} / {proposal.quorum.toLocaleString()} votes
                        </span>
                        <span className="text-red-600 dark:text-red-400">
                          Against: {proposal.votesAgainst.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-green-600 h-full transition-all"
                          style={{ width: `${(proposal.votesFor / proposal.totalVotes) * 100}%` }}
                        />
                      </div>
                      <div className="w-full bg-muted rounded-full h-1">
                        <div
                          className="bg-primary h-full transition-all"
                          style={{ width: `${(proposal.totalVotes / proposal.quorum) * 100}%` }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Quorum progress: {((proposal.totalVotes / proposal.quorum) * 100).toFixed(1)}%
                      </p>
                    </div>

                    {proposal.status === "active" && (
                      <div className="flex gap-3 pt-2">
                        <Button className="flex-1 bg-green-600 hover:bg-green-700">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Vote For
                        </Button>
                        <Button className="flex-1 bg-red-600 hover:bg-red-700">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Vote Against
                        </Button>
                        <Link href={`/dashboard/proposals/${proposal.id}`}>
                          <Button variant="outline">View Details</Button>
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-4 text-muted-foreground">
                    Voting starts soon
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
