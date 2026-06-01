import Navbar from "../components/navbar"
import img1 from "../assets/1780263431513.png"
import SkillsCard from "../components/skills_card"
import { useState, useEffect, useRef } from "react"

import htmlLogo        from "../assets/web_skills/html.svg"
import cssLogo         from "../assets/web_skills/css.svg"
import sassLogo        from "../assets/web_skills/sass.svg"
import javascriptLogo  from "../assets/web_skills/javascript.svg"
import bootstrapLogo   from "../assets/web_skills/bootstrap.svg"
import tailwindLogo    from "../assets/web_skills/tailwind.svg"
import daisyUILogo     from "../assets/web_skills/daisy.svg"
import reactLogo       from "../assets/web_skills/react.svg"
import nodeLogo        from "../assets/web_skills/node.svg"
import expressJsLogo   from "../assets/web_skills/express_js.svg"
import mongoLogo       from "../assets/web_skills/mondoDB.svg"
import dartLogo        from "../assets/mobile_skills/dart.svg"
import flutterLogo     from "../assets/mobile_skills/flutter.svg"
import firebaseLogo    from "../assets/mobile_skills/firebase.svg"
import getxLogo        from "../assets/mobile_skills/getx.svg"
import sqliteLogo      from "../assets/mobile_skills/sqlite.svg"
import apiLogo         from "../assets/mobile_skills/API.svg"
import gitLogo         from "../assets/tools_skills/git.svg"
import githubLogo      from "../assets/tools_skills/github.svg"
import npmLogo         from "../assets/tools_skills/npm.svg"
import vscodeLogo      from "../assets/tools_skills/vscode.svg"
import androidStudioLogo from "../assets/tools_skills/android_studio.svg"

const NEON = "#39ff14"

const info = [
  { label:"name",        value:"Mohamed Al-Akhaly" },
  { label:"age",         value:"22 years old" },
  { label:"city",        value:"Chimay, Belgium" },
  { label:"nationality", value:"Yemeni" },
  { label:"experience",  value:"6+ years" },
  { label:"status",      value:"Single" },
  { label:"full-time",   value:"Available" },
  { label:"freelance",   value:"Available" },
  { label:"phone",       value:"(+32) 466 16 12 89" },
  { label:"email",       value:"alakhail755@gmail.com" },
  { label:"languages",   value:"Arabic · English · FR (basic) · NL (basic)" },
]

const skillTabs = [
  { key:"web",    label:"Web Dev",    index:"01" },
  { key:"mobile", label:"Mobile Dev", index:"02" },
  { key:"tools",  label:"Tools",      index:"03" },
]

const skillMap = {
  web:    [{skill:"HTML",skillLogo:htmlLogo},{skill:"CSS",skillLogo:cssLogo},{skill:"SASS",skillLogo:sassLogo},{skill:"Bootstrap",skillLogo:bootstrapLogo},{skill:"Tailwind",skillLogo:tailwindLogo},{skill:"Daisy UI",skillLogo:daisyUILogo},{skill:"JavaScript",skillLogo:javascriptLogo},{skill:"React",skillLogo:reactLogo},{skill:"Node.js",skillLogo:nodeLogo},{skill:"Express",skillLogo:expressJsLogo},{skill:"MongoDB",skillLogo:mongoLogo}],
  mobile: [{skill:"Dart",skillLogo:dartLogo},{skill:"Flutter",skillLogo:flutterLogo},{skill:"Firebase",skillLogo:firebaseLogo},{skill:"GetX",skillLogo:getxLogo},{skill:"SQLite",skillLogo:sqliteLogo},{skill:"REST API",skillLogo:apiLogo},{skill:"Node.js",skillLogo:nodeLogo},{skill:"Express",skillLogo:expressJsLogo},{skill:"MongoDB",skillLogo:mongoLogo}],
  tools:  [{skill:"Git",skillLogo:gitLogo},{skill:"GitHub",skillLogo:githubLogo},{skill:"npm",skillLogo:npmLogo},{skill:"pub",skillLogo:dartLogo},{skill:"VS Code",skillLogo:vscodeLogo},{skill:"Android Studio",skillLogo:androidStudioLogo}],
}

