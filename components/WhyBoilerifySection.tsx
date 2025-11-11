"use client";

import { motion } from "framer-motion";
import { Zap, Layers, Layout, Shield, Code2, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Project Setup",
    description: "Spin up a fully-configured project with one command — faster structure, no boilerplate headaches."
  },
  {
    icon: Layers,
    title: "Ready-to-Code MVC",
    description: "Perfect MVC architecture with controllers, routes, and middleware preconfigured — jump straight into logic."
  },
  {
    icon: Layout,
    title: "Built-in Frontend + Backend",
    description: "React + Express templates ready to work together with consistent API structure and error handling."
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Choose to include dotenv Config Starter automatically, protecting environment variables from day one."
  },
  {
    icon: Code2,
    title: "Tailwind Integration",
    description: "Optional Tailwind CSS and PostCSS configuration built-in — modern styling without manual setup."
  },
  {
    icon: Clock,
    title: "Production Ready",
    description: "Well-structured and clean responses included — deploy-ready structures for maintainable builds at scale."
  }
];

export default function WhyBoilerifySection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Boilerify?
          </h2>
          <p className="text-gray-400 text-lg">
            A practical CLI tool built for developers who value time, structure, and scalability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 group hover:border-emerald-500/50 transition relative overflow-hidden"
            >
              <div className="absolute top-25 -left-10 group-hover:-top-30 group-hover:left-full transition-all duration-1000 h-full w-5 -rotate-50 bg-white/20 blur-lg"></div>
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl group-hover:text-emerald-400 transition duration-250 font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition duration-250 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
