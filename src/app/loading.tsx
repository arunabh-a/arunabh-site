import { cn } from "@/lib/utils"

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <LoadingDots />
    </div>
  )
}

interface LoadingDotsProps {
  className?: string
}

export function LoadingDots({ className }: LoadingDotsProps) {
  return (
    <div className={cn("flex space-x-2", className)}>
      <div className="h-3 w-3 animate-pulse rounded-full bg-primary"></div>
      <div className="h-3 w-3 animate-pulse rounded-full bg-primary animation-delay-200"></div>
      <div className="h-3 w-3 animate-pulse rounded-full bg-primary animation-delay-500"></div>
    </div>
  )
}

