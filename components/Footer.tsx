"use client";

import { Terminal, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
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
              href="https://www.linkedin.com/in/khilesh-jawale/"
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
  );
}
