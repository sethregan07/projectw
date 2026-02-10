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

export default function GovernanceCourse() {
  const [currentModule, setCurrentModule] = useState(0)
  const [completedModules, setCompletedModules] = useState<Set<number>>(new Set())

  const modules: Module[] = [
    {
      id: "direct-democracy",
      title: "Direct Democracy",
      description: "Understanding direct participation in decision-making",
      duration: "10 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Direct Democracy

## What is Direct Democracy?

Direct democracy is a system where citizens participate directly in decision-making rather than electing representatives to make decisions on their behalf. Every member of the community has an equal vote on all issues.

## Key Characteristics

### 1. Universal Participation
- Every eligible member can vote on every issue
- No intermediaries between citizens and decisions
- Equal voting power for all participants

### 2. Real-time Decision Making
- Decisions can be made as issues arise
- No waiting for representative terms to expire
- Immediate response to community needs

### 3. Transparency
- All votes are public and auditable
- Decision processes are visible to all
- No behind-the-scenes negotiations

## Advantages

### High Legitimacy
- Decisions reflect the direct will of the people
- No concerns about representative capture
- Strong democratic legitimacy

### Citizen Engagement
- Encourages active participation
- Builds community awareness
- Strengthens social bonds

### Rapid Response
- Quick decisions on urgent matters
- Adaptable to changing circumstances
- No bureaucratic delays

## Challenges

### Scalability Issues
- Difficult to implement in large communities
- Time-consuming for frequent decisions
- Information overload for participants

### Expertise Requirements
- Citizens need knowledge of complex issues
- Risk of uninformed decision-making
- Potential for emotional rather than rational choices

### Participation Fatigue
- Constant voting can lead to apathy
- Not all members will participate actively
- Risk of decision-making by vocal minorities

## Implementation in Network States

### Digital Tools
- Online voting platforms
- Real-time polling systems
- Blockchain-based immutable records

### Process Design
- Clear voting procedures
- Defined decision thresholds
- Appeal mechanisms for contested decisions

### Education and Support
- Voter education programs
- Decision support tools
- Expert advisory panels

## Case Studies

### Ancient Athens
- Birthplace of direct democracy
- Citizens voted directly on laws and policies
- Limited to free male citizens

### Swiss Cantons
- Regular referendums on policy issues
- Citizen-initiated legislation
- High participation rates

### Modern Examples
- Some Swiss cantons still use direct democracy
- Digital direct democracy experiments
- Corporate governance in some organizations

## Best Practices

### Clear Rules
- Well-defined voting procedures
- Transparent counting methods
- Dispute resolution processes

### Technology Support
- User-friendly voting interfaces
- Secure authentication systems
- Real-time result tracking

### Community Building
- Education on governance processes
- Regular community discussions
- Building trust in the system

## Conclusion

Direct democracy offers the highest level of citizen participation and democratic legitimacy, but requires careful implementation to address its scalability challenges. When properly designed and supported, it can create highly engaged and responsive communities.
      `,
      completed: false
    },
    {
      id: "representative-democracy",
      title: "Representative Democracy",
      description: "Delegated decision-making through elected representatives",
      duration: "12 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Representative Democracy

## What is Representative Democracy?

Representative democracy is a system where citizens elect representatives to make decisions on their behalf. These representatives are accountable to their constituents and serve for defined terms.

## Key Characteristics

### 1. Election Cycles
- Regular elections for representatives
- Defined terms of service
- Accountability through re-election

### 2. Specialization
- Representatives can focus on governance
- Allows for expertise in complex issues
- Professional decision-making capacity

### 3. Stability
- Consistent leadership over time
- Predictable decision-making processes
- Institutional memory preservation

## Advantages

### Scalability
- Works well for large communities
- Efficient decision-making processes
- Allows for complex policy development

### Expertise
- Representatives can develop deep knowledge
- Professional governance capabilities
- Specialized committee structures

### Stability
- Consistent policies over time
- Reduced political volatility
- Long-term planning capabilities

## Challenges

### Representation Gaps
- Representatives may not reflect constituent views
- Potential for elite capture
- Geographic or demographic biases

### Accountability Issues
- Representatives may prioritize personal interests
- Limited direct citizen control
- Information asymmetry problems

### Responsiveness
- Slower response to changing conditions
- Bureaucratic decision-making
- Potential for institutional inertia

## Implementation in Network States

### Election Systems
- Ranked choice voting
- Proportional representation
- Approval voting methods

### Term Limits
- Maximum service periods
- Rotation of leadership roles
- Prevention of long-term entrenchment

### Recall Mechanisms
- Citizen-initiated removal of representatives
- Performance-based accountability
- Regular confidence votes

## Governance Structures

### Legislative Bodies
- Policy development and law-making
- Budget approval and oversight
- Regulatory framework creation

### Executive Functions
- Day-to-day administration
- Policy implementation
- Crisis management

### Judicial Systems
- Dispute resolution
- Constitutional interpretation
- Rights protection

## Modern Innovations

### Liquid Democracy
- Combination of direct and representative democracy
- Citizens can delegate votes on specific issues
- Flexible participation levels

### Sortition
- Random selection of representatives
- Reduces elite capture risks
- Ensures diverse representation

### Blockchain Governance
- Transparent voting records
- Automated execution of decisions
- Reduced administrative overhead

## Best Practices

### Electoral Integrity
- Secure and transparent voting systems
- Independent election monitoring
- Clear campaign finance rules

### Representative Training
- Governance education programs
- Policy analysis skills development
- Ethical decision-making training

### Citizen Engagement
- Regular town halls and public meetings
- Digital participation platforms
- Feedback and consultation mechanisms

## Case Studies

### United States Congress
- Bicameral legislature
- Complex committee system
- Regular election cycles

### Nordic Parliamentary Systems
- Proportional representation
- Coalition governments
- Strong social welfare focus

### Corporate Boards
- Shareholder elections
- Executive compensation oversight
- Strategic direction setting

## Conclusion

Representative democracy provides efficient and scalable governance for growing network states, but requires strong accountability mechanisms and citizen engagement to maintain legitimacy and effectiveness.
      `,
      completed: false
    },
    {
      id: "liquid-democracy",
      title: "Liquid Democracy",
      description: "Flexible governance combining direct and representative systems",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Liquid Democracy

## What is Liquid Democracy?

Liquid democracy is a governance system that combines elements of direct democracy and representative democracy. Citizens can vote directly on issues or delegate their voting power to trusted representatives on specific topics.

## Key Characteristics

### 1. Flexible Participation
- Citizens choose their level of involvement
- Can vote directly or delegate authority
- Dynamic participation based on interest and expertise

### 2. Issue-Specific Delegation
- Delegates chosen for specific topics
- Can change delegations at any time
- Granular control over representation

### 3. Network Effects
- Creates networks of trust and expertise
- Emergent leadership based on demonstrated value
- Adaptive governance structures

## Advantages

### Optimal Participation
- Citizens participate at their preferred level
- Experts can focus on complex issues
- Reduces voter fatigue

### Expertise Utilization
- Delegates can develop deep knowledge
- Specialization in different policy areas
- Quality decision-making

### Adaptability
- Governance structures evolve with needs
- Quick responses to changing conditions
- Flexible organizational forms

## Challenges

### Complexity
- More complex than simple systems
- Learning curve for participants
- Technical implementation requirements

### Delegation Chains
- Potential for long delegation chains
- Risk of circular delegations
- Information flow challenges

### Power Concentration
- Popular delegates may accumulate influence
- Risk of informal hierarchies
- Potential for manipulation

## Implementation in Network States

### Technical Infrastructure
- Digital delegation platforms
- Real-time voting systems
- Transparent delegation tracking

### User Interface Design
- Intuitive delegation interfaces
- Clear information about delegates
- Easy participation options

### Trust Mechanisms
- Delegate reputation systems
- Transparent decision records
- Accountability dashboards

## Delegation Mechanisms

### Direct Delegation
- Point-to-point trust relationships
- Personal knowledge of delegates
- Strong accountability

### Transitive Delegation
- Delegates can sub-delegate authority
- Creates networks of trust
- More complex but more flexible

### Issue-Based Delegation
- Different delegates for different topics
- Granular control over representation
- Specialized expertise utilization

## Decision-Making Processes

### Voting Thresholds
- Different requirements for different decision types
- Quorum requirements for validity
- Emergency decision procedures

### Time Limits
- Decision deadlines for timely action
- Automatic delegation reversion
- Escalation procedures for delays

### Appeal Mechanisms
- Citizen-initiated review processes
- Delegate accountability measures
- Conflict resolution systems

## Modern Examples

### Democracy Earth
- Blockchain-based liquid democracy
- Global citizen participation
- Decentralized governance

### Pirate Parties
- Early adopters of liquid democracy
- Internal party governance
- Policy development processes

### Corporate Governance
- Employee participation systems
- Flexible decision-making
- Merit-based authority

## Best Practices

### User Experience
- Simple and intuitive interfaces
- Clear delegation options
- Transparent information display

### Trust Building
- Delegate background information
- Voting history transparency
- Performance metrics

### System Design
- Robust technical infrastructure
- Scalable architecture
- Security and privacy protection

## Case Studies

### German Pirate Party
- Implemented liquid democracy internally
- Influenced policy development
- Demonstrated practical feasibility

### Icelandic Constitutional Council
- Used crowdsourcing and delegation
- Constitutional reform process
- Hybrid direct/representative approach

### DAO Governance
- Decentralized autonomous organizations
- Token-based voting and delegation
- Real-world implementation examples

## Future Developments

### AI-Assisted Delegation
- Algorithmic delegate recommendations
- Expertise matching systems
- Automated decision support

### Predictive Governance
- Outcome forecasting for decisions
- Risk assessment tools
- Impact analysis systems

### Global Networks
- Cross-organization delegation
- International governance networks
- Planetary-scale decision-making

## Conclusion

Liquid democracy offers the most flexible and adaptive governance model, combining the benefits of direct participation with representative efficiency. Its success depends on thoughtful implementation and strong technical infrastructure.
      `,
      completed: false
    },
    {
      id: "quadratic-voting",
      title: "Quadratic Voting",
      description: "Mathematical approach to fair voting and resource allocation",
      duration: "18 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Quadratic Voting

## What is Quadratic Voting?

Quadratic voting is a voting system where the cost of votes increases quadratically with the number of votes cast. This mathematical approach aims to create more fair and efficient decision-making by reducing the influence of wealth while maintaining incentives for strong preferences.

## Key Characteristics

### 1. Quadratic Cost Function
- First vote costs 1 credit
- Second vote costs 4 credits
- Third vote costs 9 credits
- Cost = n² where n is the number of votes

### 2. Credit-Based System
- Participants receive voting credits
- Credits represent "voice" in decisions
- Spent credits cannot be reused

### 3. Preference Intensity
- Strong preferences cost more to express
- Weak preferences remain inexpensive
- Mathematical representation of conviction

## Advantages

### Fairness
- Reduces wealth-based influence
- Equal opportunity for participation
- Diminishing returns on large holdings

### Information Revelation
- Encourages honest preference revelation
- Strong convictions clearly signaled
- Reduces strategic voting

### Efficiency
- Better resource allocation decisions
- More accurate preference aggregation
- Optimal social welfare outcomes

## Challenges

### Complexity
- Counterintuitive cost structure
- Learning curve for participants
- Mathematical concept difficult to grasp

### Implementation
- Requires credit systems
- Technical infrastructure needs
- Administrative overhead

### Scalability
- Works best in smaller groups
- Complex for large populations
- Resource-intensive to operate

## Mathematical Foundation

### Basic Formula
- Cost for n votes: C(n) = n²
- Marginal cost increases linearly
- Total cost grows quadratically

### Economic Interpretation
- Willingness to pay indicates preference strength
- Quadratic cost prevents "buying" outcomes
- Balances equality with preference expression

### Game Theory
- Dominant strategy is truthful revelation
- Nash equilibrium at honest voting
- Resistant to manipulation

## Implementation in Network States

### Credit Systems
- Universal basic income for voting credits
- Earned credits through participation
- Time-based credit allocation

### Voting Platforms
- Digital quadratic voting interfaces
- Real-time credit tracking
- Transparent vote counting

### Decision Types
- Budget allocation decisions
- Policy preference voting
- Resource distribution

## Practical Examples

### Carbon Pricing
- Citizens vote on carbon tax levels
- Quadratic voting for fair distribution
- Environmental policy decisions

### Public Goods Funding
- Allocation of community resources
- Quadratic voting for project funding
- Fair distribution of benefits

### Policy Preferences
- Voting on competing policy options
- Intensity of preference matters
- Balanced decision outcomes

## Case Studies

### Colorado School of Mines
- Experimental quadratic voting implementation
- Student government elections
- Successful pilot program

### Taiwan Digital Ministry
- Quadratic voting for policy decisions
- Citizen participation in governance
- Real-world policy impact

### Research Experiments
- Laboratory studies showing effectiveness
- Field experiments in organizations
- Academic validation of theory

## Best Practices

### User Education
- Clear explanations of quadratic costs
- Interactive demonstrations
- Practice voting opportunities

### System Design
- Intuitive user interfaces
- Real-time feedback on costs
- Clear credit balance displays

### Governance Integration
- Combination with other voting methods
- Appropriate use cases
- Regular system evaluation

## Technical Implementation

### Smart Contracts
- Blockchain-based credit systems
- Automated vote counting
- Immutable transaction records

### User Interfaces
- Visual cost representations
- Interactive voting simulations
- Real-time result displays

### Security Measures
- Secure credit storage
- Fraud prevention systems
- Audit trail maintenance

## Future Developments

### Advanced Quadratic Systems
- Multi-dimensional quadratic voting
- Time-weighted voting
- Dynamic credit allocation

### Integration with AI
- AI-assisted decision analysis
- Automated preference aggregation
- Predictive outcome modeling

### Hybrid Systems
- Quadratic voting combined with direct democracy
- Representative systems with quadratic elements
- Multi-method governance frameworks

## Conclusion

Quadratic voting offers a mathematically optimal approach to fair decision-making, but requires careful implementation and user education. When properly designed, it can significantly improve the quality and fairness of collective decisions.
      `,
      completed: false
    },
    {
      id: "futarchy",
      title: "Futarchy",
      description: "Prediction market-based governance system",
      duration: "20 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Futarchy

## What is Futarchy?

Futarchy is a governance system where decisions are made based on prediction markets. Instead of voting on policies directly, citizens bet on outcome metrics, and policies are adopted based on which ones prediction markets indicate will perform better.

## Key Characteristics

### 1. Prediction Markets
- Markets for forecasting policy outcomes
- Traders bet on future performance metrics
- Market prices indicate expected results

### 2. Evidence-Based Decisions
- Policies chosen based on predicted performance
- Objective outcome measures
- Market efficiency for information aggregation

### 3. Incentive Alignment
- Traders profit from accurate predictions
- Strong incentives for information revelation
- Market discipline on decision-making

## Advantages

### Evidence-Based
- Decisions based on predicted outcomes
- Objective performance metrics
- Reduced ideological bias

### Information Efficiency
- Markets aggregate dispersed knowledge
- Traders incentivized to research thoroughly
- Continuous information updating

### Accountability
- Clear success/failure metrics
- Transparent performance evaluation
- Automatic course correction

## Challenges

### Market Design
- Difficult to create effective prediction markets
- Complex outcome metric definition
- Market manipulation risks

### Implementation Complexity
- Requires sophisticated market infrastructure
- High technical and operational costs
- Complex for non-quantifiable decisions

### Ethical Concerns
- Markets may not capture all values
- Potential for undesirable outcome metrics
- Inequality in market participation

## Implementation in Network States

### Market Infrastructure
- Decentralized prediction market platforms
- Secure trading mechanisms
- Transparent market operations

### Outcome Metrics
- Clearly defined success criteria
- Measurable performance indicators
- Regular metric evaluation

### Decision Processes
- Policy proposal submission
- Market creation for proposals
- Automatic policy adoption based on market results

## Prediction Market Mechanics

### Market Types
- Binary outcome markets (yes/no)
- Scalar markets (numeric ranges)
- Multi-outcome markets (multiple options)

### Trading Mechanisms
- Automated market makers
- Order book systems
- Prediction market protocols

### Incentive Structures
- Profit from accurate predictions
- Loss from incorrect forecasts
- Reputation systems for traders

## Decision-Making Framework

### Policy Proposal Phase
- Citizens submit policy proposals
- Clear outcome metrics defined
- Initial feasibility assessment

### Market Creation Phase
- Prediction markets established
- Trading period opens
- Information gathering and analysis

### Decision Phase
- Markets close and results analyzed
- Winning policies identified
- Automatic implementation triggers

## Practical Examples

### Economic Policy
- Markets predict GDP growth under different policies
- Tax policy based on predicted revenue
- Monetary policy optimization

### Environmental Policy
- Markets forecast pollution reduction outcomes
- Climate policy effectiveness prediction
- Resource allocation optimization

### Social Programs
- Prediction markets for program effectiveness
- Welfare policy outcome forecasting
- Education policy evaluation

## Case Studies

### Robin Hanson Research
- Original futarchy proposal development
- Theoretical framework establishment
- Academic foundation

### Experimental Implementations
- Small-scale futarchy experiments
- Corporate decision-making applications
- Research organization governance

### Modern Applications
- Corporate prediction markets
- Sports betting and forecasting
- Political prediction platforms

## Best Practices

### Market Design
- Clear and unambiguous outcome metrics
- Sufficient trading periods
- Adequate liquidity provision

### Governance Integration
- Combination with other decision methods
- Appeal mechanisms for market failures
- Regular system evaluation

### Ethical Considerations
- Inclusive market participation
- Fair access to information
- Protection of vulnerable groups

## Technical Implementation

### Blockchain Integration
- Decentralized market platforms
- Smart contract automation
- Transparent transaction records

### Market Infrastructure
- Automated market makers
- Oracle systems for outcome reporting
- Dispute resolution mechanisms

### User Interfaces
- Intuitive trading interfaces
- Real-time market data
- Educational resources for participants

## Future Developments

### Advanced Market Types
- Conditional prediction markets
- Multi-dimensional outcome spaces
- Complex policy evaluation

### AI Integration
- AI-assisted market analysis
- Automated trading strategies
- Predictive modeling enhancement

### Hybrid Systems
- Futarchy combined with direct democracy
- Representative systems with market elements
- Multi-method governance frameworks

## Conclusion

Futarchy offers a revolutionary approach to evidence-based governance through prediction markets, but requires sophisticated implementation and careful ethical consideration. When properly designed, it can significantly improve decision quality and policy effectiveness.
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
              <Badge className="mb-2 bg-white/20 text-white border-white/30">Governance</Badge>
              <h1 className="text-4xl font-bold mb-2">Governance Models & Systems</h1>
              <p className="text-xl text-white/90 mb-4">
                Explore different approaches to decentralized governance and decision-making
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
