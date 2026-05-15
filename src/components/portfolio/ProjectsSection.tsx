import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ProjectEntry {
  name: string;
  description: string;
  tags: string[];
  spanClass: string;
  link: string;
}

const projects: ProjectEntry[] = [
  {
    name: "UrbanIQ",
    description:
      "University-Deployed Platform · Jan 2024 – Dec 2024. Campus complaint and document management platform adopted by university administration. Processed 4,000+ submissions across departments in 4 months. Ran Python (pandas) EDA on complaint records — findings reduced avg. resolution time by 30%. Built Metabase dashboard for weekly ops review.",
    tags: [
      "Product Management",
      "Python",
      "Metabase",
      "React",
      "Agile",
      "4,000+ submissions",
      "30% faster resolution",
      "25% sprint velocity improvement",
    ],
    spanClass: "md:col-span-2",
    link: "https://github.com/ShivamSharma6214",
  },
  {
    name: "DreamAI",
    description:
      "AI-Powered B2C Platform · Feb 2026 – Present. Defining roadmap, GTM strategy, and retention loops for an AI image generation platform. Instrumented Mixpanel across 5 core touchpoints — signup, first generation, share, D3 return, D7 return. Designed retention-first onboarding targeting 5% D7 retention.",
    tags: [
      "Product Strategy",
      "Next.js",
      "Mixpanel",
      "GenAI",
      "Retention",
      "5 Mixpanel touchpoints",
      "D7 retention target: 5%",
    ],
    spanClass: "md:col-span-1",
    link: "https://github.com/ShivamSharma6214",
  },
  {
    name: "Animatrixx",
    description:
      "Anime Streaming Platform Concept. UI/UX concept for an anime streaming platform. Focus on content discovery, watchlist management, and clean dark-mode interface design.",
    tags: ["UI Design", "React", "Tailwind CSS"],
    spanClass: "md:col-span-1",
    link: "https://github.com/ShivamSharma6214",
  },
  {
    name: "DOCMIZE",
    description:
      "Hospital Management System · 2024. Next.js 14 / Supabase / Prisma hospital management system with 4 role-based dashboards — Admin, Doctor, Nurse, Patient. Designed relational schema for patient records, appointment scheduling, and department workflows. Deployed live on Vercel.",
    tags: [
      "Next.js 14",
      "Supabase",
      "Prisma",
      "TypeScript",
      "REST API",
      "4 role-based dashboards",
      "Live on Vercel",
    ],
    spanClass: "md:col-span-2",
    link: "https://github.com/ShivamSharma6214/DOCMIZE",
  },
];

export function ProjectsSection() {
  const cardRefs = useRef<(HTMLArticleElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  useGSAP(() => {
    if (reducedMotion) {
      return;
    }

    const teardown: Array<() => void> = [];

    cardRefs.current.forEach((card) => {
      if (!card) {
        return;
      }

      const glow = card.querySelector<HTMLElement>("[data-glow]");

      const onMove = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const px = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const py = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

        gsap.to(card, {
          rotateY: px * 7.5,
          rotateX: py * -7.5,
          transformPerspective: 920,
          transformOrigin: "center",
          duration: 0.34,
          ease: "power2.out",
        });

        if (glow) {
          gsap.to(glow, {
            x: px * 36,
            y: py * 32,
            opacity: 0.72,
            duration: 0.32,
            ease: "power2.out",
          });
        }
      };

      const onEnter = () => {
        gsap.to(card, { scale: 1.01, duration: 0.3, ease: "power2.out" });
      };

      const onLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.55,
          ease: "power3.out",
        });
        if (glow) {
          gsap.to(glow, { x: 0, y: 0, opacity: 0.32, duration: 0.45, ease: "power2.out" });
        }
      };

      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);

      teardown.push(() => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      teardown.forEach((dispose) => dispose());
    };
  }, [reducedMotion]);

  return (
    <section id="projects" className="py-24 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
          className="mb-12 md:mb-14"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-brand-cyan">Selected Work</p>
          <h2 className="font-display mt-4 text-5xl text-brand-ivory sm:text-6xl md:text-7xl">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{
                duration: reducedMotion ? 0 : 0.65,
                delay: reducedMotion ? 0 : index * 0.07,
              }}
              className={`${project.spanClass} group relative overflow-hidden rounded-3xl glass-card p-7 md:p-9 [transform-style:preserve-3d]`}
            >
              <div
                data-glow
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,212,255,0.16), transparent 58%)",
                }}
              />

              <div className="absolute inset-0 rounded-3xl border border-brand-cyan/0 transition-colors duration-300 group-hover:border-brand-cyan/60" />

              <div className="relative z-10">
                <h3 className="font-display text-4xl text-brand-ivory sm:text-5xl">{project.name}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#f0ede8]/76 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[0.68rem] uppercase tracking-[0.19em] text-[#f0ede8]/86 sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover="true"
                  className="mt-8 inline-block translate-y-2 text-sm uppercase tracking-[0.22em] text-brand-cyan opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  View Project &rarr;
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

