"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react"

export default function EconomyPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const economicMetrics = {
    totalValueLocked: 25000000,
    circulatingSupply: 100000000,
    marketCap: 150000000,
    stakingRatio: 68,
    inflationRate: 2.5,
    treasuryBalance: 12500000
  }

  const tokenomics = {
    totalSupply: 1000000000,
    distribution: [
      { category: "Community Treasury", percentage: 40, amount: 400000000, color: "bg-blue-500" },
      { category: "Governance Staking", percentage: 25, amount: 250000000, color: "bg-green-500" },
      { category: "Team & Advisors", percentage: 15, amount: 150000000, color: "bg-purple-500" },
      { category: "Public Sale", percentage: 10, amount: 100000000, color: "bg-orange-500" },
      { category: "Liquidity & Operations", percentage: 7, amount: 70000000, color: "bg-red-500" },
      { category: "Future Development", percentage: 3, amount: 30000000, color: "bg-yellow-500" }
    ]
  }

  const economicPrinciples = [
    {
      principle: "Sustainable Growth",
      description: "Economic policies designed for long-term prosperity rather than short-term gains",
      icon: "🌱",
      benefits: ["Stable economic foundation", "Reduced volatility", "Intergenerational equity"]
    },
    {
      principle: "Inclusive Prosperity",
      description: "Economic systems that benefit all citizens, not just the wealthy",
      icon: "🤝",
      benefits: ["Universal basic income", "Progressive taxation", "Wealth redistribution"]
    },
    {
      principle: "Digital Sovereignty",
      description: "Citizens maintain control over their economic participation and assets",
      icon: "🛡️",
      benefits: ["Self-custody of assets", "Decentralized finance", "Economic freedom"]
    },
    {
      principle: "Value Alignment",
      description: "Economic incentives aligned with network state values and goals",
      icon: "🎯",
      benefits: ["Governance participation rewards", "Community contribution incentives", "Sustainable development bonuses"]
    }
  ]

  const stakingRewards = [
    {
      tier: "Basic Citizen",
      requirement: "Active citizenship status",
      apr: "5-8%",
      lockPeriod: "Flexible",
      benefits: ["Governance voting rights", "Basic staking rewards", "Community access"]
    },
    {
      tier: "Active Participant",
      requirement: "Regular governance participation",
      apr: "8-12%",
      lockPeriod: "30 days minimum",
      benefits: ["Enhanced voting power", "Priority proposal access", "Exclusive events"]
    },
    {
      tier: "Community Leader",
      requirement: "Leadership role in working groups",
      apr: "12-18%",
      lockPeriod: "90 days minimum",
      benefits: ["Maximum voting influence", "Leadership bonuses", "Governance rewards"]
    },
    {
      tier: "Council Member",
      requirement: "Elected to governing council",
      apr: "18-25%",
      lockPeriod: "180 days minimum",
      benefits: ["Executive decision authority", "Highest staking rewards", "Legacy benefits"]
    }
  ]

  const economicPrograms = [
    {
      name: "Universal Basic Income",
      description: "Monthly payments to all citizens to ensure economic security",
      status: "Active",
      beneficiaries: 1247,
      monthlyDistribution: 50000,
      funding: "Treasury allocation"
    },
    {
      name: "Education Subsidy Program",
      description: "Financial support for citizens pursuing educational opportunities",
      status: "Active",
      beneficiaries: 89,
      monthlyDistribution: 15000,
      funding: "Community education fund"
    },
    {
      name: "Innovation Grants",
      description: "Funding for projects that advance network state development",
      status: "Applications Open",
      beneficiaries: 0,
      monthlyDistribution: 25000,
      funding: "Innovation treasury"
    },
    {
      name: "Healthcare Access Fund",
      description: "Support for citizens' healthcare and wellness needs",
      status: "Planning",
      beneficiaries: 0,
      monthlyDistribution: 0,
      funding: "Healthcare reserve"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-foreground mb-6">Economic Systems</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our economy is designed for sustainable prosperity, where technology and community
              work together to create lasting value for all citizens. Experience the future of digital economics.
            </p>
            <div className="flex gap-4">
              <Button size="lg">View Token Metrics</Button>
              <Button size="lg" variant="outline">
                Economic Dashboard
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
            <TabsTrigger value="tokenomics">Tokenomics</TabsTrigger>
            <TabsTrigger value="staking">Staking & Rewards</TabsTrigger>
            <TabsTrigger value="programs">Economic Programs</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Market Cap</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${(economicMetrics.marketCap / 1000000).toFixed(1)}M</div>
                  <p className="text-xs text-muted-foreground">
                    +12.5% this month
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">TVL</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20m9-9H3" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${(economicMetrics.totalValueLocked / 1000000).toFixed(1)}M</div>
                  <p className="text-xs text-muted-foreground">
                    Total value locked
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Staking Ratio</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{economicMetrics.stakingRatio}%</div>
                  <p className="text-xs text-muted-foreground">
                    Of circulating supply
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Treasury</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${(economicMetrics.treasuryBalance / 1000000).toFixed(1)}M</div>
                  <p className="text-xs text-muted-foreground">
                    Available funds
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Economic Principles</CardTitle>
                  <CardDescription>The foundation of our economic system</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {economicPrinciples.map((principle, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-2xl">{principle.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{principle.principle}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{principle.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {principle.benefits.map((benefit, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Economic Stability Metrics</CardTitle>
                  <CardDescription>Key indicators of economic health</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Inflation Rate</span>
                    <span className="font-semibold">{economicMetrics.inflationRate}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Velocity</span>
                    <span className="font-semibold">2.3x</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">GDP Growth</span>
                    <span className="font-semibold text-green-600">+8.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Employment Rate</span>
                    <span className="font-semibold text-green-600">94.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Debt-to-GDP Ratio</span>
                    <span className="font-semibold text-green-600">12.3%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tokenomics">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Token Economics</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our native token powers the entire ecosystem, enabling governance, economic participation,
                  and value creation for all citizens.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{(tokenomics.totalSupply / 1000000).toFixed(0)}M</CardTitle>
                    <CardDescription>Total Supply</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{(economicMetrics.circulatingSupply / 1000000).toFixed(0)}M</CardTitle>
                    <CardDescription>Circulating Supply</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{economicMetrics.inflationRate}%</CardTitle>
                    <CardDescription>Annual Inflation</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Token Distribution</CardTitle>
                  <CardDescription>Initial allocation of governance tokens</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tokenomics.distribution.map((allocation, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{allocation.category}</span>
                          <span>{allocation.percentage}% ({(allocation.amount / 1000000).toFixed(0)}M tokens)</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${allocation.color}`}
                            style={{ width: `${allocation.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Utility Functions</CardTitle>
                    <CardDescription>How tokens are used in our ecosystem</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Governance</h4>
                        <p className="text-sm text-muted-foreground">Vote on proposals and influence network direction</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Staking Rewards</h4>
                        <p className="text-sm text-muted-foreground">Earn rewards by participating in network security</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Economic Access</h4>
                        <p className="text-sm text-muted-foreground">Access to exclusive economic opportunities</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Economic Mechanisms</CardTitle>
                    <CardDescription>Built-in economic stabilizers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Inflation Schedule</h4>
                      <p className="text-sm text-muted-foreground">
                        Controlled inflation of 2.5% annually, distributed to stakers and community treasury
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Burn Mechanisms</h4>
                      <p className="text-sm text-muted-foreground">
                        Transaction fees and governance costs are burned, creating deflationary pressure
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Treasury Allocation</h4>
                      <p className="text-sm text-muted-foreground">
                        40% of total supply allocated to community treasury for long-term development
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="staking">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Staking & Rewards</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Participate in network security and governance while earning rewards.
                  Our staking system aligns individual incentives with collective prosperity.
                </p>
              </div>

              <div className="grid gap-6">
                {stakingRewards.map((tier, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className={
                              tier.tier === 'Basic Citizen' ? 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400' :
                              tier.tier === 'Active Participant' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                              tier.tier === 'Community Leader' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' :
                              'bg-gold-100 text-gold-800 dark:bg-gold-900/30 dark:text-gold-400'
                            }>
                              {tier.tier}
                            </Badge>
                            <span className="text-sm text-muted-foreground">APR: {tier.apr}</span>
                          </div>
                          <CardDescription className="mb-4">{tier.requirement}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">Staking Details</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">APR Range:</span>
                              <span className="font-medium">{tier.apr}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Lock Period:</span>
                              <span className="font-medium">{tier.lockPeriod}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">Benefits</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {tier.benefits.map((benefit, idx) => (
                              <li key={idx}>• {benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex gap-2 pt-4">
                        <Button size="sm" className="flex-1">Start Staking</Button>
                        <Button size="sm" variant="outline">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Staking Economics</CardTitle>
                  <CardDescription>How rewards are calculated and distributed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Reward Calculation</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Base APR determined by staking tier</li>
                        <li>• Participation bonus for governance activity</li>
                        <li>• Network performance multipliers</li>
                        <li>• Compounded daily distributions</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Unstaking Process</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Minimum lock periods apply</li>
                        <li>• Early unstaking penalties</li>
                        <li>• Rewards continue during lock period</li>
                        <li>• Instant unstaking available (reduced rewards)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="programs">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Economic Programs</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our economic programs ensure prosperity for all citizens through sustainable
                  financial mechanisms and social welfare initiatives.
                </p>
              </div>

              <div className="grid gap-6">
                {economicPrograms.map((program, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{program.name}</CardTitle>
                          <CardDescription className="mb-3">{program.description}</CardDescription>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <Badge
                              className={
                                program.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                                program.status === 'Applications Open' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                                'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                              }
                            >
                              {program.status}
                            </Badge>
                            <span>{program.beneficiaries} beneficiaries</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">Monthly Distribution</h4>
                          <div className="text-2xl font-bold">
                            {program.monthlyDistribution > 0 ? `${(program.monthlyDistribution / 1000).toFixed(0)}k LLD` : 'TBD'}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">Funding Source</h4>
                          <div className="text-sm text-muted-foreground">{program.funding}</div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">Actions</h4>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">Learn More</Button>
                            {program.status === 'Applications Open' && (
                              <Button size="sm">Apply</Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Economic Equity Initiatives</CardTitle>
                  <CardDescription>Programs designed to ensure prosperity for all citizens</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Universal Basic Income</h4>
                      <p className="text-sm text-muted-foreground">
                        Monthly payments to all citizens providing economic security and enabling
                        pursuit of passions beyond traditional employment.
                      </p>
                      <div className="bg-muted p-3 rounded-md">
                        <p className="text-xs font-mono text-muted-foreground">
                          50,000 LLD/month per citizen
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Progressive Taxation</h4>
                      <p className="text-sm text-muted-foreground">
                        Tax system that ensures the wealthy contribute proportionally more,
                        funding public goods and social programs.
                      </p>
                      <div className="bg-muted p-3 rounded-md">
                        <p className="text-xs font-mono text-muted-foreground">
                          0-25% marginal rates
                        </p>
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