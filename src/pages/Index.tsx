import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { LogoCloud } from "@/components/home/LogoCloud";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { GallerySection } from "@/components/home/GallerySection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

import logoNahb from "@/assets/logo-nahb.png";
import logoHomeadvisor from "@/assets/logo-homeadvisor.png";
import logoQualifiedRemodeler from "@/assets/logo-qualified-remodeler.png";
import logoInstallationMasters from "@/assets/logo-installation-masters.png";
import logoEnergyStar from "@/assets/logo-energy-star.png";
import logoBbb from "@/assets/logo-bbb.png";

const partnerLogos = [
  { src: logoNahb, alt: "NAHB - National Association of Home Builders" },
  { src: logoHomeadvisor, alt: "HomeAdvisor Elite Service" },
  { src: logoQualifiedRemodeler, alt: "Qualified Remodeler Top 500 2025" },
  { src: logoInstallationMasters, alt: "Installation Masters Certification" },
  { src: logoEnergyStar, alt: "Energy Star Partner" },
  { src: logoBbb, alt: "Better Business Bureau" },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <LogoCloud logos={partnerLogos} />
      <ServicesPreview />
      <GallerySection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
