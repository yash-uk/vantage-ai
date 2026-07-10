import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WorkflowAnimation from "@/components/WorkflowAnimation";
import LogoBar from "@/components/LogoBar";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import WhyChooseUs from "@/components/WhyChooseUs";
import ROICalculator from "@/components/ROICalculator";
import CustomAutomation from "@/components/CustomAutomation";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustBar />
      <WorkflowAnimation />
      <LogoBar />
      <Stats />
      <Services />
      <Industries />
      <CaseStudies />
      <WhyChooseUs />
      <ROICalculator />
      <CustomAutomation />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
