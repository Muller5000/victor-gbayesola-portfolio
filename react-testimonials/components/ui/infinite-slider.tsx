"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface InfiniteSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical"
  speed?: number
  speedOnHover?: number
}

export function InfiniteSlider({
  direction = "horizontal",
  speed = 30,
  speedOnHover,
  className,
  children,
  ...props
}: InfiniteSliderProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  // Use dynamic speed based on hover state
  const duration = isHovered && speedOnHover !== undefined ? speedOnHover : speed

  return (
    <div
      className={cn(
        "relative flex overflow-hidden [--gap:1.5rem]",
        direction === "vertical" ? "flex-col h-full" : "flex-row w-full",
        className
      )}
      style={{
        "--duration": `${duration}s`,
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div
        className={cn(
          "flex shrink-0 gap-6",
          direction === "vertical"
            ? "flex-col animate-infinite-slider-vertical"
            : "flex-row animate-infinite-slider-horizontal"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 gap-6",
          direction === "vertical"
            ? "flex-col animate-infinite-slider-vertical"
            : "flex-row animate-infinite-slider-horizontal"
        )}
      >
        {children}
      </div>
    </div>
  )
}
export default InfiniteSlider;
