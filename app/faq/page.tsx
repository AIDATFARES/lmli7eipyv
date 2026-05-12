"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  HelpCircle, 
  Tv, 
  ShieldCheck, 
  Server, 
  Smartphone, 
  CreditCard, 
  Gift, 
  Calendar, 
  Monitor, 
  Zap, 
  Users, 
  Globe, 
  Trophy,
  LayoutGrid,
  Wifi,
  Apple,
  MessageSquare,
  Mail
} from 'lucide-react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

type Category = 'ALL' | 'SERVICE' | 'SETUP' | 'PAYMENT' | 'WORLD CUP' | 'DEVICES';

const categories: Category[] = ['ALL', 'SERVICE', 'SETUP', 'PAYMENT', 'WORLD CUP', 'DEVICES'];

const faqData = [
  // COLUMN 1
  {
    category: 'SERVICE',
    icon: <Tv className="w-5 h-5 text-purple-400" />,
    question: "What is IPTV and how does it work?",
    answer: "IPTV (Internet Protocol Television) delivers television content via the internet rather than traditional cable or satellite. Our service streams high-quality live channels and VOD directly to your device using your internet connection."
  },
  {
    category: 'SERVICE',
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    question: "Is my subscription private and secure?",
    answer: "Yes, we use advanced encryption and secure protocols to ensure your data and streaming activity remain private. We do not store any sensitive personal information beyond what is necessary for your subscription."
  },
  {
    category: 'SERVICE',
    icon: <Server className="w-5 h-5 text-blue-400" />,
    question: "What is your server uptime guarantee?",
    answer: "We guarantee a 99.9% server uptime. Our infrastructure is distributed across global data centers to ensure minimal latency and zero buffering even during peak events."
  },
  {
    category: 'SETUP',
    icon: <Smartphone className="w-5 h-5 text-blue-400" />,
    question: "Which IPTV apps do you recommend?",
    answer: "For Android, we recommend IPTV Smarters Pro or TiviMate. For iOS/Apple TV, we recommend iPlayTV or GSE Smart IPTV. For PC, VLC Media Player or MyIPTV Player are excellent choices."
  },
  {
    category: 'PAYMENT',
    icon: <CreditCard className="w-5 h-5 text-amber-400" />,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards (Visa, Mastercard, AMEX), PayPal, and various cryptocurrencies including Bitcoin and Ethereum for maximum privacy."
  },
  {
    category: 'PAYMENT',
    icon: <Gift className="w-5 h-5 text-purple-400" />,
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 24-hour trial for a small fee of $1.99. This allows you to test our full channel lineup and VOD library on your specific setup before committing to a plan."
  },
  {
    category: 'WORLD CUP',
    icon: <Calendar className="w-5 h-5 text-pink-500" />,
    question: "When does the World Cup 2026 start?",
    answer: "The FIFA World Cup 2026 is scheduled to start on June 11, 2026. We will provide dedicated 4K channels for every single match of the tournament."
  },
  {
    category: 'DEVICES',
    icon: <Monitor className="w-5 h-5 text-purple-400" />,
    question: "Which devices are compatible with your service?",
    answer: "Our service works on virtually any device: Smart TVs (Samsung, LG, Sony), Firestick, Android Box, Mag, PC, Mac, Smartphones, and Tablets."
  },
  {
    category: 'DEVICES',
    icon: <Apple className="w-5 h-5 text-rose-500" />,
    question: "Does it work on iPhone and Apple TV?",
    answer: "Absolutely! Our service is fully compatible with iOS and tvOS. You can use popular apps like iPlayTV or IPTV Smarters from the App Store."
  },
  // COLUMN 2
  {
    category: 'SERVICE',
    icon: <LayoutGrid className="w-5 h-5 text-blue-400" />,
    question: "How many channels are included in the subscription?",
    answer: "Our Premium plan includes over 20,000 live channels from around the world, plus a massive library of 60,000+ movies and TV shows in 4K and Full HD."
  },
  {
    category: 'SERVICE',
    icon: <Wifi className="w-5 h-5 text-blue-400" />,
    question: "What internet speed do I need for 4K streaming?",
    answer: "For HD streaming, we recommend at least 15 Mbps. For 4K Ultra HD content, a stable connection of 25 Mbps or higher is recommended for the best experience."
  },
  {
    category: 'SETUP',
    icon: <Zap className="w-5 h-5 text-purple-400" />,
    question: "How do I activate my subscription after payment?",
    answer: "Activation is instant! Once your payment is confirmed, you'll receive your login credentials (M3U URL and EPG) via email within minutes. Follow our setup guides to get started."
  },
  {
    category: 'DEVICES',
    icon: <Users className="w-5 h-5 text-blue-400" />,
    question: "Can I use my subscription on multiple devices at the same time?",
    answer: "Yes, but it depends on your plan. Our standard plan allows 1 connection, but you can upgrade to our Family or Ultimate plans for up to 5 simultaneous connections."
  },
  {
    category: 'PAYMENT',
    icon: <HelpCircle className="w-5 h-5 text-blue-400" />,
    question: "Do you offer refunds if I am not satisfied?",
    answer: "Yes, we offer a 7-day money-back guarantee if you are not satisfied with the service quality. Please contact our support team to initiate the process."
  },
  {
    category: 'WORLD CUP',
    icon: <Trophy className="w-5 h-5 text-amber-500" />,
    question: "Will all 104 World Cup 2026 matches be available?",
    answer: "Yes! We will have dedicated channels for all 104 matches of the 2026 World Cup, including multiple commentary options and 4K HDR streams."
  },
  {
    category: 'SERVICE',
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    question: "Can I watch from outside the US, Mexico or Canada?",
    answer: "Yes, our service works globally. No matter where you are, you can access your subscription without any geo-restrictions or the need for a VPN."
  },
  {
    category: 'SETUP',
    icon: <Zap className="w-5 h-5 text-amber-500" />,
    question: "How do I set up on Amazon Fire Stick?",
    answer: "Setup on Firestick is easy. You can use the 'Downloader' app to install IPTV Smarters Pro or our custom NovaIPTV app. We provide a step-by-step video guide for this."
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqData.filter(faq => 
    activeCategory === 'ALL' || faq.category === activeCategory
  );

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <AnimatedBackground />
      
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black font-poppins text-white mb-6 tracking-tight uppercase">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Got a question? We have answered everything below. If you still need help, 
            our team is on <span className="text-emerald-400 font-semibold">WhatsApp 24/7</span> and replies in minutes.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-[10px] font-bold tracking-widest transition-all duration-300 border ${
                activeCategory === category 
                  ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                layout
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                <div className="bg-[#111827]/40 hover:bg-[#111827]/60 border border-white/5 rounded-2xl transition-all duration-300">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center gap-4 px-5 py-5 text-left"
                  >
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 shadow-inner flex-shrink-0">
                      {faq.icon}
                    </div>
                    <span className="flex-grow font-semibold text-white text-[13px] md:text-[14px] leading-snug">
                      {faq.question}
                    </span>
                    <div className={`p-1.5 rounded-full bg-white/5 border border-white/5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-slate-400 text-[13px] leading-relaxed ml-[52px]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Contact Section */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-[32px] blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative glass-panel rounded-[32px] p-8 md:p-12 overflow-hidden bg-[#0a0f1d]/90 border-white/10 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="max-w-xl">
                <div className="inline-flex p-3 bg-primary/10 rounded-2xl border border-primary/20 mb-6">
                  <MessageSquare className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-tighter italic">
                  STILL HAVE A <span className="text-primary not-italic">QUESTION?</span>
                </h3>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                  Our team is online 24/7 and responds in under 5 minutes on WhatsApp. 
                  No bots — real humans ready to help you right now.
                </p>
              </div>
              
              <div className="flex flex-col gap-3 w-full md:w-auto min-w-[240px]">
                <button onClick={() => window.open('https://wa.me/213554246175', '_blank')} className="flex items-center justify-center gap-3 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-[13px] tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95">
                  <MessageSquare className="w-5 h-5 fill-white text-white" />
                  ASK ON WHATSAPP
                </button>
                <button className="flex items-center justify-center gap-3 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-[13px] tracking-widest transition-all duration-300 active:scale-95">
                  <Mail className="w-5 h-5 text-white" />
                  SEND EMAIL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

