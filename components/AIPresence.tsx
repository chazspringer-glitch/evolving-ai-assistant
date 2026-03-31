"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const floatingPanels = [
  {
    label: "Neural Sync",
    value: "99.7%",
    sub: "Coherence",
    color: "neon-blue",
    delay: 0,
    x: -20,
  },
  {
    label: "Evolution Cycles",
    value: "∞",
    sub: "Active",
    color: "neon-violet",
    delay: 0.2,
    x: 20,
  },
  {
    label: "Uptime",
    value: "100%",
    sub: "Operational",
    color: "neon-gold",
    delay: 0.4,
    x: -10,
  },
];

export default function AIPresence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-neon-violet/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Main text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="mb-4"
            >
              <span className="text-neon-blue/60 font-mono text-xs tracking-widest uppercase">
                // Core Intelligence
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
            >
              An intelligence{" "}
              <span className="bg-gradient-to-r from-neon-violet to-neon-blue bg-clip-text text-transparent">
                designed to grow
              </span>{" "}
              beyond its programming.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-slate-400 text-lg leading-relaxed mb-10"
            >
              Unlike static systems, EVOLVE builds upon every interaction —
              refining, adapting, and transcending. Each cycle makes it more
              capable than before.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-neon-blue/40 to-transparent" />
              <span className="text-neon-blue/40 font-mono text-xs tracking-widest">
                ACTIVE SYSTEMS
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-neon-violet/40 to-transparent" />
            </motion.div>
          </div>

          {/* Right: Floating panels */}
          <div className="relative flex flex-col gap-6">
            {floatingPanels.map((panel, i) => (
              <motion.div
                key={panel.label}
                initial={{ opacity: 0, x: 40, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + panel.delay }}
                className="animate-float-delayed"
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                <div
                  className={`glass-panel rounded-lg p-5 ${
                    panel.color === "neon-blue"
                      ? "neon-border-blue"
                      : panel.color === "neon-violet"
                      ? "neon-border-violet"
                      : "border border-neon-gold/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-slate-500 text-xs font-mono tracking-wider mb-1">
                        {panel.label}
                      </div>
                      <div
                        className={`text-3xl font-bold font-mono ${
                          panel.color === "neon-blue"
                            ? "text-neon-blue text-glow-blue"
                            : panel.color === "neon-violet"
                            ? "text-neon-violet text-glow-violet"
                            : "text-neon-gold text-glow-gold"
                        }`}
                      >
                        {panel.value}
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5">{panel.sub}</div>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                      className={`w-12 h-12 rounded-full ${
                        panel.color === "neon-blue"
                          ? "bg-neon-blue/10 border border-neon-blue/30"
                          : panel.color === "neon-violet"
                          ? "bg-neon-violet/10 border border-neon-violet/30"
                          : "bg-neon-gold/10 border border-neon-gold/30"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
