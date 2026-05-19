export default function Editorial() {
  return (
    <section className="bg-black text-[#faf9f7] py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-6">The Vinsnooze Edit</p>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8">
            FOR THOSE WHO DRESS WITH MEMORY.
          </h2>
          <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-10">
            Every piece in our archive carries a history. We source, authenticate,
            and curate vintage clothing from the decades that defined fashion.
          </p>
          <a
            href="#magazine"
            className="text-xs tracking-[0.3em] uppercase border-b border-white/40 pb-1 hover:border-white transition-colors"
          >
            Read More
          </a>
        </div>

        {/* Visual side — placeholder */}
        <div className="grid grid-cols-2 gap-3">
          <div className="aspect-[3/4] bg-white/5" />
          <div className="aspect-[3/4] bg-white/10 mt-12" />
        </div>
      </div>
    </section>
  )
}
