import Navbar from "../components/navbar"
import img1 from "../assets/1780263431513.png"
import SkillsCard from "../components/skills_card"
import { useState } from "react"

//! web skills
import htmlLogo from "../assets/web_skills/html.svg"
import cssLogo from "../assets/web_skills/css.svg"
import sassLogo from "../assets/web_skills/sass.svg"
import javascriptLogo from "../assets/web_skills/javascript.svg"
import bootstrapLogo from "../assets/web_skills/bootstrap.svg"
import tailwindLogo from "../assets/web_skills/tailwind.svg"
import daisyUILogo from "../assets/web_skills/daisy.svg"
import reactLogo from "../assets/web_skills/react.svg"
import nodeLogo from "../assets/web_skills/node.svg"
import expressJsLogo from "../assets/web_skills/express_js.svg"
import mongoLogo from "../assets/web_skills/mondoDB.svg"

//! mobile skills
import dartLogo from "../assets/mobile_skills/dart.svg"
import flutterLogo from "../assets/mobile_skills/flutter.svg"
import firebaseLogo from "../assets/mobile_skills/firebase.svg"
import getxLogo from "../assets/mobile_skills/getx.svg"
import sqliteLogo from "../assets/mobile_skills/sqlite.svg"
import apiLogo from "../assets/mobile_skills/API.svg"

//! tools
import gitLogo from "../assets/tools_skills/git.svg"
import githubLogo from "../assets/tools_skills/github.svg"
import npmLogo from "../assets/tools_skills/npm.svg"
import vscodeLogo from "../assets/tools_skills/vscode.svg"
import androidStudioLogo from "../assets/tools_skills/android_studio.svg"

const NEON = "#39ff14"

const info = [
  { label: "name",        value: "Mohamed Al-Akhaly" },
  { label: "age",         value: "21 years old" },
  { label: "city",        value: "Sint-Niklaas, Belgium" },
  { label: "nationality", value: "Yemeni" },
  { label: "experience",  value: "4+ years" },
  { label: "status",      value: "Single" },
  { label: "full-time",   value: "Available" },
  { label: "freelance",   value: "Available" },
  { label: "phone",       value: "(+32) 466 16 12 89" },
  { label: "email",       value: "alakhail755@gmail.com" },
  { label: "languages",   value: "Arabic · English · FR (basic) · NL (basic)" },
]

const skillTabs = [
  { key: "web",    label: "Web Dev",    index: "01" },
  { key: "mobile", label: "Mobile Dev", index: "02" },
  { key: "tools",  label: "Tools",      index: "03" },
]

const webSkills    = [
  { skill: "HTML",        skillLogo: htmlLogo },
  { skill: "CSS",         skillLogo: cssLogo },
  { skill: "SASS",        skillLogo: sassLogo },
  { skill: "Bootstrap",   skillLogo: bootstrapLogo },
  { skill: "Tailwind",    skillLogo: tailwindLogo },
  { skill: "Daisy UI",    skillLogo: daisyUILogo },
  { skill: "JavaScript",  skillLogo: javascriptLogo },
  { skill: "React",       skillLogo: reactLogo },
  { skill: "Node.js",     skillLogo: nodeLogo },
  { skill: "Express",     skillLogo: expressJsLogo },
  { skill: "MongoDB",     skillLogo: mongoLogo },
]
const mobileSkills = [
  { skill: "Dart",         skillLogo: dartLogo },
  { skill: "Flutter",      skillLogo: flutterLogo },
  { skill: "Firebase",     skillLogo: firebaseLogo },
  { skill: "GetX",         skillLogo: getxLogo },
  { skill: "SQLite",       skillLogo: sqliteLogo },
  { skill: "REST API",     skillLogo: apiLogo },
  { skill: "Node.js",      skillLogo: nodeLogo },
  { skill: "Express",      skillLogo: expressJsLogo },
  { skill: "MongoDB",      skillLogo: mongoLogo },
]
const toolsSkills  = [
  { skill: "Git",            skillLogo: gitLogo },
  { skill: "GitHub",         skillLogo: githubLogo },
  { skill: "npm",            skillLogo: npmLogo },
  { skill: "pub",            skillLogo: dartLogo },
  { skill: "VS Code",        skillLogo: vscodeLogo },
  { skill: "Android Studio", skillLogo: androidStudioLogo },
]

const skillMap = { web: webSkills, mobile: mobileSkills, tools: toolsSkills }

