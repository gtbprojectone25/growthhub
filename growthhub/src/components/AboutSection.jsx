import { SectionHeader } from './ui.jsx'

export default function AboutSection() {
  return (
    <section id="about" className="gh-section">
      <div className="gh-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeader eyebrow="About" title="Who we are" />
          </div>

          <div className="lg:col-span-8">
            <div className="gh-card p-7 sm:p-10">
              <p className="text-pretty text-base leading-relaxed text-neutral-300 sm:text-lg">
                Riviera Movies builds curated cinema experiences around singular film
                moments. The operation combines premium screening access, creator-led
                distribution, and collector-focused physical artifacts.
              </p>
              <div className="my-8 h-px w-full gh-hairline opacity-70" />
              <p className="text-pretty text-base leading-relaxed text-neutral-300 sm:text-lg">
                The goal is to make high-demand releases feel tangible, limited, and
                culturally relevant - not just as a seat in a theater, but as a complete
                experience people want to be part of.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
