"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react"

export default function VotingPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [quadraticVotes, setQuadraticVotes] = useState<Record<string, number>>({
    optionA: 0,
    optionB: 0,
    optionC: 0
  })
  const [convictionVotes, setConvictionVotes] = useState<Record<string, { votes: number, time: number }>>({
    proposal1: { votes: 0, time: 0 },
    proposal2: { votes: 0, time: 0 }
  })

  const quadraticCost = (votes: number) => votes * votes
  const convictionPower = (votes: number, time: number) => votes * Math.sqrt(time + 1)

  const handleQuadraticVote = (option: string, increment: number) => {
    setQuadraticVotes(prev => ({
      ...prev,
      [option]: Math.max(0, prev[option] + increment)
    }))
  }

  const handleConvictionVote = (proposal: string, votes: number, time: number) => {
    setConvictionVotes(prev => ({
      ...prev,
      [proposal]: { votes, time }
    }))
  }

  const totalQuadraticCost = Object.values(quadraticVotes).reduce((sum, votes) => sum + quadraticCost(votes), 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-foreground mb-6">Advanced Voting Systems</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the future of democratic decision-making with our suite of innovative voting mechanisms.
              From quadratic voting that expresses preference intensity to conviction voting that rewards long-term commitment,
              our systems ensure fair and effective governance for all citizens.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Try Voting Demo</Button>
              <Button size="lg" variant="outline">
                Learn More
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
            <TabsTrigger value="quadratic">Quadratic Voting</TabsTrigger>
            <TabsTrigger value="conviction">Conviction Voting</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg w-fit mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg">Quadratic Voting</CardTitle>
                  <CardDescription>Express preference intensity</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Vote with conviction using exponentially increasing costs
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg w-fit mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg">Conviction Voting</CardTitle>
                  <CardDescription>Time-locked commitment</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Build influence through sustained participation
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg w-fit mx-auto mb-3">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg">One Person One Vote</CardTitle>
                  <CardDescription>Equal representation</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Traditional democratic voting for clear decisions
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg w-fit mx-auto mb-3">
                    <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg">Token Weighted</CardTitle>
                  <CardDescription>Stake-based voting</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Voting power proportional to token holdings
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Voting Philosophy</CardTitle>
                  <CardDescription>Why multiple voting systems matter</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Context Matters</h4>
                      <p className="text-sm text-muted-foreground">Different decisions require different voting mechanisms for optimal outcomes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Fair Representation</h4>
                      <p className="text-sm text-muted-foreground">Advanced systems prevent domination by large stakeholders while maintaining efficiency.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Long-term Thinking</h4>
                      <p className="text-sm text-muted-foreground">Mechanisms that reward sustained participation encourage thoughtful governance.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Implementation Stats</CardTitle>
                  <CardDescription>Current voting system usage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Quadratic Voting</span>
                    <span className="font-semibold">45% of proposals</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Conviction Voting</span>
                    <span className="font-semibold">30% of proposals</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">One Person One Vote</span>
                    <span className="font-semibold">20% of proposals</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Token Weighted</span>
                    <span className="font-semibold">5% of proposals</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="quadratic">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Quadratic Voting Demo</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                  Experience quadratic voting where the cost of additional votes increases quadratically.
                  This prevents large stakeholders from dominating decisions while allowing strong preferences to be expressed.
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Policy Decision: Environmental Fund Allocation</CardTitle>
                  <CardDescription>Vote on how to allocate 100 ETH for environmental initiatives</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Option A: Reforestation</h4>
                      <p className="text-sm text-muted-foreground">Plant 1 million trees in deforested areas</p>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuadraticVote('optionA', -1)}
                          disabled={quadraticVotes.optionA <= 0}
                        >
                          -
                        </Button>
                        <span className="font-mono text-lg min-w-[2rem] text-center">{quadraticVotes.optionA}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuadraticVote('optionA', 1)}
                        >
                          +
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Cost: {quadraticCost(quadraticVotes.optionA)} credits
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Option B: Clean Energy</h4>
                      <p className="text-sm text-muted-foreground">Fund solar panel installation in rural areas</p>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuadraticVote('optionB', -1)}
                          disabled={quadraticVotes.optionB <= 0}
                        >
                          -
                        </Button>
                        <span className="font-mono text-lg min-w-[2rem] text-center">{quadraticVotes.optionB}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuadraticVote('optionB', 1)}
                        >
                          +
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Cost: {quadraticCost(quadraticVotes.optionB)} credits
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Option C: Ocean Cleanup</h4>
                      <p className="text-sm text-muted-foreground">Deploy autonomous cleanup vessels</p>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuadraticVote('optionC', -1)}
                          disabled={quadraticVotes.optionC <= 0}
                        >
                          -
                        </Button>
                        <span className="font-mono text-lg min-w-[2rem] text-center">{quadraticVotes.optionC}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleQuadraticVote('optionC', 1)}
                        >
                          +
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Cost: {quadraticCost(quadraticVotes.optionC)} credits
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total Voting Credits Used:</span>
                      <span className="text-2xl font-bold text-blue-600">{totalQuadraticCost}</span>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">How Quadratic Voting Works:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Each additional vote costs exponentially more (vote strength squared)</li>
                        <li>• Strong preferences can be expressed, but at high cost</li>
                        <li>• Prevents single individuals from dominating decisions</li>
                        <li>• Encourages compromise and broad consensus</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="conviction">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Conviction Voting Demo</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                  Experience conviction voting where voting power increases over time. The longer you maintain your vote,
                  the more influence you gain, encouraging long-term thinking and commitment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Proposal 1: Community Garden Initiative</CardTitle>
                    <CardDescription>Establish community gardens in urban areas</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Vote Strength (0-10)</label>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        value={convictionVotes.proposal1.votes}
                        onChange={(e) => handleConvictionVote('proposal1', parseInt(e.target.value), convictionVotes.proposal1.time)}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0</span>
                        <span>Current: {convictionVotes.proposal1.votes}</span>
                        <span>10</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Time Commitment (days)</label>
                      <input
                        type="range"
                        min="1"
                        max="30"
                        value={convictionVotes.proposal1.time}
                        onChange={(e) => handleConvictionVote('proposal1', convictionVotes.proposal1.votes, parseInt(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1</span>
                        <span>Current: {convictionVotes.proposal1.time}</span>
                        <span>30</span>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <div className="text-sm">
                        <span className="font-semibold">Conviction Power: </span>
                        <span className="font-mono text-blue-600 dark:text-blue-400">
                          {convictionPower(convictionVotes.proposal1.votes, convictionVotes.proposal1.time).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Proposal 2: Digital Education Platform</CardTitle>
                    <CardDescription>Create free online learning resources</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Vote Strength (0-10)</label>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        value={convictionVotes.proposal2.votes}
                        onChange={(e) => handleConvictionVote('proposal2', parseInt(e.target.value), convictionVotes.proposal2.time)}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0</span>
                        <span>Current: {convictionVotes.proposal2.votes}</span>
                        <span>10</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Time Commitment (days)</label>
                      <input
                        type="range"
                        min="1"
                        max="30"
                        value={convictionVotes.proposal2.time}
                        onChange={(e) => handleConvictionVote('proposal2', convictionVotes.proposal2.votes, parseInt(e.target.value))}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>1</span>
                        <span>Current: {convictionVotes.proposal2.time}</span>
                        <span>30</span>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <div className="text-sm">
                        <span className="font-semibold">Conviction Power: </span>
                        <span className="font-mono text-green-600 dark:text-green-400">
                          {convictionPower(convictionVotes.proposal2.votes, convictionVotes.proposal2.time).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>How Conviction Voting Works</CardTitle>
                  <CardDescription>The mathematics behind time-locked voting power</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Formula</h4>
                      <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                        Conviction = Vote × √(Time + 1)
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Voting power grows with both vote strength and time commitment
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Benefits</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Rewards long-term thinking</li>
                        <li>• Reduces impulsive decisions</li>
                        <li>• Encourages sustained participation</li>
                        <li>• Builds community commitment</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comparison">
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Voting System Comparison</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Compare different voting mechanisms to understand when each system is most effective
                  for different types of governance decisions.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-4 text-left font-semibold">Aspect</th>
                      <th className="border border-border p-4 text-center font-semibold">Quadratic</th>
                      <th className="border border-border p-4 text-center font-semibold">Conviction</th>
                      <th className="border border-border p-4 text-center font-semibold">1P1V</th>
                      <th className="border border-border p-4 text-center font-semibold">Token Weighted</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4 font-medium">Fairness</td>
                      <td className="border border-border p-4 text-center text-green-600">★★★★★</td>
                      <td className="border border-border p-4 text-center text-green-600">★★★★☆</td>
                      <td className="border border-border p-4 text-center text-green-600">★★★★★</td>
                      <td className="border border-border p-4 text-center text-red-600">★★☆☆☆</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-4 font-medium">Complexity</td>
                      <td className="border border-border p-4 text-center text-orange-600">★★★☆☆</td>
                      <td className="border border-border p-4 text-center text-orange-600">★★★☆☆</td>
                      <td className="border border-border p-4 text-center text-green-600">★★★★★</td>
                      <td className="border border-border p-4 text-center text-green-600">★★★★★</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium">Long-term Thinking</td>
                      <td className="border border-border p-4 text-center text-orange-600">★★★☆☆</td>
                      <td className="border border-border p-4 text-center text-green-600">★★★★★</td>
                      <td className="border border-border p-4 text-center text-orange-600">★★★☆☆</td>
                      <td className="border border-border p-4 text-center text-orange-600">★★★☆☆</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-4 font-medium">Speed of Decision</td>
                      <td className="border border-border p-4 text-center text-orange-600">★★★☆☆</td>
                      <td className="border border-border p-4 text-center text-red-600">★★☆☆☆</td>
                      <td className="border border-border p-4 text-center text-green-600">★★★★★</td>
                      <td className="border border-border p-4 text-center text-green-600">★★★★★</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4 font-medium">Best For</td>
                      <td className="border border-border p-4 text-center text-xs">Preference intensity</td>
                      <td className="border border-border p-4 text-center text-xs">Long-term impact</td>
                      <td className="border border-border p-4 text-center text-xs">Clear binary choices</td>
                      <td className="border border-border p-4 text-center text-xs">Token value decisions</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>When to Use Each System</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-blue-600">Quadratic Voting</h4>
                      <p className="text-sm text-muted-foreground">
                        Budget allocations, resource distribution, policy preferences where intensity matters
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-600">Conviction Voting</h4>
                      <p className="text-sm text-muted-foreground">
                        Infrastructure projects, constitutional changes, long-term strategic decisions
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-600">One Person One Vote</h4>
                      <p className="text-sm text-muted-foreground">
                        Constitutional amendments, leadership elections, clear yes/no decisions
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-orange-600">Token Weighted</h4>
                      <p className="text-sm text-muted-foreground">
                        Protocol upgrades, treasury spending that affects token value, technical decisions
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Implementation Considerations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">User Education</h4>
                        <p className="text-sm text-muted-foreground">Citizens need to understand how each system works</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Proposal Categorization</h4>
                        <p className="text-sm text-muted-foreground">Automatically suggest appropriate voting mechanisms</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Hybrid Approaches</h4>
                        <p className="text-sm text-muted-foreground">Combine systems for complex multi-stage decisions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </TabsRoot>
      </div>
    </div>
  )
}