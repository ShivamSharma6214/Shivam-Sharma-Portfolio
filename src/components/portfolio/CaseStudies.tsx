import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudy {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  duration: string;
  teamSize: string;
  impact: string;
  category: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Transforming Healthcare Delivery",
    client: "MedConnect Inc.",
    description: "Designed and developed a telemedicine platform that reduced patient wait times by 60% and increased doctor-patient engagement.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop",
    duration: "6 months",
    teamSize: "8 people",
    impact: "60% faster",
    category: "Healthcare",
  },
  {
    id: 2,
    title: "Scaling Fintech Operations",
    client: "PayFlow Solutions",
    description: "Built a microservices architecture that handled 10x transaction volume growth while maintaining 99.99% uptime.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
    duration: "8 months",
    teamSize: "12 people",
    impact: "10x scale",
    category: "Fintech",
  },
  {
    id: 3,
    title: "Revolutionizing E-Learning",
    client: "EduPro Academy",
    description: "Created an adaptive learning platform using AI that improved student completion rates by 45% and engagement by 80%.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
    duration: "10 months",
    teamSize: "6 people",
    impact: "45% higher completion",
    category: "EdTech",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Deep Dives</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Detailed explorations of complex projects, documenting the challenges, 
            solutions, and outcomes of real-world implementations.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      {study.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-sm text-muted-foreground mb-2">{study.client}</p>
                <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <Clock className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold">{study.duration}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <Users className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">Team</p>
                    <p className="font-semibold">{study.teamSize}</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <TrendingUp className="w-5 h-5 text-primary mb-2" />
                    <p className="text-sm text-muted-foreground">Impact</p>
                    <p className="font-semibold">{study.impact}</p>
                  </div>
                </div>

                <Button className="group">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
