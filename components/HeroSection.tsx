"use client";

import { motion } from "framer-motion";
import { Zap, Github, ArrowRight, Star, CheckCircle2, Sparkles } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center space-y-8"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-emerald-500/30 mb-6">
              <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
              <span className="text-sm text-emerald-400">v1.1.1 now available</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Generate full-stack <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">
              React + Express apps
            </span>
            <br />
            <span className="inline-flex items-center gap-3">
              instantly <Zap className="w-12 h-12 md:w-16 md:h-16 text-emerald-400 inline" />
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A CLI tool that scaffolds React + Vite + Express projects in seconds — so you can start building, not configuring.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#setup"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/khilesh321/boilerify-cli"
              target="_blank"
              className="px-8 py-4 glass-card rounded-lg font-semibold hover:border-emerald-500/50 transition flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </motion.div>

          {/* Terminal Mock */}
          <motion.div 
            variants={fadeInUp}
            className="max-w-2xl mx-auto mt-12"
          >
            <div className="glass-card rounded-lg overflow-hidden border border-white/10">
              <div className="bg-zinc-900/50 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-gray-500 ml-2">Terminal</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">$</span>
                  <span>npx boilerify my-app</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Add frontend (React + Vite)?</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Add backend (Express)?</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Setup Tailwind and dotenv</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                  <span>Project created successfully!</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-400">$</span>
                  <span className="ml-2 terminal-cursor">|</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
