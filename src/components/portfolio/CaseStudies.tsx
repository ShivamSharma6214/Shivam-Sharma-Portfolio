import { motion, useReducedMotion } from "framer-motion";

interface CaseStudyEntry {
  title: string;
  description: string;
  link: string;
}

const caseStudies: CaseStudyEntry[] = [
  {
    title: "When Genshin Goes Quiet",
    description:
      "PM Case Study · Engagement & Retention. Root-cause analysis of a mid-patch engagement cliff in Genshin Impact. Identified retention failure points and proposed a framework to re-engage lapsed players using behavioral data patterns.",
    link: "https://climbing-quiver-c34.notion.site/Genshin-Impact-Case-Study-3280cb8dd27e80a095a0f1734c6e68fb",
  },
  {
    title: "The Valorant Smurf Tax",
    description:
      "PM Case Study · Trust & Safety. Analysis of why Riot's current smurf detection fails and what behavioral signals + system design would actually fix ranked integrity at scale.",
    link: "https://climbing-quiver-c34.notion.site/Valorant-Case-Study-32f0cb8dd27e8013bbd2fbb9283ef23d",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function CaseStudies() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="case-studies" className="py-24 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reducedMotion ? 0 : 0.58 }}
          className="mb-10 md:mb-12"
        >
          <p className="text-xs uppercase tracking-[0.32em] text-brand-cyan">
            Deep Dives
          </p>
          <h2 className="font-display mt-4 text-5xl text-brand-ivory sm:text-6xl md:text-7xl">
            Case Studies
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          className="space-y-5"
        >
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={reducedMotion ? undefined : { scale: 1.01 }}
              whileTap={reducedMotion ? undefined : { scale: 0.99 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{
                duration: reducedMotion ? 0 : 0.65,
                delay: reducedMotion ? 0 : index * 0.07,
              }}
              className="glass-card group flex w-full cursor-pointer flex-col justify-between gap-6 rounded-3xl p-7 md:flex-row md:items-center md:p-9"
            >
              <div className="max-w-3xl">
                <h3 className="font-display text-4xl text-brand-ivory sm:text-5xl">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#f0ede8]/76 sm:text-base">
                  {study.description}
                </p>
              </div>

              <a
                href={study.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover="true"
                className="shrink-0 text-sm uppercase tracking-[0.22em] text-brand-cyan transition-transform duration-300 group-hover:translate-x-1"
              >
                Read Case Study &rarr;
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
