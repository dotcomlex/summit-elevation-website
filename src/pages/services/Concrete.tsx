import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/services/ServiceHero";
import { BenefitsSection } from "@/components/services/BenefitsSection";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServiceGallery } from "@/components/services/ServiceGallery";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { HardHat } from "lucide-react";

import concreteImage from "@/assets/concrete-patio.jpg";
import galleryPatio from "@/assets/gallery-patio.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";

const benefits = [
  {
    title: "Colorado Climate Tested",
    description: "Our concrete mixes and installation techniques are specifically designed to handle freeze-thaw cycles and intense UV exposure."
  },
  {
    title: "Decorative Options",
    description: "From stamped patterns to exposed aggregate, we offer a wide range of finishes that enhance your outdoor spaces."
  },
  {
    title: "Structural Integrity",
    description: "Proper preparation, reinforcement, and curing ensure your concrete work lasts for decades without cracking or settling."
  },
  {
    title: "Full-Service Installation",
    description: "We handle everything from excavation and grading to finishing and sealing, with minimal disruption to your property."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Site Assessment",
    description: "We evaluate your property, soil conditions, and drainage to create a comprehensive plan."
  },
  {
    number: "02",
    title: "Preparation",
    description: "Proper excavation, grading, and base preparation ensure a solid foundation for your concrete."
  },
  {
    number: "03",
    title: "Pour & Finish",
    description: "Our crews pour, level, and finish your concrete with precision and attention to detail."
  },
  {
    number: "04",
    title: "Cure & Seal",
    description: "We ensure proper curing time and apply quality sealers to protect your investment."
  }
];

const galleryImages = [
  { src: concreteImage, alt: "Stamped concrete patio" },
  { src: galleryPatio, alt: "Decorative concrete work" },
  { src: galleryExterior, alt: "Concrete driveway" },
  { src: concreteImage, alt: "Outdoor living space" },
  { src: galleryPatio, alt: "Patio with fire pit" },
  { src: galleryExterior, alt: "Modern concrete design" },
];

const Concrete = () => {
  return (
    <Layout>
      <ServiceHero
        icon={HardHat}
        title="Concrete &"
        highlight="Flatwork"
        description="Durable driveways, patios, and foundations built to withstand Colorado's demanding weather conditions."
        backgroundImage={concreteImage}
      />
      
      <BenefitsSection
        icon={HardHat}
        title="Built to Last Through Colorado Seasons"
        description="From scorching summer heat to harsh winter freezes, our concrete work is engineered to handle everything the Front Range throws at it."
        benefits={benefits}
        image={galleryPatio}
        imageAlt="Decorative concrete patio"
        ctaText="Get Your Concrete Quote"
        reversed
      />
      
      <ProcessSteps steps={processSteps} />
      
      <ServiceGallery 
        images={galleryImages}
        title="Concrete Projects Gallery"
      />
      
      <ServiceCTA
        title="Ready for Lasting Concrete Work?"
        description="Get a free estimate for your driveway, patio, or foundation project today."
      />
    </Layout>
  );
};

export default Concrete;
