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
<h1>🌐 &nbsp;The Network State — Explained Simply</h1>

<p>The Network State is a concept from the book by Balaji Srinivasan. It describes a new way countries could be created in the future — starting online, not on land.</p>

<h2>❓&nbsp;What Is a Network State?</h2>

<p>A Network State is an online community of people who share the same values and goals, organize themselves digitally, and eventually build real-world places to live together.</p>

<h2>⚙️&nbsp;How It Works</h2>

<h3>🔗&nbsp;People connect online</h3>
<p>Individuals from around the world come together through the internet.</p>

<h3>👥 &nbsp;They build a strong community</h3>
<p>Members share ideas, support each other, and work toward common goals.</p>

<h3>💻 &nbsp;They organize digitally</h3>
<p>The community creates rules, leadership, and systems using technology.</p>

<h3>🏠 &nbsp;They move into the real world</h3>
<p>Members start living near each other and building physical spaces.</p>

<h3>🏛️ &nbsp;They gain recognition</h3>
<p>Over time, they are recognized as a new kind of nation.</p>

<h2>🤔 &nbsp;Why It Matters</h2>

<p>Many people feel traditional governments no longer meet their needs. The Network State offers a future where people can choose a community that reflects their values, instead of being limited by geography.</p>

<h2>💬 &nbsp;In Simple Words</h2>

<p>A Network State is a country that begins as an online community and grows into a real-world society.</p>

<h2>💡 &nbsp;A New Idea for the Digital Age</h2>

<p>The Network State explores how technology, the internet, and shared values can help people build new societies designed for the modern world.</p>
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
<h1>🎯&nbsp;The Vision and Mission</h1>

<h2>🔮&nbsp;Our Vision</h2>

<p>To create a network of sovereign digital communities that collectively advance human flourishing through technological innovation, decentralized governance, and global cooperation.</p>

<h2>🚀&nbsp;Core Mission</h2>

<h3>🛡️&nbsp;1. Technological Sovereignty</h3>
<p>Develop and maintain independent technological infrastructure that serves the needs of our community without reliance on external platforms or governments.</p>

<h3>💰&nbsp;2. Economic Freedom</h3>
<p>Create sustainable economic models that reward contribution, innovation, and long-term thinking over short-term profit maximization.</p>

<h3>📚&nbsp;3. Knowledge Preservation</h3>
<p>Build robust systems for preserving and advancing human knowledge, ensuring that critical information survives catastrophic events.</p>

<h3>🌍&nbsp;4. Global Cooperation</h3>
<p>Foster collaboration between network states to solve global challenges that individual nation-states cannot address alone.</p>

<h2>📋&nbsp;Strategic Objectives</h2>

<h3>⏱️&nbsp;Short-term (1-2 years)</h3>
<ul>
<li>Establish core technological infrastructure</li>
<li>Build initial community of contributors</li>
<li>Launch first economic experiments</li>
<li>Develop governance frameworks</li>
</ul>

<h3>📈&nbsp;Medium-term (3-5 years)</h3>
<ul>
<li>Acquire initial territory through crowdfunding</li>
<li>Establish diplomatic recognition protocols</li>
<li>Scale community to thousands of active participants</li>
<li>Launch advanced technological projects</li>
</ul>

<h3>🚀&nbsp;Long-term (5+ years)</h3>
<ul>
<li>Achieve full technological and economic sovereignty</li>
<li>Establish network state as recognized diplomatic entity</li>
<li>Expand to multiple territories worldwide</li>
<li>Contribute to global technological advancement</li>
</ul>

<h2>⭐&nbsp;Values and Principles</h2>

<h3>🏆&nbsp;Meritocracy</h3>
<p>Decisions and opportunities are allocated based on demonstrated merit and contribution to the community.</p>

<h3>🔍&nbsp;Transparency</h3>
<p>All governance decisions, financial transactions, and technological developments are publicly auditable.</p>

<h3>🌱&nbsp;Sustainability</h3>
<p>All systems and processes are designed for long-term viability and environmental responsibility.</p>

<h3>🤝&nbsp;Inclusivity</h3>
<p>Participation is open to anyone who shares our vision and is willing to contribute positively.</p>
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
<h1>👥&nbsp;Building Your Community</h1>

<h2>🏗️&nbsp;Community Fundamentals</h2>

