import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/services/ServiceHero";
import { BenefitsSection } from "@/components/services/BenefitsSection";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServiceGallery } from "@/components/services/ServiceGallery";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { Bath } from "lucide-react";

import kitchenImage from "@/assets/kitchen-remodel.jpg";
import bathroomImage from "@/assets/bathroom-remodel.jpg";
import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryBathroom from "@/assets/gallery-bathroom.jpg";

const benefits = [
  {
    title: "Custom Design & Installation",
    description: "Work with our designers to create a space that perfectly matches your style and needs, from cabinetry to countertops."
  },
  {
    title: "Premium Materials",
    description: "We source high-quality materials that stand up to Colorado's climate while adding lasting beauty to your home."
  },
  {
    title: "Complete Project Management",
    description: "From permits to final walkthrough, we handle every detail so you can enjoy a stress-free renovation experience."
  },
  {
    title: "Expert Craftsmanship",
    description: "Our skilled team brings decades of combined experience in tile work, plumbing, electrical, and finish carpentry."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We visit your home, discuss your vision, assess the space, and provide a detailed estimate."
  },
  {
    number: "02",
    title: "Design",
    description: "Our designers create a custom plan with 3D renderings so you can visualize your new space."
  },
  {
    number: "03",
    title: "Build",
    description: "Our expert crews execute the renovation with precision, keeping you informed every step of the way."
  },
  {
    number: "04",
    title: "Reveal",
    description: "We complete a thorough walkthrough to ensure every detail meets your expectations."
  }
];

const galleryImages = [
  { src: kitchenImage, alt: "Modern kitchen renovation" },
  { src: bathroomImage, alt: "Luxury bathroom remodel" },
  { src: galleryKitchen, alt: "Contemporary kitchen design" },
  { src: galleryBathroom, alt: "Elegant bathroom update" },
  { src: kitchenImage, alt: "Kitchen with custom cabinetry" },
  { src: bathroomImage, alt: "Spa-inspired bathroom" },
];

const KitchenBath = () => {
  return (
    <Layout>
      <ServiceHero
        icon={Bath}
        title="Kitchen & Bathroom"
        highlight="Remodeling"
        description="Transform your Colorado home with stunning renovations that blend mountain-inspired aesthetics with modern functionality."
        backgroundImage={kitchenImage}
      />
      
      <BenefitsSection
        icon={Bath}
        title="Elevate Your Home's Most Important Spaces"
        description="Your kitchen and bathroom are where you start and end each day. We create spaces that are both beautiful and functional, designed specifically for Colorado living."
        benefits={benefits}
        image={bathroomImage}
        imageAlt="Beautiful bathroom renovation"
        ctaText="Start Your Remodel"
      />
      
      <ProcessSteps steps={processSteps} />
      
      <ServiceGallery 
        images={galleryImages}
        title="Kitchen & Bath Transformations"
      />
      
      <ServiceCTA
        title="Ready to Transform Your Space?"
        description="Schedule a free in-home consultation and let's design the kitchen or bathroom of your dreams."
      />
    </Layout>
  );
};

export default KitchenBath;
