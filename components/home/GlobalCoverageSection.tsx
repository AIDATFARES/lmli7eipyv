"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';

type Region = 'ALL' | 'EUROPE' | 'MENA' | 'AMERICAS' | 'ASIA' | 'AFRICA';

interface Country {
  name: string;
  code: string;
  region: Region;
}

const ALL_COUNTRIES: Country[] = [
  // EUROPE (From Mockup)
  { name: 'United Kingdom', code: 'gb', region: 'EUROPE' },
  { name: 'France', code: 'fr', region: 'EUROPE' },
  { name: 'Germany', code: 'de', region: 'EUROPE' },
  { name: 'Spain', code: 'es', region: 'EUROPE' },
  { name: 'Italy', code: 'it', region: 'EUROPE' },
  { name: 'Portugal', code: 'pt', region: 'EUROPE' },
  { name: 'Netherlands', code: 'nl', region: 'EUROPE' },
  { name: 'Belgium', code: 'be', region: 'EUROPE' },
  { name: 'Switzerland', code: 'ch', region: 'EUROPE' },
  { name: 'Austria', code: 'at', region: 'EUROPE' },
  { name: 'Sweden', code: 'se', region: 'EUROPE' },
  { name: 'Norway', code: 'no', region: 'EUROPE' },
  { name: 'Denmark', code: 'dk', region: 'EUROPE' },
  { name: 'Finland', code: 'fi', region: 'EUROPE' },
  { name: 'Ireland', code: 'ie', region: 'EUROPE' },
  { name: 'Poland', code: 'pl', region: 'EUROPE' },
  { name: 'Romania', code: 'ro', region: 'EUROPE' },
  { name: 'Czech Republic', code: 'cz', region: 'EUROPE' },
  { name: 'Hungary', code: 'hu', region: 'EUROPE' },
  { name: 'Greece', code: 'gr', region: 'EUROPE' },
  { name: 'Serbia', code: 'rs', region: 'EUROPE' },
  { name: 'Croatia', code: 'hr', region: 'EUROPE' },
  { name: 'Slovakia', code: 'sk', region: 'EUROPE' },
  { name: 'Bulgaria', code: 'bg', region: 'EUROPE' },
  
  // MENA
  { name: 'Saudi Arabia', code: 'sa', region: 'MENA' },
  { name: 'UAE', code: 'ae', region: 'MENA' },
  { name: 'Egypt', code: 'eg', region: 'MENA' },
  { name: 'Morocco', code: 'ma', region: 'MENA' },
  
  // AMERICAS
  { name: 'USA', code: 'us', region: 'AMERICAS' },
  { name: 'Canada', code: 'ca', region: 'AMERICAS' },
  { name: 'Brazil', code: 'br', region: 'AMERICAS' },
  { name: 'Argentina', code: 'ar', region: 'AMERICAS' },
  { name: 'Mexico', code: 'mx', region: 'AMERICAS' },
  
  // ASIA
  { name: 'Japan', code: 'jp', region: 'ASIA' },
  { name: 'South Korea', code: 'kr', region: 'ASIA' },
  { name: 'India', code: 'in', region: 'ASIA' },
  { name: 'Australia', code: 'au', region: 'ASIA' }, // Grouped for layout

  // AFRICA
  { name: 'South Africa', code: 'za', region: 'AFRICA' },
  { name: 'Nigeria', code: 'ng', region: 'AFRICA' },
  { name: 'Kenya', code: 'ke', region: 'AFRICA' }
];

const REGIONS: Region[] = ['ALL', 'EUROPE', 'MENA', 'AMERICAS', 'ASIA', 'AFRICA'];

