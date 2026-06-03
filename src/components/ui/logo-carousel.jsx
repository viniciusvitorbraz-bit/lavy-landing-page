import './logo-carousel.css'

export const AnimatedCarousel = ({ items = [] }) => {
  const doubled = [...items, ...items]

  return (
    <div className="stats-ticker">
      <div className="stats-ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="stats-ticker-item">
            <span className="stats-value">{item.value}</span>
            <span className="stats-label">{item.label}</span>
            <span className="stats-dot" aria-hidden="true">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
