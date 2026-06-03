import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Solutions from './pages/Solutions'
import Projects from './pages/Projects'
import GlobalImpact from './pages/GlobalImpact'
import Loader from './components/Loader'
import './index.css'

// On navigation: scroll to a hash target if present, otherwise to the top.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  React.useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        else window.scrollTo(0, 0)
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function App() {
  // Show the video loader only when the app boots (hard refresh / first open),
  // NOT on client-side route changes — the app stays mounted between pages.
  const [loading, setLoading] = React.useState(true)

  return (
    <BrowserRouter>
      {loading && <Loader duration={2000} onFinish={() => setLoading(false)} />}
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/global-impact" element={<GlobalImpact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
