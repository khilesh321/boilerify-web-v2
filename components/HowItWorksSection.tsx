"use client";

import { motion } from "framer-motion";
import { Download, Terminal, CheckCircle2, Play } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Download,
    title: "Install globally",
    command: "npm install -g boilerify"
  },
  {
    number: "2",
    icon: Terminal,
    title: "Run the CLI",
    command: "npx boilerify my-app"
  },
  {
    number: "3",
    icon: CheckCircle2,
    title: "Choose options",
    command: "Frontend, Backend, Tailwind"
  },
  {
    number: "4",
    icon: Play,
    title: "Start building",
    command: "cd my-app && npm run dev"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="setup" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg">
            Get started with Boilerify in four simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-600/20 flex items-center justify-center border border-emerald-500/30">
                <step.icon className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 font-mono">{step.command}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
