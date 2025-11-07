"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Play, FileText, CheckCircle, Clock } from "lucide-react"
import Link from "next/link"

interface Module {
  id: string
  title: string
  description: string
  duration: string
  videoUrl?: string
  content: string
  completed: boolean
}

export default function GettingStartedCourse() {
  const [currentModule, setCurrentModule] = useState(0)
  const [completedModules, setCompletedModules] = useState<Set<number>>(new Set())

  const modules: Module[] = [
    {
      id: "intro",
      title: "What is a Network State?",
      description: "Understanding the fundamental concept of network states",
      duration: "8 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# What is a Network State?

A **network state** is a highly aligned online community with a capacity for collective action that crowdfunds territory around the world and eventually gains diplomatic recognition.

## Key Characteristics

### 1. Digital-Native Governance
Network states operate primarily in digital spaces, using blockchain technology and decentralized governance systems to make decisions and allocate resources.

### 2. Crowdfunded Territory
Unlike traditional nation-states that claim territory through conquest or inheritance, network states acquire land through crowdfunding campaigns and community contributions.

### 3. Meritocratic Leadership
Leadership is determined by merit and contribution rather than birth or wealth. Decision-making power is distributed based on demonstrated value to the community.

### 4. Technological Sovereignty
Network states maintain their own technological infrastructure, including blockchain networks, communication systems, and digital identity frameworks.

## Why Network States Matter

Traditional nation-states are increasingly unable to adapt to the rapid pace of technological change. Network states offer:

- **Innovation**: Faster iteration and experimentation
- **Inclusivity**: Global participation regardless of geography
- **Efficiency**: Optimized resource allocation through markets and algorithms
- **Resilience**: Decentralized systems resistant to single points of failure

## Getting Started

The journey to building a network state begins with understanding these core principles and assembling a community of aligned individuals ready to contribute to something greater than themselves.
      `,
      completed: false
    },
    {
      id: "vision",
      title: "The Vision and Mission",
      description: "Exploring the long-term goals and purpose",
      duration: "12 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# The Vision and Mission

## Our Vision

To create a network of sovereign digital communities that collectively advance human flourishing through technological innovation, decentralized governance, and global cooperation.

## Core Mission

### 1. Technological Sovereignty
Develop and maintain independent technological infrastructure that serves the needs of our community without reliance on external platforms or governments.

### 2. Economic Freedom
Create sustainable economic models that reward contribution, innovation, and long-term thinking over short-term profit maximization.

### 3. Knowledge Preservation
Build robust systems for preserving and advancing human knowledge, ensuring that critical information survives catastrophic events.

### 4. Global Cooperation
Foster collaboration between network states to solve global challenges that individual nation-states cannot address alone.

## Strategic Objectives

### Short-term (1-2 years)
- Establish core technological infrastructure
- Build initial community of contributors
- Launch first economic experiments
- Develop governance frameworks

### Medium-term (3-5 years)
- Acquire initial territory through crowdfunding
- Establish diplomatic recognition protocols
- Scale community to thousands of active participants
- Launch advanced technological projects

### Long-term (5+ years)
- Achieve full technological and economic sovereignty
- Establish network state as recognized diplomatic entity
- Expand to multiple territories worldwide
- Contribute to global technological advancement

## Values and Principles

### Meritocracy
Decisions and opportunities are allocated based on demonstrated merit and contribution to the community.

### Transparency
All governance decisions, financial transactions, and technological developments are publicly auditable.

### Sustainability
All systems and processes are designed for long-term viability and environmental responsibility.

### Inclusivity
Participation is open to anyone who shares our vision and is willing to contribute positively.
      `,
      completed: false
    },
    {
      id: "community",
      title: "Building Your Community",
      description: "Strategies for growing and maintaining a healthy community",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Building Your Community

## Community Fundamentals

### 1. Shared Vision
Every successful community starts with a clear, compelling vision that resonates with potential members. This vision must be:

- **Specific**: Clearly defined goals and objectives
- **Inspiring**: Motivates action and commitment
- **Achievable**: Realistic within reasonable timeframes
- **Measurable**: Progress can be tracked and celebrated

### 2. Core Values
Define and communicate the fundamental principles that guide your community's behavior and decisions.

### 3. Clear Expectations
Set transparent expectations for participation, contribution, and community standards.

## Growth Strategies

### Organic Growth
- **Content Creation**: Share valuable insights and resources
- **Networking**: Participate in relevant online communities
- **Word of Mouth**: Encourage satisfied members to invite others
- **Quality over Quantity**: Focus on attracting aligned individuals

### Community Management
- **Onboarding Process**: Smooth integration of new members
- **Regular Communication**: Keep members informed and engaged
- **Conflict Resolution**: Fair and transparent dispute resolution
- **Recognition Systems**: Reward valuable contributions

### Retention Strategies
- **Value Delivery**: Consistently provide value to members
- **Community Events**: Regular meetups, discussions, and activities
- **Feedback Loops**: Listen to member concerns and suggestions
- **Personal Connections**: Foster meaningful relationships

## Community Structure

### Roles and Responsibilities
- **Contributors**: Active participants who add value
- **Moderators**: Maintain community standards
- **Administrators**: Oversee operations and strategy
- **Ambassadors**: Represent the community externally

### Communication Channels
- **Primary Platform**: Main community hub
- **Specialized Channels**: Topic-specific discussions
- **Direct Communication**: Private messaging for sensitive matters
- **Public Forums**: Open discussions and announcements

## Measuring Success

### Quantitative Metrics
- Member growth rate
- Active participation levels
- Content engagement statistics
- Contribution frequency

### Qualitative Indicators
- Member satisfaction surveys
- Community sentiment analysis
- Quality of discussions
- Innovation and creativity levels

## Common Challenges

### Growth Plateaus
- Reassess value proposition
- Explore new marketing channels
- Partner with complementary communities

### Community Conflicts
- Establish clear conflict resolution processes
- Promote empathy and understanding
- Focus on shared goals

### Burnout Prevention
- Rotate responsibilities
- Encourage work-life balance
- Provide support systems

## Next Steps

Building a strong community is an ongoing process that requires consistent effort, adaptability, and genuine care for your members. Focus on creating genuine value and fostering meaningful connections.
      `,
      completed: false
    },
    {
      id: "technology",
      title: "Core Technologies",
      description: "Essential technological foundations for network states",
      duration: "20 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Core Technologies

## Blockchain and Cryptocurrencies

### Why Blockchain Matters
Blockchain technology provides the foundation for decentralized governance, transparent transactions, and digital sovereignty.

### Key Components
- **Smart Contracts**: Self-executing agreements
- **Decentralized Identity**: User-controlled digital identities
- **Token Economics**: Incentive alignment mechanisms
- **Governance Systems**: Decentralized decision-making

## Communication Infrastructure

### Secure Messaging
- End-to-end encrypted communication channels
- Decentralized messaging protocols
- Secure group communication

### Content Management
- Decentralized content storage (IPFS, Arweave)
- Censorship-resistant publishing platforms
- Collaborative editing systems

## Data Management

### Database Systems
- Distributed databases for resilience
- Privacy-preserving data storage
- Secure backup and recovery systems

### Analytics and Monitoring
- Real-time system monitoring
- Community analytics dashboards
- Performance optimization tools

## Security Infrastructure

### Cryptographic Foundations
- Public-key cryptography for authentication
- Zero-knowledge proofs for privacy
- Multi-signature schemes for security

### Network Security
- Distributed denial-of-service protection
- Secure communication protocols
- Regular security audits and updates

## Development Tools

### Programming Languages
- Rust for system-level programming
- TypeScript for web applications
- Solidity for smart contracts

### Development Environment
- Containerization (Docker)
- Infrastructure as Code (Terraform)
- Continuous Integration/Deployment

## Economic Systems

### Token Design
- Utility tokens for platform access
- Governance tokens for voting rights
- Stablecoins for value preservation

### Marketplace Infrastructure
- Decentralized exchanges
- Automated market makers
- Prediction markets

## Governance Tools

### Voting Systems
- Quadratic voting for resource allocation
- Liquid democracy for decision-making
- Futarchy for outcome-based governance

### Dispute Resolution
- Decentralized arbitration systems
- Community courts
- Automated enforcement mechanisms

## Integration and APIs

### Interoperability
- Cross-platform communication protocols
- Standardized API interfaces
- Modular system architecture

### Third-party Integrations
- Payment processors
- Identity verification services
- Communication platforms

## Future Technologies

### Artificial Intelligence
- AI-assisted governance
- Automated decision support
- Natural language processing for community interaction

### Quantum Computing
- Post-quantum cryptography
- Advanced optimization algorithms
- Quantum-secure communication

### Biotechnology
- Decentralized health records
- Community biotechnology initiatives
- Longevity research coordination

## Implementation Strategy

### Phase 1: Foundation
- Establish basic blockchain infrastructure
- Implement core communication systems
- Set up initial governance frameworks

### Phase 2: Expansion
- Integrate advanced security features
- Deploy economic systems
- Scale community infrastructure

### Phase 3: Optimization
- Implement AI assistance systems
- Optimize performance and user experience
- Expand interoperability

## Technical Challenges

### Scalability
- Handling growth from hundreds to millions of users
- Maintaining performance under load
- Optimizing resource utilization

### Security
- Protecting against sophisticated attacks
- Ensuring user privacy
- Maintaining system integrity

### Usability
- Making complex systems accessible
- Providing intuitive user interfaces
- Reducing technical barriers to entry

## Learning Resources

### Recommended Reading
- "The Network State" by Balaji
- "Blockchain Basics" by Antony Lewis
- "Cryptography Engineering" by Niels Ferguson

### Online Courses
- Blockchain Fundamentals
- Decentralized Systems Design
- Cryptocurrency Economics

### Communities
- Developer forums and Discord servers
- Technical conferences and meetups
- Open-source contribution opportunities
      `,
      completed: false
    },
    {
      id: "governance",
      title: "Governance Models",
      description: "Understanding different approaches to decentralized governance",
      duration: "18 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Governance Models

## Introduction to Governance

Governance in network states represents a fundamental shift from traditional hierarchical structures to decentralized, participatory systems. Effective governance ensures that decisions align with community values and long-term goals.

## Core Principles

### 1. Decentralization
Power is distributed across the community rather than concentrated in a central authority.

### 2. Transparency
All decisions and their rationales are publicly visible and auditable.

### 3. Accountability
Participants are responsible for the outcomes of their decisions and actions.

### 4. Adaptability
Systems can evolve and improve based on community feedback and changing circumstances.

## Governance Models

### Direct Democracy
Every member has an equal vote on all decisions.

**Advantages:**
- High legitimacy and participation
- Direct representation of community will
- Simple and transparent

**Challenges:**
- Scalability issues with large communities
- Potential for uninformed decision-making
- Time-consuming for frequent decisions

### Representative Democracy
Members elect representatives to make decisions on their behalf.

**Advantages:**
- Scalable to large communities
- Allows specialization of decision-making
- More efficient for complex issues

**Challenges:**
- Potential for representative capture
- Less direct participation
- Risk of elite formation

### Liquid Democracy
Members can vote directly or delegate their voting power to trusted representatives.

**Advantages:**
- Combines benefits of direct and representative democracy
- Flexible participation levels
- Allows expertise utilization

**Challenges:**
- Complex delegation chains
- Potential for manipulation
- Requires sophisticated technology

### Quadratic Voting
Voting power is allocated based on the square root of tokens held, reducing the influence of large holders.

**Advantages:**
- Reduces wealth-based power concentration
- Encourages broad participation
- Mathematically optimal for preference aggregation

**Challenges:**
- Complex implementation
- Higher cognitive load for participants
- Potential for strategic voting

### Futarchy
Decisions are made based on prediction markets that forecast outcomes.

**Advantages:**
- Evidence-based decision-making
- Incentivizes accurate information revelation
- Reduces ideological bias

**Challenges:**
- Requires sophisticated market infrastructure
- Vulnerable to manipulation
- Complex for non-quantifiable decisions

## Implementation Strategies

### Voting Systems
- **On-chain Governance**: Blockchain-based voting for transparent, immutable records
- **Off-chain Governance**: Web-based interfaces for user-friendly participation
- **Hybrid Approaches**: Combining on-chain security with off-chain usability

### Decision Frameworks
- **Proposal Systems**: Structured process for submitting and evaluating proposals
- **Working Groups**: Specialized teams handling specific domains
- **Advisory Councils**: Expert groups providing recommendations

### Incentive Alignment
- **Participation Rewards**: Token rewards for active governance participation
- **Quality Incentives**: Bonuses for well-researched proposals
- **Long-term Alignment**: Mechanisms encouraging long-term thinking

## Governance Tools and Platforms

### Voting Platforms
- **Snapshot**: Off-chain voting for DAOs
- **Tally**: On-chain governance interface
- **Agora**: Quadratic voting platform

### Proposal Systems
- **Compound Governance**: Template-based proposal creation
- **Governor Bravo**: Optimized governance contracts
- **OpenZeppelin Governor**: Modular governance framework

### Analytics and Monitoring
- **Boardroom**: Governance analytics dashboard
- **DeepDAO**: Comprehensive DAO analytics
- **Tally Insights**: Voting participation metrics

## Best Practices

### Process Design
- **Clear Timelines**: Defined periods for proposal submission, discussion, and voting
- **Structured Discussions**: Organized forums for proposal evaluation
- **Implementation Tracking**: Systems for monitoring decision execution

### Community Education
- **Governance Literacy**: Educational programs on governance concepts
- **Process Transparency**: Clear documentation of all governance processes
- **Feedback Mechanisms**: Regular surveys on governance satisfaction

### Risk Management
- **Gradual Implementation**: Start with simple systems and gradually increase complexity
- **Fallback Mechanisms**: Emergency procedures for governance failures
- **Regular Audits**: Independent reviews of governance systems

## Measuring Governance Health

### Quantitative Metrics
- **Participation Rate**: Percentage of members actively participating
- **Proposal Volume**: Number and quality of proposals submitted
- **Decision Speed**: Time from proposal to implementation
- **Voter Turnout**: Percentage voting in important decisions

### Qualitative Indicators
- **Community Satisfaction**: Surveys on governance experience
- **Decision Quality**: Assessment of decision outcomes
- **Conflict Resolution**: Effectiveness of dispute resolution processes
- **Innovation Level**: Rate of novel proposals and solutions

## Challenges and Solutions

### Voter Apathy
- **Gamification**: Make participation engaging and rewarding
- **Simplified Interfaces**: User-friendly voting platforms
- **Delegated Voting**: Allow passive participation through delegation

### Sybil Attacks
- **Identity Verification**: Robust identity systems
- **Proof of Stake**: Require stake for voting rights
- **Reputation Systems**: Build trust through demonstrated contribution

### Coordination Problems
- **Clear Communication**: Transparent information sharing
- **Modular Structure**: Break complex decisions into manageable parts
- **Facilitation Support**: Trained facilitators for complex discussions

## Future of Governance

### AI-Assisted Governance
- **Decision Support**: AI analysis of proposal impacts
- **Automated Execution**: Smart contracts for routine decisions
- **Sentiment Analysis**: AI monitoring of community sentiment

### Predictive Governance
- **Outcome Forecasting**: Prediction markets for decision outcomes
- **Impact Assessment**: AI evaluation of proposal consequences
- **Trend Analysis**: Identification of emerging community preferences

### Global Governance Networks
- **Interoperability**: Governance systems that work across network states
- **Shared Standards**: Common frameworks for governance processes
- **Collaborative Decision-Making**: Cross-community governance initiatives

## Getting Started with Governance

### 1. Assess Your Community
- Current size and engagement levels
- Existing decision-making processes
- Community values and preferences

### 2. Choose Appropriate Models
- Start with simpler systems for small communities
- Plan for scalability as you grow
- Consider hybrid approaches for flexibility

### 3. Implement Gradually
- Begin with non-critical decisions
- Gather feedback and iterate
- Build trust through successful implementations

### 4. Educate and Engage
- Provide governance education
- Encourage active participation
- Celebrate successful governance outcomes

## Conclusion

Effective governance is the foundation of successful network states. By implementing transparent, participatory, and adaptive governance systems, network states can achieve better decision-making, higher community engagement, and more sustainable outcomes than traditional hierarchical organizations.
      `,
      completed: false
    }
  ]

  const progress = (completedModules.size / modules.length) * 100

  const markCompleted = (index: number) => {
    const newCompleted = new Set(completedModules)
    newCompleted.add(index)
    setCompletedModules(newCompleted)
  }

  const nextModule = () => {
    if (currentModule < modules.length - 1) {
      setCurrentModule(currentModule + 1)
    }
  }

  const prevModule = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/learn" className="text-white/80 hover:text-white">
              ← Back to Learning Center
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <Badge className="mb-2 bg-white/20 text-white border-white/30">Getting Started</Badge>
              <h1 className="text-4xl font-bold mb-2">Network State Fundamentals</h1>
              <p className="text-xl text-white/90 mb-4">
                Master the core concepts and build your foundation for network state development
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>{modules.length} Modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{modules.reduce((acc, m) => acc + parseInt(m.duration), 0)} min total</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>{completedModules.size} completed</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 rounded-lg p-4 min-w-[200px]">
                <div className="text-sm font-medium mb-2">Progress</div>
                <Progress value={progress} className="mb-2" />
                <div className="text-xs text-white/80">{Math.round(progress)}% complete</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Module List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Modules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {modules.map((module, index) => (
                  <button
                    key={module.id}
                    onClick={() => setCurrentModule(index)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentModule === index
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-sm">{module.title}</div>
                        <div className="text-xs opacity-70">{module.duration}</div>
                      </div>
                      {completedModules.has(index) && (
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 ml-2" />
                      )}
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">{modules[currentModule].title}</CardTitle>
                    <CardDescription className="text-base mt-2">
                      {modules[currentModule].description}
                    </CardDescription>
                  </div>
                  <Badge variant="outline">{modules[currentModule].duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <TabsRoot defaultValue="content">
                  <TabsList className="mb-6">
                    <TabsTrigger value="content">Documentation</TabsTrigger>
                    <TabsTrigger value="video">Video</TabsTrigger>
                  </TabsList>

                  <TabsContent value="content" className="space-y-6">
                    <div
                      className="prose prose-slate dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: modules[currentModule].content.replace(/\n/g, '<br>')
                      }}
                    />
                  </TabsContent>

                  <TabsContent value="video" className="space-y-6">
                    {modules[currentModule].videoUrl ? (
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                        <iframe
                          src={modules[currentModule].videoUrl}
                          className="w-full h-full"
                          allowFullScreen
                          title={modules[currentModule].title}
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Play className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                          <p className="text-muted-foreground">Video coming soon</p>
                        </div>
                      </div>
                    )}
                  </TabsContent>
                </TabsRoot>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={prevModule}
                    disabled={currentModule === 0}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  <div className="flex gap-2">
                    {!completedModules.has(currentModule) && (
                      <Button onClick={() => markCompleted(currentModule)}>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Mark Complete
                      </Button>
                    )}
                    <Button
                      onClick={nextModule}
                      disabled={currentModule === modules.length - 1}
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
