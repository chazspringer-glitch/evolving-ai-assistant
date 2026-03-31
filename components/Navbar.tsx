"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        backgroundColor: `rgba(2, 4, 8, ${bgOpacity})`,
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0, 212, 255, 0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="relative w-8 h-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-neon-blue/40"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-1 rounded-full border border-neon-violet/40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-neon-blue" />
            </div>
          </div>
          <span className="text-white font-bold tracking-widest text-sm uppercase">
            EVOLVE
          </span>
        </motion.div>

        {/* Nav links */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex items-center gap-8"
        >
          {["Intelligence", "Terminal", "Capabilities", "System"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-slate-500 hover:text-neon-blue text-xs font-mono tracking-wider uppercase transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-neon-blue"
          />
          <span className="text-neon-blue/60 font-mono text-xs tracking-wider">
            ONLINE
          </span>
        </motion.div>
      </div>
    </motion.nav>
  );
}
