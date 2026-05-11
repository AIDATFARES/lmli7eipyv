"use client"
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Monitor, Film, Shield, Trophy, Globe, Zap, Target, MessageSquare, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, Fragment } from 'react';

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date('2026-06-11T12:00:00Z').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
          secs: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 lg:pt-40 pb-24 overflow-hidden flex items-center bg-[#060814]">
      {/* Decorative Lights - Significantly optimized for mobile GPU */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-indigo-600/20 blur-3xl md:blur-[100px] rounded-full z-0 pointer-events-none transform-gpu"></div>
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-blue-600/10 blur-3xl md:blur-[120px] rounded-full z-0 pointer-events-none transform-gpu hidden sm:block"></div>

      {/* Center Light Beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent pointer-events-none z-0 blur-xl transform-gpu hidden sm:block" style={{ clipPath: 'polygon(30% 0, 70% 0, 100% 100%, 0% 100%)' }}></div>
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
              <span className="text-white block">THE WORLD CUP</span>
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(129,140,248,0.3)] block mt-1">ON YOUR SCREEN</span>
            </h1>

            <p
              className="text-base md:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Watch every <strong className="text-slate-200 font-semibold">World Cup 2026 match</strong> live in HD & 4K. The most reliable IPTV with <strong className="text-slate-200 font-semibold">50,000+ channels</strong>, 200,000+ movies & series — on every device, worldwide.
            </p>

            {/* COUNTDOWN TIMER */}
            <div
              className="pt-4 flex flex-col items-center lg:items-start w-full"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-5 w-full">
                <div className="h-[1px] w-8 bg-indigo-500/30"></div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-400/80 uppercase">WORLD CUP KICKS OFF IN</span>
                <div className="h-[1px] w-8 bg-indigo-500/30"></div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-2 sm:space-x-3 md:space-x-4 w-full">
                {[
                  { label: "DAYS", value: timeLeft.days },
                  { label: "HOURS", value: timeLeft.hours },
                  { label: "MINS", value: timeLeft.mins },
                  { label: "SECS", value: timeLeft.secs }
                ].map((item, idx, arr) => (
                  <Fragment key={idx}>
                    <div className="flex flex-col items-center">
                      <div className="w-[3.25rem] h-[3.75rem] sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#0c0f1c]/80 border border-indigo-500/20 rounded-xl flex items-center justify-center shadow-[inset_0_0_20px_rgba(79,70,229,0.1)] backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1/2 bg-white/[0.02]"></div>
                        <span className="text-2xl sm:text-3xl font-bold text-white font-poppins relative z-10">
                          {item.value.toString().padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-[9px] text-slate-400 font-bold tracking-widest mt-2 sm:mt-3 uppercase">{item.label}</span>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="text-lg sm:text-2xl font-bold text-indigo-500/40 mb-5 sm:mb-6">:</div>
                    )}
                  </Fragment>
                ))}
              </div>
              <p className="text-[11px] font-bold text-indigo-400 mt-5 tracking-[0.05em] text-center lg:text-left">
                <span className="text-slate-600 font-medium">Opening match —</span> June 11, 2026 • USA vs Mexico
              </p>
            </div>

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
            <div
              className="relative w-full max-w-[600px] mb-8"
            >
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
                {/* Glowing border effect using a gradient wrapper */}
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-80 blur-[2px] -z-10"></div>
                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500"></div>

                {/* Screen content */}
                <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-[#0a0f1c]">
                  {/* Mac Window Dots */}
                  <div className="absolute top-3 left-3 flex space-x-1.5 z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border border-black/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border border-black/10"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-black/10"></div>
                  </div>

                  {/* Dynamic Stadium Image */}
                  <Image
                    src="/iptv-world-cup-hero.webp"
                    alt="World Cup Stadium"
                    fill
                    priority
                    unoptimized
                    quality={70}
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                  />

                  {/* Overlay Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 via-transparent to-black/30 pointer-events-none"></div>

                  {/* Fake LIVE badges inside screen */}
                  <div className="absolute top-1/2 left-[15%] -translate-y-1/2 px-4 py-1.5 bg-blue-600/60 backdrop-blur-md rounded border border-white/20 shadow-[0_0_15px_rgba(37,99,235,0.5)] hidden sm:block">
                    <span className="text-white font-bold tracking-widest text-[10px]">LIVE</span>
                  </div>
                  <div className="absolute top-1/2 right-[15%] -translate-y-1/2 px-4 py-1.5 bg-blue-600/60 backdrop-blur-md rounded border border-white/20 shadow-[0_0_15px_rgba(37,99,235,0.5)] hidden sm:block">
                    <span className="text-white font-bold tracking-widest text-[10px]">LIVE</span>
                  </div>
                </div>

                {/* TV Stand */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/4 h-4 bg-[#111827] border-x border-b border-white/10 rounded-b-xl flex flex-col items-center">
                  <div className="w-3/4 h-[1px] bg-indigo-500/50 mt-auto mb-1 blur-[1px]"></div>
                </div>
              </div>
            </div>

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
