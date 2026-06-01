import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// Map the original static filenames to SPA routes.
const ROUTE_MAP = {
  'index.html': '/',
  'about.html': '/about',
  'solutions.html': '/solutions',
  'projects.html': '/projects',
  'global-impact.html': '/global-impact',
}

/*
 * Re-implements the behaviour of the original shared.js (scroll reveal,
 * animated counters, card tilt) plus the projects filter, and rewrites the
 * old multi-page anchor links to client-side navigation. Runs once per page
 * mount against the given container ref.
 */
export function usePageEffects(ref) {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const root = ref.current
    if (!root) return

    // --- Scroll reveal (also drives .bar-row and .step ::before animations) ---
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            revealIO.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    root.querySelectorAll('.reveal:not(.is-in), .bar-row').forEach((el) => revealIO.observe(el))

    // --- Animated counters ---
    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const el = e.target
          const target = parseFloat(el.dataset.count)
          const decimals = parseInt(el.dataset.decimals || '0', 10)
          const dur = 1600
          const t0 = performance.now()
          const step = (now) => {
            const t = Math.min(1, (now - t0) / dur)
            const eased = 1 - Math.pow(1 - t, 3)
            el.textContent = (target * eased).toFixed(decimals)
            if (t < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          countIO.unobserve(el)
        })
      },
      { threshold: 0.4 }
    )
    root.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el))

    // --- Card tilt ---
    const tiltCleanups = []
    root.querySelectorAll('.card-tilt').forEach((card) => {
      const max = 5
      const onMove = (e) => {
        const r = card.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        card.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(0)`
      }
      const onLeave = () => { card.style.transform = '' }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      tiltCleanups.push(() => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      })
    })

    // --- Projects filter (only present on the projects page) ---
    const chips = root.querySelectorAll('.filterbar .chip')
    const cards = root.querySelectorAll('.pcard')
    const counter = root.querySelector('#visibleCount')
    const onChip = (c) => {
      chips.forEach((x) => x.classList.remove('active'))
      c.classList.add('active')
      const f = c.dataset.filter
      let n = 0
      cards.forEach((card) => {
        const show = f === 'all' || card.dataset.cat === f
        card.style.display = show ? '' : 'none'
        if (show) n++
      })
      // Featured card highlights a BESS project — hide it unless the filter includes BESS
      const featured = root.querySelector('.featured')
      if (featured) featured.style.display = (f === 'all' || f === 'bess') ? '' : 'none'
      if (counter) counter.textContent = n
    }
    const chipHandlers = []
    chips.forEach((c) => {
      const h = () => onChip(c)
      c.addEventListener('click', h)
      chipHandlers.push(() => c.removeEventListener('click', h))
    })

    // --- Intercept legacy .html links → client-side navigation ---
    const onClick = (e) => {
      const a = e.target.closest('a')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href) return
      const [file, hash] = href.split('#')
      if (file in ROUTE_MAP) {
        e.preventDefault()
        const to = ROUTE_MAP[file] + (hash ? '#' + hash : '')
        navigate(to)
      }
    }
    root.addEventListener('click', onClick)

    return () => {
      revealIO.disconnect()
      countIO.disconnect()
      tiltCleanups.forEach((fn) => fn())
      chipHandlers.forEach((fn) => fn())
      root.removeEventListener('click', onClick)
    }
  }, [ref, navigate, location.pathname])
}
