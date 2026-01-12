import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/services/ServiceHero";
import { BenefitsSection } from "@/components/services/BenefitsSection";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServiceGallery } from "@/components/services/ServiceGallery";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { Building2 } from "lucide-react";

import constructionImage from "@/assets/construction-site.jpg";
import teamImage from "@/assets/team-work.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import kitchenImage from "@/assets/kitchen-remodel.jpg";

const benefits = [
  {
    title: "Full-Service Construction",
    description: "From initial design to final walkthrough, we manage every aspect of your construction project with precision."
  },
  {
    title: "Licensed & Insured",
    description: "Fully licensed general contractors with comprehensive insurance coverage for your peace of mind."
  },
  {
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, and honest pricing keep you informed throughout the entire project."
  },
  {
    title: "Quality Subcontractors",
    description: "We work with a trusted network of skilled tradespeople who share our commitment to excellence."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Planning",
    description: "We discuss your goals, timeline, and budget to develop a comprehensive project plan."
  },
  {
    number: "02",
    title: "Permitting",
    description: "We handle all permits and approvals required by local municipalities."
  },
  {
    number: "03",
    title: "Construction",
    description: "Our team executes the build with regular progress updates and quality checkpoints."
  },
  {
    number: "04",
    title: "Completion",
    description: "Final inspections, punch list items, and a complete walkthrough before handover."
  }
];

const galleryImages = [
  { src: constructionImage, alt: "Home construction project" },
  { src: teamImage, alt: "Construction team at work" },
  { src: galleryExterior, alt: "Completed home exterior" },
  { src: kitchenImage, alt: "Interior renovation" },
  { src: constructionImage, alt: "Framing and structural work" },
  { src: teamImage, alt: "Professional crew" },
];

const GeneralContracting = () => {
  return (
    <Layout>
      <ServiceHero
        icon={Building2}
        title="General"
        highlight="Contracting"
        description="Full-service construction and renovation from concept to completion. New builds, additions, and commercial projects."
        backgroundImage={constructionImage}
      />
      
      <BenefitsSection
        icon={Building2}
        title="Your Complete Construction Partner"
        description="Whether you're building a new home, adding an extension, or renovating a commercial space, we bring the expertise and reliability you need."
        benefits={benefits}
        image={teamImage}
        imageAlt="Construction team"
        ctaText="Discuss Your Project"
      />
      
      <ProcessSteps steps={processSteps} />
      
      <ServiceGallery 
        images={galleryImages}
        title="Recent Construction Projects"
      />
      
      <ServiceCTA
        title="Let's Build Something Great"
        description="From home additions to commercial projects, get a free consultation and estimate today."
      />
    </Layout>
  );
};

export default GeneralContracting;
