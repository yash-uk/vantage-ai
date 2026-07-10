import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkflowAnimation from "@/components/WorkflowAnimation";
import LogoBar from "@/components/LogoBar";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import BeforeAfter from "@/components/BeforeAfter";
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
      <WorkflowAnimation />
      <LogoBar />
      <Stats />
      <Services />
      <Industries />
      <CaseStudies />
      <BeforeAfter />
      <ROICalculator />
      <CustomAutomation />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
