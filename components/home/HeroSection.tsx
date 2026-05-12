import Link from 'next/link';
import { Monitor, Film, Shield, Trophy, Zap, Globe, ArrowRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import TVMockup from './TVMockup';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 lg:pt-40 pb-24 overflow-hidden flex items-center bg-[#060814]">
      {/* Decorative Lights - ZERO GPU COST with radial gradients */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(79,70,229,0.15)_0%,transparent_60%)] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_60%)] rounded-full z-0 pointer-events-none hidden sm:block"></div>

      {/* Center Light Beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent pointer-events-none z-0 hidden sm:block" style={{ clipPath: 'polygon(30% 0, 70% 0, 100% 100%, 0% 100%)' }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[800px] overflow-hidden pointer-events-none z-0 hidden md:block opacity-40">
        <div className="absolute top-[-5%] left-[48%] -translate-x-1/2 w-[1px] h-[1000px] bg-gradient-to-b from-indigo-400 to-transparent rotate-[22deg] origin-top"></div>
        <div className="absolute top-[-5%] left-[52%] -translate-x-1/2 w-[1px] h-[1000px] bg-gradient-to-b from-indigo-400 to-transparent -rotate-[22deg] origin-top"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* LEFT SIDE CONTENT */}
          <div className="text-center lg:text-left space-y-8 flex flex-col items-center lg:items-start w-full">
            <div
              className="inline-flex items-center space-x-2 bg-indigo-950/40 border border-indigo-500/20 rounded-full px-4 py-1.5 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
              <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase">Best IPTV SERVICE FOR SPORTS & ENTERTAINMENT</span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins tracking-tight leading-[1.1]"
            >
              <span className="text-white block">PREMIUM 4K IPTV</span>
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 text-transparent bg-clip-text block mt-1 uppercase">World Cup 2026</span>
            </h1>

            <p
              className="text-base md:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Watch every <strong className="text-slate-200 font-semibold">World Cup 2026 match</strong> live in HD & 4K. The most reliable IPTV with <strong className="text-slate-200 font-semibold">50,000+ channels</strong>, 200,000+ movies & series — on every device, worldwide.
            </p>

            {/* COUNTDOWN TIMER (Client Component) */}
            <CountdownTimer />

            {/* STATS ROW */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pt-6 border-t border-indigo-500/10 w-full"
            >
              <div className="flex items-center space-x-3 bg-[#0c0f1c]/80 border border-indigo-500/20 rounded-xl px-4 py-3">
                <Monitor className="w-5 h-5 text-indigo-400 shrink-0" />
                <div className="flex flex-col leading-tight space-y-0.5">
                  <span className="text-sm font-bold text-white">50,000+</span>
                  <span className="text-[9px] text-slate-400 font-medium tracking-wide">Live Channels</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-[#0c0f1c]/80 border border-indigo-500/20 rounded-xl px-4 py-3">
                <Film className="w-5 h-5 text-indigo-400 shrink-0" />
                <div className="flex flex-col leading-tight space-y-0.5">
                  <span className="text-sm font-bold text-white">200K+</span>
                  <span className="text-[9px] text-slate-400 font-medium tracking-wide">Movies & Series</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-[#0c0f1c]/80 border border-indigo-500/20 rounded-xl px-4 py-3 col-span-2 sm:col-span-1 justify-center sm:justify-start">
                <Shield className="w-5 h-5 text-indigo-400 shrink-0" />
                <div className="flex flex-col leading-tight space-y-0.5 text-left">
                  <span className="text-sm font-bold text-white">99.9%</span>
                  <span className="text-[9px] text-slate-400 font-medium tracking-wide">Uptime</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="flex flex-col lg:items-end w-full">
            {/* TV Mockup (Client Component) */}
            <TVMockup />

            {/* BUTTONS ROW OVER RIGH SIDE (MATCHING IMAGE) */}
            <div
              className="flex flex-col w-full max-w-[600px]"
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-8 pt-4">
                <a 
                  href="https://wa.me/213554246175?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20the%20World%20Cup%20IPTV%20service."
                  target="_blank"
                  aria-label="Get Free Trial via WhatsApp"
                  className="group relative flex-1 py-4 px-8 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:opacity-100 shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_50px_rgba(16,185,129,0.8)] hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-center justify-center tracking-wide"
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  <Trophy className="w-4 h-4 mr-2 group-hover:scale-125 group-hover:text-yellow-200 transition-all duration-300 z-10" />
                  <span className="z-10 group-hover:scale-105 transition-transform duration-300">GET FREE TRIAL</span>
                </a>
                <Link 
                  href="#pricing" 
                  aria-label="View Pricing Plans"
                  className="group relative flex-1 py-4 px-8 rounded-full text-sm font-bold text-white bg-[#111827] hover:bg-[#1f2937] border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.05)] overflow-hidden flex items-center justify-center tracking-wide"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="z-10 transition-transform duration-300 group-hover:scale-105">VIEW PLANS</span>
                </Link>
              </div>

              {/* Bottom minor perks */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-[10px] text-slate-400 font-medium">
                <span className="flex items-center"><Trophy className="w-3.5 h-3.5 mr-1.5 text-yellow-500" /> All 104 WC Matches</span>
                <span className="flex items-center"><Monitor className="w-3.5 h-3.5 mr-1.5 text-blue-400" /> All Devices</span>
                <span className="flex items-center"><Zap className="w-3.5 h-3.5 mr-1.5 text-orange-400" /> Instant Setup</span>
                <span className="flex items-center"><Globe className="w-3.5 h-3.5 mr-1.5 text-cyan-400" /> Worldwide</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
