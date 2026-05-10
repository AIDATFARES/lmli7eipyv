"use client"
import { motion } from 'framer-motion';
import { Monitor, Layers, PlaySquare, Zap, Smartphone, Globe2, ShieldCheck, ChevronDown } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="pt-24 pb-8 relative z-10 bg-[#060814]">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex py-1 px-4 rounded-full border border-indigo-500/30 bg-[#0c0f1c] mb-6 shadow-md"
          >
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">WHY CHOOSE IPTV WORLD CUP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins tracking-tight uppercase leading-[1.1]"
          >
            <span className="text-white block">THE ULTIMATE</span>
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(147,51,234,0.3)] block">WORLD CUP EXPERIENCE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Everything you need to watch the FIFA World Cup 2026 live — from any device, anywhere in the world, in crystal-clear quality.
          </motion.p>
        </div>

        {/* 3 LARGE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0c0e1a]/80 border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:bg-[#111424] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
              <Monitor className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">4K ULTRA HD STREAMING</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-8 flex-grow">
              Watch every World Cup match in breathtaking <strong className="text-slate-200">4K, Full HD, HD & SD</strong> quality. Our anti-freeze technology ensures zero buffering even during peak match times — every goal, every moment, flawlessly live.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/20">4K UHD</span>
              <span className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/20">Full HD</span>
              <span className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/20">Anti-Freeze</span>
            </div>
          </motion.div>

          {/* Card 2 (Active/Center) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-b from-indigo-900/20 to-[#0c0e1a]/80 border border-indigo-500/50 shadow-[0_0_30px_rgba(79,70,229,0.15)] rounded-2xl p-8 flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-[50px] pointer-events-none rounded-full"></div>

            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6 relative z-10">
              <Layers className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide relative z-10">50,000+ LIVE CHANNELS</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-8 flex-grow relative z-10">
              Access <strong className="text-slate-200">50,000+ live channels</strong> from 160+ countries — sports, news, entertainment, kids & more. Every broadcaster covering the World Cup 2026 is included: beIN Sports, ESPN, BBC, ITV, Sky Sports and hundreds more.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
              <span className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-cyan-900/40 text-cyan-300 border border-cyan-500/20">160+ Countries</span>
              <span className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-cyan-900/40 text-cyan-300 border border-cyan-500/20">Sports</span>
              <span className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-cyan-900/40 text-cyan-300 border border-cyan-500/20">News</span>
              <span className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-cyan-900/40 text-cyan-300 border border-cyan-500/20">Kids</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#0c0e1a]/80 border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:bg-[#111424] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-6">
              <PlaySquare className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">200,000+ VODS</h3>
            <p className="text-slate-400 text-xs leading-relaxed mb-8 flex-grow">
              Beyond the World Cup — dive into <strong className="text-slate-200">200,000+ movies & series</strong> on demand. Full HD & 4K titles updated daily. Watch match replays, highlights and documentaries anytime, on any device.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">Movies</span>
              <span className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">Series</span>
              <span className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">Replays</span>
              <span className="text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">Updated Daily</span>
            </div>
          </motion.div>

        </div>

        {/* 4 SMALL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#0c0e1a]/60 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors flex items-start space-x-4"
          >
            <Zap className="w-6 h-6 text-orange-400 shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Instant Activation</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">Your subscription is activated within minutes. Watch the World Cup live in under 5 minutes from now.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#0c0e1a]/60 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors flex items-start space-x-4"
          >
            <Smartphone className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <h4 className="text-sm font-bold text-white mb-2">All Devices Supported</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">Smart TV, Android, iOS, MAG, Fire Stick, PC, Mac, Kodi & more. One subscription, every screen.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#0c0e1a]/60 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors flex items-start space-x-4"
          >
            <Globe2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Works Worldwide</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">No geo-restrictions. Watch the World Cup live from any country — Europe, USA, Asia, Middle East, anywhere.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-[#0c0e1a]/60 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors flex items-start space-x-4"
          >
            <ShieldCheck className="w-6 h-6 text-indigo-400 shrink-0 mt-0.5" strokeWidth={2} />
            <div>
              <h4 className="text-sm font-bold text-white mb-2">99.9% Uptime</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed">Ultra-stable servers with 99.9% uptime guarantee. No freezing, no crashes — not even during the final.</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
