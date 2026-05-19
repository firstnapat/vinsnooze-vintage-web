const categories = [
  { label: 'Tops', count: '34 pieces', bg: '#d4c5b0' },
  { label: 'Bottoms', count: '28 pieces', bg: '#b8c4b8' },
  { label: 'Outerwear', count: '19 pieces', bg: '#c4b0a8' },
  { label: 'Accessories', count: '41 pieces', bg: '#b8b0c4' },
]

const featured = [
  { name: "90s Levi's 501", era: '1993', price: '2,400', tag: 'NEW', bg: '#e8e0d4' },
  { name: 'Vintage Carhartt WIP', era: '1997', price: '3,200', tag: 'RARE', bg: '#d4dce8' },
  { name: 'Y2K Nike Track Jacket', era: '2001', price: '1,800', bg: '#e8d4d4' },
  { name: 'Stone Island Fleece', era: '1995', price: '4,500', tag: 'SOLD OUT', bg: '#d4e8d8' },
]

export default function Collections() {
  return (
    <section id="collections" className="px-6 py-24 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-black/40 mb-2">Curated Selection</p>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">Shop by Category</h2>
        </div>
        <a href="#shop" className="hidden md:block text-xs tracking-widest uppercase border-b border-black pb-1 hover:opacity-60 transition-opacity">
          View All
        </a>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-24">
        {categories.map((cat) => (
          <a
            key={cat.label}
            href={`#${cat.label.toLowerCase()}`}
            className="group relative aspect-[3/4] flex flex-col justify-end p-6 overflow-hidden"
            style={{ background: cat.bg }}
          >
            <div className="transition-transform duration-500 group-hover:-translate-y-2">
              <p className="text-xs tracking-[0.3em] uppercase text-black/50 mb-1">{cat.count}</p>
              <h3 className="text-xl font-black uppercase tracking-tight">{cat.label}</h3>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
          </a>
        ))}
      </div>

      {/* New arrivals */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-black/40 mb-2">Just Dropped</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">New Arrivals</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {featured.map((item) => (
          <a key={item.name} href="#shop" className="group block">
            {/* Image placeholder */}
            <div
              className="aspect-[3/4] mb-4 relative overflow-hidden flex items-center justify-center"
              style={{ background: item.bg }}
            >
              {item.tag && (
                <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase bg-black text-white px-2 py-1">
                  {item.tag}
                </span>
              )}
              <span className="text-xs tracking-widest uppercase text-black/20">{item.era}</span>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
            <p className="text-[10px] tracking-widest uppercase text-black/40 mb-1">{item.era}</p>
            <h4 className="text-sm font-bold uppercase tracking-tight mb-1 group-hover:opacity-60 transition-opacity">
              {item.name}
            </h4>
            <p className="text-sm">{item.price} THB</p>
          </a>
        ))}
      </div>
    </section>
  )
}
