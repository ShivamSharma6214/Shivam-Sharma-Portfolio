import { motion, useReducedMotion } from "framer-motion";

export function About() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 md:py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: reducedMotion ? 0 : 0.68, ease: "easeOut" }}
          >
            <h2 className="font-display text-[5.5rem] leading-none text-brand-ivory/88 sm:text-[8rem] md:text-[10.5rem]">
              ABOUT
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{
              duration: reducedMotion ? 0 : 0.58,
              delay: reducedMotion ? 0 : 0.12,
            }}
            className="glass-card rounded-3xl p-8 md:p-9"
          >
            <p className="text-lg leading-relaxed text-brand-ivory sm:text-xl">
              I&apos;m Shivam — a final-year CS student at IKGPTU who builds and
              ships real products. Not mockups. Not demos. Real systems used by
              real people. UrbanIQ processed 4,000+ complaints. DOCMIZE is live
              on Vercel. DreamAI is in active development with Mixpanel
              instrumentation and a retention model. I think in product and
              execute in code.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
