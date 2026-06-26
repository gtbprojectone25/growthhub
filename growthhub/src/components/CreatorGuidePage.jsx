import { SectionHeader, FeatureCard, Metric, PrimaryLink, SecondaryLink } from './ui.jsx'
import { useCountdown, padTime } from '../lib/countdown.js'

/* ----------------------------------------------------------------------------
 * Data — Creator Partner Program guide (mapped from the program deck).
 * Content corrections applied to match the live landing page:
 *   - 28 native IMAX 70mm venues (not 25)
 *   - no "3,000 total seats" metric
 *   - "the studio" instead of "Universal Pictures"
 *   - the "25" Trireme figure is an edition size and is kept as-is.
 * -------------------------------------------------------------------------- */

const coverStats = [
  { value: '28', label: 'Native IMAX 70mm venues', tone: 'accent' },
  { value: '$597', label: 'VIP package' },
  { value: '$45K-$60K', label: 'First partners earned, each', tone: 'accent' },
]

const opportunityReasons = [
  {
    title: 'Peak buying behavior',
    description:
      'Search intent and impulse purchases spike in the final weeks before a high-demand release. That window is open right now.',
  },
  {
    title: 'IMAX 70mm scarcity',
    description:
      "28 venues worldwide. When those seats are gone, they don't come back. Scarcity is real, use it honestly.",
  },
  {
    title: 'Cultural conversation peak',
    description:
      'Social commentary on The Odyssey is hitting maximum volume. Content about it gets farther reach with less effort.',
  },
  {
    title: 'First-mover advantage',
    description:
      'Partners posting now own the topic before the space saturates. Waiting is the only strategy that guarantees lower results.',
  },
]

const benchmarkRows = [
  {
    level: 'Minimum',
    stories: '1 / day',
    reels: '2 / week',
    result: 'Below average',
    top: false,
  },
  {
    level: 'Recommended',
    stories: '3-4 / day',
    reels: '4-5 / week',
    result: '$32K - $50K',
    top: false,
  },
  {
    level: 'Top Partners',
    stories: '4+ / day',
    reels: '5+ / week',
    result: '$45K - $60K',
    top: true,
  },
]

const pillars = [
  {
    index: '01',
    title: 'Cultural Authority',
    description:
      "Deep dives on IMAX 70mm, Nolan's craft, the Odysseus myth. Positions you as the credible voice, not a promoter.",
  },
  {
    index: '02',
    title: 'Experience Desire',
    description:
      "Artifacts, atmosphere, premium seat. Make your audience feel they'll miss something irreplaceable. FOMO grounded in reality.",
  },
  {
    index: '03',
    title: 'Social Proof & Urgency',
    description:
      'Seat tracker updates, who is going, real countdowns. Authentic scarcity: the 28-venue limit is real and compelling enough.',
  },
  {
    index: '04',
    title: 'Direct Conversion',
    description:
      'Stories swipe-up, link in bio, code callouts. Every third content piece gets a direct path to purchase.',
  },
]

const topicGroups = [
  {
    category: 'Cultural Authority',
    items: [
      'Why IMAX 70mm changes how you experience a film',
      "Nolan's visual language, what to expect",
      'The myth of Odysseus and what the story really means',
      'Sound design on Nolan films, what to listen for',
      'Real IMAX vs. LieMAX: why it matters for The Odyssey',
    ],
  },
  {
    category: 'Experience Desire',
    items: [
      'Spartan Bracelet unboxing (1 of 1,000 worldwide)',
      'The Odyssey Coin close-up, bronze finish detail',
      'IMAX 70mm screen size vs. standard cinema',
      'Odysseia Olive Oil, the rarest artifact in the package',
      'What center-optic IMAX seats actually feel like',
    ],
  },
  {
    category: 'Social Proof & Urgency',
    items: [
      'Real-time: seat tracker screenshot + commentary',
      "I just confirmed my VIP, here's why I upgraded",
      "Countdown: X days out, here's what I'm excited about",
      'Someone just asked if Trireme units were still available',
      'Reacting to follower questions about the package',
    ],
  },
  {
    category: 'Direct Conversion',
    items: [
      'Story sequence: how I got my seat in 3 steps',
      'Link-in-bio update with clear code callout',
      'For everyone who asked: code [X], link in bio',
      'Last-chance content 48h before release',
      'Quick walkthrough of the order flow, removes friction',
    ],
  },
]

