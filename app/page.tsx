import AnimatedBackground from "@/components/ui/AnimatedBackground";
import HeroSection from "@/components/home/HeroSection";
import ChannelCategories from "@/components/home/ChannelCategories";
import TopFeatureBar from "@/components/home/TopFeatureBar";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import GlobalCoverageSection from "@/components/home/GlobalCoverageSection";
import DeviceSupport from "@/components/home/DeviceSupport";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQ from "@/components/home/FAQ";

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
