import { useRef } from 'react'
import './ProblemCards.css'

function ProblemCard({ icon: Icon, title, desc }) {
  const cardRef = useRef(null)
  const glowRef = useRef(null)

  const onMouseMove = (e) => {
    const card = cardRef.current
    const glow = glowRef.current
    if (!card || !glow) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    glow.style.left = `${x}px`
    glow.style.top = `${y}px`
  }

  return (
    <div
      ref={cardRef}
      className="pc-card"
      onMouseMove={onMouseMove}
    >
      <div ref={glowRef} className="pc-glow" />
      <div className="pc-icon">
        <Icon size={18} />
      </div>
      <h3 className="pc-title">{title}</h3>
      <p className="pc-desc">{desc}</p>
    </div>
  )
}

export default function ProblemCards({ cards }) {
  return (
    <div className="pc-grid">
      {cards.map((card, i) => (
        <ProblemCard key={i} {...card} />
      ))}
    </div>
  )
}