export default function GlobalCoverageSection() {
  const [activeRegion, setActiveRegion] = useState<Region>('ALL');
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter logic
  const filteredCountries = ALL_COUNTRIES.filter(c => activeRegion === 'ALL' || c.region === activeRegion);
  const displayLimit = isExpanded ? filteredCountries.length : 24;
  const visibleCountries = filteredCountries.slice(0, displayLimit);

  // Marquee Double array for infinite scroll
  const marqueeCountries = [...ALL_COUNTRIES, ...ALL_COUNTRIES];

  return (
    <section className="pt-0 pb-0 relative z-10 bg-[#060814] overflow-hidden">
      
      {/* Infinite Top Marquee */}
      <div className="relative w-full border-b border-white/5 bg-[#080a15] overflow-hidden py-3 mb-20">
        {/* Gradient Fades for Marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080a15] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080a15] to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-[max-content] animate-marquee-fast hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
          {marqueeCountries.map((country, idx) => (
            <div key={`top-${country.code}-${idx}`} className="flex items-center space-x-2 px-6">
              <img 
                src={`https://flagcdn.com/w40/${country.code}.png`} 
                alt={country.name} 
                loading="lazy"
                width={16} height={12}
                className="w-4 h-3 rounded-[2px] opacity-70"
              />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">
                {country.name}
              </span>
              <span className="text-slate-800 px-2">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse,rgba(79,70,229,0.08)_0%,transparent_70%)] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 mb-16">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full border border-indigo-500/30 bg-[#120b29] mb-6"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">GLOBAL COVERAGE</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-poppins uppercase tracking-tight mb-4"
          >
            <span className="text-white block mb-1">AVAILABLE IN</span>
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text block">150+ COUNTRIES</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          >
            Our IPTV service works worldwide. Watch local channels, international sports and all <strong className="text-slate-200">104 World Cup 2026 matches</strong> — no matter where you are.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {REGIONS.map((region) => (
            <button
              key={region}
              onClick={() => { setActiveRegion(region); setIsExpanded(false); }}
              className={`px-5 py-2 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeRegion === region
                  ? 'bg-indigo-600/20 text-indigo-300 border-indigo-500/50 shadow-[0_0_15px_rgba(79,70,229,0.2)]'
                  : 'bg-transparent text-slate-400 border-white/5 hover:border-white/10 hover:text-slate-200'
              }`}
            >
              {region === 'ALL' && activeRegion === 'ALL' && <Globe className="w-3 h-3 inline mr-2 text-indigo-400 mb-0.5" />}
              {region}
            </button>
          ))}
        </motion.div>

        {/* Country Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8"
        >
          <AnimatePresence>
            {visibleCountries.map((country, idx) => (
              <motion.div
                key={country.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0c0e1a]/80 border border-white/5 hover:border-indigo-500/30 hover:bg-[#12162a] rounded-xl px-3 py-2.5 flex items-center gap-3 transition-colors cursor-default group shadow-sm"
              >
                <img 
                  src={`https://flagcdn.com/w40/${country.code}.png`} 
                  alt={country.name} 
                  loading="lazy"
                  width={20} height={15}
                  className="w-5 h-auto rounded-[2px] opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-[11px] font-semibold text-slate-300 group-hover:text-white truncate">
                  {country.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show Expand Button if needed */}
        {filteredCountries.length > 24 && !isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-8"
          >
            <button 
              onClick={() => setIsExpanded(true)}
              className="flex items-center space-x-2 px-6 py-2 rounded-full border border-white/10 bg-[#0c0e1a] text-xs font-bold text-slate-400 hover:text-white hover:border-white/20 transition-colors"
            >
              <span>SHOW ALL COUNTRIES</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Infinite Bottom Marquee */}
      <div className="relative w-full border-t border-white/5 bg-[#080a15] overflow-hidden py-3">
        {/* Gradient Fades for Marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080a15] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080a15] to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-[max-content] animate-marquee-fast hover:[animation-play-state:paused]">
          {marqueeCountries.map((country, idx) => (
            <div key={`${country.code}-${idx}`} className="flex items-center space-x-2 px-6">
              <img 
                src={`https://flagcdn.com/w40/${country.code}.png`} 
                alt={country.name} 
                loading="lazy"
                width={16} height={12}
                className="w-4 h-3 rounded-[2px] opacity-70"
              />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">
                {country.name}
              </span>
              <span className="text-slate-800 px-2">•</span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
