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
<h1>👥&nbsp;Direct Democracy</h1>

<h2>❓&nbsp;What is Direct Democracy?</h2>

<p>Direct democracy is a system where citizens participate directly in decision-making rather than electing representatives to make decisions on their behalf. Every member of the community has an equal vote on all issues.</p>

<h2>🔑&nbsp;Key Characteristics</h2>

<h3>🌐&nbsp;1. Universal Participation</h3>
<ul>
<li>Every eligible member can vote on every issue</li>
<li>No intermediaries between citizens and decisions</li>
<li>Equal voting power for all participants</li>
</ul>

<h3>⚡&nbsp;2. Real-time Decision Making</h3>
<ul>
<li>Decisions can be made as issues arise</li>
<li>No waiting for representative terms to expire</li>
<li>Immediate response to community needs</li>
</ul>

<h3>🔍&nbsp;3. Transparency</h3>
<ul>
<li>All votes are public and auditable</li>
<li>Decision processes are visible to all</li>
<li>No behind-the-scenes negotiations</li>
</ul>

<h2>✅&nbsp;Advantages</h2>

<h3>🏆&nbsp;High Legitimacy</h3>
<ul>
<li>Decisions reflect the direct will of the people</li>
<li>No concerns about representative capture</li>
<li>Strong democratic legitimacy</li>
</ul>

<h3>🤝&nbsp;Citizen Engagement</h3>
<ul>
<li>Encourages active participation</li>
<li>Builds community awareness</li>
<li>Strengthens social bonds</li>
</ul>

<h3>🚀&nbsp;Rapid Response</h3>
<ul>
<li>Quick decisions on urgent matters</li>
<li>Adaptable to changing circumstances</li>
<li>No bureaucratic delays</li>
</ul>

<h2>⚠️&nbsp;Challenges</h2>

<h3>📏&nbsp;Scalability Issues</h3>
<ul>
<li>Difficult to implement in large communities</li>
<li>Time-consuming for frequent decisions</li>
<li>Information overload for participants</li>
</ul>

<h3>🎓&nbsp;Expertise Requirements</h3>
<ul>
<li>Citizens need knowledge of complex issues</li>
<li>Risk of uninformed decision-making</li>
<li>Potential for emotional rather than rational choices</li>
</ul>

<h3>😴&nbsp;Participation Fatigue</h3>
<ul>
<li>Constant voting can lead to apathy</li>
<li>Not all members will participate actively</li>
<li>Risk of decision-making by vocal minorities</li>
</ul>

<h2>🛠️&nbsp;Implementation in Network States</h2>

<h3>💻&nbsp;Digital Tools</h3>
<ul>
<li>Online voting platforms</li>
<li>Real-time polling systems</li>
<li>Blockchain-based immutable records</li>
</ul>

<h3>📋&nbsp;Process Design</h3>
<ul>
<li>Clear voting procedures</li>
<li>Defined decision thresholds</li>
<li>Appeal mechanisms for contested decisions</li>
</ul>

<h3>🎓&nbsp;Education and Support</h3>
<ul>
<li>Voter education programs</li>
<li>Decision support tools</li>
<li>Expert advisory panels</li>
</ul>

<h2>📚&nbsp;Case Studies</h2>

<h3>🏛️&nbsp;Ancient Athens</h3>
<ul>
<li>Birthplace of direct democracy</li>
<li>Citizens voted directly on laws and policies</li>
<li>Limited to free male citizens</li>
</ul>

<h3>🇨🇭&nbsp;Swiss Cantons</h3>
<ul>
<li>Regular referendums on policy issues</li>
<li>Citizen-initiated legislation</li>
<li>High participation rates</li>
</ul>

<h3>🌐&nbsp;Modern Examples</h3>
<ul>
<li>Some Swiss cantons still use direct democracy</li>
<li>Digital direct democracy experiments</li>
<li>Corporate governance in some organizations</li>
</ul>

<h2>💡&nbsp;Best Practices</h2>

<h3>📏&nbsp;Clear Rules</h3>
<ul>
<li>Well-defined voting procedures</li>
<li>Transparent counting methods</li>
<li>Dispute resolution processes</li>
</ul>

<h3>🛡️&nbsp;Technology Support</h3>
<ul>
<li>User-friendly voting interfaces</li>
<li>Secure authentication systems</li>
<li>Real-time result tracking</li>
</ul>

<h3>👥&nbsp;Community Building</h3>
<ul>
<li>Education on governance processes</li>
<li>Regular community discussions</li>
<li>Building trust in the system</li>
</ul>

