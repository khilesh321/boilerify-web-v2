export const NAV_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#setup", label: "Setup" },
  { href: "/docs", label: "Docs" },
] as const;

export const EXTERNAL_LINKS = {
  github: "https://github.com/khilesh321/boilerify-cli",
  npm: "https://www.npmjs.com/package/boilerify",
  linkedin: "https://www.linkedin.com/in/khilesh-jawale/",
} as const;

export const DOCS_SECTIONS = [
  { id: "features", title: "Features" },
  { id: "prerequisites", title: "Prerequisites" },
  { id: "quick-start", title: "Quick Start" },
  { id: "usage", title: "Usage" },
  { id: "structure", title: "Project Structure" },
  { id: "running", title: "Running Your Project" },
  { id: "scripts", title: "Development Scripts" },
  { id: "package-managers", title: "Package Managers" },
  { id: "contributing", title: "Contributing" },
  { id: "support", title: "Support" },
] as const;
