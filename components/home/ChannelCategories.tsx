"use client"
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ChannelCategories() {
  const categories = [
    {
      id: "sports",
      title: "Sports",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=60&w=320",
      color: "from-blue-600/80 via-blue-900/40 to-[#0c0f1c]",
      borderGlow: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      isPrimary: true
    },
    {
      id: "movies",
      title: "Movies",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=60&w=320",
      color: "from-purple-600/60 via-purple-900/40 to-[#0c0f1c]",
      borderGlow: "group-hover:border-purple-500/40 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
      isPrimary: false
    },
    {
      id: "news",
      title: "News",
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=60&w=320",
      color: "from-red-600/60 via-red-900/40 to-[#0c0f1c]",
      borderGlow: "group-hover:border-red-500/40 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]",
      isPrimary: false
    },
    {
      id: "kids",
      title: "Kids",
      image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&q=60&w=320",
      color: "from-yellow-500/60 via-yellow-900/40 to-[#0c0f1c]",
      borderGlow: "group-hover:border-yellow-500/40 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
      isPrimary: false
    },
    {
      id: "documentary",
      title: "Documentary",
      image: "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?auto=format&fit=crop&q=60&w=320",
      color: "from-emerald-600/60 via-emerald-900/40 to-[#0c0f1c]",
      borderGlow: "group-hover:border-emerald-500/40 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
      isPrimary: false
    },
    {
      id: "entertainment",
      title: "Entertainment",
      image: "https://images.unsplash.com/photo-1603190287605-e6ade3cb4a00?auto=format&fit=crop&q=60&w=320",
      color: "from-pink-600/60 via-pink-900/40 to-[#0c0f1c]",
      borderGlow: "group-hover:border-pink-500/40 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]",
      isPrimary: false
    }
  ];

  return (
    <section className="pt-20 pb-4 relative z-10 bg-[#060814] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 space-y-4 sm:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-white font-poppins tracking-tight">Popular Channel Categories</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button className="text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-[#0c0e1a]/50 backdrop-blur-sm rounded-full px-4 py-1.5 font-medium text-[10px] flex items-center transition-all group shadow-sm tracking-wide">
              View All Channels <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform text-slate-400" />
            </button>
          </motion.div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer border border-white/5 transition-all duration-300 bg-[#0c0f1c] w-full h-28 lg:h-32 ${cat.borderGlow}`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-30 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:opacity-50" 
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-80 z-10 transition-opacity duration-300 group-hover:opacity-90`}></div>
              
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] z-10 group-hover:backdrop-blur-0 transition-all duration-300"></div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-4 z-20 flex flex-col justify-end h-full">
                <h3 className="font-bold font-poppins text-white tracking-widest uppercase text-[10px] lg:text-xs shadow-black drop-shadow-md transition-transform duration-300 group-hover:-translate-y-0.5">
                  {cat.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
