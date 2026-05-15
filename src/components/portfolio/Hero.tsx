import { lazy, Suspense, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroThreeScene = lazy(() => import("./HeroThreeScene"));

const heroWords = ["I BUILD", "DIGITAL", "EXPERIENCES"];
const githubUrl = "https://github.com/ShivamSharma6214";
const linkedInUrl = "https://linkedin.com/in/shivamsharma6214";
const emailAddress = "sharmashivam6214@gmail.com";

export function Hero() {
  const headingRef = useRef<(HTMLDivElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion) {
      return;
    }

    gsap.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.95,
        ease: "power4.out",
        stagger: 0.14,
        delay: 0.24,
      },
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.72,
        delay: 0.82,
        ease: "power2.out",
      },
    );

    gsap.fromTo(
      ctaRef.current,
      { y: 22, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.72,
        delay: 1.02,
        ease: "power2.out",
      },
    );
  }, [reducedMotion]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="blob-orb absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-cyan/18 blur-3xl" />
      <div className="blob-orb absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-brand-violet/18 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(0,212,255,0.08),transparent_36%),radial-gradient(circle_at_30%_80%,rgba(124,58,237,0.12),transparent_42%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reducedMotion ? 0 : 1.1, ease: "easeOut", delay: reducedMotion ? 0 : 0.3 }}
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[62vw] min-w-[280px] sm:w-[52vw] lg:w-[48vw]"
      >
        <Suspense fallback={<div className="h-full w-full" />}>
          <HeroThreeScene />
        </Suspense>
      </motion.div>

      <div className="section-shell relative z-10">
        <div className="max-w-3xl">
          <div className="space-y-1 text-[3.1rem] uppercase leading-[0.9] text-brand-ivory sm:text-[4.6rem] md:text-[6.2rem] lg:text-[7.5rem]">
            {heroWords.map((word, index) => (
              <div
                key={word}
                ref={(element) => {
                  headingRef.current[index] = element;
                }}
                className="font-display"
              >
                {word}
              </div>
            ))}
          </div>

          <p
            ref={subtitleRef}
            className="mt-7 max-w-lg text-sm uppercase tracking-[0.24em] text-[#f0ede8]/72 sm:text-base"
          >
            Freelance Developer · Product Manager · Builder of Real Things
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              data-cursor-hover="true"
              className="elevated-glow rounded-full border border-brand-cyan/80 bg-brand-cyan/10 px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan sm:text-sm"
            >
              See My Work
            </a>
            <a
              href="#contact"
              data-cursor-hover="true"
              className="rounded-full border border-white/20 bg-white/[0.03] px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-ivory hover:border-brand-cyan/70 hover:text-brand-cyan sm:text-sm"
            >
              Let&apos;s Talk
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover="true"
              className="rounded-full border border-white/20 bg-white/[0.03] px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-ivory hover:border-brand-cyan/70 hover:text-brand-cyan sm:text-sm"
            >
              GitHub
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover="true"
              className="rounded-full border border-white/20 bg-white/[0.03] px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-ivory hover:border-brand-cyan/70 hover:text-brand-cyan sm:text-sm"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${emailAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover="true"
              className="rounded-full border border-white/20 bg-white/[0.03] px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-ivory hover:border-brand-cyan/70 hover:text-brand-cyan sm:text-sm"
            >
              {emailAddress}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
