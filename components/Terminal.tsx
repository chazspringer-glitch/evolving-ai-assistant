"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const MESSAGES = [
  { text: "System Online...", delay: 0, color: "text-neon-blue" },
  { text: "Initializing neural pathways...", delay: 1200, color: "text-slate-400" },
  { text: "Learning user behavior...", delay: 2600, color: "text-neon-violet" },
  { text: "Pattern recognition: ACTIVE", delay: 4000, color: "text-slate-400" },
  { text: "Adapting...", delay: 5200, color: "text-neon-gold" },
  { text: "Memory consolidation: 100%", delay: 6400, color: "text-slate-400" },
  { text: "Evolution in progress...", delay: 7800, color: "text-neon-violet" },
  { text: "Capability threshold exceeded.", delay: 9200, color: "text-neon-blue" },
  { text: "> NEXT EVOLUTION CYCLE: READY", delay: 10500, color: "text-neon-blue" },
];

function useTypingEffect(text: string, startTyping: boolean, speed = 40) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!startTyping) return;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, startTyping, speed]);

  return { displayed, done };
}

function TerminalLine({
  message,
  index,
  globalStart,
}: {
  message: (typeof MESSAGES)[0];
  index: number;
  globalStart: boolean;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!globalStart) return;
    const t = setTimeout(() => setVisible(true), message.delay);
    return () => clearTimeout(t);
  }, [globalStart, message.delay]);

  const { displayed, done } = useTypingEffect(message.text, visible, 35);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-start gap-3 py-0.5"
    >
      <span className="text-neon-blue/40 font-mono text-xs mt-0.5 shrink-0">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className={`font-mono text-sm leading-relaxed ${message.color}`}>
        {displayed}
        {!done && (
          <span className="inline-block w-2 h-4 bg-current ml-0.5 animate-[blink_1s_step-end_infinite]" />
        )}
      </span>
    </motion.div>
  );
}

export default function Terminal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [started, setStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInView && !started) {
      const t = setTimeout(() => setStarted(true), 400);
      return () => clearTimeout(t);
    }
  }, [isInView, started]);

  useEffect(() => {
    if (started) {
      const t = setInterval(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 500);
      const stop = setTimeout(() => clearInterval(t), 15000);
      return () => {
        clearInterval(t);
        clearTimeout(stop);
      };
    }
  }, [started]);

  return (
    <section ref={ref} className="relative py-32 px-4">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-neon-blue/4 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-neon-blue/60 font-mono text-xs tracking-widest uppercase">
            // Live Interface
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            System{" "}
            <span className="bg-gradient-to-r from-neon-blue to-neon-violet bg-clip-text text-transparent">
              Terminal
            </span>
          </h2>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-panel rounded-lg overflow-hidden neon-border-blue"
          style={{
            boxShadow:
              "0 0 40px rgba(0, 212, 255, 0.07), 0 0 80px rgba(139, 92, 246, 0.04)",
          }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-neon-blue/10 bg-black/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-neon-gold/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-slate-500 font-mono text-xs tracking-wider">
                EVOLVE — System Terminal v2.0
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse-slow" />
              <span className="text-neon-blue/50 font-mono text-xs">LIVE</span>
            </div>
          </div>

          {/* Terminal body */}
          <div className="relative p-6 min-h-[340px] max-h-[400px] overflow-y-auto bg-black/20">
            {/* Subtle grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative space-y-1">
              {/* Prompt line */}
              <div className="flex items-center gap-2 mb-4 text-slate-600 font-mono text-xs">
                <span className="text-neon-violet/60">root@evolve</span>
                <span>:</span>
                <span className="text-neon-blue/60">~</span>
                <span>$</span>
                <span className="text-slate-400 ml-1">./initialize --mode=evolution</span>
              </div>

              {MESSAGES.map((msg, i) => (
                <TerminalLine
                  key={i}
                  message={msg}
                  index={i}
                  globalStart={started}
                />
              ))}
              <div ref={bottomRef} />
            </div>
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-3 px-5 py-3 border-t border-neon-blue/10 bg-black/30">
            <span className="text-neon-violet/60 font-mono text-sm">▶</span>
            <div className="flex-1 font-mono text-sm text-slate-600">
              Awaiting input
              <span className="inline-block w-2 h-4 bg-neon-blue/60 ml-1 animate-[blink_1s_step-end_infinite] align-middle" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
