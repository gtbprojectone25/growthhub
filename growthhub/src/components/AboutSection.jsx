export default function AboutSection() {
  return (
    <section id="about" className="gh-section">
      <div className="gh-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="text-xs font-semibold tracking-[0.28em] text-neutral-200/70">
              About
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-neutral-50 sm:text-4xl">
              Who we are
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-white/3 p-7 ring-1 ring-white/10 sm:p-10">
              <p className="text-pretty text-base leading-relaxed text-neutral-200/80 sm:text-lg">
                Growth Hub is an entertainment and business experiences company based in
                Brazil. We operate at the intersection of culture, live events, and
                commercial strategy — creating premium experiences for audiences who
                expect more than ordinary.
              </p>
              <div className="my-8 h-px w-full gh-hairline opacity-70" />
              <p className="text-pretty text-base leading-relaxed text-neutral-200/80 sm:text-lg">
                We work with brands, venues, and partners who understand that the right
                experience doesn&apos;t just entertain — it builds loyalty, drives
                conversation, and leaves a mark.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