const storiesFormat = [
  { label: 'Swipe-up / link to purchase', tag: 'Conversion' },
  { label: 'Real-time countdown sticker', tag: 'Urgency' },
  { label: 'Artifact unboxing / showcase', tag: 'Desire' },
  { label: "Polls: 'Are you going?'", tag: 'Engagement' },
  { label: 'Partner code reminder', tag: 'Conversion' },
  { label: 'Seat availability screenshot', tag: 'Urgency' },
]

const reelsFormat = [
  { label: 'IMAX 70mm explainer (1-2 min)', tag: 'Authority' },
  { label: "Nolan's craft, analysis & hook", tag: 'Authority' },
  { label: 'Artifact showcase, close-up visual', tag: 'Desire' },
  { label: 'The Odysseus myth, cultural context', tag: 'Authority' },
  { label: 'Film trailer reaction', tag: 'Engagement' },
  { label: 'Full VIP experience walkthrough', tag: 'Conversion' },
]

const calendarPhaseOne = [
  { date: 'Jun 25', story: "Tease: 'Something big July 16' + countdown sticker", reel: 'Why IMAX 70mm is different', focus: 'Authority' },
  { date: 'Jun 26', story: 'Share your excitement + link in bio', reel: '-', focus: 'Desire' },
  { date: 'Jun 27', story: "Poll: 'Are you seeing The Odyssey in IMAX?'", reel: 'The Odysseus myth explained', focus: 'Authority' },
  { date: 'Jun 28', story: 'Swipe-up: early mover message + code first mention', reel: '-', focus: 'Conversion' },
  { date: 'Jun 29', story: "Q&A: 'What's in the VIP package?'", reel: "Nolan's craft: what makes him different", focus: 'Authority' },
  { date: 'Jun 30', story: 'Spartan Bracelet close-up + 1 of 1,000 stat', reel: '-', focus: 'Desire' },
  { date: 'Jul 1', story: 'Seat availability update + urgency language', reel: 'IMAX vs. standard cinema, side by side', focus: 'Urgency' },
  { date: 'Jul 2', story: 'Odysseia Olive Oil showcase', reel: '-', focus: 'Desire' },
  { date: 'Jul 3', story: 'Code reminder + FAQ response story', reel: 'Sound design on Nolan films', focus: 'Conversion' },
  { date: 'Jul 4', story: "Countdown: 12 days + what I'm most excited about", reel: 'Odyssey Coin reaction + context', focus: 'Desire' },
  { date: 'Jul 5', story: "Weekend urgency: 'Seats moving fast'", reel: '-', focus: 'Urgency' },
  { date: 'Jul 6', story: "'Here's exactly what you get', full walkthrough", reel: 'The VIP experience, virtual tour', focus: 'Authority' },
  { date: 'Jul 7', story: '1-week countdown banner + code callout', reel: '-', focus: 'Urgency' },
]

const calendarPhaseTwo = [
  { date: 'Jul 8', story: "Momentum: 'Here's who's already confirmed their seat'", reel: 'Trireme Scale Model, full showcase (25 units)', focus: 'Desire' },
  { date: 'Jul 9', story: 'Final week, seats tracker update', reel: '-', focus: 'Urgency' },
  { date: 'Jul 10', story: "Code + link refresh: 'this week only' framing", reel: 'Film trailer reaction / what excited me most', focus: 'Conversion' },
  { date: 'Jul 11', story: "Community: 'Who's going with me?'", reel: 'IMAX experience, how it compares to standard', focus: 'Desire' },
  { date: 'Jul 12', story: '5 days out, urgency push + code reminder', reel: '-', focus: 'Urgency' },
  { date: 'Jul 13', story: "'Here's what I'm bringing to the IMAX screening'", reel: "What I'm wearing / prepping for opening night", focus: 'Desire' },
  { date: 'Jul 14', story: "48H warning, 'Last chance to join us'", reel: '-', focus: 'Urgency' },
  { date: 'Jul 15', story: "FINAL DAY: 'Tomorrow it's real. Grab your seat now.'", reel: 'Everything you need to know before you go', focus: 'Conversion' },
  { date: 'Jul 16', story: 'LIVE DAY, event content + real-time updates', reel: 'Post-film reaction + thank your audience', focus: 'Authority' },
]

