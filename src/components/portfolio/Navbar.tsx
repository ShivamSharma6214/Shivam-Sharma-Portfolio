import { useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ContactModal from "./ContactModal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const navLinks = [
  { label: "Work", sectionId: "work" },
  { label: "About", sectionId: "about" },
  { label: "Contact", sectionId: "contact" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    section.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavAction = (sectionId: string) => {
    if (sectionId === "contact") {
      setIsContactOpen(true);
      return;
    }

    scrollTo(sectionId);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const trigger = ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top+=56 top",
        end: "max",
        onEnter: () => setIsScrolled(true),
        onLeaveBack: () => setIsScrolled(false),
      });

      const handleVisibilityChange = () => {
        if (!document.hidden) {
          ScrollTrigger.refresh();
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      if (reducedMotion) {
        return () => {
          document.removeEventListener(
            "visibilitychange",
            handleVisibilityChange,
          );
          trigger.kill();
        };
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
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange,
        );
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
      className={`fixed inset-x-0 top-0 z-50 isolate overflow-visible transition-all duration-500 [backface-visibility:hidden] ${
        isScrolled ? "border-b border-white/10" : "bg-transparent"
      }`}
    >
      {isScrolled && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[#050508]/72 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.45)] [transform:translateZ(0)]"
        />
      )}
      <div className="section-shell !px-[50px]">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#home"
            data-cursor-hover="true"
            className="font-display -translate-x-[50px] rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-2xl leading-none tracking-[0.18em] text-[#f0ede8]"
          >
            SS
          </a>

          <div className="hidden translate-x-[40px] items-center gap-2 sm:gap-4 md:flex md:gap-7">
            {navLinks.map((link, index) => (
              <button
                key={link.label}
                ref={(element) => {
                  linkRefs.current[index] = element;
                }}
                type="button"
                onClick={() => handleNavAction(link.sectionId)}
                data-cursor-hover="true"
                className="border-0 bg-transparent p-0 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-[#f0ede8]/78 hover:text-brand-cyan sm:text-xs md:text-sm"
              >
                {link.label}
              </button>
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

          <div className="relative translate-x-[40px] md:hidden">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              data-cursor-hover="true"
              onClick={handleMenuToggle}
              className="rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#f0ede8]"
            >
              Menu
            </button>

            {isMenuOpen && (
              <div
                id="mobile-nav-menu"
                className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-[#050508]/95 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
              >
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <button
                      key={link.label}
                      type="button"
                      onClick={() => {
                        handleNavAction(link.sectionId);
                        setIsMenuOpen(false);
                      }}
                      data-cursor-hover="true"
                      className="border-0 bg-transparent p-0 text-left text-xs font-medium uppercase tracking-[0.28em] text-[#f0ede8]/78 hover:text-brand-cyan"
                    >
                      {link.label}
                    </button>
                  ))}
                  <a
                    href="/Shivam_Sharma_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover="true"
                    onClick={() => setIsMenuOpen(false)}
                    className="resume-pulse rounded-full border border-brand-cyan/80 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-brand-cyan hover:bg-brand-cyan/10"
                  >
                    Resume
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </motion.nav>
  );
}