<h3>🎯&nbsp;1. Shared Vision</h3>
<p>Every successful community starts with a clear, compelling vision that resonates with potential members. This vision must be:</p>
<ul>
<li><strong>Specific</strong>: Clearly defined goals and objectives</li>
<li><strong>Inspiring</strong>: Motivates action and commitment</li>
<li><strong>Achievable</strong>: Realistic within reasonable timeframes</li>
<li><strong>Measurable</strong>: Progress can be tracked and celebrated</li>
</ul>

<h3>💎&nbsp;2. Core Values</h3>
<p>Define and communicate the fundamental principles that guide your community's behavior and decisions.</p>

<h3>📋&nbsp;3. Clear Expectations</h3>
<p>Set transparent expectations for participation, contribution, and community standards.</p>

<h2>📈&nbsp;Growth Strategies</h2>

<h3>🌱&nbsp;Organic Growth</h3>
<ul>
<li><strong>Content Creation</strong>: Share valuable insights and resources</li>
<li><strong>Networking</strong>: Participate in relevant online communities</li>
<li><strong>Word of Mouth</strong>: Encourage satisfied members to invite others</li>
<li><strong>Quality over Quantity</strong>: Focus on attracting aligned individuals</li>
</ul>

<h3>⚙️&nbsp;Community Management</h3>
<ul>
<li><strong>Onboarding Process</strong>: Smooth integration of new members</li>
<li><strong>Regular Communication</strong>: Keep members informed and engaged</li>
<li><strong>Conflict Resolution</strong>: Fair and transparent dispute resolution</li>
<li><strong>Recognition Systems</strong>: Reward valuable contributions</li>
</ul>

<h3>🔄&nbsp;Retention Strategies</h3>
<ul>
<li><strong>Value Delivery</strong>: Consistently provide value to members</li>
<li><strong>Community Events</strong>: Regular meetups, discussions, and activities</li>
<li><strong>Feedback Loops</strong>: Listen to member concerns and suggestions</li>
<li><strong>Personal Connections</strong>: Foster meaningful relationships</li>
</ul>

<h2>🏛️&nbsp;Community Structure</h2>

<h3>👤&nbsp;Roles and Responsibilities</h3>
<ul>
<li><strong>Contributors</strong>: Active participants who add value</li>
<li><strong>Moderators</strong>: Maintain community standards</li>
<li><strong>Administrators</strong>: Oversee operations and strategy</li>
<li><strong>Ambassadors</strong>: Represent the community externally</li>
</ul>

<h3>💬&nbsp;Communication Channels</h3>
<ul>
<li><strong>Primary Platform</strong>: Main community hub</li>
<li><strong>Specialized Channels</strong>: Topic-specific discussions</li>
<li><strong>Direct Communication</strong>: Private messaging for sensitive matters</li>
<li><strong>Public Forums</strong>: Open discussions and announcements</li>
</ul>

<h2>📊&nbsp;Measuring Success</h2>

<h3>📈&nbsp;Quantitative Metrics</h3>
<ul>
<li>Member growth rate</li>
<li>Active participation levels</li>
<li>Content engagement statistics</li>
<li>Contribution frequency</li>
</ul>

<h3>😊&nbsp;Qualitative Indicators</h3>
<ul>
<li>Member satisfaction surveys</li>
<li>Community sentiment analysis</li>
<li>Quality of discussions</li>
<li>Innovation and creativity levels</li>
</ul>

<h2>⚠️&nbsp;Common Challenges</h2>

<h3>📉&nbsp;Growth Plateaus</h3>
<ul>
<li>Reassess value proposition</li>
<li>Explore new marketing channels</li>
<li>Partner with complementary communities</li>
</ul>

<h3>🤝&nbsp;Community Conflicts</h3>
<ul>
<li>Establish clear conflict resolution processes</li>
<li>Promote empathy and understanding</li>
<li>Focus on shared goals</li>
</ul>

<h3>🔥&nbsp;Burnout Prevention</h3>
<ul>
<li>Rotate responsibilities</li>
<li>Encourage work-life balance</li>
<li>Provide support systems</li>
</ul>

<h2>➡️&nbsp;Next Steps</h2>

<p>Building a strong community is an ongoing process that requires consistent effort, adaptability, and genuine care for your members. Focus on creating genuine value and fostering meaningful connections.</p>
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
<h1>🛠️&nbsp;Core Technologies</h1>

<h2>⛓️&nbsp;Blockchain and Cryptocurrencies</h2>

<h3>❓&nbsp;Why Blockchain Matters</h3>
<p>Blockchain technology provides the foundation for decentralized governance, transparent transactions, and digital sovereignty.</p>

