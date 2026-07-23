import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { ctaTicker, stackTicker } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee items={stackTicker} tone="yellow" direction="left" />
        <Work />
        <Experience />
        <Skills />
        <Marquee items={ctaTicker} tone="green" direction="right" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
