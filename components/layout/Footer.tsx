import Link from 'next/link';
import { 
  Tv, 
  Trophy, 
  Home, 
  DollarSign, 
  Zap, 
  Play, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  FileText, 
  AlertCircle, 
  Lock, 
  Cookie, 
  CreditCard, 
  Globe,
  LayoutGrid,
  Settings
} from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#070b14] mt-20 relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      {/* Background Trophy Watermark */}
      <div className="absolute right-[-10%] bottom-[-20%] opacity-[0.03] pointer-events-none">
        <Trophy className="w-[600px] h-[600px] text-white" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" aria-label="IPTV WorldCup – Go to homepage" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.3)]" aria-hidden="true">
                <Tv className="text-white w-7 h-7" />
              </div>
              <div>
                <p className="font-poppins font-black text-2xl tracking-tighter text-white leading-none">
                  IPTV WorldCup
                </p>
                <span className="text-xs font-bold tracking-[0.2em] text-purple-400 uppercase">
                  World Cup 2026
                </span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Watch all <span className="text-white font-bold">104 World Cup 2026 matches</span> live in HD & 4K. 50,000+ channels, 200,000+ movies & series — on every device, worldwide.
            </p>

            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/213554246175" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4 mb-4 flex items-center gap-4 max-w-[280px] group cursor-pointer hover:bg-emerald-500/10 transition-all block"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                <MessageCircle className="text-white w-6 h-6 fill-white" />
              </div>
              <div>
                <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                  <span className="text-xs">+</span> FAST SUPPORT
                </div>
                <div className="text-white font-black text-lg tracking-tight">
                  +213 554 24 61 75
                </div>
              </div>
            </a>
            
            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-bold uppercase tracking-wider">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
              All servers online - 99.9% uptime
            </div>
          </div>

          {/* Navigation Columns Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            
            {/* Column 1: Navigation */}
            <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8 relative inline-block">
                Navigation
                <div className="absolute -bottom-1 left-0 w-8 h-[2px] bg-purple-500"></div>
              </h3>
              <ul className="space-y-4">
                <li><Link href="/" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><Home className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" /> Home</Link></li>
                <li><Link href="/pricing" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><DollarSign className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" /> Pricing</Link></li>
                <li><Link href="/contact" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" /> Contact Support</Link></li>
                <li><Link href="/how-it-works" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><Play className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" /> How It Works</Link></li>
                <li><Link href="/faq" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><HelpCircle className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" /> FAQ</Link></li>
                <li><Link href="/blog" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><BookOpen className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform" /> Blog ↗</Link></li>
              </ul>
            </div>

            {/* Column 2: Service */}
            <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8 relative inline-block">
                Service
                <div className="absolute -bottom-1 left-0 w-8 h-[2px] bg-purple-500"></div>
              </h3>
              <ul className="space-y-4">
                <li><Link href="/#pricing" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><Trophy className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform" /> Get Started</Link></li>
                <li><Link href="https://wa.me/213554246175" target="_blank" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><MessageCircle className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" /> WhatsApp Support</Link></li>
                <li><Link href="mailto:support@worldcupiptv.us" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><Mail className="w-4 h-4 text-slate-400 group-hover:scale-110 transition-transform" /> Email Support</Link></li>
                <li><Link href="/channels" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><LayoutGrid className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform" /> All Channels</Link></li>
                <li><Link href="/setup" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><Settings className="w-4 h-4 text-slate-400 group-hover:scale-110 transition-transform" /> Setup Guide</Link></li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8 relative inline-block">
                Legal
                <div className="absolute -bottom-1 left-0 w-8 h-[2px] bg-purple-500"></div>
              </h3>
              <ul className="space-y-4">
                <li><Link href="/privacy" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><Lock className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform" /> Privacy Policy</Link></li>
                <li><Link href="/refunds" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><Play className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" /> Refund Policy</Link></li>
                <li><Link href="/disclaimer" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><ShieldCheck className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" /> Disclaimer</Link></li>
                <li><Link href="/dmca" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><AlertCircle className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" /> DMCA</Link></li>
                <li><Link href="/cookie-policy" className="group flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm font-bold"><Cookie className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform" /> Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Column 4: Payment */}
            <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8 relative inline-block">
                Payment
                <div className="absolute -bottom-1 left-0 w-8 h-[2px] bg-purple-500"></div>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-400 text-sm font-bold"><div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center text-[10px] text-white">P</div> PayPal</li>
                <li className="flex items-center gap-3 text-slate-400 text-sm font-bold"><CreditCard className="w-4 h-4 text-orange-400" /> Credit Card</li>
                <li className="flex items-center gap-3 text-slate-400 text-sm font-bold"><div className="w-4 h-4 flex items-center justify-center text-slate-300 font-serif">฿</div> Bitcoin</li>
                <li className="flex items-center gap-3 text-slate-400 text-sm font-bold"><div className="w-4 h-4 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-[8px] text-yellow-500">₮</div> USDT / Crypto</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-[11px] font-bold uppercase tracking-widest">
            © 2026 worldcupiptv.us - All rights reserved
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {['Privacy Policy', 'Refund Policy', 'Disclaimer', 'DMCA', 'Cookie Policy'].map((item) => (
              <Link 
                key={item} 
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold hover:bg-white/10 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold uppercase tracking-widest">
            <Globe className="w-4 h-4 text-blue-400" />
            Built for the World Cup 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
