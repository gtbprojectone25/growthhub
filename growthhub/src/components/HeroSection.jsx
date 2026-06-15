import { PrimaryLink, SecondaryLink } from './ui.jsx'

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold tracking-[0.22em] text-neutral-200/90 ring-1 ring-white/10">
      <span className="h-1.5 w-1.5 rounded-full bg-riviera-blue" />
      {children}
    </span>
  )
}

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 gh-surface" aria-hidden="true" />
      <div className="gh-film-edge absolute left-6 top-28 hidden h-[360px] w-4 opacity-70 lg:block" aria-hidden="true" />
      <div className="gh-film-edge absolute right-6 top-28 hidden h-[360px] w-4 opacity-70 lg:block" aria-hidden="true" />

      <div className="relative gh-container">
        <div className="gh-section pb-16 sm:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="gh-fade-up">
              <Pill>Riviera Movies</Pill>
            </div>

            <h1 className="gh-display gh-fade-up mt-8 text-balance text-5xl sm:text-6xl lg:text-7xl">
              <span className="block text-sm font-semibold tracking-[0.34em] text-neutral-200/80 sm:text-base">
                RIVIERA MOVIES
              </span>
              <span className="mt-4 block">
                We don&apos;t just sell tickets.
                <br />
                We build curated cinema moments.
              </span>
            </h1>

            <p className="gh-fade-up mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-neutral-300 sm:text-lg">
              From rare-format screenings to creator-led cultural campaigns, Riviera
              builds premium film experiences around moments audiences already want.
            </p>

            <div className="gh-fade-up mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <PrimaryLink href="#creator-partner">Creator Partner Program</PrimaryLink>
              <SecondaryLink href="#what-we-do">Explore our work</SecondaryLink>
            </div>
          </div>

          <div className="mt-16 sm:mt-20">
            <div className="gh-card mx-auto max-w-5xl p-6 sm:p-10">
              <div className="grid gap-8 sm:grid-cols-3">
                <div className="space-y-2">
                  <div className="gh-kicker">Positioning</div>
                  <div className="text-sm leading-relaxed text-neutral-300">
                    Curated cinema experiences with premium inventory.
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="gh-kicker">Focus</div>
                  <div className="text-sm leading-relaxed text-neutral-300">
                    Film culture, creator partnerships, and collector demand.
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="gh-kicker">Flagship</div>
                  <div className="text-sm leading-relaxed text-neutral-300">
                    Riviera - a curated cinema experience for 2026.
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
