import { createRoot } from "react-dom/client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import App from "./App.tsx";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

if (import.meta.env.DEV) {
  const originalWarn = console.warn;
  console.warn = (...args: unknown[]) => {
    if (typeof args[0] === "string" && args[0].includes("THREE.Clock")) {
      return;
    }
    originalWarn(...args);
  };
}

function Root() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.4,
      syncTouch: false,
    });

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        lenis.stop();
        return;
      }

      lenis.start();
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      gsap.ticker.remove(updateLenis);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return <App />;
}

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

const rootContainer = container as HTMLElement & {
  __reactRoot?: ReturnType<typeof createRoot>;
};

if (!rootContainer.__reactRoot) {
  rootContainer.__reactRoot = createRoot(container);
}

rootContainer.__reactRoot.render(<Root />);
