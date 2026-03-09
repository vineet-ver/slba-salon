import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Showcase from "@/components/sections/Showcase";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Team from "@/components/sections/Team";
import Gallery from "@/components/sections/Gallery";
import Packages from "@/components/sections/Packages";
import Testimonials from "@/components/sections/Testimonials";
import Instagram from "@/components/sections/Instagram";
import Interior from "@/components/sections/Interior";
import BookingSection from "@/components/sections/BookingSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Showcase />
      <Services />
      <Experience />
      <Team />
      <Gallery />
      <Packages />
      <Testimonials />
      <Instagram />
      <Interior />
      <BookingSection />
      <Contact />
    </>
  );
}
