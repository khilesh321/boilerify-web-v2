"use client";

import { motion } from "framer-motion";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function HamburgerMenu({ isOpen, onClick }: HamburgerMenuProps) {
  return (
    <motion.button
      onClick={onClick}
      className="p-2 hover:bg-white/10 rounded-lg transition"
      aria-label="Toggle menu"
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        className="relative w-5 h-6"
      >
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 8 }
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-1 left-0 w-5 h-0.5 bg-white origin-center block"
        />
        <motion.span
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.2 }}
          className="absolute top-1/2 left-0 w-5 h-0.5 bg-white -translate-y-1/2 block"
        />
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -8 }
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-1 left-0 w-5 h-0.5 bg-white origin-center block"
        />
      </motion.div>
    </motion.button>
  );
}
