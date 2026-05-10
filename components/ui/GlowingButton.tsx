import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

interface GlowingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function GlowingButton({ children, className, variant = 'primary', ...props }: GlowingButtonProps) {
  return (
    <button 
      className={cn(
        "relative group overflow-hidden rounded-full px-8 py-4 font-semibold text-white transition-all hover:scale-105 duration-300",
        variant === 'primary' && "bg-gradient-to-r from-primary to-accent neon-glow-primary",
        variant === 'secondary' && "bg-gradient-to-r from-secondary to-pink-500 neon-glow-secondary",
        variant === 'accent' && "bg-gradient-to-r from-accent to-primary neon-glow",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </button>
  )
}
