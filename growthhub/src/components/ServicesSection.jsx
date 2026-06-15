import { FeatureCard, SectionHeader } from './ui.jsx'

const services = [
  {
    title: 'Live Experiences & Exclusive Screenings',
    description:
      'Curated events with premium access, limited availability, and production detail that sets the standard.',
  },
  {
    title: 'Event Co-production & Brand Partnerships',
    description:
      'We co-produce with organizers, venues and brands, bringing structure, distribution and execution.',
  },
  {
    title: 'Corporate & Professional Experiences',
    description:
      'From leadership events to branded activations, we build experiences that connect people to ideas.',
  },
]

export default function ServicesSection() {
  return (
    <section id="what-we-do" className="gh-section">
      <div className="gh-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader eyebrow="Services" title="What we do" />
          <div className="text-sm text-neutral-400">
            Premium execution. Minimal noise.
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {services.map((service, index) => (
            <FeatureCard
              key={service.title}
              index={`0${index + 1}`}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
