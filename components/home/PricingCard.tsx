"use client"
import { memo } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

interface PricingCardProps {
  plan: any;
  totalPrice: number;
  monthlyPrice: string;
  devices: number;
  features: string[];
  onSelect: (plan: any, price: number) => void;
  index: number;
}

const PricingCard = memo(({ plan, totalPrice, monthlyPrice, devices, features, onSelect, index }: PricingCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col glass-panel w-full transition-all duration-500 group transform-gpu ${
        plan.popular 
          ? "rounded-2xl p-6 sm:p-8 border-purple-500/50 bg-[#0A0F1C]/90 shadow-[0_0_50px_rgba(147,51,234,0.15)] z-20 pb-10" 
          : "rounded-[1.2rem] p-6 sm:p-8 border-white/10 bg-[#0B0F19]/80 hover:border-white/20 z-10 lg:mb-4 lg:scale-[0.95] hover:scale-[0.98]"
      }`}
    >
      {/* Popular Glow Background */}
      {plan.popular && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent rounded-2xl pointer-events-none"></div>
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-600/20 blur-[50px] pointer-events-none rounded-full"></div>
        </>
      )}

      {/* Top Tags row */}
      <div className="flex justify-between items-start mb-6 h-8">
        {plan.popular ? (
          <div className="bg-purple-600 text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(147,51,234,0.5)] flex items-center">
            <Zap className="w-3 h-3 mr-1" fill="currentColor" /> MOST REQUESTED
          </div>
        ) : (
          <h3 className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">{plan.name}</h3>
        )}

        {plan.saveTag && (
          <div className="bg-green-500/10 border border-green-500/30 text-green-500 px-3 py-1 rounded-full text-[9px] font-bold tracking-widest">
            {plan.saveTag}
          </div>
        )}
      </div>

      {/* Price Display */}
      {plan.popular && <h3 className="text-[10px] font-bold tracking-widest text-slate-500 mb-2 uppercase">{plan.name}</h3>}
      
      <div className="mb-4">
        <div className="flex items-start text-white mb-2 tabular-nums">
          <span className="text-xl font-bold text-slate-500 mt-2 mr-1">$</span>
          <span className="text-6xl sm:text-7xl font-bold font-poppins tracking-tighter leading-none">{totalPrice}</span>
        </div>
        <div className="text-xs text-slate-400 font-medium tracking-wide">
          {plan.months} {plan.months === 1 ? 'month' : 'months'} - {devices} {devices === 1 ? 'connection' : 'connections'}
        </div>
        <div className="text-sm font-bold text-cyan-400 mt-1 tabular-nums">
          ${monthlyPrice} / month
        </div>
      </div>

      {/* Feature Highlight Bar */}
      <div className="bg-[#0b1a13] border border-green-500/20 rounded-lg p-3 mb-8 flex justify-between items-center group-hover:border-green-500/40 transition-colors">
        <span className="text-[11px] font-bold text-green-400">{plan.highlightTag}</span>
        <span className="text-[10px] tracking-wide font-medium text-green-500/70">{plan.highlightSub}</span>
      </div>

      {/* Separator */}
      <div className="flex items-center space-x-4 mb-6">
        <span className="text-[9px] font-bold text-slate-600 tracking-widest uppercase whitespace-nowrap">WHAT'S INCLUDED</span>
        <div className="h-[1px] w-full bg-white/5"></div>
      </div>

      {/* Features List */}
      <div className="space-y-4 mb-10 flex-grow">
        {features.map((feat, idx) => (
          <div key={idx} className="flex items-start">
            <Check className="w-4 h-4 text-green-500 mr-3 shrink-0 mt-0.5" strokeWidth={3} />
            <span className="text-xs font-medium text-slate-300 leading-relaxed">{feat}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button 
        onClick={() => onSelect(plan, totalPrice)}
        aria-label={`Get Started with ${plan.name} plan for $${totalPrice}`}
        className={`group relative overflow-hidden w-full py-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center hover:-translate-y-1 ${
          plan.popular 
            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(147,51,234,0.4)] hover:shadow-[0_0_40px_rgba(147,51,234,0.6)]" 
            : "bg-[#1e1b4b] border border-indigo-500/30 text-white shadow-lg hover:border-indigo-400 hover:shadow-[0_0_25px_rgba(79,70,229,0.2)]"
        }`}
      >
        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 ${plan.popular ? 'bg-white/20' : 'bg-white/5'}`}></div>
        <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">GET STARTED</span>
      </button>
    </motion.div>
  );
});

PricingCard.displayName = "PricingCard";
export default PricingCard;
