import { FeatureCard, Metric, PrimaryLink, SecondaryLink, SectionHeader } from './ui.jsx'

const selectionReasons = [
  {
    title: 'The right world',
    description:
      'Creators in film, entertainment, gaming, and the culture around them, where Nolan and The Odyssey already matter.',
  },
  {
    title: 'A real audience',
    description:
      "Engaged followers who trust the creator's taste, not just numbers on a profile.",
  },
  {
    title: 'The instinct to move',
    description:
      'Partners who recognize a cultural moment and act inside the campaign window.',
  },
]

const partnershipSteps = [
  {
    title: 'Tracked code',
    description:
      'A unique code gives the audience a reason to act and attributes every sale back to the creator.',
  },
  {
    title: 'Commission per sale',
    description:
      'Partners earn from every package sold through their code, with performance tied directly to audience movement.',
  },
  {
    title: 'Target bonus',
    description:
      'A shared volume target unlocks additional earnings on top of the base commission.',
  },
]

const supportItems = [
  {
    title: 'Ready-made assets',
    description:
      'Editorial video, stills, and campaign copy built around the film and ready for creator channels.',
  },
  {
    title: 'Live dashboard',
    description:
      'Transparent visibility into clicks, sales, and earnings so partners always know where they stand.',
  },
  {
    title: 'Direct support',
    description:
      'A real point of contact for questions, asset requests, ideas, and campaign execution.',
  },
]

export default function CreatorPartnerSection() {
  return (
    <section id="creator-partner" className="gh-section">
      <div className="gh-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <SectionHeader
                eyebrow="Creator Partner Program"
                title="An invitation to a selected group of creators."
                description="Riviera Movies is opening a focused partner program for creators whose audiences live in cinema, entertainment, gaming, and cultural conversation."
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <PrimaryLink href="mailto:partners@rivieramovies.com">
                  Become a partner
                </PrimaryLink>
                <SecondaryLink href="https://rivieramovies.com/">
                  Visit Riviera
                </SecondaryLink>
              </div>
            </div>
          </div>

          <div className="space-y-10 lg:col-span-7">
            <div className="gh-card p-6 sm:p-8">
              <div className="gh-kicker">The moment</div>
              <h3 className="gh-display mt-4 text-3xl sm:text-4xl">
                The biggest film of the summer. The hardest ticket to get.
              </h3>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Metric value="$250M" label="Production budget" />
                <Metric value="25" label="Native IMAX 70mm venues" tone="accent" />
                <Metric value="Hours" label="First seats sold out" />
                <Metric value="Jul 16" label="Single release moment" tone="accent" />
              </div>
            </div>

            <div>
              <div className="gh-kicker">Why this reached you</div>
              <div className="mt-5 grid gap-4">
                {selectionReasons.map((item, index) => (
                  <FeatureCard
                    key={item.title}
                    index={`0${index + 1}`}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>

            <div className="gh-card p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <div className="gh-kicker">The opportunity</div>
                  <h3 className="gh-display mt-4 text-4xl sm:text-5xl">
                    An $855,000 stage. Built for the few who get in early.
                  </h3>
                </div>
                <div className="border-l-0 border-[rgba(91,120,255,0.5)] lg:border-l lg:pl-8">
                  <p className="font-serif text-2xl italic leading-relaxed text-neutral-100">
                    You bring the audience. You take your share of every sale your
                    code drives.
                  </p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-riviera-blue">
                    The window is now.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                <Metric value="3,000" label="Seats" />
                <Metric value="$855K" label="Campaign stage" tone="accent" />
                <Metric value="33" label="Days" />
              </div>
            </div>

            <div>
              <div className="gh-kicker">How the partnership works</div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {partnershipSteps.map((item, index) => (
                  <FeatureCard
                    key={item.title}
                    index={`0${index + 1}`}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="gh-kicker">What you get from us</div>
              <div className="mt-5 grid gap-4">
                {supportItems.map((item, index) => (
                  <FeatureCard
                    key={item.title}
                    index={`0${index + 1}`}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-sm leading-relaxed text-neutral-500">
              Earning potential reflects campaign scale and varies with audience,
              reach, and effort. Compensation structure is confirmed on the partner call.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
