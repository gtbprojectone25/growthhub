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
        <span className="text-balance font-serif text-3xl font-semibold leading-none text-neutral-50 sm:text-4xl lg:text-5xl">
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
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
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

          <div className="space-y-8 lg:col-span-8">
            <div className="gh-card p-6 sm:p-8">
              <div className="gh-kicker">The moment</div>
              <h3 className="gh-display mt-4 max-w-2xl text-balance text-3xl sm:text-4xl">
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
                  <h3 className="gh-display mt-4 max-w-xl text-balance text-4xl sm:text-5xl">
                    An $855,000 stage. Built for the few who get in early.
                  </h3>
                </div>
                <div className="border-l-0 border-[rgba(91,120,255,0.5)] lg:border-l lg:pl-8">
                  <p className="text-pretty font-serif text-2xl italic leading-relaxed text-neutral-100">
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
                <LaunchCountdownMetric key="launch-countdown-live-v2" />
              </div>
            </div>

            <div>
              <div className="gh-kicker">How the partnership works</div>
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
