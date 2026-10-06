import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "~/lib/utils";

/**
 * shadcn-style Tooltip on Radix, mapped to the site tokens
 * (ink surface, paper text, amber arrow accent on dark theme via --ink).
 */
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 8, children, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-ink px-3 py-1.5 text-xs font-medium tracking-wide text-paper shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)]",
        "tooltip-pop",
        className
      )}
      {...props}
    >
      {children}
      <TooltipPrimitive.Arrow className="fill-ink" width={10} height={5} />
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
