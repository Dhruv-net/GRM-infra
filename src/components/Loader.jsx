import React from 'react'
import '../styles/loader.css'

// Full-screen intro loader. Plays the video for ~2.5s, then fades out and
// reveals the app. Shows only once per page load (not on route changes).
export default function Loader({ onFinish, duration = 2500, speed = 1.5 }) {
  const [leaving, setLeaving] = React.useState(false)
  const videoRef = React.useRef(null)

  React.useEffect(() => {
    // Lock scroll while the loader is on screen.
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const v = videoRef.current
    if (v) {
      // Play at a steady, natural pace (1.5x) rather than cramming the
      // whole clip into `duration`. The loader fades out after `duration`
      // regardless of how far the clip has played.
      const setRate = () => {
        v.playbackRate = speed
      }
      if (v.readyState >= 1) setRate()
      else v.addEventListener('loadedmetadata', setRate, { once: true })
      v.play().catch(() => {}) // ignore autoplay rejections (muted should allow it)
    }

    // Start the fade slightly before fully removing the loader.
    const fadeTimer = setTimeout(() => setLeaving(true), duration)
    const doneTimer = setTimeout(() => {
      document.body.style.overflow = prevOverflow
      onFinish?.()
    }, duration + 600) // 600ms matches the CSS fade

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
      document.body.style.overflow = prevOverflow
    }
  }, [duration, onFinish])

  return (
    <div className={`app-loader${leaving ? ' app-loader--leaving' : ''}`}>
      <video
        ref={videoRef}
        className="app-loader__video"
        src="/loader.mp4"
        muted
        playsInline
        autoPlay
        preload="auto"
      />
    </div>
  )
}
