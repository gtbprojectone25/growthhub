import { useId, useState } from 'react'
import { SectionHeader } from './ui.jsx'

const bonusRows = [
  { label: '50 sales through your code', value: 'US$ 500' },
  { label: '100 sales through your code', value: 'US$ 1,000' },
]

const faqGroups = [
  {
    category: 'How you get paid',
    items: [
      {
        q: 'How do I actually get paid?',
        a: 'You earn a commission on every sale made through your unique code, plus performance bonuses as you hit volume milestones. Everything is tracked automatically. No manual reporting, no chasing anyone for numbers.',
      },
      {
        q: 'Do I get a dashboard?',
        a: 'Yes. You get your own individual dashboard that shows every ticket purchased through your code in real time. Clicks, sales, earnings, all of it, updated live. You never have to take our word for what you have earned. You see it yourself, the moment it happens.',
      },
      {
        q: 'Is the compensation a flat fee or commission?',
        a: 'Performance based: commission on every sale your code drives, with no cap. We built it this way on purpose. A flat fee locks you to a fixed number, while commission scales with your audience. The more your audience moves, the more you make. There is no ceiling.',
      },
      {
        q: 'What are the bonuses?',
        a: 'On top of your commission, you earn milestone bonuses. These stack on top of your per-sale commission: the bonus is extra, not instead of. And the milestones do not stop at 100. The more you sell, the more you stack.',
        table: bonusRows,
      },
      {
        q: 'Is there any cost to join?',
        a: 'None. No fee to join, nothing to buy, no inventory to carry. You promote with your code, you earn on what it drives. That is the entire deal.',
      },
      {
        q: 'How much are partners actually making?',
        a: 'Our first partners generated between $45,000 and $60,000 each promoting this campaign. This is the final group before the window closes, and the earlier you are in, the more days your code has to compound.',
      },
    ],
  },
  {
    category: 'Posting, read this part carefully',
    items: [
      {
        q: 'How often should I post?',
        a: 'Every creator running with us posts daily, Stories every day, minimum. This is not a one-post-and-done brand deal. The creators who treat this like a flat-fee sponsorship leave money on the table. The ones who show up every single day are the ones who win. The math is simple: more posts lead to more clicks, more sales, more commission, more bonuses. There is no version of this where posting once works.',
        callout: 'Every single day.',
      },
      {
        q: 'What do I post?',
        a: 'We give you ready-made assets, editorial video, stills, and copy built around the film, that you can use as-is or adapt to your voice. You keep creative control. We do not script you word for word, because forced content does not convert and your audience can smell it. But you post, and you post daily.',
      },
    ],
  },
  {
    category: 'Is this legit',
    items: [
      {
        q: 'Is Riviera Movies a real company?',
        a: 'Yes. Riviera Movies designs curated experiences around major cinema events. For The Odyssey, that is confirmed IMAX 70mm screening access plus numbered physical artifacts produced exclusively for the event. Everything is at rivieramovies.com and on Instagram @riviera.movies. We will hop on a video call any time. We would rather you verify us than take our word for it.',
      },
      {
        q: 'Are you affiliated with Universal, IMAX, or the studio?',
        a: 'No, and we are upfront about it. We are independent and not affiliated with Universal, IMAX, or the film distributor. We acquired our screening inventory through the first public allocation and built the experience around it. We never present ourselves as an official channel.',
      },
      {
        q: 'Do you operate in the US?',
        a: 'Yes. The screening runs at a US IMAX 70mm venue, and we have Riviera representatives on site on event day handling the experience and the artifact handoff in person. Everything on the ground is local.',
      },
      {
        q: 'This feels too good to be true. What is the catch?',
        a: 'No catch. You promote a real product to an audience that already wants this film. You get a code that gives them a genuine reason to buy. You earn on every sale, plus bonuses. We make money when you do, that is the whole model. No upfront cost, nothing to buy.',
      },
    ],
  },
  {
    category: 'What it is',
    items: [
      {
        q: 'What am I actually promoting?',
        a: 'Not a ticket, a curated experience. A confirmed IMAX 70mm seat to the most anticipated film of the year, paired with numbered collector artifacts made only for this screening: the Spartan Bracelet, the Odyssey Coin, and Odysseia Olive Oil, each 1 of 1,000 worldwide.',
      },
      {
        q: 'Why now? Why the rush?',
        a: 'The screening is July 16. The campaign runs in the window before it, that is real urgency, not a fake countdown. We are at the point where audience decisions get made. The earlier you are in, the more days your code has to compound. Every day you wait is a day of sales you do not get back.',
      },
    ],
  },
  {
    category: 'Reputation and risk',
    items: [
      {
        q: 'If I promote this and something goes wrong, I look bad. How do I know it is safe?',
        a: 'The right question to ask. That is why everything is verifiable up front: the screening inventory is confirmed, the artifacts have production documentation and real photography you can see before you post, and we are transparent about being independent. Your name goes on this with your audience. We take that as seriously as you do. Verify all of it before you commit a thing.',
      },
      {
        q: 'Do I have to disclose this is a paid partnership?',
        a: 'Yes, and we make it easy. Disclosure goes in your caption or comments per platform rules. It keeps you compliant and it actually builds trust with your audience when it is clean. We will never ask you to hide the partnership.',
      },
      {
        q: 'What if my audience has a problem?',
        a: 'They reach our support directly, phone and email, staffed during US business hours, and you can always loop us in. You will not be left holding a problem alone.',
      },
    ],
  },
  {
    category: 'Getting started',
    items: [
      {
        q: 'What is the next step?',
        a: 'A quick call, 10 minutes, where we walk you through your code, the exact commission structure, the bonuses, and the assets. Then we set you up and you start posting. Daily.',
      },
      {
        q: 'Can I think about it?',
        a: 'Of course, it should be a yes you are sure about. But the campaign window is fixed by July 16, so the sooner you are in, the more your code can do. We will follow up in a couple of days.',
      },
    ],
  },
]