<h2>🏁&nbsp;Conclusion</h2>

<p>Direct democracy offers the highest level of citizen participation and democratic legitimacy, but requires careful implementation to address its scalability challenges. When properly designed and supported, it can create highly engaged and responsive communities.</p>
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
<h1>🏛️&nbsp;Representative Democracy</h1>

<h2>❓&nbsp;What is Representative Democracy?</h2>

<p>Representative democracy is a system where citizens elect representatives to make decisions on their behalf. These representatives are accountable to their constituents and serve for defined terms.</p>

<h2>🔑&nbsp;Key Characteristics</h2>

<h3>🗳️&nbsp;1. Election Cycles</h3>
<ul>
<li>Regular elections for representatives</li>
<li>Defined terms of service</li>
<li>Accountability through re-election</li>
</ul>

<h3>🎯&nbsp;2. Specialization</h3>
<ul>
<li>Representatives can focus on governance</li>
<li>Allows for expertise in complex issues</li>
<li>Professional decision-making capacity</li>
</ul>

<h3>⚖️&nbsp;3. Stability</h3>
<ul>
<li>Consistent leadership over time</li>
<li>Predictable decision-making processes</li>
<li>Institutional memory preservation</li>
</ul>

<h2>✅&nbsp;Advantages</h2>

<h3>📏&nbsp;Scalability</h3>
<ul>
<li>Works well for large communities</li>
<li>Efficient decision-making processes</li>
<li>Allows for complex policy development</li>
</ul>

<h3>🎓&nbsp;Expertise</h3>
<ul>
<li>Representatives can develop deep knowledge</li>
<li>Professional governance capabilities</li>
<li>Specialized committee structures</li>
</ul>

<h3>🏗️&nbsp;Stability</h3>
<ul>
<li>Consistent policies over time</li>
<li>Reduced political volatility</li>
<li>Long-term planning capabilities</li>
</ul>

<h2>⚠️&nbsp;Challenges</h2>

<h3>🔄&nbsp;Representation Gaps</h3>
<ul>
<li>Representatives may not reflect constituent views</li>
<li>Potential for elite capture</li>
<li>Geographic or demographic biases</li>
</ul>

<h3>📊&nbsp;Accountability Issues</h3>
<ul>
<li>Representatives may prioritize personal interests</li>
<li>Limited direct citizen control</li>
<li>Information asymmetry problems</li>
</ul>

<h3>⏱️&nbsp;Responsiveness</h3>
<ul>
<li>Slower response to changing conditions</li>
<li>Bureaucratic decision-making</li>
<li>Potential for institutional inertia</li>
</ul>

<h2>🛠️&nbsp;Implementation in Network States</h2>

<h3>🗳️&nbsp;Election Systems</h3>
<ul>
<li>Ranked choice voting</li>
<li>Proportional representation</li>
<li>Approval voting methods</li>
</ul>

<h3>⏰&nbsp;Term Limits</h3>
<ul>
<li>Maximum service periods</li>
<li>Rotation of leadership roles</li>
<li>Prevention of long-term entrenchment</li>
</ul>

<h3>🔄&nbsp;Recall Mechanisms</h3>
<ul>
<li>Citizen-initiated removal of representatives</li>
<li>Performance-based accountability</li>
<li>Regular confidence votes</li>
</ul>

<h2>🏛️&nbsp;Governance Structures</h2>

<h3>📜&nbsp;Legislative Bodies</h3>
<ul>
<li>Policy development and law-making</li>
<li>Budget approval and oversight</li>
<li>Regulatory framework creation</li>
</ul>

<h3>⚙️&nbsp;Executive Functions</h3>
<ul>
<li>Day-to-day administration</li>
<li>Policy implementation</li>
<li>Crisis management</li>
</ul>

<h3>⚖️&nbsp;Judicial Systems</h3>
<ul>
<li>Dispute resolution</li>
<li>Constitutional interpretation</li>
<li>Rights protection</li>
</ul>

<h2>🚀&nbsp;Modern Innovations</h2>

<h3>🌊&nbsp;Liquid Democracy</h3>
<ul>
<li>Combination of direct and representative democracy</li>
<li>Citizens can delegate votes on specific issues</li>
<li>Flexible participation levels</li>
</ul>

<h3>🎲&nbsp;Sortition</h3>
<ul>
<li>Random selection of representatives</li>
<li>Reduces elite capture risks</li>
<li>Ensures diverse representation</li>
</ul>

