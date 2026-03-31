import { useEffect, useMemo, useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'What we do', href: '#what-we-do' },
  { label: 'Riviera', href: '#riviera' },
  { label: 'Contact', href: '#contact' },
]

function cx(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hairlineClass = useMemo(
    () => (scrolled ? 'opacity-100' : 'opacity-0'),
    [scrolled],
  )

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cx(
          'backdrop-blur supports-backdrop-filter:bg-neutral-950/60',
          'transition-colors duration-300',
          scrolled ? 'bg-neutral-950/70' : 'bg-transparent',
        )}
      >
        <div className="gh-container">
          <div className="flex h-16 items-center justify-between">
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-[0.22em] text-neutral-200/90 ring-1 ring-white/10 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/30"
              aria-label="Voltar ao topo"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-200/80 shadow-[0_0_0_6px_rgba(200,164,93,0.12)]" />
              Growth Hub
            </a>

            <nav className="hidden items-center gap-1 sm:flex" aria-label="Navegação">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-neutral-200/80 transition hover:text-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/30"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-neutral-50 ring-1 ring-white/10 transition hover:bg-white/8 hover:ring-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/30"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className={cx('h-px w-full gh-hairline transition-opacity duration-300', hairlineClass)} />
      </div>
    </header>
  )
}

