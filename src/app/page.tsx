import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { OutsideWork } from "@/components/OutsideWork";
import { Principles } from "@/components/Principles";
import { SectionTracker } from "@/components/SectionTracker";
import { SelectedWork } from "@/components/SelectedWork";
import { Timeline } from "@/components/Timeline";

export default function HomePage() {
  return (
    <>
      <SectionTracker />
      <main className="page-shell">
        <Hero />
        <About />
        <SelectedWork />
        <Principles />
        <Timeline />
        <OutsideWork />
        <Footer />
      </main>
    </>
  );
}
