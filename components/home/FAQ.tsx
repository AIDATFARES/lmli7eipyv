"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, MessageSquare, Mail } from 'lucide-react';

const faqs = [
  { 
    question: "How fast is activation?", 
    answer: "Activation is instantaneous after payment. You will be able to start watching within minutes." 
  },
  { 
    question: "Will it work in my country?", 
    answer: "Yes, our service is available worldwide. As long as you have a stable internet connection, you can enjoy our content from anywhere." 
  },
  { 
    question: "Which devices are supported?", 
    answer: "We support all modern devices: Smart TV, Android Box, Mag, Firestick, PC, Smartphones, and Tablets." 
  },
  { 
    question: "Do you provide customer support?", 
    answer: "Yes, our technical support team is available 24/7 to assist you with installation or any technical issues." 
  },
  { 
    question: "What internet speed is required?", 
    answer: "For a smooth HD experience, we recommend at least 15 Mbps. For 4K, 25 Mbps or more is ideal." 
  },
  { 
    question: "Can I use my subscription on multiple devices?", 
    answer: "Yes, we offer plans that support up to 4 simultaneous connections." 
  },
  { 
    question: "What is Xtream Codes API?", 
    answer: "It is a simplified connection method using a username, password, and server URL, which is more stable than traditional M3U links." 
  },
  { 
    question: "Can I watch the 2026 World Cup matches?", 
    answer: "Absolutely! We will broadcast all 104 matches live, with optimized servers to ensure zero lag." 
  },
  { 
    question: "Do you offer a free trial?", 
    answer: "Yes, you can request a 24-hour trial to test the quality and stability of our servers." 
  },
  { 
    question: "How can I renew my subscription?", 
    answer: "Simply contact us via WhatsApp or select a new plan on our pricing page." 
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative z-10 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* SECTION TITLE */}
        <div className="mb-10 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">FAQ</h2>
        </div>

        {/* FAQ CONTAINER */}
        <div className="flex flex-col gap-3 mb-20">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              {/* ACCORDION ITEMS (CORE DESIGN) */}
              <button 
                id={`faq-btn-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="w-full flex items-center gap-4 px-6 py-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-xl transition-all duration-300 group cursor-pointer text-left"
              >
                {/* Left Arrow Icon */}
                <ChevronRight 
                  className={`w-5 h-5 text-white/50 transition-transform duration-300 ease-in-out ${openIndex === index ? 'rotate-90 text-white' : ''}`} 
                  aria-hidden="true"
                />
                {/* Question Text */}
                <span className="font-semibold text-white md:text-lg">{faq.question}</span>
              </button>
              
              {/* Answer Content */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div 
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-14 py-4 text-slate-400 text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* STILL HAVE A QUESTION CARD */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-[32px] blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative glass-panel rounded-[32px] p-8 md:p-12 overflow-hidden bg-[#0a0f1d]/90 border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left max-w-xl">
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
                <button
                  onClick={() => window.open('https://wa.me/213554246175', '_blank')}
                  aria-label="Ask a question on WhatsApp (opens in new tab)"
                  className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-[13px] tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                  <MessageSquare className="w-5 h-5 fill-white text-white relative z-10 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">ASK ON WHATSAPP</span>
                </button>
                <a
                  href="mailto:support@worldcupiptv.us"
                  aria-label="Send an email to support"
                  className="group relative overflow-hidden flex items-center justify-center gap-3 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold text-[13px] tracking-widest transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                  <Mail className="w-5 h-5 text-white relative z-10 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">SEND EMAIL</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


