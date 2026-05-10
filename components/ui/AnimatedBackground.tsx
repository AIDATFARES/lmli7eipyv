"use client"
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-secondary/20 blur-[150px] animate-aurora"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[40%] rounded-full bg-accent/20 blur-[130px] animate-aurora" style={{ animationDelay: '2s' }}></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
    </div>
  )
}
