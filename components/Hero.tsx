"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Ambient background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-blue/5 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-neon-violet/5 blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-neon-gold/3 blur-[80px]" />
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="scanline absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-neon-blue/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-neon-blue/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-neon-blue/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-neon-blue/30" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full glass-panel neon-border-blue"
        >
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse-slow" />
          <span className="text-neon-blue/80 text-xs font-mono tracking-widest uppercase">
            System v2.0 — Active
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none tracking-tight"
        >
          <span className="block text-white">This Is</span>
          <span className="block bg-gradient-to-r from-neon-blue via-neon-violet to-neon-blue bg-clip-text text-transparent text-glow-blue">
            Not Just AI.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-2xl text-slate-400 mb-12 font-light tracking-wide max-w-2xl mx-auto"
        >
          It{" "}
          <span className="text-neon-blue font-medium">Learns.</span>{" "}
          It{" "}
          <span className="text-neon-violet font-medium">Evolves.</span>{" "}
          It{" "}
          <span className="text-neon-gold font-medium">Becomes.</span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative group px-10 py-4 rounded-sm bg-transparent border border-neon-blue/60 text-neon-blue font-mono text-sm tracking-widest uppercase btn-glow transition-all duration-300 hover:bg-neon-blue/10 hover:border-neon-blue overflow-hidden"
          >
            {/* Button inner glow */}
            <span className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-blue/5 to-neon-blue/0 group-hover:via-neon-blue/10 transition-all duration-500" />
            <span className="relative flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse-slow" />
              Initialize System
              <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse-slow" />
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-600 text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-neon-blue/60 to-transparent"
          />
        </motion.div>
      </div>

      {/* Floating orbital rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-neon-blue/5 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-neon-violet/5 pointer-events-none"
      />
    </section>
  );
}