<h3>⛓️&nbsp;Blockchain Governance</h3>
<ul>
<li>Transparent voting records</li>
<li>Automated execution of decisions</li>
<li>Reduced administrative overhead</li>
</ul>

<h2>💡&nbsp;Best Practices</h2>

<h3>🛡️&nbsp;Electoral Integrity</h3>
<ul>
<li>Secure and transparent voting systems</li>
<li>Independent election monitoring</li>
<li>Clear campaign finance rules</li>
</ul>

<h3>🎓&nbsp;Representative Training</h3>
<ul>
<li>Governance education programs</li>
<li>Policy analysis skills development</li>
<li>Ethical decision-making training</li>
</ul>

<h3>🤝&nbsp;Citizen Engagement</h3>
<ul>
<li>Regular town halls and public meetings</li>
<li>Digital participation platforms</li>
<li>Feedback and consultation mechanisms</li>
</ul>

<h2>📚&nbsp;Case Studies</h2>

<h3>🇺🇸&nbsp;United States Congress</h3>
<ul>
<li>Bicameral legislature</li>
<li>Complex committee system</li>
<li>Regular election cycles</li>
</ul>

<h3>🇳🇴&nbsp;Nordic Parliamentary Systems</h3>
<ul>
<li>Proportional representation</li>
<li>Coalition governments</li>
<li>Strong social welfare focus</li>
</ul>

<h3>🏢&nbsp;Corporate Boards</h3>
<ul>
<li>Shareholder elections</li>
<li>Executive compensation oversight</li>
<li>Strategic direction setting</li>
</ul>

<h2>🏁&nbsp;Conclusion</h2>

<p>Representative democracy provides efficient and scalable governance for growing network states, but requires strong accountability mechanisms and citizen engagement to maintain legitimacy and effectiveness.</p>
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
<h1>🌊&nbsp;Liquid Democracy</h1>

<h2>❓&nbsp;What is Liquid Democracy?</h2>

<p>Liquid democracy is a governance system that combines elements of direct democracy and representative democracy. Citizens can vote directly on issues or delegate their voting power to trusted representatives on specific topics.</p>

<h2>🔑&nbsp;Key Characteristics</h2>

<h3>🔄&nbsp;1. Flexible Participation</h3>
<ul>
<li>Citizens choose their level of involvement</li>
<li>Can vote directly or delegate authority</li>
<li>Dynamic participation based on interest and expertise</li>
</ul>

<h3>🎯&nbsp;2. Issue-Specific Delegation</h3>
<ul>
<li>Delegates chosen for specific topics</li>
<li>Can change delegations at any time</li>
<li>Granular control over representation</li>
</ul>

<h3>🌐&nbsp;3. Network Effects</h3>
<ul>
<li>Creates networks of trust and expertise</li>
<li>Emergent leadership based on demonstrated value</li>
<li>Adaptive governance structures</li>
</ul>

<h2>✅&nbsp;Advantages</h2>

<h3>🎯&nbsp;Optimal Participation</h3>
<ul>
<li>Citizens participate at their preferred level</li>
<li>Experts can focus on complex issues</li>
<li>Reduces voter fatigue</li>
</ul>

<h3>🎓&nbsp;Expertise Utilization</h3>
<ul>
<li>Delegates can develop deep knowledge</li>
<li>Specialization in different policy areas</li>
<li>Quality decision-making</li>
</ul>

<h3>🔄&nbsp;Adaptability</h3>
<ul>
<li>Governance structures evolve with needs</li>
<li>Quick responses to changing conditions</li>
<li>Flexible organizational forms</li>
</ul>

<h2>⚠️&nbsp;Challenges</h2>

<h3>🧩&nbsp;Complexity</h3>
<ul>
<li>More complex than simple systems</li>
<li>Learning curve for participants</li>
<li>Technical implementation requirements</li>
</ul>

<h3>🔗&nbsp;Delegation Chains</h3>
<ul>
<li>Potential for long delegation chains</li>
<li>Risk of circular delegations</li>
<li>Information flow challenges</li>
</ul>

<h3>⚡&nbsp;Power Concentration</h3>
<ul>
<li>Popular delegates may accumulate influence</li>
<li>Risk of informal hierarchies</li>
<li>Potential for manipulation</li>
</ul>

<h2>🛠️&nbsp;Implementation in Network States</h2>

