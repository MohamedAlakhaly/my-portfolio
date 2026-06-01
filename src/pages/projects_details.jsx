"use client"

import { useState, useEffect, useRef } from "react"
import Navbar from "../components/navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft, faExternalLinkAlt, faChevronLeft, faXmark } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { useParams, Link } from "react-router-dom"

import ECommerceImg1   from "../assets/my_projects/e-commerce/1.png"
import ECommerceImg2   from "../assets/my_projects/e-commerce/2.png"
import ECommerceImg3   from "../assets/my_projects/e-commerce/3.png"
import ECommerceImg4   from "../assets/my_projects/e-commerce/4.png"
import ECommerceImg5   from "../assets/my_projects/e-commerce/5.png"
import LiveStreamImg1  from "../assets/my_projects/live_stream/1.png"
import MyPortfolioImg1 from "../assets/my_projects/my_portfolio/1.png"
import PortfolioImg    from "../assets/my_projects/portfolio/1.png"
import BonveroImg      from "../assets/my_projects/Bonvero/Blue_Modern_Mobile_Application_Presentation.png"
import netWoImg        from "../assets/my_projects/coffee_shop/netWo.png"
import uiPortfolioImg  from "../assets/my_projects/ui_portfolio/ui_portfolio.png"
import weatherProImg1  from "../assets/my_projects/weather_pro/weather_pro.png"

const NEON = "#39ff14"

