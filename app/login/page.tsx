"use client"
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import GlowingButton from "@/components/ui/GlowingButton";
import { Lock, Mail, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      <AnimatedBackground />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-panel p-8 md:p-12 rounded-3xl w-full max-w-md relative overflow-hidden border-primary/20 neon-glow"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[50px] -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-[50px] -ml-16 -mb-16"></div>

        <div className="text-center mb-10 relative z-10">
          <Link href="/" className="inline-flex items-center justify-center space-x-2 group mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-accent to-primary flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
              <Play className="text-white w-6 h-6 ml-1" fill="currentColor" />
            </div>
          </Link>
          <h1 className="text-3xl font-bold font-poppins text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400 text-sm">Sign in to your NovaIPTV account</p>
        </div>

        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full pl-11 pr-4 py-3 bg-surface/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all pb-3 text-sm h-[46px]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <a href="#" className="text-xs text-primary hover:text-accent transition-colors">Forgot password?</a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                <Lock size={18} />
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full pl-11 pr-4 py-3 bg-surface/50 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm h-[46px]"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="remember" className="rounded border-white/10 bg-surface/50 text-primary focus:ring-primary h-4 w-4" />
            <label htmlFor="remember" className="ml-2 text-sm text-slate-400">Remember me</label>
          </div>

          <GlowingButton className="w-full py-3 h-[52px]" onClick={() => window.location.href = '/dashboard'}>
            Sign In
          </GlowingButton>
        </form>

        <div className="mt-8 text-center text-sm text-slate-400 relative z-10">
          Don't have an account? <Link href="/pricing" className="text-primary font-semibold hover:text-accent transition-colors">Choose a plan</Link>
        </div>
      </motion.div>
    </div>
  );
}
