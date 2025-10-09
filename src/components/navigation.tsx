"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/ui/menu"
import { cn } from "@/lib/utils"
import { useState, useEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import { getCurrentUser, logout, isAuthenticated } from "@/lib/authService"

const Navigation = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isDark, setIsDark] = useState(false)
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const [currentUser, setCurrentUser] = useState<{id: string; name: string; email: string; role: string} | null>(null)
  const learnLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    // Check if dark mode is enabled on mount
    const isDarkMode = document.documentElement.classList.contains('dark')
    console.log('Navigation: isDarkMode detected:', isDarkMode)
    setIsDark(isDarkMode)
  }, [])

  useEffect(() => {
    return () => {
      if (hoverTimeout) clearTimeout(hoverTimeout)
    }
  }, [hoverTimeout])

  useEffect(() => {
    if (learnLinkRef.current) {
      const computedStyle = window.getComputedStyle(learnLinkRef.current)
      console.log('Navigation: Learn link color:', computedStyle.color, 'isDark:', isDark)
    }
  }, [isDark])

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = () => {
      const user = getCurrentUser()
      setCurrentUser(user)
    }
    checkAuth()

    // Listen for storage changes (login/logout from other tabs)
    const handleStorageChange = () => checkAuth()
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsFeaturesOpen(false)
  }, [pathname])

  const handleLogout = () => {
    logout()
    setCurrentUser(null)
    router.push('/')
  }

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    const newIsDark = !isDark
    console.log('Navigation: toggleDarkMode called, new isDark:', newIsDark)
    setIsDark(newIsDark)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-8 flex h-14 items-center">
        {/* Logo */}
        <div className="mr-8 flex">
          <Link className="flex items-center space-x-2" href="/">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
              S
            </div>
            <span className="font-bold text-lg">Shiftcivic</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto mr-4 p-2 rounded-md hover:bg-muted transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm flex-1">
          <div
            className="relative"
            onMouseEnter={() => {
              if (hoverTimeout) {
                clearTimeout(hoverTimeout)
                setHoverTimeout(null)
              }
              setIsFeaturesOpen(true)
            }}
            onMouseLeave={() => {
              if (hoverTimeout) clearTimeout(hoverTimeout)
              const timeout = setTimeout(() => {
                setIsFeaturesOpen(false)
                setHoverTimeout(null)
              }, 150)
              setHoverTimeout(timeout)
            }}
          >
            <button className="transition-colors hover:text-foreground/80 text-foreground font-medium flex items-center gap-1">
              Features
              <svg
                className={cn("w-4 h-4 transition-transform", isFeaturesOpen ? "rotate-180" : "")}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isFeaturesOpen && (
              <div className="absolute top-full left-0 mt-3 w-[32rem] bg-background border border-border rounded-xl shadow-2xl py-6 z-50">
                <div className="grid grid-cols-2 gap-6 px-6">
                  <Link
                    href="/features/governance"
                    className="group block p-4 rounded-lg hover:bg-muted transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-foreground">Governance</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Create and vote on proposals</p>
                  </Link>

                  <Link
                    href="/features/voting"
                    className="group block p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-md group-hover:bg-green-100 dark:group-hover:bg-green-900/30 transition-colors">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-foreground">Voting Systems</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Advanced voting mechanisms</p>
                  </Link>

                  <Link
                    href="/features/treasury"
                    className="group block p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-md group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 transition-colors">
                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-foreground">Treasury</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Fund management & transparency</p>
                  </Link>

                  <Link
                    href="/features/community"
                    className="group block p-4 rounded-lg hover:bg-muted transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-md group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                        <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-foreground">Community</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Discussion & collaboration tools</p>
                  </Link>

                  <Link
                    href="/features/citizenship"
                    className="group block p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-md group-hover:bg-red-100 dark:group-hover:bg-red-900/30 transition-colors">
                        <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-foreground">Citizenship</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Digital identity & rights</p>
                  </Link>

                  <Link
                    href="/features/economy"
                    className="group block p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-md group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/30 transition-colors">
                        <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-foreground">Economy</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Token economics & finance</p>
                  </Link>

                  <Link
                    href="/features/security"
                    className="group block p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gray-50 dark:bg-gray-900/20 rounded-md group-hover:bg-gray-100 dark:group-hover:bg-gray-900/30 transition-colors">
                        <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-foreground">Security</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Digital defense & protection</p>
                  </Link>

                  <Link
                    href="/features/education"
                    className="group block p-3 rounded-md hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-md group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/30 transition-colors">
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-foreground">Education</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">Learning resources & knowledge</p>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            ref={learnLinkRef}
            href="/learn"
            className="transition-colors hover:text-foreground/80 text-foreground font-medium"
          >
            Learn
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground/80 text-foreground font-medium"
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className="transition-colors hover:text-foreground/80 text-foreground font-medium"
          >
            Dashboard
          </Link>
        </nav>

        {/* Right side buttons */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDarkMode}
            className="w-9 h-9 p-0"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </Button>

          {currentUser ? (
            <Menu.Root>
              <Menu.Trigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-medium">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  {currentUser.name}
                </Button>
              </Menu.Trigger>
              <Menu.Content>
                <Menu.Item asChild>
                  <Link href="/profile" className="cursor-pointer">
                    Profile
                  </Link>
                </Menu.Item>
                <Menu.Separator />
                <Menu.Item onClick={handleLogout} className="cursor-pointer">
                  Log out
                </Menu.Item>
              </Menu.Content>
            </Menu.Root>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay */}
    {isMobileMenuOpen && (
      <>
        {/* Backdrop */}
        <div
          className="md:hidden fixed inset-0 top-14 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        {/* Menu */}
        <div className="md:hidden fixed inset-0 top-14 bg-background/98 backdrop-blur-md border-t border-border z-40">
          <div className="flex flex-col h-full max-h-[calc(100vh-3.5rem)] overflow-y-auto">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col px-6 py-6 space-y-4">
              <div className="space-y-2">
                <button
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors text-left font-medium"
                  onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                >
                  Features
                  <svg
                    className={cn("w-4 h-4 transition-transform", isFeaturesOpen ? "rotate-180" : "")}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isFeaturesOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l border-border pl-4 bg-background">
                    <Link
                      href="/features/governance"
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Governance</div>
                          <div className="text-xs text-muted-foreground">Create and vote on proposals</div>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/voting"
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                          <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Voting Systems</div>
                          <div className="text-xs text-muted-foreground">Advanced voting mechanisms</div>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/treasury"
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-md">
                          <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Treasury</div>
                          <div className="text-xs text-muted-foreground">Fund management & transparency</div>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/community"
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-md">
                          <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Community</div>
                          <div className="text-xs text-muted-foreground">Discussion & collaboration tools</div>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/citizenship"
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-md">
                          <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Citizenship</div>
                          <div className="text-xs text-muted-foreground">Digital identity & rights</div>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/economy"
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                          <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Economy</div>
                          <div className="text-xs text-muted-foreground">Token economics & finance</div>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/security"
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-50 dark:bg-gray-900/20 rounded-md">
                          <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Security</div>
                          <div className="text-xs text-muted-foreground">Digital defense & protection</div>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/education"
                      className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-md">
                          <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Education</div>
                          <div className="text-xs text-muted-foreground">Learning resources & knowledge</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/learn"
                className="block p-3 rounded-lg hover:bg-muted transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/about"
                className="block p-3 rounded-lg hover:bg-muted transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/dashboard"
                className="block p-3 rounded-lg hover:bg-muted transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </nav>

            {/* Mobile Action Buttons */}
            <div className="mt-auto p-6 border-t border-border">
              <div className="flex flex-col space-y-3">
                <Button
                  variant="ghost"
                  onClick={() => {
                    toggleDarkMode()
                    setIsMobileMenuOpen(false)
                  }}
                  className="justify-start"
                >
                  {isDark ? (
                    <>
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      Light Mode
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                      Dark Mode
                    </>
                  )}
                </Button>
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full">
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </>
)
}

export default Navigation