const projectsData = [
  { id:"1", title:"E-Commerce App",    category:"Mobile", year:"2023", client:"Personal Project", tech:["Flutter","Firebase","GetX"],        github:"https://github.com/MohamedAlakhaly", demo:"https://mohamedalakhaly.github.io/game-website/", images:[ECommerceImg1,ECommerceImg2,ECommerceImg3,ECommerceImg4,ECommerceImg5], description:"An integrated online store app with a fast and easy shopping experience.\n\n▸ Simple, intuitive navigation interface\n▸ Discounts and offers up to 30% on products\n▸ Secure cart, order management and payment\n▸ Favorites list to save featured products\n▸ Profile customization to track orders and offers" },
  { id:"2", title:"Live Streaming",    category:"Web",    year:"2023", client:"Personal Project", tech:["React","Bootstrap"],                github:"https://github.com/MohamedAlakhaly", demo:"https://mohamedalakhaly.github.io/game-website/", images:[LiveStreamImg1], description:"An interactive gaming/streaming website with an attractive and easy-to-use design.\n\n▸ Responsive layout across all devices\n▸ Smooth animations and hover effects\n▸ Clean, modern UI focused on engagement" },
  { id:"3", title:"My Portfolio",      category:"Web",    year:"2023", client:"Personal Project", tech:["React","Tailwind"],               github:"https://github.com/MohamedAlakhaly", demo:"https://mohamedalakhaly.github.io/my-portfolio/", images:[MyPortfolioImg1], description:"Personal developer portfolio showcasing projects, skills and certifications.\n\n▸ Multi-page React app with smooth routing\n▸ Responsive design with Tailwind CSS\n▸ Animated sections and interactive components" },
  { id:"4", title:"Portfolio v1",      category:"Web",    year:"2022", client:"Personal Project", tech:["HTML","CSS","JS","Bootstrap"],    github:"https://github.com/MohamedAlakhaly", demo:"https://mohamedalakhaly.github.io/web-portfolio/", images:[PortfolioImg], description:"First version of my personal portfolio — a static website.\n\n▸ Pure HTML, CSS and JavaScript\n▸ Bootstrap grid and components\n▸ Clean layout with section-based navigation" },
  { id:"5", title:"Bonvero Restaurant",category:"Mobile", year:"2023", client:"Personal Project", tech:["Flutter","Firebase","GetX"],        github:"https://github.com/MohamedAlakhaly", demo:"https://github.com/MohamedAlakhaly/restaurant-app", images:[BonveroImg], description:"A full-featured restaurant mobile application.\n\n▸ Browse menu with categories and filters\n▸ Cart management and order placement\n▸ Firebase backend for real-time data\n▸ GetX state management for smooth performance" },
  { id:"6", title:"NetWo Coffee",      category:"Web",    year:"2025", client:"Personal Project", tech:["Next.js","Tailwind"],             github:"https://github.com/MohamedAlakhaly", demo:"https://coffee-shop-chi-orpin.vercel.app/", images:[netWoImg], description:"A modern coffee shop landing page with premium feel.\n\n▸ Clean, coffee-themed visual design\n▸ Smooth animations and hover effects\n▸ Fully responsive — mobile to desktop\n▸ Deployed on Vercel" },
  { id:"7", title:"UI Portfolio",      category:"Web",    year:"2025", client:"Personal Project", tech:["Next.js","Tailwind"],             github:"https://github.com/MohamedAlakhaly", demo:"https://ui-portfolio-mu.vercel.app/", images:[uiPortfolioImg], description:"A UI-focused portfolio demonstrating design capabilities.\n\n▸ Modern aesthetic with thoughtful typography\n▸ Smooth page transitions and micro-interactions\n▸ Deployed on Vercel" },
  { id:"8", title:"Weather Pro",       category:"Mobile", year:"2025", client:"Personal Project", tech:["Flutter","GetX","OpenWeather API"],github:"https://github.com/MohamedAlakhaly", demo:"", images:[weatherProImg1], description:"A polished weather app with real-time data.\n\n▸ Live weather data from OpenWeather API\n▸ Location-based forecasts\n▸ Clean UI with dynamic weather animations\n▸ GetX for efficient state management" },
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

export default function ProjectDetails() {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === id)
  const ci = projectsData.findIndex(p => p.id === id)
  const prevProject = projectsData[ci-1] || projectsData[projectsData.length-1]
  const nextProject = projectsData[ci+1] || projectsData[0]

  const [imgIndex, setImgIndex] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => { setImgIndex(0); setImgLoaded(false); window.scrollTo(0,0); setTimeout(()=>setIsLoaded(true),100) }, [id])

  if (!project) return <div style={{color:"#fff",padding:"2rem"}}>Project not found</div>

  const prev = () => { setImgIndex(i=>(i-1+project.images.length)%project.images.length); setImgLoaded(false) }
  const next = () => { setImgIndex(i=>(i+1)%project.images.length); setImgLoaded(false) }

  return (
    <div style={{minHeight:"100vh",background:"#050709",fontFamily:"'Syne',sans-serif",color:"#fff",overflowX:"hidden"}}>
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

        .back-link{display:inline-flex;align-items:center;gap:6px;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#444;text-decoration:none;transition:color .2s;margin-bottom:2rem;}
        .back-link:hover{color:${NEON};}

        .proj-header{display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:1.5rem;margin-bottom:3rem;}
        .proj-title{font-size:clamp(1.8rem,4vw,2.6rem);font-weight:800;color:#fff;letter-spacing:-.02em;margin:0 0 .75rem;}
        .proj-title span{-webkit-text-stroke:1.5px ${NEON};color:transparent;text-shadow:0 0 28px ${NEON}44;}
        .proj-meta{display:flex;flex-wrap:wrap;gap:6px;margin-top:.5rem;}
        .proj-meta-tag{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;padding:4px 12px;border-radius:4px;border:1px solid #ffffff0a;color:#555;background:#080b0e;}

        .proj-actions{display:flex;gap:.5rem;flex-wrap:wrap;}
        .btn-neon{padding:10px 22px;border-radius:6px;font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#050709;background:${NEON};text-decoration:none;font-family:'JetBrains Mono',monospace;transition:all .25s;box-shadow:0 0 14px ${NEON}44;border:none;cursor:pointer;display:flex;align-items:center;gap:6px;}
        .btn-neon:hover{box-shadow:0 0 24px ${NEON}88;transform:translateY(-1px);}
        .btn-ghost{padding:10px 22px;border-radius:6px;font-size:.75rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#555;background:transparent;text-decoration:none;font-family:'JetBrains Mono',monospace;border:1px solid #ffffff10;transition:all .25s;cursor:pointer;display:flex;align-items:center;gap:6px;}
        .btn-ghost:hover{border-color:${NEON}44;color:${NEON};}

        .proj-body{display:grid;grid-template-columns:1fr;gap:2rem;}
        @media(min-width:900px){.proj-body{grid-template-columns:3fr 2fr;}}

        .gallery-main{position:relative;border-radius:8px;overflow:hidden;border:1px solid ${NEON}22;background:#080b0e;aspect-ratio:16/10;}
        .gallery-main img{width:100%;height:100%;object-fit:cover;cursor:zoom-in;transition:opacity .3s;}
        .gallery-spinner{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(5,7,9,.8);z-index:2;}
        .spinner{width:32px;height:32px;border-radius:50%;border:2px solid ${NEON}22;border-top-color:${NEON};animation:spin .8s linear infinite;}
        @keyframes spin{to{transform:rotate(360deg)}}
        .gallery-nav-btn{position:absolute;top:50%;transform:translateY(-50%);width:36px;height:36px;border-radius:6px;border:1px solid ${NEON}33;background:rgba(5,7,9,.7);color:${NEON};display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .25s;z-index:3;}
        .gallery-nav-btn:hover{background:${NEON}22;}
        .gallery-counter{position:absolute;bottom:12px;right:12px;font-family:'JetBrains Mono',monospace;font-size:11px;color:${NEON};background:rgba(5,7,9,.75);padding:3px 10px;border-radius:4px;z-index:3;}
        .thumbs{display:flex;gap:6px;margin-top:.75rem;overflow-x:auto;padding-bottom:4px;}
        .thumb{flex-shrink:0;width:72px;height:54px;border-radius:5px;overflow:hidden;border:1px solid transparent;cursor:pointer;transition:all .25s;}
        .thumb.active{border-color:${NEON};box-shadow:0 0 8px ${NEON}44;}
        .thumb:not(.active):hover{border-color:${NEON}44;}
        .thumb img{width:100%;height:100%;object-fit:cover;}

        .details-panel{border:1px solid #ffffff08;border-radius:8px;background:#080b0e;padding:1.75rem;position:relative;overflow:hidden;}
        .details-panel::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(to right,${NEON}44,transparent);}
        .details-section-title{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:${NEON};margin:0 0 .75rem;}
        .details-desc{font-family:'JetBrains Mono',monospace;font-size:12px;color:#666;line-height:1.9;margin-bottom:1.75rem;}
        .details-desc p{margin:.3rem 0;}
        .tech-wrap{display:flex;flex-wrap:wrap;gap:5px;}
        .tech-tag{font-family:'JetBrains Mono',monospace;font-size:10px;padding:4px 10px;border-radius:3px;border:1px solid ${NEON}33;color:${NEON};background:${NEON}0d;}
        .divider{height:1px;background:linear-gradient(to right,${NEON}22,transparent);margin:1.5rem 0;}

        .more-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5px;border:1px solid #ffffff08;border-radius:8px;overflow:hidden;}
        .more-card{background:#080b0e;padding:1.25rem;display:flex;align-items:center;gap:12px;text-decoration:none;transition:background .25s;position:relative;overflow:hidden;}
        .more-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(to right,${NEON}33,transparent);transform:scaleX(0);transform-origin:left;transition:transform .35s;}
        .more-card:hover{background:#0c110a;}
        .more-card:hover::before{transform:scaleX(1);}
        .more-thumb{width:52px;height:52px;border-radius:6px;overflow:hidden;flex-shrink:0;border:1px solid ${NEON}22;}
        .more-thumb img{width:100%;height:100%;object-fit:cover;}
        .more-dir{font-family:'JetBrains Mono',monospace;font-size:10px;color:#333;text-transform:uppercase;letter-spacing:.1em;}
        .more-title{font-size:.9rem;font-weight:700;color:#666;margin-top:2px;transition:color .25s;}
        .more-card:hover .more-title{color:#fff;}
        .more-card.right{flex-direction:row-reverse;text-align:right;}
        .more-card.right::before{transform-origin:right;}

        .lightbox{position:fixed;inset:0;background:rgba(0,0,0,.92);backdrop-filter:blur(10px);z-index:300;display:flex;align-items:center;justify-content:center;padding:1.5rem;}
        .lightbox img{max-width:100%;max-height:90vh;object-fit:contain;border-radius:6px;border:1px solid ${NEON}22;}
        .lb-close{position:fixed;top:1.25rem;right:1.25rem;width:36px;height:36px;border-radius:6px;background:rgba(5,7,9,.8);border:1px solid #ffffff15;color:#555;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .25s;}
        .lb-close:hover{border-color:${NEON}44;color:${NEON};}
      `}</style>

      <div className="page-grid"/>
      <ParticleCanvas/>
      <div className="orb orb-1"/><div className="orb orb-2"/><div className="orb orb-3"/>
      <div className="scanline"/>

      {[["tl","M4 28 L4 4 L28 4"],["tr","M60 28 L60 4 L32 4"],["bl","M4 32 L4 60 L28 60"],["br","M60 32 L60 60 L32 60"]].map(([pos,d])=>(
        <div key={pos} className={`corner corner-${pos}`} style={{width:64,height:64}}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d={d} stroke={NEON} strokeWidth="1.5" opacity=".3"/>
          </svg>
        </div>
      ))}

      <Navbar/>

      <div style={{position:"relative",zIndex:2,maxWidth:1100,margin:"0 auto",padding:"140px 1.5rem 5rem",
        opacity:isLoaded?1:0,transform:isLoaded?"translateY(0)":"translateY(20px)",transition:"all .6s"}}>

        <Link to="/projects" className="back-link">
          <FontAwesomeIcon icon={faChevronLeft} style={{fontSize:10}}/> Back to Projects
        </Link>

        <div className="proj-header">
          <div>
            <h1 className="proj-title">
              {project.title.split(" ").map((w,i)=> i===project.title.split(" ").length-1 ? <span key={i}>{w}</span> : w+" ")}
            </h1>
            <div className="proj-meta">
              <span className="proj-meta-tag">{project.category}</span>
              <span className="proj-meta-tag">{project.year}</span>
              <span className="proj-meta-tag">{project.client}</span>
            </div>
          </div>
          <div className="proj-actions">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-neon">
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{fontSize:10}}/> Live Demo
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <FontAwesomeIcon icon={faGithub} style={{fontSize:12}}/> GitHub
            </a>
          </div>
        </div>

        <div className="proj-body" style={{marginBottom:"3rem"}}>
          <div>
            <div className="gallery-main" onClick={() => setLightbox(true)}>
              {!imgLoaded && <div className="gallery-spinner"><div className="spinner"/></div>}
              <img src={project.images[imgIndex]||"/placeholder.svg"} alt={project.title}
                style={{opacity:imgLoaded?1:0}} onLoad={() => setImgLoaded(true)}/>
              {project.images.length > 1 && (
                <>
                  <button className="gallery-nav-btn" style={{left:12}} onClick={e=>{e.stopPropagation();prev()}}><FontAwesomeIcon icon={faArrowLeft} style={{fontSize:12}}/></button>
                  <button className="gallery-nav-btn" style={{right:12}} onClick={e=>{e.stopPropagation();next()}}><FontAwesomeIcon icon={faArrowRight} style={{fontSize:12}}/></button>
                  <span className="gallery-counter">{imgIndex+1}/{project.images.length}</span>
                </>
              )}
            </div>
            {project.images.length > 1 && (
              <div className="thumbs">
                {project.images.map((img,i)=>(
                  <div key={i} className={`thumb ${imgIndex===i?"active":""}`} onClick={()=>{setImgIndex(i);setImgLoaded(false)}}>
                    <img src={img||"/placeholder.svg"} alt={`thumb ${i+1}`}/>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="details-panel">
            <p className="details-section-title">About this project</p>
            <div className="details-desc">
              {project.description.split("\n").map((line,i)=><p key={i}>{line}</p>)}
            </div>
            <div className="divider"/>
            <p className="details-section-title">Tech stack</p>
            <div className="tech-wrap">
              {project.tech.map(t=><span key={t} className="tech-tag">{t}</span>)}
            </div>
          </div>
        </div>

        <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,letterSpacing:".15em",textTransform:"uppercase",color:NEON,marginBottom:"1rem",display:"flex",alignItems:"center",gap:8}}>
          <span style={{display:"inline-block",width:28,height:1,background:NEON}}/>more projects
        </p>
        <div className="more-grid">
          <Link to={`/projects/${prevProject.id}`} className="more-card">
            <div className="more-thumb"><img src={prevProject.images[0]||"/placeholder.svg"} alt={prevProject.title}/></div>
            <div><p className="more-dir"><FontAwesomeIcon icon={faArrowLeft} style={{fontSize:9,marginRight:4}}/>prev</p><p className="more-title">{prevProject.title}</p></div>
          </Link>
          <Link to={`/projects/${nextProject.id}`} className="more-card right">
            <div className="more-thumb"><img src={nextProject.images[0]||"/placeholder.svg"} alt={nextProject.title}/></div>
            <div><p className="more-dir">next<FontAwesomeIcon icon={faArrowRight} style={{fontSize:9,marginLeft:4}}/></p><p className="more-title">{nextProject.title}</p></div>
          </Link>
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={()=>setLightbox(false)}>
          <button className="lb-close" onClick={()=>setLightbox(false)}><FontAwesomeIcon icon={faXmark} style={{fontSize:13}}/></button>
          <img src={project.images[imgIndex]||"/placeholder.svg"} alt={project.title} onClick={e=>e.stopPropagation()}/>
        </div>
      )}
    </div>
  )
}