"use client"
import { motion } from 'framer-motion';
import { Smartphone, Monitor, HardDrive, Coffee, Users, ShieldCheck, Shield } from 'lucide-react';
import { useState, useCallback, useMemo } from 'react';
import OrderModal from '../ui/OrderModal';
import PricingCard from './PricingCard';

const PLANS = [
  {
    id: "3-months",
    name: "3 MONTHS",
    basePrice: 35,
    months: 3,
    popular: false,
    saveTag: null,
    highlightTag: "+ Premium Access",
    highlightSub: "50K+ channels & VODs",
  },
  {
    id: "1-year",
    name: "1 YEAR",
    basePrice: 69,
    months: 12,
    popular: true,
    saveTag: "SAVE 50%",
    highlightTag: "+ Maximum Savings",
    highlightSub: "Best price per month",
  },
  {
    id: "6-months",
    name: "6 MONTHS",
    basePrice: 49,
    months: 6,
    popular: false,
    saveTag: "SAVE 30%",
    highlightTag: "+ Best Value for World Cup",
    highlightSub: "Full season + beyond",
  }
];

const FEATURES = [
  "50,000+ Live Channels worldwide",
  "200,000+ Movies & Series on demand",
  "All 104 World Cup 2026 matches live",
  "HD, Full HD & 4K quality",
  "Anti-freeze & buffer-free servers",
  "Smart TV, Android, iOS, PC & more",
  "24/7 customer support"
];

const DEVICE_ICONS = [
  { num: 1, icon: Smartphone, label: "1 DEVICE" },
  { num: 2, icon: Monitor, label: "2 DEVICES" },
  { num: 3, icon: HardDrive, label: "3 DEVICES" },
  { num: 4, icon: Coffee, label: "4 DEVICES" },
  { num: 5, icon: Users, label: "5 DEVICES" },
];

