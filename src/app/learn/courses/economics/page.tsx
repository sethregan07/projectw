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

export default function EconomicsCourse() {
  const [currentModule, setCurrentModule] = useState(0)
  const [completedModules, setCompletedModules] = useState<Set<number>>(new Set())

  const modules: Module[] = [
    {
      id: "token-economics",
      title: "Token Economics Fundamentals",
      description: "Understanding the economics of tokens and cryptocurrencies",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Token Economics Fundamentals

## What is Token Economics?

Token economics is the study of how tokens function within economic systems, particularly in blockchain and decentralized networks. It encompasses the design, distribution, and management of tokens to create sustainable economic models.

## Key Components

### 1. Token Supply
- **Total Supply**: Maximum number of tokens that will ever exist
- **Circulating Supply**: Tokens currently available in the market
- **Inflation/Deflation**: Mechanisms that increase or decrease supply over time

### 2. Token Distribution
- **Fair Launch**: Equal opportunity distribution to community members
- **Airdrops**: Free token distribution to build initial user base
- **Staking Rewards**: Incentives for locking tokens to support network

### 3. Utility and Value
- **Utility Tokens**: Provide access to platform features and services
- **Governance Tokens**: Enable voting rights and decision-making
- **Security Tokens**: Represent ownership in assets or revenue streams

## Economic Mechanisms

### Incentive Alignment
- **Token Rewards**: Compensation for desired behaviors
- **Slashing**: Penalties for harmful actions
- **Burning**: Permanent removal of tokens from circulation

### Price Stability
- **Pegged Tokens**: Stable value through collateral or algorithms
- **Elastic Supply**: Automatic supply adjustments based on demand
- **Basket Reserves**: Backing by diversified asset portfolios

### Network Effects
- **User Growth**: More users increase token value
- **Developer Incentives**: Rewards for building on the platform
- **Liquidity Mining**: Rewards for providing market liquidity

## Token Models

### Work Tokens
- Earned through contributions to the network
- Spent on accessing network services
- Creates circular economy within the platform

### Reputation Tokens
- Accumulated through positive community actions
- Unlocks governance rights and special privileges
- Encourages quality participation

### Social Impact Tokens
- Tied to measurable social or environmental outcomes
- Rewards beneficial real-world actions
- Aligns economic incentives with positive impact

## Distribution Strategies

### Continuous Distribution
- Regular token emissions to active participants
- Rewards ongoing engagement and contribution
- Prevents wealth concentration

### Quadratic Funding
- Matching funds based on community support
- Amplifies grassroots initiatives
- Reduces influence of large donors

### Harberger Taxes
- Self-assessed property values with tax implications
- Encourages efficient resource allocation
- Prevents hoarding of valuable assets

## Economic Sustainability

### Revenue Models
- **Transaction Fees**: Small fees on network activities
- **Premium Services**: Paid features for advanced users
- **NFT Sales**: Digital collectibles and art sales

### Treasury Management
- **Community Treasury**: Funds controlled by governance
- **Investment Strategies**: Growing network value through investments
- **Grant Programs**: Funding ecosystem development

### Risk Management
- **Diversification**: Multiple revenue streams
- **Reserve Funds**: Emergency funds for network stability
- **Insurance Mechanisms**: Protection against adverse events

## Measuring Success

### Economic Metrics
- **Token Velocity**: Speed of token circulation
- **Market Capitalization**: Total value of all tokens
- **Trading Volume**: Liquidity and market activity

### Network Health
- **Active Users**: Daily and monthly active participants
- **Transaction Volume**: Economic activity on the network
- **Developer Activity**: Code contributions and ecosystem growth

### Sustainability Indicators
- **Treasury Health**: Financial reserves and runway
- **Token Distribution**: Fairness of token ownership
- **Community Engagement**: Participation in governance

## Challenges and Solutions

### Speculation vs Utility
- **Solution**: Design tokens with clear utility and governance rights
- **Implementation**: Regular burning and redistribution mechanisms

### Wealth Concentration
- **Solution**: Implement progressive taxation and redistribution
- **Implementation**: Automatic redistribution through governance

### Market Volatility
- **Solution**: Create stable token designs and hedging mechanisms
- **Implementation**: Algorithmic stablecoins and treasury diversification

## Future Developments

### Programmable Money
- Smart contracts enabling complex economic relationships
- Automated market makers and decentralized exchanges
- Conditional payments and escrow services

### Social Tokens
- Creator tokens representing social capital
- Community tokens for local economies
- Identity tokens for reputation and trust

### Central Bank Digital Currencies
- Government-backed digital currencies
- Programmable monetary policy
- Enhanced financial inclusion

## Best Practices

### Transparent Economics
- Public disclosure of all economic parameters
- Regular economic reports and audits
- Community education on token mechanics

### Inclusive Design
- Accessible to users with different economic backgrounds
- Multiple participation pathways
- Progressive reward structures

### Adaptive Systems
- Regular economic parameter adjustments
- Community feedback integration
- Data-driven optimization

## Conclusion

Effective token economics creates sustainable value for all network participants while aligning incentives for long-term growth and stability. Careful design and continuous monitoring are essential for success.
      `,
      completed: false
    },
    {
      id: "sustainable-models",
      title: "Sustainable Economic Models",
      description: "Building long-term viable economic systems",
      duration: "18 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Sustainable Economic Models

## What Makes Economics Sustainable?

Sustainable economic models create long-term value for all stakeholders while maintaining ecological balance and social equity. They focus on regeneration rather than extraction, and prioritize long-term thinking over short-term gains.

## Core Principles

### 1. Regenerative Design
- Systems that create more value than they consume
- Natural capital preservation and enhancement
- Circular economy principles

### 2. Stakeholder Capitalism
- Value creation for all stakeholders, not just shareholders
- Inclusive growth and prosperity
- Social impact measurement and optimization

### 3. Long-term Orientation
- Decision-making based on multi-generational impacts
- Sustainable resource utilization
- Future-focused investment strategies

## Economic Sustainability Frameworks

### Doughnut Economics
- Social foundation: Meeting basic human needs
- Ecological ceiling: Respecting planetary boundaries
- Regenerative and distributive economics

### Triple Bottom Line
- People: Social equity and community well-being
- Planet: Environmental sustainability and restoration
- Profit: Economic viability and growth

### Circular Economy
- Eliminate waste and pollution
- Circulate products and materials
- Regenerate natural systems

## Implementation Strategies

### Revenue Diversification
- Multiple income streams reduce dependency on single sources
- Product and service ecosystems create resilience
- Geographic diversification spreads risk

### Cost Optimization
- Lean operations and efficient resource utilization
- Technology automation reduces labor costs
- Strategic partnerships leverage external capabilities

### Value Capture
- Intellectual property and brand equity
- Network effects and platform advantages
- Data-driven insights and personalization

## Sustainable Funding Models

### Community-Owned Cooperatives
- Democratic ownership and control
- Profit sharing among members
- Community benefit focus

### Social Impact Bonds
- Outcome-based financing
- Measurable social impact metrics
- Risk-sharing between investors and governments

### Regenerative Finance
- Investment in ecosystem restoration
- Biodiversity credits and carbon markets
- Natural capital valuation

## Measuring Sustainability

### Environmental Metrics
- Carbon footprint and emissions tracking
- Resource utilization efficiency
- Biodiversity impact assessment

### Social Metrics
- Income equality and poverty reduction
- Education and healthcare access
- Community well-being indicators

### Economic Metrics
- Long-term profitability and growth
- Job quality and workforce development
- Local economic multiplier effects

## Challenges in Implementation

### Short-term Pressures
- Quarterly earnings focus vs long-term sustainability
- Investor expectations for immediate returns
- Market volatility and economic uncertainty

### Measurement Complexity
- Difficulty quantifying social and environmental impact
- Lack of standardized sustainability metrics
- Attribution of outcomes to specific actions

### Systemic Barriers
- Existing infrastructure designed for linear economy
- Regulatory frameworks lagging behind innovation
- Cultural resistance to systemic change

## Solutions and Innovations

### Impact Investing
- Capital allocation based on social and environmental impact
- ESG (Environmental, Social, Governance) criteria
- Blended finance combining philanthropic and commercial capital

### Technology Enablement
- Blockchain for transparent supply chains
- IoT for resource optimization
- AI for predictive sustainability analytics

### Policy and Regulation
- Green bonds and sustainable finance incentives
- Carbon pricing and emissions trading
- Corporate sustainability reporting requirements

## Case Studies

### Patagonia
- Mission-driven business model
- Environmental activism and advocacy
- Circular economy implementation

### Ecosia
- Search engine planting trees with ad revenue
- Transparent impact reporting
- User engagement in sustainability

### Ørsted
- Energy company transitioning to 100% renewable
- Carbon-neutral operations by 2025
- Shareholder value through sustainability

## Future of Sustainable Economics

### Web3 Economics
- Decentralized autonomous organizations (DAOs)
- Token engineering for sustainable systems
- Decentralized finance for inclusive growth

### Impact Markets
- Trading platforms for social and environmental outcomes
- Standardized impact measurement
- Global coordination of sustainability efforts

### Regenerative Communities
- Local economies based on regeneration
- Community currencies and mutual credit systems
- Bioregional development models

## Practical Implementation

### Assessment Framework
- Current sustainability baseline measurement
- Gap analysis against sustainability goals
- Prioritized action plan development

### Change Management
- Stakeholder engagement and communication
- Employee training and development
- Cultural transformation initiatives

### Monitoring and Adaptation
- Regular sustainability reporting
- Performance dashboard implementation
- Continuous improvement processes

## Conclusion

Sustainable economic models require fundamental shifts in how we think about value creation and resource utilization. By embracing regenerative principles and stakeholder capitalism, organizations can create lasting value while contributing to a more equitable and sustainable world.
      `,
      completed: false
    },
    {
      id: "decentralized-finance",
      title: "Decentralized Finance (DeFi)",
      description: "Exploring decentralized financial systems and protocols",
      duration: "22 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Decentralized Finance (DeFi)

## What is DeFi?

Decentralized Finance (DeFi) refers to financial services built on blockchain networks that operate without traditional intermediaries like banks or financial institutions. It uses smart contracts and decentralized protocols to provide lending, borrowing, trading, and other financial services.

## Core Components

### 1. Decentralized Exchanges (DEXs)
- Peer-to-peer trading without intermediaries
- Automated market makers (AMMs) for liquidity
- Permissionless access to global markets

### 2. Lending Protocols
- Algorithmic lending and borrowing
- Over-collateralized positions for stability
- Interest rate optimization through algorithms

### 3. Stablecoins
- Price-stable cryptocurrencies pegged to fiat currencies
- Decentralized stablecoins using crypto collateral
- Algorithmic stablecoins maintaining peg through code

## DeFi Primitives

### Automated Market Makers
- Constant product formula: x * y = k
- Impermanent loss and liquidity provision incentives
- Concentrated liquidity for efficient capital usage

### Yield Farming
- Providing liquidity to earn protocol rewards
- Staking tokens for governance and rewards
- Complex yield optimization strategies

### Liquid Staking
- Staking tokens while maintaining liquidity
- Liquid staking derivatives (LSDs)
- Enhanced capital efficiency

## DeFi Infrastructure

### Layer 1 Protocols
- Ethereum, Polygon, Arbitrum, Optimism
- High security and decentralization
- Lower transaction throughput

### Layer 2 Solutions
- Rollup technology for scalability
- Optimistic and zk-rollups
- Lower fees and faster transactions

### Cross-Chain Bridges
- Asset movement between different blockchains
- Wrapped tokens and synthetic assets
- Liquidity fragmentation solutions

## Risk Management

### Smart Contract Risks
- Code vulnerabilities and exploits
- Formal verification and auditing
- Bug bounty programs and insurance

### Economic Risks
- Impermanent loss in liquidity provision
- Smart contract exploits and hacks
- Market volatility and liquidation risks

### Regulatory Risks
- Evolving regulatory landscape
- Compliance requirements
- Geographic restrictions

## DeFi Applications

### Lending and Borrowing
- Aave, Compound, MakerDAO protocols
- Interest rate algorithms
- Flash loans and advanced features

### Derivatives
- Perpetual futures and options
- Synthetic assets and tokenized securities
- Prediction markets and insurance

### Asset Management
- Decentralized index funds
- Yield aggregators and optimizers
- Portfolio management protocols

## Governance in DeFi

### Protocol Governance
- Token-based voting rights
- Proposal submission and voting
- Treasury management and fund allocation

### Community Coordination
- Discord and forum discussions
- Snapshot voting for proposals
- Working groups and committees

### Incentive Alignment
- Token rewards for participation
- Reputation systems for contributors
- Merit-based authority distribution

## DeFi Challenges

### User Experience
- Complex interfaces and terminology
- High transaction fees during congestion
- Learning curve for new users

### Scalability
- Network congestion and high fees
- Layer 2 adoption and interoperability
- Cross-chain communication complexity

### Security
- Smart contract vulnerabilities
- Private key management
- Phishing and social engineering attacks

## Future of DeFi

### Institutional Adoption
- Traditional finance integration
- Regulatory compliance frameworks
- Institutional-grade security and reliability

### Real-World Assets
- Tokenization of real estate and commodities
- Security tokens and regulated assets
- Carbon credits and impact investing

### Artificial Intelligence
- AI-powered trading strategies
- Automated portfolio management
- Risk assessment and fraud detection

## DeFi Best Practices

### Security First
- Use hardware wallets for large amounts
- Verify contract addresses before interaction
- Start with small amounts when testing protocols

### Education and Research
- Understand protocol mechanics before participation
- Research team backgrounds and tokenomics
- Stay informed about protocol updates

### Risk Management
- Diversify across multiple protocols
- Use stop-loss mechanisms where available
- Maintain emergency funds outside DeFi

## Case Studies

### Uniswap
- Leading DEX with billions in trading volume
- Automated market maker innovation
- Governance token implementation

### Aave
- Leading lending protocol
- Flash loans and advanced features
- Multi-chain deployment

### MakerDAO
- Decentralized stablecoin (DAI)
- Collateralized debt positions
- Emergency shutdown mechanisms

## Getting Started with DeFi

### 1. Education
- Learn blockchain fundamentals
- Understand DeFi protocols and mechanics
- Research security best practices

### 2. Start Small
- Begin with small amounts
- Use test networks for practice
- Learn from experienced community members

### 3. Build Gradually
- Start with simple protocols
- Diversify across multiple platforms
- Reinvest profits strategically

## Conclusion

DeFi represents a fundamental rethinking of financial services, offering greater accessibility, transparency, and innovation. While challenges remain, the technology continues to evolve rapidly, creating new opportunities for financial inclusion and economic empowerment.
      `,
      completed: false
    },
    {
      id: "community-treasury",
      title: "Community Treasury Management",
      description: "Managing shared resources and collective wealth",
      duration: "16 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Community Treasury Management

## What is a Community Treasury?

A community treasury is a shared pool of resources controlled by a decentralized community. It represents collective wealth and decision-making power, requiring careful management to ensure sustainable growth and equitable distribution.

## Treasury Functions

### 1. Resource Allocation
- Funding community projects and initiatives
- Supporting ecosystem development
- Emergency response and crisis management

### 2. Value Preservation
- Diversified asset management
- Risk mitigation strategies
- Long-term wealth preservation

### 3. Incentive Distribution
- Rewards for community contributions
- Staking rewards and yield farming
- Grant programs and ecosystem funding

## Treasury Governance

### Decision-Making Processes
- **Proposal Systems**: Community members submit funding requests
- **Voting Mechanisms**: Democratic approval of expenditures
- **Multi-Signature Wallets**: Secure execution of approved decisions

### Transparency Requirements
- **Public Audits**: Regular financial reporting and verification
- **Real-time Tracking**: Live treasury balance visibility
- **Transaction History**: Complete record of all inflows and outflows

### Accountability Measures
- **Performance Metrics**: Success measurement for funded projects
- **Impact Assessment**: Evaluation of treasury allocation effectiveness
- **Regular Reporting**: Periodic community updates on treasury status

## Treasury Strategies

### Conservative Approach
- **Capital Preservation**: Focus on maintaining purchasing power
- **Low-Risk Investments**: Stable assets and conservative yields
- **Emergency Reserves**: Funds set aside for unexpected events

### Growth-Oriented Approach
- **Yield Farming**: Active participation in DeFi protocols
- **Strategic Investments**: Higher-risk, higher-reward opportunities
- **Innovation Funding**: Investment in promising new projects

### Balanced Strategy
- **Diversification**: Mix of conservative and growth investments
- **Risk Management**: Position sizing and correlation analysis
- **Regular Rebalancing**: Portfolio adjustment based on goals

## Revenue Streams

### Protocol Revenue
- **Transaction Fees**: Percentage of network activity
- **Staking Rewards**: Validator and delegator incentives
- **Governance Participation**: Voting reward distribution

### Ecosystem Growth
- **Grant Programs**: Funding for ecosystem development
- **Partnerships**: Revenue sharing with allied projects
- **Merchandise and NFTs**: Community-branded products

### Investment Income
- **DeFi Yields**: Liquidity provision and staking rewards
- **Token Appreciation**: Long-term holding of protocol tokens
- **Strategic Investments**: Venture capital and project incubation

## Risk Management

### Financial Risks
- **Market Volatility**: Cryptocurrency price fluctuations
- **Smart Contract Risks**: Protocol vulnerabilities and exploits
- **Liquidity Risks**: Inability to sell assets when needed

### Operational Risks
- **Key Management**: Secure storage of treasury keys
- **Governance Attacks**: Manipulation of decision-making processes
- **Technical Failures**: System outages and software bugs

### Compliance Risks
- **Regulatory Changes**: Evolving legal requirements
- **Geographic Restrictions**: Regional compliance differences
- **Tax Implications**: Reporting and payment obligations

## Treasury Tools and Platforms

### Multi-Signature Wallets
- **Gnosis Safe**: Industry-standard multi-sig solution
- **Hardware Security**: Cold storage for large amounts
- **Transaction Monitoring**: Real-time activity tracking

### Treasury Management Platforms
- **Llama**: Treasury management and transaction tracking
- **Zapper**: Portfolio management and yield opportunities
- **Zerion**: DeFi portfolio tracking and analytics

### Analytics and Reporting
- **Dune Analytics**: On-chain data analysis and visualization
- **Nansen**: Portfolio analytics and whale tracking
- **Messari**: Research and market intelligence

## Best Practices

### Security First
- **Multi-Signature Requirements**: Multiple approvals for large transactions
- **Regular Audits**: Smart contract and process verification
- **Insurance Coverage**: Protection against hacks and exploits

### Transparency and Communication
- **Regular Reports**: Monthly treasury status updates
- **Open Discussions**: Community forums for treasury decisions
- **Educational Content**: Treasury management education for members

### Sustainable Growth
- **Long-term Planning**: Multi-year treasury strategies
- **Conservative Spending**: Sustainable withdrawal rates
- **Value-Add Focus**: Investments that increase protocol value

## Case Studies

### MakerDAO Treasury
- **Management**: Professional treasury management team
- **Strategy**: Conservative approach with stablecoin focus
- **Performance**: Consistent growth and stability

### Uniswap Treasury
- **Governance**: Community-controlled treasury decisions
- **Growth**: Significant returns through UNI token appreciation
- **Challenges**: Balancing growth with community expectations

### Aave Treasury
- **Innovation**: Active participation in DeFi ecosystem
- **Diversification**: Multiple yield strategies and assets
- **Transparency**: Detailed monthly reports and analytics

## Future of Treasury Management

### AI-Assisted Management
- **Automated Rebalancing**: Algorithmic portfolio optimization
- **Risk Assessment**: AI-powered risk analysis and mitigation
- **Yield Optimization**: Machine learning for optimal strategies

### Decentralized Autonomous Treasuries
- **Smart Contract Automation**: Automated treasury operations
- **DAO-to-DAO Interactions**: Inter-protocol treasury coordination
- **Cross-Chain Treasuries**: Multi-blockchain asset management

### Impact Investing
- **Social Impact Focus**: Treasury allocations for positive impact
- **ESG Integration**: Environmental, Social, Governance considerations
- **Regenerative Finance**: Investment in ecosystem restoration

## Implementation Guide

### Setting Up a Treasury
1. **Legal Structure**: Choose appropriate legal entity
2. **Wallet Setup**: Multi-signature wallet configuration
3. **Initial Funding**: Community fundraising and token sales
4. **Governance Framework**: Decision-making process establishment

### Day-to-Day Management
1. **Monitoring**: Regular balance and performance checking
2. **Reporting**: Transparent communication with community
3. **Strategy Review**: Periodic assessment and adjustment
4. **Security Updates**: Regular security audits and improvements

### Scaling Considerations
1. **Process Automation**: Tools for efficient treasury operations
2. **Team Expansion**: Additional staff for growing treasuries
3. **Community Education**: Member training on treasury matters
4. **Regulatory Compliance**: Legal and tax compliance management

## Conclusion

Effective treasury management is crucial for the long-term success and sustainability of decentralized communities. By implementing robust governance, maintaining transparency, and following best practices, communities can build treasuries that support growth, innovation, and shared prosperity.
      `,
      completed: false
    },
    {
      id: "economic-policy",
      title: "Economic Policy Design",
      description: "Creating effective economic policies for network states",
      duration: "20 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Economic Policy Design

## What is Economic Policy in Network States?

Economic policy in network states encompasses the rules, incentives, and frameworks that govern economic activity within the community. Unlike traditional nation-states, network state economic policies are implemented through code, smart contracts, and decentralized governance mechanisms.

## Policy Framework Components

### 1. Monetary Policy
- **Token Supply Mechanisms**: Inflation/deflation controls
- **Staking Rewards**: Incentives for network participation
- **Treasury Management**: Collective resource allocation

### 2. Fiscal Policy
- **Taxation Systems**: Revenue generation mechanisms
- **Public Goods Funding**: Community project financing
- **Wealth Redistribution**: Economic equity measures

### 3. Regulatory Framework
- **Market Regulations**: Fair trading and competition rules
- **Consumer Protection**: Safeguards for community members
- **Innovation Incentives**: Support for economic development

## Policy Implementation Mechanisms

### Smart Contract Governance
- **Automated Execution**: Policies enforced by code
- **Immutable Rules**: Transparent and unchangeable core policies
- **Upgradeable Systems**: Flexible policy adaptation

### Decentralized Governance
- **Proposal Systems**: Community policy suggestions
- **Voting Mechanisms**: Democratic policy approval
- **Implementation Tracking**: Policy effectiveness monitoring

### Economic Incentives
- **Token Rewards**: Behavior alignment through incentives
- **Penalty Systems**: Deterrence of harmful actions
- **Reputation Mechanisms**: Quality-based participation rewards

## Key Economic Policy Areas

### Inflation and Supply Management
- **Fixed Supply**: Predetermined maximum token quantities
- **Elastic Supply**: Demand-responsive token creation
- **Burning Mechanisms**: Token removal to increase scarcity

### Distribution and Equity
- **Universal Basic Income**: Guaranteed minimum income
- **Progressive Taxation**: Wealth redistribution mechanisms
- **Opportunity Grants**: Funding for community initiatives

### Market Regulation
- **Anti-Manipulation Rules**: Prevention of market abuse
- **Fair Competition**: Level playing field for participants
- **Consumer Protection**: Safeguards against exploitation

## Policy Design Principles

### Evidence-Based Policy
- **Data-Driven Decisions**: Metrics and analytics for policy evaluation
- **A/B Testing**: Experimental policy implementation
- **Iterative Improvement**: Continuous policy optimization

### Transparency and Accountability
- **Open Policy Process**: Public policy development and discussion
- **Audit Trails**: Complete records of policy decisions and implementations
- **Performance Reporting**: Regular policy effectiveness assessments

### Adaptability and Resilience
- **Flexible Frameworks**: Ability to adjust policies based on changing conditions
- **Emergency Mechanisms**: Crisis response and recovery procedures
- **Scalability Considerations**: Policies that work at different community sizes

## Policy Implementation Challenges

### Coordination Problems
- **Free Rider Issues**: Some benefit without contributing
- **Tragedy of the Commons**: Overuse of shared resources
- **Prisoner's Dilemma**: Individual vs collective rationality

### Information Asymmetry
- **Hidden Actions**: Unobservable contributor efforts
- **Adverse Selection**: Attracting low-quality participants
- **Moral Hazard**: Risk-taking due to lack of accountability

### External Factors
- **Market Volatility**: External economic conditions impact
- **Regulatory Changes**: Legal environment evolution
- **Technological Disruption**: New technologies requiring policy updates

## Solutions and Innovations

### Incentive Engineering
- **Mechanism Design**: Creating rules that align individual and collective interests
- **Token Engineering**: Designing token systems that achieve desired outcomes
- **Behavioral Economics**: Understanding and influencing human behavior

### Technology-Enabled Solutions
- **Blockchain Transparency**: Immutable records and audit trails
- **Smart Contracts**: Automated policy enforcement
- **Decentralized Identity**: Trust and reputation systems

### Community Governance
- **Participatory Policy Making**: Community involvement in policy design
- **Expert Consultation**: Technical expertise integration
- **Iterative Feedback**: Continuous policy improvement

## Case Studies

### MakerDAO Stability Fees
- **Problem**: Maintaining DAI peg to USD
- **Solution**: Dynamic stability fees based on market conditions
- **Outcome**: Successful price stability maintenance

### Uniswap Fee Structure
- **Problem**: Fair fee distribution and protocol sustainability
- **Solution**: Automatic fee switching and governance control
- **Outcome**: Sustainable protocol development funding

### Gitcoin Quadratic Funding
- **Problem**: Fair public goods funding
- **Solution**: Matching funds based on community support
- **Outcome**: More democratic and effective funding allocation

## Policy Evaluation Framework

### Quantitative Metrics
- **Economic Growth**: GDP-like measures for network states
- **Income Distribution**: Gini coefficients and equality metrics
- **Participation Rates**: Community engagement and activity levels

### Qualitative Assessment
- **Community Satisfaction**: Surveys and feedback mechanisms
- **Innovation Levels**: New project and initiative creation
- **Social Cohesion**: Community trust and collaboration metrics

### Long-term Sustainability
- **Resource Utilization**: Efficient use of community resources
- **Environmental Impact**: Ecological footprint assessment
- **Intergenerational Equity**: Fairness across time periods

## Future of Economic Policy

### AI-Assisted Policy Design
- **Predictive Modeling**: Forecasting policy outcomes
- **Automated Optimization**: AI-driven policy adjustments
- **Personalized Incentives**: Individual-tailored economic incentives

### Decentralized Policy Networks
- **Interoperability**: Policy frameworks that work across network states
- **Shared Standards**: Common policy languages and frameworks
- **Collaborative Governance**: Cross-community policy coordination

### Regenerative Economics
- **Natural Capital Valuation**: Environmental and social value accounting
- **Circular Economy**: Waste elimination and resource optimization
- **Impact Investing**: Capital allocation for positive outcomes

## Practical Implementation

### Policy Development Process
1. **Problem Identification**: Clear definition of economic challenges
2. **Research and Analysis**: Data collection and stakeholder consultation
3. **Solution Design**: Multiple policy options development
4. **Testing and Simulation**: Policy impact modeling and testing
5. **Implementation**: Phased rollout with monitoring
6. **Evaluation and Iteration**: Continuous improvement based on results

### Governance Integration
1. **Community Education**: Policy explanation and understanding
2. **Participatory Design**: Community involvement in policy creation
3. **Transparent Communication**: Clear policy rationale and expected outcomes
4. **Accountability Mechanisms**: Policy performance tracking and reporting

### Risk Management
1. **Pilot Programs**: Small-scale policy testing before full implementation
2. **Fallback Mechanisms**: Emergency procedures for policy failures
3. **Insurance Systems**: Protection against adverse policy outcomes
4. **Regular Audits**: Independent policy effectiveness verification

## Conclusion

Effective economic policy design is essential for creating sustainable and prosperous network states. By combining evidence-based approaches, community participation, and technological innovation, network states can develop economic systems that are more equitable, efficient, and resilient than traditional economic models.
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
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/learn" className="text-white/80 hover:text-white">
              ← Back to Learning Center
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <Badge className="mb-2 bg-white/20 text-white border-white/30">Economics</Badge>
              <h1 className="text-4xl font-bold mb-2">Economic Systems & Sustainability</h1>
              <p className="text-xl text-white/90 mb-4">
                Master token economics, DeFi, and sustainable economic models for network states
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
