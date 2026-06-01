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
          padding: 2.5rem 2rem 3rem;
          background: #080b0e;
          border-right: 1px solid #ffffff06;
          border-bottom: 1px solid #ffffff06;
          cursor: default;
          overflow: hidden;
          transition: background .4s;
          isolation: isolate;
        }
        .service-card:hover { background: #0b100d; }

        /* animated corner brackets */
        .sc-bracket {
          position: absolute;
          width: 18px; height: 18px;
          transition: all .4s;
          opacity: 0;
        }
        .sc-bracket-tl { top: 14px; left: 14px; border-top: 1.5px solid; border-left: 1.5px solid; }
        .sc-bracket-br { bottom: 14px; right: 14px; border-bottom: 1.5px solid; border-right: 1.5px solid; }
        .service-card:hover .sc-bracket { opacity: 1; width: 22px; height: 22px; }

        /* top scan line */
        .sc-scan {
          position: absolute; top: 0; left: 0; right: 0; height: 1.5px;
          transform: scaleX(0); transform-origin: left;
          transition: transform .45s cubic-bezier(.25,.46,.45,.94);
        }
        .service-card:hover .sc-scan { transform: scaleX(1); }

        /* bottom scan line */
        .sc-scan-b {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          transform: scaleX(0); transform-origin: right;
          transition: transform .45s cubic-bezier(.25,.46,.45,.94) .1s;
          opacity: .4;
        }
        .service-card:hover .sc-scan-b { transform: scaleX(1); }

        /* bg noise glow */
        .sc-glow {
          position: absolute; inset: 0; pointer-events: none;
          transition: opacity .5s;
        }

        /* index */
        .sc-index {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: .18em; text-transform: uppercase;
          margin-bottom: 1.75rem;
          display: flex; align-items: center; gap: 10px;
          transition: color .3s;
        }
        .sc-index-line {
          height: 1px; transition: all .4s;
        }

        /* icon */
        .sc-icon-wrap {
          width: 54px; height: 54px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 1.5rem;
          border: 1px solid;
          transition: all .35s;
          position: relative; overflow: hidden;
        }
        .sc-icon-wrap::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,.04), transparent);
        }
        .sc-icon {
          font-size: 1.35rem;
          transition: all .35s;
          position: relative; z-index: 1;
        }

        /* number watermark */
        .sc-watermark {
          position: absolute; top: .75rem; right: 1.25rem;
          font-family: 'Syne', sans-serif;
          font-size: 5rem; font-weight: 800;
          line-height: 1; letter-spacing: -.04em;
          pointer-events: none;
          transition: opacity .4s, transform .4s;
          opacity: 0; transform: translateY(8px);
          user-select: none;
        }
        .service-card:hover .sc-watermark { opacity: 1; transform: translateY(0); }

        /* title */
        .sc-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.2rem; font-weight: 800;
          margin: 0 0 .75rem; letter-spacing: -.01em;
          transition: color .3s;
        }

        /* desc */
        .sc-desc {
          font-size: .82rem; color: #555;
          line-height: 1.9;
          font-family: 'JetBrains Mono', monospace;
          transition: color .3s;
        }
        .service-card:hover .sc-desc { color: #666; }

        /* explore tag */
        .sc-tag {
          position: absolute; bottom: 1.25rem; left: 2rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: .12em; text-transform: uppercase;
          display: flex; align-items: center; gap: 6px;
          opacity: 0; transform: translateY(4px);
          transition: opacity .3s, transform .3s;
        }
        .sc-tag-line {
          width: 0; height: 1px;
          transition: width .4s .1s;
        }
        .service-card:hover .sc-tag { opacity: 1; transform: translateY(0); }
        .service-card:hover .sc-tag-line { width: 20px; }
      `}</style>

      <div
        className="service-card"
        onMouseEnter={() => onMouseEnter(id)}
        onMouseLeave={() => onMouseLeave()}
      >
        {/* scan lines */}
        <div className="sc-scan" style={{ background: `linear-gradient(to right, ${neonColor}, transparent)` }}/>
        <div className="sc-scan-b" style={{ background: `linear-gradient(to left, ${neonColor}, transparent)` }}/>

        {/* corner brackets */}
        <div className="sc-bracket sc-bracket-tl" style={{ borderColor: `${neonColor}66` }}/>
        <div className="sc-bracket sc-bracket-br" style={{ borderColor: `${neonColor}66` }}/>

        {/* bg glow */}
        <div className="sc-glow" style={{
          background: `radial-gradient(ellipse at 15% 40%, ${neonColor}08 0%, transparent 65%)`,
          opacity: isActive ? 1 : 0,
        }}/>

        {/* number watermark */}
        <div className="sc-watermark" style={{ color: `${neonColor}`, opacity: isActive ? .06 : 0 }}>
          {cardIndex}
        </div>

        {/* index */}
        <div className="sc-index" style={{ color: isActive ? neonColor : "#444" }}>
          <span className="sc-index-line" style={{ background: isActive ? neonColor : "#333", width: isActive ? 24 : 16 }}/>
          {cardIndex}
        </div>

        {/* icon */}
        <div className="sc-icon-wrap" style={{
          background: isActive ? `${neonColor}10` : "#0d0d0d",
          borderColor: isActive ? `${neonColor}44` : "#ffffff08",
          boxShadow: isActive ? `0 0 20px ${neonColor}18, inset 0 0 12px ${neonColor}06` : "none",
        }}>
          <FontAwesomeIcon icon={cardIcon} className="sc-icon"
            style={{ color: isActive ? neonColor : "#2a2a2a",
              filter: isActive ? `drop-shadow(0 0 6px ${neonColor}88)` : "none" }}/>
        </div>

        {/* title */}
        <h3 className="sc-title" style={{ color: isActive ? "#fff" : "#777" }}>
          {cardTitle}
        </h3>

        {/* desc */}
        <p className="sc-desc">{cardContent}</p>

        {/* explore tag */}
        <span className="sc-tag" style={{ color: neonColor }}>
          <span className="sc-tag-line" style={{ background: neonColor }}/>
          explore
        </span>
      </div>
    </>
  )
}