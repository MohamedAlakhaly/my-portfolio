"use client"

import { useState, useEffect, useRef } from "react"
import Navbar from "../components/navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft, faDownload, faExternalLinkAlt, faXmark, faTableCells, faFilm } from "@fortawesome/free-solid-svg-icons"

import dartCertification        from "../assets/certifications_image/dart_certification_img.png"
import flutterCertification     from "../assets/certifications_image/flutter_certification_img.png"
import tailwindCertification    from "../assets/certifications_image/tailwind_certification_img.png"
import bootstrapCertification   from "../assets/certifications_image/bootstrap_certification_img.png"
import itSharksCertification    from "../assets/certifications_image/it_sharks_certification_img.jpg"
import itSharks2Certification   from "../assets/certifications_image/it_sharks2_certification_img.jpg"
import ideasAndConceptsCertification from "../assets/certifications_image/ideas_and_concepts_certification_img.jpg"

const NEON = "#39ff14"

const certifications = [
  { id:1, title:"Developing Websites And Front-Ends With Bootstrap", issuer:"Coursera & IPM",                           date:"Apr 2, 2025",  image:bootstrapCertification,        verifyLink:"https://coursera.org/share/8927d7f420a8f0e8565aabec1451aa92", downloadLink:"/certifications_pdf/bootstrap_certification.pdf",  category:"Web" },
  { id:2, title:"Introduction To Dart",                               issuer:"Coursera & Google Cloud",                  date:"Dec 7, 2024",  image:dartCertification,             verifyLink:"https://coursera.org/share/09660e6fe77c82cdc446101f8875c14f", downloadLink:"/certifications_pdf/dart_certification.pdf",       category:"Mobile" },
  { id:3, title:"Learn Tailwind CSS",                                 issuer:"Coursera & SCRIMBA",                       date:"Dec 7, 2024",  image:tailwindCertification,         verifyLink:"#",                                                           downloadLink:"/certificates/web-cert.pdf",                       category:"Web" },
  { id:4, title:"Working In Flutter Applications",                    issuer:"Ideas And Concepts Company",               date:"Dec 1, 2024",  image:ideasAndConceptsCertification, verifyLink:"#",                                                           downloadLink:"/certifications_pdf/ideas_and_concepts.pdf",       category:"Mobile" },
  { id:5, title:"Mobile Application Diploma (Dart / Flutter)",        issuer:"IT Sharks Company",                        date:"Apr 18, 2024", image:itSharks2Certification,        verifyLink:"#",                                                           downloadLink:"/certifications_pdf/it_sharks2.pdf",               category:"Mobile" },
  { id:6, title:"Mobile Application Diploma (Dart / Flutter)",        issuer:"IT Sharks & Egyptian Ministry Of Foreign Affairs", date:"May 12, 2024", image:itSharksCertification, verifyLink:"#",                                                           downloadLink:"/certifications_pdf/it_sharks.pdf",                category:"Mobile" },
  { id:7, title:"Getting Started With Flutter Development",           issuer:"Coursera & Google Cloud",                  date:"Feb 6, 2024",  image:flutterCertification,          verifyLink:"https://coursera.org/verify/TFXDJ7DFSH4",                     downloadLink:"/certifications_pdf/flutter_certification.pdf",    category:"Mobile" },
]

const categories = ["All", "Web", "Mobile"]

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

