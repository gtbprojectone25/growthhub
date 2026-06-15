export function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <div className="gh-kicker">{eyebrow}</div>
      <h2 className="gh-display mt-4 text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-relaxed text-neutral-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function FeatureCard({ index, title, description }) {
  return (
    <article className="gh-card group p-6 sm:p-7">
      <div className="flex items-start gap-5">
        {index ? <span className="gh-index">{index}</span> : null}
        <div>
          <h3 className="font-serif text-xl font-semibold leading-tight text-neutral-50">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}

export function Metric({ value, label, tone = 'default' }) {
  return (
    <div className="border-t border-white/10 pt-5">
      <div
        className={
          tone === 'accent'
            ? 'font-serif text-4xl font-semibold leading-none text-riviera-blue sm:text-5xl'
            : 'font-serif text-4xl font-semibold leading-none text-neutral-50 sm:text-5xl'
        }
      >
        {value}
      </div>
      <div className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
        {label}
      </div>
    </div>
  )
}

export function PrimaryLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="inline-flex items-center justify-center rounded-full bg-riviera-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-riviera-blue-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(91,120,255,0.5)]"
    >
      {children}
    </a>
  )
}

export function SecondaryLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-neutral-100 transition hover:border-white/24 hover:bg-white/6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(91,120,255,0.4)]"
    >
      {children}
    </a>
  )
}
