import React from 'react'
import '../styles/loader.css'

// Full-screen intro loader. Plays the video for ~3s, then fades out and
// reveals the app. Shows only once per page load (not on route changes).
export default function Loader({ onFinish, duration = 3000 }) {
  const [leaving, setLeaving] = React.useState(false)
  const videoRef = React.useRef(null)

  React.useEffect(() => {
    // Lock scroll while the loader is on screen.
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const v = videoRef.current
    if (v) {
      // Speed playback so the FULL animation finishes within `duration`.
      // e.g. an 8s clip shown for 3s -> rate ~2.67x.
      const setRate = () => {
        if (v.duration && isFinite(v.duration)) {
          v.playbackRate = Math.max(1, v.duration / (duration / 1000))
        }
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
