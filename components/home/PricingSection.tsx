"use client"
import { motion } from 'framer-motion';
import { Check, Smartphone, Monitor, HardDrive, Coffee, Users, ShieldCheck, Zap, Globe, Trophy, Shield } from 'lucide-react';
import { useState } from 'react';
import OrderModal from '../ui/OrderModal';

export default function PricingSection() {
  const [devices, setDevices] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{name: string, price: number} | null>(null);

  const plans = [
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

  // Utility to calculate dynamic price based on devices
  const getPrice = (basePrice: number) => {
    return basePrice * devices;
  };

  const getMonthlyPrice = (totalPrice: number, months: number) => {
    return (totalPrice / months).toFixed(2);
  };

  const deviceIcons = [
    { num: 1, icon: Smartphone, label: "1 DEVICE" },
    { num: 2, icon: Monitor, label: "2 DEVICES" },
    { num: 3, icon: HardDrive, label: "3 DEVICES" },
    { num: 4, icon: Coffee, label: "4 DEVICES" },
    { num: 5, icon: Users, label: "5 DEVICES" },
  ];

  const features = [
    "50,000+ Live Channels worldwide",
    "200,000+ Movies & Series on demand",
    "All 104 World Cup 2026 matches live",
    "HD, Full HD & 4K quality",
    "Anti-freeze & buffer-free servers",
    "Smart TV, Android, iOS, PC & more",
    "24/7 customer support"
  ];

  return (
    <section id="pricing" className="py-24 relative z-10 overflow-hidden bg-[#060814]">
      <div className="absolute top-0 inset-x-0 h-[1000px] w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#060814] to-transparent pointer-events-none"></div>

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
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {deviceIcons.map((dev) => {
              const isActive = devices === dev.num;
              const Icon = dev.icon;
              return (
                <button
                  key={dev.num}
                  onClick={() => setDevices(dev.num)}
                  className={`relative flex flex-col items-center justify-center w-[90px] h-[90px] sm:w-[110px] sm:h-[100px] rounded-xl transition-all duration-300 ${
                    isActive 
                      ? "bg-indigo-950/60 border border-purple-500/80 shadow-[0_0_30px_rgba(147,51,234,0.3)]" 
                      : "bg-[#0c0f1c]/80 border border-white/5 hover:border-white/20 hover:bg-[#111827]"
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-2 ${isActive ? "text-purple-400" : "text-slate-400"}`} strokeWidth={1.5} />
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
          {plans.map((plan, i) => {
            const totalPrice = getPrice(plan.basePrice);
            const monthlyPrice = getMonthlyPrice(totalPrice, plan.months);

            return (
              <motion.div 
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col glass-panel w-full transition-all duration-500 group ${
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
                    <div className="text-[10px] font-bold tracking-widest text-slate-500">{plan.name}</div>
                  )}

                  {plan.saveTag && (
                    <div className="bg-green-500/10 border border-green-500/30 text-green-500 px-3 py-1 rounded-full text-[9px] font-bold tracking-widest">
                      {plan.saveTag}
                    </div>
                  )}
                </div>

                {/* Price Display */}
                {plan.popular && <div className="text-[10px] font-bold tracking-widest text-slate-500 mb-2">{plan.name}</div>}
                
                <div className="mb-4">
                  <div className="flex items-start text-white mb-2">
                    <span className="text-xl font-bold text-slate-500 mt-2 mr-1">$</span>
                    <span className="text-6xl sm:text-7xl font-bold font-poppins tracking-tighter leading-none">{totalPrice}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium tracking-wide">
                    {plan.months} {plan.months === 1 ? 'month' : 'months'} - {devices} {devices === 1 ? 'connection' : 'connections'}
                  </div>
                  <div className="text-sm font-bold text-cyan-400 mt-1">
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
                  onClick={() => {
                    setSelectedPlan({ name: plan.name, price: totalPrice });
                    setIsModalOpen(true);
                  }}
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
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 w-full mb-8">
            {/* PayPal */}
            <div className="flex items-center space-x-2 text-slate-300 bg-[#0c0f1c]/80 border border-white/10 px-5 py-2.5 rounded-xl backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.05)] hover:border-blue-500/30 transition-colors">
              <span className="font-black text-blue-500 italic text-lg leading-none tracking-tighter">PayPal</span>
            </div>
            
            {/* Crypto */}
            <div className="flex items-center space-x-3 text-slate-300 bg-[#0c0f1c]/80 border border-white/10 px-5 py-2.5 rounded-xl backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0.05)] hover:border-green-500/30 transition-colors">
              <div className="flex -space-x-1.5">
                <div className="w-5 h-5 rounded-full bg-[#F7931A] flex items-center justify-center border border-[#0c0f1c] z-10 shadow-sm">
                  <span className="text-[10px] font-bold text-white font-serif">₿</span>
                </div>
                <div className="w-5 h-5 rounded-full bg-[#26A17B] flex items-center justify-center border border-[#0c0f1c] z-0 shadow-sm">
                  <span className="text-[9px] font-bold text-white">₮</span>
                </div>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider">Crypto</span>
            </div>

            {/* Credit Card */}
            <div className="flex items-center space-x-3 text-slate-300 bg-[#0c0f1c]/80 border border-white/10 px-5 py-2.5 rounded-xl backdrop-blur-sm shadow-[0_0_15px_rgba(249,115,22,0.05)] hover:border-orange-500/30 transition-colors">
              <div className="flex space-x-1.5 items-center">
                {/* Mastercard-like icon */}
                <div className="relative w-6 h-4 flex items-center justify-center">
                  <div className="absolute left-0 w-4 h-4 rounded-full bg-[#EB001B] opacity-90 mix-blend-screen"></div>
                  <div className="absolute right-0 w-4 h-4 rounded-full bg-[#F79E1B] opacity-90 mix-blend-screen"></div>
                </div>
                {/* Visa-like icon */}
                <div className="w-6 h-4 rounded bg-[#1A1F71] flex items-center justify-center font-bold text-white text-[7px] italic">VISA</div>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider">Cards</span>
            </div>

            {/* Secure Checkout */}
            <div className="flex items-center space-x-2 text-slate-400 bg-green-500/5 border border-green-500/10 px-4 py-2.5 rounded-xl backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-green-500/80">Secure Checkout</span>
            </div>
          </div>

          {/* Guarantee Box */}
          <div className="w-full max-w-lg bg-[#0b1a13]/80 border border-green-500/20 backdrop-blur-md rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 shadow-[0_0_30px_rgba(34,197,94,0.05)]">
            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center shrink-0 border border-green-500/20">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-white font-bold tracking-wide mb-1">Premium Quality Guaranteed</h4>
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
