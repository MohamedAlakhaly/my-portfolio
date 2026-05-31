"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ServicesCard({
  cardIcon,
  cardTitle,
  cardContent,
  neonColor = "#39ff14",
  cardIndex = "01",
  isActive,
  onMouseEnter,
  onMouseLeave,
  id,
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');

        .service-card {
          position: relative;
          padding: 2.5rem 2rem;
          background: #080b0e;
          border-right: 1.5px solid #ffffff08;
          border-bottom: 1.5px solid #ffffff08;
          cursor: default;
          transition: background .3s;
          overflow: hidden;
        }
        .service-card:hover {
          background: #0c1209;
        }
        .service-card::before {
          content: '';
          position: absolute; inset: 0;
          opacity: 0;
          transition: opacity .4s;
        }
        .service-card:hover::before {
          opacity: 1;
        }
        .card-index {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: .15em;
          margin-bottom: 1.5rem;
          display: flex; align-items: center; gap: 8px;
          transition: color .3s;
        }
        .card-index-line {
          width: 20px; height: 1px; transition: all .3s;
        }
        .card-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.5rem;
          border: 1px solid;
          transition: all .3s;
        }
        .card-icon {
          font-size: 1.3rem;
          transition: all .3s;
        }
        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.25rem; font-weight: 800;
          color: #fff; margin: 0 0 .75rem;
          letter-spacing: -.01em;
          transition: color .3s;
        }
        .card-desc {
          font-size: .875rem; color: #444;
          line-height: 1.85;
          font-family: 'JetBrains Mono', monospace;
          transition: color .3s;
        }
        .service-card:hover .card-desc { color: #666; }
        .card-corner {
          position: absolute; bottom: 1.25rem; right: 1.25rem;
          opacity: 0; transition: opacity .3s, transform .3s;
          transform: translateX(4px);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: .1em;
        }
        .service-card:hover .card-corner {
          opacity: 1; transform: translateX(0);
        }
        .scan-line {
          position: absolute; top: 0; left: 0; right: 0;
          height: 1px;
          transform: scaleX(0); transform-origin: left;
          transition: transform .4s ease;
        }
        .service-card:hover .scan-line {
          transform: scaleX(1);
        }
      `}</style>

      <div
        className="service-card"
        onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={() => onMouseLeave()}
      >
        {/* top scan line */}
        <div
          className="scan-line"
          style={{ background: `linear-gradient(to right, ${neonColor}, transparent)` }}
        />

        {/* bg glow on hover */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(ellipse at 20% 50%, ${neonColor}06 0%, transparent 60%)`,
          opacity: isActive ? 1 : 0, transition: "opacity .4s",
        }} />

        {/* index */}
        <div className="card-index" style={{ color: isActive ? neonColor : "#2a2a2a" }}>
          <span
            className="card-index-line"
            style={{ background: isActive ? neonColor : "#2a2a2a", width: isActive ? 28 : 20 }}
          />
          {cardIndex}
        </div>

        {/* icon */}
        <div
          className="card-icon-wrap"
          style={{
            background: isActive ? `${neonColor}12` : "#0f0f0f",
            borderColor: isActive ? `${neonColor}44` : "#ffffff0a",
            boxShadow: isActive ? `0 0 16px ${neonColor}22` : "none",
          }}
        >
          <FontAwesomeIcon
            icon={cardIcon}
            className="card-icon"
            style={{ color: isActive ? neonColor : "#333" }}
          />
        </div>

        {/* title */}
        <h3
          className="card-title"
          style={{ color: isActive ? "#fff" : "#888" }}
        >
          {cardTitle}
        </h3>

        {/* desc */}
        <p className="card-desc">{cardContent}</p>

        {/* bottom-right arrow */}
        <span
          className="card-corner"
          style={{ color: neonColor }}
        >
          explore →
        </span>
      </div>
    </>
  )
}