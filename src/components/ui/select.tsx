"use client"

import * as React from "react"
import { SelectRoot, SelectTrigger, SelectContent, SelectPositioner, SelectValueText, SelectIndicator, SelectItem, SelectItemText, SelectItemIndicator } from "@ark-ui/react/select"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface SelectRootProps extends React.ComponentProps<typeof SelectRoot> {
  children: React.ReactNode
}

const Select = ({ children, ...props }: SelectRootProps) => (
  <SelectRoot {...props}>
    {children}
  </SelectRoot>
)

const SelectTriggerComponent = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof SelectTrigger> & { className?: string }
>(({ className, children, ...props }, ref) => (
  <SelectTrigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <SelectValueText placeholder="Select an option" />
    <SelectIndicator>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectIndicator>
  </SelectTrigger>
))
SelectTriggerComponent.displayName = "SelectTrigger"

const SelectContentComponent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof SelectContent> & { className?: string }
>(({ className, children, ...props }, ref) => (
  <SelectPositioner>
    <SelectContent
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    >
      {children}
    </SelectContent>
  </SelectPositioner>
))
SelectContentComponent.displayName = "SelectContent"

const SelectItemComponent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof SelectItem> & { className?: string }
>(({ className, children, ...props }, ref) => (
  <SelectItem
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectItemIndicator>
        <Check className="h-4 w-4" />
      </SelectItemIndicator>
    </span>
    <SelectItemText>{children}</SelectItemText>
  </SelectItem>
))
SelectItemComponent.displayName = "SelectItem"

export { Select as SelectRoot, SelectTriggerComponent as SelectTrigger, SelectContentComponent as SelectContent, SelectItemComponent as SelectItem }
