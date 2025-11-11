"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Rocket, 
  Package, 
  FileCode, 
  Server, 
  Palette, 
  Shield,
  CheckCircle,
  ArrowRight,
  Download,
  FolderTree,
  PlayCircle,
  BookOpen,
  Github,
  Zap,
  Code2,
  Settings,
  Home
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import HamburgerMenu from "@/components/HamburgerMenu";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    { id: "features", title: "Features", icon: Zap },
    { id: "prerequisites", title: "Prerequisites", icon: CheckCircle },
    { id: "quick-start", title: "Quick Start", icon: Rocket },
    { id: "usage", title: "Usage", icon: PlayCircle },
    { id: "structure", title: "Project Structure", icon: FolderTree },
    { id: "running", title: "Running Your Project", icon: PlayCircle },
    { id: "scripts", title: "Development Scripts", icon: Code2 },
    { id: "package-managers", title: "Package Managers", icon: Package },
    { id: "contributing", title: "Contributing", icon: Github },
    { id: "support", title: "Support", icon: BookOpen },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 grid-background opacity-100 pointer-events-none" />
      
      {/* Gradient Orbs */}
      <div className="fixed top-0 left-0 md:left-1/4 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-0 md:right-1/4 w-64 h-64 md:w-96 md:h-96 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:text-emerald-400 transition">
              <Home className="w-5 h-5" />
              <span className="font-semibold hidden sm:inline">Back to Home</span>
              <span className="font-semibold sm:hidden">Home</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-6 h-6 text-emerald-400" />
                <span className="text-xl font-bold hidden sm:inline">Boilerify Docs</span>
                <span className="text-lg font-bold sm:hidden">Docs</span>
              </div>
              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <HamburgerMenu 
                  isOpen={isMobileMenuOpen} 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[73px] right-0 bottom-0 w-80 max-w-[85vw] z-40 glass-card border-l border-white/10 lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              <h3 className="text-sm font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Navigation
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${
                      activeSection === section.id
                        ? "bg-emerald-500/20 text-emerald-400 border-l-2 border-emerald-500"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <section.icon className="w-4 h-4 shrink-0" />
                    <span className="truncate">{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex gap-8 relative">
          {/* Left Sidebar Navigation - Fixed */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="fixed top-24 w-64 max-h-[calc(100vh-7rem)] overflow-y-auto">
              <div className="glass-card rounded-xl p-6 border border-white/10">
                <h3 className="text-sm font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  On This Page
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition ${
                        activeSection === section.id
                          ? "bg-emerald-500/20 text-emerald-400 border-l-2 border-emerald-500"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <section.icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400">Complete Documentation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-linear-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent px-4">
            Documentation
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Everything you need to know about using Boilerify to scaffold production-ready fullstack projects
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16"
        >
          {[
            { icon: Rocket, title: "Quick Start", href: "#quick-start" },
            { icon: Settings, title: "Usage", href: "#usage" },
            { icon: FolderTree, title: "Structure", href: "#structure" },
            { icon: Code2, title: "Features", href: "#features" }
          ].map((link, i) => (
            <motion.a
              key={i}
              variants={fadeInUp}
              href={link.href}
              className="glass-card p-4 md:p-6 hover:border-emerald-500/50 transition group cursor-pointer rounded-xl"
            >
              <link.icon className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 mb-2 group-hover:scale-110 transition" />
              <h3 className="font-semibold text-sm md:text-base">{link.title}</h3>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12 md:space-y-16">
          {/* Features */}
          <Section id="features" icon={Zap} title="Features">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Terminal, text: "Interactive CLI with beautiful prompts using Clack.js" },
                { icon: Rocket, text: "React + Vite for lightning-fast frontend development" },
                { icon: Palette, text: "Optional Tailwind CSS with latest @tailwindcss/vite plugin" },
                { icon: Server, text: "Express.js minimal and flexible Node.js backend" },
                { icon: Shield, text: "dotenv support for secure configuration" },
                { icon: Package, text: "Clean frontend/backend separation structure" },
                { icon: FileCode, text: "Colorful terminal output with Chalk" },
                { icon: CheckCircle, text: "Robust error handling and validation" }
              ].map((feature, i) => (
                <FeatureItem key={i} icon={feature.icon} text={feature.text} />
              ))}
            </div>
          </Section>

          {/* Prerequisites */}
          <Section id="prerequisites" icon={CheckCircle} title="Prerequisites">
            <div className="space-y-4">
              <p className="text-gray-300">Before using Boilerify, make sure you have:</p>
              <div className="space-y-3">
                <RequirementItem 
                  title="Node.js (v18 or higher)" 
                  link="https://nodejs.org/"
                  linkText="Download Node.js"
                />
                <RequirementItem 
                  title="npm (comes with Node.js)" 
                />
              </div>
            </div>
          </Section>

          {/* Quick Start */}
          <Section id="quick-start" icon={Rocket} title="Quick Start">
            <div className="space-y-6">
              <InstallOption
                title="Option 1: Use npx (Recommended)"
                description="Run Boilerify directly without installation:"
                command="npx boilerify"
              />
              <InstallOption
                title="Option 2: Global Installation"
                description="Install globally to use anywhere:"
                commands={["npm install -g boilerify", "boilerify"]}
              />
              <InstallOption
                title="Option 3: Local Development"
                description="Clone and run locally:"
                commands={[
                  "# Clone the repository",
                  "git clone https://github.com/khilesh321/boilerify-cli.git",
                  "cd boilerify-cli",
                  "",
                  "# Install dependencies",
                  "pnpm install",
                  "",
                  "# Run the CLI",
                  "node index.js"
                ]}
              />
            </div>
          </Section>

          {/* Usage */}
          <Section id="usage" icon={PlayCircle} title="Usage">
            <div className="space-y-6">
              <p className="text-gray-300">Simply run the command and follow the interactive prompts:</p>
              <CodeBlock code="boilerify" />
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-400">Interactive Prompts</h3>
                <ol className="space-y-3 list-decimal list-inside text-gray-300">
                  <li><strong className="text-white">Project Name</strong> - Enter your desired project name</li>
                  <li><strong className="text-white">Frontend</strong> - Choose whether to include React + Vite</li>
                  <li><strong className="text-white">Tailwind CSS</strong> - (If frontend selected) Set up Tailwind CSS</li>
                  <li><strong className="text-white">Backend</strong> - Choose whether to include Express server</li>
                  <li><strong className="text-white">Environment Variables</strong> - (If backend selected) Add dotenv support</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-400">Example Session</h3>
                <CodeBlock 
                  language="plaintext"
                  code={`🚀 Boilerify - Fullstack Starter CLI

? What is your project name? › my-awesome-app
? Include frontend (React + Vite)? › Yes
? Set up Tailwind CSS? › Yes
? Include backend (Express)? › Yes
? Add dotenv for environment variables? › Yes

✔ Project created successfully!

┌─────────────────────────────────────────┐
│  Success! 🎉                            │
│                                         │
│  Project: my-awesome-app                │
│  Location: /path/to/my-awesome-app      │
│                                         │
│  Structure:                             │
│  ✔ Frontend (React + Vite) + Tailwind   │
│  ✔ Backend (Express) + dotenv           │
│                                         │
│  Next steps:                            │
│    $ cd my-awesome-app                  │
│    $ cd frontend && npm install && ...  │
│    $ cd backend && npm run dev          │
└─────────────────────────────────────────┘

Happy coding! 🚀`}
                />
              </div>
            </div>
          </Section>

          {/* Project Structure */}
          <Section id="structure" icon={FolderTree} title="Generated Project Structure">
            <div className="space-y-6">
              <p className="text-gray-300">A full-stack project with both frontend and backend:</p>
              <CodeBlock
                language="plaintext"
                code={`my-awesome-app/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css        # With @import "tailwindcss"
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js       # With @tailwindcss/vite plugin
│   └── .gitignore
├── backend/
│   ├── server.js            # Express server with CORS & routes
│   ├── .env                 # Environment variables
│   ├── package.json
│   └── .gitignore
├── README.md                # Auto-generated documentation
└── .gitignore`}
              />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-400">Backend Server (server.js)</h3>
                <p className="text-gray-300">The generated Express server includes:</p>
                <ul className="space-y-2">
                  {[
                    "Express.js setup with JSON middleware",
                    "CORS configuration for frontend communication",
                    "Health check endpoint (/api/health)",
                    "Error handling middleware",
                    "Environment variable support with dotenv",
                    "Development-ready logging"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-400">Frontend Setup</h3>
                <p className="text-gray-300">The Vite + React frontend includes:</p>
                <ul className="space-y-2">
                  {[
                    "Modern React with hooks",
                    "Vite for ultra-fast HMR",
                    "ESLint configuration",
                    "Optional Tailwind CSS with new @tailwindcss/vite plugin (no PostCSS config needed!)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-400">Environment Variables</h3>
                <p className="text-gray-300">A .env file is created in the backend with:</p>
                <CodeBlock
                  language="env"
                  code={`PORT=5000
NODE_ENV=development`}
                />
              </div>
            </div>
          </Section>

          {/* Running Your Project */}
          <Section id="running" icon={PlayCircle} title="Running Your Project">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-400">Start the Backend</h3>
                <CodeBlock
                  code={`cd my-awesome-app/backend
npm install  # First time only
npm run dev  # Starts server with auto-reload`}
                />
                <p className="text-gray-300">Backend will run on: <code className="px-2 py-1 bg-slate-800 rounded text-emerald-400">http://localhost:5000</code></p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-400">Start the Frontend</h3>
                <CodeBlock
                  code={`cd my-awesome-app/frontend
npm install  # First time only
npm run dev  # Starts Vite dev server`}
                />
                <p className="text-gray-300">Frontend will run on: <code className="px-2 py-1 bg-slate-800 rounded text-emerald-400">http://localhost:5173</code></p>
              </div>
            </div>
          </Section>

          {/* Development Scripts */}
          <Section id="scripts" icon={Code2} title="Development Scripts">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">Frontend Scripts</h3>
                <ul className="space-y-3">
                  <ScriptItem command="npm run dev" description="Start development server with HMR" />
                  <ScriptItem command="npm run build" description="Build for production" />
                  <ScriptItem command="npm run preview" description="Preview production build" />
                  <ScriptItem command="npm run lint" description="Run ESLint" />
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-emerald-400 mb-4">Backend Scripts</h3>
                <ul className="space-y-3">
                  <ScriptItem command="npm run dev" description="Start server with auto-reload (Node.js --watch)" />
                  <ScriptItem command="npm start" description="Start production server" />
                </ul>
              </div>
            </div>
          </Section>

          {/* Package Manager Support */}
          <Section id="package-managers" icon={Package} title="Package Manager Support">
            <p className="text-gray-300 mb-4">
              Boilerify uses npm by default for scaffolding projects, but you can use any package manager:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="glass-card p-6 text-center rounded-lg border border-white/10 hover:border-emerald-500/30 transition">
                <Package className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">npm</h4>
                <p className="text-sm text-gray-400">Default, widely supported</p>
              </div>
              <div className="glass-card p-6 text-center rounded-lg border border-white/10 hover:border-emerald-500/30 transition">
                <Zap className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">pnpm</h4>
                <p className="text-sm text-gray-400">Fast, disk-space efficient</p>
              </div>
              <div className="glass-card p-6 text-center rounded-lg border border-white/10 hover:border-emerald-500/30 transition">
                <Package className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-1">yarn</h4>
                <p className="text-sm text-gray-400">Popular alternative</p>
              </div>
            </div>
          </Section>

          {/* Contributing */}
          <Section id="contributing" icon={Github} title="Contributing">
            <div className="space-y-4">
              <p className="text-gray-300">Contributions are welcome! Please feel free to submit a Pull Request.</p>
              <ol className="space-y-3 list-decimal list-inside text-gray-300">
                <li>Fork the repository</li>
                <li>Create your feature branch (<code className="px-2 py-1 bg-slate-800 rounded text-emerald-400">git checkout -b feature/AmazingFeature</code>)</li>
                <li>Commit your changes (<code className="px-2 py-1 bg-slate-800 rounded text-emerald-400">git commit -m 'Add some AmazingFeature'</code>)</li>
                <li>Push to the branch (<code className="px-2 py-1 bg-slate-800 rounded text-emerald-400">git push origin feature/AmazingFeature</code>)</li>
                <li>Open a Pull Request</li>
              </ol>
            </div>
          </Section>

          {/* Support */}
          <Section id="support" icon={BookOpen} title="Issues & Support">
            <div className="space-y-4">
              <p className="text-gray-300">
                Found a bug or have a feature request? Please{" "}
                <a 
                  href="https://github.com/khilesh321/boilerify-cli/issues" 
                  target="_blank"
                  className="text-emerald-400 hover:text-emerald-300 underline"
                >
                  open an issue
                </a>.
              </p>
              <div className="glass-card p-6 rounded-lg border border-white/10">
                <h4 className="font-semibold mb-3">Contact</h4>
                <p className="text-gray-300 mb-2">
                  Khilesh -{" "}
                  <a 
                    href="https://www.linkedin.com/in/khilesh-jawale/" 
                    target="_blank"
                    className="text-emerald-400 hover:text-emerald-300"
                  >
                    LinkedIn
                  </a>
                </p>
                <p className="text-gray-300">
                  Project Link:{" "}
                  <a 
                    href="https://github.com/khilesh321/boilerify-cli" 
                    target="_blank"
                    className="text-emerald-400 hover:text-emerald-300"
                  >
                    Boilerify CLI
                  </a>
                </p>
              </div>
            </div>
          </Section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center glass-card p-8 md:p-12 border-emerald-500/20 rounded-xl relative overflow-hidden"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 to-green-500/5 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Building?</h2>
              <p className="text-gray-400 mb-6 md:mb-8">Get started with Boilerify in seconds</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.npmjs.com/package/boilerify"
                  target="_blank"
                  className="px-6 md:px-8 py-3 md:py-4 bg-linear-to-r from-emerald-500 to-green-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Download className="w-5 h-5" />
                  Install Boilerify
                </a>
                <Link
                  href="/"
                  className="px-6 md:px-8 py-3 md:py-4 border border-white/10 rounded-lg font-semibold hover:border-emerald-500/50 transition flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 relative z-10">
        <div className="container mx-auto px-6 py-8 text-center text-gray-400">
          <p>Made with ❤️ by <a href="https://github.com/khilesh321" target="_blank" className="text-emerald-400 hover:text-emerald-300">Khilesh</a></p>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function Section({ id, icon: Icon, title, children }: { id: string; icon: any; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="scroll-mt-24"
    >
      <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      <div className="glass-card p-6 md:p-8 rounded-xl">
        {children}
      </div>
    </motion.section>
  );
}

function FeatureItem({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/5 transition border border-white/5 hover:border-emerald-500/30"
    >
      <Icon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
      <span className="text-gray-300">{text}</span>
    </motion.div>
  );
}

function RequirementItem({ title, link, linkText }: { title: string; link?: string; linkText?: string }) {
  return (
    <div className="flex items-center gap-3 p-4 glass-card rounded-lg border border-white/10">
      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
      <span className="text-gray-300">
        {title}
        {link && (
          <>
            {" - "}
            <a href={link} target="_blank" className="text-emerald-400 hover:text-emerald-300 underline">
              {linkText}
            </a>
          </>
        )}
      </span>
    </div>
  );
}

function InstallOption({ title, description, command, commands }: { title: string; description: string; command?: string; commands?: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-emerald-400 mb-2">{title}</h3>
      <p className="text-gray-300 mb-3">{description}</p>
      <CodeBlock code={command || commands!.join('\n')} />
    </div>
  );
}

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  return (
    <div className="relative group">
      <pre className="bg-slate-950 border border-white/10 rounded-lg p-4 overflow-x-auto hover:border-emerald-500/30 transition">
        <code className="text-sm text-gray-300 font-mono">{code}</code>
      </pre>
    </div>
  );
}

function ScriptItem({ command, description }: { command: string; description: string }) {
  return (
    <li className="flex flex-col gap-1">
      <code className="text-emerald-400 font-mono text-sm">{command}</code>
      <span className="text-sm text-gray-400">{description}</span>
    </li>
  );
}
