"use client";

import { motion } from "framer-motion";
import { Terminal, Github } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
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
  );
}
