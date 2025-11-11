"use client";

import { motion } from "framer-motion";
import { 
  Terminal, 
  Zap, 
  Layout, 
  Server, 
  Layers, 
  Download, 
  Play, 
  CheckCircle2,
  Sparkles,
  Clock,
  Shield,
  Code2,
  FileCode,
  BookOpen,
  Puzzle,
  Gift,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
  Star
} from "lucide-react";
import Link from "next/link";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 grid-background opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass-card border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-emerald-400" />
              <span className="text-xl font-bold">Boilerify</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="hover:text-emerald-400 transition">Features</Link>
              <Link href="#setup" className="hover:text-emerald-400 transition">Setup</Link>
              <Link href="#docs" className="hover:text-emerald-400 transition">Docs</Link>
              <a 
                href="https://github.com/khilesh321/boilerify" 
                target="_blank"
                className="flex items-center gap-2 hover:text-emerald-400 transition"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
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
                <span className="text-sm text-emerald-400">v1.0.0 now available</span>
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
                href="https://github.com/khilesh321/boilerify"
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

      {/* Choose Your Stack Section */}
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
            {[
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
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-8 hover:border-emerald-500/50 transition group"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition">
                  <card.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 mb-6">{card.description}</p>
                <ul className="space-y-3">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
            {[
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
            ].map((step, index) => (
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

      {/* Why Boilerify Section */}
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
            {[
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
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-emerald-500/50 transition"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation & Setup Section */}
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
            {[
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
            ].map((doc, index) => (
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

      {/* CTA Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Start Building Faster
            </h2>
            <p className="text-gray-400 text-lg">
              Join developers worldwide who are starting focus on building, not project setup
            </p>

            {/* Install Command */}
            <div className="glass-card rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <code className="text-emerald-400 font-mono text-lg">
                  npm install -g boilerify
                </code>
                <button
                  onClick={() => navigator.clipboard.writeText('npm install -g boilerify')}
                  className="px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg text-sm transition"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.npmjs.com/package/boilerify"
                target="_blank"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition flex items-center gap-2"
              >
                <Gift className="w-5 h-5" />
                Installation
              </a>
              <a
                href="https://github.com/khilesh321/boilerify"
                target="_blank"
                className="px-8 py-4 glass-card rounded-lg font-semibold hover:border-emerald-500/50 transition flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                Contribute
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Boilerify',
                      text: 'Generate full-stack React + Express apps instantly',
                      url: window.location.href
                    });
                  }
                }}
                className="px-8 py-4 glass-card rounded-lg font-semibold hover:border-emerald-500/50 transition"
              >
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Terminal className="w-5 h-5 text-emerald-400" />
              <span className="text-sm text-gray-400">
                Built with ❤️ by{" "}
                <a 
                  href="https://github.com/khilesh321" 
                  target="_blank"
                  className="text-emerald-400 hover:underline"
                >
                  Khilesh Jawale
                </a>
              </span>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/khilesh321"
                target="_blank"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-gray-400 hover:text-emerald-400 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Boilerify. Open source under MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
