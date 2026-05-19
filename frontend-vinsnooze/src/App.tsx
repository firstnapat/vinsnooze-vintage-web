import Nav from './components/Nav'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Editorial from './components/Editorial'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div
        className="text-center py-2.5 text-[10px] tracking-[0.25em] uppercase"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60, background: '#14100C', color: '#F4EDE3', fontFamily: "'Space Grotesk', Helvetica, sans-serif", fontWeight: 700 }}
      >
        Free shipping orders over 3,000 THB &mdash; Archive Drop Incoming
      </div>
      <Nav />
      <Hero />
      <Collections />
      <Editorial />
      <Footer />
    </>
  )
}

export default App
