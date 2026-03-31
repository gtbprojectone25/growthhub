export default function RivieraSection() {
  return (
    <section id="riviera" className="gh-section">
      <div className="gh-container">
        <div className="rounded-3xl bg-white/3 p-7 ring-1 ring-white/10 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-xs font-semibold tracking-[0.28em] text-neutral-200/70">
                Now running
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-neutral-50 sm:text-5xl">
                RIVIERA
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-neutral-200/80 sm:text-lg">
                The most exclusive screening of 2026.
                <br />
                The Odyssey by Christopher Nolan — IMAX 70mm.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://landing-page-riviera.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-amber-200/10 px-6 py-3 text-sm font-semibold text-amber-100 ring-1 ring-amber-200/25 transition hover:bg-amber-200/14 hover:ring-amber-200/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/35"
              >
                View project →
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-neutral-950/40 p-6 ring-1 ring-white/10">
              <div className="text-xs font-semibold tracking-[0.28em] text-neutral-200/70">
                By
              </div>
              <div className="mt-3 text-sm font-semibold text-neutral-50">Growth Hub</div>
              <div className="mt-2 text-sm text-neutral-200/70">
                Entertainment & business experiences.
              </div>
            </div>
            <div className="rounded-2xl bg-neutral-950/40 p-6 ring-1 ring-white/10">
              <div className="text-xs font-semibold tracking-[0.28em] text-neutral-200/70">
                Format
              </div>
              <div className="mt-3 text-sm font-semibold text-neutral-50">IMAX 70mm</div>
              <div className="mt-2 text-sm text-neutral-200/70">
                Exclusive access. Limited availability.
              </div>
            </div>
            <div className="rounded-2xl bg-neutral-950/40 p-6 ring-1 ring-white/10">
              <div className="text-xs font-semibold tracking-[0.28em] text-neutral-200/70">
                Year
              </div>
              <div className="mt-3 text-sm font-semibold text-neutral-50">2026</div>
              <div className="mt-2 text-sm text-neutral-200/70">
                A flagship experience under Riviera.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

