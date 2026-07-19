"use client";

import type { ComponentPropsWithoutRef } from "react";

type TextLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
};

export function TextLink({ href, className = "", children, ...props }: TextLinkProps) {
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={`link-underline ${className}`.trim()}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...props}
    >
      {children}
    </a>
  );
}
