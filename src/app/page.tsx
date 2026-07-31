import { ModeProvider } from "@/components/ModeProvider";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Playground } from "@/components/Playground";
import { ExperienceToolkit } from "@/components/ExperienceToolkit";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <ModeProvider>
      <a
        href="#work"
        className="sr-only font-mono text-xs focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:border-2 focus:border-border focus:bg-yellow focus:px-3 focus:py-2 focus:text-[#14120f]"
      >
        Skip to the work
      </a>
      <main className="shell flex flex-col gap-5 py-5 md:gap-6 md:py-7">
        <TopBar />
        <Hero />
        <Work />
        <Playground />
        <ExperienceToolkit />
        <Contact />
        <Footer />
      </main>
    </ModeProvider>
  );
}
