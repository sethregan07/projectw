"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"
import { useState } from "react"
import { useParams } from "next/navigation"

export default function ProposalDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [activeTab, setActiveTab] = useState("governance")
  const [votedProposals, setVotedProposals] = useState<Record<number, 'for' | 'against'>>({})
  const [showCreateProposal, setShowCreateProposal] = useState(false)
  const [showDelegateModal, setShowDelegateModal] = useState(false)
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

  const proposal = proposals.find(p => p.id === parseInt(id))

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
                Proposal #{id}
              </h1>
              <p className="text-muted-foreground text-lg">
                View and vote on this proposal
              </p>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Connect Wallet (Coming Soon)
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="space-y-6">
          {proposal ? (
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge className={proposal.statusColor}>{proposal.status}</Badge>
                  <Badge variant="outline" className={proposal.categoryColor}>
                    {proposal.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{proposal.title}</CardTitle>
                <CardDescription className="text-base mb-4">
                  {proposal.description}
                </CardDescription>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Created: January 10, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>Author: Governance Council</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Funding: 500 LLD</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Discussion: 23 comments</span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Proposal Details</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Objective:</strong> Upgrade network infrastructure to improve performance and security</p>
                    <p><strong>Implementation:</strong> Deploy new servers, update security protocols, and optimize network architecture</p>
                    <p><strong>Expected Impact:</strong> 40% improvement in transaction speed and 60% reduction in security incidents</p>
                    <p><strong>Risk Assessment:</strong> Low risk with standard migration procedures</p>
                  </div>
                </div>
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
          ) : (
            <p className="text-center text-muted-foreground py-8">Proposal not found</p>
          )}

          {/* Discussions Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Discussions</h3>

            {/* Comment Form */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <textarea
                    placeholder="Share your thoughts on this proposal... Consider network state principles like digital property rights, startup societies, and collective action. You can embed videos or share links."
                    className="w-full min-h-[100px] px-3 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Add Video
                    </Button>
                    <Button variant="outline" size="sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      Add Link
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">
                      Comments should align with network state governance principles • Highly voted comments are highlighted
                    </p>
                    <Button size="sm">Post Comment</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments List */}
            <div className="space-y-4">
              <Card className="border-l-4 border-l-green-500 bg-green-50/50 dark:bg-green-900/10">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center gap-1 mr-2">
                      <button className="p-1 hover:bg-muted rounded">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </button>
                      <span className="text-xs font-bold text-green-600">24</span>
                      <button className="p-1 hover:bg-muted rounded">
                        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">JD</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-foreground">John Doe</span>
                        <span className="text-xs text-muted-foreground">2 hours ago</span>
                        <Badge variant="secondary" className="text-xs">Top Comment</Badge>
                      </div>
                      <p className="text-foreground mb-3">
                        This proposal aligns well with Balaji's concept of startup societies. By investing in infrastructure now, we're building the digital property that will attract more citizens to our network state. The focus on security is crucial for maintaining sovereignty.
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <button className="hover:text-foreground">Reply</button>
                        <button className="hover:text-foreground">Share</button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center gap-1 mr-2">
                      <button className="p-1 hover:bg-muted rounded">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </button>
                      <span className="text-xs font-bold text-green-600">18</span>
                      <button className="p-1 hover:bg-muted rounded">
                        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-green-600 dark:text-green-400">AS</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-foreground">Alice Smith</span>
                        <span className="text-xs text-muted-foreground">4 hours ago</span>
                      </div>
                      <p className="text-foreground mb-3">
                        From a network state perspective, this funding request seems reasonable. The book emphasizes the importance of investing in core infrastructure before expanding membership. However, I wonder if we should consider cloud-based solutions to reduce long-term costs.
                      </p>
                      <div className="bg-muted/50 rounded-lg p-3 mb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          <span className="text-sm font-medium">AWS Infrastructure Whitepaper</span>
                        </div>
                        <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                          <div className="text-center">
                            <svg className="w-8 h-8 text-muted-foreground mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-xs text-muted-foreground">Link Preview</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <button className="hover:text-foreground">Reply</button>
                        <button className="hover:text-foreground">Share</button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center gap-1 mr-2">
                      <button className="p-1 hover:bg-muted rounded">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </button>
                      <span className="text-xs font-bold text-green-600">15</span>
                      <button className="p-1 hover:bg-muted rounded">
                        <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">MR</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-foreground">Mike Rodriguez</span>
                        <span className="text-xs text-muted-foreground">6 hours ago</span>
                      </div>
                      <p className="text-foreground mb-3">
                        The risk assessment seems thorough. Network states need to prioritize security to maintain their competitive advantage over traditional nations. This investment in infrastructure will help us achieve the "escape velocity" mentioned in the book.
                      </p>
                      <div className="bg-muted/50 rounded-lg p-3 mb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm font-medium">Network State Security Discussion</span>
                        </div>
                        <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                          <div className="text-center">
                            <svg className="w-8 h-8 text-muted-foreground mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <p className="text-xs text-muted-foreground">Video: 2:34</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <button className="hover:text-foreground">Reply</button>
                        <button className="hover:text-foreground">Share</button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
