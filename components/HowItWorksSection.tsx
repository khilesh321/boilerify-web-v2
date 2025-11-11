"use client";

import { motion } from "framer-motion";
import { Download, Terminal, CheckCircle2, Play, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Download,
    title: "Install globally",
    command: "npm install -g boilerify",
    description: "Quick one-time global installation"
  },
  {
    number: "2",
    icon: Terminal,
    title: "Run the CLI",
    command: "npx boilerify my-app",
    description: "Initialize your new project"
  },
  {
    number: "3",
    icon: CheckCircle2,
    title: "Choose options",
    command: "Select features interactively",
    description: "Pick Frontend, Backend, Tailwind & more"
  },
  {
    number: "4",
    icon: Play,
    title: "Start building",
    command: "cd my-app && npm run dev",
    description: "Your app is ready to develop"
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

        <div className="grid md:grid-cols-4 gap-6 relative">
          {/* Connecting lines for desktop */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-linear-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="glass-card rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 group h-full flex flex-col">
                {/* Step number badge */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-linear-to-br from-emerald-500/20 to-green-600/20 flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-500/60 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-emerald-500/20">
                    <step.icon className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold text-sm shadow-lg shadow-emerald-500/50">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">
                    {step.description}
                  </p>
                  <div className="mt-auto">
                    <code className="text-xs text-emerald-400 bg-black/30 px-3 py-2 rounded-lg font-mono block break-all">
                      {step.command}
                    </code>
                  </div>
                </div>
              </div>

              {/* Arrow between steps (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[1.3em] -right-7 z-10">
                  <ArrowRight className="w-6 h-6 text-emerald-500/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA below steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Ready to try it out?</p>
          <a
            href="https://www.npmjs.com/package/boilerify"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-emerald-500 to-green-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Install Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
