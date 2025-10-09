"use client"

import * as React from "react"
import { AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent } from "@ark-ui/react/accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof AccordionRoot> & { className?: string }
>(({ className, ...props }, ref) => (
  <AccordionRoot
    ref={ref}
    className={cn("w-full", className)}
    {...props}
  />
))
Accordion.displayName = "AccordionRoot"

const AccordionItemComponent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof AccordionItem> & { className?: string }
>(({ className, ...props }, ref) => (
  <AccordionItem
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItemComponent.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof AccordionItemTrigger> & { className?: string }
>(({ className, children, ...props }, ref) => (
  <AccordionItemTrigger
    ref={ref}
    className={cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
  </AccordionItemTrigger>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof AccordionItemContent> & { className?: string }
>(({ className, children, ...props }, ref) => (
  <AccordionItemContent
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionItemContent>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion as AccordionRoot, AccordionItemComponent as AccordionItem, AccordionTrigger, AccordionContent }
