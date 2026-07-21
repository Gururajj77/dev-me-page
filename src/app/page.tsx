import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Links } from "@/components/Links";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <main className="page">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Links />
      <Contact />
      <Footer />
    </main>
  );
}
