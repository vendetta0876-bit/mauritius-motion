import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Coach } from "@/components/Coach";
import { Method } from "@/components/Method";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Coach />
        <Method />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
    </>
  );
}