<h3>🔑&nbsp;Key Components</h3>
<ul>
<li><strong>Smart Contracts</strong>: Self-executing agreements</li>
<li><strong>Decentralized Identity</strong>: User-controlled digital identities</li>
<li><strong>Token Economics</strong>: Incentive alignment mechanisms</li>
<li><strong>Governance Systems</strong>: Decentralized decision-making</li>
</ul>

<h2>📡&nbsp;Communication Infrastructure</h2>

<h3>🔒&nbsp;Secure Messaging</h3>
<ul>
<li>End-to-end encrypted communication channels</li>
<li>Decentralized messaging protocols</li>
<li>Secure group communication</li>
</ul>

<h3>📁&nbsp;Content Management</h3>
<ul>
<li>Decentralized content storage (IPFS, Arweave)</li>
<li>Censorship-resistant publishing platforms</li>
<li>Collaborative editing systems</li>
</ul>

<h2>💾&nbsp;Data Management</h2>

<h3>🗄️&nbsp;Database Systems</h3>
<ul>
<li>Distributed databases for resilience</li>
<li>Privacy-preserving data storage</li>
<li>Secure backup and recovery systems</li>
</ul>

<h3>📊&nbsp;Analytics and Monitoring</h3>
<ul>
<li>Real-time system monitoring</li>
<li>Community analytics dashboards</li>
<li>Performance optimization tools</li>
</ul>

<h2>🛡️&nbsp;Security Infrastructure</h2>

<h3>🔐&nbsp;Cryptographic Foundations</h3>
<ul>
<li>Public-key cryptography for authentication</li>
<li>Zero-knowledge proofs for privacy</li>
<li>Multi-signature schemes for security</li>
</ul>

<h3>🌐&nbsp;Network Security</h3>
<ul>
<li>Distributed denial-of-service protection</li>
<li>Secure communication protocols</li>
<li>Regular security audits and updates</li>
</ul>

<h2>⚙️&nbsp;Development Tools</h2>

<h3>💻&nbsp;Programming Languages</h3>
<ul>
<li>Rust for system-level programming</li>
<li>TypeScript for web applications</li>
<li>Solidity for smart contracts</li>
</ul>

<h3>🏗️&nbsp;Development Environment</h3>
<ul>
<li>Containerization (Docker)</li>
<li>Infrastructure as Code (Terraform)</li>
<li>Continuous Integration/Deployment</li>
</ul>

<h2>💰&nbsp;Economic Systems</h2>

<h3>🪙&nbsp;Token Design</h3>
<ul>
<li>Utility tokens for platform access</li>
<li>Governance tokens for voting rights</li>
<li>Stablecoins for value preservation</li>
</ul>

<h3>🏪&nbsp;Marketplace Infrastructure</h3>
<ul>
<li>Decentralized exchanges</li>
<li>Automated market makers</li>
<li>Prediction markets</li>
</ul>

<h2>🏛️&nbsp;Governance Tools</h2>

<h3>🗳️&nbsp;Voting Systems</h3>
<ul>
<li>Quadratic voting for resource allocation</li>
<li>Liquid democracy for decision-making</li>
<li>Futarchy for outcome-based governance</li>
</ul>

<h3>⚖️&nbsp;Dispute Resolution</h3>
<ul>
<li>Decentralized arbitration systems</li>
<li>Community courts</li>
<li>Automated enforcement mechanisms</li>
</ul>

<h2>🔗&nbsp;Integration and APIs</h2>

<h3>🤝&nbsp;Interoperability</h3>
<ul>
<li>Cross-platform communication protocols</li>
<li>Standardized API interfaces</li>
<li>Modular system architecture</li>
</ul>

<h3>🔌&nbsp;Third-party Integrations</h3>
<ul>
<li>Payment processors</li>
<li>Identity verification services</li>
<li>Communication platforms</li>
</ul>

<h2>🚀&nbsp;Future Technologies</h2>

<h3>🤖&nbsp;Artificial Intelligence</h3>
<ul>
<li>AI-assisted governance</li>
<li>Automated decision support</li>
<li>Natural language processing for community interaction</li>
</ul>

<h3>⚛️&nbsp;Quantum Computing</h3>
<ul>
<li>Post-quantum cryptography</li>
<li>Advanced optimization algorithms</li>
<li>Quantum-secure communication</li>
</ul>

<h3>🧬&nbsp;Biotechnology</h3>
<ul>
<li>Decentralized health records</li>
<li>Community biotechnology initiatives</li>
<li>Longevity research coordination</li>
</ul>

