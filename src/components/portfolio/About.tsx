import { motion } from "framer-motion";
import { Code2, Palette, Rocket, BookOpen } from "lucide-react";

const skills = [
  { category: "Building", items: ["Lovable", "Cursor", "v0", "Bolt", "Replit"] },
  { category: "Product", items: ["Figma", "Notion", "Linear", "Miro", "Framer"] },
  { category: "AI Tools", items: ["ChatGPT", "Claude", "Midjourney", "Copilot"] },
  { category: "Core Skills", items: ["Product Thinking", "Rapid Prototyping", "User Research", "Storytelling"] },
];

const values = [
  {
    icon: Rocket,
    title: "Ship Fast",
    description: "Move quickly from idea to MVP. Iterate based on real feedback.",
  },
  {
    icon: Palette,
    title: "Vibe First",
    description: "Trust intuition and aesthetics. Great products feel right before they work right.",
  },
  {
    icon: Code2,
    title: "AI-Augmented",
    description: "Leverage AI tools to build beyond traditional skill limits.",
  },
  {
    icon: BookOpen,
    title: "Always Learning",
    description: "Constantly exploring new tools, trends, and ways to create.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Get to Know Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm <strong className="text-foreground">Shivam Sharma</strong>, a vibe coder and product 
                builder who believes the best way to learn is to ship. I use AI-powered tools and 
                no-code platforms to turn ideas into working products—fast.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm not a traditional developer who memorizes syntax. Instead, I focus on understanding 
                user problems, designing experiences, and leveraging the latest tools to bring 
                solutions to life without getting lost in the technical weeds.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This portfolio is my build log—a collection of projects, case studies, and documentation 
                that showcase how I think, what I've shipped, and what I'm learning along the way.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6">Core Values</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-card rounded-xl border border-border"
                  >
                    <value.icon className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.1 }}
                >
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20"
            >
              <h4 className="font-semibold mb-2">What I Bring</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Shipped multiple products from idea to launch using AI tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Strong product intuition and user-first thinking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Rapid prototyping—concept to clickable in hours, not weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Documenting everything for learning and sharing</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
