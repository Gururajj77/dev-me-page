import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { site } from "@/lib/content";
import { PopIn } from "@/components/PopIn";

export function Contact() {
  return (
    <section id="contact" className="shell py-10 md:py-14">
      <p className="section-label mb-5 text-blue">04 / Contact</p>

      <PopIn>
        <div data-pop className="tile tile-surface p-5 md:p-8 lg:p-10">
          <h2 className="display hard-shadow-blue max-w-3xl text-[clamp(2rem,7vw,4.2rem)]">
            Let&apos;s build something that lasts.
          </h2>
          <p className="mt-5 max-w-xl text-sm text-muted md:text-base">
            Open to frontend platform roles, design systems work, and interesting
            product problems. Say hello.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={site.links.email} className="btn-brutal btn-green">
              <FiMail className="size-4" aria-hidden />
              Email me
              <FiArrowUpRight className="size-3.5" aria-hidden />
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal btn-yellow"
            >
              <FiGithub className="size-4" aria-hidden />
              GitHub
              <FiArrowUpRight className="size-3.5" aria-hidden />
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brutal btn-blue"
            >
              <FiLinkedin className="size-4" aria-hidden />
              LinkedIn
              <FiArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </PopIn>
    </section>
  );
}
