"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Play, 
  Trophy, 
  Shield, 
  Monitor, 
  Smartphone, 
  Tv, 
  Cpu, 
  Wifi, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function HowItWorksPage() {
  const phases = [
    {
      id: "phase-1",
      num: "01",
      title: "Select Your Premium Plan",
      subtitle: "The Foundation of Your Experience",
      icon: Trophy,
      color: "from-purple-500 to-indigo-500",
      content: "Choose from our 3-month, 6-month, or 1-year plans. Each subscription includes access to 50,000+ channels and our full 4K VOD library. You can select between 1 to 5 simultaneous connections depending on your household needs.",
      features: ["No hidden contracts", "Instant WhatsApp delivery", "Full World Cup 2026 coverage"]
    },
    {
      id: "phase-2",
      num: "02",
      title: "Receive Your Credentials",
      subtitle: "Fastest Activation in the Industry",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      content: "Within minutes of your order, our automated system sends your M3U link and Xtream API credentials directly to your WhatsApp and Email. Our support team is available 24/7 to ensure your account is activated immediately.",
      features: ["24/7 technical support", "Xtream API & M3U support", "Automated renewal options"]
    },
    {
      id: "phase-3",
      num: "03",
      title: "Install Your Preferred App",
      subtitle: "The Ultimate Viewing Interface",
      icon: Play,
      color: "from-emerald-500 to-teal-500",
      content: "Simply download a premium IPTV player like TiviMate (recommended for Firestick), IPTV Smarters, or GSE Smart IPTV. Enter your provided credentials, and your entire channel list will load in seconds.",
      features: ["Custom EPG (TV Guide)", "Catch-up TV functionality", "Parental controls included"]
    }
  ];

  const devices = [
    { name: "Amazon Firestick", icon: Tv, desc: "Best performance with TiviMate app. Supports 4K HDR effortlessly." },
    { name: "Smart TV (Android/Google)", icon: Monitor, desc: "Direct installation from Play Store. No external hardware needed." },
    { name: "Apple TV", icon: Cpu, desc: "Ultra-fluid UI using iPlayTV or IPTV Smarters Pro." },
    { name: "Mobile (iOS/Android)", icon: Smartphone, desc: "Watch on the go with full mobile responsiveness." }
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[#060814]">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-24">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex py-1.5 px-4 rounded-full border border-indigo-500/30 bg-indigo-950/40 mb-6 backdrop-blur-md"
          >
            <Zap className="w-3.5 h-3.5 text-yellow-400 mr-2" fill="currentColor" />
            <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-[0.2em]">EASY 3-STEP SETUP</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black font-poppins text-white mb-6 tracking-tight uppercase leading-[1.1] flex flex-col items-center gap-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.4)] mb-2">
              <Tv className="text-white w-10 h-10" strokeWidth={2.5} />
            </div>
            <span>The Ultimate <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">IPTV Setup Guide</span></span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10"
          >
            From choosing your plan to streaming in 4K, we've simplified everything. Get ready for the World Cup 2026 in under 5 minutes.
          </motion.p>
        </div>
      </div>

      {/* detailed phases */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 space-y-32 mb-32">
        {phases.map((phase, idx) => (
          <motion.div 
            key={phase.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
          >
            {/* Phase Visual */}
            <div className="flex-1 w-full">
              <div className="relative aspect-video rounded-[2rem] bg-[#0d1117] border border-white/5 overflow-hidden group shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <phase.icon className="w-32 h-32 text-white/10 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute top-8 left-8 text-6xl font-black text-white/5 uppercase italic tracking-tighter">
                  Phase {phase.num}
                </div>
              </div>
            </div>

            {/* Phase Text */}
            <div className="flex-1 space-y-6">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                {phase.num}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{phase.title}</h2>
              <p className="text-indigo-400 font-bold uppercase tracking-widest text-xs">{phase.subtitle}</p>
              <p className="text-slate-400 text-lg leading-relaxed">
                {phase.content}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {phase.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Device Support Grid */}
      <div className="bg-[#0b0f19]/50 border-y border-white/5 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Supported Devices</h2>
            <p className="text-slate-400">Whatever you own, we have a setup for it.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-[#0d1117] border border-white/5 rounded-2xl p-6 hover:border-indigo-500/30 transition-all shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-900/30 border border-indigo-500/20 flex items-center justify-center mb-6">
                  <device.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h4 className="text-white font-bold mb-3">{device.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{device.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Optimization Tips */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 py-32">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0d1117] to-[#060814] border border-white/5 rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Wifi className="w-48 h-48 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Performance Optimization</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Wifi className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 text-lg">Use a Wired Connection</h4>
                <p className="text-slate-400 text-sm leading-relaxed">For 4K Ultra HD streaming, we always recommend using an Ethernet cable rather than Wi-Fi to eliminate interference and buffering.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 text-lg">VPN Recommendations</h4>
                <p className="text-slate-400 text-sm leading-relaxed">If your ISP throttles your streaming speed, using a premium VPN can help you maintain consistent 4K bitrates during high-traffic match days.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Cpu className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2 text-lg">Hardware Power</h4>
                <p className="text-slate-400 text-sm leading-relaxed">The Amazon Firestick 4K Max remains our top recommendation for the most fluid UI and fastest channel loading speeds.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center pb-32">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-poppins uppercase tracking-tight">Ready to start streaming?</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/pricing" className="px-12 py-5 rounded-full bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-500 transition-all shadow-[0_0_30px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95 flex items-center gap-3">
            Choose Your Plan <ArrowRight className="w-5 h-5" />
          </Link>
          <button 
            onClick={() => window.open('https://wa.me/213554246175', '_blank')}
            className="px-12 py-5 rounded-full bg-[#0d1117] border border-white/10 text-white font-bold text-lg hover:border-indigo-500/50 transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
          >
            Live Support <ChevronRight className="w-5 h-5 text-indigo-400" />
          </button>
        </div>
      </div>

    </main>
  );
}
