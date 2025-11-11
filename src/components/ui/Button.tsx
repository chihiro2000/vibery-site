import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "minimal";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group active:scale-[0.98] transform hover:scale-[1.02]",
          {
            // Primary - リキッドグラスデザイン（iOS 26風）
            "bg-gradient-to-br from-white/95 via-white/85 to-white/75 text-mono-950 hover:from-white via-white/90 hover:to-white/80 border border-white/40 shadow-[0_8px_32px_rgba(31,38,135,0.15),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_16px_48px_rgba(31,38,135,0.25),inset_0_2px_0_rgba(255,255,255,1)] backdrop-blur-2xl rounded-[20px]":
              variant === "primary",
            // Secondary - グレー背景
            "bg-mono-800 text-mono-100 hover:bg-mono-700 border border-mono-700 hover:border-mono-600 shadow-lg rounded-xl":
              variant === "secondary",
            // Outline - 枠線のみ
            "border-2 border-mono-400 text-mono-300 hover:bg-mono-50 hover:text-mono-950 hover:border-mono-50 backdrop-blur-sm rounded-xl":
              variant === "outline",
            // Ghost - 背景なし
            "text-mono-400 hover:text-mono-100 hover:bg-mono-900 rounded-xl":
              variant === "ghost",
            // Minimal - 最小限のスタイル
            "text-mono-300 hover:text-mono-50 underline underline-offset-4 decoration-mono-600 hover:decoration-mono-400":
              variant === "minimal",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
            "px-12 py-5 text-xl": size === "xl",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {variant === "primary" && (
          <>
            {/* トップハイライト（ガラスの光沢） */}
            <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/60 to-transparent rounded-t-[20px] pointer-events-none" />
            {/* 左側のグロー */}
            <div className="absolute top-1/4 left-0 w-[30%] h-[50%] bg-white/40 blur-xl rounded-full pointer-events-none" />
            {/* リキッド動きエフェクト */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 -left-[100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            </div>
            {/* ボトムシャドウ（内側） */}
            <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-black/5 to-transparent rounded-b-[20px] pointer-events-none" />
          </>
        )}
        {variant === "secondary" && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-[-100%] group-hover:translate-x-[100%] duration-700" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
