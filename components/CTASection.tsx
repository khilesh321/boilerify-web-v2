"use client";

import { motion } from "framer-motion";
import { Gift, Github } from "lucide-react";

export default function CTASection() {
  return (
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
              className="px-8 py-4 bg-linear-to-r from-emerald-500 to-green-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition flex items-center gap-2"
            >
              <Gift className="w-5 h-5" />
              Installation
            </a>
            <a
              href="https://github.com/khilesh321/boilerify-cli"
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
  );
}
