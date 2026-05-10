import { Star, CheckCircle2 } from "lucide-react";

export default function ReviewCard({ review }: { review: any }) {
  return (
    <div className="w-[280px] md:w-[340px] shrink-0 bg-gradient-to-br from-[#0c0f1c] to-[#080a15] backdrop-blur-xl border border-white/5 hover:border-purple-500/30 rounded-2xl p-5 transition-all duration-300 relative shadow-lg hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)] group hover:-translate-y-1 hover:z-20 cursor-default">
      {/* Stars */}
      <div className="flex space-x-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />
        ))}
      </div>

      {/* Badge */}
      <div className="inline-flex items-center px-2.5 py-1 bg-purple-900/20 border border-purple-500/30 rounded-full mb-4">
         <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-1.5 shadow-[0_0_8px_rgba(192,132,252,0.8)] animate-pulse-slow"></div>
         <span className="text-[9px] font-bold text-purple-300 uppercase tracking-widest truncate">{review.badge}</span>
      </div>

      {/* Review Text */}
      <p className="text-slate-300 text-sm leading-relaxed mb-6 font-inter line-clamp-3">
        &quot;{review.text}&quot;
      </p>

      {/* User Info */}
      <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
         <div className="flex items-center space-x-3">
           <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 p-[1.5px]">
              <div className="w-full h-full bg-[#11162b] rounded-full flex items-center justify-center border border-black/40">
                <span className="text-xs font-bold text-white tracking-widest">{review.initials}</span>
              </div>
           </div>
           <div className="min-w-0">
             <h5 className="text-white font-bold text-xs flex items-center space-x-1.5 truncate">
               <span className="truncate">{review.name}</span>
               <div className="flex shrink-0 items-center space-x-1 bg-emerald-500/10 px-1.5 py-0.5 rounded text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span className="text-[8px] uppercase font-bold hidden sm:inline">Verified</span>
               </div>
             </h5>
             <p className="text-slate-400 text-[10px] mt-0.5 flex items-center truncate">
               <span className="mr-1 text-sm">{review.flag}</span>
               <span className="truncate">{review.location}</span>
             </p>
           </div>
         </div>
      </div>
    </div>
  );
}
