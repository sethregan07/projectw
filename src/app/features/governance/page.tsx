"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react"

export default function GovernancePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [showCreateProposal, setShowCreateProposal] = useState(false)
  const [votedProposals, setVotedProposals] = useState<Record<number, 'for' | 'against'>>({})

  const [proposalForm, setProposalForm] = useState({
    title: "",
    description: "",
    category: "GOVERNANCE",
    fundingAmount: "",
  })

  const handleVote = (proposalId: number, vote: 'for' | 'against') => {
    setVotedProposals(prev => ({ ...prev, [proposalId]: vote }))
    alert(`Vote "${vote}" recorded for proposal #${proposalId}`)
  }

  const handleCreateProposal = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Proposal "${proposalForm.title}" submitted successfully!`)
    setShowCreateProposal(false)
    setProposalForm({ title: "", description: "", category: "GOVERNANCE", fundingAmount: "" })
  }

  const proposals = [
    {
      id: 1,
      title: "Implement Quadratic Voting System",
      description: "Replace current voting mechanism with quadratic voting to ensure more equitable representation and reduce the influence of large token holders.",
      status: "ACTIVE",
      category: "GOVERNANCE",
      totalVotes: 1250,
      votesFor: 890,
      votesAgainst: 360,
      endDate: "2024-02-15",
      statusColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
      categoryColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: 2,
      title: "Establish Community Development Fund",
      description: "Create a dedicated fund for community initiatives, hackathons, and educational programs to foster growth and innovation.",
      status: "PASSED",
      category: "TREASURY",
      totalVotes: 980,
      votesFor: 720,
      votesAgainst: 260,
      endDate: "2024-01-30",
      statusColor: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
      categoryColor: "border-purple-200 dark:border-purple-800",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-foreground mb-6">Decentralized Governance</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience true democratic governance where every citizen has a voice in shaping our network state's future.
              Our governance system combines cutting-edge voting mechanisms with transparent decision-making processes.
            </p>
            <div className="flex gap-4">
              <Button size="lg" onClick={() => setShowCreateProposal(true)}>
                Create Proposal
              </Button>
              <Button size="lg" variant="outline">
                View All Proposals
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
            <TabsTrigger value="proposals">Active Proposals</TabsTrigger>
            <TabsTrigger value="voting">Voting Systems</TabsTrigger>
            <TabsTrigger value="transparency">Transparency</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    Proposal System
                  </CardTitle>
                  <CardDescription>
                    Create and discuss proposals that affect our entire network state
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Any citizen can submit proposals for community consideration. Proposals cover governance changes,
                    treasury allocations, and policy decisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Advanced Voting
                  </CardTitle>
                  <CardDescription>
                    Multiple voting mechanisms for fair and effective decision-making
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Choose from quadratic voting, conviction voting, and traditional methods to express
                    your preferences accurately.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-md">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    Real-time Results
                  </CardTitle>
                  <CardDescription>
                    Transparent voting results with live updates and analytics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Track voting progress in real-time with detailed analytics and participation metrics.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Governance Principles</CardTitle>
                  <CardDescription>Core principles that guide our governance system</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Inclusive Participation</h4>
                      <p className="text-sm text-muted-foreground">Every citizen has equal opportunity to participate in governance decisions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Transparent Processes</h4>
                      <p className="text-sm text-muted-foreground">All governance activities are publicly visible and auditable.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Efficient Execution</h4>
                      <p className="text-sm text-muted-foreground">Decisions are implemented quickly and effectively once approved.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Current Statistics</CardTitle>
                  <CardDescription>Governance activity metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Active Proposals</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Citizens</span>
                    <span className="font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Avg. Participation</span>
                    <span className="font-semibold">76%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Proposals Passed</span>
                    <span className="font-semibold">89%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="proposals">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Active Proposals</h2>
              <Button onClick={() => setShowCreateProposal(true)}>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create Proposal
              </Button>
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
                          placeholder="e.g., Implement quadratic voting system"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Description *</label>
                        <Textarea
                          value={proposalForm.description}
                          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setProposalForm({ ...proposalForm, description: e.target.value })}
                          placeholder="Provide detailed information about your proposal..."
                          className="min-h-[120px]"
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
                <Card key={proposal.id} className="hover:shadow-lg transition-shadow">
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
                        <span>Ends on {proposal.endDate}</span>
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
          </TabsContent>

          <TabsContent value="voting">
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Voting Mechanisms</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our governance system supports multiple voting mechanisms to ensure fair and effective decision-making
                  for different types of proposals and community preferences.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Quadratic Voting
                    </CardTitle>
                    <CardDescription>
                      Vote with conviction - cost increases quadratically with vote strength
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Quadratic voting allows citizens to express the intensity of their preferences.
                      Each additional vote costs exponentially more, preventing large token holders from dominating decisions.
                    </p>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-xs font-mono text-muted-foreground">
                        Vote Cost = Vote Strength²
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Conviction Voting
                    </CardTitle>
                    <CardDescription>
                      Time-locked voting that rewards long-term commitment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Conviction voting increases voting power over time. Citizens who maintain their vote position
                      gain more influence, encouraging thoughtful, long-term decision-making.
                    </p>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-xs font-mono text-muted-foreground">
                        Conviction = Vote × Time Factor
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-md">
                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      One Person, One Vote
                    </CardTitle>
                    <CardDescription>
                      Traditional democratic voting for straightforward decisions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Simple majority voting for clear, binary decisions where equal representation is desired.
                      Each citizen gets exactly one vote regardless of token holdings.
                    </p>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-xs font-mono text-muted-foreground">
                        Every Citizen = 1 Vote
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-md">
                        <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      Token-Weighted Voting
                    </CardTitle>
                    <CardDescription>
                      Voting power proportional to token holdings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Traditional token-weighted voting where voting power corresponds to governance token holdings.
                      Suitable for decisions directly affecting token value.
                    </p>
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-xs font-mono text-muted-foreground">
                        Vote Power = Token Balance
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="transparency">
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Governance Transparency</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Every aspect of our governance process is transparent, auditable, and publicly accessible.
                  We believe transparency builds trust and ensures accountability.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Proposal History</CardTitle>
                    <CardDescription className="text-center">Complete record of all proposals</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">247</div>
                    <p className="text-sm text-muted-foreground">Total proposals submitted</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Voting Records</CardTitle>
                    <CardDescription className="text-center">Individual voting history</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">98.7%</div>
                    <p className="text-sm text-muted-foreground">Participation rate</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Execution Tracking</CardTitle>
                    <CardDescription className="text-center">Proposal implementation status</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">94.2%</div>
                    <p className="text-sm text-muted-foreground">Successful execution rate</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Transparency Features</CardTitle>
                  <CardDescription>How we ensure governance transparency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold">On-Chain Records</h4>
                          <p className="text-sm text-muted-foreground">All governance actions recorded immutably on blockchain</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold">Real-time Updates</h4>
                          <p className="text-sm text-muted-foreground">Live voting results and proposal status updates</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold">Public Analytics</h4>
                          <p className="text-sm text-muted-foreground">Detailed participation and voting pattern analytics</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold">Open Data</h4>
                          <p className="text-sm text-muted-foreground">All governance data available for public analysis</p>
                        </div>
                      </div>
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