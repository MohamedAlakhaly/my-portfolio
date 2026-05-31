"use client"

import { useEffect, useRef, useState } from "react"
import Navbar from "../components/navbar"
import img1 from "../assets/1780263431513.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Typed from "typed.js"
import { faLinkedin, faGithub, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faDownload, faArrowRight } from "@fortawesome/free-solid-svg-icons"

const NEON = "#39ff14"
const NEON2 = "#00eaff"

const stats = [
  { value: "6+", label: "Years of Experience" },
  { value: "15+", label: "Projects Shipped" },
  { value: "5", label: "Tech Stacks" },
]

const skills = ["React", "Next.js", "Flutter", "Node.js", "Supabase", "TypeScript"]

export default function Home() {
  const el = useRef(null)
  const canvasRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  /* typed.js */
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software Engineer", "Full-Stack Developer", "Mobile Developer", "Problem Solver"],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  /* load trigger */
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 120)
    return () => clearTimeout(t)
  }, [])

  /* mouse parallax */
  useEffect(() => {
    const handle = (e) =>
      setMousePos({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 })
    window.addEventListener("mousemove", handle)
    return () => window.removeEventListener("mousemove", handle)
  }, [])

  /* particle canvas */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(57,255,20,${p.alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  const tx = (mousePos.x * 18).toFixed(1)
  const ty = (mousePos.y * 18).toFixed(1)

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{ background: "#050709", fontFamily: "'Syne', sans-serif" }}
    >
      {/* google font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes borderGlow {
          0%,100% { box-shadow: 0 0 8px ${NEON}55; }
          50%      { box-shadow: 0 0 22px ${NEON}99, 0 0 40px ${NEON}33; }
        }
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes spinRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulse-neon {
          0%,100% { opacity: .6; }
          50%      { opacity: 1; }
        }
        .neon-text {
          color: ${NEON};
          text-shadow: 0 0 8px ${NEON}99, 0 0 20px ${NEON}44;
        }
        .skill-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 4px 12px;
          border-radius: 4px;
          border: 1px solid ${NEON}33;
          color: ${NEON};
          background: ${NEON}0d;
          transition: all .25s;
        }
        .skill-tag:hover {
          background: ${NEON}22;
          border-color: ${NEON}88;
          box-shadow: 0 0 12px ${NEON}44;
        }
        .social-icon {
          width: 42px; height: 42px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid #ffffff15;
          color: #888;
          font-size: 1rem;
          transition: all .25s;
          text-decoration: none;
        }
        .social-icon:hover {
          border-color: ${NEON}66;
          color: ${NEON};
          background: ${NEON}11;
          box-shadow: 0 0 14px ${NEON}33;
        }
      `}</style>

      {/* scanline effect */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 50, overflow: "hidden", opacity: 0.025,
      }}>
        <div style={{
          width: "100%", height: "2px", background: "linear-gradient(transparent, #39ff14, transparent)",
          animation: "scanline 8s linear infinite",
        }} />
      </div>

      {/* particle canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: "fixed", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
      />

      {/* grid */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(${NEON}08 1px, transparent 1px), linear-gradient(90deg, ${NEON}08 1px, transparent 1px)`,
        backgroundSize: "48px 48px",
      }} />

      {/* corner accents */}
      {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
        <div key={i} className={`fixed ${pos} w-16 h-16 pointer-events-none`} style={{ zIndex: 1 }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path
              d={i === 0 ? "M4 32 L4 4 L32 4" : i === 1 ? "M60 32 L60 4 L32 4" : i === 2 ? "M4 32 L4 60 L32 60" : "M60 32 L60 60 L32 60"}
              stroke={NEON} strokeWidth="1.5" opacity="0.35"
            />
          </svg>
        </div>
      ))}

      <Navbar />

      <main className="relative z-10 flex flex-wrap items-center min-h-screen md:pt-28 pt-20 px-6 md:px-16 pb-16 gap-12">

        {/* ── LEFT ── */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">

          {/* top label */}
          <div
            className={`transition-all duration-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#555", letterSpacing: "0.15em" }}
          >
            <span style={{ color: NEON }}>▸</span> &nbsp;PORTFOLIO_2025.exe
          </div>

          {/* name */}
          <div className={`transition-all duration-600 delay-100 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#444", marginBottom: 8 }}>
              // Hello, World! I am
            </p>
            <h1 style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff" }}>
              Mohamed<br />
              <span style={{ WebkitTextStroke: `1.5px ${NEON}`, color: "transparent", textShadow: `0 0 30px ${NEON}44` }}>
                Al-Akhaly
              </span>
            </h1>
          </div>

          {/* typed */}
          <div
            className={`transition-all duration-600 delay-200 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <span style={{ width: 3, height: 28, background: NEON, borderRadius: 2, boxShadow: `0 0 8px ${NEON}` }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1.1rem", color: "#aaa" }}>
              <span style={{ color: NEON }} ref={el} />
            </span>
          </div>

          {/* bio */}
          <p
            className={`transition-all duration-600 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.85, maxWidth: 480 }}
          >
            I build fast, scalable, and beautiful digital products — from web platforms to mobile apps.
            Turning complex problems into clean, impactful solutions is what I do best.
          </p>

          {/* skill tags */}
          <div
            className={`flex flex-wrap gap-2 transition-all duration-600 delay-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          >
            {skills.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>

          {/* stats */}
          <div
            className={`flex gap-8 transition-all duration-600 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p style={{ fontSize: "1.8rem", fontWeight: 800, color: NEON, lineHeight: 1, textShadow: `0 0 12px ${NEON}77` }}>{value}</p>
                <p style={{ fontSize: "0.7rem", color: "#444", marginTop: 3, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}>{label}</p>
              </div>
            ))}
          </div>

          {/* divider */}
          <div style={{ height: 1, background: `linear-gradient(to right, ${NEON}44, transparent)`, maxWidth: 420 }} />

          {/* socials */}
          <div className={`flex gap-3 transition-all duration-600 delay-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
            <a href="https://www.linkedin.com/in/mohamed-alakhaly-23a25a284/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/MohamedAlakhaly" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100022101017721" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/_mohamed_toto_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>

          {/* CTA buttons */}
          <div className={`flex gap-3 flex-wrap transition-all duration-600 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <a
              href="/my-portfolio/cv/CV Mohamed .pdf"
              style={{
                padding: "10px 28px", borderRadius: 6, fontWeight: 700, fontSize: "0.85rem",
                background: NEON, color: "#050709", display: "inline-flex", alignItems: "center", gap: 8,
                animation: "borderGlow 3s ease-in-out infinite", textDecoration: "none", letterSpacing: "0.03em",
              }}
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
            <a
              href="/my-portfolio/projects"
              style={{
                padding: "10px 28px", borderRadius: 6, fontWeight: 600, fontSize: "0.85rem",
                border: `1px solid #ffffff18`, color: "#888", display: "inline-flex", alignItems: "center", gap: 8,
                background: "transparent", textDecoration: "none", transition: "all .25s", letterSpacing: "0.03em",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = `${NEON}55`; e.currentTarget.style.color = NEON }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#ffffff18"; e.currentTarget.style.color = "#888" }}
            >
              View Projects <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>

        {/* ── RIGHT — image ── */}
        <div
          className={`w-full lg:flex-1 flex justify-center items-center transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
          style={{ animation: isLoaded ? "float 6s ease-in-out infinite" : "none" }}
        >
          <div style={{ position: "relative" }}>
            {/* parallax wrapper */}
            <div style={{ transform: `translate(${tx}px, ${ty}px)`, transition: "transform 0.1s linear" }}>

              {/* spinning ring */}
              <div style={{
                position: "absolute", inset: -10, borderRadius: "50%",
                background: `conic-gradient(from 0deg, ${NEON}, ${NEON2}, transparent 60%, ${NEON})`,
                animation: "spinRing 5s linear infinite", padding: 2,
              }}>
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#050709" }} />
              </div>

              {/* outer glow */}
              <div style={{
                position: "absolute", inset: -20, borderRadius: "50%",
                background: `radial-gradient(circle, ${NEON}22 0%, transparent 70%)`,
                animation: "pulse-neon 3s ease-in-out infinite",
              }} />

              {/* dashed orbit */}
              <div style={{
                position: "absolute", inset: -48, borderRadius: "50%",
                border: `1px dashed ${NEON}30`, animation: "spinRing 25s linear infinite",
              }} />

              {/* profile image */}
              <img
                src={img1 || "/placeholder.svg"}
                alt="Mohamed Al-Akhaly"
                style={{
                  width: 320, height: 320, borderRadius: "50%", objectFit: "cover",
                  position: "relative", zIndex: 2,
                  border: `2px solid ${NEON}55`,
                  filter: "brightness(0.95) contrast(1.05)",
                }}
              />

              {/* HUD overlay */}
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 3, pointerEvents: "none" }}>
                <circle cx="50%" cy="50%" r="49%" fill="none" stroke={NEON} strokeWidth="0.5" strokeDasharray="4 8" opacity="0.3" />
              </svg>
            </div>

            {/* floating card — stack */}
            <div style={{
              position: "absolute", bottom: -16, right: -32, zIndex: 10,
              background: "#0c1008", border: `1px solid ${NEON}33`,
              borderRadius: 8, padding: "8px 16px",
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: NEON,
              boxShadow: `0 0 16px ${NEON}22`,
            }}>
              ▸ React · Flutter · Node.js
            </div>

            {/* floating card — status */}
            <div style={{
              position: "absolute", top: 8, left: -40, zIndex: 10,
              background: "#0c1008", border: "1px solid #4ade8033",
              borderRadius: 8, padding: "8px 16px",
              display: "flex", alignItems: "center", gap: 6,
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#4ade80",
              boxShadow: "0 0 16px #4ade8022",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", animation: "pulse-neon 1.5s ease-in-out infinite" }} />
              OPEN_TO_WORK
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}