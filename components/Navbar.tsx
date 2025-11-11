"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Github, Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-card border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-emerald-400" />
            <span className="text-xl font-bold">Boilerify</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="hover:text-emerald-400 transition">Features</Link>
            <Link href="/#setup" className="hover:text-emerald-400 transition">Setup</Link>
            <Link href="/docs" className="hover:text-emerald-400 transition">Docs</Link>
            <a 
              href="https://github.com/khilesh321/boilerify-cli" 
              target="_blank"
              className="flex items-center gap-2 hover:text-emerald-400 transition"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/boilerify"
              target="_blank"
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Install CLI
            </a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              className="relative w-6 h-6"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-1 left-0 w-6 h-0.5 bg-white origin-center block"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                transition={{ duration: 0.2 }}
                className="absolute top-1/2 left-0 w-6 h-0.5 bg-white -translate-y-1/2 block"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-1 left-0 w-6 h-0.5 bg-white origin-center block"
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="py-4 space-y-4 border-t border-white/10 mt-4"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link 
                    href="/#features" 
                    className="block py-2 hover:text-emerald-400 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <Link 
                    href="/#setup" 
                    className="block py-2 hover:text-emerald-400 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Setup
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link 
                    href="/docs" 
                    className="block py-2 hover:text-emerald-400 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Docs
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <a 
                    href="https://github.com/khilesh321/boilerify-cli" 
                    target="_blank"
                    className="flex items-center gap-2 py-2 hover:text-emerald-400 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="https://www.npmjs.com/package/boilerify"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Download className="w-4 h-4" />
                    Install CLI
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
