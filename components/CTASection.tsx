"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Gift, Github, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CTASection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install -g boilerify');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
                onClick={handleCopy}
                className="px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg text-sm transition flex items-center gap-2 min-w-[100px] justify-center"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      Copied!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copy
                    </motion.span>
                  )}
                </AnimatePresence>
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
