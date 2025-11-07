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

export default function CommunityBuildingCourse() {
  const [currentModule, setCurrentModule] = useState(0)
  const [completedModules, setCompletedModules] = useState<Set<number>>(new Set())

  const modules: Module[] = [
    {
      id: "community-psychology",
      title: "Community Psychology & Dynamics",
      description: "Understanding human behavior and group dynamics in online communities",
      duration: "14 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Community Psychology & Dynamics

## Understanding Human Behavior in Communities

Community psychology examines how individuals behave within group settings and how communities influence personal development and social change. In the context of network states, understanding these dynamics is crucial for building sustainable and thriving communities.

## Key Psychological Concepts

### 1. Social Identity Theory
- **In-Group vs Out-Group**: How people categorize themselves and others
- **Identity Formation**: How community membership shapes self-concept
- **Intergroup Relations**: Dynamics between different community segments

### 2. Group Cohesion
- **Belongingness**: The need to feel connected and accepted
- **Shared Goals**: Common objectives that unite members
- **Emotional Bonds**: Relationships formed through shared experiences

### 3. Social Exchange Theory
- **Costs and Benefits**: Perceived value of community participation
- **Reciprocity Norms**: Expectations of mutual exchange
- **Equity Theory**: Fairness perceptions in contributions and rewards

## Community Development Stages

### Forming Stage
- **Initial Interactions**: First impressions and introductions
- **Testing Boundaries**: Understanding community norms and rules
- **Dependency on Leader**: Reliance on founders or moderators
- **Anxiety and Uncertainty**: New member apprehension

### Storming Stage
- **Conflict Emergence**: Disagreements about direction and rules
- **Power Struggles**: Competition for influence and leadership
- **Resistance to Change**: Pushback against new ideas
- **Emotional Tension**: Frustration and dissatisfaction

### Norming Stage
- **Agreement on Rules**: Establishment of community standards
- **Role Clarity**: Understanding member responsibilities
- **Cooperation Increase**: Working together toward common goals
- **Trust Building**: Developing confidence in the community

### Performing Stage
- **High Productivity**: Efficient achievement of objectives
- **Interdependence**: Members relying on each other's strengths
- **Flexibility**: Adaptability to changing circumstances
- **Innovation**: Creative problem-solving and new ideas

### Adjourning Stage
- **Task Completion**: Achievement of original goals
- **Transition Planning**: Preparing for next phases
- **Reflection**: Learning from the experience
- **Celebration**: Recognizing accomplishments

## Social Dynamics in Online Communities

### Communication Patterns
- **Synchronous vs Asynchronous**: Real-time vs delayed interactions
- **Written Communication**: Nuances lost in text-based communication
- **Digital Body Language**: Emojis, formatting, and response times
- **Context Collapse**: Multiple audiences in single platforms

### Power and Influence
- **Formal Authority**: Designated roles and permissions
- **Informal Influence**: Social capital and reputation
- **Information Control**: Access to knowledge and resources
- **Network Position**: Centrality in communication flows

### Conflict and Resolution
- **Sources of Conflict**: Resource scarcity, value differences, personality clashes
- **Resolution Strategies**: Mediation, voting, compromise, separation
- **Prevention Methods**: Clear rules, regular communication, trust building
- **Learning Opportunities**: Growth through constructive conflict

## Psychological Needs in Communities

### Belonging and Acceptance
- **Social Connection**: Feeling part of something larger
- **Identity Affirmation**: Validation of personal values and beliefs
- **Emotional Support**: Receiving and giving care and empathy
- **Shared Experiences**: Bonding through common activities

### Autonomy and Control
- **Personal Agency**: Ability to influence community direction
- **Freedom of Expression**: Safe space for opinions and ideas
- **Self-Determination**: Control over personal community involvement
- **Growth Opportunities**: Personal development through participation

### Competence and Achievement
- **Skill Development**: Learning and improving abilities
- **Recognition**: Acknowledgment of contributions and achievements
- **Mastery Experiences**: Successfully completing challenges
- **Progress Feedback**: Clear indicators of improvement

### Purpose and Meaning
- **Shared Mission**: Contributing to meaningful goals
- **Value Alignment**: Personal values matching community purpose
- **Impact Awareness**: Understanding one's contribution to larger goals
- **Legacy Building**: Creating lasting positive change

## Building Psychological Safety

### Trust Foundations
- **Reliability**: Following through on commitments
- **Transparency**: Open communication and decision-making
- **Consistency**: Predictable behavior and responses
- **Integrity**: Honesty and ethical conduct

### Vulnerability Acceptance
- **Safe Expression**: Freedom to share ideas without fear
- **Mistake Tolerance**: Learning from errors rather than punishment
- **Supportive Environment**: Encouraging risk-taking and innovation
- **Empathy and Understanding**: Considering others' perspectives

### Inclusive Practices
- **Diverse Perspectives**: Valuing different backgrounds and viewpoints
- **Equal Participation**: Ensuring all voices are heard
- **Accessibility**: Removing barriers to participation
- **Cultural Sensitivity**: Respecting different communication styles

## Motivation and Engagement

### Intrinsic Motivation
- **Autonomy**: Self-directed participation and choices
- **Mastery**: Desire to improve and develop skills
- **Purpose**: Connection to meaningful goals and values
- **Relatedness**: Social connections and relationships

### Extrinsic Motivation
- **Rewards and Incentives**: Tangible benefits for participation
- **Recognition**: Public acknowledgment of contributions
- **Status and Prestige**: Social standing within the community
- **Competitive Elements**: Friendly competition and challenges

### Sustained Engagement
- **Habit Formation**: Making participation a regular routine
- **Progressive Challenges**: Increasing difficulty and responsibility
- **Social Accountability**: Peer support and encouragement
- **Personal Investment**: Emotional and time commitment

## Community Health Indicators

### Quantitative Metrics
- **Participation Rates**: Active member engagement levels
- **Retention Rates**: Member longevity and commitment
- **Growth Trends**: New member acquisition and integration
- **Interaction Frequency**: Communication and collaboration levels

### Qualitative Indicators
- **Member Satisfaction**: Surveys and feedback on experience
- **Relationship Quality**: Trust and cooperation levels
- **Innovation Levels**: New ideas and creative contributions
- **Conflict Resolution**: Effectiveness of dispute management

### Behavioral Patterns
- **Help-Seeking Behavior**: Willingness to ask for and offer help
- **Knowledge Sharing**: Open exchange of information and expertise
- **Collaborative Problem-Solving**: Working together on challenges
- **Celebration of Success**: Recognizing and appreciating achievements

## Psychological Challenges

### Online Disinhibition Effect
- **Anonymity**: Reduced accountability leading to negative behavior
- **Minority Slacks**: Less effort due to diffused responsibility
- **Toxic Communication**: Harsh language and personal attacks
- **Echo Chambers**: Reinforcement of existing beliefs

### Social Comparison
- **Upward Comparison**: Feeling inadequate compared to others
- **Downward Comparison**: Feeling superior leading to disconnection
- **Social Media Influence**: External comparisons affecting self-esteem
- **Achievement Pressure**: Stress from performance expectations

### Burnout and Fatigue
- **Compassion Fatigue**: Emotional exhaustion from helping others
- **Decision Fatigue**: Mental exhaustion from constant choices
- **Notification Overload**: Constant digital interruptions
- **Context Switching**: Mental cost of moving between tasks

## Solutions and Interventions

### Community Design
- **Clear Guidelines**: Explicit rules and behavioral expectations
- **Moderation Systems**: Active monitoring and intervention
- **Onboarding Processes**: Smooth integration for new members
- **Support Structures**: Help systems and resource availability

### Psychological Support
- **Mental Health Resources**: Access to counseling and support
- **Stress Management**: Techniques for managing community involvement
- **Work-Life Balance**: Encouraging healthy participation boundaries
- **Peer Support**: Member-to-member assistance and mentoring

### Technology Solutions
- **Platform Design**: User interface promoting positive interactions
- **Algorithmic Moderation**: Automated detection of harmful content
- **Personalization**: Tailored experiences based on individual needs
- **Privacy Controls**: User control over personal information and interactions

## Future of Community Psychology

### AI-Assisted Community Management
- **Sentiment Analysis**: Understanding community emotional states
- **Behavioral Prediction**: Anticipating member needs and conflicts
- **Personalized Interventions**: Targeted support for individual members
- **Automated Moderation**: AI-powered content and behavior management

### Virtual Reality Communities
- **Immersive Experiences**: More natural social interactions
- **Emotional Expression**: Better communication of feelings and intentions
- **Spatial Design**: Physical metaphors for digital spaces
- **Presence and Embodiment**: Stronger sense of shared experience

### Global Community Networks
- **Cross-Cultural Understanding**: Bridging different cultural contexts
- **Language Barriers**: Overcoming communication limitations
- **Time Zone Coordination**: Managing global participation
- **Cultural Integration**: Building inclusive multicultural communities

## Practical Applications

### Community Assessment
1. **Psychological Audit**: Evaluate current community health
2. **Member Surveys**: Gather feedback on experiences and needs
3. **Behavioral Analysis**: Study interaction patterns and dynamics
4. **Intervention Planning**: Develop targeted improvement strategies

### Intervention Implementation
1. **Pilot Programs**: Test new approaches with small groups
2. **Feedback Loops**: Regular assessment and adjustment
3. **Scaling Success**: Expand effective interventions community-wide
4. **Continuous Monitoring**: Ongoing evaluation and improvement

### Leadership Development
1. **Psychological Training**: Understanding group dynamics and behavior
2. **Conflict Resolution Skills**: Managing disputes effectively
3. **Empathy Development**: Building understanding and compassion
4. **Adaptive Leadership**: Responding to changing community needs

## Conclusion

Understanding community psychology is essential for building healthy, sustainable, and thriving network states. By applying psychological principles to community design and management, leaders can create environments that foster positive relationships, encourage participation, and achieve collective goals while supporting individual well-being.
      `,
      completed: false
    },
    {
      id: "growth-strategies",
      title: "Community Growth Strategies",
      description: "Effective methods for attracting and retaining community members",
      duration: "16 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Community Growth Strategies

## Strategic Community Growth

Community growth is both an art and a science, requiring careful planning, consistent execution, and continuous adaptation. Successful growth strategies balance attracting new members with maintaining community quality and culture.

## Growth Mindset and Planning

### Understanding Growth Dynamics
- **Organic vs Inorganic Growth**: Natural expansion vs targeted acquisition
- **Quality vs Quantity**: Member value over sheer numbers
- **Sustainable Pace**: Growth that matches community capacity
- **Long-term Vision**: Multi-year growth planning and goals

### Growth Strategy Framework
- **Market Research**: Understanding target audience and competition
- **Value Proposition**: Clear articulation of community benefits
- **Growth Channels**: Multiple pathways for member acquisition
- **Retention Focus**: Strategies to keep members engaged long-term

## Target Audience Identification

### Persona Development
- **Demographic Profiles**: Age, location, background characteristics
- **Psychographic Analysis**: Values, interests, motivations, behaviors
- **Pain Points**: Problems the community helps solve
- **Success Metrics**: How community membership creates value

### Segmentation Strategies
- **Interest-Based**: Grouping by shared passions and topics
- **Skill-Based**: Connecting people with complementary abilities
- **Value-Based**: Aligning on shared principles and beliefs
- **Geographic**: Local communities within larger networks

## Content Marketing and Attraction

### Value-First Content
- **Educational Content**: Teaching and skill development
- **Entertainment Value**: Fun and engaging community activities
- **Problem Solving**: Addressing real challenges and needs
- **Inspiration**: Motivating and aspirational content

### Content Distribution
- **Owned Channels**: Community websites, blogs, newsletters
- **Earned Media**: PR, word-of-mouth, user-generated content
- **Paid Promotion**: Targeted advertising and sponsorships
- **Partnerships**: Cross-promotion with aligned communities

## Community Launch and Onboarding

### Pre-Launch Preparation
- **MVP Development**: Minimum viable community features
- **Beta Testing**: Small group testing and feedback
- **Brand Development**: Visual identity and messaging
- **Infrastructure Setup**: Technical and operational readiness

### Launch Strategy
- **Soft Launch**: Limited release to build initial momentum
- **Grand Opening**: Major announcement and celebration
- **Follow-up Campaign**: Sustained promotion post-launch
- **Feedback Integration**: Rapid iteration based on user input

## Onboarding Excellence

### First Impression Management
- **Welcome Experience**: Warm, personalized greetings
- **Value Demonstration**: Immediate showcase of community benefits
- **Easy Participation**: Low-barrier entry points and activities
- **Support Systems**: Help and guidance for new members

### Progressive Engagement
- **Level 1**: Basic participation and observation
- **Level 2**: Active contribution and interaction
- **Level 3**: Leadership and community building
- **Level 4**: Multipliers and growth drivers

## Viral Growth Mechanisms

### Network Effects
- **User-Generated Value**: Members creating value for other members
- **Referral Programs**: Incentivized member recruitment
- **Social Proof**: Success stories and testimonials
- **Community Highlights**: Showcasing member achievements

### Shareable Content
- **Memorable Experiences**: Events and activities worth sharing
- **User Stories**: Compelling narratives of community impact
- **Visual Content**: Images and videos that spread easily
- **Challenge Campaigns**: Contests and competitions

## Partnership and Collaboration

### Strategic Alliances
- **Complementary Communities**: Partnering with related groups
- **Cross-Promotion**: Mutual member sharing agreements
- **Joint Events**: Collaborative activities and projects
- **Resource Sharing**: Knowledge and tool exchange

### Influencer and Ambassador Programs
- **Community Leaders**: Identifying and empowering key members
- **Brand Ambassadors**: Official representatives and advocates
- **Content Creators**: Members who produce promotional content
- **Event Organizers**: Community members who run activities

## Paid Growth Strategies

### Targeted Advertising
- **Platform Selection**: Choosing appropriate advertising channels
- **Audience Targeting**: Precise demographic and interest matching
- **Creative Development**: Compelling ad content and messaging
- **Performance Tracking**: ROI measurement and optimization

### Content Syndication
- **Sponsored Content**: Paid placement in relevant publications
- **Influencer Collaborations**: Paid partnerships with content creators
- **Podcast Advertising**: Audio advertising in relevant shows
- **Event Sponsorship**: Supporting and promoting related events

## Organic Growth Optimization

### SEO and Discoverability
- **Content Optimization**: Search-friendly community content
- **Social Media Presence**: Active profiles across relevant platforms
- **Community Listings**: Directory and review site presence
- **Forum Participation**: Engagement in related online discussions

### Word-of-Mouth Marketing
- **Satisfaction Focus**: Ensuring positive member experiences
- **Storytelling**: Creating shareable community narratives
- **Referral Incentives**: Rewards for successful member recruitment
- **Community Pride**: Building emotional attachment and loyalty

## Retention and Engagement

### Member Lifecycle Management
- **Onboarding Phase**: First 30 days of intense engagement
- **Growth Phase**: Skill development and contribution increase
- **Maturity Phase**: Leadership and mentoring roles
- **Advocacy Phase**: Active promotion and member recruitment

### Engagement Tactics
- **Regular Events**: Consistent community activities and gatherings
- **Personalized Communication**: Tailored messages and recommendations
- **Recognition Programs**: Acknowledging member contributions
- **Feedback Loops**: Regular surveys and improvement implementation

## Measuring and Optimizing Growth

### Key Growth Metrics
- **Acquisition Metrics**: New member signup rates and sources
- **Activation Metrics**: New member engagement and participation
- **Retention Metrics**: Member longevity and continued activity
- **Referral Metrics**: Member recruitment and word-of-mouth impact

### Cohort Analysis
- **Behavioral Segmentation**: Grouping members by activity patterns
- **Retention Curves**: Tracking member engagement over time
- **Lifetime Value**: Long-term contribution assessment
- **Churn Analysis**: Understanding member departure reasons

## Scaling Challenges

### Quality Maintenance
- **Signal-to-Noise Ratio**: Managing information quality at scale
- **Community Culture**: Preserving values during rapid growth
- **Personalization Loss**: Maintaining individual attention
- **Coordination Complexity**: Managing larger organizational structures

### Infrastructure Scaling
- **Technical Capacity**: Platform performance under load
- **Team Expansion**: Hiring and training new community managers
- **Process Documentation**: Creating scalable operational procedures
- **Financial Management**: Funding growth while maintaining sustainability

## Growth Sustainability

### Financial Planning
- **Unit Economics**: Cost and revenue per member analysis
- **Growth Investment**: Funding allocation for expansion activities
- **Revenue Diversification**: Multiple income streams for stability
- **Cash Flow Management**: Ensuring growth doesn't strain resources

### Operational Sustainability
- **Process Automation**: Tools and systems for efficient operations
- **Team Development**: Building capable and motivated staff
- **Knowledge Management**: Preserving institutional knowledge
- **Succession Planning**: Preparing for leadership transitions

## Ethical Growth Considerations

### Authentic Marketing
- **Honest Representation**: Accurate depiction of community benefits
- **Expectation Management**: Realistic promises and outcomes
- **Transparency**: Open communication about growth strategies
- **Privacy Protection**: Respecting member data and preferences

### Inclusive Growth
- **Diversity Promotion**: Actively seeking diverse membership
- **Accessibility**: Removing barriers to participation
- **Equity Focus**: Ensuring growth benefits reach all community segments
- **Cultural Sensitivity**: Respecting different backgrounds and perspectives

## Future Growth Trends

### AI-Powered Growth
- **Predictive Analytics**: Forecasting growth opportunities and challenges
- **Personalized Outreach**: AI-driven member acquisition and engagement
- **Content Optimization**: Machine learning for better content performance
- **Automated Moderation**: AI assistance for community management

### Web3 Community Growth
- **Token Incentives**: Cryptocurrency rewards for participation and referrals
- **NFT Communities**: Exclusive membership through digital ownership
- **DAO Governance**: Decentralized decision-making about growth strategies
- **Decentralized Identity**: Privacy-preserving member verification

### Metaverse Communities
- **Virtual Spaces**: 3D community environments and experiences
- **Immersive Events**: Virtual reality community gatherings
- **Spatial Design**: Physical metaphors for digital community spaces
- **Cross-Platform Integration**: Seamless experiences across devices

## Implementation Roadmap

### Phase 1: Foundation (Months 1-3)
- Define target audience and value proposition
- Set up basic community infrastructure
- Create initial content and engagement strategies
- Launch with soft opening and gather feedback

### Phase 2: Acceleration (Months 4-9)
- Implement comprehensive growth strategies
- Scale successful tactics and abandon ineffective ones
- Build team and operational capacity
- Focus on retention and engagement optimization

### Phase 3: Optimization (Months 10-18)
- Refine growth processes based on data and experience
- Expand to new channels and partnerships
- Develop advanced member segmentation and personalization
- Establish sustainable growth systems

### Phase 4: Scale (Months 19+)
- Implement enterprise-level growth operations
- Explore international expansion opportunities
- Develop franchise or licensing models
- Focus on ecosystem building and network effects

## Conclusion

Successful community growth requires a balanced approach combining strategic planning, authentic engagement, and continuous optimization. By focusing on member value, maintaining quality standards, and adapting to changing conditions, communities can achieve sustainable growth that benefits all stakeholders.
      `,
      completed: false
    },
    {
      id: "engagement-tactics",
      title: "Member Engagement & Retention",
      description: "Strategies for keeping members active and committed",
      duration: "13 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Member Engagement & Retention

## The Engagement Lifecycle

Member engagement is the lifeblood of successful communities. Understanding and managing the engagement lifecycle helps communities maintain active, committed members who contribute value and drive growth.

## Engagement Fundamentals

### What is Engagement?
- **Active Participation**: Regular interaction and contribution
- **Emotional Connection**: Feeling of belonging and investment
- **Behavioral Loyalty**: Consistent participation patterns
- **Advocacy**: Promoting the community to others

### Why Engagement Matters
- **Community Health**: Active members create vibrant, dynamic communities
- **Knowledge Sharing**: Engaged members contribute expertise and insights
- **Innovation**: Diverse perspectives drive creative solutions
- **Sustainability**: Committed members support long-term community goals

## Understanding Member Motivation

### Intrinsic Motivation
- **Purpose**: Contributing to meaningful goals and causes
- **Mastery**: Developing skills and achieving personal growth
- **Autonomy**: Freedom to choose participation methods and levels
- **Relatedness**: Building connections and relationships with others

### Extrinsic Motivation
- **Recognition**: Public acknowledgment of contributions and achievements
- **Rewards**: Tangible benefits like access, status, or compensation
- **Social Proof**: Seeing others succeed and participate actively
- **Competition**: Friendly challenges and achievement opportunities

## Engagement Strategy Framework

### Segmentation Approach
- **Power Users**: Highly active, influential members needing advanced challenges
- **Regular Contributors**: Consistent participants needing maintenance engagement
- **Occasional Users**: Sporadic participants needing re-engagement campaigns
- **Lurkers**: Passive observers needing gentle encouragement to participate

### Personalization Tactics
- **Behavioral Triggers**: Actions based on member activity patterns
- **Interest Matching**: Content and opportunities aligned with preferences
- **Progress Tracking**: Visible indicators of growth and achievement
- **Personal Milestones**: Celebrating individual member achievements

## Daily Engagement Tactics

### Content Strategy
- **Value-Driven Posts**: Educational, entertaining, and useful content
- **Interactive Elements**: Polls, questions, and discussion prompts
- **User-Generated Content**: Featuring member contributions and stories
- **Timely Topics**: Current events and trending discussions

### Community Activities
- **Daily Challenges**: Small, achievable tasks and goals
- **Discussion Threads**: Thoughtful questions and debate topics
- **Help Requests**: Opportunities for members to assist each other
- **Celebration Posts**: Recognizing member achievements and milestones

## Weekly Engagement Patterns

### Structured Events
- **Office Hours**: Regular times for member questions and discussions
- **AMAs (Ask Me Anything)**: Expert sessions with community leaders
- **Workshops**: Skill-building and educational sessions
- **Social Mixers**: Casual interaction and relationship building

### Recognition Programs
- **Member Spotlights**: Featuring outstanding community contributors
- **Achievement Badges**: Visual indicators of accomplishments
- **Leaderboards**: Friendly competition and progress tracking
- **Thank You Notes**: Personalized appreciation messages

## Monthly Engagement Cycles

### Thematic Months
- **Learning Months**: Focus on skill development and education
- **Collaboration Months**: Team projects and group activities
- **Celebration Months**: Recognizing community achievements
- **Innovation Months**: New ideas and experimental initiatives

### Member Surveys
- **Satisfaction Surveys**: Regular feedback on community experience
- **Feature Requests**: Gathering input on desired improvements
- **Goal Setting**: Helping members define personal objectives
- **Progress Reviews**: Assessing individual and community growth

## Retention Strategies

### Onboarding Excellence
- **First Week Focus**: Intensive engagement during initial membership
- **Clear Expectations**: Transparent community rules and norms
- **Quick Wins**: Early opportunities for success and recognition
- **Support Systems**: Mentors and guides for new members

### Value Reinforcement
- **Regular Reminders**: Highlighting community benefits and achievements
- **Exclusive Content**: Member-only resources and opportunities
- **Personal Growth**: Opportunities for skill development and advancement
- **Impact Awareness**: Showing how contributions create real change

## Re-engagement Campaigns

### Identifying At-Risk Members
- **Activity Tracking**: Monitoring participation patterns
- **Engagement Scoring**: Quantitative measures of involvement
- **Sentiment Analysis**: Understanding member satisfaction levels
- **Feedback Integration**: Using survey data to identify issues

### Re-engagement Tactics
- **Personal Outreach**: Individual messages from community managers
- **Tailored Content**: Relevant updates based on past interests
- **Exclusive Invitations**: Special access to events or content
- **Progress Reminders**: Showing what they've missed and gained

## Advanced Engagement Techniques

### Gamification Elements
- **Point Systems**: Earning rewards for participation and contributions
- **Level Progression**: Advancement through increased involvement
- **Achievement Unlocking**: New privileges and access levels
- **Friendly Competition**: Leaderboards and challenge systems

### Personalization at Scale
- **AI Recommendations**: Content suggestions based on behavior
- **Dynamic Content**: Adapting to individual preferences and patterns
- **Automated Triggers**: Personalized messages based on actions
- **Segmented Campaigns**: Targeted messaging for different member groups

## Community Health Monitoring

### Engagement Metrics
- **Daily Active Users**: Members interacting each day
- **Session Duration**: Time spent in community activities
- **Contribution Frequency**: Posts, comments, and other activities
- **Response Times**: How quickly members receive help and feedback

### Quality Indicators
- **Content Quality**: Depth and value of member contributions
- **Helpfulness Ratings**: Community assessment of response quality
- **Conflict Resolution**: Effectiveness of dispute management
- **Innovation Levels**: New ideas and creative contributions

## Building Emotional Connections

### Storytelling Techniques
- **Community Narratives**: Shared stories that define community identity
- **Member Journeys**: Highlighting personal growth and transformation
- **Success Stories**: Celebrating community impact and achievements
- **Vision Sharing**: Regular reminders of shared goals and purpose

### Relationship Building
- **One-on-One Interactions**: Personal connections between members
- **Mentorship Programs**: Experienced members guiding newcomers
- **Interest Groups**: Smaller communities within the larger network
- **Social Events**: Casual gatherings and relationship-building activities

## Technology and Tools

### Engagement Platforms
- **Community Software**: Dedicated platforms for member interaction
- **Integration Tools**: Connecting different communication channels
- **Analytics Dashboards**: Real-time engagement monitoring
- **Automation Tools**: Streamlining routine engagement activities

### Communication Channels
- **Primary Platform**: Main community hub for core interactions
- **Social Media**: Supplementary channels for broader reach
- **Mobile Apps**: On-the-go access and notifications
- **Email Newsletters**: Regular updates and content delivery

## Measuring Engagement Success

### Quantitative Metrics
- **Engagement Rate**: Percentage of members actively participating
- **Retention Rate**: Members staying active over time periods
- **Growth Rate**: New member acquisition and community expansion
- **Satisfaction Scores**: Survey responses and feedback ratings

### Qualitative Assessment
- **Member Feedback**: Open-ended responses and suggestions
- **Community Sentiment**: Overall mood and emotional tone
- **Relationship Quality**: Strength of member connections
- **Cultural Health**: Alignment with community values and norms

## Challenges and Solutions

### Engagement Fatigue
- **Content Variety**: Diverse activities to prevent boredom
- **Optional Participation**: Respecting different engagement preferences
- **Break Periods**: Scheduled downtime and reflection opportunities
- **Renewal Cycles**: Regular refresh of engagement approaches

### Scale Challenges
- **Personalization Loss**: Maintaining individual attention at scale
- **Quality Control**: Ensuring engagement remains meaningful
- **Coordination Complexity**: Managing engagement across large communities
- **Resource Allocation**: Balancing engagement efforts with other priorities

## Future of Engagement

### AI-Powered Engagement
- **Predictive Analytics**: Anticipating member needs and interests
- **Automated Personalization**: AI-driven content and interaction tailoring
- **Sentiment Analysis**: Understanding and responding to member emotions
- **Smart Recommendations**: AI-suggested connections and opportunities

### Immersive Experiences
- **Virtual Reality**: 3D community spaces and interactions
- **Augmented Reality**: Enhanced real-world community experiences
- **Mixed Reality Events**: Blending physical and digital engagement
- **Haptic Feedback**: Physical sensations for digital interactions

### Decentralized Engagement
- **Web3 Communities**: Blockchain-based engagement and rewards
- **Token Incentives**: Cryptocurrency rewards for participation
- **DAO Governance**: Member-controlled engagement strategies
- **Decentralized Identity**: Privacy-preserving participation tracking

## Implementation Roadmap

### Phase 1: Assessment (Weeks 1-4)
- Audit current engagement levels and patterns
- Survey members about their experience and preferences
- Identify engagement strengths and improvement areas
- Set baseline metrics for tracking progress

### Phase 2: Foundation (Weeks 5-12)
- Implement core engagement systems and processes
- Launch initial engagement campaigns and activities
- Train community managers on engagement techniques
- Establish regular engagement measurement and reporting

### Phase 3: Optimization (Weeks 13-26)
- Analyze engagement data and identify successful tactics
- Refine engagement strategies based on member feedback
- Scale effective approaches and discontinue ineffective ones
- Develop advanced personalization and automation

### Phase 4: Mastery (Weeks 27+)
- Implement AI and machine learning for engagement optimization
- Create self-sustaining engagement systems
- Focus on long-term member development and growth
- Build engagement into core community culture

## Conclusion

Effective member engagement and retention requires a holistic approach combining technology, psychology, and community management expertise. By understanding member motivations, implementing diverse engagement tactics, and continuously measuring and optimizing strategies, communities can build lasting relationships that drive sustained growth and success.
      `,
      completed: false
    },
    {
      id: "conflict-resolution",
      title: "Conflict Resolution & Moderation",
      description: "Managing disputes and maintaining healthy community dynamics",
      duration: "15 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Conflict Resolution & Moderation

## Understanding Community Conflict

Conflict is a natural part of community dynamics, but how it's managed determines whether it strengthens or weakens the community. Effective conflict resolution builds trust, fosters understanding, and creates opportunities for growth.

## Types of Community Conflict

### Ideological Conflicts
- **Value Differences**: Fundamental disagreements about principles
- **Vision Disputes**: Disagreements about community direction
- **Ethical Debates**: Discussions about right and wrong approaches
- **Priority Conflicts**: Disagreements about resource allocation

### Interpersonal Conflicts
- **Personality Clashes**: Incompatible communication styles
- **Misunderstandings**: Miscommunications and assumptions
- **Trust Issues**: Broken promises or perceived betrayals
- **Competition**: Rivalry over status, resources, or recognition

### Operational Conflicts
- **Process Disputes**: Disagreements about how things should be done
- **Resource Allocation**: Conflicts over funding and priorities
- **Role Confusion**: Uncertainty about responsibilities and authority
- **Technical Disputes**: Arguments about tools and implementation

## Conflict Resolution Framework

### Prevention First
- **Clear Guidelines**: Well-documented community rules and expectations
- **Regular Communication**: Open channels for expressing concerns
- **Early Intervention**: Addressing small issues before they escalate
- **Education**: Teaching conflict resolution skills to members

### Resolution Process
- **Acknowledgment**: Recognizing the conflict exists and matters
- **Understanding**: Listening to all perspectives without judgment
- **Problem Solving**: Working together to find mutually beneficial solutions
- **Agreement**: Reaching consensus or acceptable compromise
- **Follow-up**: Monitoring implementation and adjusting as needed

## Moderation Strategies

### Proactive Moderation
- **Community Guidelines**: Clear rules posted prominently
- **Welcome Messages**: Setting expectations for new members
- **Regular Reminders**: Periodic reinforcement of community standards
- **Positive Reinforcement**: Highlighting good behavior and contributions

### Reactive Moderation
- **Monitoring Systems**: Tools for tracking community activity
- **Escalation Protocols**: Clear procedures for handling violations
- **Warning Systems**: Progressive consequences for rule violations
- **Ban Procedures**: Last resort measures for serious violations

## Communication Techniques

### Active Listening
- **Full Attention**: Giving complete focus to the speaker
- **Non-Verbal Cues**: Appropriate body language and facial expressions
- **Clarification**: Asking questions to ensure understanding
- **Empathy**: Acknowledging feelings and perspectives

### De-escalation Tactics
- **Stay Calm**: Maintaining composure during heated discussions
- **Acknowledge Emotions**: Validating feelings without agreeing with positions
- **Find Common Ground**: Identifying shared interests and goals
- **Offer Solutions**: Focusing on problem-solving rather than blame

## Mediation Process

### Preparation Phase
- **Assess Situation**: Understanding the conflict scope and parties involved
- **Gather Information**: Collecting facts from all perspectives
- **Set Ground Rules**: Establishing mediation guidelines and expectations
- **Ensure Safety**: Confirming all parties feel secure in the process

### Mediation Phase
- **Opening Statements**: Allowing each party to present their perspective
- **Joint Discussion**: Facilitated conversation between conflicting parties
- **Problem Identification**: Helping parties understand core issues
- **Solution Exploration**: Brainstorming and evaluating possible resolutions

### Resolution Phase
- **Agreement Crafting**: Developing mutually acceptable solutions
- **Implementation Planning**: Creating action plans for agreed solutions
- **Follow-up Scheduling**: Planning for monitoring and adjustment
- **Documentation**: Recording agreements and commitments

## Advanced Resolution Techniques

### Transformative Mediation
- **Empowerment Focus**: Helping parties gain confidence in their abilities
- **Recognition**: Acknowledging each party's needs and perspectives
- **Mutual Understanding**: Building empathy and connection
- **Future Orientation**: Focusing on improved relationships

### Facilitative Mediation
- **Neutral Facilitation**: Impartial guidance through the process
- **Process Control**: Managing discussion flow and structure
- **Reality Testing**: Helping parties evaluate options realistically
- **Agreement Building**: Guiding parties toward mutually beneficial solutions

## Technology and Tools

### Moderation Platforms
- **Automated Moderation**: AI-powered content filtering and analysis
- **Reporting Systems**: Easy mechanisms for members to flag issues
- **Moderation Dashboards**: Centralized tools for monitoring and action
- **Audit Trails**: Complete records of moderation actions and decisions

### Communication Tools
- **Private Channels**: Secure spaces for confidential discussions
- **Anonymous Reporting**: Protecting reporters from retaliation
- **Escalation Paths**: Clear procedures for moving issues up the chain
- **Documentation Systems**: Tools for recording and tracking resolutions

## Building Conflict Resolution Culture

### Education and Training
- **Conflict Resolution Workshops**: Teaching skills to community members
- **Role-Playing Exercises**: Practice scenarios for real situations
- **Resource Libraries**: Access to conflict resolution guides and tools
- **Ongoing Learning**: Regular updates on best practices and techniques

### Leadership Modeling
- **Lead by Example**: Demonstrating respectful conflict handling
- **Transparency**: Openly discussing and resolving leadership conflicts
- **Accountability**: Holding leaders to same standards as members
- **Continuous Improvement**: Learning from past conflicts and resolutions

## Measuring Resolution Effectiveness

### Process Metrics
- **Resolution Time**: Speed of conflict resolution from identification to closure
- **Satisfaction Rates**: Participant satisfaction with resolution outcomes
- **Recurrence Rates**: Frequency of similar conflicts reoccurring
- **Escalation Prevention**: Reduction in conflicts requiring formal intervention

### Outcome Metrics
- **Relationship Preservation**: Maintenance of positive relationships post-conflict
- **Community Health**: Overall community morale and engagement levels
- **Learning Outcomes**: Improvements in processes and understanding
- **Prevention Success**: Reduction in future conflict occurrences

## Common Challenges

### Power Imbalances
- **Solution**: Ensuring equal voice and representation in resolution processes
- **Implementation**: Trained mediators and structured procedures
- **Prevention**: Building trust and fairness into community culture

### Emotional Escalation
- **Solution**: De-escalation techniques and time-outs when needed
- **Implementation**: Clear emotional ground rules and moderator intervention
- **Prevention**: Building emotional intelligence and communication skills

### Systemic Issues
- **Solution**: Addressing root causes rather than just symptoms
- **Implementation**: Systemic analysis and comprehensive solutions
- **Prevention**: Regular community health assessments and improvements

## Legal and Ethical Considerations

### Community Standards
- **Fairness**: Equal treatment and opportunity for all members
- **Due Process**: Proper procedures for accusations and resolutions
- **Privacy Protection**: Safeguarding personal information during conflicts
- **Transparency**: Appropriate sharing of resolution information

### Legal Compliance
- **Platform Terms**: Adherence to hosting platform rules and regulations
- **Jurisdictional Issues**: Understanding applicable laws and jurisdictions
- **Documentation**: Proper records for potential legal situations
- **Insurance Coverage**: Protection against liability and disputes

## Future of Conflict Resolution

### AI-Assisted Mediation
- **Sentiment Analysis**: Understanding emotional context in conflicts
- **Automated Facilitation**: AI-guided mediation processes
- **Predictive Intervention**: Early identification of potential conflicts
- **Personalized Approaches**: Tailored resolution strategies for individuals

### Decentralized Resolution
- **Blockchain Arbitration**: Immutable records and smart contract enforcement
- **Decentralized Courts**: Community-controlled dispute resolution
- **Token-Based Incentives**: Rewards for fair and effective mediation
- **Global Arbitration**: Cross-community conflict resolution networks

### Preventive Technologies
- **Early Warning Systems**: Detecting rising tensions before conflicts erupt
- **Behavioral Analytics**: Understanding patterns that lead to disputes
- **Intervention Algorithms**: Automated suggestions for de-escalation
- **Relationship Mapping**: Visualizing community connections and tensions

## Implementation Guide

### Building Resolution Infrastructure
1. **Policy Development**: Create comprehensive conflict resolution policies
2. **Team Training**: Train moderators and leaders in resolution techniques
3. **Tool Implementation**: Set up necessary platforms and communication channels
4. **Process Documentation**: Create clear procedures for different conflict types

### Ongoing Management
1. **Regular Assessment**: Periodic review of resolution effectiveness
2. **Process Improvement**: Updating procedures based on experience and feedback
3. **Community Education**: Ongoing training and awareness programs
4. **Culture Building**: Integrating resolution values into community norms

### Scaling Considerations
1. **Team Expansion**: Training additional moderators as community grows
2. **Technology Investment**: Implementing tools for efficient large-scale resolution
3. **Process Standardization**: Consistent approaches across different community segments
4. **Quality Assurance**: Maintaining resolution quality at scale

## Conclusion

Effective conflict resolution and moderation are essential for maintaining healthy, thriving communities. By implementing structured processes, training community members, and leveraging appropriate technology, communities can transform conflicts into opportunities for growth, understanding, and stronger relationships.
      `,
      completed: false
    },
    {
      id: "scaling-communities",
      title: "Scaling Communities Effectively",
      description: "Managing growth while maintaining community quality and culture",
      duration: "17 min",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      content: `
# Scaling Communities Effectively

## The Scaling Challenge

Scaling communities presents unique challenges that differ from scaling traditional businesses or organizations. The human element, voluntary participation, and cultural preservation make community scaling particularly complex.

## Understanding Scale Dynamics

### Growth Phases
- **Small Community (1-100)**: Intimate, personal relationships
- **Medium Community (100-1,000)**: Structured but still personal
- **Large Community (1,000-10,000)**: Formal systems and processes
- **Massive Community (10,000+)**: Complex organizational structures

### Scaling Paradoxes
- **Personalization vs Scale**: Maintaining individual attention at large sizes
- **Quality vs Quantity**: Preserving standards during rapid growth
- **Innovation vs Stability**: Balancing experimentation with reliability
- **Centralization vs Decentralization**: Managing control in distributed systems

## Organizational Scaling

### Structure Evolution
- **Flat Structure**: Early communities with minimal hierarchy
- **Functional Structure**: Specialized roles and departments
- **Matrix Structure**: Cross-functional teams and projects
- **Network Structure**: Decentralized, self-organizing units

### Leadership Scaling
- **Founder-Led**: Single visionary driving initial growth
- **Team Leadership**: Distributed leadership across functions
- **Community Leadership**: Member-elected and rotated leadership
- **Systems Leadership**: Process and culture-driven leadership

## Process and System Scaling

### Operational Frameworks
- **Standard Operating Procedures**: Documented processes for consistency
- **Automation Tools**: Technology to handle routine tasks
- **Quality Assurance**: Systems to maintain standards at scale
- **Performance Metrics**: Data-driven decision making and improvement

### Communication Scaling
- **Centralized Channels**: Official announcements and updates
- **Segmented Communication**: Targeted messaging for different groups
- **Member-to-Member**: Peer communication and support networks
- **Feedback Systems**: Scalable methods for gathering input

## Technology Scaling

### Platform Architecture
- **Modular Design**: Components that can scale independently
- **Microservices**: Distributed systems for better scalability
- **Cloud Infrastructure**: Elastic resources that grow with demand
- **API-First Design**: Integration capabilities for third-party tools

### Tool Ecosystem
- **Communication Tools**: Platforms that scale from small to large groups
- **Analytics Systems**: Data collection and analysis at scale
- **Moderation Tools**: Automated and human-assisted content management
- **Integration Platforms**: Connecting disparate tools and systems

## Cultural Scaling

### Value Preservation
- **Core Values Documentation**: Written articulation of fundamental principles
- **Cultural Artifacts**: Stories, symbols, and traditions that embody culture
- **Onboarding Programs**: Systematic cultural transmission to new members
- **Cultural Ambassadors**: Members who embody and promote community values

### Quality Maintenance
- **Standards Definition**: Clear criteria for acceptable behavior and contributions
- **Quality Gates**: Checkpoints to ensure standards are maintained
- **Peer Review Systems**: Community members enforcing quality standards
- **Continuous Improvement**: Regular assessment and refinement of standards

## Member Experience Scaling

### Personalization at Scale
- **Segmentation Strategies**: Grouping members for targeted experiences
- **Dynamic Content**: Personalized content delivery based on behavior
- **AI Recommendations**: Algorithmic suggestions for relevant opportunities
- **Self-Service Options**: Tools that allow members to customize their experience

### Support Scaling
- **Tiered Support**: Different levels of assistance based on needs
- **Peer Support Networks**: Member-to-member help and mentoring
- **Self-Help Resources**: Comprehensive knowledge bases and tutorials
- **Automated Support**: Chatbots and AI assistants for routine queries

## Financial Scaling

### Revenue Model Evolution
- **Bootstrapping**: Initial growth without external funding
- **Sustainable Revenue**: Income streams that support operations
- **Investment Rounds**: External funding for accelerated growth
- **Economic Self-Sufficiency**: Full operational funding through community activities

### Resource Allocation
- **Budgeting Systems**: Structured financial planning and tracking
- **Cost Optimization**: Efficient use of resources at scale
- **Investment Prioritization**: Strategic allocation of funds for growth
- **Financial Transparency**: Open reporting of income and expenses

## Risk Management at Scale

### Operational Risks
- **System Failures**: Technical issues that affect large numbers of members
- **Process Breakdowns**: Inefficient procedures that create bottlenecks
- **Team Burnout**: Overworked staff leading to quality degradation
- **Coordination Failures**: Communication breakdowns in complex organizations

### Community Risks
- **Cultural Dilution**: Loss of core values during rapid growth
- **Quality Degradation**: Lower standards as volume increases
- **Fragmentation**: Sub-groups developing conflicting norms
- **Member Disengagement**: Feeling lost in large communities

## Measurement and Analytics

### Key Scaling Metrics
- **Growth Velocity**: Rate of new member acquisition
- **Engagement Retention**: Maintaining activity levels during growth
- **Quality Indicators**: Standards maintenance across different community segments
- **Operational Efficiency**: Resource utilization and process effectiveness

### Advanced Analytics
- **Cohort Analysis**: Tracking member groups over time
- **Network Analysis**: Understanding community structure and connections
- **Sentiment Analysis**: Monitoring community mood and satisfaction
- **Predictive Modeling**: Forecasting growth challenges and opportunities

## Innovation at Scale

### Experimentation Frameworks
- **Innovation Labs**: Dedicated spaces for testing new approaches
- **Pilot Programs**: Small-scale testing of new initiatives
- **A/B Testing**: Data-driven comparison of different approaches
- **Rapid Iteration**: Quick testing and improvement cycles

### Decentralized Innovation
- **Member Innovation**: Encouraging bottom-up idea generation
- **Sub-Community Autonomy**: Allowing smaller groups to experiment
- **Open Innovation**: External collaboration and idea sourcing
- **Innovation Incentives**: Rewards for successful new approaches

## Global Scaling Considerations

### Geographic Expansion
- **Cultural Adaptation**: Adjusting approaches for different regions
- **Language Support**: Multilingual community operations
- **Time Zone Management**: Coordinating across global time differences
- **Local Leadership**: Regional representatives and coordinators

### Regulatory Compliance
- **Legal Frameworks**: Understanding different jurisdictional requirements
- **Data Privacy**: GDPR, CCPA, and other privacy regulations
- **Content Moderation**: Regional content standards and laws
- **Financial Regulations**: Compliance with local financial laws

## Human Capital Scaling

### Team Development
- **Recruitment Strategies**: Finding talent that fits community culture
- **Training Programs**: Systematic skill development for team members
- **Career Progression**: Clear paths for advancement and growth
- **Knowledge Management**: Preserving and sharing institutional knowledge

### Leadership Development
- **Succession Planning**: Preparing for leadership transitions
- **Leadership Training**: Developing management and leadership skills
- **Distributed Leadership**: Building leadership capacity throughout the organization
- **Mentorship Programs**: Experienced leaders guiding emerging talent

## Technology Infrastructure Scaling

### System Architecture
- **Horizontal Scaling**: Adding more servers to handle increased load
- **Microservices Migration**: Breaking monolithic systems into scalable components
- **Database Optimization**: Efficient data storage and retrieval at scale
- **Caching Strategies**: Reducing load on primary systems

### DevOps and Automation
- **CI/CD Pipelines**: Automated testing and deployment
- **Infrastructure as Code**: Programmable infrastructure management
- **Monitoring and Alerting**: Proactive system health management
- **Disaster Recovery**: Business continuity and data backup systems

## Community Health at Scale

### Engagement Maintenance
- **Personalization Engines**: Tailored experiences for individual members
- **Community Segmentation**: Managing different member groups effectively
- **Event Scaling**: Large-scale community activities and gatherings
- **Recognition Systems**: Acknowledging contributions in large communities

### Culture Preservation
- **Cultural Touchpoints**: Regular reinforcement of community values
- **Storytelling**: Sharing narratives that embody community identity
- **Ritual Creation**: Regular activities that strengthen community bonds
- **Value Reinforcement**: Ongoing communication of core principles

## Future Scaling Paradigms

### AI-Augmented Scaling
- **Automated Moderation**: AI-powered community management
- **Predictive Analytics**: Forecasting growth and engagement patterns
- **Personalized Experiences**: AI-driven member experience customization
- **Intelligent Automation**: AI handling routine scaling challenges

### Web3 Scaling
- **Decentralized Governance**: Blockchain-based organizational structures
- **Token Incentives**: Cryptocurrency rewards for participation at scale
- **Decentralized Identity**: Privacy-preserving member management
- **DAO Operations**: Decentralized autonomous organization frameworks

### Metaverse Communities
- **Virtual Worlds**: 3D community spaces that scale naturally
- **Immersive Experiences**: More engaging large-scale interactions
- **Spatial Organization**: Physical metaphors for digital community management
- **Cross-Platform Integration**: Seamless experiences across different virtual spaces

## Implementation Strategy

### Phase 1: Foundation (Months 1-3)
- Assess current community size and operational capacity
- Document core processes and create standard operating procedures
- Implement basic analytics and monitoring systems
- Establish quality standards and assessment frameworks

### Phase 2: Acceleration (Months 4-9)
- Expand team and distribute responsibilities
- Implement automation tools for routine tasks
- Develop modular systems that can scale independently
- Create feedback loops for continuous improvement

### Phase 3: Optimization (Months 10-18)
- Refine processes based on data and experience
- Implement advanced analytics and predictive modeling
- Develop comprehensive training programs for new team members
- Establish robust risk management and contingency systems

### Phase 4: Mastery (Months 19+)
- Achieve operational excellence at scale
- Implement AI and machine learning for optimization
- Develop self-sustaining systems with minimal oversight
- Focus on innovation and pushing scaling boundaries

## Conclusion

Scaling communities effectively requires a holistic approach that balances growth with quality maintenance, technological adaptation, and cultural preservation. By implementing structured processes, leveraging appropriate technology, and maintaining focus on community health, organizations can achieve sustainable scaling that benefits all stakeholders while preserving the essence of what makes the community valuable.
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
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/learn" className="text-white/80 hover:text-white">
              ← Back to Learning Center
            </Link>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <Badge className="mb-2 bg-white/20 text-white border-white/30">Community Building</Badge>
              <h1 className="text-4xl font-bold mb-2">Community Building & Management</h1>
              <p className="text-xl text-white/90 mb-4">
                Master the art and science of building, growing, and managing successful communities
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
