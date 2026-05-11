"use client"
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.15)_0%,transparent_60%)] animate-pulse-slow transform-gpu"></div>
      <div className="absolute top-[20%] right-[-10%] w-[70%] h-[90%] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.1)_0%,transparent_60%)] animate-aurora transform-gpu hidden sm:block"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[90%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.1)_0%,transparent_60%)] animate-aurora transform-gpu" style={{ animationDelay: '2s' }}></div>
    </div>
  )
}
