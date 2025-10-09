"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("governance")
  const [showCreateProposal, setShowCreateProposal] = useState(false)
  const [showDelegateModal, setShowDelegateModal] = useState(false)
  const [votedProposals, setVotedProposals] = useState<Record<number, 'for' | 'against'>>({})

  // Proposal form state
  const [proposalForm, setProposalForm] = useState({
    title: "",
    description: "",
    category: "GOVERNANCE",
    fundingAmount: "",
  })

  // Delegation state
  const [delegateAddress, setDelegateAddress] = useState("")
  const [delegateAmount, setDelegateAmount] = useState("")

  const handleVote = (proposalId: number, vote: 'for' | 'against') => {
    setVotedProposals(prev => ({ ...prev, [proposalId]: vote }))
    // In a real app, this would call a smart contract
    alert(`Vote "${vote}" recorded for proposal #${proposalId}`)
  }

  const handleCreateProposal = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to blockchain
    alert(`Proposal "${proposalForm.title}" submitted successfully!`)
    setShowCreateProposal(false)
    setProposalForm({ title: "", description: "", category: "GOVERNANCE", fundingAmount: "" })
  }

  const handleDelegate = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Delegated ${delegateAmount} votes to ${delegateAddress}`)
    setShowDelegateModal(false)
    setDelegateAddress("")
    setDelegateAmount("")
  }

  const stats = [
    {
      label: "ACTIVE PROPOSALS",
      value: "1",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      label: "TREASURY BALANCE",
      value: "1,250 LLD",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      label: "YOUR VOTING POWER",
      value: "850 votes",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      label: "PARTICIPATION RATE",
      value: "76%",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ]

  const proposals = [
    {
      id: 1,
      title: "Treasury Allocation for Network Infrastructure",
      description: "Proposal to allocate 500 ETH from treasury for upgrading network infrastructure, including servers, security audits, and performance optimizations.",
      status: "ACTIVE",
      category: "TREASURY",
      totalVotes: 1590,
      votesFor: 1250,
      votesAgainst: 340,
      endDate: "2024-01-15",
      statusColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
      categoryColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: 2,
      title: "Governance Token Distribution Update",
      description: "Update the governance token distribution mechanism to improve fairness and increase participation in voting processes.",
      status: "PASSED",
      category: "GOVERNANCE",
      totalVotes: 2550,
      votesFor: 2100,
      votesAgainst: 450,
      endDate: "2024-01-10",
      statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
      categoryColor: "border-purple-200 dark:border-purple-800",
    },
    {
      id: 3,
      title: "Community Development Fund Proposal",
      description: "Establish a dedicated fund for community development initiatives, hackathons, and educational programs.",
      status: "FAILED",
      category: "COMMUNITY",
      totalVotes: 2090,
      votesFor: 890,
      votesAgainst: 1200,
      endDate: "2024-01-08",
      statusColor: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
      categoryColor: "border-orange-200 dark:border-orange-800",
    },
  ]

  const treasuryTransactions = [
    {
      type: "Incoming",
      amount: "+500 LLD",
      description: "Community contribution",
      date: "2024-01-12",
      icon: (
        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      ),
    },
    {
      type: "Outgoing",
      amount: "-200 LLD",
      description: "Infrastructure upgrade",
      date: "2024-01-10",
      icon: (
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
        </svg>
      ),
    },
    {
      type: "Incoming",
      amount: "+1000 LLD",
      description: "Token sale proceeds",
      date: "2024-01-08",
      icon: (
        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">
                Welcome to your Governance Dashboard
              </h1>
              <p className="text-muted-foreground text-lg">
                Participate in digital democracy and help shape the future of our network state
              </p>
              <p className="text-primary text-sm mt-2">Welcome back, Demo User!</p>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Connect Wallet (Coming Soon)
            </Button>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-4 flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-blue-900 dark:text-blue-100">
            This dashboard showcases the governance features of our Network State platform. Blockchain integration is being finalized - for now you can explore the interface and functionality.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`${stat.bgColor} ${stat.color} p-3 rounded-md`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Access */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">Quick Access</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/dashboard/proposals">
            <Card className="hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground">All Proposals</h3>
                </div>
                <p className="text-sm text-muted-foreground">Review and vote on proposals</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/dashboard/members">
            <Card className="hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-foreground">Citizens</h3>
                </div>
                <p className="text-sm text-muted-foreground">View network state members</p>
              </CardContent>
            </Card>
          </Link>

          <Card className="hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-md">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-foreground">Census & Metrics</h3>
              </div>
              <p className="text-sm text-muted-foreground">Track population and activity</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <TabsRoot value={activeTab} onValueChange={(details) => setActiveTab(details.value)}>
          <TabsList className="mb-8">
            <TabsTrigger value="governance">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Governance
            </TabsTrigger>
            <TabsTrigger value="treasury">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Treasury
            </TabsTrigger>
            <TabsTrigger value="settings">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="governance">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Active Proposals</h2>
                <div className="flex gap-3">
                  <Link href="/dashboard/proposals">
                    <Button variant="outline">
                      View All Proposals
                    </Button>
                  </Link>
                  <Button onClick={() => setShowCreateProposal(true)}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Create Proposal
                  </Button>
                </div>
              </div>

              {/* Create Proposal Modal */}
              {showCreateProposal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                  <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Create New Proposal</CardTitle>
                        <Button variant="ghost" size="sm" onClick={() => setShowCreateProposal(false)}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </Button>
                      </div>
                      <CardDescription>Submit a proposal for community voting</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleCreateProposal} className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Proposal Title *</label>
                          <Input
                            value={proposalForm.title}
                            onChange={(e) => setProposalForm({ ...proposalForm, title: e.target.value })}
                            placeholder="e.g., Allocate funds for community development"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Description *</label>
                          <textarea
                            value={proposalForm.description}
                            onChange={(e) => setProposalForm({ ...proposalForm, description: e.target.value })}
                            placeholder="Provide detailed information about your proposal..."
                            className="w-full min-h-[120px] px-3 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Category *</label>
                          <select
                            value={proposalForm.category}
                            onChange={(e) => setProposalForm({ ...proposalForm, category: e.target.value })}
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                          >
                            <option value="GOVERNANCE">Governance</option>
                            <option value="TREASURY">Treasury</option>
                            <option value="COMMUNITY">Community</option>
                            <option value="TECHNICAL">Technical</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Funding Amount (if applicable)</label>
                          <Input
                            type="number"
                            value={proposalForm.fundingAmount}
                            onChange={(e) => setProposalForm({ ...proposalForm, fundingAmount: e.target.value })}
                            placeholder="0"
                          />
                          <p className="text-xs text-muted-foreground">Leave blank if no funding is required</p>
                        </div>
                        <div className="flex gap-3 pt-4">
                          <Button type="submit" className="flex-1">Submit Proposal</Button>
                          <Button type="button" variant="outline" onClick={() => setShowCreateProposal(false)}>
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              )}

              <div className="grid gap-6">
                {proposals.map((proposal) => (
                  <Card key={proposal.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => router.push(`/dashboard/proposals/${proposal.id}`)}>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={proposal.statusColor}>{proposal.status}</Badge>
                        <Badge variant="outline" className={proposal.categoryColor}>
                          {proposal.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{proposal.title}</CardTitle>
                      <CardDescription className="text-base">
                        {proposal.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span className="text-muted-foreground">Total Votes</span>
                        </div>
                        <span className="font-semibold text-foreground">{proposal.totalVotes.toLocaleString()}</span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-green-600 dark:text-green-400">For: {proposal.votesFor.toLocaleString()}</span>
                          <span className="text-red-600 dark:text-red-400">Against: {proposal.votesAgainst.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-green-600 h-full transition-all"
                            style={{ width: `${(proposal.votesFor / proposal.totalVotes) * 100}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Ended on {proposal.endDate}</span>
                        </div>
                        <div className="flex gap-2">
                          {proposal.status === "ACTIVE" && (
                            <>
                              <Button
                                size="sm"
                                variant="outline"
                                className={`${votedProposals[proposal.id] === 'for' ? 'bg-green-100 dark:bg-green-900/30' : ''} text-green-600 border-green-600 hover:bg-green-50 dark:hover:bg-green-900/20`}
                                onClick={() => handleVote(proposal.id, 'for')}
                                disabled={!!votedProposals[proposal.id]}
                              >
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {votedProposals[proposal.id] === 'for' ? 'Voted For' : 'For'}
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className={`${votedProposals[proposal.id] === 'against' ? 'bg-red-100 dark:bg-red-900/30' : ''} text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20`}
                                onClick={() => handleVote(proposal.id, 'against')}
                                disabled={!!votedProposals[proposal.id]}
                              >
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                {votedProposals[proposal.id] === 'against' ? 'Voted Against' : 'Against'}
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="treasury">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Treasury Management</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Treasury Overview</CardTitle>
                    <CardDescription>Current balance and allocation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center py-6">
                      <p className="text-sm text-muted-foreground mb-2">Total Balance</p>
                      <p className="text-4xl font-bold text-foreground">1,250 LLD</p>
                      <p className="text-sm text-green-600 dark:text-green-400 mt-2">+12.5% this month</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Reserved</span>
                        <span className="font-semibold">500 LLD (40%)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Available</span>
                        <span className="font-semibold">750 LLD (60%)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Latest treasury activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {treasuryTransactions.map((tx, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-muted rounded-md">
                              {tx.icon}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{tx.description}</p>
                              <p className="text-xs text-muted-foreground">{tx.date}</p>
                            </div>
                          </div>
                          <span className={`font-semibold ${tx.type === "Incoming" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                            {tx.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Governance Settings</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Voting Preferences</CardTitle>
                    <CardDescription>Configure your voting and notification settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">Email Notifications</p>
                          <p className="text-sm text-muted-foreground">Receive updates about new proposals</p>
                        </div>
                        <Button variant="outline" size="sm">Enable</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">Voting Reminders</p>
                          <p className="text-sm text-muted-foreground">Get reminded before proposals end</p>
                        </div>
                        <Button variant="outline" size="sm">Enable</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Delegate Voting Power</CardTitle>
                    <CardDescription>Delegate your votes to a trusted member</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className="w-full"
                      variant="outline"
                      onClick={() => setShowDelegateModal(true)}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                      Delegate Votes
                    </Button>
                    <div className="mt-4 p-4 bg-muted rounded-md">
                      <p className="text-sm text-muted-foreground mb-2">Current Delegation</p>
                      <p className="text-sm font-medium text-foreground">None - You control all 850 votes</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Delegate Modal */}
              {showDelegateModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Delegate Voting Power</CardTitle>
                        <Button variant="ghost" size="sm" onClick={() => setShowDelegateModal(false)}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </Button>
                      </div>
                      <CardDescription>Transfer your voting power to another member</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleDelegate} className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Delegate Address *</label>
                          <Input
                            value={delegateAddress}
                            onChange={(e) => setDelegateAddress(e.target.value)}
                            placeholder="0x..."
                            required
                          />
                          <p className="text-xs text-muted-foreground">Enter the wallet address of the delegate</p>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Amount to Delegate *</label>
                          <Input
                            type="number"
                            value={delegateAmount}
                            onChange={(e) => setDelegateAmount(e.target.value)}
                            placeholder="0"
                            max="850"
                            required
                          />
                          <p className="text-xs text-muted-foreground">Maximum: 850 votes</p>
                        </div>
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-md p-3">
                          <p className="text-sm text-yellow-900 dark:text-yellow-100">
                            <strong>Note:</strong> Delegating votes transfers your voting power. You can revoke delegation at any time.
                          </p>
                        </div>
                        <div className="flex gap-3 pt-2">
                          <Button type="submit" className="flex-1">Delegate</Button>
                          <Button type="button" variant="outline" onClick={() => setShowDelegateModal(false)}>
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              )}

              <Card>
                <CardHeader>
                  <CardTitle>Voting History</CardTitle>
                  <CardDescription>Your past voting activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(votedProposals).length === 0 ? (
                      <p className="text-center text-muted-foreground py-8">No votes cast yet</p>
                    ) : (
                      Object.entries(votedProposals).map(([id, vote]) => (
                        <div key={id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                          <span className="text-sm text-foreground">Proposal #{id}</span>
                          <Badge className={vote === 'for' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}>
                            Voted {vote === 'for' ? 'For' : 'Against'}
                          </Badge>
                        </div>
                      ))
                    )}
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
