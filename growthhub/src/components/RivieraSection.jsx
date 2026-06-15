import { Metric, PrimaryLink, SectionHeader } from './ui.jsx'

export default function RivieraSection() {
  return (
    <section id="riviera" className="gh-section">
      <div className="gh-container">
        <div className="gh-card p-7 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Now running"
                title="RIVIERA"
                description="A curated cinema experience built around The Odyssey by Christopher Nolan, presented as a premium IMAX 70mm moment with limited global availability."
              />
            </div>

            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <PrimaryLink href="https://rivieramovies.com/" external>
                View project
              </PrimaryLink>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Metric value="IMAX 70mm" label="Format" />
            <Metric value="25" label="Native venues worldwide" tone="accent" />
            <Metric value="2026" label="Flagship year" />
          </div>
        </div>
      </div>
    </section>
  )
}
