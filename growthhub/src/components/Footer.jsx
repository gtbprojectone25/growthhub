function SocialButton({ children }) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-neutral-50 ring-1 ring-white/12 transition hover:bg-white/8 hover:ring-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/30"
    >
      {children}
    </button>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="pb-10 pt-20 sm:pt-24">
      <div className="gh-container">
        <div className="rounded-3xl bg-white/3 p-7 ring-1 ring-white/10 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-neutral-50 sm:text-4xl">
                Let&apos;s build something together.
              </h2>
              <div className="mt-6 space-y-2 text-base text-neutral-200/80 sm:text-lg">
                <a
                  className="block w-fit rounded-lg underline decoration-white/20 underline-offset-4 transition hover:decoration-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/30"
                  href="mailto:growthhub85@gmail.com"
                >
                  growthhub85@gmail.com
                </a>
                <div>Brasília, Brasil</div>
              </div>
            </div>

            <div className="lg:col-span-5 lg:flex lg:items-end lg:justify-end">
              <div className="flex flex-wrap gap-3">
                <SocialButton>Instagram</SocialButton>
              </div>
            </div>
          </div>

          <div className="my-10 h-px w-full gh-hairline opacity-70" />

          <div className="flex flex-col gap-3 text-sm text-neutral-200/60 sm:flex-row sm:items-center sm:justify-between">
            <div className="font-semibold tracking-[0.2em] text-neutral-200/70">
              GROWTH HUB
            </div>
            <div>© 2026 Growth Hub</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

