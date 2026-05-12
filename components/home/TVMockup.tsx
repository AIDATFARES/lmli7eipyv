"use client"
import Image from 'next/image';
import { Monitor, Globe, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TVMockup() {
  return (
    <div className="relative w-full max-w-[600px] mb-8">
      {/* Floating Labels */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -left-6 z-20 bg-[#0c0f1c]/90 border border-indigo-500/30 backdrop-blur-xl px-4 py-2.5 rounded-xl shadow-2xl flex items-center space-x-3 shadow-[0_0_20px_rgba(79,70,229,0.2)]"
      >
        <div className="bg-slate-800 p-1.5 rounded-lg"><Monitor className="w-4 h-4 text-white" /></div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white leading-none mb-1">50K+</span>
          <span className="text-[9px] text-slate-400 tracking-widest leading-none font-medium">LIVE CHANNELS</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -top-4 -right-4 z-20 bg-[#0c0f1c]/90 border border-indigo-500/30 backdrop-blur-xl px-4 py-2.5 rounded-xl shadow-2xl flex items-center space-x-3 shadow-[0_0_20px_rgba(79,70,229,0.2)]"
      >
        <div className="bg-slate-800 p-1.5 rounded-lg"><Globe className="w-4 h-4 text-cyan-400" /></div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white leading-none mb-1">160+</span>
          <span className="text-[9px] text-slate-400 tracking-widest leading-none font-medium">COUNTRIES</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-4 -left-4 z-20 bg-[#0c0f1c]/90 border border-indigo-500/30 backdrop-blur-xl px-4 py-2.5 rounded-xl shadow-2xl flex items-center space-x-3 shadow-[0_0_20px_rgba(79,70,229,0.2)]"
      >
        <div className="bg-red-500/20 p-1.5 rounded-lg border border-red-500/30"><Target className="w-4 h-4 text-red-500" /></div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white leading-none mb-1">ZERO</span>
          <span className="text-[9px] text-slate-400 tracking-widest leading-none font-medium">BUFFERING</span>
        </div>
      </motion.div>

      {/* TV Mockup Container */}
      <div className="relative rounded-[20px] w-full aspect-video bg-[#0c0f1c] shadow-[0_0_60px_rgba(129,140,248,0.2)] p-[2px] z-10">
        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-80 blur-[2px] -z-10"></div>
        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500"></div>

        <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-[#0a0f1c]">
          <div className="absolute top-3 left-3 flex space-x-1.5 z-20">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-black/10"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-black/10"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-black/10"></div>
          </div>

          <Image
            src="/iptv-hero-opt.webp"
            alt="World Cup Stadium"
            fill
            priority
            fetchPriority="high"
            className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 600px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 via-transparent to-black/30 pointer-events-none"></div>

          <div className="absolute top-1/2 left-[15%] -translate-y-1/2 px-4 py-1.5 bg-blue-600/60 backdrop-blur-md rounded border border-white/20 shadow-[0_0_15px_rgba(37,99,235,0.5)] hidden sm:block">
            <span className="text-white font-bold tracking-widest text-[10px]">LIVE</span>
          </div>
          <div className="absolute top-1/2 right-[15%] -translate-y-1/2 px-4 py-1.5 bg-blue-600/60 backdrop-blur-md rounded border border-white/20 shadow-[0_0_15px_rgba(37,99,235,0.5)] hidden sm:block">
            <span className="text-white font-bold tracking-widest text-[10px]">LIVE</span>
          </div>
        </div>

        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/4 h-4 bg-[#111827] border-x border-b border-white/10 rounded-b-xl flex flex-col items-center">
          <div className="w-3/4 h-[1px] bg-indigo-500/50 mt-auto mb-1 blur-[1px]"></div>
        </div>
      </div>
    </div>
  );
}
