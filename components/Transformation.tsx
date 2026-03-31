"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stages = [
  { label: "INPUT", desc: "Raw data. Signal from noise.", color: "text-slate-400" },
  { label: "PROCESS", desc: "Neural synthesis begins.", color: "text-neon-blue" },
  { label: "EVOLVE", desc: "Patterns become insight.", color: "text-neon-violet" },
  { label: "INTELLIGENCE", desc: "Emergent understanding.", color: "text-neon-gold" },
];

export default function Transformation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section ref={ref} className="relative py-40 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-violet/15 to-transparent" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 rounded-full bg-neon-violet/5 blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 rounded-full bg-neon-blue/5 blur-[100px]" />
      </div>

      <motion.div style={{ opacity, scale }} className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-neon-violet/60 font-mono text-xs tracking-widest uppercase">
            &#47;&#47; The Transformation
          </span>
        </motion.div>

        {/* Main text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
        >
          <span className="text-slate-500">From input</span>
          <span className="text-slate-300">...</span>
          <br />
          <span className="bg-gradient-to-r from-neon-blue via-neon-violet to-neon-gold bg-clip-text text-transparent">
            to intelligence.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-slate-500 text-lg max-w-2xl mx-auto mb-20"
        >
          A continuous process. A perpetual becoming. Every token processed
          pushes the boundary of what&apos;s possible.
        </motion.p>

        {/* Transformation flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0">
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="glass-panel rounded-lg px-6 py-5 border border-white/5 text-center min-w-[140px] cursor-default"
                  style={{
                    boxShadow:
                      i === 3
                        ? "0 0 20px rgba(251,191,36,0.08)"
                        : i === 2
                        ? "0 0 20px rgba(139,92,246,0.08)"
                        : i === 1
                        ? "0 0 20px rgba(0,212,255,0.08)"
                        : undefined,
                  }}
                >
                  <div className="text-slate-600 font-mono text-xs mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    className={`font-mono font-bold text-sm tracking-wider ${stage.color} mb-1`}
                  >
                    {stage.label}
                  </div>
                  <div className="text-slate-600 text-xs">{stage.desc}</div>
                </motion.div>
              </motion.div>

              {/* Connector */}
              {i < stages.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="hidden md:flex items-center w-12 justify-center"
                >
                  <div className="flex items-center gap-1">
                    <div className="flex-1 h-px bg-gradient-to-r from-neon-blue/30 to-neon-violet/30" />
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                      className="text-neon-blue/40 text-xs"
                    >
                      ▶
                    </motion.div>
                  </div>
                </motion.div>
              )}
              {/* Vertical connector on mobile */}
              {i < stages.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="flex md:hidden flex-col items-center py-2"
                >
                  <div className="w-px h-6 bg-gradient-to-b from-neon-blue/30 to-neon-violet/30" />
                  <div className="text-neon-blue/40 text-xs">▼</div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
