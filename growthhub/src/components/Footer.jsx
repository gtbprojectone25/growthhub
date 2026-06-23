function SocialButton({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-neutral-50 ring-1 ring-white/12 transition hover:bg-white/8 hover:ring-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(91,120,255,0.4)]"
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="pb-10 pt-20 sm:pt-24">
      <div className="gh-container">
        <div className="gh-card p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="gh-kicker">Contact</div>
              <h2 className="gh-display mt-4 text-3xl sm:text-4xl">
                Let&apos;s build something together.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
                Partnerships, creator campaigns, and premium experience opportunities
                are handled through Riviera&apos;s official channels.
              </p>
            </div>

            <div className="lg:col-span-5 lg:flex lg:items-end lg:justify-end">
              <div className="flex flex-wrap gap-3">
                <SocialButton href="https://www.instagram.com/riviera.movies/">
                  Instagram
                </SocialButton>
              </div>
            </div>
          </div>

          <div className="my-10 h-px w-full gh-hairline opacity-70" />

          <div className="flex flex-col gap-3 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <div className="font-semibold tracking-[0.2em] text-neutral-400">
              RIVIERA MOVIES
            </div>
            <div>Copyright 2026 Riviera Movies</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