export default function PricingSection() {
  const [devices, setDevices] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: number} | null>(null);

  const handleSelectPlan = useCallback((plan: any, price: number) => {
    setSelectedPlan({ name: plan.name, price });
    setIsModalOpen(true);
  }, []);

  return (
    <section id="pricing" className="py-24 relative z-10 overflow-hidden bg-[#060814]">
      {/* Optimized Background Gradient */}
      <div className="absolute top-0 inset-x-0 h-[1000px] w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#060814] to-transparent pointer-events-none transform-gpu"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex py-1 px-4 rounded-full border border-indigo-500/30 bg-indigo-950/40 mb-6 backdrop-blur-sm"
          >
            <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-[0.2em]">PREMIUM IPTV PLANS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-poppins tracking-tight uppercase leading-[1.1]"
          >
            <span className="text-white block">CHOOSE YOUR</span>
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(147,51,234,0.3)] block">WORLD CUP PLAN</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Premium access to 50,000+ live channels & 200,000+ VODs. All 104 World Cup 2026 matches live in 4K.
          </motion.p>
        </div>

        {/* DEVICE SELECTOR */}
        <div className="mb-20">
          <div className="flex justify-center items-center mb-4 space-x-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">NUMBER OF CONNECTIONS</span>
            <span className="text-[9px] font-bold text-indigo-300 uppercase tracking-widest bg-indigo-900/30 px-2 py-0.5 rounded border border-indigo-500/20">SELECT DEVICES</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto" role="radiogroup" aria-label="Select number of devices">
            {DEVICE_ICONS.map((dev) => {
              const isActive = devices === dev.num;
              const Icon = dev.icon;
              return (
                <button
                  key={dev.num}
                  onClick={() => setDevices(dev.num)}
                  aria-label={`${dev.num} device${dev.num > 1 ? 's' : ''} selection`}
                  aria-checked={isActive}
                  role="radio"
                  className={`relative flex flex-col items-center justify-center w-[90px] h-[90px] sm:w-[110px] sm:h-[100px] rounded-xl transition-all duration-300 transform-gpu ${
                    isActive 
                      ? "bg-indigo-950/60 border border-purple-500/80 shadow-[0_0_30px_rgba(147,51,234,0.3)]" 
                      : "bg-[#0c0f1c]/80 border border-white/5 hover:border-white/20 hover:bg-[#111827]"
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-2 ${isActive ? "text-purple-400" : "text-slate-400"}`} strokeWidth={1.5} aria-hidden="true" />
                  <span className={`text-[10px] font-bold tracking-widest ${isActive ? "text-purple-300" : "text-slate-500"}`}>
                    {dev.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-end max-w-6xl mx-auto mb-16">
          {PLANS.map((plan, i) => {
            const totalPrice = plan.basePrice * devices;
            const monthlyPrice = (totalPrice / plan.months).toFixed(2);

            return (
              <PricingCard 
                key={plan.id}
                plan={plan}
                totalPrice={totalPrice}
                monthlyPrice={monthlyPrice}
                devices={devices}
                features={FEATURES}
                onSelect={handleSelectPlan}
                index={i}
              />
            );
          })}
        </div>

        {/* EXTRA ELEMENTS BELOW */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-center space-y-12 max-w-4xl mx-auto"
        >
          {/* Payment Methods */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 w-full mb-8" aria-label="Supported Payment Methods">
            <div className="flex items-center space-x-2 text-slate-300 bg-[#0c0f1c]/80 border border-white/10 px-5 py-2.5 rounded-xl backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.05)] hover:border-blue-500/30 transition-colors cursor-default">
              <span className="font-black text-blue-500 italic text-lg leading-none tracking-tighter">PayPal</span>
            </div>
            
            <div className="flex items-center space-x-3 text-slate-300 bg-[#0c0f1c]/80 border border-white/10 px-5 py-2.5 rounded-xl backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0.05)] hover:border-green-500/30 transition-colors cursor-default">
              <div className="flex -space-x-1.5" aria-hidden="true">
                <div className="w-5 h-5 rounded-full bg-[#F7931A] flex items-center justify-center border border-[#0c0f1c] z-10 shadow-sm">
                  <span className="text-[10px] font-bold text-white font-serif">₿</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-[#26A17B] flex items-center justify-center border border-[#0c0f1c] z-0 shadow-sm">
                  <span className="text-[9px] font-bold text-white">₮</span>
                </div>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider">Crypto</span>
            </div>

            <div className="flex items-center space-x-3 text-slate-300 bg-[#0c0f1c]/80 border border-white/10 px-5 py-2.5 rounded-xl backdrop-blur-sm shadow-[0_0_15px_rgba(249,115,22,0.05)] hover:border-orange-500/30 transition-colors cursor-default">
              <div className="flex space-x-1.5 items-center" aria-hidden="true">
                <div className="relative w-6 h-4 flex items-center justify-center">
                  <div className="absolute left-0 w-4 h-4 rounded-full bg-[#EB001B] opacity-90 mix-blend-screen"></div>
                  <div className="absolute right-0 w-4 h-4 rounded-full bg-[#F79E1B] opacity-90 mix-blend-screen"></div>
                </div>
                <div className="w-6 h-4 rounded bg-[#1A1F71] flex items-center justify-center font-bold text-white text-[7px] italic">VISA</div>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider">Cards</span>
            </div>

            <div className="flex items-center space-x-2 text-slate-400 bg-green-500/5 border border-green-500/10 px-4 py-2.5 rounded-xl backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-green-400" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-green-500/80">Secure Checkout</span>
            </div>
          </div>

          <div className="w-full max-w-lg bg-[#0b1a13]/80 border border-green-500/20 backdrop-blur-md rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 shadow-[0_0_30px_rgba(34,197,94,0.05)]">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center shrink-0 border border-green-500/20">
              <Shield className="w-6 h-6 text-green-400" aria-hidden="true" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-white font-bold tracking-wide mb-1 text-base">Premium Quality Guaranteed</h3>
              <p className="text-xs text-green-500/70 font-medium">100% Anti-freeze Technology • Ultra Fast Servers</p>
            </div>
          </div>
        </motion.div>

      </div>

      <OrderModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlan?.name || ''}
        devices={devices}
        totalPrice={selectedPlan?.price || 0}
      />
    </section>
  );
}

