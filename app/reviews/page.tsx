import { allReviews } from "@/lib/reviews";
import ReviewCard from "@/components/ui/ReviewCard";
import { Star } from "lucide-react";

export default function ReviewsPage() {
  return (
    <div className="pt-32 pb-24 relative min-h-screen bg-[#060814] overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none"
        style={{ backgroundSize: '40px 40px' }}
      ></div>
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-900/15 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 py-2 px-5 rounded-full border border-yellow-500/40 bg-yellow-900/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-[11px] font-bold text-yellow-300 uppercase tracking-widest">
              WHAT OUR USERS SAY
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-poppins uppercase tracking-tight mb-6 leading-tight max-w-4xl text-white">
            UNMATCHED STREAMING <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">EXPERIENCE</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Read exactly what thousands of subscribers are saying about their flawless 4K sports streaming experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allReviews.map((review, idx) => (
            <div key={idx} className="flex justify-center w-full">
               <ReviewCard review={review} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
