"use client"

import { useState } from "react"
import Navbar from "../components/navbar"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import ECommerceImg1      from "../assets/my_projects/e-commerce/1.png"
import LiveStreamImg1     from "../assets/my_projects/live_stream/1.png"
import MyPortfolioImg1    from "../assets/my_projects/my_portfolio/1.png"
import PortfolioImg       from "../assets/my_projects/portfolio/1.png"
import BonveroImg         from "../assets/my_projects/Bonvero/Blue_Modern_Mobile_Application_Presentation.png"
import netWoImg           from "../assets/my_projects/coffee_shop/netWo.png"
import uiPortfolioImg     from "../assets/my_projects/ui_portfolio/ui_portfolio.png"
import weatherProImg1     from "../assets/my_projects/weather_pro/weather_pro.png"

const NEON = "#39ff14"

const projects = [
  { id:"1", title:"E-Commerce App",       image:ECommerceImg1,   category:"Mobile", year:"2023", tech:["Flutter","Firebase","GetX"],              github:"https://github.com/MohamedAlakhaly", demo:"https://mohamedalakhaly.github.io/game-website/" },
  { id:"2", title:"Live Streaming",        image:LiveStreamImg1,  category:"Web",    year:"2023", tech:["React","Bootstrap"],                      github:"https://github.com/MohamedAlakhaly", demo:"https://mohamedalakhaly.github.io/game-website/" },
  { id:"3", title:"My Portfolio",          image:MyPortfolioImg1, category:"Web",    year:"2023", tech:["React","Tailwind"],                       github:"https://github.com/MohamedAlakhaly", demo:"https://mohamedalakhaly.github.io/my-portfolio/" },
  { id:"4", title:"Portfolio v1",          image:PortfolioImg,    category:"Web",    year:"2022", tech:["HTML","CSS","JS","Bootstrap"],             github:"https://github.com/MohamedAlakhaly", demo:"https://mohamedalakhaly.github.io/web-portfolio/" },
  { id:"5", title:"Bonvero Restaurant",    image:BonveroImg,      category:"Mobile", year:"2023", tech:["Flutter","Firebase","GetX"],              github:"https://github.com/MohamedAlakhaly", demo:"https://github.com/MohamedAlakhaly/restaurant-app" },
  { id:"6", title:"NetWo Coffee",          image:netWoImg,        category:"Web",    year:"2025", tech:["Next.js","Tailwind"],                     github:"https://github.com/MohamedAlakhaly", demo:"https://coffee-shop-chi-orpin.vercel.app/" },
  { id:"7", title:"UI Portfolio",          image:uiPortfolioImg,  category:"Web",    year:"2025", tech:["Next.js","Tailwind"],                     github:"https://github.com/MohamedAlakhaly", demo:"https://ui-portfolio-mu.vercel.app/" },
  { id:"8", title:"Weather Pro",           image:weatherProImg1,  category:"Mobile", year:"2025", tech:["Flutter","GetX","OpenWeather API"],       github:"https://github.com/MohamedAlakhaly", demo:"" },
]

const filters = ["All", "Web", "Mobile"]

