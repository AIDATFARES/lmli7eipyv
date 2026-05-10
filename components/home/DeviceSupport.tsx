"use client"
import { Monitor, Smartphone, Tv, CirclePlay, Server, Airplay, AppWindow } from 'lucide-react';

const deviceList = [
  { name: 'Android TV Box', icon: Tv },
  { name: 'GSE Smart IPTV', icon: CirclePlay },
  { name: 'Smart TV', icon: Tv },
  { name: 'iPhone', icon: Smartphone },
  { name: 'Android Phone', icon: Smartphone },
  { name: 'iPad', icon: Smartphone },
  { name: 'Windows PC', icon: AppWindow },
  { name: 'MacBook', icon: Monitor },
  { name: 'Amazon Fire Stick', icon: Server },
  { name: 'Apple TV', icon: Airplay },
  { name: 'Roku', icon: CirclePlay },
  { name: 'Samsung Tizen', icon: Tv },
];

// Duplicate the list to create a seamless infinite loop
const marqueeItems = [...deviceList, ...deviceList];

export default function DeviceSupport() {
  return (
    <section className="py-6 relative z-10 bg-[#060814] overflow-hidden border-y border-white/[0.02]">
      {/* Optional Fade Edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#060814] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#060814] to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-[max-content] animate-marquee hover:[animation-play-state:paused] items-center gap-6">
        {marqueeItems.map((dev, i) => (
          <div key={i} className="flex items-center gap-6 shrink-0">
            {/* Pill */}
            <div className="flex items-center px-4 py-2 bg-[#0c0f1c] hover:bg-[#1a1c2e] border border-indigo-500/20 rounded-full transition-colors cursor-pointer group shadow-[0_0_15px_rgba(79,70,229,0.05)]">
              <dev.icon className="w-3.5 h-3.5 text-[#8b5cf6] mr-2.5 group-hover:text-[#a78bfa] transition-colors" />
              <span className="text-[11px] font-bold text-slate-300 tracking-wide">{dev.name}</span>
            </div>
            
            {/* Dot Separator (hide on very last item technically not needed since infinite loop hides seam) */}
            <div className="w-1 h-1 bg-[#2e1d52] rounded-full shrink-0 shadow-[0_0_5px_rgba(139,92,246,0.5)]"></div>
          </div>
        ))}
      </div>
    </section>
  )
}