<h2>📋&nbsp;Implementation Strategy</h2>

<h3>🏗️&nbsp;Phase 1: Foundation</h3>
<ul>
<li>Establish basic blockchain infrastructure</li>
<li>Implement core communication systems</li>
<li>Set up initial governance frameworks</li>
</ul>

<h3>📈&nbsp;Phase 2: Expansion</h3>
<ul>
<li>Integrate advanced security features</li>
<li>Deploy economic systems</li>
<li>Scale community infrastructure</li>
</ul>

<h3>⚡&nbsp;Phase 3: Optimization</h3>
<ul>
<li>Implement AI assistance systems</li>
<li>Optimize performance and user experience</li>
<li>Expand interoperability</li>
</ul>

<h2>🔧&nbsp;Technical Challenges</h2>

<h3>📏&nbsp;Scalability</h3>
<ul>
<li>Handling growth from hundreds to millions of users</li>
<li>Maintaining performance under load</li>
<li>Optimizing resource utilization</li>
</ul>

<h3>🔒&nbsp;Security</h3>
<ul>
<li>Protecting against sophisticated attacks</li>
<li>Ensuring user privacy</li>
<li>Maintaining system integrity</li>
</ul>

<h3>👥&nbsp;Usability</h3>
<ul>
<li>Making complex systems accessible</li>
<li>Providing intuitive user interfaces</li>
<li>Reducing technical barriers to entry</li>
</ul>

<h2>📚&nbsp;Learning Resources</h2>

<h3>📖&nbsp;Recommended Reading</h3>
<ul>
<li>"The Network State" by Balaji</li>
<li>"Blockchain Basics" by Antony Lewis</li>
<li>"Cryptography Engineering" by Niels Ferguson</li>
</ul>

<h3>🎓&nbsp;Online Courses</h3>
<ul>
<li>Blockchain Fundamentals</li>
<li>Decentralized Systems Design</li>
<li>Cryptocurrency Economics</li>
</ul>

<h3>👥&nbsp;Communities</h3>
<ul>
<li>Developer forums and Discord servers</li>
<li>Technical conferences and meetups</li>
<li>Open-source contribution opportunities</li>
</ul>
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
<h1>🏛️&nbsp;Governance Models</h1>

<h2>📖&nbsp;Introduction to Governance</h2>

<p>Governance in network states represents a fundamental shift from traditional hierarchical structures to decentralized, participatory systems. Effective governance ensures that decisions align with community values and long-term goals.</p>

<h2>⭐&nbsp;Core Principles</h2>

<h3>🌐&nbsp;1. Decentralization</h3>
<p>Power is distributed across the community rather than concentrated in a central authority.</p>

<h3>🔍&nbsp;2. Transparency</h3>
<p>All decisions and their rationales are publicly visible and auditable.</p>

<h3>📊&nbsp;3. Accountability</h3>
<p>Participants are responsible for the outcomes of their decisions and actions.</p>

<h3>🔄&nbsp;4. Adaptability</h3>
<p>Systems can evolve and improve based on community feedback and changing circumstances.</p>

<h2>🗳️&nbsp;Governance Models</h2>

<h3>👥&nbsp;Direct Democracy</h3>
<p>Every member has an equal vote on all decisions.</p>
<p><strong>Advantages:</strong></p>
<ul>
<li>High legitimacy and participation</li>
<li>Direct representation of community will</li>
<li>Simple and transparent</li>
</ul>
<p><strong>Challenges:</strong></p>
<ul>
<li>Scalability issues with large communities</li>
<li>Potential for uninformed decision-making</li>
<li>Time-consuming for frequent decisions</li>
</ul>

<h3>🏛️&nbsp;Representative Democracy</h3>
<p>Members elect representatives to make decisions on their behalf.</p>
<p><strong>Advantages:</strong></p>
<ul>
<li>Scalable to large communities</li>
<li>Allows specialization of decision-making</li>
<li>More efficient for complex issues</li>
</ul>
<p><strong>Challenges:</strong></p>
<ul>
<li>Potential for representative capture</li>
<li>Less direct participation</li>
<li>Risk of elite formation</li>
</ul>

<h3>🌊&nbsp;Liquid Democracy</h3>
<p>Members can vote directly or delegate their voting power to trusted representatives.</p>
<p><strong>Advantages:</strong></p>
<ul>
<li>Combines benefits of direct and representative democracy</li>
<li>Flexible participation levels</li>
<li>Allows expertise utilization</li>
</ul>
<p><strong>Challenges:</strong></p>
<ul>
<li>Complex delegation chains</li>
<li>Potential for manipulation</li>
<li>Requires sophisticated technology</li>
</ul>

