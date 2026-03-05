export default function Landing() {
  const confetti = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: `${(i * 13) % 100}%`,
    delay: `${(i * 0.11).toFixed(2)}s`,
    duration: `${4 + (i % 6)}s`,
    color: ['#fb7185', '#22d3ee', '#fbbf24', '#34d399', '#a78bfa', '#f97316'][i % 6],
    size: `${6 + (i % 7)}px`,
    drift: `${(i % 2 === 0 ? 1 : -1) * (10 + (i % 20))}px`,
  }));

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translate3d(0, -12vh, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate3d(var(--drift), 115vh, 0) rotate(720deg); opacity: 0.95; }
        }
        @keyframes glow-pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.14); opacity: 0.85; }
        }
        @keyframes soft-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        {confetti.map((piece) => (
          <span
            key={piece.id}
            className="absolute top-0 block rounded-sm"
            style={{
              left: piece.left,
              width: piece.size,
              height: `calc(${piece.size} * 1.8)`,
              backgroundColor: piece.color,
              animationName: 'confetti-fall',
              animationDuration: piece.duration,
              animationDelay: piece.delay,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
              ['--drift']: piece.drift,
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-pink-500/30 blur-3xl"
          style={{ animation: 'glow-pulse 4s ease-in-out infinite' }}
        />
        <div
          className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl"
          style={{ animation: 'glow-pulse 4.8s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl"
          style={{ animation: 'glow-pulse 5.5s ease-in-out infinite' }}
        />
      </div>

      <main className="relative z-10 mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6 py-14 text-center">
        <section className="w-full rounded-3xl border border-white/20 bg-slate-900/50 p-8 shadow-[0_0_60px_rgba(244,114,182,0.22)] backdrop-blur-xl md:p-14">
          <p
            className="mx-auto mb-4 inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-200"
            style={{ animation: 'soft-float 2.7s ease-in-out infinite' }}
          >
            Grand Celebration
          </p>
          <h1
            className="bg-gradient-to-r from-pink-400 via-amber-300 to-cyan-300 bg-clip-text text-5xl font-black leading-tight text-transparent md:text-7xl"
            style={{ animation: 'soft-float 3.2s ease-in-out infinite' }}
          >
            Priya Ji Mass
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-200 md:text-lg">
            Confetti rain, glowing background, and smooth celebratory motion effects on a single landing page.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button className="rounded-xl bg-pink-500 px-6 py-3 text-sm font-bold uppercase tracking-wide transition hover:-translate-y-1 hover:bg-pink-400">
              Celebrate
            </button>
            <button className="rounded-xl border border-white/35 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-wide transition hover:-translate-y-1 hover:bg-white/20">
              View Effects
            </button>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {['Confetti Burst', 'Glow Waves', 'Party Vibes'].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-4 text-sm font-semibold text-slate-100 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
