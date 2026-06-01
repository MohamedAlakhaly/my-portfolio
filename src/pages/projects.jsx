"use client"

import { useState, useEffect, useRef } from "react"
import Navbar from "../components/navbar"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import ECommerceImg1   from "../assets/my_projects/e-commerce/1.png"
import LiveStreamImg1  from "../assets/my_projects/live_stream/1.png"
import MyPortfolioImg1 from "../assets/my_projects/my_portfolio/1.png"
import PortfolioImg    from "../assets/my_projects/portfolio/1.png"
import BonveroImg      from "../assets/my_projects/Bonvero/Blue_Modern_Mobile_Application_Presentation.png"
import netWoImg        from "../assets/my_projects/coffee_shop/netWo.png"
import uiPortfolioImg  from "../assets/my_projects/ui_portfolio/ui_portfolio.png"
import weatherProImg1  from "../assets/my_projects/weather_pro/weather_pro.png"

const NEON = "#39ff14"

const projects = [
  { id:"1", title:"E-Commerce App",    image:ECommerceImg1,   category:"Mobile", year:"2023", tech:["Flutter","Firebase","GetX"],         github:"https://github.com/MohamedAlakhaly", demo:"https://mohamedalakhaly.github.io/game-website/" },
  { id:"2", title:"Live Streaming",    image:LiveStreamImg1,  category:"Web",    year:"2023", tech:["React","Bootstrap"],                 github:"https://github.com/MohamedAlakhaly", demo:"https://mohamedalakhaly.github.io/game-website/" },
  { id:"3", title:"My Portfolio",      image:MyPortfolioImg1, category:"Web",    year:"2023", tech:["React","Tailwind"],                  github:"https://github.com/MohamedAlakhaly", demo:"https://mohamedalakhaly.github.io/my-portfolio/" },
  { id:"4", title:"Portfolio v1",      image:PortfolioImg,    category:"Web",    year:"2022", tech:["HTML","CSS","JS","Bootstrap"],       github:"https://github.com/MohamedAlakhaly", demo:"https://mohamedalakhaly.github.io/web-portfolio/" },
  { id:"5", title:"Bonvero Restaurant",image:BonveroImg,      category:"Mobile", year:"2023", tech:["Flutter","Firebase","GetX"],         github:"https://github.com/MohamedAlakhaly", demo:"https://github.com/MohamedAlakhaly/restaurant-app" },
  { id:"6", title:"NetWo Coffee",      image:netWoImg,        category:"Web",    year:"2025", tech:["Next.js","Tailwind"],                github:"https://github.com/MohamedAlakhaly", demo:"https://coffee-shop-chi-orpin.vercel.app/" },
  { id:"7", title:"UI Portfolio",      image:uiPortfolioImg,  category:"Web",    year:"2025", tech:["Next.js","Tailwind"],                github:"https://github.com/MohamedAlakhaly", demo:"https://ui-portfolio-mu.vercel.app/" },
  { id:"8", title:"Weather Pro",       image:weatherProImg1,  category:"Mobile", year:"2025", tech:["Flutter","GetX","OpenWeather API"],  github:"https://github.com/MohamedAlakhaly", demo:"" },
]

const filters = ["All", "Web", "Mobile"]

