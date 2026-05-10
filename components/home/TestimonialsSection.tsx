"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MessageCircle, Trophy, Globe2, Repeat, CheckCircle2 } from "lucide-react";

const trustMetrics = [
  { icon: Star, value: "4.9 / 5.0", label: "Average Rating", glow: "rgba(250,204,21,0.2)", textColor: "text-yellow-400" },
  { icon: MessageCircle, value: "14K+", label: "Happy Customers", glow: "rgba(96,165,250,0.2)", textColor: "text-blue-400" },
  { icon: Trophy, value: "64", label: "Matches Streamed", glow: "rgba(167,139,250,0.2)", textColor: "text-purple-400" },
  { icon: Globe2, value: "80+", label: "Countries Supported", glow: "rgba(52,211,153,0.2)", textColor: "text-emerald-400" },
  { icon: Repeat, value: "94%", label: "Renewal Rate", glow: "rgba(244,114,182,0.2)", textColor: "text-pink-400" },
];

import { allReviews } from "@/lib/reviews";
import ReviewCard from "@/components/ui/ReviewCard";

const row1 = allReviews.slice(0, 8);
const marqueeRow1 = [...row1, ...row1];

const miniFeatures = [
  "Instant WhatsApp delivery",
  "Works on all devices",
  "99.9% uptime guaranteed",
  "24/7 support"
];

// Staggered variants for metrics
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative z-10 bg-[#060814] overflow-hidden">
      
      {/* Background Elements */}
      <div 
        className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none"
        style={{ backgroundSize: '40px 40px' }}
      ></div>
      
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-900/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] bg-indigo-900/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-16">
        
        {/* Top Header Area */}
        <div className="text-center mb-16 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 py-2 px-5 rounded-full border border-yellow-500/40 bg-yellow-900/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
          >
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-[11px] font-bold text-yellow-300 uppercase tracking-widest">
              VERIFIED — WORLD CUP QATAR 2022
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins uppercase tracking-tight mb-6 leading-tight max-w-4xl"
          >
            <span className="text-white block">REAL REVIEWS FROM</span>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text block mt-1 pb-1">
              QATAR 2022 SUBSCRIBERS
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Over 14,000 subscribers watched every match of the 2022 World Cup through our service. Here is what they experienced — <strong className="text-slate-200">and we are fully ready for 2026.</strong>
          </motion.p>
        </div>

        {/* Trust Metrics Strip */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6"
        >
          {trustMetrics.map((metric, idx) => (
            <motion.div 
              variants={itemVariants}
              key={idx}
              className="bg-[#0c0f1c]/80 backdrop-blur-md border border-white/5 hover:border-white/10 rounded-2xl p-6 text-center transition-all duration-300 group hover:-translate-y-1"
              style={{ boxShadow: `inset 0 0 20px ${metric.glow}` }}
            >
              <div className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-[#11162b] ${metric.textColor}`}>
                <metric.icon className="w-5 h-5" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-1 font-poppins">{metric.value}</h4>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Auto-scrolling Testimonials (Single-row Carousel) */}
      <div className="relative w-full max-w-[100vw] overflow-hidden -mx-4 md:mx-0 py-6">
        {/* Edge Fade Overlays */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#060814] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#060814] to-transparent z-10 pointer-events-none"></div>

        {/* Row 1: Left */}
        <div className="flex w-[max-content] animate-marquee hover:[animation-play-state:paused] gap-4 md:gap-6 px-4 md:px-0">
          {marqueeRow1.map((review, idx) => (
            <ReviewCard key={`row1-${idx}`} review={review} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Link href="#pricing" className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 rounded-full hover:scale-105 overflow-hidden font-poppins text-lg tracking-wide uppercase shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
             {/* Hover highlight */}
             <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             
             {/* Shine sweep */}
             <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
             
             <Trophy className="w-6 h-6 mr-3 text-yellow-300" />
             <span>Get Ready For 2026</span>
          </Link>

          {/* Mini Features */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-8">
            {miniFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-center text-slate-400 opacity-80 hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-4 h-4 mr-2 text-purple-400" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