export default function Projects() {
  const [filter, setFilter]     = useState("All")
  const [hovered, setHovered]   = useState(null)

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter)

  return (
    <div style={{ minHeight:"100vh", background:"#050709", fontFamily:"'Syne', sans-serif", color:"#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .page-grid {
          position:fixed; inset:0; pointer-events:none; z-index:0;
          background-image: linear-gradient(${NEON}07 1px,transparent 1px),
                            linear-gradient(90deg,${NEON}07 1px,transparent 1px);
          background-size:48px 48px;
        }
        .glow-tl { position:fixed; top:5%; left:-8%; width:380px; height:380px; border-radius:50%; background:radial-gradient(circle,${NEON}10 0%,transparent 70%); pointer-events:none; z-index:0; animation:pg 5s ease-in-out infinite; }
        .glow-br { position:fixed; bottom:5%; right:-8%; width:340px; height:340px; border-radius:50%; background:radial-gradient(circle,#00eaff0d 0%,transparent 70%); pointer-events:none; z-index:0; animation:pg 5s ease-in-out infinite 2.5s; }
        @keyframes pg { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }

        .section-label {
          font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.18em; text-transform:uppercase;
          color:${NEON}; margin-bottom:.75rem; display:flex; align-items:center; gap:8px;
        }
        .section-label::before { content:''; display:inline-block; width:28px; height:1px; background:${NEON}; }
        .section-title { font-size:clamp(2rem,4vw,2.8rem); font-weight:800; color:#fff; margin:0 0 2.5rem; letter-spacing:-.02em; line-height:1.1; }
        .section-title span { -webkit-text-stroke:1.5px ${NEON}; color:transparent; text-shadow:0 0 28px ${NEON}44; }

        .filter-tabs { display:flex; gap:2px; background:#080b0e; border:1px solid #ffffff08; border-radius:8px; padding:3px; width:fit-content; margin-bottom:2.5rem; }
        .filter-tab { padding:7px 20px; border-radius:6px; border:none; cursor:pointer; font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.08em; text-transform:uppercase; background:transparent; color:#333; transition:all .25s; }
        .filter-tab:hover { color:${NEON}; }
        .filter-tab.active { background:${NEON}15; border:1px solid ${NEON}33; color:${NEON}; }

        /* masonry-ish grid */
        .proj-grid {
          display:grid;
          grid-template-columns: repeat(auto-fill, minmax(300px,1fr));
          gap:1.5px;
          border:1px solid #ffffff08; border-radius:10px; overflow:hidden;
        }

        .proj-card {
          position:relative; overflow:hidden; cursor:pointer;
          aspect-ratio: 4/3;
          background:#080b0e;
        }
        .proj-card img {
          width:100%; height:100%; object-fit:cover;
          transition: transform .6s, filter .5s;
          filter:brightness(.6) saturate(.8);
        }
        .proj-card:hover img { transform:scale(1.08); filter:brightness(.3) saturate(1) blur(4px); }

        .proj-scan {
          position:absolute; top:0; left:0; right:0; height:1px;
          background:linear-gradient(to right,${NEON},transparent);
          transform:scaleX(0); transform-origin:left; transition:transform .4s;
        }
        .proj-card:hover .proj-scan { transform:scaleX(1); }

        /* always-visible bottom strip */
        .proj-strip {
          position:absolute; bottom:0; left:0; right:0;
          padding:1rem 1.25rem;
          background:linear-gradient(to top, rgba(5,7,9,.9) 0%, transparent 100%);
          transition: opacity .3s;
        }
        .proj-card:hover .proj-strip { opacity:0; }

        .proj-strip-cat {
          font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.1em; text-transform:uppercase;
          color:${NEON}; margin-bottom:4px;
        }
        .proj-strip-title { font-size:1rem; font-weight:700; color:#fff; }

        /* hover overlay */
        .proj-overlay {
          position:absolute; inset:0;
          display:flex; flex-direction:column; justify-content:center; align-items:flex-start;
          padding:1.75rem;
          opacity:0; transition:opacity .35s;
        }
        .proj-card:hover .proj-overlay { opacity:1; }

        .proj-ov-index { font-family:'JetBrains Mono',monospace; font-size:10px; color:${NEON}55; margin-bottom:.75rem; }
        .proj-ov-title { font-size:1.2rem; font-weight:800; color:#fff; margin-bottom:.75rem; }
        .proj-ov-tech { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:1.25rem; }
        .proj-ov-tag {
          font-family:'JetBrains Mono',monospace; font-size:10px; padding:3px 8px;
          border-radius:3px; border:1px solid ${NEON}33; color:${NEON}; background:${NEON}0d;
        }
        .proj-ov-actions { display:flex; gap:.5rem; }
        .proj-ov-btn {
          padding:7px 16px; border-radius:5px; font-size:11px; font-weight:600;
          letter-spacing:.06em; text-transform:uppercase; text-decoration:none;
          font-family:'JetBrains Mono',monospace; transition:all .2s;
          display:flex; align-items:center; gap:5px;
        }
        .proj-ov-btn.primary { background:${NEON}; color:#050709; }
        .proj-ov-btn.primary:hover { box-shadow:0 0 14px ${NEON}88; }
        .proj-ov-btn.ghost { background:rgba(255,255,255,.06); color:#aaa; border:1px solid #ffffff12; }
        .proj-ov-btn.ghost:hover { border-color:${NEON}33; color:${NEON}; }
      `}</style>

      <div className="page-grid" /><div className="glow-tl" /><div className="glow-br" />
      <Navbar />

      <div style={{ position:"relative", zIndex:1, maxWidth:1100, margin:"0 auto", padding:"140px 1.5rem 5rem" }}>

        <p className="section-label">what i built</p>
        <h1 className="section-title">My <span>Projects</span></h1>

        <div className="filter-tabs">
          {filters.map(f => (
            <button key={f} className={`filter-tab ${filter===f?"active":""}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>

        <div className="proj-grid">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="proj-card"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="proj-scan" />
              <img src={p.image || "/placeholder.svg"} alt={p.title} />

              {/* bottom strip */}
              <div className="proj-strip">
                <p className="proj-strip-cat">{p.category} · {p.year}</p>
                <h3 className="proj-strip-title">{p.title}</h3>
              </div>

              {/* hover overlay */}
              <div className="proj-overlay">
                <span className="proj-ov-index">{String(i+1).padStart(2,"0")} / {String(filtered.length).padStart(2,"0")}</span>
                <h3 className="proj-ov-title">{p.title}</h3>
                <div className="proj-ov-tech">
                  {p.tech.map(t => <span key={t} className="proj-ov-tag">{t}</span>)}
                </div>
                <div className="proj-ov-actions">
                  <Link to={`/my-portfolio/projects/${p.id}`} className="proj-ov-btn primary">
                    Details <FontAwesomeIcon icon={faArrowRight} style={{fontSize:10}} />
                  </Link>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proj-ov-btn ghost">
                      <FontAwesomeIcon icon={faExternalLinkAlt} style={{fontSize:10}} /> Demo
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-ov-btn ghost">
                    <FontAwesomeIcon icon={faGithub} style={{fontSize:11}} />
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