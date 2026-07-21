"use client";

import { type FormEvent, useState } from "react";
import { site } from "@/lib/content";
import { SectionReveal } from "@/components/SectionReveal";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || "your site"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <SectionReveal
      id="contact"
      ariaLabelledBy="contact-heading"
      className="section-block border-t border-border py-14 sm:py-16"
    >
      <p className="eyebrow-rule section-label mb-6">Contact</p>
      <h2
        id="contact-heading"
        className="text-[clamp(1.65rem,3.5vw,2.15rem)] font-medium tracking-[-0.03em] text-fg"
      >
        Get in touch.
      </h2>
      <p className="mt-4 max-w-xl text-[1.025rem] leading-relaxed text-muted">
        Prefer email?{" "}
        <a
          href={site.links.email}
          className="link-underline text-fg"
        >
          {site.email}
        </a>
      </p>

      <form onSubmit={onSubmit} className="mt-10 max-w-xl space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-faint">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-border bg-transparent px-3.5 py-3 text-[1rem] text-fg outline-none transition-colors placeholder:text-faint/60 focus:border-border-strong"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-faint">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-border bg-transparent px-3.5 py-3 text-[1rem] text-fg outline-none transition-colors placeholder:text-faint/60 focus:border-border-strong"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm text-faint">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-y border border-border bg-transparent px-3.5 py-3 text-[1rem] text-fg outline-none transition-colors placeholder:text-faint/60 focus:border-border-strong"
            placeholder="What are you working on?"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center border border-border-strong bg-fg px-5 py-2.5 text-sm font-medium tracking-[-0.01em] text-bg transition-opacity hover:opacity-90"
        >
          Send message
        </button>
      </form>
    </SectionReveal>
  );
}
