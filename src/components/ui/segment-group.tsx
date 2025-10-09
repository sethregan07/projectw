import { SegmentGroupRoot, SegmentGroupItem, SegmentGroupItemControl, SegmentGroupItemText, SegmentGroupItemHiddenInput, SegmentGroupIndicator } from "@ark-ui/react/segment-group"
import { forwardRef } from "react"

const SegmentGroupRootComponent = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof SegmentGroupRoot>
>((props, ref) => (
  <SegmentGroupRoot
    ref={ref}
    className="flex items-center rounded-md bg-muted p-1"
    {...props}
  />
))
SegmentGroupRootComponent.displayName = "SegmentGroupRoot"

const SegmentGroupItemControlComponent = forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof SegmentGroupItemControl>
>((props, ref) => (
  <SegmentGroupItemControl
    ref={ref}
    className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:bg-background data-[state=checked]:text-foreground data-[state=checked]:shadow-sm"
    {...props}
  />
))
SegmentGroupItemControlComponent.displayName = "SegmentGroupItemControl"

export {
  SegmentGroupRootComponent as SegmentGroupRoot,
  SegmentGroupItem,
  SegmentGroupItemControlComponent as SegmentGroupItemControl,
  SegmentGroupItemText,
  SegmentGroupItemHiddenInput,
  SegmentGroupIndicator,
}