function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-5 w-5 shrink-0 text-riviera-blue transition-transform duration-300 ${
        open ? 'rotate-180' : ''
      }`}
    >
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BonusTable({ rows }) {
  return (
    <dl className="mt-5 overflow-hidden rounded-lg border border-white/10">
      {rows.map((row, index) => (
        <div
          key={row.label}
          className={`flex items-center justify-between gap-4 px-5 py-4 ${
            index > 0 ? 'border-t border-white/10' : ''
          }`}
        >
          <dt className="text-sm text-neutral-300 sm:text-base">{row.label}</dt>
          <dd className="whitespace-nowrap font-serif text-xl font-semibold text-riviera-blue sm:text-2xl">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

function FaqItem({ item, open, onToggle }) {
  const panelId = useId()

  return (
    <div className="gh-card overflow-hidden">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(91,120,255,0.4)]"
        >
          <span className="text-balance font-serif text-lg font-semibold leading-snug text-neutral-50 sm:text-xl">
            {item.q}
          </span>
          <ChevronIcon open={open} />
        </button>
      </h3>

      {open ? (
        <div id={panelId} className="gh-fade-up px-6 pb-6">
          {item.callout ? (
            <p className="mb-4 font-serif text-3xl font-semibold leading-none text-riviera-blue sm:text-4xl">
              {item.callout}
            </p>
          ) : null}
          <p className="max-w-prose text-pretty text-sm leading-relaxed text-neutral-300 sm:text-base">
            {item.a}
          </p>
          {item.table ? <BonusTable rows={item.table} /> : null}
        </div>
      ) : null}
    </div>
  )
}

export default function FaqSection() {
  const [openKey, setOpenKey] = useState(null)

  return (
    <section id="faq" className="gh-section">
      <div className="gh-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <SectionHeader
                eyebrow="FAQ"
                title="The questions creators ask before they say yes."
                description="Answered straight, no spin. The same answers we give on the partner call, written down."
              />

              <div className="mt-6 border-l border-[rgba(91,120,255,0.45)] pl-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  The Odyssey - IMAX 70mm - July 16, 2026
                </p>
              </div>

              <div className="mt-8 gh-card p-6">
                <div className="gh-kicker">The window</div>
                <p className="mt-4 font-serif text-2xl font-semibold leading-tight text-neutral-50">
                  The best window. The last window.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                  The film opens July 16, and we are in the highest-converting
                  stretch of the campaign. After this, the window closes and it
                  does not reopen. This is the final group of partners. The ones
                  who move now catch the peak.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-10 lg:col-span-8">
            {faqGroups.map((group) => (
              <div key={group.category}>
                <div className="gh-kicker">{group.category}</div>
                <div className="mt-5 grid gap-3">
                  {group.items.map((item) => {
                    const key = `${group.category}-${item.q}`
                    return (
                      <FaqItem
                        key={key}
                        item={item}
                        open={openKey === key}
                        onToggle={() =>
                          setOpenKey((current) => (current === key ? null : key))
                        }
                      />
                    )
                  })}
                </div>
              </div>
            ))}

            <p className="border-t border-white/10 pt-8 text-sm italic leading-relaxed text-neutral-500">
              Riviera Movies is independent and not affiliated with Universal
              Pictures, IMAX, or the film distributor. Earnings figures reflect
              what our first partners generated on this campaign. Individual
              results depend on your audience, your reach, and how consistently
              you post.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
