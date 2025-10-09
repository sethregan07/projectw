"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react"

export default function TreasuryPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const treasuryStats = {
    totalBalance: 1250000,
    availableFunds: 750000,
    reservedFunds: 500000,
    monthlyIncome: 45000,
    monthlyExpenses: 32000
  }

  const recentTransactions = [
    {
      id: 1,
      type: "incoming",
      amount: 50000,
      description: "Community token sale proceeds",
      category: "Revenue",
      date: "2024-01-15",
      status: "completed"
    },
    {
      id: 2,
      type: "outgoing",
      amount: 25000,
      description: "Infrastructure development fund",
      category: "Development",
      date: "2024-01-14",
      status: "completed"
    },
    {
      id: 3,
      type: "outgoing",
      amount: 15000,
      description: "Community education program",
      category: "Education",
      date: "2024-01-13",
      status: "pending"
    },
    {
      id: 4,
      type: "incoming",
      amount: 100000,
      description: "Partnership investment",
      category: "Investment",
      date: "2024-01-12",
      status: "completed"
    },
    {
      id: 5,
      type: "outgoing",
      amount: 8000,
      description: "Security audit services",
      category: "Security",
      date: "2024-01-11",
      status: "completed"
    }
  ]

  const fundAllocations = [
    { category: "Infrastructure", amount: 300000, percentage: 40, color: "bg-blue-500" },
    { category: "Community Development", amount: 200000, percentage: 27, color: "bg-green-500" },
    { category: "Research & Development", amount: 150000, percentage: 20, color: "bg-purple-500" },
    { category: "Security & Operations", amount: 75000, percentage: 10, color: "bg-orange-500" },
    { category: "Emergency Reserve", amount: 25000, percentage: 3, color: "bg-red-500" }
  ]

  const budgetProposals = [
    {
      id: 1,
      title: "Q1 2024 Infrastructure Expansion",
      description: "Expand network infrastructure to support 50% more users",
      requestedAmount: 75000,
      category: "Infrastructure",
      status: "voting",
      votesFor: 1250,
      votesAgainst: 320,
      endDate: "2024-01-20"
    },
    {
      id: 2,
      title: "Community Education Initiative",
      description: "Launch comprehensive digital citizenship education program",
      requestedAmount: 45000,
      category: "Education",
      status: "approved",
      votesFor: 980,
      votesAgainst: 150,
      endDate: "2024-01-18"
    },
    {
      id: 3,
      title: "Enhanced Security Measures",
      description: "Implement advanced cybersecurity and monitoring systems",
      requestedAmount: 60000,
      category: "Security",
      status: "rejected",
      votesFor: 650,
      votesAgainst: 780,
      endDate: "2024-01-16"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-foreground mb-6">Treasury Management</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transparent, democratic management of our network state's financial resources.
              Every transaction is publicly auditable, and fund allocation decisions are made through community governance.
            </p>
            <div className="flex gap-4">
              <Button size="lg">View Budget Proposals</Button>
              <Button size="lg" variant="outline">
                Transaction History
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
            <TabsTrigger value="allocations">Fund Allocations</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="proposals">Budget Proposals</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20m9-9H3" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{(treasuryStats.totalBalance / 1000).toFixed(0)}k LLD</div>
                  <p className="text-xs text-muted-foreground">
                    +12.5% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Available Funds</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{(treasuryStats.availableFunds / 1000).toFixed(0)}k LLD</div>
                  <p className="text-xs text-muted-foreground">
                    60% of total balance
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Income</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">+{treasuryStats.monthlyIncome.toLocaleString()} LLD</div>
                  <p className="text-xs text-muted-foreground">
                    From various sources
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">-{treasuryStats.monthlyExpenses.toLocaleString()} LLD</div>
                  <p className="text-xs text-muted-foreground">
                    Operational costs
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Treasury Composition</CardTitle>
                  <CardDescription>Current fund distribution</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {fundAllocations.map((allocation, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{allocation.category}</span>
                        <span>{allocation.amount.toLocaleString()} LLD ({allocation.percentage}%)</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${allocation.color}`}
                          style={{ width: `${allocation.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Health Metrics</CardTitle>
                  <CardDescription>Key indicators of treasury stability</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Runway (months)</span>
                    <span className="font-semibold text-green-600">24 months</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Burn Rate</span>
                    <span className="font-semibold">32k LLD/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Revenue Growth</span>
                    <span className="font-semibold text-green-600">+15% MoM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Reserve Ratio</span>
                    <span className="font-semibold">40% of total</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Audit Status</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      Up to date
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="allocations">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Fund Allocation Strategy</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our treasury allocation follows strategic priorities established through community governance,
                  ensuring resources are directed toward initiatives that maximize long-term value for all citizens.
                </p>
              </div>

              <div className="grid gap-6">
                {fundAllocations.map((allocation, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-4 h-4 rounded-full ${allocation.color}`} />
                          <div>
                            <CardTitle className="text-xl">{allocation.category}</CardTitle>
                            <CardDescription>
                              {allocation.amount.toLocaleString()} LLD allocated
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-lg px-3 py-1">
                          {allocation.percentage}%
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="w-full bg-muted rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${allocation.color}`}
                            style={{ width: `${allocation.percentage}%` }}
                          />
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Monthly Budget</span>
                            <div className="font-semibold">{Math.round(allocation.amount * 0.08).toLocaleString()} LLD</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Q1 Spending</span>
                            <div className="font-semibold">{Math.round(allocation.amount * 0.15).toLocaleString()} LLD</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Utilization</span>
                            <div className="font-semibold text-green-600">78%</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Allocation Governance</CardTitle>
                  <CardDescription>How fund allocations are determined</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Annual Budget Process</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Community proposals submitted quarterly</li>
                        <li>• Budget committee review and prioritization</li>
                        <li>• Public voting on major allocations</li>
                        <li>• Executive implementation with oversight</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Reallocation Triggers</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Emergency situations (auto 10% reserve)</li>
                        <li>• Performance-based adjustments</li>
                        <li>• Strategic priority shifts</li>
                        <li>• Community-initiated referendums</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transactions">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Transaction History</h2>
                  <p className="text-muted-foreground">Complete audit trail of all treasury activities</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline">Export CSV</Button>
                  <Button variant="outline">Filter</Button>
                </div>
              </div>

              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <Card key={transaction.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg ${
                            transaction.type === 'incoming'
                              ? 'bg-green-50 dark:bg-green-900/20'
                              : 'bg-red-50 dark:bg-red-900/20'
                          }`}>
                            {transaction.type === 'incoming' ? (
                              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{transaction.description}</h4>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              <span>{transaction.category}</span>
                              <span>•</span>
                              <span>{transaction.date}</span>
                              <Badge
                                variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                                className="text-xs"
                              >
                                {transaction.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className={`text-right font-mono font-semibold ${
                          transaction.type === 'incoming'
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-red-600 dark:text-red-400'
                        }`}>
                          {transaction.type === 'incoming' ? '+' : '-'}{transaction.amount.toLocaleString()} LLD
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Transaction Analytics</CardTitle>
                  <CardDescription>Monthly spending breakdown and trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">127</div>
                      <div className="text-sm text-muted-foreground">Total Transactions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">89</div>
                      <div className="text-sm text-muted-foreground">Incoming</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">38</div>
                      <div className="text-sm text-muted-foreground">Outgoing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">98.7%</div>
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="proposals">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Budget Proposals</h2>
                  <p className="text-muted-foreground">Community proposals for treasury fund allocation</p>
                </div>
                <Button>Submit New Proposal</Button>
              </div>

              <div className="grid gap-6">
                {budgetProposals.map((proposal) => (
                  <Card key={proposal.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <Badge
                          className={
                            proposal.status === 'approved' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                            proposal.status === 'rejected' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                            'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          }
                        >
                          {proposal.status}
                        </Badge>
                        <Badge variant="outline" className="border-purple-200 dark:border-purple-800">
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
                        <span className="font-semibold text-foreground">{(proposal.votesFor + proposal.votesAgainst).toLocaleString()}</span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-green-600 dark:text-green-400">For: {proposal.votesFor.toLocaleString()}</span>
                          <span className="text-red-600 dark:text-red-400">Against: {proposal.votesAgainst.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-green-600 h-full transition-all"
                            style={{ width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <div className="text-sm text-muted-foreground">
                          Requested: <span className="font-semibold text-foreground">{proposal.requestedAmount.toLocaleString()} LLD</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Ends on {proposal.endDate}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Proposal Guidelines</CardTitle>
                  <CardDescription>Requirements for submitting budget proposals</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Eligibility Requirements</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Must be a verified citizen</li>
                        <li>• Minimum 100 LLD token holding</li>
                        <li>• No active proposals in voting</li>
                        <li>• Clean participation history</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Proposal Standards</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Detailed budget breakdown required</li>
                        <li>• Clear success metrics defined</li>
                        <li>• Timeline and milestones specified</li>
                        <li>• Community impact assessment</li>
                      </ul>
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