<h3>💻&nbsp;Technical Infrastructure</h3>
<ul>
<li>Digital delegation platforms</li>
<li>Real-time voting systems</li>
<li>Transparent delegation tracking</li>
</ul>

<h3>🎨&nbsp;User Interface Design</h3>
<ul>
<li>Intuitive delegation interfaces</li>
<li>Clear information about delegates</li>
<li>Easy participation options</li>
</ul>

<h3>🔒&nbsp;Trust Mechanisms</h3>
<ul>
<li>Delegate reputation systems</li>
<li>Transparent decision records</li>
<li>Accountability dashboards</li>
</ul>

<h2>🔄&nbsp;Delegation Mechanisms</h2>

<h3>👥&nbsp;Direct Delegation</h3>
<ul>
<li>Point-to-point trust relationships</li>
<li>Personal knowledge of delegates</li>
<li>Strong accountability</li>
</ul>

<h3>🔀&nbsp;Transitive Delegation</h3>
<ul>
<li>Delegates can sub-delegate authority</li>
<li>Creates networks of trust</li>
<li>More complex but more flexible</li>
</ul>

<h3>🎯&nbsp;Issue-Based Delegation</h3>
<ul>
<li>Different delegates for different topics</li>
<li>Granular control over representation</li>
<li>Specialized expertise utilization</li>
</ul>

<h2>📋&nbsp;Decision-Making Processes</h2>

<h3>📊&nbsp;Voting Thresholds</h3>
<ul>
<li>Different requirements for different decision types</li>
<li>Quorum requirements for validity</li>
<li>Emergency decision procedures</li>
</ul>

<h3>⏰&nbsp;Time Limits</h3>
<ul>
<li>Decision deadlines for timely action</li>
<li>Automatic delegation reversion</li>
<li>Escalation procedures for delays</li>
</ul>

<h3>⚖️&nbsp;Appeal Mechanisms</h3>
<ul>
<li>Citizen-initiated review processes</li>
<li>Delegate accountability measures</li>
<li>Conflict resolution systems</li>
</ul>

<h2>🌐&nbsp;Modern Examples</h2>

<h3>🌍&nbsp;Democracy Earth</h3>
<ul>
<li>Blockchain-based liquid democracy</li>
<li>Global citizen participation</li>
<li>Decentralized governance</li>
</ul>

<h3>🏴‍☠️&nbsp;Pirate Parties</h3>
<ul>
<li>Early adopters of liquid democracy</li>
<li>Internal party governance</li>
<li>Policy development processes</li>
</ul>

<h3>🏢&nbsp;Corporate Governance</h3>
<ul>
<li>Employee participation systems</li>
<li>Flexible decision-making</li>
<li>Merit-based authority</li>
</ul>

<h2>💡&nbsp;Best Practices</h2>

<h3>👤&nbsp;User Experience</h3>
<ul>
<li>Simple and intuitive interfaces</li>
<li>Clear delegation options</li>
<li>Transparent information display</li>
</ul>

<h3>🤝&nbsp;Trust Building</h3>
<ul>
<li>Delegate background information</li>
<li>Voting history transparency</li>
<li>Performance metrics</li>
</ul>

<h3>🏗️&nbsp;System Design</h3>
<ul>
<li>Robust technical infrastructure</li>
<li>Scalable architecture</li>
<li>Security and privacy protection</li>
</ul>

<h2>📚&nbsp;Case Studies</h2>

<h3>🇩🇪&nbsp;German Pirate Party</h3>
<ul>
<li>Implemented liquid democracy internally</li>
<li>Influenced policy development</li>
<li>Demonstrated practical feasibility</li>
</ul>

<h3>🇮🇸&nbsp;Icelandic Constitutional Council</h3>
<ul>
<li>Used crowdsourcing and delegation</li>
<li>Constitutional reform process</li>
<li>Hybrid direct/representative approach</li>
</ul>

<h3>⛓️&nbsp;DAO Governance</h3>
<ul>
<li>Decentralized autonomous organizations</li>
<li>Token-based voting and delegation</li>
<li>Real-world implementation examples</li>
</ul>

<h2>🚀&nbsp;Future Developments</h2>

<h3>🤖&nbsp;AI-Assisted Delegation</h3>
<ul>
<li>Algorithmic delegate recommendations</li>
<li>Expertise matching systems</li>
<li>Automated decision support</li>
</ul>

<h3>🔮&nbsp;Predictive Governance</h3>
<ul>
<li>Outcome forecasting for decisions</li>
<li>Risk assessment tools</li>
<li>Impact analysis systems</li>
</ul>

