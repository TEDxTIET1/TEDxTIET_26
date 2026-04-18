import React, { useMemo } from 'react';
import CustomNavbar from "./navbar";

const Particles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1, // 1px to 4px
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDuration: Math.random() * 30 + 30, // 30s to 60s for slow organic movement
      animationDelay: Math.random() * 5,
      opacity: Math.random() * 0.3 + 0.1, // Subtle opacity
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes float-particle {
          0% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-30px) translateX(20px); }
          66% { transform: translateY(20px) translateX(-20px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white animate-float-particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.top}%`,
            left: `${p.left}%`,
            opacity: p.opacity,
            animationDuration: `${p.animationDuration}s`,
            animationDelay: `-${p.animationDelay}s`, // Negative delay so they start immediately at different points
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <>
      <CustomNavbar />
      <main className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-black text-on-primary-container w-full">
        {/* --- Enhanced Background Elements --- */}
        <div className="absolute inset-0 z-0 bg-[#050505]"></div>

        {/* Soft gradient glow (deep black to subtle gray/white tones) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0)_60%)] blur-[100px] z-0 pointer-events-none"></div>

        {/* Diffused radial light/glow (original spotlight) */}
        <div className="absolute inset-0 z-0 spotlight-radial opacity-40 mix-blend-screen pointer-events-none"></div>

        {/* Floating Particles */}
        <Particles />
        {/* ---------------------------------- */}

        {/* Hero Content */}
        <section className="relative z-10 w-full max-w-7xl px-8 flex flex-col items-center text-center">
          <style>{`
            @keyframes tube-flicker {
              0%, 9%, 11%, 19%, 21%, 69%, 71%, 100% {
                text-shadow: 0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.2);
                opacity: 1;
                transform: translate(0, 0);
              }
              10% {
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
                opacity: 0.8;
                transform: translate(1px, -1px);
              }
              20% {
                text-shadow: none;
                opacity: 0.9;
                transform: translate(-1px, 1px);
              }
              70% {
                text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
                opacity: 0.85;
                transform: translate(0.5px, 0.5px);
              }
            }
            .animate-tube-flicker {
              animation: tube-flicker 6s infinite;
              display: block; /* maintain block structure from template */
            }
          `}</style>
          <h1 className="text-[12vw] md:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase mb-6 drop-shadow-2xl">
            <span className="block text-[#eb0028]">RED</span>
            <span className="animate-tube-flicker text-stroke-red">DAY</span>
            <span className="block text-white">2026</span>
          </h1>
          <p className="max-w-xl text-stone-300 text-lg md:text-xl font-light leading-relaxed mb-6 tracking-wide">
            Moments that shape us
          </p>
          <div className="flex flex-col md:flex-row gap-6 mb-10 text-white font-bold tracking-widest uppercase text-sm">
            <span>Date: 23th April 2026</span>
            <span className="hidden md:inline text-stone-600">|</span>
            <span>Time: 4:30 PM</span>
            <span className="hidden md:inline text-stone-600">|</span>
            <span>Venue: Main Auditorium</span>
          </div>
          {/* Spotlight CTA */}
          <div className="relative group -mt-4">
            <div className="absolute -inset-12 bg-[#eb0028]/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <a
              href="https://unstop.com/o/J4DHu2p?utm_medium=Share&utm_source=tedxsoc5964&utm_campaign=Competitions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block relative bg-[#eb0028] text-white px-8 py-3 rounded-md font-black uppercase tracking-[0.2em] text-xs overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(235,0,40,0.5)]">
              Register Now
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroSection;