<h3>📐&nbsp;Quadratic Voting</h3>
<p>Voting power is allocated based on the square root of tokens held, reducing the influence of large holders.</p>
<p><strong>Advantages:</strong></p>
<ul>
<li>Reduces wealth-based power concentration</li>
<li>Encourages broad participation</li>
<li>Mathematically optimal for preference aggregation</li>
</ul>
<p><strong>Challenges:</strong></p>
<ul>
<li>Complex implementation</li>
<li>Higher cognitive load for participants</li>
<li>Potential for strategic voting</li>
</ul>

<h3>🔮&nbsp;Futarchy</h3>
<p>Decisions are made based on prediction markets that forecast outcomes.</p>
<p><strong>Advantages:</strong></p>
<ul>
<li>Evidence-based decision-making</li>
<li>Incentivizes accurate information revelation</li>
<li>Reduces ideological bias</li>
</ul>
<p><strong>Challenges:</strong></p>
<ul>
<li>Requires sophisticated market infrastructure</li>
<li>Vulnerable to manipulation</li>
<li>Complex for non-quantifiable decisions</li>
</ul>

<h2>⚙️&nbsp;Implementation Strategies</h2>

<h3>🗳️&nbsp;Voting Systems</h3>
<ul>
<li><strong>On-chain Governance</strong>: Blockchain-based voting for transparent, immutable records</li>
<li><strong>Off-chain Governance</strong>: Web-based interfaces for user-friendly participation</li>
<li><strong>Hybrid Approaches</strong>: Combining on-chain security with off-chain usability</li>
</ul>

<h3>📋&nbsp;Decision Frameworks</h3>
<ul>
<li><strong>Proposal Systems</strong>: Structured process for submitting and evaluating proposals</li>
<li><strong>Working Groups</strong>: Specialized teams handling specific domains</li>
<li><strong>Advisory Councils</strong>: Expert groups providing recommendations</li>
</ul>

<h3>💰&nbsp;Incentive Alignment</h3>
<ul>
<li><strong>Participation Rewards</strong>: Token rewards for active governance participation</li>
<li><strong>Quality Incentives</strong>: Bonuses for well-researched proposals</li>
<li><strong>Long-term Alignment</strong>: Mechanisms encouraging long-term thinking</li>
</ul>

<h2>🛠️&nbsp;Governance Tools and Platforms</h2>

<h3>🗳️&nbsp;Voting Platforms</h3>
<ul>
<li><strong>Snapshot</strong>: Off-chain voting for DAOs</li>
<li><strong>Tally</strong>: On-chain governance interface</li>
<li><strong>Agora</strong>: Quadratic voting platform</li>
</ul>

<h3>📝&nbsp;Proposal Systems</h3>
<ul>
<li><strong>Compound Governance</strong>: Template-based proposal creation</li>
<li><strong>Governor Bravo</strong>: Optimized governance contracts</li>
<li><strong>OpenZeppelin Governor</strong>: Modular governance framework</li>
</ul>

<h3>📊&nbsp;Analytics and Monitoring</h3>
<ul>
<li><strong>Boardroom</strong>: Governance analytics dashboard</li>
<li><strong>DeepDAO</strong>: Comprehensive DAO analytics</li>
<li><strong>Tally Insights</strong>: Voting participation metrics</li>
</ul>

<h2>✅&nbsp;Best Practices</h2>

<h3>🔄&nbsp;Process Design</h3>
<ul>
<li><strong>Clear Timelines</strong>: Defined periods for proposal submission, discussion, and voting</li>
<li><strong>Structured Discussions</strong>: Organized forums for proposal evaluation</li>
<li><strong>Implementation Tracking</strong>: Systems for monitoring decision execution</li>
</ul>

<h3>🎓&nbsp;Community Education</h3>
<ul>
<li><strong>Governance Literacy</strong>: Educational programs on governance concepts</li>
<li><strong>Process Transparency</strong>: Clear documentation of all governance processes</li>
<li><strong>Feedback Mechanisms</strong>: Regular surveys on governance satisfaction</li>
</ul>

<h3>⚠️&nbsp;Risk Management</h3>
<ul>
<li><strong>Gradual Implementation</strong>: Start with simple systems and gradually increase complexity</li>
<li><strong>Fallback Mechanisms</strong>: Emergency procedures for governance failures</li>
<li><strong>Regular Audits</strong>: Independent reviews of governance systems</li>
</ul>

