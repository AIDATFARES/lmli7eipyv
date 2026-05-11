"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Tv, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
      scrolled ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
    )}>
      {/* Announcement Bar */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex items-center justify-center py-2 px-4 bg-[#0a061e] border-b border-indigo-900/30 text-xs sm:text-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-900/20 to-transparent pointer-events-none"></div>
            <div className="flex items-center space-x-2 text-slate-300 relative z-10 w-full justify-center text-center">
              <span><span className="mr-1">🏆</span> <span className="font-semibold text-white">World Cup 2026</span> <span className="mx-1 text-slate-500">—</span> 104 matches starting June 11</span>
              <span className="text-slate-500 mx-1 hidden sm:inline">•</span>
              <Link href="/pricing" className="hidden sm:flex items-center bg-indigo-900/40 hover:bg-indigo-900/60 border border-indigo-500/20 rounded-full px-3 py-1 text-indigo-300 font-medium transition-colors text-xs">
                <span className="mr-1 text-[10px]">🎯</span> GET EARLY ACCESS
              </Link>
            </div>

            {/* Mobile simplified text */}
            <Link href="/pricing" className="sm:hidden text-indigo-400 font-medium ml-2 shrink-0">
              Get Access
            </Link>

            <button
              onClick={() => setShowAnnouncement(false)}
              className="absolute right-4 text-slate-500 hover:text-white transition-colors"
            >
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <div className={cn("container mx-auto px-6 max-w-7xl transition-all duration-300", scrolled ? "py-4" : "py-6")}>
        <div className="flex items-center justify-between">

          <Link href="/" className="flex items-center space-x-4 group">
            {/* Logo Icon */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.3)] group-hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all shrink-0">
              <Tv className="text-white w-6 h-6" strokeWidth={2} />
            </div>

            {/* Logo Text Block */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-poppins font-bold text-xl tracking-tight text-white mb-0.5 relative transition-all">
                  IPTV <span className="text-indigo-400 font-bold group-hover:text-shadow-glow">WORLDCUP</span>
                </span>
                <span className="ml-3 hidden sm:flex items-center px-2 py-[2px] rounded-full bg-green-500/10 border border-green-500/20 text-[9px] font-bold text-green-500 tracking-wider">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse mr-1.5 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></span> LIVE
                </span>
              </div>
              <span className="text-[9px] font-medium tracking-[0.08em] text-slate-500 uppercase">
                4K STREAMING <span className="mx-1">•</span> 50,000+ CHANNELS
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/pricing" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Pricing</Link>
            <Link href="/how-it-works" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">How It Works</Link>
            <Link href="/contact" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Contact Support</Link>
            <Link href="/reviews" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Reviews</Link>
            <Link href="/faq" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">FAQ</Link>
            <Link href="/blog" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center">
              Blog <ExternalLink size={12} className="ml-1 opacity-70" />
            </Link>
            <Link href="/sports-news" className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center">
              Sports News <ExternalLink size={12} className="ml-1 opacity-70" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center">
            <Link href="/pricing" className="group relative overflow-hidden px-5 py-2.5 rounded-lg bg-[#1e1b4b]/80 border border-indigo-500/30 hover:bg-[#2e2b61]/80 hover:border-indigo-400/50 text-white text-sm font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(79,70,229,0.2)] hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] flex items-center hover:-translate-y-0.5">
              <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
              <span className="mr-2 relative z-10 transition-transform duration-300 group-hover:scale-110">🏆</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">GET STARTED</span>
            </Link>
          </div>

          <button className="lg:hidden text-white ml-auto" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full bg-[#0B0F19] border-b border-indigo-900/30 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white">Pricing</Link>
              <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white">How It Works</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white">Contact Support</Link>
              <Link href="/reviews" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white">Reviews</Link>
              <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white">FAQ</Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white flex items-center">
                Blog <ExternalLink size={12} className="ml-1 opacity-70" />
              </Link>
              <div className="pt-4 mt-2 border-t border-white/5">
                <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="w-full px-5 py-3 rounded-lg bg-[#1e1b4b] border border-indigo-500/30 text-white text-sm font-bold transition-all flex items-center justify-center">
                  <span className="mr-2">🏆</span> GET STARTED
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
