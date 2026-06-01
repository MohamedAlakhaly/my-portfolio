"use client"

import { useState, useEffect, useRef } from "react"
import Navbar from "../components/navbar"
import ServicesCard from "../components/services_card"
import {
  faCode, faMobileScreenButton, faCamera,
  faPalette, faClapperboard, faGlobe,
} from "@fortawesome/free-solid-svg-icons"

const NEON = "#39ff14"

const services = [
  { id:1, service:"Front-End",     serviceIcon:faCode,              serviceDescription:"Crafting modern, responsive interfaces using HTML, CSS, JavaScript and React. I bring designs to life with clean, user-friendly web experiences.", neon:"#39ff14", index:"01" },
  { id:2, service:"Back-End",      serviceIcon:faGlobe,             serviceDescription:"Building robust, scalable server-side applications. APIs, databases, and all the logic that powers dynamic web platforms.",                        neon:"#00eaff", index:"02" },
  { id:3, service:"Mobile Dev",    serviceIcon:faMobileScreenButton,serviceDescription:"Developing sleek, high-performance mobile apps for Android and iOS using Flutter — smooth, fast, and cross-platform.",                             neon:"#a78bfa", index:"03" },
  { id:4, service:"Video Editing", serviceIcon:faClapperboard,      serviceDescription:"Editing dynamic and engaging videos using professional tools. Storytelling through pacing, effects, and smooth transitions.",                      neon:"#f97316", index:"04" },
  { id:5, service:"Graphic Design",serviceIcon:faPalette,           serviceDescription:"Designing visually compelling graphics, logos, and layouts. Creativity and functionality fused into standout visual solutions.",                   neon:"#f472b6", index:"05" },
  { id:6, service:"Photography",   serviceIcon:faCamera,            serviceDescription:"Capturing moments with a creative eye and precision. Lighting, composition, and editing to produce high-quality images.",                         neon:"#fbbf24", index:"06" },
]

function ParticleCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return
    const ctx = canvas.getContext("2d")
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize(); window.addEventListener("resize", resize)
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3, dx: (Math.random()-.5)*.3, dy: (Math.random()-.5)*.3,
      alpha: Math.random() * .45 + .08,
    }))
    let raf
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2)
        ctx.fillStyle = `rgba(57,255,20,${p.alpha})`; ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x<0||p.x>canvas.width) p.dx*=-1
        if (p.y<0||p.y>canvas.height) p.dy*=-1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize) }
  }, [])
  return <canvas ref={ref} style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:0}}/>
}

