"use client"

import { useState } from "react"
import Navbar from "../components/navbar"
import ServicesCard from "../components/services_card"
import {
  faCode, faMobileScreenButton, faCamera,
  faPalette, faClapperboard, faGlobe,
} from "@fortawesome/free-solid-svg-icons"

const NEON = "#39ff14"

const services = [
  {
    id: 1,
    service: "Front-End",
    serviceIcon: faCode,
    serviceDescription: "Crafting modern, responsive interfaces using HTML, CSS, JavaScript and React. I bring designs to life with clean, user-friendly web experiences.",
    neon: "#39ff14",
    index: "01",
  },
  {
    id: 2,
    service: "Back-End",
    serviceIcon: faGlobe,
    serviceDescription: "Building robust, scalable server-side applications. APIs, databases, and all the logic that powers dynamic web platforms.",
    neon: "#00eaff",
    index: "02",
  },
  {
    id: 3,
    service: "Mobile Dev",
    serviceIcon: faMobileScreenButton,
    serviceDescription: "Developing sleek, high-performance mobile apps for Android and iOS using Flutter — smooth, fast, and cross-platform.",
    neon: "#a78bfa",
    index: "03",
  },
  {
    id: 4,
    service: "Video Editing",
    serviceIcon: faClapperboard,
    serviceDescription: "Editing dynamic and engaging videos using professional tools. Storytelling through pacing, effects, and smooth transitions.",
    neon: "#f97316",
    index: "04",
  },
  {
    id: 5,
    service: "Graphic Design",
    serviceIcon: faPalette,
    serviceDescription: "Designing visually compelling graphics, logos, and layouts. Creativity and functionality fused into standout visual solutions.",
    neon: "#f472b6",
    index: "05",
  },
  {
    id: 6,
    service: "Photography",
    serviceIcon: faCamera,
    serviceDescription: "Capturing moments with a creative eye and precision. Lighting, composition, and editing to produce high-quality images.",
    neon: "#fbbf24",
    index: "06",
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(null)

  return (
    <div style={{ minHeight: "100vh", background: "#050709", position: "relative", overflow: "hidden", fontFamily: "'Syne', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .page-grid {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background-image: linear-gradient(${NEON}07 1px, transparent 1px),
                            linear-gradient(90deg, ${NEON}07 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .glow-1 {
          position: absolute; top: 10%; left: -10%;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, ${NEON}12 0%, transparent 70%);
          animation: pulseGlow 5s ease-in-out infinite;
          pointer-events: none;
        }
        .glow-2 {
          position: absolute; bottom: 5%; right: -8%;
          width: 350px; height: 350px; border-radius: 50%;
          background: radial-gradient(circle, #00eaff10 0%, transparent 70%);
          animation: pulseGlow 5s ease-in-out infinite 2.5s;
          pointer-events: none;
        }
        @keyframes pulseGlow {
          0%,100% { opacity: .5; transform: scale(1); }
          50%      { opacity: 1; transform: scale(1.08); }
        }

        /* section header */
        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: .18em; text-transform: uppercase;
          color: ${NEON}; margin-bottom: 1rem; display: flex; align-items: center; gap: 8px;
        }
        .section-label::before {
          content: ''; display: inline-block;
          width: 28px; height: 1px; background: ${NEON};
        }
        .section-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800; color: #fff; margin: 0 0 .5rem;
          letter-spacing: -.02em; line-height: 1.1;
        }
        .section-title span {
          -webkit-text-stroke: 1.5px ${NEON};
          color: transparent;
          text-shadow: 0 0 28px ${NEON}44;
        }
        .section-sub {
          font-size: .95rem; color: #444; max-width: 480px; line-height: 1.8;
          font-family: 'JetBrains Mono', monospace;
        }

        /* cards grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5px;
          margin: 0 0 6rem;
          border: 1.5px solid #ffffff08;
          border-radius: 12px;
          overflow: hidden;
        }

        /* CTA */
        .cta-box {
          position: relative;
          border: 1px solid ${NEON}22;
          border-radius: 10px;
          padding: 3rem;
          display: flex; flex-direction: column; gap: 1.5rem;
          align-items: flex-start;
          background: linear-gradient(135deg, ${NEON}06 0%, transparent 60%);
          overflow: hidden;
        }
        .cta-box::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, ${NEON}08, transparent 50%);
          pointer-events: none;
        }
        .cta-corner {
          position: absolute; top: 0; left: 0;
          width: 48px; height: 48px;
        }
        .cta-title {
          font-size: 1.8rem; font-weight: 800; color: #fff;
          letter-spacing: -.02em; margin: 0;
        }
        .cta-sub {
          color: #444; font-family: 'JetBrains Mono', monospace;
          font-size: .85rem; line-height: 1.8; margin: 0;
        }
        .cta-btn {
          padding: 12px 32px;
          border-radius: 6px;
          font-size: .8rem; font-weight: 700;
          letter-spacing: .08em; text-transform: uppercase;
          color: #050709;
          background: ${NEON};
          text-decoration: none;
          font-family: 'JetBrains Mono', monospace;
          transition: all .25s;
          box-shadow: 0 0 18px ${NEON}44;
          border: none; cursor: pointer;
        }
        .cta-btn:hover {
          box-shadow: 0 0 30px ${NEON}88;
          transform: translateY(-2px);
        }

        @media (min-width: 640px) {
          .cta-box { flex-direction: row; align-items: center; justify-content: space-between; }
        }
      `}</style>

      <div className="page-grid" />
      <div className="glow-1" />
      <div className="glow-2" />

      <Navbar />

      <div style={{ position: "relative", zIndex: 1, padding: "140px 2rem 4rem", maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: "4rem" }}>
          <p className="section-label">what i do</p>
          <h1 className="section-title">
            My <span>Services</span>
          </h1>
          <p className="section-sub">
            A full-stack craftsman — from pixels to servers,<br />
            mobile apps to visual storytelling.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="services-grid">
          {services.map((s) => (
            <ServicesCard
              key={s.id}
              id={s.id}
              cardIcon={s.serviceIcon}
              cardTitle={s.service}
              cardContent={s.serviceDescription}
              neonColor={s.neon}
              cardIndex={s.index}
              isActive={activeService === s.id}
              onMouseEnter={setActiveService}
              onMouseLeave={() => setActiveService(null)}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="cta-box">
          <svg className="cta-corner" viewBox="0 0 48 48" fill="none">
            <path d="M4 28 L4 4 L28 4" stroke={NEON} strokeWidth="1.5" opacity=".4" />
          </svg>
          <div>
            <h3 className="cta-title">Ready to build something?</h3>
            <p className="cta-sub">
              Available for freelance work & full-time positions.<br />
              Let's ship something great together.
            </p>
          </div>
          <a href="/my-portfolio/contact" className="cta-btn">
            Let's talk →
          </a>
        </div>

      </div>
    </div>
  )
}