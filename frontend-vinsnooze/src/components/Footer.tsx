import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer className="bg-[#faf9f7] border-t border-black/10">
      {/* Newsletter */}
      <div className="border-b border-black/10 py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-black/40 mb-4">Get on the list</p>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Early Access to Drops
          </h3>
          <p className="text-sm text-black/50 mb-10">
            Sign up for early access to new vintage arrivals, exclusive pieces, and archive releases.
          </p>
          {subscribed ? (
            <p className="text-xs tracking-widest uppercase">You're on the list.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-black text-sm px-4 py-3 bg-transparent outline-none placeholder:text-black/30 tracking-wide"
                required
              />
              <button
                type="submit"
                className="border border-l-0 border-black bg-black text-[#faf9f7] text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-black/80 transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Footer links */}
      <div className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <p className="text-xs tracking-widest uppercase font-bold mb-4">Shop</p>
          {['New Arrivals', 'Tops', 'Bottoms', 'Outerwear', 'Accessories'].map((l) => (
            <a key={l} href="#" className="block text-xs text-black/50 hover:text-black transition-colors mb-2 tracking-wide">
              {l}
            </a>
          ))}
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase font-bold mb-4">Info</p>
          {['About Vinsnooze', 'Magazine', 'Sizing Guide', 'FAQ'].map((l) => (
            <a key={l} href="#" className="block text-xs text-black/50 hover:text-black transition-colors mb-2 tracking-wide">
              {l}
            </a>
          ))}
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase font-bold mb-4">Support</p>
          {['Shipping & Returns', 'Authentication', 'Contact Us'].map((l) => (
            <a key={l} href="#" className="block text-xs text-black/50 hover:text-black transition-colors mb-2 tracking-wide">
              {l}
            </a>
          ))}
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase font-bold mb-4">Follow</p>
          {['Instagram', 'TikTok', 'LINE OA'].map((l) => (
            <a key={l} href="#" className="block text-xs text-black/50 hover:text-black transition-colors mb-2 tracking-wide">
              {l}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-black/10 py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] tracking-widest uppercase text-black/30">
        <span>© 2026 Vinsnooze Vintage</span>
        <span>All prices include customs delivery · Free returns within 14 days</span>
      </div>
    </footer>
  )
}
