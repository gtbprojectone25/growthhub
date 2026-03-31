function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-neutral-200/90 ring-1 ring-white/10">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-200/70" />
      {children}
    </span>
  )
}

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 gh-surface" aria-hidden="true" />

      <div className="relative gh-container">
        <div className="gh-section pb-16 sm:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="gh-fade-up">
              <Pill>Growth Hub</Pill>
            </div>

            <h1 className="gh-fade-up mt-8 text-balance text-4xl font-semibold tracking-[-0.04em] text-neutral-50 sm:text-5xl lg:text-6xl">
              <span className="block text-sm font-semibold tracking-[0.34em] text-neutral-200/80 sm:text-base">
                GROWTH HUB
              </span>
              <span className="mt-4 block leading-[1.02]">
                We don&apos;t just produce events.
                <br />
                We engineer experiences people remember.
              </span>
            </h1>

            <p className="gh-fade-up mt-6 text-pretty text-base leading-relaxed text-neutral-200/80 sm:text-lg">
              From exclusive cinema screenings to corporate activations —
              <br className="hidden sm:block" /> we build the moments that move culture forward.
            </p>

            <div className="gh-fade-up mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="#what-we-do"
                className="inline-flex items-center justify-center rounded-full bg-amber-200/10 px-6 py-3 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/25 transition hover:bg-amber-200/14 hover:ring-amber-200/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/35"
              >
                Explore our work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white/5 px-6 py-3 text-sm font-semibold text-neutral-50 ring-1 ring-white/12 transition hover:bg-white/8 hover:ring-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/30"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="mt-16 sm:mt-20">
            <div className="mx-auto max-w-5xl rounded-3xl bg-white/3 p-6 ring-1 ring-white/10 sm:p-10">
              <div className="grid gap-8 sm:grid-cols-3">
                <div className="space-y-2">
                  <div className="text-xs font-semibold tracking-[0.28em] text-neutral-200/70">
                    Positioning
                  </div>
                  <div className="text-sm leading-relaxed text-neutral-200/80">
                    Premium entertainment & business experiences.
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-semibold tracking-[0.28em] text-neutral-200/70">
                    Focus
                  </div>
                  <div className="text-sm leading-relaxed text-neutral-200/80">
                    Culture, live events, and commercial strategy.
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-semibold tracking-[0.28em] text-neutral-200/70">
                    Flagship
                  </div>
                  <div className="text-sm leading-relaxed text-neutral-200/80">
                    Riviera — the most exclusive screening of 2026.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