const stats = [
  { value:"6+",  label:"Years Exp" },
  { value:"8+", label:"Projects" },
  { value:"5",   label:"Stacks" },
  { value:"2",   label:"Countries" },
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

export default function About() {
  const [activeSkill, setActiveSkill] = useState("web")
  const [isLoaded, setIsLoaded]       = useState(false)

  useEffect(() => { setTimeout(() => setIsLoaded(true), 100) }, [])

  return (
    <div style={{minHeight:"100vh",background:"#050709",fontFamily:"'Syne',sans-serif",color:"#fff",overflowX:"hidden"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        /* ── background ── */
        .pg{position:fixed;inset:0;pointer-events:none;z-index:0;
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

        /* ── labels & titles ── */
        .sl{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${NEON};margin-bottom:.75rem;display:flex;align-items:center;gap:8px;}
        .sl::before{content:'';display:inline-block;width:28px;height:1px;background:${NEON};}
        .st{font-size:clamp(1.8rem,4vw,2.8rem);font-weight:800;color:#fff;margin:0 0 2.5rem;letter-spacing:-.02em;line-height:1.1;}
        .st span{-webkit-text-stroke:1.5px ${NEON};color:transparent;text-shadow:0 0 28px ${NEON}44;}

        /* ── profile card ── */
        .profile-card{
          display:flex;flex-direction:column;align-items:center;gap:1.5rem;
          border:1px solid #ffffff08;border-radius:12px;
          background:#080b0e;padding:2.5rem 2rem;
          position:relative;overflow:hidden;
          flex:0 0 auto;width:240px;
        }
        .profile-card::before{content:'';position:absolute;top:0;left:0;right:0;height:1.5px;background:linear-gradient(to right,${NEON}55,transparent);}
        .profile-card::after{content:'';position:absolute;bottom:0;right:0;left:0;height:1px;background:linear-gradient(to left,${NEON}22,transparent);}

        /* spinning ring */
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}

        .profile-status{
          display:flex;align-items:center;gap:6px;
          font-family:'JetBrains Mono',monospace;font-size:10px;
          letter-spacing:.1em;text-transform:uppercase;color:#4ade80;
          background:#4ade8011;border:1px solid #4ade8033;
          padding:4px 12px;border-radius:20px;
        }

        /* stats row */
        .stats-row{display:flex;gap:0;border:1px solid #ffffff08;border-radius:8px;overflow:hidden;margin-bottom:2.5rem;}
        .stat-cell{flex:1;padding:1.25rem 1rem;text-align:center;border-right:1px solid #ffffff08;background:#080b0e;transition:background .25s;}
        .stat-cell:last-child{border-right:none;}
        .stat-cell:hover{background:${NEON}06;}
        .stat-val{font-size:1.6rem;font-weight:800;color:${NEON};text-shadow:0 0 12px ${NEON}55;line-height:1;}
        .stat-lbl{font-family:'JetBrains Mono',monospace;font-size:9px;color:#666;letter-spacing:.1em;text-transform:uppercase;margin-top:4px;}

        /* bio */
        .bio{font-family:'JetBrains Mono',monospace;font-size:.85rem;color:#666;line-height:1.9;border-left:2px solid ${NEON}22;padding-left:1rem;margin-bottom:2rem;}

        /* info grid */
        .info-grid{display:grid;grid-template-columns:1fr 1fr;gap:0;border:1px solid #ffffff08;border-radius:8px;overflow:hidden;}
        @media(max-width:540px){.info-grid{grid-template-columns:1fr;}}
        .info-row{display:flex;align-items:baseline;gap:10px;padding:9px 14px;border-bottom:1px solid #ffffff06;border-right:1px solid #ffffff06;font-family:'JetBrains Mono',monospace;font-size:11px;transition:background .2s;position:relative;}
        .info-row::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:${NEON};transform:scaleY(0);transform-origin:top;transition:transform .25s;}
        .info-row:hover{background:${NEON}06;}
        .info-row:hover::before{transform:scaleY(1);}
        .info-lbl{color:${NEON};min-width:85px;font-size:9px;letter-spacing:.12em;text-transform:uppercase;}
        .info-val{color:#777;}

        /* ── skills ── */
        .tabs{display:flex;gap:2px;border:1px solid #ffffff08;border-radius:8px;padding:4px;background:#080b0e;margin-bottom:2rem;width:fit-content;}
        .tab-btn{padding:8px 22px;border-radius:6px;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;border:none;cursor:pointer;background:transparent;color:#444;transition:all .25s;display:flex;align-items:center;gap:6px;}
        .tab-btn:hover{color:${NEON};}
        .tab-btn.active{background:${NEON}15;border:1px solid ${NEON}33;color:${NEON};box-shadow:0 0 12px ${NEON}22;}
        .tab-num{font-size:9px;opacity:.5;}

        .skills-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:1px;border:1px solid #ffffff08;border-radius:8px;overflow:hidden;}

        .section-divider{height:1px;background:linear-gradient(to right,${NEON}33,transparent);margin:4rem 0;}

        /* layout */
        .about-layout{display:flex;flex-wrap:wrap;gap:2.5rem;align-items:flex-start;margin-bottom:2rem;}
        .about-right{flex:1 1 320px;display:flex;flex-direction:column;gap:0;}
      `}</style>

      <div className="pg"/>
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
        opacity:isLoaded?1:0,transform:isLoaded?"translateY(0)":"translateY(-16px)",transition:"all .6s"}}>

        {/* ── HEADER ── */}
        <p className="sl">who i am</p>
        <h1 className="st">About <span>Me</span></h1>

        {/* ── STATS ── */}
        <div className="stats-row">
          {stats.map(({value,label})=>(
            <div key={label} className="stat-cell">
              <div className="stat-val">{value}</div>
              <div className="stat-lbl">{label}</div>
            </div>
          ))}
        </div>

        {/* ── ABOUT LAYOUT ── */}
        <div className="about-layout">

          {/* profile card */}
          <div className="profile-card">
            {/* spinning ring */}
            <div style={{position:"relative",width:160,height:160}}>
              <div style={{position:"absolute",inset:-8,borderRadius:"50%",background:`conic-gradient(from 0deg,${NEON},#00eaff,transparent 60%,${NEON})`,animation:"spin 5s linear infinite",padding:2}}>
                <div style={{width:"100%",height:"100%",borderRadius:"50%",background:"#080b0e"}}/>
              </div>
              <div style={{position:"absolute",inset:-20,borderRadius:"50%",background:`radial-gradient(circle,${NEON}15 0%,transparent 70%)`,animation:"orbFloat 3s ease-in-out infinite"}}/>
              <img src={img1||"/placeholder.svg"} alt="Mohamed Al-Akhaly"
                style={{width:160,height:160,borderRadius:"50%",objectFit:"cover",position:"relative",zIndex:2,border:`2px solid ${NEON}44`,filter:"brightness(.95) contrast(1.05)"}}/>
            </div>

            {/* name */}
            <div style={{textAlign:"center"}}>
              <p style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"1.1rem",color:"#fff",margin:"0 0 4px"}}>Mohamed Al-Akhaly</p>
              <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:NEON,letterSpacing:".1em",textTransform:"uppercase"}}>Software Engineer</p>
            </div>

            {/* status */}
            <div className="profile-status">
              <span style={{width:6,height:6,borderRadius:"50%",background:"#4ade80",boxShadow:"0 0 6px #4ade80",animation:"orbFloat 1.5s ease-in-out infinite"}}/>
              Open to work
            </div>

            {/* quick links */}
            <div style={{display:"flex",flexDirection:"column",gap:6,width:"100%"}}>
              {[["alakhail755@gmail.com","mailto:alakhail755@gmail.com"],["+32 466 16 12 89","tel:+32466161289"],["Chimay, Belgium",null]].map(([val,href])=>(
                <a key={val} href={href||undefined}
                  style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,color:"#777",textDecoration:"none",
                    padding:"6px 10px",borderRadius:5,border:"1px solid #ffffff06",background:"#050709",
                    transition:"all .2s",display:"block",textAlign:"center",letterSpacing:".04em"}}
                  onMouseEnter={e=>{e.currentTarget.style.color=NEON;e.currentTarget.style.borderColor=`${NEON}33`}}
                  onMouseLeave={e=>{e.currentTarget.style.color="#444";e.currentTarget.style.borderColor="#ffffff06"}}
                >
                  {val}
                </a>
              ))}
            </div>
          </div>

          {/* right col */}
          <div className="about-right">
            <p className="bio">
              Passionate full-stack engineer with 6+ years of experience building end-to-end digital solutions.
              I bridge the gap between ideas and execution — combining technical depth with creative problem-solving
              across web, mobile, and design.
            </p>
            <div className="info-grid">
              {info.map(({label,value})=>(
                <div key={label} className="info-row">
                  <span className="info-lbl">{label}</span>
                  <span className="info-val">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider"/>

        {/* ── SKILLS ── */}
        <p className="sl">what i use</p>
        <h2 className="st" style={{fontSize:"clamp(1.6rem,3.5vw,2.4rem)"}}>My <span>Skills</span></h2>

        <div className="tabs">
          {skillTabs.map(({key,label,index})=>(
            <button key={key} className={`tab-btn ${activeSkill===key?"active":""}`} onClick={()=>setActiveSkill(key)}>
              <span className="tab-num">{index}</span>{label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skillMap[activeSkill].map(({skill,skillLogo})=>(
            <SkillsCard key={skill} skills={skill} skillsLogo={skillLogo}/>
          ))}
        </div>

      </div>
    </div>
  )
}