<h2>📊&nbsp;Measuring Governance Health</h2>

<h3>📈&nbsp;Quantitative Metrics</h3>
<ul>
<li><strong>Participation Rate</strong>: Percentage of members actively participating</li>
<li><strong>Proposal Volume</strong>: Number and quality of proposals submitted</li>
<li><strong>Decision Speed</strong>: Time from proposal to implementation</li>
<li><strong>Voter Turnout</strong>: Percentage voting in important decisions</li>
</ul>

<h3>😊&nbsp;Qualitative Indicators</h3>
<ul>
<li><strong>Community Satisfaction</strong>: Surveys on governance experience</li>
<li><strong>Decision Quality</strong>: Assessment of decision outcomes</li>
<li><strong>Conflict Resolution</strong>: Effectiveness of dispute resolution processes</li>
<li><strong>Innovation Level</strong>: Rate of novel proposals and solutions</li>
</ul>

<h2>🔧&nbsp;Challenges and Solutions</h2>

<h3>😴&nbsp;Voter Apathy</h3>
<ul>
<li><strong>Gamification</strong>: Make participation engaging and rewarding</li>
<li><strong>Simplified Interfaces</strong>: User-friendly voting platforms</li>
<li><strong>Delegated Voting</strong>: Allow passive participation through delegation</li>
</ul>

<h3>👥&nbsp;Sybil Attacks</h3>
<ul>
<li><strong>Identity Verification</strong>: Robust identity systems</li>
<li><strong>Proof of Stake</strong>: Require stake for voting rights</li>
<li><strong>Reputation Systems</strong>: Build trust through demonstrated contribution</li>
</ul>

<h3>🤝&nbsp;Coordination Problems</h3>
<ul>
<li><strong>Clear Communication</strong>: Transparent information sharing</li>
<li><strong>Modular Structure</strong>: Break complex decisions into manageable parts</li>
<li><strong>Facilitation Support</strong>: Trained facilitators for complex discussions</li>
</ul>

<h2>🚀&nbsp;Future of Governance</h2>

<h3>🤖&nbsp;AI-Assisted Governance</h3>
<ul>
<li><strong>Decision Support</strong>: AI analysis of proposal impacts</li>
<li><strong>Automated Execution</strong>: Smart contracts for routine decisions</li>
<li><strong>Sentiment Analysis</strong>: AI monitoring of community sentiment</li>
</ul>

<h3>🔮&nbsp;Predictive Governance</h3>
<ul>
<li><strong>Outcome Forecasting</strong>: Prediction markets for decision outcomes</li>
<li><strong>Impact Assessment</strong>: AI evaluation of proposal consequences</li>
<li><strong>Trend Analysis</strong>: Identification of emerging community preferences</li>
</ul>

<h3>🌍&nbsp;Global Governance Networks</h3>
<ul>
<li><strong>Interoperability</strong>: Governance systems that work across network states</li>
<li><strong>Shared Standards</strong>: Common frameworks for governance processes</li>
<li><strong>Collaborative Decision-Making</strong>: Cross-community governance initiatives</li>
</ul>

<h2>🚀&nbsp;Getting Started with Governance</h2>

<h3>🔍&nbsp;1. Assess Your Community</h3>
<ul>
<li>Current size and engagement levels</li>
<li>Existing decision-making processes</li>
<li>Community values and preferences</li>
</ul>

<h3>🎯&nbsp;2. Choose Appropriate Models</h3>
<ul>
<li>Start with simpler systems for small communities</li>
<li>Plan for scalability as you grow</li>
<li>Consider hybrid approaches for flexibility</li>
</ul>

<h3>📈&nbsp;3. Implement Gradually</h3>
<ul>
<li>Begin with non-critical decisions</li>
<li>Gather feedback and iterate</li>
<li>Build trust through successful implementations</li>
</ul>

<h3>🎓&nbsp;4. Educate and Engage</h3>
<ul>
<li>Provide governance education</li>
<li>Encourage active participation</li>
<li>Celebrate successful governance outcomes</li>
</ul>

<h2>🏁&nbsp;Conclusion</h2>

<p>Effective governance is the foundation of successful network states. By implementing transparent, participatory, and adaptive governance systems, network states can achieve better decision-making, higher community engagement, and more sustainable outcomes than traditional hierarchical organizations.</p>
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
