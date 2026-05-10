"use client"
import { motion } from 'framer-motion';
import { Trophy, Zap } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="pb-24 pt-8 relative z-10 overflow-hidden bg-[#060814]" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[2.5rem] bg-[#0c0f1c]/80 border border-purple-500/30 shadow-[0_0_50px_rgba(147,51,234,0.15)] backdrop-blur-xl p-8 md:p-12 lg:p-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Neon inner border glow and background gradients */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/10 pointer-events-none"></div>
          <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-purple-600/20 blur-[100px] pointer-events-none rounded-full"></div>
          <div className="absolute -right-32 -top-32 w-96 h-96 bg-blue-600/20 blur-[100px] pointer-events-none rounded-full"></div>

          {/* LEFT SIDE: Typography */}
          <div className="relative z-10 flex-1 max-w-xl">
            <div className="flex items-center space-x-2 text-[10px] md:text-xs font-bold text-blue-300 tracking-[0.2em] uppercase mb-4">
              <Trophy className="w-3.5 h-3.5 text-blue-400" />
              <span>FIFA WORLD CUP 2026 — USA • CANADA • MEXICO</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold font-poppins tracking-tight uppercase leading-[1.1] mb-6">
              <span className="text-white block">EVERY MATCH.</span>
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(129,140,248,0.3)] block mt-1">EVERY GOAL. LIVE.</span>
            </h2>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
              <span className="text-slate-200 font-semibold">All 104 World Cup matches</span> streamed live in 4K. From the Group Stage all the way to the Final — never miss a moment of football history.
            </p>
          </div>

          {/* RIGHT SIDE: Stats & Button */}
          <div className="relative z-10 flex-1 lg:max-w-md w-full flex flex-col items-center lg:items-end justify-center pt-8 lg:pt-0 lg:border-l border-white/10 lg:pl-12">

            {/* Added Image with Free Plan Sticker */}
            <div className="relative w-full mb-8 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(147,51,234,0.3)] group border border-white/10">
              <img 
                src="/iptv-world-cup-hero.webp" 
                alt="World Cup Access" 
                className="w-full h-auto aspect-video object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 via-transparent to-transparent pointer-events-none"></div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.6 }}
                className="absolute top-3 right-3 z-40"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-gradient-to-br from-[#ff0055] to-[#cc0044] text-white text-[10px] md:text-[11px] font-black uppercase tracking-widest py-1.5 px-3 rounded shadow-[0_0_20px_rgba(255,0,85,0.6)] border border-white/30 whitespace-nowrap"
                >
                  Free Plan Available
                </motion.div>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-6 md:gap-10 mb-8 w-full">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-300 tracking-tighter">
                  {inView ? <CountUp end={104} duration={2} /> : '0'}
                </span>
                <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Matches Live</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-300 tracking-tighter">
                  {inView ? <CountUp end={48} duration={2} /> : '0'}
                </span>
                <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">Teams</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-cyan-300 tracking-tighter">
                  {inView ? <CountUp end={3} duration={2} /> : '0'}
                </span>
                <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2 text-center">Host<br />Countries</span>
              </div>
            </div>

            <motion.button 
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.05 }}
              className="w-full relative z-10 py-4 px-8 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all flex items-center justify-center tracking-wider uppercase group overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
              <Zap className="w-4 h-4 mr-2" /> GET YOUR PLAN NOW
            </motion.button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
