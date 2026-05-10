import AnimatedBackground from "@/components/ui/AnimatedBackground";
import PricingSection from "@/components/home/PricingSection";
import FAQ from "@/components/home/FAQ";
import { ShieldCheck, Zap, RefreshCw } from "lucide-react";

export default function PricingPage() {
  return (
    <>
      <AnimatedBackground />
      <div className="pt-32 pb-12">
        <div className="container mx-auto px-6 max-w-7xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins text-white">Simple, Transparent <span className="text-gradient">Pricing</span></h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">Start your premium streaming experience today. No hidden fees or contracts.</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto mb-8">
              <div className="flex items-center space-x-3 bg-surface/30 p-4 rounded-xl border border-white/5 w-full md:w-auto">
                <ShieldCheck className="text-primary w-6 h-6" />
                <span className="text-sm text-slate-300">7-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-3 bg-surface/30 p-4 rounded-xl border border-white/5 w-full md:w-auto">
                <Zap className="text-accent w-6 h-6" />
                <span className="text-sm text-slate-300">Instant Automated Activation</span>
              </div>
              <div className="flex items-center space-x-3 bg-surface/30 p-4 rounded-xl border border-white/5 w-full md:w-auto">
                <RefreshCw className="text-secondary w-6 h-6" />
                <span className="text-sm text-slate-300">Cancel Anytime</span>
              </div>
            </div>
        </div>
      </div>
      <PricingSection />
      <FAQ />
    </>
  );
}
