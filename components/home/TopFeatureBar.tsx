"use client"
import { motion } from 'framer-motion';
import { Snowflake, Headphones, Tag } from 'lucide-react';

export default function TopFeatureBar() {
  const features = [
    {
      icon: <div className="w-8 h-8 rounded bg-[#2D1B62] text-purple-300 font-bold text-[10px] flex items-center justify-center border border-purple-500/30">4K</div>,
      title: "HD & 4K Quality",
      desc: "Crystal clear streaming experience."
    },
    {
      icon: <div className="w-8 h-8 rounded bg-blue-900/40 text-blue-400 flex items-center justify-center border border-blue-500/30"><Snowflake className="w-4 h-4" /></div>,
      title: "Anti-Freeze Technology",
      desc: "Buffer-free streaming with strong servers."
    },
    {
      icon: <div className="w-8 h-8 rounded bg-green-900/40 text-green-400 flex items-center justify-center border border-green-500/30"><Headphones className="w-4 h-4" /></div>,
      title: "24/7 Support",
      desc: "Our support team is always here for you."
    },
    {
      icon: <div className="w-8 h-8 rounded bg-orange-900/40 text-orange-400 flex items-center justify-center border border-orange-500/30"><Tag className="w-4 h-4" /></div>,
      title: "Affordable Prices",
      desc: "Best plans with unbeatable prices."
    }
  ];

  return (
    <section className="pt-2 pb-12 bg-[#060814] relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center bg-[#0c0e1a]/80 backdrop-blur-md rounded-2xl border border-indigo-500/20 divide-y md:divide-y-0 md:divide-x divide-indigo-500/10 shadow-[0_0_30px_rgba(79,70,229,0.1)] py-2">
            {features.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center space-x-4 p-4 w-full group hover:bg-indigo-500/5 transition-colors cursor-default relative overflow-hidden"
              >
                {/* Subtle hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/5 to-transparent -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
                
                <div className="shrink-0 transition-transform group-hover:scale-110 duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white text-xs font-bold tracking-wide mb-0.5">{item.title}</h4>
                  <p className="text-slate-500 text-[10px] leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
