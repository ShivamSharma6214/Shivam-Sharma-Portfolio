import { useEffect, useRef } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const skillMarqueeItems = [
  "Product & Strategy: PRD Authoring",
  "Roadmapping",
  "GTM Strategy",
  "Agile / Scrum",
  "Sprint Planning",
  "KPI Tracking",
  "AARRR Framework",
  "A/B Testing",
  "Funnel Analysis",
  "Cohort & Retention Analysis",
  "Data & Analytics: SQL",
  "Python (pandas, numpy, matplotlib)",
  "Mixpanel",
  "Metabase",
  "Google Looker Studio",
  "Excel",
  "Technical: React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "REST APIs",
  "Supabase",
  "Prisma",
  "GenAI Integration",
  "Git",
  "Jira",
  "Notion",
];

const marqueeText = `${skillMarqueeItems.join(" · ")} · `;

function MarqueeStrip() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-4">
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap pr-10 text-xs uppercase tracking-[0.32em] text-[#f0ede8]/60 sm:text-sm">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>
    </section>
  );
}

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (reducedMotion || !finePointer) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }

    document.body.classList.add("cursor-enabled");

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let targetScale = 1;
    let currentScale = 1;
    let frameId = 0;

    const updateCursor = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      currentScale += (targetScale - currentScale) * 0.18;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${currentScale})`;
      frameId = window.requestAnimationFrame(updateCursor);
    };

    const handleMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.style.opacity = "1";
    };

    const handleLeave = () => {
      cursor.style.opacity = "0";
    };

    const activateHover = () => {
      targetScale = 2.25;
    };

    const deactivateHover = () => {
      targetScale = 1;
    };

    const hoverables = document.querySelectorAll<HTMLElement>(
      "a, button, [data-cursor-hover='true']",
    );
    hoverables.forEach((element) => {
      element.addEventListener("mouseenter", activateHover);
      element.addEventListener("mouseleave", deactivateHover);
    });

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    frameId = window.requestAnimationFrame(updateCursor);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      hoverables.forEach((element) => {
        element.removeEventListener("mouseenter", activateHover);
        element.removeEventListener("mouseleave", deactivateHover);
      });
      document.body.classList.remove("cursor-enabled");
    };
  }, []);

  return <div ref={cursorRef} className="cursor-ring opacity-0" />;
}

const Index = () => {
  return (
    <div className="relative min-h-screen bg-[#050508] text-[#f0ede8]">
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <MarqueeStrip />
        <div id="work">
          <ProjectsSection />
        </div>
        <CaseStudies />
        <div id="about">
          <About />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
