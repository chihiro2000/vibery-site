import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "minimal"
  size?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mono-400 focus:ring-offset-2 focus:ring-offset-mono-950 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group",
          {
            // Primary - 白背景
            "bg-mono-50 text-mono-950 hover:bg-mono-100 border border-mono-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] rounded-xl": variant === "primary",
            // Secondary - グレー背景
            "bg-mono-800 text-mono-100 hover:bg-mono-700 border border-mono-700 hover:border-mono-600 shadow-lg rounded-xl": variant === "secondary",
            // Outline - 枠線のみ
            "border-2 border-mono-400 text-mono-300 hover:bg-mono-50 hover:text-mono-950 hover:border-mono-50 backdrop-blur-sm rounded-xl": variant === "outline",
            // Ghost - 背景なし
            "text-mono-400 hover:text-mono-100 hover:bg-mono-900 rounded-xl": variant === "ghost",
            // Minimal - 最小限のスタイル
            "text-mono-300 hover:text-mono-50 underline underline-offset-4 decoration-mono-600 hover:decoration-mono-400": variant === "minimal"
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
            "px-12 py-5 text-xl": size === "xl"
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {(variant === "primary" || variant === "secondary") && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-[-100%] group-hover:translate-x-[100%] duration-700" />
        )}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
