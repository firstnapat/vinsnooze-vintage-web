import { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#faf9f7]/90 backdrop-blur-sm">
      {/* Left links */}
      <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-medium">
        <a href="#shop" className="hover:opacity-60 transition-opacity">Shop</a>
        <a href="#collections" className="hover:opacity-60 transition-opacity">Collections</a>
        <a href="#magazine" className="hover:opacity-60 transition-opacity">Magazine</a>
      </div>

      {/* Logo (center) */}
      <a href="/" className="absolute left-1/2 -translate-x-1/2 text-sm tracking-[0.3em] uppercase font-bold">
        Vinsnooze
      </a>

      {/* Right actions */}
      <div className="hidden md:flex gap-8 text-xs tracking-widest uppercase font-medium ml-auto">
        <a href="#search" className="hover:opacity-60 transition-opacity">Search</a>
        <a href="#cart" className="hover:opacity-60 transition-opacity">Cart (0)</a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden ml-auto text-xs tracking-widest uppercase"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#faf9f7] border-t border-black/10 flex flex-col gap-6 px-6 py-8 text-sm tracking-widest uppercase">
          <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
          <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
          <a href="#magazine" onClick={() => setMenuOpen(false)}>Magazine</a>
          <a href="#cart" onClick={() => setMenuOpen(false)}>Cart (0)</a>
        </div>
      )}
    </nav>
  )
}
