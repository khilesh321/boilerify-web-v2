"use client";

import { motion } from "framer-motion";
import { Terminal, Github, Download } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
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
            <Link href="#features" className="hover:text-emerald-400 transition">Features</Link>
            <Link href="#setup" className="hover:text-emerald-400 transition">Setup</Link>
            <Link href="#docs" className="hover:text-emerald-400 transition">Docs</Link>
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

          {/* Mobile Button */}
          <a
            href="https://www.npmjs.com/package/boilerify"
            target="_blank"
            className="md:hidden px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition flex items-center gap-2 text-sm"
          >
            <Download className="w-4 h-4" />
            Install
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
