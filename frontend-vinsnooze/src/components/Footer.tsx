import { useState } from 'react'

const mono = { fontFamily: "'Space Grotesk', Helvetica, sans-serif" }
const display = { fontFamily: "'Space Grotesk', Helvetica, sans-serif" }

const links = [
  'FAQ',
  'Login',
  'The V-Mail',
  'Membership',
  'Our Fabrics',
  'Stores',
  'Referral Program',
  'Gift Cards',
  'Sizing Guide',
  'Return Policy',
  'Jobs',
  'Terms of Service',
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer style={{ background: '#0D0C0B', borderTop: '1px solid rgba(244,237,227,0.08)' }}>
      {/* Newsletter */}
      <div className="py-20 px-8" style={{ borderBottom: '1px solid rgba(244,237,227,0.08)' }}>
        <div className="max-w-lg mx-auto text-center">
          <p className="text-[13px] tracking-[0.35em] uppercase text-[#7A6A5A] mb-4" style={mono}>
            Get on the list
          </p>
          <h3
            className="uppercase leading-none mb-6 text-[#F4EDE3]"
            style={{ ...display, fontSize: '6vw', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            Early Access to Drops
          </h3>
          <p className="text-[15px] text-[#7A6A5A] mb-10 leading-relaxed" style={mono}>
            New vintage arrivals, exclusive pieces, archive releases.
          </p>
          {subscribed ? (
            <p className="text-[14px] tracking-[0.3em] uppercase text-[#B09A82]" style={mono}>
              You're on the list.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-transparent outline-none text-[#F4EDE3] tracking-wide"
                style={{ ...mono, fontSize: '14px', border: '1px solid rgba(244,237,227,0.15)' }}
                required
              />
              <button
                type="submit"
                className="tracking-[0.25em] uppercase bg-[#F4EDE3] text-[#0D0C0B] px-6 py-3 hover:bg-[#D4C4A8] transition-colors"
                style={{ ...mono, fontSize: '13px' }}
              >
                Join
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Flat 2-col link grid */}
      <div className="px-8 py-14">
        <ul
          className="grid gap-x-8 gap-y-4"
          style={{ gridTemplateColumns: 'repeat(2, minmax(0, max-content))' }}
        >
          {links.map((l) => (
            <li key={l}>
              <a
                href="#"
                className="text-[#F4EDE3] hover:opacity-60 transition-opacity"
                style={{ ...mono, fontSize: '16px', letterSpacing: '0.02em' }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom bar */}
      <div
        className="py-5 px-8 flex flex-col md:flex-row justify-between items-center gap-2 text-[12px] tracking-[0.25em] uppercase"
        style={{ ...mono, color: 'rgba(244,237,227,0.25)', borderTop: '1px solid rgba(244,237,227,0.06)' }}
      >
        <span>© 2026 Vinsnooze Vintage</span>
        <span>Free returns within 14 days</span>
      </div>
    </footer>
  )
}
