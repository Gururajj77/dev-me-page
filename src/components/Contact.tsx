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

  const field =
    "w-full border-4 border-ink bg-white px-3 py-3 font-mono text-sm outline-none focus:bg-sun";

  return (
    <SectionReveal
      id="contact"
      ariaLabelledBy="contact-heading"
      className="section-gap"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="stamp bg-hot text-white">07</span>
        <h2
          id="contact-heading"
          className="display text-[clamp(2rem,5vw,3rem)]"
        >
          Hit send
        </h2>
      </div>

      <div className="slab-stack">
        <div aria-hidden="true" className="slab-stack__shadow bg-ink" />
        <form
          onSubmit={onSubmit}
          className="slab slab-stack__face bg-hot p-5 text-white md:p-7"
        >
          <p className="mb-5 text-sm font-bold text-white/90">
            Or mail{" "}
            <a href={site.links.email} className="bg-sun px-1 text-ink underline">
              {site.email}
            </a>
          </p>
          <div className="space-y-4 text-ink">
            <div>
              <label htmlFor="name" className="mb-1 block text-xs font-bold text-white uppercase">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={field}
                placeholder="WHO DIS"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-xs font-bold text-white uppercase">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={field}
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-xs font-bold text-white uppercase">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={field}
                placeholder="SAY THE THING"
              />
            </div>
            <button type="submit" className="btn btn-ink">
              Fire message →
            </button>
          </div>
        </form>
      </div>
    </SectionReveal>
  );
}
