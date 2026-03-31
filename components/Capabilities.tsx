"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    title: "Adaptive Intelligence",
    description:
      "Dynamically reshapes its reasoning in real-time, evolving models with every piece of new data.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
    color: "blue",
    delay: 0,
  },
  {
    title: "Autonomous Execution",
    description:
      "Operates independently — planning, acting, and self-correcting without manual intervention.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: "violet",
    delay: 0.1,
  },
  {
    title: "Continuous Learning",
    description:
      "Never static. Every interaction deepens its knowledge, sharpening accuracy and foresight.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    color: "blue",
    delay: 0.2,
  },
  {
    title: "Infinite Scalability",
    description:
      "Scales seamlessly from single queries to enterprise-scale orchestration with zero degradation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
    color: "gold",
    delay: 0.3,
  },
];

const colorMap: Record<string, { text: string; border: string; glow: string; bg: string; hoverGlow: string }> = {
  blue: {
    text: "text-neon-blue",
    border: "border-neon-blue/20",
    glow: "shadow-neon-blue/10",
    bg: "bg-neon-blue/5",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(0,212,255,0.2),0_0_60px_rgba(0,212,255,0.08)] hover:border-neon-blue/50",
  },
  violet: {
    text: "text-neon-violet",
    border: "border-neon-violet/20",
    glow: "shadow-neon-violet/10",
    bg: "bg-neon-violet/5",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.2),0_0_60px_rgba(139,92,246,0.08)] hover:border-neon-violet/50",
  },
  gold: {
    text: "text-neon-gold",
    border: "border-neon-gold/20",
    glow: "shadow-neon-gold/10",
    bg: "bg-neon-gold/5",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.2),0_0_60px_rgba(251,191,36,0.08)] hover:border-neon-gold/50",
  },
};

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-blue/4 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-blue/60 font-mono text-xs tracking-widest uppercase">
            // Core Systems
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Core{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Four pillars of a system that was built not just to perform — but to transcend.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, i) => {
            const colors = colorMap[cap.color];
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + cap.delay }}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`group relative glass-panel rounded-xl p-6 border ${colors.border} ${colors.hoverGlow} transition-all duration-400 cursor-default h-full`}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-lg ${colors.bg} border ${colors.border} ${colors.text} mb-5 transition-all duration-300 group-hover:scale-110`}
                  >
                    {cap.icon}
                  </div>

                  {/* Number */}
                  <div className="absolute top-5 right-5 text-slate-700 font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-bold mb-3 ${colors.text} group-hover:opacity-100 transition-opacity`}>
                    {cap.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {cap.description}
                  </p>

                  {/* Bottom line accent */}
                  <div
                    className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent ${
                      cap.color === "blue"
                        ? "via-neon-blue/20"
                        : cap.color === "violet"
                        ? "via-neon-violet/20"
                        : "via-neon-gold/20"
                    } to-transparent transition-all duration-300 group-hover:${
                      cap.color === "blue"
                        ? "via-neon-blue/50"
                        : cap.color === "violet"
                        ? "via-neon-violet/50"
                        : "via-neon-gold/50"
                    }`}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
