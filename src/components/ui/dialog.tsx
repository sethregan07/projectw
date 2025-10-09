"use client"

import * as React from "react"
import { DialogRoot, DialogTrigger, DialogBackdrop, DialogPositioner, DialogContent, DialogCloseTrigger, DialogTitle, DialogDescription } from "@ark-ui/react/dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const Dialog = DialogRoot

const DialogTriggerComponent = DialogTrigger

const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DialogBackdrop> & { className?: string }
>(({ className, ...props }, ref) => (
  <DialogBackdrop
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = "DialogOverlay"

const DialogContentComponent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof DialogContent> & { className?: string }
>(({ className, children, ...props }, ref) => (
  <>
    <DialogOverlay />
    <DialogPositioner className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <DialogContent
        ref={ref}
        className={cn(
          "relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
          className
        )}
        {...props}
      >
        {children}
        <DialogCloseTrigger className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogCloseTrigger>
      </DialogContent>
    </DialogPositioner>
  </>
))
DialogContentComponent.displayName = "DialogContent"

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitleComponent = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentProps<typeof DialogTitle> & { className?: string }
>(({ className, ...props }, ref) => (
  <DialogTitle
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitleComponent.displayName = "DialogTitle"

const DialogDescriptionComponent = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentProps<typeof DialogDescription> & { className?: string }
>(({ className, ...props }, ref) => (
  <DialogDescription
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescriptionComponent.displayName = "DialogDescription"

export {
  Dialog as DialogRoot,
  DialogTriggerComponent as DialogTrigger,
  DialogContentComponent as DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitleComponent as DialogTitle,
  DialogDescriptionComponent as DialogDescription,
}