const copyLibrary = [
  {
    kind: 'Reels hook',
    tag: 'Cultural',
    text: 'This is the one film this year that actually demands to be seen on the biggest screen possible, and here is exactly why that matters.',
  },
  {
    kind: 'Reels hook',
    tag: 'Desire',
    text: 'I got early access to something that only 1,000 people in the world will ever hold. Let me show you what it looks like.',
  },
  {
    kind: 'Stories CTA',
    tag: 'Conversion',
    text: "I've been using code [X], it unlocks access before general tickets. Link in bio while seats are available.",
  },
  {
    kind: 'Urgency',
    tag: 'Scarcity',
    text: "Checked this morning: seats are moving. If you've been thinking about it, now is the time. Not being dramatic, it's real.",
  },
  {
    kind: 'Caption',
    tag: 'Cultural',
    text: "Christopher Nolan's The Odyssey. IMAX 70mm. July 16. This is the one I've been waiting for, and the format is the point. [link in bio]",
  },
  {
    kind: 'Reels hook',
    tag: 'Authority',
    text: "Most people don't know the difference between real IMAX and regular IMAX. It matters for this film more than any other.",
  },
]

const provides = [
  {
    title: 'Visual Assets Library',
    description:
      'High-res photography: Spartan Bracelet, Odyssey Coin, Olive Oil, Trireme. Editorial styled + detail shots. Ready for Reels and Stories.',
  },
  {
    title: 'Real-Time Dashboard',
    description:
      'Individual partner view: sales by code, conversion rate, commission total. Live updates. You always know your exact standing.',
  },
  {
    title: 'B-Roll & Brand Video',
    description:
      'Official trailer (high-res), IMAX venue footage, brand video. Licensed for partner use. Cleared for organic posting.',
  },
  {
    title: 'Compliance Language',
    description:
      'Pre-written FTC/disclosure language for captions and Stories. Legally required, we made it copy-paste easy.',
  },
  {
    title: 'Campaign Context Doc',
    description:
      'Full brief: talking points, product specs, pricing, seat tracker. One document, no guessing.',
  },
  {
    title: 'Partner Support',
    description:
      'Direct line to the Riviera team. Questions, content review, asset requests, same-day response.',
  },
]

const gettingStarted = [
  {
    index: '01',
    title: 'Confirm your code',
    description:
      'Reply to your partnership email. Your unique promo code activates within 2 hours. Test it on rivieramovies.com before posting.',
  },
  {
    index: '02',
    title: 'Update link in bio',
    description:
      "Set rivieramovies.com with your code embedded. Most conversions happen here, don't skip it.",
  },
  {
    index: '03',
    title: 'Download your assets',
    description:
      'Partner asset drive link is in your welcome email. Download photography and video before posting anything.',
  },
  {
    index: '04',
    title: 'Publish first Story',
    description:
      "Post 1 Story within 24h. Simple: 'Something big is coming July 16. More soon.' Seeds the narrative early.",
  },
  {
    index: '05',
    title: 'Bookmark your dashboard',
    description:
      "Dashboard link is in your welcome email. Check it daily. It's your scoreboard, treat it like one.",
  },
  {
    index: '06',
    title: 'Contact the team',
    description:
      'Email partners@rivieramovies.com with your Instagram handle so we can track your content and send updates.',
  },
]

const dos = [
  'Disclose this as a paid partnership in every post, caption or Stories label. Protects you legally.',
  'State Riviera is independent and not affiliated with the studio, IMAX, or the distributor.',
  'Share your genuine enthusiasm, audiences detect inauthenticity before they read a word.',
  "Use your code or link in every conversion post. It's how you get paid.",
  'Post consistently. Partners who post daily outperform those who burst-and-stop.',
  'Ask your audience questions, engagement drives organic reach.',
]

const donts = [
  "Don't imply any official relationship with Nolan, the studio, or IMAX without Riviera's approval.",
  "Don't fabricate scarcity beyond what's real. 28 venues and limited seats are compelling enough.",
  "Don't misrepresent product pricing, package contents, or experience details.",
  "Don't use Riviera assets to promote competing entertainment products.",
  "Don't use the film's official copyrighted materials beyond what's in our asset pack.",
  "Don't commit to results or guarantees on behalf of Riviera.",
]

