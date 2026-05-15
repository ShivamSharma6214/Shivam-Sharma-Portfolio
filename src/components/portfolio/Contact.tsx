import { motion, useReducedMotion } from "framer-motion";

const githubUrl = "https://github.com/ShivamSharma6214";
const linkedInUrl = "https://linkedin.com/in/shivamsharma6214";
const email = "sharmashivam6214@gmail.com";

export function Contact() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="contact" className="py-24 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reducedMotion ? 0 : 0.62, ease: "easeOut" }}
          className="glass-card rounded-[2rem] px-6 py-16 text-center md:px-10"
        >
          <h2 className="font-display text-5xl text-brand-ivory sm:text-6xl md:text-7xl">GOT A PROJECT?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm uppercase tracking-[0.2em] text-[#f0ede8]/72 sm:text-base">
            Let&apos;s build something worth visiting.
          </p>

          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover="true"
            className="elevated-glow mt-10 inline-flex rounded-full border border-brand-cyan/80 bg-brand-cyan/10 px-7 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-cyan sm:text-sm"
          >
            Start a Conversation
          </a>

          <div className="mt-8 flex items-center justify-center gap-8 text-xs uppercase tracking-[0.22em] sm:text-sm">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" data-cursor-hover="true" className="text-[#f0ede8]/75 hover:text-brand-cyan">
              GitHub
            </a>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" data-cursor-hover="true" className="text-[#f0ede8]/75 hover:text-brand-cyan">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
