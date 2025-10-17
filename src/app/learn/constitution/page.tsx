"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function ConstitutionPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<Record<number, boolean>>({})
  const [showResults, setShowResults] = useState(false)

  const constitutionQuestions = [
    {
      question: "What is the primary purpose of our network state constitution?",
      options: [
        "To establish a legal framework for governing a sovereign digital nation",
        "To create a non-binding set of community guidelines",
        "To define IT infrastructure policies",
        "To outline marketing strategies"
      ],
      correct: 0,
      explanation: "Our constitution establishes the legal and philosophical framework for self-sovereign governance, combining digital technology with democratic principles."
    },
    {
      question: "How are major constitutional amendments approved?",
      options: [
        "By simple majority vote of active participants",
        "By institutional authorities without community input",
        "By a supermajority (75%) approval through blockchain governance",
        "By direct executive decision"
      ],
      correct: 2,
      explanation: "Major constitutional changes require supermajority approval (75%) to ensure broad consensus and protect fundamental rights."
    },
    {
      question: "What protects individual privacy rights in our constitution?",
      options: [
        "No specific protections - privacy is not a priority",
        "Mandatory data collection for security",
        "Zero-knowledge proof mechanisms and anonymous participation",
        "Limited privacy controls"
      ],
      correct: 2,
      explanation: "Our constitution mandates advanced cryptographic protections including zero-knowledge proofs, ensuring privacy without sacrificing security."
    },
    {
      question: "How does our constitution address economic inequality?",
      options: [
        "Through redistributive taxation and wealth limits",
        "By requiring minimum property ownership",
        "Through meritocratic reputation systems and low-barrier participation",
        "By removing all economic incentives"
      ],
      correct: 2,
      explanation: "We address inequality through democratic participation barriers (no entry costs) combined with reputation-based meritocracy rather than wealth-based systems."
    },
    {
      question: "What is our constitution's stance on free speech and expression?",
      options: [
        "Unlimited free speech with no moderation",
        "Centralized content control and censorship",
        "Protected free speech with decentralized content governance",
        "Market-driven speech controls"
      ],
      correct: 2,
      explanation: "Our constitution protects free speech while implementing decentralized governance mechanisms to combat disinformation and maintain community standards."
    },
    {
      question: "How does our constitution ensure judicial independence?",
      options: [
        "No independent judiciary - all decisions by majority vote",
        "Executive-appointed judges with lifetime terms",
        "Decentralized arbitration with appeal mechanisms",
        "Traditional court systems with appointed judges"
      ],
      correct: 2,
      explanation: "Judicial decisions use decentralized arbitration systems with multiple appeal levels to ensure fairness and prevent corruption."
    },
    {
      question: "What principle governs our treaty relationships with other entities?",
      options: [
        "Aggressive expansion and annexation policies",
        "Isolationism with no external engagement",
        "Sovereign diplomacy based on mutual benefit and consent",
        "Obligation to assist all other network states unconditionally"
      ],
      correct: 2,
      explanation: "Our constitution establishes principles of sovereign diplomacy, requiring mutual consent and benefit while protecting our own sovereignty."
    },
    {
      question: "How does our constitution protect environmental sustainability?",
      options: [
        "No environmental protections - growth comes first",
        "Environmental regulation through administrative bodies",
        "Sustainable development principles with decentralized monitoring",
        "Environmental conservation as secondary priority"
      ],
      correct: 2,
      explanation: "Environmental protection is integrated into all governance decisions with decentralized monitoring and community oversight mechanisms."
    }
  ]

  const handleAnswer = (selectedAnswer: number) => {
    const isCorrect = selectedAnswer === constitutionQuestions[currentQuestion].correct
    if (isCorrect) {
      setScore(score + 1)
    }
    setAnswers({ ...answers, [currentQuestion]: isCorrect })

    if (currentQuestion < constitutionQuestions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 1000)
    } else {
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setAnswers({})
    setShowResults(false)
  }

  const totalQuestions = constitutionQuestions.length
  const progress = ((currentQuestion + 1) / totalQuestions) * 100
  const passingScore = Math.ceil(totalQuestions * 0.75) // 75% passing rate
  const hasPassed = score >= passingScore

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/learn" className="text-muted-foreground hover:text-foreground">
              Learn
            </Link>
            <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-foreground font-medium">Network State Constitution</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Digital Constitution Certification</h1>
          <p className="text-muted-foreground">
            Master our constitutional framework to become an informed digital citizen
          </p>
        </div>

        {/* Constitution Introduction */}
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Our Constitutional Principles
              </CardTitle>
              <CardDescription>
                The foundation of our digital sovereignty and democratic governance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                      🏛️
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Sovereign Governance</p>
                      <p className="text-muted-foreground">Self-determined digital nationhood</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                      🔒
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Privacy by Design</p>
                      <p className="text-muted-foreground">Zero-knowledge cryptographic protection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                      🌐
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Global Citizenship</p>
                      <p className="text-muted-foreground">Universal human rights regardless of geography</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center flex-shrink-0">
                      ⚖️
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Algorithmic Justice</p>
                      <p className="text-muted-foreground">Fair technologies with human oversight</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0">
                      🌱
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Sustainable Future</p>
                      <p className="text-muted-foreground">Environmental stewardship integrated</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 dark:bg-cyan-900/20 flex items-center justify-center flex-shrink-0">
                      🔄
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Continuous Evolution</p>
                      <p className="text-muted-foreground">Living constitution adapting to progress</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-muted rounded-md">
                <p className="text-sm text-foreground">
                  <strong>Ready to become a Constitutional Citizen?</strong> Take our certification quiz to demonstrate your understanding
                  of our constitutional framework and earn your digital citizenship credentials.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quiz Section */}
        {!showResults ? (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Constitutional Certification Quiz</CardTitle>
                  <CardDescription>
                    Question {currentQuestion + 1} of {totalQuestions}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Score: {score}/{currentQuestion}</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {constitutionQuestions[currentQuestion].question}
              </h3>

              <div className="space-y-2">
                {constitutionQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start h-auto py-4 px-4"
                    onClick={() => handleAnswer(index)}
                    disabled={answers[currentQuestion] !== undefined}
                  >
                    <span className="flex items-center gap-3">
                      {answers[currentQuestion] !== undefined && (
                        <span className={index === constitutionQuestions[currentQuestion].correct ? "text-green-600" : "text-red-600"}>
                          {index === constitutionQuestions[currentQuestion].correct ? "✅" :
                           answers[currentQuestion] === true ? "❌" : "○"}
                        </span>
                      )}
                      {option}
                    </span>
                  </Button>
                ))}
              </div>

              {answers[currentQuestion] !== undefined && (
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md mt-4">
                  <p className="text-sm text-blue-900 dark:text-blue-100">
                    <strong>Explanation:</strong> {constitutionQuestions[currentQuestion].explanation}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          /* Results Section */
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  {hasPassed ? "🎊 Constitutional Certification Complete!" : "📚 Learning Continues"}
                </CardTitle>
                <CardDescription className="text-center">
                  Your Score: {score}/{totalQuestions} ({Math.round((score / totalQuestions) * 100)}%)
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                {hasPassed ? (
                  <>
                    <div className="text-6xl">🏛️</div>
                    <p className="text-green-600 dark:text-green-400 font-semibold">
                      Congratulations! You are now a Certified Constitutional Citizen!
                    </p>
                    <p className="text-muted-foreground">
                      You have demonstrated a strong understanding of our digital constitution and the principles that guide our network state.
                    </p>
                    <div className="flex items-center justify-center gap-4">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-4 py-2">
                        🏛️ Constitutional Citizen
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 px-4 py-2">
                        📜 Legal Understanding
                      </Badge>
                    </div>
                    <Button className="mt-4" onClick={resetQuiz}>
                      Retake Quiz
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="text-6xl">📚</div>
                    <p className="text-orange-600 dark:text-orange-400 font-semibold">
                      Keep Learning! You're getting there.
                    </p>
                    <p className="text-muted-foreground">
                      You scored {score}/{totalQuestions}. Passing requires {passingScore} correct answers (75%).
                      Review the explanations and try again to become a Constitutional Citizen.
                    </p>
                    <Button className="mt-4" onClick={resetQuiz}>
                      Try Again
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Constitution Sections */}
            <Card>
              <CardHeader>
                <CardTitle>Constitutional Provisions</CardTitle>
                <CardDescription>
                  Key sections of our digital constitution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {[
                    { title: "Sovereign Governance", desc: "Principles of self-determination and digital nationhood" },
                    { title: "Individual Rights", desc: "Privacy, free speech, and personal liberties in the digital age" },
                    { title: "Democratic Processes", desc: "Voting, representation, and decision-making protocols" },
                    { title: "Economic Framework", desc: "Wealth distribution, meritocracy, and economic rights" },
                    { title: "Technological Ethics", desc: "AI governance, algorithmic fairness, and technical standards" },
                    { title: "Global Relations", desc: "Diplomacy, treaty-making, and international cooperation" }
                  ].map((section, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border border-border rounded-md">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{section.title}</h4>
                        <p className="text-sm text-muted-foreground">{section.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Continue Your Education</CardTitle>
                <CardDescription>
                  Build on your constitutional knowledge
                </CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <Link href="/learn/citizenship">
                  <Card className="hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                          🏛️
                        </div>
                        <h3 className="font-semibold text-foreground">Citizenship Training</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Learn about network state citizenship</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/learn/governance">
                  <Card className="hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                          🗳️
                        </div>
                        <h3 className="font-semibold text-foreground">Advanced Governance</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Deep dive into democratic mechanisms</p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/dashboard">
                  <Card className="hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-md">
                          📊
                        </div>
                        <h3 className="font-semibold text-foreground">Governance Dashboard</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">Apply your knowledge in practice</p>
                    </CardContent>
                  </Card>
                </Link>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