<h3>🌐&nbsp;Global Networks</h3>
<ul>
<li>Cross-organization delegation</li>
<li>International governance networks</li>
<li>Planetary-scale decision-making</li>
</ul>

<h2>🏁&nbsp;Conclusion</h2>

<p>Liquid democracy offers the most flexible and adaptive governance model, combining the benefits of direct participation with representative efficiency. Its success depends on thoughtful implementation and strong technical infrastructure.</p>
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
<h1>🔮&nbsp;Futarchy</h1>

<h2>❓&nbsp;What is Futarchy?</h2>

<p>Futarchy is a governance system where decisions are made based on prediction markets. Instead of voting on policies directly, citizens bet on outcome metrics, and policies are adopted based on which ones prediction markets indicate will perform better.</p>

<h2>🔑&nbsp;Key Characteristics</h2>

<h3>📈&nbsp;1. Prediction Markets</h3>
<ul>
<li>Markets for forecasting policy outcomes</li>
<li>Traders bet on future performance metrics</li>
<li>Market prices indicate expected results</li>
</ul>

<h3>📊&nbsp;2. Evidence-Based Decisions</h3>
<ul>
<li>Policies chosen based on predicted performance</li>
<li>Objective outcome measures</li>
<li>Market efficiency for information aggregation</li>
</ul>

<h3>💰&nbsp;3. Incentive Alignment</h3>
<ul>
<li>Traders profit from accurate predictions</li>
<li>Strong incentives for information revelation</li>
<li>Market discipline on decision-making</li>
</ul>

<h2>✅&nbsp;Advantages</h2>

<h3>🔬&nbsp;Evidence-Based</h3>
<ul>
<li>Decisions based on predicted outcomes</li>
<li>Objective performance metrics</li>
<li>Reduced ideological bias</li>
</ul>

<h3>📡&nbsp;Information Efficiency</h3>
<ul>
<li>Markets aggregate dispersed knowledge</li>
<li>Traders incentivized to research thoroughly</li>
<li>Continuous information updating</li>
</ul>

<h3>📋&nbsp;Accountability</h3>
<ul>
<li>Clear success/failure metrics</li>
<li>Transparent performance evaluation</li>
<li>Automatic course correction</li>
</ul>

<h2>⚠️&nbsp;Challenges</h2>

<h3>🏗️&nbsp;Market Design</h3>
<ul>
<li>Difficult to create effective prediction markets</li>
<li>Complex outcome metric definition</li>
<li>Market manipulation risks</li>
</ul>

<h3>🛠️&nbsp;Implementation Complexity</h3>
<ul>
<li>Requires sophisticated market infrastructure</li>
<li>High technical and operational costs</li>
<li>Complex for non-quantifiable decisions</li>
</ul>

<h3>🤔&nbsp;Ethical Concerns</h3>
<ul>
<li>Markets may not capture all values</li>
<li>Potential for undesirable outcome metrics</li>
<li>Inequality in market participation</li>
</ul>

<h2>🛠️&nbsp;Implementation in Network States</h2>

<h3>🏪&nbsp;Market Infrastructure</h3>
<ul>
<li>Decentralized prediction market platforms</li>
<li>Secure trading mechanisms</li>
<li>Transparent market operations</li>
</ul>

<h3>📏&nbsp;Outcome Metrics</h3>
<ul>
<li>Clearly defined success criteria</li>
<li>Measurable performance indicators</li>
<li>Regular metric evaluation</li>
</ul>

<h3>⚙️&nbsp;Decision Processes</h3>
<ul>
<li>Policy proposal submission</li>
<li>Market creation for proposals</li>
<li>Automatic policy adoption based on market results</li>
</ul>

<h2>📊&nbsp;Prediction Market Mechanics</h2>

<h3>🎯&nbsp;Market Types</h3>
<ul>
<li>Binary outcome markets (yes/no)</li>
<li>Scalar markets (numeric ranges)</li>
<li>Multi-outcome markets (multiple options)</li>
</ul>

<h3>🔄&nbsp;Trading Mechanisms</h3>
<ul>
<li>Automated market makers</li>
<li>Order book systems</li>
<li>Prediction market protocols</li>
</ul>

<h3>🏆&nbsp;Incentive Structures</h3>
<ul>
<li>Profit from accurate predictions</li>
<li>Loss from incorrect forecasts</li>
<li>Reputation systems for traders</li>
</ul>

<h2>📋&nbsp;Decision-Making Framework</h2>

