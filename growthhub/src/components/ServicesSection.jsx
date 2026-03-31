const services = [
  {
    title: 'Live Experiences & Exclusive Screenings',
    description:
      'Curated events with premium access, limited availability, and production detail that sets the standard.',
  },
  {
    title: 'Event Co-production & Brand Partnerships',
    description:
      'We co-produce with organizers, venues and brands — bringing structure, distribution and execution.',
  },
  {
    title: 'Corporate & Professional Experiences',
    description:
      'From leadership events to branded activations, we build experiences that connect people to ideas.',
  },
]

function ServiceCard({ title, description }) {
  return (
    <div className="group rounded-3xl bg-white/3 p-7 ring-1 ring-white/10 transition hover:bg-white/4.5 hover:ring-white/15 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-[-0.02em] text-neutral-50">
          {title}
        </h3>
        <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-200/10 text-amber-100 ring-1 ring-amber-200/25 transition group-hover:bg-amber-200/14 group-hover:ring-amber-200/35">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <p className="mt-4 text-pretty text-sm leading-relaxed text-neutral-200/75 sm:text-base">
        {description}
      </p>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section id="what-we-do" className="gh-section">
      <div className="gh-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-semibold tracking-[0.28em] text-neutral-200/70">
              Services
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-neutral-50 sm:text-4xl">
              What we do
            </h2>
          </div>
          <div className="text-sm text-neutral-200/70">
            Premium execution. Minimal noise.
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

