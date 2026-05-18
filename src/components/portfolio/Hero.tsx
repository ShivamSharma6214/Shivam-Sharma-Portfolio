import { lazy, Suspense, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ContactModal from "./ContactModal";

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
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth" });
  };

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
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#050508] pt-24 md:flex-row"
    >
      <div className="blob-orb absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-cyan/18 blur-3xl" />
      <div className="blob-orb absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-brand-violet/18 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(0,212,255,0.08),transparent_36%),radial-gradient(circle_at_30%_80%,rgba(124,58,237,0.12),transparent_42%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: reducedMotion ? 0 : 1.1,
          ease: "easeOut",
          delay: reducedMotion ? 0 : 0.3,
        }}
        className="pointer-events-none relative order-2 z-0 mx-auto mt-10 flex h-[280px] w-full max-w-[280px] items-center justify-center overflow-hidden md:absolute md:inset-y-0 md:right-0 md:order-none md:mt-0 md:h-auto md:w-[52vw] md:min-w-[280px] md:max-w-full lg:w-[48vw]"
      >
        <Suspense fallback={<div className="h-full w-full" />}>
          <HeroThreeScene />
        </Suspense>
      </motion.div>

      <div className="section-shell relative z-10 order-1 w-full !px-4 sm:!px-6 md:!px-12 lg:!px-24">
        <div className="mx-auto w-full max-w-3xl text-center md:mx-0 md:-translate-x-[50px] md:pr-[230px] md:text-left">
          <div className="space-y-1 text-5xl uppercase leading-[0.9] text-brand-ivory sm:text-7xl md:text-8xl lg:text-9xl">
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
            className="mx-auto mt-7 max-w-lg text-sm uppercase tracking-[0.24em] text-[#f0ede8]/72 sm:text-base md:mx-0 md:text-lg"
          >
            Freelance Developer · Product Manager · Builder of Real Things
          </p>

          <div
            ref={ctaRef}
            className="mt-10 grid w-full grid-cols-1 gap-4 text-center sm:grid-cols-2"
          >
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              data-cursor-hover="true"
              className="elevated-glow w-full rounded-full border border-brand-cyan/80 bg-brand-cyan/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand-cyan sm:px-7 sm:py-3"
            >
              See My Work
            </button>
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              data-cursor-hover="true"
              className="w-full rounded-full border border-white/20 bg-white/[0.03] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand-ivory hover:border-brand-cyan/70 hover:text-brand-cyan sm:px-7 sm:py-3"
            >
              Let&apos;s Talk
            </button>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover="true"
              className="w-full rounded-full border border-white/20 bg-white/[0.03] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand-ivory hover:border-brand-cyan/70 hover:text-brand-cyan sm:px-7 sm:py-3"
            >
              GitHub
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover="true"
              className="w-full rounded-full border border-white/20 bg-white/[0.03] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand-ivory hover:border-brand-cyan/70 hover:text-brand-cyan sm:px-7 sm:py-3"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${emailAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover="true"
              className="w-full break-all rounded-full border border-white/20 bg-white/[0.03] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand-ivory hover:border-brand-cyan/70 hover:text-brand-cyan sm:col-span-2 sm:px-7 sm:py-3"
            >
              {emailAddress}
            </a>
          </div>
        </div>
      </div>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </section>
  );
}
