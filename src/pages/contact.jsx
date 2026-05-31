"use client"

import { useState } from "react"
import Navbar from "../components/navbar"
import { faPhone, faEnvelope, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NEON = "#39ff14"

export default function Contact() {
  const [formData, setFormData] = useState({ firstName:"", lastName:"", email:"", phone:"", message:"" })
  const [errors, setErrors]         = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: "" })
  }

  const validate = () => {
    const e = {}
    if (!formData.firstName.trim()) e.firstName = "required"
    if (!formData.lastName.trim())  e.lastName  = "required"
    if (!formData.email.trim())     e.email     = "required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "invalid email"
    if (!formData.message.trim())   e.message   = "required"
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setTimeout(() => {
        setSubmitSuccess(false)
        setFormData({ firstName:"", lastName:"", email:"", phone:"", message:"" })
      }, 3000)
    }, 1500)
  }

  const contactItems = [
    { icon: faPhone,       label: "phone",    value: "(+32) 466 16 12 89",   href: "tel:+32466161289" },
    { icon: faEnvelope,    label: "email",    value: "alakhail755@gmail.com", href: "mailto:alakhail755@gmail.com" },
    { icon: faLocationDot, label: "location", value: "Sint-Niklaas, Belgium", href: null },
  ]

  const socials = [
    { icon: faLinkedin,  href: "https://www.linkedin.com/in/mohamed-alakhaly-23a25a284/", label: "LinkedIn" },
    { icon: faGithub,    href: "https://github.com/MohamedAlakhaly",                       label: "GitHub" },
    { icon: faInstagram, href: "https://www.instagram.com/_mohamed_toto_/",                label: "Instagram" },
  ]

  return (
    <div style={{ minHeight:"100vh", background:"#050709", fontFamily:"'Syne',sans-serif", color:"#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .page-grid { position:fixed;inset:0;pointer-events:none;z-index:0; background-image:linear-gradient(${NEON}07 1px,transparent 1px),linear-gradient(90deg,${NEON}07 1px,transparent 1px); background-size:48px 48px; }
        .glow-tl { position:fixed;top:5%;left:-8%;width:380px;height:380px;border-radius:50%;background:radial-gradient(circle,${NEON}10 0%,transparent 70%);pointer-events:none;z-index:0;animation:pg 5s ease-in-out infinite; }
        .glow-br { position:fixed;bottom:5%;right:-8%;width:340px;height:340px;border-radius:50%;background:radial-gradient(circle,#00eaff0d 0%,transparent 70%);pointer-events:none;z-index:0;animation:pg 5s ease-in-out infinite 2.5s; }
        @keyframes pg{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:1;transform:scale(1.08)}}

        .section-label { font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${NEON};margin-bottom:.75rem;display:flex;align-items:center;gap:8px; }
        .section-label::before { content:'';display:inline-block;width:28px;height:1px;background:${NEON}; }
        .section-title { font-size:clamp(2rem,4vw,2.8rem);font-weight:800;color:#fff;margin:0 0 2.5rem;letter-spacing:-.02em;line-height:1.1; }
        .section-title span { -webkit-text-stroke:1.5px ${NEON};color:transparent;text-shadow:0 0 28px ${NEON}44; }

        /* layout */
        .contact-grid { display:grid;grid-template-columns:1fr;gap:1.5px;border:1px solid #ffffff08;border-radius:10px;overflow:hidden; }
        @media(min-width:768px){ .contact-grid{grid-template-columns:2fr 1fr;} }

        /* form panel */
        .form-panel { background:#080b0e;padding:2.5rem;position:relative;overflow:hidden; }
        .form-panel::before { content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(to right,${NEON}55,transparent); }
        .form-intro { font-family:'JetBrains Mono',monospace;font-size:12px;color:#444;line-height:1.85;border-left:2px solid ${NEON}22;padding-left:1rem;margin-bottom:2rem; }

        .form-row { display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem; }
        @media(max-width:500px){ .form-row{grid-template-columns:1fr;} }

        .field { display:flex;flex-direction:column;gap:4px; }
        .field-input {
          background:#050709;
          border:1px solid #ffffff08;
          border-radius:6px;
          padding:11px 14px;
          color:#fff;
          font-family:'JetBrains Mono',monospace;
          font-size:12px;
          outline:none;
          transition:border-color .25s, box-shadow .25s;
          width:100%;
          box-sizing:border-box;
        }
        .field-input::placeholder { color:#222; }
        .field-input:focus { border-color:${NEON}44; box-shadow:0 0 0 3px ${NEON}0d; }
        .field-input.error { border-color:#ef444444; }
        .field-error { font-family:'JetBrains Mono',monospace;font-size:10px;color:#ef4444;letter-spacing:.05em; }
        textarea.field-input { resize:vertical;min-height:130px; }

        .submit-btn {
          margin-top:1.5rem;
          padding:12px 28px;border-radius:6px;font-size:.8rem;font-weight:700;
          letter-spacing:.08em;text-transform:uppercase;
          font-family:'JetBrains Mono',monospace;
          border:none;cursor:pointer;
          display:inline-flex;align-items:center;gap:8px;
          transition:all .25s;
        }
        .submit-btn.default { background:${NEON};color:#050709;box-shadow:0 0 14px ${NEON}44; }
        .submit-btn.default:hover { box-shadow:0 0 26px ${NEON}88;transform:translateY(-1px); }
        .submit-btn.loading { background:${NEON}66;color:#050709;cursor:wait; }
        .submit-btn.success { background:#4ade8022;color:#4ade80;border:1px solid #4ade8044;cursor:default; }

        /* info panel */
        .info-panel { background:#060908;padding:2.5rem;display:flex;flex-direction:column;gap:2rem;position:relative;overflow:hidden;border-left:1.5px solid #ffffff06; }
        .info-panel::before { content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(to right,${NEON}33,transparent); }

        .info-panel-title { font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:${NEON};margin-bottom:1.25rem; }

        .contact-item { display:flex;align-items:flex-start;gap:14px;text-decoration:none; }
        .contact-item-icon {
          width:38px;height:38px;border-radius:7px;flex-shrink:0;
          background:${NEON}0d;border:1px solid ${NEON}22;
          display:flex;align-items:center;justify-content:center;
          color:${NEON};font-size:.85rem;
          transition:all .25s;
        }
        .contact-item:hover .contact-item-icon { background:${NEON}1a;box-shadow:0 0 10px ${NEON}33; }
        .contact-item-label { font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:#2a2a2a;margin-bottom:3px; }
        .contact-item-value { font-size:.85rem;color:#666;transition:color .25s; }
        .contact-item:hover .contact-item-value { color:#aaa; }

        .divider { height:1px;background:linear-gradient(to right,${NEON}18,transparent); }

        .social-row { display:flex;gap:.5rem; }
        .social-btn {
          width:38px;height:38px;border-radius:7px;
          background:transparent;border:1px solid #ffffff08;
          display:flex;align-items:center;justify-content:center;
          color:#333;font-size:.9rem;text-decoration:none;
          transition:all .25s;
        }
        .social-btn:hover { border-color:${NEON}44;color:${NEON};background:${NEON}0d;box-shadow:0 0 10px ${NEON}22; }

        /* spinner */
        @keyframes spin{to{transform:rotate(360deg)}}
        .spin { animation:spin .8s linear infinite;display:inline-block;width:14px;height:14px;border-radius:50%;border:2px solid #05070922;border-top-color:#050709; }
      `}</style>

      <div className="page-grid"/><div className="glow-tl"/><div className="glow-br"/>
      <Navbar/>

      <div style={{ position:"relative",zIndex:1,maxWidth:1100,margin:"0 auto",padding:"140px 1.5rem 5rem" }}>

        <p className="section-label">say hello</p>
        <h1 className="section-title">Get In <span>Touch</span></h1>

        <div className="contact-grid">

          {/* ── FORM ── */}
          <div className="form-panel">
            <p className="form-intro">
              Available for freelance work and full-time positions.<br/>
              Let's discuss your project and turn your ideas into a distinctive digital reality.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="field">
                  <input className={`field-input${errors.firstName?" error":""}`} type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" />
                  {errors.firstName && <span className="field-error">▸ {errors.firstName}</span>}
                </div>
                <div className="field">
                  <input className={`field-input${errors.lastName?" error":""}`} type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" />
                  {errors.lastName && <span className="field-error">▸ {errors.lastName}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <input className={`field-input${errors.email?" error":""}`} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                  {errors.email && <span className="field-error">▸ {errors.email}</span>}
                </div>
                <div className="field">
                  <input className="field-input" type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone (optional)" />
                </div>
              </div>

              <div className="field">
                <textarea className={`field-input${errors.message?" error":""}`} name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." />
                {errors.message && <span className="field-error">▸ {errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting||submitSuccess}
                className={`submit-btn ${submitSuccess?"success":isSubmitting?"loading":"default"}`}
              >
                {isSubmitting ? (
                  <><span className="spin"/>&nbsp;Sending...</>
                ) : submitSuccess ? (
                  <>✓ &nbsp;Message sent!</>
                ) : (
                  <><FontAwesomeIcon icon={faPaperPlane} style={{fontSize:12}}/>&nbsp;Send message</>
                )}
              </button>
            </form>
          </div>

          {/* ── INFO ── */}
          <div className="info-panel">
            <div>
              <p className="info-panel-title">contact info</p>
              <div style={{display:"flex",flexDirection:"column",gap:"1.25rem"}}>
                {contactItems.map(({icon,label,value,href})=>(
                  <a key={label} href={href||undefined} className="contact-item" style={{cursor:href?"pointer":"default"}}>
                    <div className="contact-item-icon"><FontAwesomeIcon icon={icon}/></div>
                    <div>
                      <p className="contact-item-label">{label}</p>
                      <p className="contact-item-value">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="divider"/>

            <div>
              <p className="info-panel-title">connect</p>
              <div className="social-row">
                {socials.map(({icon,href,label})=>(
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-btn">
                    <FontAwesomeIcon icon={icon}/>
                  </a>
                ))}
              </div>
            </div>

            {/* availability status */}
            <div style={{marginTop:"auto",padding:"1rem",borderRadius:7,background:`${NEON}06`,border:`1px solid ${NEON}18`}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                <span style={{width:7,height:7,borderRadius:"50%",background:"#4ade80",boxShadow:"0 0 6px #4ade80",animation:"pg 1.5s ease-in-out infinite"}}/>
                <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:10,letterSpacing:".12em",textTransform:"uppercase",color:"#4ade80"}}>Available now</span>
              </div>
              <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:"#333",lineHeight:1.7}}>
                Open to freelance projects<br/>& full-time opportunities.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}