export default function About() {
  const [activeSkill, setActiveSkill] = useState("web")

  return (
    <div style={{ minHeight: "100vh", background: "#050709", fontFamily: "'Syne', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .page-grid {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background-image: linear-gradient(${NEON}07 1px, transparent 1px),
                            linear-gradient(90deg, ${NEON}07 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .glow-tl {
          position: fixed; top: 5%; left: -8%;
          width: 380px; height: 380px; border-radius: 50%;
          background: radial-gradient(circle, ${NEON}10 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: pg 5s ease-in-out infinite;
        }
        .glow-br {
          position: fixed; bottom: 5%; right: -8%;
          width: 340px; height: 340px; border-radius: 50%;
          background: radial-gradient(circle, #00eaff0d 0%, transparent 70%);
          pointer-events: none; z-index: 0;
          animation: pg 5s ease-in-out infinite 2.5s;
        }
        @keyframes pg { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }

        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: .18em; text-transform: uppercase;
          color: ${NEON}; margin-bottom: .75rem;
          display: flex; align-items: center; gap: 8px;
        }
        .section-label::before { content:''; display:inline-block; width:28px; height:1px; background:${NEON}; }

        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800; color: #fff; margin: 0 0 2.5rem;
          letter-spacing: -.02em; line-height: 1.1;
        }
        .section-title span {
          -webkit-text-stroke: 1.5px ${NEON};
          color: transparent; text-shadow: 0 0 28px ${NEON}44;
        }

        /* ── info table ── */
        .info-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0;
          border: 1px solid #ffffff0a; border-radius: 8px; overflow: hidden;
        }
        @media(max-width:540px){ .info-grid{ grid-template-columns: 1fr; } }
        .info-row {
          display: flex; align-items: baseline; gap: 10px;
          padding: 10px 16px;
          border-bottom: 1px solid #ffffff06;
          border-right: 1px solid #ffffff06;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          transition: background .2s;
        }
        .info-row:hover { background: ${NEON}06; }
        .info-label { color: ${NEON}; min-width: 80px; font-size: 10px; letter-spacing: .1em; text-transform: uppercase; }
        .info-value { color: #888; }

        /* ── skill tabs ── */
        .tabs {
          display: flex; gap: 2px;
          border: 1px solid #ffffff08; border-radius: 8px;
          padding: 4px; background: #080b0e;
          margin-bottom: 2rem; width: fit-content;
        }
        .tab-btn {
          padding: 8px 22px; border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: .1em; text-transform: uppercase;
          border: none; cursor: pointer; background: transparent;
          color: #333; transition: all .25s;
          display: flex; align-items: center; gap: 6px;
        }
        .tab-btn:hover { color: ${NEON}; }
        .tab-btn.active {
          background: ${NEON}15;
          border: 1px solid ${NEON}33;
          color: ${NEON};
          box-shadow: 0 0 12px ${NEON}22;
        }
        .tab-num { font-size: 9px; opacity: .5; }

        /* ── skills grid ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
          gap: 1px;
          border: 1px solid #ffffff08; border-radius: 8px; overflow: hidden;
        }

        /* ── divider ── */
        .section-divider {
          height: 1px;
          background: linear-gradient(to right, ${NEON}33, transparent);
          margin: 4rem 0;
        }
      `}</style>

      <div className="page-grid" />
      <div className="glow-tl" />
      <div className="glow-br" />
      <Navbar />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "140px 1.5rem 5rem" }}>

        {/* ══ ABOUT SECTION ══ */}
        <p className="section-label">who i am</p>
        <h1 className="section-title">About <span>Me</span></h1>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem", alignItems: "flex-start", marginBottom: "2rem" }}>

          {/* image */}
          <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", inset: -10, borderRadius: "50%",
                background: `conic-gradient(from 0deg, ${NEON}, #00eaff, transparent 60%, ${NEON})`,
                animation: "spin 6s linear infinite", padding: 2,
              }}>
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#050709" }} />
              </div>
              <div style={{
                position: "absolute", inset: -24, borderRadius: "50%",
                background: `radial-gradient(circle, ${NEON}18 0%, transparent 70%)`,
                animation: "pg 3s ease-in-out infinite",
              }} />
              <img
                src={img1 || "/placeholder.svg"}
                alt="Mohamed Al-Akhaly"
                style={{
                  width: 260, height: 260, borderRadius: "50%",
                  objectFit: "cover", position: "relative", zIndex: 2,
                  border: `2px solid ${NEON}44`,
                  filter: "brightness(.95) contrast(1.05)",
                }}
              />
              <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
            </div>
          </div>

          {/* right col */}
          <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: ".9rem", color: "#555", lineHeight: 1.9,
              borderLeft: `2px solid ${NEON}33`, paddingLeft: "1rem",
            }}>
              Passionate full-stack engineer with 4+ years of experience building end-to-end digital solutions.
              I bridge the gap between ideas and execution — combining technical depth with creative problem-solving
              across web, mobile, and design.
            </p>

            <div className="info-grid">
              {info.map(({ label, value }) => (
                <div key={label} className="info-row">
                  <span className="info-label">{label}</span>
                  <span className="info-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider" />

        {/* ══ SKILLS SECTION ══ */}
        <p className="section-label">what i use</p>
        <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
          My <span>Skills</span>
        </h2>

        <div className="tabs">
          {skillTabs.map(({ key, label, index }) => (
            <button
              key={key}
              className={`tab-btn ${activeSkill === key ? "active" : ""}`}
              onClick={() => setActiveSkill(key)}
            >
              <span className="tab-num">{index}</span>
              {label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skillMap[activeSkill].map(({ skill, skillLogo }) => (
            <SkillsCard key={skill} skills={skill} skillsLogo={skillLogo} />
          ))}
        </div>

      </div>
    </div>
  )
}