const dashboardMetrics = [
  { title: 'Clicks generated', description: 'Total link clicks from your code or UTM. Measures raw reach.' },
  { title: 'Orders attributed', description: 'Confirmed purchases where your code was applied.' },
  { title: 'Commission earned', description: 'Running total of earnings. Updates with every sale.' },
  { title: 'Conversion rate', description: 'Orders divided by clicks. Tells you if your audience is qualified.' },
  { title: 'Bonus progress', description: 'US$500 at 50 sales, US$1,000 at 100 sales. Tracked here.' },
  { title: 'Top-performing post', description: 'Which content drove the most clicks. Guides your next post.' },
]

const contacts = [
  { label: 'Partner support', value: 'partners@rivieramovies.com', href: 'mailto:partners@rivieramovies.com' },
  { label: 'Website', value: 'rivieramovies.com', href: 'https://rivieramovies.com/' },
  { label: 'Instagram', value: '@riviera.movies', href: 'https://www.instagram.com/riviera.movies/' },
  { label: 'Phone / WhatsApp', value: '+1 424 302 5278', href: 'tel:+14243025278' },
]

/* ----------------------------------------------------------------------------
 * Small building blocks
 * -------------------------------------------------------------------------- */

function Tag({ children }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded-full border border-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-riviera-blue">
      {children}
    </span>
  )
}

function GuideSection({ id, eyebrow, title, description, children, align = 'left' }) {
  return (
    <section id={id} className="gh-section">
      <div className="gh-container">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} align={align} />
        <div className={align === 'center' ? 'mt-12' : 'mt-10'}>{children}</div>
      </div>
    </section>
  )
}

