import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

export function Container({ children, className, size = "lg" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto px-6 sm:px-8 lg:px-12",
        {
          "max-w-3xl": size === "sm",
          "max-w-5xl": size === "md", 
          "max-w-7xl": size === "lg",
          "max-w-8xl": size === "xl",
          "max-w-none": size === "full"
        },
        className
      )}
    >
      {children}
    </div>
  )
}