function ParticleCanvas() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener("resize", resize)
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.45 + 0.08,
    }))
    let raf
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(57,255,20,${p.alpha})`; ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize) }
  }, [])
  return <canvas ref={ref} style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0 }} />
}

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const [hovered, setHovered] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => { setTimeout(() => setIsLoaded(true), 100) }, [])

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter)

  return (
    <div style={{ minHeight:"100vh", background:"#050709", fontFamily:"'Syne',sans-serif", color:"#fff", overflowX:"hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        /* ── background ── */
        .page-grid { position:fixed;inset:0;pointer-events:none;z-index:0;
          background-image:linear-gradient(${NEON}07 1px,transparent 1px),linear-gradient(90deg,${NEON}07 1px,transparent 1px);
          background-size:48px 48px; }

        /* floating orbs */
        .orb { position:fixed;border-radius:50%;pointer-events:none;z-index:0; }
        .orb-1 { width:500px;height:500px;top:-10%;left:-12%;
          background:radial-gradient(circle,${NEON}12 0%,transparent 70%);
          animation:orbFloat 8s ease-in-out infinite; }
        .orb-2 { width:420px;height:420px;bottom:-8%;right:-10%;
          background:radial-gradient(circle,#00eaff0f 0%,transparent 70%);
          animation:orbFloat 8s ease-in-out infinite 4s; }
        .orb-3 { width:260px;height:260px;top:40%;left:60%;
          background:radial-gradient(circle,${NEON}08 0%,transparent 70%);
          animation:orbFloat 6s ease-in-out infinite 2s; }
        @keyframes orbFloat { 0%,100%{transform:scale(1) translate(0,0)} 33%{transform:scale(1.06) translate(12px,-18px)} 66%{transform:scale(.96) translate(-10px,14px)} }

        /* scanline */
        .scanline { position:fixed;inset:0;pointer-events:none;z-index:1;overflow:hidden;opacity:.02; }
        .scanline::after { content:'';position:absolute;width:100%;height:2px;
          background:linear-gradient(transparent,${NEON},transparent);
          animation:scan 10s linear infinite; }
        @keyframes scan { 0%{top:-2px} 100%{top:100vh} }

        /* corner accents */
        .corner { position:fixed;pointer-events:none;z-index:1; }
        .corner-tl { top:0;left:0; } .corner-tr { top:0;right:0; }
        .corner-bl { bottom:0;left:0; } .corner-br { bottom:0;right:0; }

        /* ── header ── */
        .section-label { font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.18em;text-transform:uppercase;
          color:${NEON};margin-bottom:.75rem;display:flex;align-items:center;gap:8px; }
        .section-label::before { content:'';display:inline-block;width:28px;height:1px;background:${NEON}; }
        .section-title { font-size:clamp(2rem,4vw,2.8rem);font-weight:800;color:#fff;margin:0 0 .5rem;letter-spacing:-.02em;line-height:1.1; }
        .section-title span { -webkit-text-stroke:1.5px ${NEON};color:transparent;text-shadow:0 0 28px ${NEON}44; }
        .section-sub { font-family:'JetBrains Mono',monospace;font-size:12px;color:#666;margin-bottom:2.5rem; }

        /* ── filter tabs ── */
        .filter-tabs { display:flex;gap:2px;background:#080b0e;border:1px solid #ffffff08;border-radius:8px;padding:3px;width:fit-content;margin-bottom:3rem; }
        .filter-tab { padding:8px 22px;border-radius:6px;border:none;cursor:pointer;font-family:'JetBrains Mono',monospace;
          font-size:11px;letter-spacing:.08em;text-transform:uppercase;background:transparent;color:#555;transition:all .25s; }
        .filter-tab:hover { color:${NEON}; }
        .filter-tab.active { background:${NEON}15;border:1px solid ${NEON}33;color:${NEON}; }

        /* ── projects grid ── */
        .proj-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:1.5px;
          border:1px solid #ffffff08;border-radius:12px;overflow:hidden; }

        /* ── card ── */
        .proj-card { position:relative;overflow:hidden;cursor:pointer;aspect-ratio:4/3;background:#080b0e; }

        .proj-card img { width:100%;height:100%;object-fit:cover;
          transition:transform .7s cubic-bezier(.25,.46,.45,.94), filter .5s;
          filter:brightness(.55) saturate(.7); }
        .proj-card:hover img { transform:scale(1.1);filter:brightness(.25) saturate(1) blur(5px); }

        /* scan line top */
        .proj-scan { position:absolute;top:0;left:0;right:0;height:1.5px;
          background:linear-gradient(to right,${NEON},transparent);
          transform:scaleX(0);transform-origin:left;transition:transform .45s;z-index:4; }
        .proj-card:hover .proj-scan { transform:scaleX(1); }

        /* neon glow on hover */
        .proj-glow { position:absolute;inset:0;pointer-events:none;transition:opacity .4s;opacity:0;
          background:radial-gradient(ellipse at 30% 50%,${NEON}0a 0%,transparent 60%); }
        .proj-card:hover .proj-glow { opacity:1; }

        /* bottom strip — always visible */
        .proj-strip { position:absolute;bottom:0;left:0;right:0;padding:1.25rem 1.5rem;
          background:linear-gradient(to top,rgba(5,7,9,.95) 0%,transparent 100%);
          transition:opacity .3s transform .3s;z-index:3; }
        .proj-card:hover .proj-strip { opacity:0;transform:translateY(6px); }
        .proj-strip-cat { font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:${NEON};margin-bottom:5px; }
        .proj-strip-title { font-size:1.05rem;font-weight:700;color:#fff; }

        /* hover overlay */
        .proj-overlay { position:absolute;inset:0;display:flex;flex-direction:column;
          justify-content:center;align-items:flex-start;padding:2rem;
          opacity:0;transition:opacity .4s;z-index:4; }
        .proj-card:hover .proj-overlay { opacity:1; }

        .proj-ov-num { font-family:'JetBrains Mono',monospace;font-size:10px;color:${NEON}55;margin-bottom:.75rem;letter-spacing:.1em; }
        .proj-ov-title { font-size:1.3rem;font-weight:800;color:#fff;margin-bottom:.75rem;line-height:1.2; }
        .proj-ov-tech { display:flex;flex-wrap:wrap;gap:5px;margin-bottom:1.5rem; }
        .proj-ov-tag { font-family:'JetBrains Mono',monospace;font-size:10px;padding:3px 9px;
          border-radius:3px;border:1px solid ${NEON}44;color:${NEON};background:${NEON}0d; }
        .proj-ov-actions { display:flex;gap:.5rem;flex-wrap:wrap; }

        .ov-btn { padding:8px 18px;border-radius:5px;font-size:11px;font-weight:700;
          letter-spacing:.06em;text-transform:uppercase;text-decoration:none;
          font-family:'JetBrains Mono',monospace;transition:all .2s;
          display:flex;align-items:center;gap:6px;border:none;cursor:pointer; }
        .ov-btn.primary { background:${NEON};color:#050709; }
        .ov-btn.primary:hover { box-shadow:0 0 18px ${NEON}99;transform:translateY(-1px); }
        .ov-btn.ghost { background:rgba(255,255,255,.06);color:#999;border:1px solid rgba(255,255,255,.12); }
        .ov-btn.ghost:hover { border-color:${NEON}44;color:${NEON}; }

        /* card entrance animation */
        .proj-card { opacity:0;transform:translateY(24px);transition:opacity .5s,transform .5s; }
        .proj-card.visible { opacity:1;transform:translateY(0); }
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

      <div style={{position:"relative",zIndex:2,maxWidth:1100,margin:"0 auto",padding:"140px 1.5rem 5rem"}}>

        {/* header */}
        <div style={{opacity:isLoaded?1:0,transform:isLoaded?"translateY(0)":"translateY(-20px)",transition:"all .6s"}}>
          <p className="section-label">what i built</p>
          <h1 className="section-title">My <span>Projects</span></h1>
          <p className="section-sub">// {projects.length} projects shipped across web & mobile</p>
        </div>

        {/* filters */}
        <div style={{opacity:isLoaded?1:0,transition:"opacity .6s .2s"}} className="filter-tabs">
          {filters.map(f => (
            <button key={f} className={`filter-tab ${filter===f?"active":""}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>

        {/* grid */}
        <div className="proj-grid">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={`proj-card ${isLoaded?"visible":""}`}
              style={{transitionDelay:`${i*0.07}s`}}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="proj-scan"/>
              <div className="proj-glow"/>
              <img src={p.image||"/placeholder.svg"} alt={p.title}/>

              <div className="proj-strip">
                <p className="proj-strip-cat">{p.category} · {p.year}</p>
                <h3 className="proj-strip-title">{p.title}</h3>
              </div>

              <div className="proj-overlay">
                <span className="proj-ov-num">{String(i+1).padStart(2,"0")} / {String(filtered.length).padStart(2,"0")}</span>
                <h3 className="proj-ov-title">{p.title}</h3>
                <div className="proj-ov-tech">
                  {p.tech.map(t => <span key={t} className="proj-ov-tag">{t}</span>)}
                </div>
                <div className="proj-ov-actions">
                  <Link to={`/projects/${p.id}`} className="ov-btn primary">
                    Details <FontAwesomeIcon icon={faArrowRight} style={{fontSize:10}}/>
                  </Link>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="ov-btn ghost">
                      <FontAwesomeIcon icon={faExternalLinkAlt} style={{fontSize:10}}/> Demo
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="ov-btn ghost">
                    <FontAwesomeIcon icon={faGithub} style={{fontSize:11}}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}