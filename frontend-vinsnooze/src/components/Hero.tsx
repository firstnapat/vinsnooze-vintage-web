const mono = { fontFamily: "'Space Grotesk', Helvetica, sans-serif" }
const display = { fontFamily: "'Space Grotesk', Helvetica, sans-serif" }

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center"
      style={{
        height: 'calc(100vh - 36px)',
        background: 'linear-gradient(165deg, #0D0B09 0%, #1C1510 55%, #0A0807 100%)',
      }}
    >
      {/* Centered content */}
      <div className="flex flex-col items-center gap-6">
        {/* Season pill */}
        <span
          className="text-[10px] tracking-[0.35em] uppercase px-6 py-2.5"
          style={{
            ...mono,
            color: '#E8E2D8',
            border: '1px solid rgba(232,226,216,0.3)',
            borderRadius: '999px',
          }}
        >
          Archive 2026
        </span>

        {/* Two CTAs */}
        <div className="flex gap-10 text-[11px] tracking-[0.2em] uppercase" style={mono}>
          <a
            href="#shop"
            className="transition-opacity hover:opacity-100"
            style={{ color: 'rgba(232,226,216,0.7)', borderBottom: '1px solid rgba(232,226,216,0.45)', paddingBottom: '2px' }}
          >
            Shop Tops
          </a>
          <a
            href="#shop"
            className="transition-opacity hover:opacity-100"
            style={{ color: 'rgba(232,226,216,0.7)', borderBottom: '1px solid rgba(232,226,216,0.45)', paddingBottom: '2px' }}
          >
            Shop Outerwear
          </a>
        </div>
      </div>

      {/* Large display text bleeding from bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: '140px' }}>
        <p
          className="absolute bottom-0 left-5 whitespace-nowrap select-none pointer-events-none"
          style={{
            ...display,
            fontSize: '13vw',
            fontWeight: 900,
            lineHeight: 1,
            color: '#F4EDE3',
            letterSpacing: '-0.01em',
          }}
        >
          NEW ARRIVALS
        </p>
      </div>
    </section>
  )
}
