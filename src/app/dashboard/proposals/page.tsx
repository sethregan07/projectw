"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState, useEffect } from "react"
import { getAuthToken } from "@/lib/authService"
import { Textarea } from "@/components/ui/textarea"

interface Proposal {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  status: string;
  votesFor: number;
  votesAgainst: number;
  totalVotes: number;
  quorum: number;
  fundingRequested: string;
  created: string;
  votingStart?: string;
  votingEnd?: string;
  timeLeft?: string;
}

export default function ProposalsPage() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [proposals, setProposals] = useState<Proposal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newProposal, setNewProposal] = useState({
    title: '',
    description: '',
    category: '',
    fundingRequested: '',
    quorum: 100
  })

  useEffect(() => {
    fetchProposals()
  }, [])

  const fetchProposals = async () => {
    try {
      const response = await fetch('/api/proposals')
      if (!response.ok) {
        throw new Error('Failed to fetch proposals')
      }
      const data = await response.json()
      // Add timeLeft based on status
      const proposalsWithTimeLeft = data.map((p: Proposal) => ({
        ...p,
        timeLeft: p.status === 'active' ? 'Active' : p.status === 'pending' ? 'Pending' : 'Ended'
      }))
      setProposals(proposalsWithTimeLeft)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load proposals')
    } finally {
      setLoading(false)
    }
  }

  const handleVote = async (proposalId: number, vote: 'for' | 'against') => {
    const token = getAuthToken()
    if (!token) {
      alert('Please login to vote')
      return
    }

    try {
      const response = await fetch(`/api/proposals/${proposalId}/vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ vote }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to cast vote')
      }

      // Refresh proposals after voting
      await fetchProposals()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to cast vote')
    }
  }

  const handleCreateProposal = async (e: React.FormEvent) => {
    e.preventDefault()
    const token = getAuthToken()
    if (!token) {
      alert('Please login to create a proposal')
      return
    }

    try {
      const response = await fetch('/api/proposals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newProposal),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to create proposal')
      }

      // Reset form and refresh proposals
      setNewProposal({
        title: '',
        description: '',
        category: '',
        fundingRequested: '',
        quorum: 100
      })
      setShowCreateForm(false)
      await fetchProposals()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to create proposal')
    }
  }

  if (loading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading proposals...</div>
  }

  if (error) {
    return <div className="min-h-screen bg-background flex items-center justify-center text-red-500">{error}</div>
  }

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

        {/* Create Proposal Button */}
        <div className="mb-8">
          <Button onClick={() => setShowCreateForm(!showCreateForm)}>
            {showCreateForm ? 'Cancel' : 'Create New Proposal'}
          </Button>
        </div>

        {/* Create Proposal Form */}
        {showCreateForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Create New Proposal</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateProposal} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <Input
                    value={newProposal.title}
                    onChange={(e) => setNewProposal({...newProposal, title: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <Textarea
                    value={newProposal.description}
                    onChange={(e) => setNewProposal({...newProposal, description: e.target.value})}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <Input
                      value={newProposal.category}
                      onChange={(e) => setNewProposal({...newProposal, category: e.target.value})}
                      placeholder="e.g., Healthcare, Treasury"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Funding Requested (LLD)</label>
                    <Input
                      type="number"
                      value={newProposal.fundingRequested}
                      onChange={(e) => setNewProposal({...newProposal, fundingRequested: e.target.value})}
                      placeholder="e.g., 50000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Quorum</label>
                    <Input
                      type="number"
                      value={newProposal.quorum}
                      onChange={(e) => setNewProposal({...newProposal, quorum: parseInt(e.target.value) || 100})}
                      min="1"
                    />
                  </div>
                </div>
                <Button type="submit">Create Proposal</Button>
              </form>
            </CardContent>
          </Card>
        )}

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
                        <Button
                          className="flex-1 bg-green-600 hover:bg-green-700"
                          onClick={() => handleVote(proposal.id, 'for')}
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Vote For
                        </Button>
                        <Button
                          className="flex-1 bg-red-600 hover:bg-red-700"
                          onClick={() => handleVote(proposal.id, 'against')}
                        >
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