export default function Certifications() {
  const [filter, setFilter]             = useState("All")
  const [viewMode, setViewMode]         = useState("grid")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCert, setSelectedCert] = useState(null)
  const [isLoaded, setIsLoaded]         = useState(false)
  const [hoveredId, setHoveredId]       = useState(null)

  const filtered = filter === "All" ? certifications : certifications.filter(c => c.category === filter)
  const cert = filtered[currentIndex]

  const prev = () => setCurrentIndex(i => (i-1+filtered.length)%filtered.length)
  const next = () => setCurrentIndex(i => (i+1)%filtered.length)

  useEffect(() => {
    const onKey = e => { if(e.key==="ArrowRight") next(); if(e.key==="ArrowLeft") prev() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [filtered.length])

  useEffect(() => { setCurrentIndex(0) }, [filter])
  useEffect(() => { setTimeout(() => setIsLoaded(true), 100) }, [])

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

        /* header */
        .section-label{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${NEON};margin-bottom:.75rem;display:flex;align-items:center;gap:8px;}
        .section-label::before{content:'';display:inline-block;width:28px;height:1px;background:${NEON};}
        .section-title{font-size:clamp(2rem,4vw,2.8rem);font-weight:800;color:#fff;margin:0 0 .5rem;letter-spacing:-.02em;line-height:1.1;}
        .section-title span{-webkit-text-stroke:1.5px ${NEON};color:transparent;text-shadow:0 0 28px ${NEON}44;}
        .section-sub{font-family:'JetBrains Mono',monospace;font-size:12px;color:#666;margin-bottom:2.5rem;}

        /* toolbar */
        .toolbar{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:2.5rem;}
        .tab-group{display:flex;gap:2px;background:#080b0e;border:1px solid #ffffff08;border-radius:8px;padding:3px;}
        .tab-btn{padding:7px 18px;border-radius:6px;border:none;cursor:pointer;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;background:transparent;color:#444;transition:all .25s;display:flex;align-items:center;gap:6px;}
        .tab-btn:hover{color:${NEON};}
        .tab-btn.active{background:${NEON}15;border:1px solid ${NEON}33;color:${NEON};}

        /* ── GRID cards ── */
        .cert-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.5px;border:1px solid #ffffff08;border-radius:12px;overflow:hidden;}

        .cert-card{position:relative;background:#080b0e;cursor:pointer;overflow:hidden;transition:background .3s;
          opacity:0;transform:translateY(20px);transition:opacity .5s,transform .5s,background .3s;}
        .cert-card.visible{opacity:1;transform:translateY(0);}
        .cert-card:hover{background:#0c110a;}

        /* scan lines */
        .cc-scan-t{position:absolute;top:0;left:0;right:0;height:1.5px;background:linear-gradient(to right,${NEON},transparent);transform:scaleX(0);transform-origin:left;transition:transform .4s;z-index:3;}
        .cert-card:hover .cc-scan-t{transform:scaleX(1);}
        .cc-scan-b{position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(to left,${NEON}44,transparent);transform:scaleX(0);transform-origin:right;transition:transform .4s .1s;z-index:3;}
        .cert-card:hover .cc-scan-b{transform:scaleX(1);}

        /* corner brackets */
        .cc-bracket{position:absolute;width:14px;height:14px;opacity:0;transition:all .35s;}
        .cc-bracket-tl{top:10px;left:10px;border-top:1.5px solid ${NEON}66;border-left:1.5px solid ${NEON}66;}
        .cc-bracket-br{bottom:10px;right:10px;border-bottom:1.5px solid ${NEON}66;border-right:1.5px solid ${NEON}66;}
        .cert-card:hover .cc-bracket{opacity:1;width:18px;height:18px;}

        /* neon glow */
        .cc-glow{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 20% 30%,${NEON}08,transparent 60%);opacity:0;transition:opacity .4s;}
        .cert-card:hover .cc-glow{opacity:1;}

        /* image */
        .cc-img-wrap{position:relative;height:175px;overflow:hidden;}
        .cc-img-wrap img{width:100%;height:100%;object-fit:cover;filter:brightness(.75) saturate(.8);transition:transform .6s,filter .4s;}
        .cert-card:hover .cc-img-wrap img{transform:scale(1.07);filter:brightness(.55) saturate(1) blur(2px);}
        .cc-img-overlay{position:absolute;inset:0;background:linear-gradient(to top,#050709 0%,transparent 55%);}

        /* image hover overlay */
        .cc-img-hover{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .35s;z-index:2;}
        .cert-card:hover .cc-img-hover{opacity:1;}
        .cc-img-hover span{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:${NEON};background:rgba(5,7,9,.75);padding:6px 16px;border-radius:4px;border:1px solid ${NEON}33;}

        .cc-badge{position:absolute;top:12px;left:12px;font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:.12em;text-transform:uppercase;padding:3px 10px;border-radius:3px;border:1px solid ${NEON}44;background:${NEON}11;color:${NEON};z-index:3;}

        .cc-num{position:absolute;top:10px;right:14px;font-family:'Syne',sans-serif;font-size:3.5rem;font-weight:800;color:${NEON};opacity:.04;line-height:1;pointer-events:none;transition:opacity .4s;}
        .cert-card:hover .cc-num{opacity:.08;}

        /* body */
        .cc-body{padding:1.25rem 1.5rem 1.5rem;position:relative;}
        .cc-title{font-size:.92rem;font-weight:700;color:#888;margin:0 0 .4rem;line-height:1.4;transition:color .3s;}
        .cert-card:hover .cc-title{color:#fff;}
        .cc-issuer{font-family:'JetBrains Mono',monospace;font-size:10px;color:#444;margin-bottom:.2rem;transition:color .3s;}
        .cert-card:hover .cc-issuer{color:#666;}
        .cc-date{font-family:'JetBrains Mono',monospace;font-size:9px;color:#2a2a2a;transition:color .3s;}
        .cert-card:hover .cc-date{color:#444;}

        /* card actions */
        .cc-actions{display:flex;justify-content:space-between;align-items:center;margin-top:1rem;}
        .cc-dl{font-family:'JetBrains Mono',monospace;font-size:10px;color:${NEON};display:flex;align-items:center;gap:5px;text-decoration:none;opacity:.7;transition:opacity .2s;}
        .cc-dl:hover{opacity:1;}
        .cc-view{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.08em;text-transform:uppercase;background:none;border:1px solid #ffffff0a;border-radius:4px;color:#333;padding:4px 12px;cursor:pointer;transition:all .25s;}
        .cc-view:hover{border-color:${NEON}44;color:${NEON};}

        /* ── CAROUSEL ── */
        .carousel-wrap{display:flex;flex-wrap:wrap;gap:3rem;align-items:flex-start;border:1px solid #ffffff08;border-radius:12px;padding:2.5rem;background:#080b0e;position:relative;overflow:hidden;}
        .carousel-wrap::before{content:'';position:absolute;top:0;left:0;right:0;height:1.5px;background:linear-gradient(to right,${NEON}55,transparent);}
        .carousel-wrap::after{content:'';position:absolute;bottom:0;right:0;left:0;height:1px;background:linear-gradient(to left,${NEON}22,transparent);}
        .carousel-left{flex:1 1 280px;display:flex;flex-direction:column;gap:1.25rem;}
        .carousel-right{flex:1 1 320px;}

        .car-num{font-family:'JetBrains Mono',monospace;font-size:11px;color:#2a2a2a;display:flex;align-items:center;gap:8px;}
        .car-num span{color:${NEON};}
        .car-cat{font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:.12em;text-transform:uppercase;padding:3px 10px;border-radius:3px;border:1px solid ${NEON}33;background:${NEON}0d;color:${NEON};width:fit-content;}
        .car-title{font-size:1.4rem;font-weight:800;color:#fff;line-height:1.3;}
        .car-meta{display:flex;flex-direction:column;gap:8px;}
        .car-meta-row{display:flex;gap:10px;font-family:'JetBrains Mono',monospace;font-size:11px;}
        .car-meta-label{color:#333;min-width:60px;text-transform:uppercase;font-size:9px;letter-spacing:.1em;padding-top:2px;}
        .car-meta-val{color:#666;}

        .car-btns{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:.5rem;}
        .btn-neon{padding:10px 22px;border-radius:6px;font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#050709;background:${NEON};text-decoration:none;font-family:'JetBrains Mono',monospace;transition:all .25s;box-shadow:0 0 14px ${NEON}44;border:none;cursor:pointer;display:flex;align-items:center;gap:6px;}
        .btn-neon:hover{box-shadow:0 0 24px ${NEON}88;transform:translateY(-1px);}
        .btn-ghost{padding:10px 22px;border-radius:6px;font-size:.75rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#555;background:transparent;text-decoration:none;font-family:'JetBrains Mono',monospace;border:1px solid #ffffff10;transition:all .25s;cursor:pointer;display:flex;align-items:center;gap:6px;}
        .btn-ghost:hover{border-color:${NEON}44;color:${NEON};}

        .car-img-wrap{position:relative;border-radius:8px;overflow:hidden;border:1px solid ${NEON}22;box-shadow:0 0 30px ${NEON}0d;}
        .car-img-wrap img{width:100%;display:block;}
        .car-img-wrap::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,${NEON}08,transparent 50%);pointer-events:none;z-index:1;}

        .car-nav{display:flex;justify-content:space-between;align-items:center;margin-top:1.25rem;}
        .car-counter{font-family:'JetBrains Mono',monospace;font-size:11px;color:#2a2a2a;}
        .car-counter span{color:${NEON};}
        .nav-arrows{display:flex;gap:.5rem;}
        .nav-arrow{width:38px;height:38px;border-radius:6px;background:#0c110a;border:1px solid ${NEON}22;color:${NEON};display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .25s;}
        .nav-arrow:hover{background:${NEON}18;border-color:${NEON}55;box-shadow:0 0 10px ${NEON}33;}

        /* ── MODAL ── */
        .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.88);backdrop-filter:blur(10px);z-index:200;display:flex;align-items:center;justify-content:center;padding:1.5rem;}
        .modal-box{background:#080b0e;border:1px solid ${NEON}22;border-radius:12px;max-width:800px;width:100%;max-height:90vh;overflow-y:auto;padding:2rem;position:relative;box-shadow:0 0 50px ${NEON}0d;}
        .modal-box::before{content:'';position:absolute;top:0;left:0;right:0;height:1.5px;background:linear-gradient(to right,${NEON}66,transparent);}
        .modal-close{position:absolute;top:1rem;right:1rem;width:34px;height:34px;border-radius:6px;background:none;border:1px solid #ffffff10;color:#444;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .25s;}
        .modal-close:hover{border-color:${NEON}44;color:${NEON};}
        .modal-title{font-size:1.3rem;font-weight:800;color:#fff;margin:0 0 .25rem;}
        .modal-issuer{font-family:'JetBrains Mono',monospace;font-size:12px;color:#444;margin-bottom:1.5rem;}
        .modal-img{border-radius:8px;overflow:hidden;border:1px solid ${NEON}22;margin-bottom:1.5rem;}
        .modal-img img{width:100%;display:block;}
        .modal-meta{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:1.5rem;}
        .modal-meta-row{font-family:'JetBrains Mono',monospace;font-size:12px;}
        .modal-meta-label{color:#333;font-size:9px;letter-spacing:.1em;text-transform:uppercase;margin-bottom:3px;}
        .modal-meta-val{color:#666;}
      `}</style>

      {/* bg */}
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

      <div style={{position:"relative",zIndex:2,maxWidth:1100,margin:"0 auto",padding:"140px 1.5rem 5rem",
        opacity:isLoaded?1:0,transform:isLoaded?"translateY(0)":"translateY(-16px)",transition:"all .6s"}}>

        {/* header */}
        <p className="section-label">proof of work</p>
        <h1 className="section-title">My <span>Certifications</span></h1>
        <p className="section-sub">// {certifications.length} certifications earned across web & mobile</p>

        {/* toolbar */}
        <div className="toolbar">
          <div className="tab-group">
            <button className={`tab-btn ${viewMode==="grid"?"active":""}`} onClick={()=>setViewMode("grid")}>
              <FontAwesomeIcon icon={faTableCells}/> Grid
            </button>
            <button className={`tab-btn ${viewMode==="carousel"?"active":""}`} onClick={()=>setViewMode("carousel")}>
              <FontAwesomeIcon icon={faFilm}/> Carousel
            </button>
          </div>
          <div className="tab-group" style={{marginLeft:"auto"}}>
            {categories.map(c=>(
              <button key={c} className={`tab-btn ${filter===c?"active":""}`} onClick={()=>setFilter(c)}>{c}</button>
            ))}
          </div>
        </div>

        {/* ── GRID ── */}
        {viewMode==="grid" && (
          <div className="cert-grid">
            {filtered.map((cert,i)=>(
              <div key={cert.id}
                className={`cert-card ${isLoaded?"visible":""}`}
                style={{transitionDelay:`${i*.07}s`}}
                onClick={()=>setSelectedCert(cert)}
                onMouseEnter={()=>setHoveredId(cert.id)}
                onMouseLeave={()=>setHoveredId(null)}
              >
                <div className="cc-scan-t"/><div className="cc-scan-b"/>
                <div className="cc-bracket cc-bracket-tl"/><div className="cc-bracket cc-bracket-br"/>
                <div className="cc-glow"/>
                <div className="cc-num">{String(i+1).padStart(2,"0")}</div>

                <div className="cc-img-wrap">
                  <img src={cert.image||"/placeholder.svg"} alt={cert.title}/>
                  <div className="cc-img-overlay"/>
                  <div className="cc-img-hover"><span>Click to expand</span></div>
                  <span className="cc-badge">{cert.category}</span>
                </div>

                <div className="cc-body">
                  <h3 className="cc-title">{cert.title}</h3>
                  <p className="cc-issuer">{cert.issuer}</p>
                  <p className="cc-date">{cert.date}</p>
                  <div className="cc-actions">
                    <a href={cert.downloadLink} className="cc-dl" onClick={e=>e.stopPropagation()}>
                      <FontAwesomeIcon icon={faDownload}/> Download
                    </a>
                    <button className="cc-view">View →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── CAROUSEL ── */}
        {viewMode==="carousel" && filtered.length>0 && cert && (
          <div className="carousel-wrap">
            <div className="carousel-left">
              <div className="car-num">
                <span>{String(currentIndex+1).padStart(2,"0")}</span>
                / {String(filtered.length).padStart(2,"0")}
              </div>
              <span className="car-cat">{cert.category}</span>
              <h2 className="car-title">{cert.title}</h2>
              <div className="car-meta">
                <div className="car-meta-row">
                  <span className="car-meta-label">issuer</span>
                  <span className="car-meta-val">{cert.issuer}</span>
                </div>
                <div className="car-meta-row">
                  <span className="car-meta-label">date</span>
                  <span className="car-meta-val">{cert.date}</span>
                </div>
              </div>
              <div className="car-btns">
                <a href={cert.downloadLink} className="btn-neon">
                  <FontAwesomeIcon icon={faDownload}/> Download
                </a>
                <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <FontAwesomeIcon icon={faExternalLinkAlt}/> Verify
                </a>
              </div>
            </div>

            <div className="carousel-right">
              <div className="car-img-wrap">
                <img src={cert.image||"/placeholder.svg"} alt={cert.title}/>
              </div>
              <div className="car-nav">
                <span className="car-counter"><span>{currentIndex+1}</span> / {filtered.length}</span>
                <div className="nav-arrows">
                  <button className="nav-arrow" onClick={prev}><FontAwesomeIcon icon={faArrowLeft} style={{fontSize:13}}/></button>
                  <button className="nav-arrow" onClick={next}><FontAwesomeIcon icon={faArrowRight} style={{fontSize:13}}/></button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── MODAL ── */}
      {selectedCert && (
        <div className="modal-overlay" onClick={()=>setSelectedCert(null)}>
          <div className="modal-box" onClick={e=>e.stopPropagation()}>
            <button className="modal-close" onClick={()=>setSelectedCert(null)}>
              <FontAwesomeIcon icon={faXmark} style={{fontSize:14}}/>
            </button>
            <h2 className="modal-title">{selectedCert.title}</h2>
            <p className="modal-issuer">{selectedCert.issuer}</p>
            <div className="modal-img"><img src={selectedCert.image||"/placeholder.svg"} alt={selectedCert.title}/></div>
            <div className="modal-meta">
              <div className="modal-meta-row">
                <p className="modal-meta-label">date</p>
                <p className="modal-meta-val">{selectedCert.date}</p>
              </div>
              <div className="modal-meta-row">
                <p className="modal-meta-label">category</p>
                <p className="modal-meta-val">{selectedCert.category}</p>
              </div>
            </div>
            <div className="car-btns">
              <a href={selectedCert.downloadLink} className="btn-neon">
                <FontAwesomeIcon icon={faDownload}/> Download
              </a>
              <a href={selectedCert.verifyLink} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FontAwesomeIcon icon={faExternalLinkAlt}/> Verify
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}