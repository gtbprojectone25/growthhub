import { useEffect, useState } from 'react'
import { FeatureCard, Metric, PrimaryLink, SecondaryLink, SectionHeader } from './ui.jsx'

const launchDate = new Date('2026-07-16T00:00:00-04:00')
const oneSecond = 1000
const oneMinute = 60 * oneSecond
const oneHour = 60 * oneMinute
const oneDay = 24 * oneHour

function getCountdown(now = Date.now()) {
  const currentTime = Number.isFinite(now) ? now : Date.now()
  const remaining = Math.max(0, launchDate.getTime() - currentTime)

  return {
    days: Math.floor(remaining / oneDay),
    hours: Math.floor((remaining % oneDay) / oneHour),
    minutes: Math.floor((remaining % oneHour) / oneMinute),
    seconds: Math.floor((remaining % oneMinute) / oneSecond),
  }
}

function padTime(value) {
  return String(Number.isFinite(value) ? value : 0).padStart(2, '0')
}

function LaunchCountdownMetric() {
  const [now, setNow] = useState(() => Date.now())
  const countdown = getCountdown(now)

  useEffect(() => {
    const updateCountdown = () => setNow(Date.now())
    const intervalId = window.setInterval(updateCountdown, 1000)

    updateCountdown()
    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="border-t border-white/10 pt-5">
      <div className="flex flex-wrap items-end gap-x-3 gap-y-1">
        <span className="text-balance font-serif text-3xl font-semibold leading-none text-neutral-50 sm:text-4xl">
          {countdown.days}
        </span>
        <span className="pb-1 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-riviera-blue sm:text-base">
          {padTime(countdown.hours)}:{padTime(countdown.minutes)}:{padTime(countdown.seconds)}
        </span>
      </div>
      <div className="mt-3 text-wrap text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
        Days to July 16 ET
      </div>
    </div>
  )
}

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

const promotionItems = [
  {
    title: 'The Seat',
    description:
      'A confirmed seat at one of 28 venues worldwide projecting the film in native IMAX 70mm.',
  },
  {
    title: 'The Artifacts',
    description:
      'Spartan Bracelet, Odyssey Coin, and Odysseia Olive Oil, each numbered as 1 of 1,000 worldwide.',
  },
  {
    title: 'The Collector Tier',
    description:
      'A hand-finished Trireme scale model, limited to 25 worldwide for the highest level.',
  },
]

const partnershipSteps = [
  {
    title: 'Your code',
    description:
      'You receive a unique tracked code. It gives your audience a real reason to act and ties every sale back to you.',
  },
  {
    title: 'You earn',
    description:
      'You earn commission on every package sold through your code. The more your audience moves, the more you earn.',
  },
  {
    title: 'You scale',
    description:
      'We set a volume target together. Reaching it unlocks bonus earnings on top of your base commission.',
  },
]

const supportItems = [
  {
    title: 'Tracked code',
    description:
      'A unique code that both converts your audience and tracks every sale to you.',
  },
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

const timelineItems = [
  {
    when: 'Right now',
    title: 'Peak buying',
    description:
      'The highest buying activity of the whole campaign. Audiences deciding and acting.',
  },
  {
    when: 'This group',
    title: 'Final intake',
    description:
      'The last partners we bring in before the campaign closes to new creators.',
  },
  {
    when: 'July 16',
    title: 'Window shuts',
    description: 'The screening. Inventory closes. No next round.',
  },
]

const verificationItems = [
  {
    title: 'Confirmed inventory',
    description:
      'Seats were acquired in the first public allocation and can be verified before promotion.',
  },
  {
    title: 'Real artifacts',
    description:
      'Production documentation and photography are available. This is not built on renders.',
  },
  {
    title: 'Independent & transparent',
    description:
      'Riviera Movies is not affiliated with the studio or IMAX and states the partnership clearly.',
  },
]

export default function CreatorPartnerSection() {
  return (
    <section id="creator-partner" className="gh-section">
      <div className="gh-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <SectionHeader
                eyebrow="Creator Partner Program"
                title="An invitation to a selected group of creators."
                description="Riviera Movies is opening a focused partner program for creators whose audiences live in cinema, entertainment, gaming, and the culture around them."
              />

              <div className="mt-6 border-l border-[rgba(91,120,255,0.45)] pl-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  The Odyssey - IMAX 70mm - July 16, 2026
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  Curated cinema experience. Confidential creator proposal.
                </p>
              </div>

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

          <div className="space-y-8 lg:col-span-8">
            <div>
              <div className="gh-kicker">Why this message reached you</div>
              <div className="gh-card mt-5 p-6 sm:p-8">
                <h3 className="gh-display max-w-2xl text-balance text-3xl sm:text-4xl">
                  You were selected. Not scraped.
                </h3>
                <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-neutral-300">
                  This program is not a mass campaign. It is open to a small group
                  of creators whose audiences live in the world this film belongs to.
                </p>
              </div>
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
              <div className="gh-kicker">The moment</div>
              <h3 className="gh-display mt-4 max-w-2xl text-balance text-3xl sm:text-4xl">
                The biggest film of the summer. The hardest ticket to get.
              </h3>
              <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-neutral-300">
                Demand for this film already exists. The audience is searching,
                debating, and deciding right now.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Metric value="$250M" label="Production budget" />
                <Metric value="28" label="Native IMAX 70mm venues" tone="accent" />
                <Metric value="Hours" label="First seats sold out" />
                <Metric value="Jul 16" label="Single release moment" tone="accent" />
              </div>
              <p className="mt-8 border-t border-white/10 pt-5 text-sm leading-relaxed text-neutral-400">
                Cast includes Matt Damon, Anne Hathaway, Tom Holland, Zendaya,
                Robert Pattinson, Charlize Theron, and more.
              </p>
            </div>

            <div>
              <div className="gh-kicker">What you'll be promoting</div>
              <div className="gh-card mt-5 p-6 sm:p-8">
                <h3 className="gh-display max-w-2xl text-balance text-3xl sm:text-4xl">
                  Not a ticket. A curated experience.
                </h3>
                <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-neutral-300">
                  For The Odyssey, Riviera Movies pairs a confirmed IMAX 70mm seat
                  with numbered physical artifacts produced exclusively for this
                  screening.
                </p>
              </div>
              <div className="mt-5 grid gap-4">
                {promotionItems.map((item, index) => (
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
              <div className="gh-kicker">How the partnership works</div>
              <div className="gh-card mt-5 p-6 sm:p-8">
                <h3 className="gh-display max-w-2xl text-balance text-3xl sm:text-4xl">
                  A code that converts. A target that scales.
                </h3>
                <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-neutral-300">
                  Simple, transparent, and fully tracked. You always see exactly
                  what your code has driven.
                </p>
              </div>
              <div className="mt-5 grid gap-4">
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

            <div className="gh-card overflow-hidden p-6 sm:p-8">
              <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-center xl:gap-14">
                <div className="min-w-0">
                  <div className="gh-kicker">The opportunity</div>
                  <h3 className="gh-display mt-4 max-w-xl text-balance text-3xl sm:text-4xl xl:text-5xl">
                    Our first partners made $45K to $60K each.
                  </h3>
                </div>
                <div className="min-w-0 space-y-5">
                  <p className="max-w-2xl text-pretty font-serif text-xl italic leading-relaxed text-neutral-100 sm:text-2xl">
                    The most anticipated film of the year, sold as a curated
                    experience nobody else on the internet is offering.
                  </p>
                  <p className="max-w-2xl text-pretty font-serif text-xl italic leading-relaxed text-neutral-100 sm:text-2xl">
                    You bring the audience. You take your share of every sale your
                    code drives, with no cap.
                  </p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-riviera-blue">
                    The window is now. The ones who move first own it.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid gap-x-8 gap-y-6 grid-cols-1 xl:grid-cols-3">
                <Metric value="$45K-$60K" label="First partners earned, each" tone="accent" size="compact" />
                <Metric value="$855K" label="Campaign stage" size="compact" />
                <LaunchCountdownMetric key="launch-countdown-live-v2" />
              </div>
              <p className="mt-8 border-t border-white/10 pt-5 font-serif text-xl font-semibold leading-relaxed text-neutral-100">
                This is the moment. The stage is set. The only question is whether
                you&apos;re on it.
              </p>
            </div>

            <div>
              <div className="gh-kicker">Why now</div>
              <div className="gh-card mt-5 p-6 sm:p-8">
                <h3 className="gh-display max-w-2xl text-balance text-3xl sm:text-4xl">
                  The best window. The last window.
                </h3>
                <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-neutral-300">
                  This is the last window. The film opens July 16. We are in the
                  highest-converting stretch of the entire campaign, the weeks
                  where cinema buyers are most active and most ready to commit.
                  After this, the window closes and it does not reopen.
                </p>
                <p className="mt-6 max-w-3xl text-pretty font-serif text-xl font-semibold leading-relaxed text-neutral-100">
                  This is the final group of partners. The ones who move now catch
                  the peak. The ones who wait, miss it entirely.
                </p>
              </div>
              <div className="mt-5 grid gap-4">
                {timelineItems.map((item) => (
                  <article key={item.title} className="gh-card p-6 sm:p-7">
                    <div className="grid gap-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-riviera-blue">
                          {item.when}
                        </div>
                        <div className="mt-1 font-serif text-xl font-semibold leading-tight text-neutral-50">
                          {item.title}
                        </div>
                      </div>
                      <p className="min-w-0 text-pretty text-sm leading-relaxed text-neutral-400 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="gh-kicker">What you get from us</div>
              <div className="gh-card mt-5 p-6 sm:p-8">
                <h3 className="gh-display max-w-2xl text-balance text-3xl sm:text-4xl">
                  You bring the audience. We bring everything else.
                </h3>
              </div>
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

            <div>
              <div className="gh-kicker">Who you'd be partnering with</div>
              <div className="gh-card mt-5 p-6 sm:p-8">
                <h3 className="gh-display max-w-2xl text-balance text-3xl sm:text-4xl">
                  A real operation. Built to be verified.
                </h3>
                <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-neutral-300">
                  Your name goes on this with your audience. Riviera Movies takes
                  that seriously and makes it easy to stand behind the partnership.
                </p>
              </div>
              <div className="mt-5 grid gap-4">
                {verificationItems.map((item, index) => (
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
              <div className="gh-kicker">The next step</div>
              <h3 className="gh-display mt-4 max-w-2xl text-balance text-3xl sm:text-4xl">
                Reply, and we&apos;ll walk you through the numbers.
              </h3>
              <p className="mt-5 max-w-3xl text-pretty text-base leading-relaxed text-neutral-300">
                Two minutes on a call or over message. Riviera Movies will show
                the exact commission structure, the assets, and how your code works,
                then set your target together.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="mailto:partners@rivieramovies.com">
                  partners@rivieramovies.com
                </PrimaryLink>
                <SecondaryLink href="https://rivieramovies.com/">
                  rivieramovies.com
                </SecondaryLink>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-neutral-500">
                Either way, thank you for the work you put out. It&apos;s why you&apos;re
                on this list.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8 text-sm leading-relaxed text-neutral-500">
              Figures reflect earnings generated by our first partners on this
              campaign. Compensation structure is confirmed on the partner call.
              Individual results vary with your audience, reach, and how
              consistently you post.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
