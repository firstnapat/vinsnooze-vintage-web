import { useState, useEffect } from 'react'

const slides = [
  {
    headline: 'WORN IN.\nNEVER WORN OUT.',
    sub: 'New drop — vintage selects',
    cta: 'SHOP NOW',
    bg: '#1a1a1a',
    textColor: '#faf9f7',
  },
  {
    headline: 'SECOND LIFE.\nFIRST CHOICE.',
    sub: 'Curated from the best eras',
    cta: 'EXPLORE',
    bg: '#e8e4dc',
    textColor: '#111',
  },
  {
    headline: 'THE ARCHIVE\nIS OPEN.',
    sub: 'Limited pieces. Unlimited story.',
    cta: 'VIEW ARCHIVE',
    bg: '#2c2416',
    textColor: '#f5f0e8',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length)
        setFading(false)
      }, 400)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const slide = slides[current]

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center transition-colors duration-700"
      style={{ background: slide.bg, color: slide.textColor }}
    >
      {/* Text content */}
      <div
        className="text-center px-6 transition-opacity duration-400"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <p className="text-xs tracking-[0.4em] uppercase mb-6 opacity-70">{slide.sub}</p>
        <h1
          className="text-5xl md:text-8xl font-black tracking-tight leading-none mb-10 uppercase whitespace-pre-line"
        >
          {slide.headline}
        </h1>
        <a
          href="#shop"
          className="inline-block border text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-current hover:text-[#faf9f7] transition-colors"
          style={{ borderColor: slide.textColor, color: slide.textColor }}
        >
          {slide.cta}
        </a>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-8 h-px transition-all duration-300"
            style={{
              background: slide.textColor,
              opacity: i === current ? 1 : 0.3,
              height: i === current ? '2px' : '1px',
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <p
        className="absolute bottom-8 right-8 text-xs tracking-widest uppercase opacity-40"
        style={{ color: slide.textColor }}
      >
        Scroll
      </p>
    </section>
  )
}
