"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useProposals, useCastVote, useCreateProposal, WalletIntegration, blockchainService } from "@/lib/blockchain"

export default function ProposalsPageWired() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState("all")
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null)

  // Blockchain integration hooks
  const { data: proposals, isLoading: proposalsLoading, refetch: refetchProposals } = useProposals()
  const castVoteMutation = useCastVote()
  const createProposalMutation = useCreateProposal()

  // Connect wallet on page load
  useEffect(() => {
    const checkWalletConnection = async () => {
      const account = await WalletIntegration.getConnectedAccount()
      setConnectedWallet(account)
    }
    checkWalletConnection()

    // Listen for wallet changes
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setConnectedWallet(accounts[0] || null)
      })
    }
  }, [])

  const handleConnectWallet = async () => {
    try {
      const account = await WalletIntegration.connectWallet()
      setConnectedWallet(account)
    } catch (error) {
      console.error("Failed to connect wallet:", error)
      alert("Please install MetaMask to connect your wallet")
    }
  }

  const handleCastVote = async (proposalId: string, vote: boolean) => {
    if (!connectedWallet) {
      alert("Please connect your wallet to vote")
      return
    }

    try {
      // Sign the vote transaction
      const message = `Vote ${vote ? 'FOR' : 'AGAINST'} proposal ${proposalId}`
      const signature = await WalletIntegration.signMessage(message)

      // Cast vote on blockchain
      const result = await castVoteMutation.mutateAsync({
        proposal_id: proposalId,
        vote,
        voter_address: connectedWallet,
        signature,
      })

      if (result.success) {
        alert(result.message)
        refetchProposals() // Refresh proposals to show updated vote count
      } else {
        alert(`Voting failed: ${result.message}`)
      }
    } catch (error) {
      console.error("Voting error:", error)
      alert("Vote submission failed. Please try again.")
    }
  }

  const filteredProposals = proposals?.filter(p => {
    const matchesFilter = filter === "all" || p.status === filter
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  }) || []

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
            <span className="text-foreground font-medium">Blockchain Proposals</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Blockchain Governance Votes</h1>
              <p className="text-muted-foreground">Vote on proposals with blockchain-verified transparency</p>
            </div>

            {connectedWallet ? (
              <div className="text-sm">
                <p className="text-muted-foreground">Connected Wallet</p>
                <p className="font-mono text-xs">{connectedWallet}</p>
              </div>
            ) : (
              <Button onClick={handleConnectWallet} className="bg-orange-600 hover:bg-orange-700">
                Connect Wallet
              </Button>
            )}
          </div>
        </div>

        {/* Wallet Status Banner */}
        {!connectedWallet && (
          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-md p-4 mb-8">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-orange-900 dark:text-orange-100">
                  Wallet Required for Voting
                </p>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Connect your MetaMask wallet to participate in blockchain governance and cast real votes on proposals.
                </p>
              </div>
            </div>
          </div>
        )}

        {connectedWallet && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md p-4 mb-8">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-green-900 dark:text-green-100">
                  Wallet Connected - Ready to Vote!
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Your votes are signed by your wallet and recorded immutably on the blockchain. No fees, instant confirmation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="flex gap-4 mb-8">
          <Input
            placeholder="Search proposals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
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
              variant={filter === "passed" ? "default" : "outline"}
              onClick={() => setFilter("passed")}
            >
              Passed
            </Button>
          </div>
        </div>

        {/* Loading State */}
        {proposalsLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading proposals from blockchain...</p>
          </div>
        )}

        {/* Proposals List */}
        {!proposalsLoading && (
          <div className="space-y-6">
            {filteredProposals.map((proposal) => (
              <Card key={proposal.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex gap-2">
                      <Badge className={getStatusColor(proposal.status)}>
                        {proposal.status.toUpperCase()}
                      </Badge>
                      <Badge variant="outline">BLOCKCHAIN GOVERNANCE</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mb-2">{proposal.title}</CardTitle>
                  <CardDescription className="text-base">{proposal.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Creator:</span>
                      <p className="font-mono text-xs">{proposal.creator.slice(0, 20)}...</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Created:</span>
                      <p className="font-medium text-foreground">
                        {new Date(proposal.created_at * 1000).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Status:</span>
                      <p className="font-medium capitalize text-foreground">{proposal.status}</p>
                    </div>
                  </div>

                  {proposal.status === "active" ? (
                    <>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-green-600 dark:text-green-400">
                            For: {proposal.for_votes.toLocaleString()}
                          </span>
                          <span className="text-red-600 dark:text-red-400">
                            Against: {proposal.against_votes.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-green-600 h-full transition-all"
                            style={{
                              width: `${(proposal.for_votes / (proposal.for_votes + proposal.against_votes || 1)) * 100}%`
                            }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Quorum needed: {Math.max(proposal.for_votes, proposal.against_votes)} more votes
                        </p>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <Button
                          className="flex-1 bg-green-600 hover:bg-green-700"
                          onClick={() => handleCastVote(proposal.id, true)}
                          disabled={!connectedWallet || castVoteMutation.isPending}
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {castVoteMutation.isPending ? "Signing..." : "Vote For (Blockchain)"}
                        </Button>
                        <Button
                          className="flex-1 bg-red-600 hover:bg-red-700"
                          onClick={() => handleCastVote(proposal.id, false)}
                          disabled={!connectedWallet || castVoteMutation.isPending}
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          {castVoteMutation.isPending ? "Signing..." : "Vote Against (Blockchain)"}
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="bg-muted p-4 rounded-md">
                      <p className="text-sm font-medium">Proposal Finalized</p>
                      <p className="text-sm text-muted-foreground">
                        Status: {proposal.status.toUpperCase()} - Total votes: {proposal.for_votes + proposal.against_votes}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            {!filteredProposals.length && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No proposals found matching your criteria.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
