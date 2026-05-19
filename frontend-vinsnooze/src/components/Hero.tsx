const mono = { fontFamily: "'Space Grotesk', Helvetica, sans-serif" }
const display = { fontFamily: "'Space Grotesk', Helvetica, sans-serif" }

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        height: 'calc(100vh - 36px)',
        backgroundImage: 'url(/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Season pill */}
        <span
          className="tracking-[0.35em] uppercase px-8 py-3"
          style={{
            ...mono,
            fontSize: '15px',
            fontWeight: 600,
            color: '#fff',
            border: '2px solid rgba(255,255,255,0.8)',
            borderRadius: '999px',
          }}
        >
          Archive 2026
        </span>

        {/* Two CTAs */}
        <div className="flex gap-12 tracking-[0.2em] uppercase" style={{ ...mono, fontSize: '16px', fontWeight: 600 }}>
          <a
            href="#shop"
            className="transition-opacity hover:opacity-80"
            style={{ color: '#fff', borderBottom: '2px solid rgba(255,255,255,0.9)', paddingBottom: '3px' }}
          >
            Shop Tops
          </a>
          <a
            href="#shop"
            className="transition-opacity hover:opacity-80"
            style={{ color: '#fff', borderBottom: '2px solid rgba(255,255,255,0.9)', paddingBottom: '3px' }}
          >
            Shop Outerwear
          </a>
        </div>
      </div>

      {/* Large display text bleeding from bottom */}
    </section>
  )
}
