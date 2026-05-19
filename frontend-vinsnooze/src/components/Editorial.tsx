const mono = { fontFamily: "'Space Grotesk', Helvetica, sans-serif" }
const display = { fontFamily: "'Space Grotesk', Helvetica, sans-serif" }

export default function Editorial() {
  return (
    <section
      className="py-28 px-5"
      style={{ background: '#0D0C0B' }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-end">
        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#7A6A5A] mb-5" style={mono}>
            The Vinsnooze Edit
          </p>
          <h2
            className="uppercase leading-none mb-8 text-[#F4EDE3]"
            style={{
              ...display,
              fontSize: '8vw',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 0.9,
            }}
          >
            Time folds in fabric
          </h2>
          <p className="text-[11px] text-[#7A6A5A] leading-relaxed max-w-sm mb-10" style={mono}>
            Every piece in our archive carries a history. We source, authenticate,
            and curate vintage clothing from the decades that defined fashion.
          </p>
          <a
            href="#magazine"
            className="text-[10px] tracking-[0.25em] uppercase text-[#B09A82] hover:text-[#F4EDE3] transition-colors"
            style={{ ...mono, borderBottom: '1px solid rgba(176,154,130,0.35)', paddingBottom: '2px' }}
          >
            Read More
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="aspect-[3/4]" style={{ background: 'rgba(244,237,227,0.04)' }} />
          <div className="aspect-[3/4] mt-10" style={{ background: 'rgba(244,237,227,0.07)' }} />
        </div>
      </div>
    </section>
  )
}
