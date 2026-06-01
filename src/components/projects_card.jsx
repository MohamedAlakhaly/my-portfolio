"use client"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const NEON = "#39ff14"

export default function ProjectsCard({
  project_name,
  project_img,
  project_details,
  category,
  year,
  tech = [],
  github = "",
  index = "01",
  total = "01",
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .pc-wrap {
          position: relative; overflow: hidden; cursor: pointer;
          aspect-ratio: 4/3; background: #080b0e;
        }

        /* image */
        .pc-wrap img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform .7s cubic-bezier(.25,.46,.45,.94), filter .5s;
          filter: brightness(.55) saturate(.7);
        }
        .pc-wrap:hover img {
          transform: scale(1.1);
          filter: brightness(.22) saturate(1) blur(5px);
        }

        /* scan lines */
        .pc-scan-t {
          position: absolute; top: 0; left: 0; right: 0; height: 1.5px;
          background: linear-gradient(to right, ${NEON}, transparent);
          transform: scaleX(0); transform-origin: left;
          transition: transform .45s cubic-bezier(.25,.46,.45,.94); z-index: 4;
        }
        .pc-wrap:hover .pc-scan-t { transform: scaleX(1); }
        .pc-scan-b {
          position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to left, ${NEON}44, transparent);
          transform: scaleX(0); transform-origin: right;
          transition: transform .45s .1s; z-index: 4;
        }
        .pc-wrap:hover .pc-scan-b { transform: scaleX(1); }

        /* corner brackets */
        .pc-bracket {
          position: absolute; width: 14px; height: 14px;
          opacity: 0; transition: all .35s; z-index: 5;
        }
        .pc-bracket-tl { top: 10px; left: 10px; border-top: 1.5px solid ${NEON}77; border-left: 1.5px solid ${NEON}77; }
        .pc-bracket-br { bottom: 10px; right: 10px; border-bottom: 1.5px solid ${NEON}77; border-right: 1.5px solid ${NEON}77; }
        .pc-wrap:hover .pc-bracket { opacity: 1; width: 18px; height: 18px; }

        /* neon glow */
        .pc-glow {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse at 30% 50%, ${NEON}0a, transparent 60%);
          opacity: 0; transition: opacity .4s;
        }
        .pc-wrap:hover .pc-glow { opacity: 1; }

        /* number watermark */
        .pc-watermark {
          position: absolute; bottom: .5rem; right: 1rem;
          font-family: 'Syne', sans-serif; font-size: 4.5rem; font-weight: 800;
          color: ${NEON}; opacity: .04; line-height: 1;
          pointer-events: none; transition: opacity .4s;
          user-select: none; z-index: 1;
        }
        .pc-wrap:hover .pc-watermark { opacity: .09; }

        /* bottom strip — always visible */
        .pc-strip {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 1.25rem 1.5rem;
          background: linear-gradient(to top, rgba(5,7,9,.95) 0%, transparent 100%);
          transition: opacity .3s, transform .3s; z-index: 3;
        }
        .pc-wrap:hover .pc-strip { opacity: 0; transform: translateY(6px); }
        .pc-strip-cat {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          letter-spacing: .12em; text-transform: uppercase; color: ${NEON}; margin-bottom: 5px;
        }
        .pc-strip-title { font-size: 1.05rem; font-weight: 700; color: #fff; }

        /* hover overlay */
        .pc-overlay {
          position: absolute; inset: 0;
          display: flex; flex-direction: column; justify-content: center; align-items: flex-start;
          padding: 2rem; opacity: 0; transition: opacity .4s; z-index: 4;
        }
        .pc-wrap:hover .pc-overlay { opacity: 1; }

        .pc-ov-num {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          color: ${NEON}55; margin-bottom: .75rem; letter-spacing: .1em;
        }
        .pc-ov-title {
          font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800;
          color: #fff; margin-bottom: .75rem; line-height: 1.2;
        }
        .pc-ov-tech { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 1.5rem; }
        .pc-ov-tag {
          font-family: 'JetBrains Mono', monospace; font-size: 10px; padding: 3px 9px;
          border-radius: 3px; border: 1px solid ${NEON}44; color: ${NEON}; background: ${NEON}0d;
        }
        .pc-ov-actions { display: flex; gap: .5rem; flex-wrap: wrap; }
        .pc-btn {
          padding: 8px 18px; border-radius: 5px; font-size: 11px; font-weight: 700;
          letter-spacing: .06em; text-transform: uppercase; text-decoration: none;
          font-family: 'JetBrains Mono', monospace; transition: all .2s;
          display: flex; align-items: center; gap: 6px; border: none; cursor: pointer;
        }
        .pc-btn.primary { background: ${NEON}; color: #050709; }
        .pc-btn.primary:hover { box-shadow: 0 0 18px ${NEON}99; transform: translateY(-1px); }
        .pc-btn.ghost { background: rgba(255,255,255,.06); color: #999; border: 1px solid rgba(255,255,255,.12); }
        .pc-btn.ghost:hover { border-color: ${NEON}44; color: ${NEON}; }
      `}</style>

      <div
        className="pc-wrap"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="pc-scan-t"/><div className="pc-scan-b"/>
        <div className="pc-bracket pc-bracket-tl"/><div className="pc-bracket pc-bracket-br"/>
        <div className="pc-glow"/>
        <div className="pc-watermark">{index}</div>

        <img src={project_img || "/placeholder.svg"} alt={project_name}/>

        {/* bottom strip */}
        <div className="pc-strip">
          <p className="pc-strip-cat">{category} {year ? `· ${year}` : ""}</p>
          <h3 className="pc-strip-title">{project_name}</h3>
        </div>

        {/* hover overlay */}
        <div className="pc-overlay">
          <span className="pc-ov-num">{index} / {total}</span>
          <h3 className="pc-ov-title">{project_name}</h3>
          {tech.length > 0 && (
            <div className="pc-ov-tech">
              {tech.map(t => <span key={t} className="pc-ov-tag">{t}</span>)}
            </div>
          )}
          <div className="pc-ov-actions">
            <a href={project_details} className="pc-btn primary">
              Details <FontAwesomeIcon icon={faArrowRight} style={{fontSize:10}}/>
            </a>
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="pc-btn ghost">
                <FontAwesomeIcon icon={faGithub} style={{fontSize:11}}/>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  )
}