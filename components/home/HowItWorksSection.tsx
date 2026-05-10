"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Play, Volume2, Maximize, Trophy, Tv } from 'lucide-react';
import Image from 'next/image'; // We'll just use <img> for simplicity but Image is fine.

export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Plan",
      desc: (
        <>
          Pick <strong>3 months, 6 months or 1 year</strong>. Select the number of devices you need and click Get Started above.
        </>
      )
    },
    {
      num: "02",
      title: "Receive Your Credentials",
      desc: (
        <>
          After payment we send your <strong>M3U link or Xtream login</strong> directly to your WhatsApp or email — within minutes, 24/7.
        </>
      )
    },
    {
      num: "03",
      title: "Start Watching Instantly",
      desc: (
        <>
          Open <strong>TiviMate, IPTV Smarters or GSE Smart IPTV</strong>, enter your credentials and enjoy 50,000+ channels in HD/4K. Done in seconds.
        </>
      )
    }
  ];

  const stats = [
    { value: "104", label: "WC MATCHES" },
    { value: "50K+", label: "LIVE CHANNELS" },
    { value: "4K", label: "ULTRA HD" },
    { value: "99.9%", label: "SERVER UPTIME" }
  ];

  return (
    <section id="how-it-works" className="pt-8 pb-24 relative z-10 bg-[#060814] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-purple-900/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">
          
          {/* LEFT COLUMN: Typography & Timeline */}
          <div className="flex-1 w-full max-w-xl lg:max-w-none">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full border border-purple-500/30 bg-[#120b29] mb-6 shadow-[0_0_20px_rgba(147,51,234,0.15)]"
            >
              <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">SETUP IN 60 SECONDS</span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[54px] font-bold font-poppins uppercase tracking-tight leading-[1] mb-6 flex flex-col items-start gap-4"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.3)] mb-2">
                <Tv className="text-white w-7 h-7" strokeWidth={2} />
              </div>
              <div>
                <span className="text-white block mb-1">WATCH EVERY MATCH</span>
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text block">ON ANY DEVICE</span>
              </div>
            </motion.h2>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-sm leading-relaxed mb-12 max-w-lg"
            >
              No satellite dish. No complicated setup. Subscribe, receive your credentials instantly on WhatsApp, and stream all 104 World Cup 2026 matches in crystal-clear 4K — from any device, anywhere in the world.
            </motion.p>

            {/* Timeline */}
            <div className="relative pl-4 space-y-10">
              {/* Vertical Line joining the steps */}
              <div className="absolute left-[27px] top-4 bottom-4 w-px bg-indigo-500/20"></div>
              
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.15) }}
                  className="relative flex items-start gap-6 group"
                >
                  {/* Step Num Circle */}
                  <div className="relative z-10 w-10 h-10 rounded-full shrink-0 flex items-center justify-center bg-[#0c0e1a] border border-indigo-500/30 text-indigo-300 text-xs font-bold font-poppins shadow-[0_0_15px_rgba(79,70,229,0.1)] group-hover:border-indigo-400 group-hover:text-indigo-200 group-hover:bg-indigo-900/30 transition-all duration-300">
                    {step.num}
                  </div>
                  
                  <div className="pt-1.5">
                    <h4 className="text-white font-bold text-[15px] mb-2 font-poppins">{step.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed max-w-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Media & Stats & Buttons */}
          <div className="flex-1 w-full lg:max-w-[650px] flex flex-col gap-6">
            
            {/* Top 4 Stats Boxes */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-4 gap-2 md:gap-4 w-full"
            >
              {stats.map((stat, i) => (
                <div key={i} className="bg-[#0c0e1a]/80 backdrop-blur-sm border border-indigo-500/10 rounded-xl py-3 px-1 text-center flex flex-col justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <span className="text-sm md:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400">{stat.value}</span>
                  <span className="text-[7px] md:text-[8px] font-black text-slate-500 uppercase tracking-widest mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Video Player Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative w-full aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-indigo-500/20 group"
            >
              <img 
                src="/iptv-world-cup-hero.webp" 
                alt="World Cup Live Stream" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-[#060814]/40 to-transparent pointer-events-none"></div>
              
              {/* Top Right Tag */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded flex items-center space-x-2">
                <span className="text-cyan-400 font-bold text-[10px]">50K+</span>
                <span className="text-slate-300 text-[9px] uppercase tracking-wider font-bold">Channels</span>
              </div>

              {/* Bottom UI Strip representing Player */}
              <div className="absolute bottom-4 inset-x-4 flex items-end justify-between gap-4">
                {/* Left Live Now module */}
                <div className="bg-black/80 backdrop-blur border border-white/10 p-3 rounded-lg flex flex-col gap-1 w-48 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-white text-[11px] font-bold">Live Now</span>
                  </div>
                  <div className="text-[9px] text-slate-400 font-medium">104 WC Matches · 4K HDR</div>
                  
                  {/* Fake Progress / Scrubber */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="h-1 flex-1 bg-white/10 rounded overflow-hidden">
                      <div className="h-full w-[65%] bg-red-600 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Right decorative UI nodes mimicking channels (hidden on very small screens) */}
                <div className="hidden sm:flex gap-2 h-14">
                  <div className="aspect-video h-full bg-[#161825] border border-white/10 rounded flex flex-col justify-end p-1.5 opacity-80 cursor-default">
                    <div className="flex items-center space-x-1.5">
                      <img src="/flags/br.svg" alt="BR" className="w-3 rounded-sm opacity-80" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                      <span className="text-[6px] font-bold text-white uppercase truncate">Brazil vs Portugal</span>
                    </div>
                  </div>
                  <div className="aspect-video h-full bg-[#0d0f17] border border-white/5 rounded flex flex-col justify-end p-1.5 opacity-60">
                    <div className="flex items-center space-x-1.5">
                      <img src="/flags/gb.svg" alt="GB" className="w-3 rounded-sm opacity-80" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                      <span className="text-[6px] font-bold text-white uppercase truncate">England vs Senegal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fake Media controls */}
              <div className="absolute bottom-[4.5rem] sm:bottom-6 right-6 flex items-center gap-3 text-white/70">
                <Volume2 className="w-4 h-4 cursor-pointer hover:text-white" />
                <Maximize className="w-4 h-4 cursor-pointer hover:text-white" />
              </div>
            </motion.div>

            {/* Buttons Row */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full mt-2"
            >
              <Link href="#pricing" className="group relative overflow-hidden flex-1 w-full flex items-center justify-center py-4 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] hover:-translate-y-1 transition-all duration-300 uppercase text-[11px] md:text-xs font-bold text-white tracking-widest order-1">
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <Trophy className="w-4 h-4 mr-2 group-hover:scale-110 group-hover:text-yellow-300 transition-all z-10 relative" /> 
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">GET STARTED NOW</span>
              </Link>
              
              <button onClick={() => window.open('https://wa.me/213554246175', '_blank')} className="group relative overflow-hidden flex-1 w-full flex items-center justify-center py-4 px-6 rounded-xl bg-[#0c0e1a] border border-[#25D366]/40 hover:bg-[#25D366]/10 hover:shadow-[0_0_30px_rgba(37,211,102,0.2)] hover:-translate-y-1 transition-all duration-300 text-[#25D366] text-[11px] md:text-xs font-bold uppercase tracking-widest order-2">
                <div className="absolute inset-0 bg-[#25D366]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                <svg className="w-4 h-4 mr-2 fill-current relative z-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">CHAT ON WHATSAPP</span>
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
