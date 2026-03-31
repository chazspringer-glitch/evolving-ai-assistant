"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative py-40 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-violet/3 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-neon-blue/6 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-neon-violet/5 blur-[100px]" />

        {/* Top/bottom border lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-violet/20 to-transparent" />
      </div>

      {/* Orbiting ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-neon-blue/5 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-neon-violet/4 pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-neon-violet/25 text-neon-violet/70 font-mono text-xs tracking-widest uppercase">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-neon-violet"
            />
            Final Stage
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none"
        >
          <span className="text-white">Activate</span>
          <br />
          <span className="bg-gradient-to-r from-neon-blue via-neon-violet to-neon-gold bg-clip-text text-transparent">
            Your AI
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-slate-400 text-lg md:text-xl mb-14 max-w-xl mx-auto leading-relaxed"
        >
          The next evolution of intelligence is ready. Are you?
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="relative group px-12 py-5 rounded-sm overflow-hidden font-mono text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(139,92,246,0.15))",
              border: "1px solid rgba(0,212,255,0.5)",
              boxShadow: "0 0 20px rgba(0,212,255,0.2), 0 0 50px rgba(139,92,246,0.1)",
            }}
          >
            {/* Animated background */}
            <motion.span
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(139,92,246,0.08) 100%)",
                  "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(0,212,255,0.08) 100%)",
                  "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(139,92,246,0.08) 100%)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0"
            />
            <span className="relative flex items-center gap-3 text-white">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 rounded-full border border-neon-blue/60 border-t-neon-blue"
              />
              Enter The System
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-5 rounded-sm border border-slate-700 text-slate-500 font-mono text-sm tracking-widest uppercase hover:border-slate-600 hover:text-slate-400 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Bottom status line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          {["Neural Net Active", "256-bit Secure", "Zero Latency"].map((item, i) => (
            <div key={item} className="flex items-center gap-2 text-slate-600 text-xs font-mono">
              <span className="w-1 h-1 rounded-full bg-neon-blue/40" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
