import dynamic from 'next/dynamic';
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import HeroSection from "@/components/home/HeroSection";

// Dynamically import below-the-fold components to reduce initial JS bundle size
const ChannelCategories = dynamic(() => import("@/components/home/ChannelCategories"), { ssr: true });
const TopFeatureBar = dynamic(() => import("@/components/home/TopFeatureBar"), { ssr: true });
const FeaturesSection = dynamic(() => import("@/components/home/FeaturesSection"), { ssr: true });
const HowItWorksSection = dynamic(() => import("@/components/home/HowItWorksSection"), { ssr: true });
const PricingSection = dynamic(() => import("@/components/home/PricingSection"), { ssr: true });
const GlobalCoverageSection = dynamic(() => import("@/components/home/GlobalCoverageSection"), { ssr: true });
const DeviceSupport = dynamic(() => import("@/components/home/DeviceSupport"), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection"), { ssr: true });
const FAQ = dynamic(() => import("@/components/home/FAQ"), { ssr: true });

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <HeroSection />
      <ChannelCategories />
      <TopFeatureBar />
      <FeaturesSection />
      <DeviceSupport />
      <HowItWorksSection />
      <DeviceSupport />
      <PricingSection />
      <GlobalCoverageSection />
      <TestimonialsSection />
      <FAQ />
    </>
  );
}
