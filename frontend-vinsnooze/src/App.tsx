import { useEffect, useState } from 'react'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((d: { message: string }) => setMessage(d.message))
      .catch(() => setMessage('vinsnooze store (offline)'))
  }, [])

  return (
    <main className="home">
      <h1>{message || 'loading…'}</h1>
    </main>
  )
}

export default App
