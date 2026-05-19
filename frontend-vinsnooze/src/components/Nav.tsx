import { useState, useEffect } from 'react'

const mono = { fontFamily: "'Space Grotesk', Helvetica, sans-serif" }

const ArrowDown = () => (
  <svg width="9" height="9" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', marginLeft: '4px', opacity: 0.6 }}>
    <path d="M13.3964 13.0312C12.1408 14.1889 10.9749 15.8451 9.89865 18L8.07175 18C6.99552 15.8504 5.8296 14.1941 4.57399 13.0312C3.96693 12.4629 3.25037 12.0168 2.46544 11.7183C1.68051 11.4199 0.842667 11.2751 0 11.2922V8.54366C2.07534 8.54366 3.73901 9.03094 4.99103 10.0055C6.26318 11.0123 7.17333 12.386 7.59013 13.9282L7.70045 13.9282L7.70045 0L10.2834 0L10.2834 13.9282L10.4368 13.9282C10.8363 12.3852 11.7386 11.0091 13.009 10.0055C14.2646 9.02919 15.9283 8.54192 18 8.54366V11.2922C17.1526 11.2725 16.3095 11.4161 15.5194 11.7146C14.7293 12.013 14.0078 12.4605 13.3964 13.0312Z" fill="currentColor" />
  </svg>
)

const CartIcon = () => (
  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 7.75V4.442c0-.979.395-1.918 1.098-2.61A3.78 3.78 0 0 1 8.25.75a3.78 3.78 0 0 1 2.652 1.081A3.66 3.66 0 0 1 12 4.442V7.75M1.375 5.673a.63.63 0 0 0-.442.18.6.6 0 0 0-.183.435v8.308c0 1.163 1.006 2.154 2.188 2.154h10.625c1.18 0 2.187-.943 2.187-2.106V6.288a.6.6 0 0 0-.183-.435.63.63 0 0 0-.442-.18z" />
  </svg>
)

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bg = scrolled ? '#14100C' : 'transparent'
  const textCol = 'rgba(232,226,216,1)'
  const mutedCol = 'rgba(232,226,216,0.65)'

  const linkStyle = { ...mono, color: mutedCol, fontSize: '14px', letterSpacing: '0.04em', textTransform: 'uppercase' as const }

  return (
    <nav
      className="fixed left-0 right-0 z-50 flex items-center gap-6 px-8 transition-colors duration-300"
      style={{ top: '36px', background: bg, backdropFilter: scrolled ? 'blur(8px)' : 'none', height: '64px' }}
    >
      {/* Logo */}
      <a href="/" style={{ ...mono, color: textCol, fontSize: '15px', letterSpacing: '0.45em', textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0 }}>
        Vinsnooze
      </a>

      {/* Left nav links */}
      <div className="hidden md:flex items-center gap-7">
        {[
          { label: 'Collections', dropdown: true },
          { label: 'Shop Women', dropdown: true },
          { label: 'Shop Men', dropdown: true },
          { label: 'Accessories', dropdown: true },
        ].map(({ label, dropdown }) => (
          <button
            key={label}
            className="flex items-center transition-opacity hover:opacity-100"
            style={{ ...linkStyle, opacity: 0.65, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            {label}
            {dropdown && <ArrowDown />}
          </button>
        ))}
      </div>

      {/* Right actions */}
      <div className="hidden md:flex items-center gap-6 ml-auto">
        <button className="transition-opacity hover:opacity-100" style={{ ...linkStyle, opacity: 0.65, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <SearchIcon />
        </button>
        <a href="#membership" style={{ ...linkStyle, opacity: 0.65 }} className="hover:opacity-100 transition-opacity">Membership</a>
        <a href="#mail" style={{ ...linkStyle, opacity: 0.65 }} className="hover:opacity-100 transition-opacity">The V-Mail</a>
        <a href="#account" style={{ ...linkStyle, opacity: 0.65 }} className="hover:opacity-100 transition-opacity">Login</a>
        <button className="relative flex items-center transition-opacity hover:opacity-100" style={{ color: textCol, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <CartIcon />
          <span
            className="absolute -top-1.5 -right-2 flex items-center justify-center rounded-full text-[9px]"
            style={{ ...mono, background: textCol, color: '#0D0C0B', width: '14px', height: '14px', fontWeight: 600 }}
          >
            0
          </span>
        </button>
      </div>

      {/* Mobile burger */}
      <button
        className="md:hidden ml-auto text-[11px] tracking-[0.25em] uppercase"
        style={{ ...mono, color: mutedCol, background: 'none', border: 'none', cursor: 'pointer' }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>

      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 flex flex-col gap-6 px-8 py-8"
          style={{ ...mono, color: mutedCol, fontSize: '12px', letterSpacing: '0.04em', textTransform: 'uppercase', background: '#0D0C0B', borderBottom: '1px solid rgba(232,226,216,0.08)' }}
        >
          {['Collections', 'Shop Women', 'Shop Men', 'Accessories', 'Membership', 'Cart (0)'].map((l) => (
            <a key={l} href="#" onClick={() => setMenuOpen(false)} style={{ color: mutedCol }} className="hover:opacity-100 transition-opacity">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
