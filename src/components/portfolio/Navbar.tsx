import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const navLinks = [
  { label: "Work", sectionId: "work" },
  { label: "About", sectionId: "about" },
  { label: "Contact", sectionId: "contact" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();

    const selector = `#${sectionId}`;
    const lenis = (window as { lenis?: { scrollTo: (target: string, options: { duration: number; easing: (t: number) => number }) => void } }).lenis;

    if (lenis?.scrollTo) {
      lenis.scrollTo(selector, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      return;
    }

    const section = document.querySelector(selector);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const trigger = ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top+=56 top",
        end: "max",
        onEnter: () => setIsScrolled(true),
        onLeaveBack: () => setIsScrolled(false),
      });

      if (reducedMotion) {
        return () => trigger.kill();
      }

      const teardown: Array<() => void> = [];

      linkRefs.current.forEach((link) => {
        if (!link) {
          return;
        }

        const onMove = (event: MouseEvent) => {
          const bounds = link.getBoundingClientRect();
          const x = (event.clientX - bounds.left - bounds.width / 2) * 0.22;
          const y = (event.clientY - bounds.top - bounds.height / 2) * 0.34;

          gsap.to(link, {
            x,
            y,
            duration: 0.22,
            ease: "power3.out",
          });
        };

        const onLeave = () => {
          gsap.to(link, {
            x: 0,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          });
        };

        link.addEventListener("mousemove", onMove);
        link.addEventListener("mouseleave", onLeave);

        teardown.push(() => {
          link.removeEventListener("mousemove", onMove);
          link.removeEventListener("mouseleave", onLeave);
        });
      });

      return () => {
        trigger.kill();
        teardown.forEach((dispose) => dispose());
      };
    },
    { scope: navRef },
  );

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed inset-x-0 top-0 z-50 isolate overflow-hidden transition-all duration-500 [backface-visibility:hidden] ${
        isScrolled ? "border-b border-white/10" : "bg-transparent"
      }`}
    >
      {isScrolled && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[#050508]/72 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.45)] [transform:translateZ(0)]"
        />
      )}
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#home"
            data-cursor-hover="true"
            className="font-display rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-2xl leading-none tracking-[0.18em] text-[#f0ede8]"
          >
            SS
          </a>

          <div className="flex items-center gap-2 sm:gap-4 md:gap-7">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                ref={(element) => {
                  linkRefs.current[index] = element;
                }}
                href={`#${link.sectionId}`}
                onClick={(event) => handleNavClick(event, link.sectionId)}
                data-cursor-hover="true"
                className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[#f0ede8]/78 hover:text-brand-cyan sm:text-xs md:text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Shivam_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover="true"
              className="resume-pulse rounded-full border border-brand-cyan/80 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-brand-cyan hover:bg-brand-cyan/10 sm:text-xs"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
