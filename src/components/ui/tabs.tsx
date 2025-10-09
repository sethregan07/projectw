"use client"

import * as React from "react"
import { TabsRoot, TabList, TabTrigger, TabContent, TabIndicator } from "@ark-ui/react/tabs"
import { cn } from "@/lib/utils"

const Tabs = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof TabsRoot> & { className?: string }
>(({ className, ...props }, ref) => (
  <TabsRoot
    ref={ref}
    className={cn("w-full", className)}
    {...props}
  />
))
Tabs.displayName = "TabsRoot"

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof TabList> & { className?: string }
>(({ className, ...props }, ref) => (
  <TabList
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = "TabsList"

const TabsTriggerComponent = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof TabTrigger> & { className?: string }
>(({ className, ...props }, ref) => (
  <TabTrigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTriggerComponent.displayName = "TabsTrigger"

const TabsContentComponent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof TabContent> & { className?: string }
>(({ className, ...props }, ref) => (
  <TabContent
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContentComponent.displayName = "TabsContent"

const TabsIndicatorComponent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof TabIndicator> & { className?: string }
>(({ className, ...props }, ref) => (
  <TabIndicator
    ref={ref}
    className={cn("absolute transition-all duration-200", className)}
    {...props}
  />
))
TabsIndicatorComponent.displayName = "TabsIndicator"

export { Tabs as TabsRoot, TabsList, TabsTriggerComponent as TabsTrigger, TabsContentComponent as TabsContent, TabsIndicatorComponent as TabsIndicator }