function GuideCountdown() {
  const countdown = useCountdown()

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

function CalendarTable({ rows, storiesHeader }) {
  return (
    <div className="gh-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[40rem] border-collapse text-left">
          <thead>
            <tr className="border-b border-white/10 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              <th className="px-5 py-4 font-semibold">Date</th>
              <th className="px-5 py-4 font-semibold">{storiesHeader}</th>
              <th className="px-5 py-4 font-semibold">Reel</th>
              <th className="px-5 py-4 font-semibold">Focus</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.date}
                className={index > 0 ? 'border-t border-white/10' : ''}
              >
                <td className="whitespace-nowrap px-5 py-4 align-top font-serif text-base font-semibold text-neutral-50">
                  {row.date}
                </td>
                <td className="px-5 py-4 align-top text-sm leading-relaxed text-neutral-300">
                  {row.story}
                </td>
                <td className="px-5 py-4 align-top text-sm leading-relaxed text-neutral-400">
                  {row.reel}
                </td>
                <td className="whitespace-nowrap px-5 py-4 align-top text-xs font-semibold uppercase tracking-[0.16em] text-riviera-blue">
                  {row.focus}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function FormatColumn({ heading, cadence, items }) {
  return (
    <div className="gh-card p-6 sm:p-8">
      <h3 className="gh-display text-2xl sm:text-3xl">{heading}</h3>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">
        {cadence}
      </p>
      <ul className="mt-6 grid gap-3">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between gap-4 border-t border-white/10 pt-3 first:border-t-0 first:pt-0"
          >
            <span className="text-sm leading-relaxed text-neutral-300 sm:text-base">
              {item.label}
            </span>
            <Tag>{item.tag}</Tag>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ----------------------------------------------------------------------------
 * Page
 * -------------------------------------------------------------------------- */

export default function CreatorGuidePage() {
  return (
    <div className="gh-page-shell min-h-dvh">
      {/* Slim standalone header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-backdrop-filter:bg-neutral-950/60 bg-[#050608]/82">
        <div className="gh-container">
          <div className="flex h-16 items-center justify-between gap-4">
            <a
              href="/"
              className="inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-[0.22em] text-neutral-200/90 ring-1 ring-white/10 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(91,120,255,0.4)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-riviera-blue shadow-[0_0_0_6px_rgba(91,120,255,0.14)]" />
              Riviera Movies
            </a>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500 sm:inline">
              Creator Partner Guide
            </span>
            <a
              href="mailto:partners@rivieramovies.com"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-neutral-50 ring-1 ring-white/10 transition hover:bg-white/8 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(91,120,255,0.4)]"
            >
              Become a partner
            </a>
          </div>
        </div>
        <div className="h-px w-full gh-hairline" />
      </header>

      <main>
        {/* Cover */}
        <section id="top" className="gh-surface">
          <div className="gh-container py-20 sm:py-24 lg:py-28">
            <div className="gh-kicker">Riviera Movies, Creator Partner Program</div>
            <h1 className="gh-display mt-5 max-w-4xl text-balance text-4xl sm:text-5xl lg:text-6xl">
              Your complete guide to content, cadence, and results.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-neutral-300 sm:text-lg">
              The Odyssey, IMAX 70mm, July 16, 2026. Everything you need to run the
              campaign well: strategy, posting rhythm, copy, and the rules that keep
              you protected.
            </p>

            <div className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-3">
              {coverStats.map((stat) => (
                <Metric
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  tone={stat.tone}
                  size="compact"
                />
              ))}
            </div>

            <div className="mt-10 gh-card p-6 sm:p-8">
              <p className="font-serif text-xl font-semibold leading-relaxed text-neutral-100 sm:text-2xl">
                What our first partners generated: $45,000 to $60,000 each.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                Actual verified results from the pilot run. Individual results vary
                based on audience size, posting consistency, and market factors.
              </p>
            </div>
          </div>
        </section>

        {/* Opportunity window */}
        <GuideSection
          id="opportunity"
          eyebrow="The opportunity window"
          title="The best time to move is right now."
          description="The final weeks before a Nolan release are when audience intent and purchase behavior peak. That window is now. Partners who start now own the conversation space. Every day you wait costs reach and commission."
        >
          <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div className="gh-card p-6 sm:p-8">
              <GuideCountdown />
              <p className="mt-6 text-sm leading-relaxed text-neutral-400">
                July 16, 2026. The countdown above is live, not a placeholder, so the
                urgency you share is always accurate.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {opportunityReasons.map((item, index) => (
                <FeatureCard
                  key={item.title}
                  index={`0${index + 1}`}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </GuideSection>

        {/* Benchmark */}
        <GuideSection
          id="benchmark"
          eyebrow="Benchmark, what top partners do"
          title="Post more. Earn more. We have the data."
          description="This is not advice. It is what we measured from our pilot partners. Individual results vary, earnings are not guaranteed."
        >
          <div className="gh-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[36rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    <th className="px-5 py-4 font-semibold">Posting level</th>
                    <th className="px-5 py-4 font-semibold">Stories / day</th>
                    <th className="px-5 py-4 font-semibold">Reels / week</th>
                    <th className="px-5 py-4 font-semibold">Avg. partner result</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarkRows.map((row, index) => (
                    <tr
                      key={row.level}
                      className={`${index > 0 ? 'border-t border-white/10' : ''} ${
                        row.top ? 'bg-[rgba(91,120,255,0.08)]' : ''
                      }`}
                    >
                      <td className="whitespace-nowrap px-5 py-4 font-serif text-base font-semibold text-neutral-50">
                        {row.level}
                        {row.top ? <span className="ml-2 text-riviera-blue">&#10022;</span> : null}
                      </td>
                      <td className="px-5 py-4 text-sm text-neutral-300">{row.stories}</td>
                      <td className="px-5 py-4 text-sm text-neutral-300">{row.reels}</td>
                      <td
                        className={`px-5 py-4 font-serif text-base font-semibold ${
                          row.top ? 'text-riviera-blue' : 'text-neutral-200'
                        }`}
                      >
                        {row.result}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </GuideSection>

        {/* Content framework */}
        <GuideSection
          id="framework"
          eyebrow="Content framework"
          title="Four pillars. One goal: conversion."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <FeatureCard
                key={pillar.title}
                index={pillar.index}
                title={pillar.title}
                description={pillar.description}
              />
            ))}
          </div>
          <div className="mt-6 gh-card p-6 sm:p-8">
            <div className="gh-kicker">The 3:1 rule</div>
            <p className="mt-4 font-serif text-xl font-semibold leading-relaxed text-neutral-100 sm:text-2xl">
              For every 3 posts building authority or desire, publish 1 direct
              conversion post with your code.
            </p>
          </div>
        </GuideSection>

        {/* Content topics */}
        <GuideSection
          id="topics"
          eyebrow="Content topics, what to post"
          title="Macro themes & specific ideas."
          description="Categorized by pillar. Adapt to your voice. Nothing here is a script."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {topicGroups.map((group) => (
              <div key={group.category} className="gh-card p-6 sm:p-8">
                <div className="gh-kicker">{group.category}</div>
                <ul className="mt-5 grid gap-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-neutral-300 sm:text-base"
                    >
                      <span aria-hidden="true" className="mt-2 h-1 w-3 shrink-0 rounded-full bg-riviera-blue/70" />
                      <span className="text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </GuideSection>

        {/* Format guide */}
        <GuideSection
          id="formats"
          eyebrow="Format guide"
          title="Stories vs. Reels. Different formats, different jobs."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <FormatColumn heading="Stories" cadence="3-4 per day, recommended cadence" items={storiesFormat} />
            <FormatColumn heading="Reels" cadence="4-5 per week, recommended cadence" items={reelsFormat} />
          </div>
        </GuideSection>

        {/* Posting calendar */}
        <GuideSection
          id="calendar"
          eyebrow="Posting calendar"
          title="The content schedule, day by day."
          description="Phase 1 builds cultural authority and seeds desire. Phase 2 is maximum urgency and direct conversion. Adapt the ideas to your voice and post as consistently as you can."
        >
          <div className="space-y-10">
            <div>
              <div className="gh-kicker">Phase 1, June 25 to July 7</div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">
                Build cultural authority. Seed desire. Don't push the code yet.
              </p>
              <div className="mt-5">
                <CalendarTable rows={calendarPhaseOne} storiesHeader="Stories (3-4 / day)" />
              </div>
            </div>
            <div>
              <div className="gh-kicker">Phase 2, July 8 to 16, final push</div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">
                Maximum urgency + direct conversion. Post as consistently as possible.
              </p>
              <div className="mt-5">
                <CalendarTable rows={calendarPhaseTwo} storiesHeader="Stories (daily, multiple)" />
              </div>
            </div>
          </div>
        </GuideSection>

        {/* Copy library */}
        <GuideSection
          id="copy"
          eyebrow="Copy library, hooks & captions"
          title="Ready-to-use hooks. Adapt to your voice."
          description="Starting points, not scripts. Authenticity beats copy."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {copyLibrary.map((entry) => (
              <article key={entry.text} className="gh-card p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    {entry.kind}
                  </span>
                  <Tag>{entry.tag}</Tag>
                </div>
                <p className="mt-4 text-pretty font-serif text-lg italic leading-relaxed text-neutral-100 sm:text-xl">
                  &ldquo;{entry.text}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </GuideSection>

        {/* What Riviera provides */}
        <GuideSection
          id="provides"
          eyebrow="What Riviera provides"
          title="Everything you need is already prepared."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {provides.map((item) => (
              <article key={item.title} className="gh-card p-6 sm:p-7">
                <h3 className="text-balance font-serif text-xl font-semibold leading-tight text-neutral-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-neutral-400 sm:text-base">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </GuideSection>

        {/* Getting started */}
        <GuideSection
          id="getting-started"
          eyebrow="Getting started, first 24 hours"
          title="You're in. Here's what happens next."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {gettingStarted.map((step) => (
              <FeatureCard
                key={step.title}
                index={step.index}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </GuideSection>

        {/* Do's and Don'ts */}
        <GuideSection
          id="guidelines"
          eyebrow="Content guidelines"
          title="Do's and Don'ts. Protect yourself and the campaign."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="gh-card p-6 sm:p-8">
              <div className="gh-kicker">Do</div>
              <ul className="mt-5 grid gap-4">
                {dos.map((item, index) => (
                  <li key={item} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3">
                    <span className="font-serif text-lg font-semibold text-riviera-blue">
                      {`0${index + 1}`}
                    </span>
                    <span className="text-pretty text-sm leading-relaxed text-neutral-300 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gh-card p-6 sm:p-8">
              <div className="gh-kicker">Don't</div>
              <ul className="mt-5 grid gap-4">
                {donts.map((item, index) => (
                  <li key={item} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3">
                    <span className="font-serif text-lg font-semibold text-neutral-500">
                      {`0${index + 1}`}
                    </span>
                    <span className="text-pretty text-sm leading-relaxed text-neutral-300 sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GuideSection>

        {/* Legal */}
        <GuideSection
          id="legal"
          eyebrow="Legal, FTC & Instagram disclosure"
          title="Disclosure is required. Here's exactly how to do it."
          description="US FTC guidelines and Instagram's policies require paid partnership disclosure on every sponsored post. Non-negotiable."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="gh-card p-6 sm:p-8">
              <div className="gh-kicker">For Reels, caption</div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
                Add at the beginning of the caption, always visible, never buried.
              </p>
              <p className="mt-4 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-sm text-neutral-100">
                #ad &middot; #sponsored &middot; Paid partnership with @riviera.movies
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                Or use Instagram's native &lsquo;Paid Partnership&rsquo; label in
                Advanced Settings, then Tag Business Partner.
              </p>
              <p className="mt-4 text-sm italic leading-relaxed text-neutral-400">
                Independence note, include once per post series: &ldquo;Riviera is
                independent. Not affiliated with the studio, IMAX, or the distributor.&rdquo;
              </p>
            </div>
            <div className="gh-card p-6 sm:p-8">
              <div className="gh-kicker">For Stories</div>
              <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-neutral-300 sm:text-base">
                <li>Use Instagram's &lsquo;Paid Partnership&rsquo; sticker from Stories creator tools.</li>
                <li>Add #ad as a text overlay on videos without the sticker.</li>
                <li>Disclosure must be visible for the full duration, don't time it to disappear.</li>
                <li>Closing text frame: &lsquo;Paid partnership with @riviera.movies&rsquo; as a safe fallback.</li>
              </ul>
              <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-relaxed text-neutral-400">
                Questions? Email{' '}
                <a className="text-riviera-blue hover:underline" href="mailto:partners@rivieramovies.com">
                  partners@rivieramovies.com
                </a>{' '}
                before posting.
              </p>
            </div>
          </div>
        </GuideSection>

        {/* Tracking */}
        <GuideSection
          id="tracking"
          eyebrow="Tracking your performance"
          title="Your dashboard. Your numbers."
          description="Your individual partner dashboard updates in real time. Here's what you can monitor."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dashboardMetrics.map((metric) => (
              <article key={metric.title} className="gh-card p-6 sm:p-7">
                <h3 className="font-serif text-lg font-semibold text-neutral-50">{metric.title}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-neutral-400">
                  {metric.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 gh-card p-6 sm:p-8">
            <p className="font-serif text-lg font-semibold leading-relaxed text-neutral-100 sm:text-xl">
              Bonus: US$500 at 50 sales &middot; US$1,000 at 100 sales.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              Paid separately within 7 days of the milestone.
            </p>
          </div>
        </GuideSection>

        {/* Closing */}
        <section id="contact" className="gh-section">
          <div className="gh-container">
            <div className="gh-card p-6 sm:p-10">
              <div className="gh-kicker">Riviera Movies</div>
              <h2 className="gh-display mt-4 max-w-3xl text-balance text-3xl sm:text-4xl lg:text-5xl">
                You have everything you need. The only thing left is to post.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-neutral-300 sm:text-lg">
                The window is open. The assets are ready. Your code is active.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryLink href="mailto:partners@rivieramovies.com">
                  partners@rivieramovies.com
                </PrimaryLink>
                <SecondaryLink href="https://rivieramovies.com/">
                  rivieramovies.com
                </SecondaryLink>
              </div>

              <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
                {contacts.map((contact) => (
                  <div key={contact.label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      {contact.label}
                    </dt>
                    <dd className="mt-2">
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="text-sm font-medium text-neutral-100 hover:text-riviera-blue"
                      >
                        {contact.value}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 text-sm italic leading-relaxed text-neutral-500">
                Earnings figures represent actual verified results from the pilot run.
                Individual results vary based on audience size, posting consistency,
                and market factors. Riviera Movies is independent and not affiliated
                with the studio, IMAX, or the film distributor.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
