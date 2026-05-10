"use client"
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] bg-background flex flex-col items-center justify-center">
      <div className="relative">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-16 h-16 rounded-full border-t-2 border-r-2 border-primary"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-12 h-12 rounded-full border-b-2 border-l-2 border-accent absolute top-2 left-2"
        />
        <div className="w-4 h-4 rounded-full bg-white absolute top-6 left-6 animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        className="mt-8 text-xs font-medium tracking-[0.3em] uppercase text-slate-400 font-poppins"
      >
        Initializing Link
      </motion.p>
    </div>
  );
}
