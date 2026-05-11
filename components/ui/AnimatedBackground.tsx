"use client"
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[80px] md:blur-[120px] animate-pulse-slow transform-gpu"></div>
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-secondary/20 blur-[100px] md:blur-[150px] animate-aurora transform-gpu hidden sm:block"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[40%] rounded-full bg-accent/20 blur-[90px] md:blur-[130px] animate-aurora transform-gpu" style={{ animationDelay: '2s' }}></div>
    </div>
  )
}
