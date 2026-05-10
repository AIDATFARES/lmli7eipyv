"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Clock, Send, CheckCircle2, Shield, Zap, HelpCircle, Tv } from 'lucide-react';
import AnimatedBackground from "@/components/ui/AnimatedBackground";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black font-poppins text-white mb-4 tracking-tight flex flex-col items-center gap-6"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_25px_rgba(147,51,234,0.3)] mb-2">
              <Tv className="text-white w-8 h-8" strokeWidth={2.5} />
            </div>
            <span>Contact Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto mb-8"
          >
            We're here 24/7 to help you get the most out of <span className="text-white font-bold">WORLD CUP IPTV</span>.
          </motion.p>

          {/* Contact Chips */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1117] border border-white/5 text-xs font-bold text-slate-300">
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              Support@worldcupiptv.us
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1117] border border-white/5 text-xs font-bold text-slate-300">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp Support
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0d1117] border border-white/5 text-xs font-bold text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              24/7 — Instant Help
            </div>
          </motion.div>
        </div>

        {/* Main Form Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-[#0d1117]/80 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
            
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Send us a message</h2>
              <p className="text-slate-400 text-sm">Tell us about your device and preferred plan — we'll reply fast.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-[#060814] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="email@example.com"
                    className="w-full bg-[#060814] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Your device (e.g. Smart TV, Android, iOS)</label>
                  <input 
                    type="text" 
                    placeholder="Device Model"
                    className="w-full bg-[#060814] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Preferred plan (optional)</label>
                  <select className="w-full bg-[#060814] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors appearance-none cursor-pointer">
                    <option>Select a plan</option>
                    <option>3 Months - Premium</option>
                    <option>6 Months - Best Value</option>
                    <option>1 Year - Maximum Savings</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Your message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-[#060814] border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send
                </button>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('https://wa.me/213554246175', '_blank');
                  }}
                  className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-[#0c0e1a] border border-emerald-500/30 text-emerald-400 font-bold text-sm transition-all hover:bg-emerald-500/10 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Or WhatsApp
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Bottom Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Why Contact Us */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#0d1117]/50 backdrop-blur-md border border-white/5 rounded-2xl p-8"
          >
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-400" />
              Why contact us?
            </h3>
            <ul className="space-y-4">
              {[
                "Quick activation & setup help",
                "Choosing the best plan for your devices",
                "Troubleshooting & remote assistance",
                "World Cup match-day tips for best quality"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Hours */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#0d1117]/50 backdrop-blur-md border border-white/5 rounded-2xl p-8 flex flex-col"
          >
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-400" />
              Support hours
            </h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              24/7 — average response time: <span className="text-emerald-400 font-bold">a few minutes</span>.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/213554246175', '_blank')}
              className="mt-auto w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold tracking-widest uppercase text-xs shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all hover:-translate-y-1"
            >
              WhatsApp
            </button>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
