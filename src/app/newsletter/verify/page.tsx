"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { verifyNewsletterSubscription } from "@/lib/newsletter"

export default function NewsletterVerifyPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("")

  const token = searchParams.get("token")

  useEffect(() => {
    if (!token) {
      setStatus("error")
      setMessage("Invalid verification link. No token provided.")
      return
    }

    const verifySubscription = async () => {
      try {
        await verifyNewsletterSubscription(token)
        setStatus("success")
        setMessage("Your email has been successfully verified! Welcome to our newsletter.")

        // Redirect to welcome page after a short delay
        setTimeout(() => {
          router.push("/newsletter/welcome")
        }, 3000)
      } catch (error) {
        setStatus("error")
        setMessage(error instanceof Error ? error.message : "Failed to verify your subscription. Please try again.")
      }
    }

    verifySubscription()
  }, [token, router])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            {status === "loading" && "Verifying Your Subscription"}
            {status === "success" && "Email Verified! 🎉"}
            {status === "error" && "Verification Failed"}
          </CardTitle>
          <CardDescription>
            {status === "loading" && "Please wait while we verify your email address..."}
            {status === "success" && "Thank you for subscribing to our newsletter"}
            {status === "error" && "There was a problem verifying your subscription"}
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center space-y-4">
          {status === "loading" && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}

          {status === "success" && (
            <div className="space-y-4">
              <div className="text-green-600 text-4xl">✓</div>
              <p className="text-sm text-muted-foreground">
                {message}
              </p>
              <p className="text-xs text-muted-foreground">
                Redirecting to welcome page...
              </p>
            </div>
          )}

          {status === "error" && (
            <div className="space-y-4">
              <div className="text-red-600 text-4xl">✗</div>
              <p className="text-sm text-muted-foreground">
                {message}
              </p>
              <div className="flex gap-2 justify-center">
                <Button variant="outline" onClick={() => router.push("/")}>
                  Go Home
                </Button>
                <Link href="/#newsletter">
                  <Button>
                    Try Again
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
