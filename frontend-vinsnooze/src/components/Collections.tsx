const mono = { fontFamily: "'Space Grotesk', Helvetica, sans-serif" }
const display = { fontFamily: "'Space Grotesk', Helvetica, sans-serif" }

const featured = [
  { name: "90s Levi's 501", era: '1993', price: '2,400', tag: 'NEW', bg: '#D6CCBF' },
  { name: 'Vintage Carhartt WIP', era: '1997', price: '3,200', tag: 'RARE', bg: '#C4CACC' },
  { name: 'Y2K Nike Track Jacket', era: '2001', price: '1,800', bg: '#CEC4BE' },
  { name: 'Stone Island Fleece', era: '1995', price: '4,500', tag: 'SOLD OUT', bg: '#C2CBBD' },
]

const categories = [
  { label: 'Tops', count: '34 pieces', bg: '#E2D9CE' },
  { label: 'Bottoms', count: '28 pieces', bg: '#D4DCE0' },
  { label: 'Outerwear', count: '19 pieces', bg: '#DDD4CC' },
  { label: 'Accessories', count: '41 pieces', bg: '#D2CEDC' },
]

export default function Collections() {
  return (
    <section id="collections" style={{ background: '#F4EDE3' }}>
      {/* NEW ARRIVALS — oversized heading */}
      <div className="px-5 pt-10 pb-0 overflow-hidden">
        <h2
          className="uppercase leading-none"
          style={{
            ...display,
            fontSize: '13.5vw',
            fontWeight: 900,
            color: '#111',
            letterSpacing: '-0.02em',
            lineHeight: 0.88,
          }}
        >
          New Arrivals
        </h2>
      </div>

      {/* Product grid */}
      <div className="px-5 pt-10 pb-20 grid grid-cols-2 md:grid-cols-4 gap-3">
        {featured.map((item) => (
          <a key={item.name} href="#shop" className="group block">
            <div
              className="aspect-[3/4] mb-3 relative overflow-hidden"
              style={{ background: item.bg }}
            >
              {item.tag && (
                <span
                  className="absolute top-3 left-3 text-[9px] tracking-widest uppercase bg-[#111] text-white px-2 py-1"
                  style={mono}
                >
                  {item.tag}
                </span>
              )}
              <span
                className="absolute bottom-3 right-3 text-[9px] tracking-widest uppercase text-[#111]/25"
                style={mono}
              >
                {item.era}
              </span>
            </div>
            <p className="text-[9px] tracking-widest uppercase text-[#888] mb-1" style={mono}>{item.era}</p>
            <h4
              className="text-[11px] uppercase tracking-wide mb-1 text-[#111] group-hover:text-[#555] transition-colors"
              style={mono}
            >
              {item.name}
            </h4>
            <p className="text-[11px] text-[#111]" style={mono}>{item.price} THB</p>
          </a>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(0,0,0,0.1)', margin: '0 20px' }} />

      {/* SHOP BY CATEGORY */}
      <div className="px-5 pt-16 pb-0 overflow-hidden flex items-end justify-between">
        <h2
          className="uppercase leading-none"
          style={{
            ...display,
            fontSize: '10vw',
            fontWeight: 900,
            color: '#111',
            letterSpacing: '-0.02em',
            lineHeight: 0.9,
          }}
        >
          By Category
        </h2>
        <a
          href="#shop"
          className="hidden md:block mb-2 text-[10px] tracking-[0.25em] uppercase text-[#888] hover:text-[#111] transition-colors"
          style={{ ...mono, borderBottom: '1px solid rgba(0,0,0,0.2)', paddingBottom: '2px' }}
        >
          View All
        </a>
      </div>

      <div className="px-5 pt-8 pb-24 grid grid-cols-2 md:grid-cols-4 gap-3">
        {categories.map((cat) => (
          <a
            key={cat.label}
            href={`#${cat.label.toLowerCase()}`}
            className="group relative aspect-[3/4] flex flex-col justify-end p-5 overflow-hidden"
            style={{ background: cat.bg }}
          >
            <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#111]/45 mb-1.5" style={mono}>{cat.count}</p>
              <h3 className="text-lg font-bold uppercase tracking-tight text-[#111]" style={mono}>{cat.label}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
