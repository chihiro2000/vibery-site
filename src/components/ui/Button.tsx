import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient"
  size?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          // ベーススタイル
          "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group",
          // バリエーション
          {
            // Primary - グラデーションボタン
            "bg-gradient-to-r from-accent-600 to-purple-600 text-white hover:from-accent-700 hover:to-purple-700 shadow-lg hover:shadow-xl hover:shadow-accent-500/25 transform hover:scale-105": variant === "primary",
            // Secondary - ダークボタン
            "bg-dark-800 text-white hover:bg-dark-700 border border-dark-600 hover:border-dark-500 shadow-lg": variant === "secondary",
            // Outline - 枠線のみ
            "border-2 border-accent-500 text-accent-400 hover:bg-accent-500 hover:text-white backdrop-blur-sm": variant === "outline",
            // Ghost - 背景なし
            "text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm": variant === "ghost",
            // Gradient - アニメーション付きグラデーション
            "bg-gradient-to-r from-accent-500 via-purple-500 to-emerald-500 bg-size-200 animate-gradient text-white shadow-lg hover:shadow-xl glow": variant === "gradient"
          },
          // サイズ
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
            "px-10 py-5 text-xl": size === "xl"
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {variant === "primary" && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
