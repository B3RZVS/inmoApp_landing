import { CtaSection } from "../sections/CtaSection/CtaSection";
import { FaqSection } from "../sections/FaqSection/FaqSection";
import { FeaturesSection } from "../sections/FeaturesSection/FeaturesSection";
import { HeroSection } from "../sections/HeroSection/HeroSection";
import { HowItWorksSection } from "../sections/HowItWorksSection/HowItWorksSection";
import { PricingSection } from "../sections/PricingSection/PricingSection";
import { ProblemSection } from "../sections/ProblemSection/ProblemSection";
import { SocialProofStrip } from "../sections/SocialProofStrip/SocialProofStrip";
import { TestimonialSection } from "../sections/TestimonialSection/TestimonialSection";

export const LandingView: React.FC = () => {
  return (
    <main id="main-content">
      <HeroSection />
      <SocialProofStrip />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
};
