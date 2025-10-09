"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filter, setFilter] = useState("all")

  const members = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Core Contributor",
      location: "Singapore",
      votingPower: 2500,
      reputation: 98,
      contributions: 45,
      joined: "2023-06-15",
      status: "active",
      specialties: ["Healthcare", "Policy"],
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Treasury Manager",
      location: "Dubai",
      votingPower: 3200,
      reputation: 95,
      contributions: 62,
      joined: "2023-05-20",
      status: "active",
      specialties: ["Finance", "Economics"],
    },
    {
      id: 3,
      name: "Elena Popov",
      role: "Legal Counsel",
      location: "Estonia",
      votingPower: 1800,
      reputation: 92,
      contributions: 38,
      joined: "2023-07-10",
      status: "active",
      specialties: ["Law", "Governance"],
    },
    {
      id: 4,
      name: "Alex Rivera",
      role: "Community Builder",
      location: "Miami",
      votingPower: 2100,
      reputation: 89,
      contributions: 71,
      joined: "2023-04-05",
      status: "active",
      specialties: ["Community", "Media"],
    },
    {
      id: 5,
      name: "Yuki Tanaka",
      role: "Developer",
      location: "Tokyo",
      votingPower: 1500,
      reputation: 94,
      contributions: 52,
      joined: "2023-08-12",
      status: "active",
      specialties: ["Technology", "Infrastructure"],
    },
    {
      id: 6,
      name: "Priya Sharma",
      role: "Citizen",
      location: "Bangalore",
      votingPower: 850,
      reputation: 78,
      contributions: 12,
      joined: "2023-11-01",
      status: "active",
      specialties: ["Education"],
    },
  ]

  const stats = [
    { label: "Total Citizens", value: "10,247", change: "+12%" },
    { label: "Active Contributors", value: "1,523", change: "+8%" },
    { label: "Countries", value: "52", change: "+3" },
    { label: "Avg. Reputation", value: "85", change: "+2" },
  ]

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
            <span className="text-foreground font-medium">Members</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Network State Citizens</h1>
          <p className="text-muted-foreground">Our global community of aligned individuals</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-8">
          <Input
            placeholder="Search members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Button variant="outline">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
          </Button>
        </div>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {member.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">{member.location}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Reputation</p>
                    <p className="font-medium text-foreground">{member.reputation}/100</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Voting Power</p>
                    <p className="font-medium text-foreground">{member.votingPower.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Contributions</p>
                    <p className="font-medium text-foreground">{member.contributions}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground">Joined {member.joined}</p>
                </div>
                <Button variant="outline" className="w-full">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          <Button variant="outline" size="sm">Previous</Button>
          <Button variant="outline" size="sm">1</Button>
          <Button size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  )
}
