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
                Growth Hub is an entertainment and business experiences company. We
                operate at the intersection of culture, live events, and commercial
                strategy - creating premium experiences for audiences who expect more
                than ordinary.
              </p>
              <div className="my-8 h-px w-full gh-hairline opacity-70" />
              <p className="text-pretty text-base leading-relaxed text-neutral-300 sm:text-lg">
                We work with brands, venues, and partners who understand that the right
                experience doesn&apos;t just entertain - it builds loyalty, drives
                conversation, and leaves a mark.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