<h3>📝&nbsp;Policy Proposal Phase</h3>
<ul>
<li>Citizens submit policy proposals</li>
<li>Clear outcome metrics defined</li>
<li>Initial feasibility assessment</li>
</ul>

<h3>🏗️&nbsp;Market Creation Phase</h3>
<ul>
<li>Prediction markets established</li>
<li>Trading period opens</li>
<li>Information gathering and analysis</li>
</ul>

<h3>🎯&nbsp;Decision Phase</h3>
<ul>
<li>Markets close and results analyzed</li>
<li>Winning policies identified</li>
<li>Automatic implementation triggers</li>
</ul>

<h2>🌟&nbsp;Practical Examples</h2>

<h3>💼&nbsp;Economic Policy</h3>
<ul>
<li>Markets predict GDP growth under different policies</li>
<li>Tax policy based on predicted revenue</li>
<li>Monetary policy optimization</li>
</ul>

<h3>🌿&nbsp;Environmental Policy</h3>
<ul>
<li>Markets forecast pollution reduction outcomes</li>
<li>Climate policy effectiveness prediction</li>
<li>Resource allocation optimization</li>
</ul>

<h3>👥&nbsp;Social Programs</h3>
<ul>
<li>Prediction markets for program effectiveness</li>
<li>Welfare policy outcome forecasting</li>
<li>Education policy evaluation</li>
</ul>

<h2>📚&nbsp;Case Studies</h2>

<h3>🔬&nbsp;Robin Hanson Research</h3>
<ul>
<li>Original futarchy proposal development</li>
<li>Theoretical framework establishment</li>
<li>Academic foundation</li>
</ul>

<h3>🧪&nbsp;Experimental Implementations</h3>
<ul>
<li>Small-scale futarchy experiments</li>
<li>Corporate decision-making applications</li>
<li>Research organization governance</li>
</ul>

<h3>🌐&nbsp;Modern Applications</h3>
<ul>
<li>Corporate prediction markets</li>
<li>Sports betting and forecasting</li>
<li>Political prediction platforms</li>
</ul>

<h2>💡&nbsp;Best Practices</h2>

<h3>🏗️&nbsp;Market Design</h3>
<ul>
<li>Clear and unambiguous outcome metrics</li>
<li>Sufficient trading periods</li>
<li>Adequate liquidity provision</li>
</ul>

<h3>🔗&nbsp;Governance Integration</h3>
<ul>
<li>Combination with other decision methods</li>
<li>Appeal mechanisms for market failures</li>
<li>Regular system evaluation</li>
</ul>

<h3>🤝&nbsp;Ethical Considerations</h3>
<ul>
<li>Inclusive market participation</li>
<li>Fair access to information</li>
<li>Protection of vulnerable groups</li>
</ul>

<h2>💻&nbsp;Technical Implementation</h2>

<h3>⛓️&nbsp;Blockchain Integration</h3>
<ul>
<li>Decentralized market platforms</li>
<li>Smart contract automation</li>
<li>Transparent transaction records</li>
</ul>

<h3>🏪&nbsp;Market Infrastructure</h3>
<ul>
<li>Automated market makers</li>
<li>Oracle systems for outcome reporting</li>
<li>Dispute resolution mechanisms</li>
</ul>

<h3>🎨&nbsp;User Interfaces</h3>
<ul>
<li>Intuitive trading interfaces</li>
<li>Real-time market data</li>
<li>Educational resources for participants</li>
</ul>

<h2>🚀&nbsp;Future Developments</h2>

<h3>🔬&nbsp;Advanced Market Types</h3>
<ul>
<li>Conditional prediction markets</li>
<li>Multi-dimensional outcome spaces</li>
<li>Complex policy evaluation</li>
</ul>

<h3>🤖&nbsp;AI Integration</h3>
<ul>
<li>AI-assisted market analysis</li>
<li>Automated trading strategies</li>
<li>Predictive modeling enhancement</li>
</ul>

<h3>🔀&nbsp;Hybrid Systems</h3>
<ul>
<li>Futarchy combined with direct democracy</li>
<li>Representative systems with market elements</li>
<li>Multi-method governance frameworks</li>
</ul>

<h2>🏁&nbsp;Conclusion</h2>

<p>Futarchy offers a revolutionary approach to evidence-based governance through prediction markets, but requires sophisticated implementation and careful ethical consideration. When properly designed, it can significantly improve decision quality and policy effectiveness.</p>
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
