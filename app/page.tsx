import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AIPresence from "@/components/AIPresence";
import Terminal from "@/components/Terminal";
import Capabilities from "@/components/Capabilities";
import Transformation from "@/components/Transformation";
import FinalCTA from "@/components/FinalCTA";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-deep-space overflow-x-hidden">
      {/* Global ambient background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,212,255,0.06) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(139,92,246,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Particle system */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <AIPresence />
      <Terminal />
      <Capabilities />
      <Transformation />
      <FinalCTA />

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-blue/50 animate-pulse-slow" />
            <span className="text-slate-600 font-mono text-xs tracking-wider">
              EVOLVE — AI System v2.0
            </span>
          </div>
          <span className="text-slate-700 font-mono text-xs">
            © 2026 · All systems operational
          </span>
        </div>
      </footer>
    </main>
  );
}
