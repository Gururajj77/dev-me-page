import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Links } from "@/components/Links";
import { ProfilePanel } from "@/components/ProfilePanel";
import { Projects } from "@/components/Projects";
import { SectionTracker } from "@/components/SectionTracker";
import { Skills } from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <SectionTracker />
      <main className="page-shell">
        <div className="editorial grid gap-12 py-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.2fr)] lg:gap-16 lg:py-0 xl:gap-24">
          <ProfilePanel />
          <div className="min-w-0 lg:py-16">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Links />
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
