import { motion } from "framer-motion";
import { Code2, Palette, Rocket, BookOpen } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "VS Code"] },
  { category: "Soft Skills", items: ["Problem Solving", "Communication", "Leadership", "Agile"] },
];

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Creating intuitive interfaces that delight users at every interaction.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and efficiency without compromising quality.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Staying updated with the latest technologies and best practices.",
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
                I'm <strong className="text-foreground">Shivam Sharma</strong>, a full-stack developer 
                with a passion for building digital products that make a difference. With over 5 years 
                of experience in web development, I've had the privilege of working with startups and 
                enterprises alike.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                My journey in tech began with curiosity about how things work on the internet. 
                Today, I specialize in creating end-to-end solutions that are not only functional 
                but also beautiful and user-centric.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through technical writing and mentoring.
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
              <h4 className="font-semibold mb-2">Experience Highlights</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Led development of 15+ production applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Collaborated with cross-functional teams of 20+ members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Contributed to open-source projects with 1000+ stars</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Mentored junior developers and conducted tech workshops</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
