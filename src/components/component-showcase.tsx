"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DialogRoot, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Settings, Star, Heart, Zap, Shield, Code } from "lucide-react"

export default function ComponentShowcase() {

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Shiftcivic
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the full power of Ark UI primitives with Park UI styling. 
          All components are fully accessible, customizable, and production-ready.
        </p>
      </div>

      {/* Cards Section */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-foreground">Cards & Layout</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <CardTitle>Performance</CardTitle>
              </div>
              <CardDescription>
                Lightning-fast components built for modern web applications.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="secondary">React 19</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <p className="text-sm text-muted-foreground">
                  Optimized for performance with minimal bundle size.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>Accessibility</CardTitle>
              </div>
              <CardDescription>
                WCAG compliant components with full keyboard navigation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge>WCAG 2.1</Badge>
                <Badge variant="secondary">Screen Reader</Badge>
                <p className="text-sm text-muted-foreground">
                  Built with accessibility as a first-class citizen.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-primary" />
                <CardTitle>Developer Experience</CardTitle>
              </div>
              <CardDescription>
                Intuitive APIs with excellent TypeScript support.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Badge variant="destructive">TypeScript</Badge>
                <Badge variant="outline">IntelliSense</Badge>
                <p className="text-sm text-muted-foreground">
                  Great DX with comprehensive type definitions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Components */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-foreground">Form Components</h3>
        <Card>
          <CardHeader>
            <CardTitle>User Registration</CardTitle>
            <CardDescription>
              Example form using Park UI input and select components.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">First Name</label>
                <Input placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Last Name</label>
                <Input placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Favorite Framework</label>
              <div className="relative">
                <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select a framework</option>
                  <option value="react">React</option>
                  <option value="vue">Vue</option>
                  <option value="svelte">Svelte</option>
                  <option value="solid">Solid</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Components */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-foreground">Interactive Components</h3>
        
        {/* Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs Component</CardTitle>
            <CardDescription>
              Navigate between different content sections.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TabsRoot defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <h4 className="text-lg font-semibold">Overview</h4>
                <p className="text-muted-foreground">
                  Park UI provides a comprehensive set of components built on top of Ark UI primitives. 
                  Each component is designed with accessibility, performance, and developer experience in mind.
                </p>
                <div className="flex space-x-2">
                  <Badge>Accessible</Badge>
                  <Badge variant="secondary">Performant</Badge>
                  <Badge variant="outline">Customizable</Badge>
                </div>
              </TabsContent>
              <TabsContent value="features" className="space-y-4">
                <h4 className="text-lg font-semibold">Features</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Full TypeScript support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-primary" />
                    <span>Accessible by default</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span>Optimized for performance</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="pricing" className="space-y-4">
                <h4 className="text-lg font-semibold">Pricing</h4>
                <p className="text-muted-foreground">
                  Park UI is completely free and open source. Use it in your personal and commercial projects.
                </p>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  Free Forever
                </Badge>
              </TabsContent>
            </TabsRoot>
          </CardContent>
        </Card>

        {/* Dialog */}
        <Card>
          <CardHeader>
            <CardTitle>Dialog Component</CardTitle>
            <CardDescription>
              Modal dialogs for important user interactions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DialogRoot>
              <DialogTrigger asChild>
                <Button>Open Settings Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </DialogTitle>
                  <DialogDescription>
                    Configure your application preferences here.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Display Name</label>
                    <Input placeholder="Enter your display name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Theme</label>
                    <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Select theme</option>
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="system">System</option>
                    </select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </DialogRoot>
          </CardContent>
        </Card>

        {/* Accordion */}
        <Card>
          <CardHeader>
            <CardTitle>Accordion Component</CardTitle>
            <CardDescription>
              Collapsible content sections for organizing information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AccordionRoot multiple>
                <AccordionItem value="getting-started">
                <AccordionTrigger>Getting Started</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Install Park UI components using npm or yarn. All components are built on top of 
                    Ark UI primitives and styled with Tailwind CSS for maximum customization.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="customization">
                <AccordionTrigger>Customization</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Every component can be customized using CSS variables and Tailwind classes. 
                    The design system is built to be flexible while maintaining consistency.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="accessibility">
                <AccordionTrigger>Accessibility</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    All components follow WCAG guidelines and include proper ARIA attributes, 
                    keyboard navigation, and screen reader support out of the box.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </AccordionRoot>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
