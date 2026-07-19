"use client";

import { useEffect } from "react";

/** Marks document early so CSS can hide animating nodes before first GSAP paint. */
export function JsReady() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");
  }, []);

  return null;
}
