"use client";

import { motion } from "framer-motion";
import { BookOpen, FileCode, Puzzle, Code2 } from "lucide-react";

const docs = [
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Get up and running in under 3 minutes with our setup guide"
  },
  {
    icon: FileCode,
    title: "Template Structure",
    description: "Explore what files, folders, and configurations are generated"
  },
  {
    icon: Puzzle,
    title: "Contribution Guide",
    description: "How to contribute, maintain, and improve the codebase"
  },
  {
    icon: Code2,
    title: "API Reference",
    description: "Programmatic API for advanced customization and usage"
  }
];

export default function DocsSection() {
  return (
    <section id="docs" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Documentation & Setup
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive guides and references for Boilerify
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {docs.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-emerald-500/50 transition cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition">
                <doc.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">{doc.title}</h3>
              <p className="text-gray-400 text-sm">{doc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
