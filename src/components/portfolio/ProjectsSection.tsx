import { motion } from "framer-motion";
import { ExternalLink, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment integration, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    docsUrl: "#",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An intelligent content creation tool powered by GPT-4, featuring custom templates and brand voice training.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    liveUrl: "#",
    githubUrl: "#",
    docsUrl: "#",
  },
  {
    id: 3,
    title: "Project Management Tool",
    description: "Collaborative project management with Kanban boards, time tracking, and team communication features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Health & Fitness App",
    description: "Mobile-first fitness tracking application with workout plans, nutrition logging, and progress analytics.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    docsUrl: "#",
  },
  {
    id: 5,
    title: "Real Estate Marketplace",
    description: "Property listing platform with virtual tours, mortgage calculator, and agent matching system.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    tags: ["Vue.js", "Laravel", "MySQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Learning Management System",
    description: "Educational platform with course creation tools, progress tracking, and certificate generation.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    tags: ["Django", "React", "PostgreSQL", "Redis"],
    liveUrl: "#",
    docsUrl: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've built, from concept to deployment. 
            Each project showcases different technologies and problem-solving approaches.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.docsUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.docsUrl} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-4 h-4 mr-1" />
                        Docs
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