export default function Services() {
  const [activeService, setActiveService] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setIsLoaded(true), 100) }, [])

  return (
    <div style={{ minHeight:"100vh", background:"#050709", overflow:"hidden", fontFamily:"'Syne',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .page-grid{position:fixed;inset:0;pointer-events:none;z-index:0;
          background-image:linear-gradient(${NEON}07 1px,transparent 1px),linear-gradient(90deg,${NEON}07 1px,transparent 1px);
          background-size:48px 48px;}

        .orb{position:fixed;border-radius:50%;pointer-events:none;z-index:0;}
        .orb-1{width:500px;height:500px;top:-10%;left:-12%;background:radial-gradient(circle,${NEON}12 0%,transparent 70%);animation:orbFloat 8s ease-in-out infinite;}
        .orb-2{width:420px;height:420px;bottom:-8%;right:-10%;background:radial-gradient(circle,#00eaff0f 0%,transparent 70%);animation:orbFloat 8s ease-in-out infinite 4s;}
        .orb-3{width:260px;height:260px;top:40%;left:60%;background:radial-gradient(circle,${NEON}08 0%,transparent 70%);animation:orbFloat 6s ease-in-out infinite 2s;}
        @keyframes orbFloat{0%,100%{transform:scale(1) translate(0,0)}33%{transform:scale(1.06) translate(12px,-18px)}66%{transform:scale(.96) translate(-10px,14px)}}

        .scanline{position:fixed;inset:0;pointer-events:none;z-index:1;overflow:hidden;opacity:.02;}
        .scanline::after{content:'';position:absolute;width:100%;height:2px;background:linear-gradient(transparent,${NEON},transparent);animation:scan 10s linear infinite;}
        @keyframes scan{0%{top:-2px}100%{top:100vh}}

        .corner{position:fixed;pointer-events:none;z-index:1;}
        .corner-tl{top:0;left:0;} .corner-tr{top:0;right:0;}
        .corner-bl{bottom:0;left:0;} .corner-br{bottom:0;right:0;}

        .section-label{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${NEON};margin-bottom:1rem;display:flex;align-items:center;gap:8px;}
        .section-label::before{content:'';display:inline-block;width:28px;height:1px;background:${NEON};}
        .section-title{font-size:clamp(2rem,5vw,3.2rem);font-weight:800;color:#fff;margin:0 0 .5rem;letter-spacing:-.02em;line-height:1.1;}
        .section-title span{-webkit-text-stroke:1.5px ${NEON};color:transparent;text-shadow:0 0 28px ${NEON}44;}
        .section-sub{font-size:.9rem;color:#666;max-width:480px;line-height:1.85;font-family:'JetBrains Mono',monospace;}

        .services-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5px;margin:0 0 6rem;border:1px solid #ffffff08;border-radius:12px;overflow:hidden;}

        .cta-box{position:relative;border:1px solid ${NEON}22;border-radius:10px;padding:3rem;display:flex;flex-direction:column;gap:1.5rem;align-items:flex-start;background:linear-gradient(135deg,${NEON}06 0%,transparent 60%);overflow:hidden;}
        .cta-box::before{content:'';position:absolute;top:0;left:0;right:0;height:1.5px;background:linear-gradient(to right,${NEON}55,transparent);}
        .cta-title{font-size:1.8rem;font-weight:800;color:#fff;letter-spacing:-.02em;margin:0;}
        .cta-sub{color:#555;font-family:'JetBrains Mono',monospace;font-size:.85rem;line-height:1.8;margin:0;}
        .cta-btn{padding:12px 32px;border-radius:6px;font-size:.8rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#050709;background:${NEON};text-decoration:none;font-family:'JetBrains Mono',monospace;transition:all .25s;box-shadow:0 0 18px ${NEON}44;border:none;cursor:pointer;}
        .cta-btn:hover{box-shadow:0 0 30px ${NEON}88;transform:translateY(-2px);}
        @media(min-width:640px){.cta-box{flex-direction:row;align-items:center;justify-content:space-between;}}
      `}</style>

      {/* bg layers */}
      <div className="page-grid"/>
      <ParticleCanvas/>
      <div className="orb orb-1"/><div className="orb orb-2"/><div className="orb orb-3"/>
      <div className="scanline"/>

      {/* corner accents */}
      {[["tl","M4 28 L4 4 L28 4"],["tr","M60 28 L60 4 L32 4"],["bl","M4 32 L4 60 L28 60"],["br","M60 32 L60 60 L32 60"]].map(([pos,d])=>(
        <div key={pos} className={`corner corner-${pos}`} style={{width:64,height:64}}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d={d} stroke={NEON} strokeWidth="1.5" opacity=".3"/>
          </svg>
        </div>
      ))}

      <Navbar/>

      <div style={{position:"relative",zIndex:2,padding:"140px 2rem 4rem",maxWidth:1200,margin:"0 auto",
        opacity:isLoaded?1:0,transform:isLoaded?"translateY(0)":"translateY(-16px)",transition:"all .6s"}}>

        <div style={{marginBottom:"4rem"}}>
          <p className="section-label">what i do</p>
          <h1 className="section-title">My <span>Services</span></h1>
          <p className="section-sub">
            A full-stack craftsman — from pixels to servers,<br/>
            mobile apps to visual storytelling.
          </p>
        </div>

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

        <div className="cta-box">
          <svg style={{position:"absolute",top:0,left:0,width:48,height:48}} viewBox="0 0 48 48" fill="none">
            <path d="M4 28 L4 4 L28 4" stroke={NEON} strokeWidth="1.5" opacity=".4"/>
          </svg>
          <div>
            <h3 className="cta-title">Ready to build something?</h3>
            <p className="cta-sub">
              Available for freelance work & full-time positions.<br/>
              Let's ship something great together.
            </p>
          </div>
          <a href="/contact" className="cta-btn">Let's talk →</a>
        </div>
      </div>
    </div>
  )
}