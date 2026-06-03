import { useRef, useEffect, useState } from 'react'
import videoSrc from '../assets/Squares_turn_into_blue_squares_202605040317 (2).mp4'
import './ScrollVideo.css'

export default function ScrollVideo() {
  const sectionRef  = useRef(null)
  const videoRef    = useRef(null)
  const lockedRef   = useRef(false)
  const touchStartY = useRef(0)
  const [hintVisible, setHintVisible] = useState(true)

  useEffect(() => {
    const section = sectionRef.current
    const video   = videoRef.current
    if (!section || !video) return

    const SCROLL_ZONE = window.innerHeight * 3

    const lock = () => {
      lockedRef.current = true
      document.body.style.overflow = 'hidden'
    }

    const unlock = () => {
      lockedRef.current = false
      document.body.style.overflow = ''
    }

    const advance = (delta) => {
      if (!video.duration) return
      const step = (Math.max(-40, Math.min(40, delta)) / SCROLL_ZONE) * video.duration
      video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + step))

      if (delta > 0 && video.currentTime >= video.duration - 0.05) {
        video.currentTime = video.duration
        unlock()
      } else if (delta < 0 && video.currentTime <= 0.05) {
        video.currentTime = 0
        unlock()
      }
    }

    const isDominant = () => {
      const r = section.getBoundingClientRect()
      const visible = Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0)
      return visible / window.innerHeight >= 0.75
    }

    const onWheel = (e) => {
      if (lockedRef.current) {
        e.preventDefault()
        setHintVisible(false)
        advance(e.deltaY)
        return
      }
      if (!isDominant() || !video.duration) return
      const atEnd   = video.currentTime >= video.duration - 0.05
      const atStart = video.currentTime <= 0.05
      if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
        e.preventDefault()
        setHintVisible(false)
        lock()
        advance(e.deltaY)
      }
    }

    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY
    }

    const onTouchMove = (e) => {
      const delta = (touchStartY.current - e.touches[0].clientY) * 2
      touchStartY.current = e.touches[0].clientY
      if (lockedRef.current) {
        e.preventDefault()
        advance(delta)
        return
      }
      if (!isDominant() || !video.duration) return
      const atEnd   = video.currentTime >= video.duration - 0.05
      const atStart = video.currentTime <= 0.05
      if ((delta > 0 && !atEnd) || (delta < 0 && !atStart)) {
        e.preventDefault()
        lock()
        advance(delta)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) { unlock(); return }
        if (entry.boundingClientRect.top > 0) {
          video.currentTime = 0
        } else {
          if (video.duration) video.currentTime = video.duration
        }
        setHintVisible(true)
      },
      { threshold: 0.5 }
    )

    observer.observe(section)
    window.addEventListener('wheel',      onWheel,      { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true  })
    window.addEventListener('touchmove',  onTouchMove,  { passive: false })

    return () => {
      observer.disconnect()
      window.removeEventListener('wheel',      onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove',  onTouchMove)
      unlock()
    }
  }, [])

  return (
    <section ref={sectionRef} id="section-7" className="sv-section">
      <div className="sv-card">
        <video
          ref={videoRef}
          src={videoSrc}
          preload="auto"
          muted
          playsInline
          className="sv-video"
        />
      </div>

      <div className={`sv-hint ${hintVisible ? '' : 'sv-hint--hidden'}`}>
        <span>scroll</span>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M4 9l4 4 4-4"
            stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
