"use client"

const NEON = "#39ff14"

export default function SkillsCard({ skills, skillsLogo }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');
        .skill-cell {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 10px; padding: 1.25rem 1rem;
          background: #080b0e;
          border-right: 1px solid #ffffff06;
          border-bottom: 1px solid #ffffff06;
          cursor: default; transition: all .25s;
          position: relative; overflow: hidden;
        }
        .skill-cell::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, ${NEON}, transparent);
          transform: scaleX(0); transform-origin: left;
          transition: transform .35s;
        }
        .skill-cell:hover { background: ${NEON}08; }
        .skill-cell:hover::before { transform: scaleX(1); }
        .skill-cell:hover .skill-img { filter: drop-shadow(0 0 6px ${NEON}88); transform: scale(1.1); }
        .skill-cell:hover .skill-name { color: ${NEON}; }

        .skill-img {
          width: 36px; height: 36px; object-fit: contain;
          transition: all .3s;
        }
        .skill-name {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: .08em; text-transform: uppercase;
          color: #333; transition: color .25s; text-align: center;
        }
      `}</style>

      <div className="skill-cell">
        <img src={skillsLogo} alt={skills} className="skill-img" />
        <span className="skill-name">{skills}</span>
      </div>
    </>
  )
}