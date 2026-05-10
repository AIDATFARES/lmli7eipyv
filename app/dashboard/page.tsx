"use client"
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Settings, Tv, CreditCard, LayoutDashboard, LogOut, Clock, Activity, Users, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const usageData = [
  { name: 'Mon', usage: 12 },
  { name: 'Tue', usage: 19 },
  { name: 'Wed', usage: 15 },
  { name: 'Thu', usage: 28 },
  { name: 'Fri', usage: 35 },
  { name: 'Sat', usage: 50 },
  { name: 'Sun', usage: 45 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-32 pb-12 flex flex-col md:flex-row px-6 container mx-auto max-w-7xl gap-8 relative z-10">
      <AnimatedBackground />
      
      {/* Sidebar */}
      <motion.aside 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full md:w-64 glass-panel rounded-3xl p-6 h-auto md:min-h-[700px] flex flex-col border border-white/5 relative overflow-hidden group bg-surface/40 backdrop-blur-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10 relative z-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.6)] border border-white/20">
              JD
            </div>
            <div>
              <h3 className="font-semibold text-white tracking-wide">John Doe</h3>
              <p className="text-[10px] text-accent uppercase tracking-widest font-bold">Premium</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-white transition-colors relative">
            <Bell size={18} />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          </button>
        </div>

        <nav className="flex-1 space-y-2 relative z-10">
          {[
            { icon: LayoutDashboard, label: "Overview", active: true },
            { icon: Tv, label: "My Playlist", active: false },
            { icon: Activity, label: "Analytics", active: false },
            { icon: CreditCard, label: "Subscription", active: false },
            { icon: Settings, label: "Settings", active: false },
          ].map((item, i) => (
            <a key={i} href="#" className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-300 relative overflow-hidden ${item.active ? 'bg-primary/10 text-white border border-primary/30 shadow-[inset_0_0_20px_rgba(37,99,235,0.1)]' : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'}`}>
              {item.active && <div className="absolute left-0 top-0 w-1 h-full bg-primary neon-glow-primary"></div>}
              <item.icon size={18} className={item.active ? 'text-accent' : 'opacity-70'} />
              <span className="font-medium text-sm tracking-wide">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-all group">
            <LogOut size={18} className="group-hover:text-red-400 transition-colors" />
            <span className="font-medium text-sm tracking-wide">Secure Logout</span>
          </a>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-end bg-surface/30 backdrop-blur-md p-6 rounded-3xl border border-white/5 shadow-2xl">
          <div>
            <h1 className="text-3xl font-bold font-poppins text-white mb-2 text-shadow-sm">Command Center</h1>
            <p className="text-slate-400 tracking-wide text-sm">System analytics and active module status.</p>
          </div>
          <div className="hidden sm:flex items-center space-x-3 text-sm bg-black/40 px-5 py-2.5 rounded-full border border-white/10 shadow-inner">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"></span>
            <span className="text-slate-300 font-medium tracking-wider text-xs uppercase">All Systems Nominal</span>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="glass-panel p-6 rounded-3xl border border-primary/20 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="p-3 bg-primary/20 border border-primary/30 rounded-xl text-primary shadow-[0_0_15px_rgba(37,99,235,0.2)]"><Clock size={20} /></div>
              <span className="bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full backdrop-blur-md">Active</span>
            </div>
            <h4 className="text-slate-400 text-sm mb-1 tracking-wide relative z-10">Time Remaining</h4>
            <div className="text-4xl font-bold text-white mb-3 font-poppins relative z-10">248 <span className="text-base font-normal text-slate-500">Days</span></div>
            <div className="w-full bg-black/50 h-2 rounded-full overflow-hidden relative z-10 border border-white/5">
              <div className="bg-gradient-to-r from-primary to-accent w-[70%] h-full rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)] relative">
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[2px]"></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="glass-panel p-6 rounded-3xl border border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:bg-secondary/20 transition-colors"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="p-3 bg-secondary/20 border border-secondary/30 rounded-xl text-secondary shadow-[0_0_15px_rgba(124,58,237,0.2)]"><Users size={20} /></div>
            </div>
            <h4 className="text-slate-400 text-sm mb-1 tracking-wide relative z-10">Active Connections</h4>
            <div className="text-4xl font-bold text-white mb-2 font-poppins relative z-10">2 <span className="text-base font-normal text-slate-500">/ 3</span></div>
            <p className="text-xs text-slate-500 tracking-wide relative z-10">Authorized devices online</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="glass-panel p-6 rounded-3xl border border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:bg-accent/20 transition-colors"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="p-3 bg-accent/20 border border-accent/30 rounded-xl text-accent shadow-[0_0_15px_rgba(56,189,248,0.2)]"><Activity size={20} /></div>
            </div>
            <h4 className="text-slate-400 text-sm mb-1 tracking-wide relative z-10">Server Latency</h4>
            <div className="text-4xl font-bold text-white mb-2 font-poppins relative z-10 text-shadow-sm">18 <span className="text-base font-normal text-slate-500">ms</span></div>
            <p className="text-xs text-green-400 tracking-wide relative z-10 flex items-center"><Activity size={12} className="mr-1"/> Optimal Connection</p>
          </motion.div>
        </div>

        {/* Analytics Chart & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-panel rounded-3xl p-6 border border-white/5 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-white tracking-wide">Bandwidth Usage</h3>
              <select className="bg-surface border border-white/10 rounded-lg text-xs text-slate-300 px-3 py-1.5 outline-none focus:border-primary">
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
            <div className="h-[250px] w-full mt-4 flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={usageData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" tick={{fontSize: 12}} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(15,23,42,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area type="monotone" dataKey="usage" stroke="#38bdf8" strokeWidth={3} fillOpacity={1} fill="url(#colorUsage)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-panel rounded-3xl p-6 border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[60px] pointer-events-none"></div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Playlist Credentials</h3>
              <p className="text-sm text-slate-400 mb-6">Use these details to access your streams.</p>
            </div>
            
            <div className="space-y-4 relative z-10 w-full flex-1 justify-end flex flex-col">
              <div className="w-full">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 block">Username</label>
                <div className="bg-surface/60 backdrop-blur-md border border-white/10 rounded-xl px-4 flex justify-between items-center text-sm h-12 shadow-inner">
                  <code className="text-primary font-bold tracking-wider">JD_PRM_8832</code>
                  <button className="text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-xs border border-white/10 px-3 py-1.5 rounded-md bg-white/5 opacity-80">Copy</button>
                </div>
              </div>
              <div className="w-full">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 block">Password</label>
                <div className="bg-surface/60 backdrop-blur-md border border-white/10 rounded-xl px-4 flex justify-between items-center text-sm h-12 shadow-inner">
                  <code className="text-slate-300 tracking-[0.3em]">••••••••••••••</code>
                  <button className="text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-xs border border-white/10 px-3 py-1.5 rounded-md bg-white/5 opacity-80">Show</button>
                </div>
              </div>
              <div className="w-full">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 block">M3U URL</label>
                <div className="bg-surface/60 backdrop-blur-md border border-white/10 rounded-xl px-4 flex justify-between items-center text-sm h-12 shadow-inner">
                  <code className="text-accent truncate w-full pr-4 opacity-90">http://nova-server.net:8080/get...</code>
                  <button className="text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-xs border border-white/10 px-3 py-1.5 rounded-md bg-white/5 whitespace-nowrap opacity-80">Copy URL</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
