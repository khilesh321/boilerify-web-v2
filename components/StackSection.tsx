"use client";

import { motion } from "framer-motion";
import { Layout, Server, Layers, CheckCircle2 } from "lucide-react";

const templates = [
  {
    icon: Layout,
    title: "React + Vite Frontend",
    description: "Modern React setup with lightning-fast Vite builds",
    features: [
      "Pre-installed React structure",
      "Built-in environment setup (.env)",
      "Integrated Tailwind CSS + PostCSS",
      "Optimized Vite bundler config",
      "Ready for API integration via axios"
    ]
  },
  {
    icon: Server,
    title: "Express Backend",
    description: "Production-ready REST API with middleware pre-config",
    features: [
      "Controllers, routes & middleware pre-coded",
      "Consistent response & error handlers",
      "dotenv configuration included",
      "Request validation support",
      "Ready to integrate Postgres/Sequelize structure"
    ]
  },
  {
    icon: Layers,
    title: "Full Stack (React + Express)",
    description: "Complete frontend + backend stack ready to deploy",
    features: [
      "Pre-configured basic structure",
      "Built-in environment using dotenv",
      "Integrated error & response handling",
      "Concurrent development scripts using concurrently",
      "NEXT.js / Socket.io routes already supported",
      "Example chat demo included"
    ]
  }
];

export default function StackSection() {
  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose your Structure.
          </h2>
          <p className="text-gray-400 text-lg">
            Pre-configured templates for every project type — just pick, code, and go.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {templates.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="glass-card rounded-xl p-8 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 group cursor-pointer"
            >
              <motion.div 
                className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <card.icon className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors duration-300">{card.title}</h3>
              <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">{card.description}</p>
              <ul className="space-y-3">
                {card.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-2 text-sm text-gray-300"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ 
                      opacity: 1,
                      x: 4,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
