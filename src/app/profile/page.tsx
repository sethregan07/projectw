"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { getCurrentUser, updateProfile, changePassword, isAuthenticated } from "@/lib/authService"

interface UserProfile {
  id: string
  name: string
  email: string
  role: string
}

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(false)

  // Profile form state
  const [profileForm, setProfileForm] = useState({
    name: "",
    email: "",
  })

  // Password form state
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated()) {
        router.push('/login')
        return
      }

      try {
        const currentUser = getCurrentUser()
        if (!currentUser) {
          router.push('/login')
          return
        }

        setUser(currentUser)
        setProfileForm({
          name: currentUser.name,
          email: currentUser.email,
        })
      } catch (error) {
        console.error('Error getting user profile:', error)
        router.push('/login')
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router])

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) return

    setIsUpdating(true)
    setErrors({})

    try {
      // Validate inputs
      const newErrors: Record<string, string> = {}

      if (!profileForm.name.trim()) {
        newErrors.name = "Name is required"
      }

      if (!profileForm.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profileForm.email)) {
        newErrors.email = "Please enter a valid email address"
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        setIsUpdating(false)
        return
      }

      // Check if profile data changed
      const hasProfileChanged =
        profileForm.name !== user.name ||
        profileForm.email !== user.email

      if (!hasProfileChanged) {
        setIsUpdating(false)
        return
      }

      // Update profile
      const updatedUser = await updateProfile({
        name: profileForm.name.trim(),
        email: profileForm.email.trim(),
      })

      setUser(updatedUser)
      // Update localStorage via the auth service
      // The auth service will handle token updates if needed

      alert('Profile updated successfully!')

    } catch (error: any) {
      console.error('Profile update error:', error)
      setErrors({
        general: error.message || 'Failed to update profile'
      })
    } finally {
      setIsUpdating(false)
    }
  }

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsUpdating(true)
    setErrors({})

    try {
      // Validate password form
      const newErrors: Record<string, string> = {}

      if (!passwordForm.currentPassword) {
        newErrors.currentPassword = "Current password is required"
      }

      if (!passwordForm.newPassword) {
        newErrors.newPassword = "New password is required"
      } else if (passwordForm.newPassword.length < 6) {
        newErrors.newPassword = "New password must be at least 6 characters"
      }

      if (!passwordForm.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your new password"
      } else if (passwordForm.newPassword !== passwordForm.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match"
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        setIsUpdating(false)
        return
      }

      // Change password
      await changePassword(passwordForm.currentPassword, passwordForm.newPassword)

      // Clear password form
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })

      alert('Password changed successfully! You will need to log in again with your new password.')
      router.push('/')

    } catch (error: any) {
      console.error('Password change error:', error)
      setErrors({
        passwordGeneral: error.message || 'Failed to change password'
      })
    } finally {
      setIsUpdating(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Please log in to view your profile</p>
          <Link href="/login">
            <Button>Go to Login</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                ← Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Profile Settings</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* Profile Information */}
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Update your personal information and account details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your full name"
                  disabled={isUpdating}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={profileForm.email}
                  onChange={(e) => setProfileForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter your email"
                  disabled={isUpdating}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div className="flex gap-2">
                <Button type="submit" disabled={isUpdating}>
                  {isUpdating ? 'Updating...' : 'Update Profile'}
                </Button>
              </div>

              {errors.general && (
                <p className="text-sm text-destructive">{errors.general}</p>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Change Password */}
        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>
              Update your password to keep your account secure.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium mb-1">
                  Current Password
                </label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) => setPasswordForm(prev => ({ ...prev, currentPassword: e.target.value }))}
                  placeholder="Enter current password"
                  disabled={isUpdating}
                />
                {errors.currentPassword && (
                  <p className="text-sm text-destructive mt-1">{errors.currentPassword}</p>
                )}
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium mb-1">
                  New Password
                </label>
                <Input
                  id="newPassword"
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm(prev => ({ ...prev, newPassword: e.target.value }))}
                  placeholder="Enter new password"
                  disabled={isUpdating}
                />
                {errors.newPassword && (
                  <p className="text-sm text-destructive mt-1">{errors.newPassword}</p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                  Confirm New Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  placeholder="Confirm new password"
                  disabled={isUpdating}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              <div className="flex gap-2">
                <Button type="submit" disabled={isUpdating}>
                  {isUpdating ? 'Changing...' : 'Change Password'}
                </Button>
              </div>

              {errors.passwordGeneral && (
                <p className="text-sm text-destructive">{errors.passwordGeneral}</p>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Account Information */}
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
            <CardDescription>
              View your account details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Role:</span>
              <span className="text-sm capitalize">{user.role}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
