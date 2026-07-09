import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
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
      <LogoBar />
      <Services />
      <Industries />
      <CaseStudies />
      <CustomAutomation />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
