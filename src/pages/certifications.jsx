"use client"

import { useState, useEffect } from "react"
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
  {
    id: 1,
    title: "Developing Websites And Front-Ends With Bootstrap",
    issuer: "Coursera & IPM",
    date: "Apr 2, 2025",
    image: bootstrapCertification,
    verifyLink: "https://coursera.org/share/8927d7f420a8f0e8565aabec1451aa92",
    downloadLink: "/my-portfolio/certifications_pdf/bootstrap_certification.pdf",
    category: "Web",
  },
  {
    id: 2,
    title: "Introduction To Dart",
    issuer: "Coursera & Google Cloud",
    date: "Dec 7, 2024",
    image: dartCertification,
    verifyLink: "https://coursera.org/share/09660e6fe77c82cdc446101f8875c14f",
    downloadLink: "/my-portfolio/certifications_pdf/dart_certification.pdf",
    category: "Mobile",
  },
  {
    id: 3,
    title: "Learn Tailwind CSS",
    issuer: "Coursera & SCRIMBA",
    date: "Dec 7, 2024",
    image: tailwindCertification,
    verifyLink: "#",
    downloadLink: "/my-portfolio/certificates/web-cert.pdf",
    category: "Web",
  },
  {
    id: 4,
    title: "Working In Flutter Applications",
    issuer: "Ideas And Concepts Company",
    date: "Dec 1, 2024",
    image: ideasAndConceptsCertification,
    verifyLink: "#",
    downloadLink: "/my-portfolio/certifications_pdf/ideas_and_concepts.pdf",
    category: "Mobile",
  },
  {
    id: 5,
    title: "Mobile Application Diploma (Dart / Flutter)",
    issuer: "IT Sharks Company",
    date: "Apr 18, 2024",
    image: itSharks2Certification,
    verifyLink: "#",
    downloadLink: "/my-portfolio/certifications_pdf/it_sharks2.pdf",
    category: "Mobile",
  },
  {
    id: 6,
    title: "Mobile Application Diploma (Dart / Flutter)",
    issuer: "IT Sharks & Egyptian Ministry Of Foreign Affairs",
    date: "May 12, 2024",
    image: itSharksCertification,
    verifyLink: "#",
    downloadLink: "/my-portfolio/certifications_pdf/it_sharks.pdf",
    category: "Mobile",
  },
  {
    id: 7,
    title: "Getting Started With Flutter Development",
    issuer: "Coursera & Google Cloud",
    date: "Feb 6, 2024",
    image: flutterCertification,
    verifyLink: "https://coursera.org/verify/TFXDJ7DFSH4",
    downloadLink: "/my-portfolio/certifications_pdf/flutter_certification.pdf",
    category: "Mobile",
  },
]

const categories = ["All", "Web", "Mobile"]

export default function Certifications() {
  const [filter, setFilter]         = useState("All")
  const [viewMode, setViewMode]     = useState("grid")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCert, setSelectedCert] = useState(null)

  const filtered = filter === "All" ? certifications : certifications.filter(c => c.category === filter)

  const prev = () => setCurrentIndex(i => (i - 1 + filtered.length) % filtered.length)
  const next = () => setCurrentIndex(i => (i + 1) % filtered.length)

  useEffect(() => {
    const onKey = e => { if (e.key === "ArrowRight") next(); if (e.key === "ArrowLeft") prev() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [filtered.length])

  useEffect(() => { setCurrentIndex(0) }, [filter])

  const cert = filtered[currentIndex]

  return (
    <div style={{ minHeight: "100vh", background: "#050709", fontFamily: "'Syne', sans-serif", color: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        .page-grid {
          position: fixed; inset: 0; pointer-events: none; z-index: 0;
          background-image: linear-gradient(${NEON}07 1px, transparent 1px),
                            linear-gradient(90deg, ${NEON}07 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .glow-tl {
          position: fixed; top: 5%; left: -8%; width: 380px; height: 380px; border-radius: 50%;
          background: radial-gradient(circle, ${NEON}10 0%, transparent 70%);
          pointer-events: none; z-index: 0; animation: pg 5s ease-in-out infinite;
        }
        .glow-br {
          position: fixed; bottom: 5%; right: -8%; width: 340px; height: 340px; border-radius: 50%;
          background: radial-gradient(circle, #00eaff0d 0%, transparent 70%);
          pointer-events: none; z-index: 0; animation: pg 5s ease-in-out infinite 2.5s;
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
          font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 800; color: #fff;
          margin: 0 0 2.5rem; letter-spacing: -.02em; line-height: 1.1;
        }
        .section-title span { -webkit-text-stroke: 1.5px ${NEON}; color: transparent; text-shadow: 0 0 28px ${NEON}44; }

        /* toolbar */
        .toolbar { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-bottom: 2.5rem; }

        .view-tabs {
          display: flex; gap: 2px;
          background: #080b0e; border: 1px solid #ffffff08; border-radius: 8px; padding: 3px;
        }
        .view-tab {
          padding: 7px 16px; border-radius: 6px; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: .08em; text-transform: uppercase;
          background: transparent; color: #333; display: flex; align-items: center; gap: 6px;
          transition: all .25s;
        }
        .view-tab:hover { color: ${NEON}; }
        .view-tab.active { background: ${NEON}15; border: 1px solid ${NEON}33; color: ${NEON}; }

        .filter-tabs {
          display: flex; gap: 2px;
          background: #080b0e; border: 1px solid #ffffff08; border-radius: 8px; padding: 3px; margin-left: auto;
        }
        .filter-tab {
          padding: 7px 16px; border-radius: 6px; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: .08em; text-transform: uppercase;
          background: transparent; color: #333; transition: all .25s;
        }
        .filter-tab:hover { color: ${NEON}; }
        .filter-tab.active { background: ${NEON}15; border: 1px solid ${NEON}33; color: ${NEON}; }

        /* grid */
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5px;
          border: 1px solid #ffffff08; border-radius: 10px; overflow: hidden;
        }
        .cert-card {
          position: relative; background: #080b0e; cursor: pointer;
          overflow: hidden; transition: background .25s;
        }
        .cert-card:hover { background: #0c110a; }
        .cert-card-scan {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, ${NEON}, transparent);
          transform: scaleX(0); transform-origin: left; transition: transform .4s;
        }
        .cert-card:hover .cert-card-scan { transform: scaleX(1); }
        .cert-img-wrap { position: relative; height: 180px; overflow: hidden; }
        .cert-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform .5s; filter: brightness(.85); }
        .cert-card:hover .cert-img-wrap img { transform: scale(1.06); filter: brightness(1); }
        .cert-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, #050709 0%, transparent 60%);
        }
        .cert-badge {
          position: absolute; top: 12px; left: 12px;
          font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: .1em; text-transform: uppercase;
          padding: 3px 10px; border-radius: 4px;
          border: 1px solid ${NEON}44; background: ${NEON}11; color: ${NEON};
        }
        .cert-body { padding: 1.25rem 1.5rem 1.5rem; }
        .cert-title { font-size: .95rem; font-weight: 700; color: #fff; margin: 0 0 .4rem; line-height: 1.4; }
        .cert-issuer { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #444; margin-bottom: .25rem; }
        .cert-date   { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #2a2a2a; }
        .cert-actions { display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; }
        .cert-dl {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; color: ${NEON};
          display: flex; align-items: center; gap: 5px; text-decoration: none;
          transition: opacity .2s;
        }
        .cert-dl:hover { opacity: .7; }
        .cert-view-btn {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: .08em; text-transform: uppercase;
          background: none; border: 1px solid #ffffff10; border-radius: 4px; color: #333;
          padding: 5px 12px; cursor: pointer; transition: all .25s;
        }
        .cert-view-btn:hover { border-color: ${NEON}44; color: ${NEON}; }

        /* carousel */
        .carousel-wrap {
          display: flex; flex-wrap: wrap; gap: 3rem; align-items: flex-start;
          border: 1px solid #ffffff08; border-radius: 10px;
          padding: 2.5rem; background: #080b0e;
          position: relative; overflow: hidden;
        }
        .carousel-wrap::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, ${NEON}55, transparent);
        }
        .carousel-left { flex: 1 1 280px; display: flex; flex-direction: column; gap: 1.25rem; }
        .carousel-right { flex: 1 1 320px; }

        .carousel-index {
          font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #2a2a2a;
          display: flex; align-items: center; gap: 8px;
        }
        .carousel-index span { color: ${NEON}; }
        .carousel-title { font-size: 1.4rem; font-weight: 800; color: #fff; line-height: 1.3; }
        .carousel-meta { display: flex; flex-direction: column; gap: 6px; }
        .carousel-meta-row {
          display: flex; gap: 8px;
          font-family: 'JetBrains Mono', monospace; font-size: 12px;
        }
        .meta-label { color: #333; min-width: 60px; }
        .meta-value { color: #666; }
        .carousel-btns { display: flex; gap: .75rem; flex-wrap: wrap; margin-top: .5rem; }
        .btn-primary-neon {
          padding: 10px 24px; border-radius: 6px; font-size: .8rem; font-weight: 700;
          letter-spacing: .08em; text-transform: uppercase; color: #050709;
          background: ${NEON}; text-decoration: none; font-family: 'JetBrains Mono', monospace;
          transition: all .25s; box-shadow: 0 0 14px ${NEON}44; border: none; cursor: pointer;
          display: flex; align-items: center; gap: 6px;
        }
        .btn-primary-neon:hover { box-shadow: 0 0 24px ${NEON}88; transform: translateY(-1px); }
        .btn-ghost-neon {
          padding: 10px 24px; border-radius: 6px; font-size: .8rem; font-weight: 600;
          letter-spacing: .08em; text-transform: uppercase; color: #555;
          background: transparent; text-decoration: none; font-family: 'JetBrains Mono', monospace;
          border: 1px solid #ffffff10; transition: all .25s; cursor: pointer;
          display: flex; align-items: center; gap: 6px;
        }
        .btn-ghost-neon:hover { border-color: ${NEON}44; color: ${NEON}; }

        .carousel-img-wrap {
          position: relative; border-radius: 8px; overflow: hidden;
          border: 1px solid ${NEON}22;
          box-shadow: 0 0 30px ${NEON}11;
        }
        .carousel-img-wrap img { width: 100%; display: block; }
        .carousel-img-wrap::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, ${NEON}08, transparent 50%);
          pointer-events: none; z-index: 1;
        }
        .carousel-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; }
        .nav-counter { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #333; }
        .nav-counter span { color: ${NEON}; }
        .nav-arrows { display: flex; gap: .5rem; }
        .nav-arrow {
          width: 38px; height: 38px; border-radius: 6px;
          background: #0c110a; border: 1px solid ${NEON}22; color: ${NEON};
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .25s;
        }
        .nav-arrow:hover { background: ${NEON}18; border-color: ${NEON}55; box-shadow: 0 0 10px ${NEON}33; }

        /* modal */
        .modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,.85);
          backdrop-filter: blur(8px); z-index: 200;
          display: flex; align-items: center; justify-content: center; padding: 1.5rem;
        }
        .modal-box {
          background: #080b0e; border: 1px solid ${NEON}22;
          border-radius: 12px; max-width: 800px; width: 100%;
          max-height: 90vh; overflow-y: auto;
          padding: 2rem; position: relative;
          box-shadow: 0 0 50px ${NEON}11;
        }
        .modal-box::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, ${NEON}66, transparent);
        }
        .modal-close {
          position: absolute; top: 1rem; right: 1rem;
          width: 34px; height: 34px; border-radius: 6px;
          background: none; border: 1px solid #ffffff10; color: #555;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .25s;
        }
        .modal-close:hover { border-color: ${NEON}44; color: ${NEON}; }
        .modal-title { font-size: 1.3rem; font-weight: 800; color: #fff; margin: 0 0 .25rem; }
        .modal-issuer { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #444; margin-bottom: 1.5rem; }
        .modal-img-wrap { border-radius: 8px; overflow: hidden; border: 1px solid ${NEON}22; margin-bottom: 1.5rem; }
        .modal-img-wrap img { width: 100%; display: block; }
        .modal-grid { display: grid; grid-template-columns: 1fr 1fr; gap: .75rem; margin-bottom: 1.5rem; }
        .modal-row { font-family: 'JetBrains Mono', monospace; font-size: 12px; }
        .modal-row-label { color: #333; font-size: 10px; letter-spacing: .1em; text-transform: uppercase; margin-bottom: 3px; }
        .modal-row-val { color: #666; }
      `}</style>

      <div className="page-grid" />
      <div className="glow-tl" />
      <div className="glow-br" />
      <Navbar />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "140px 1.5rem 5rem" }}>

        {/* header */}
        <p className="section-label">proof of work</p>
        <h1 className="section-title">My <span>Certifications</span></h1>

        {/* toolbar */}
        <div className="toolbar">
          <div className="view-tabs">
            <button className={`view-tab ${viewMode === "grid" ? "active" : ""}`} onClick={() => setViewMode("grid")}>
              <FontAwesomeIcon icon={faTableCells} /> Grid
            </button>
            <button className={`view-tab ${viewMode === "carousel" ? "active" : ""}`} onClick={() => setViewMode("carousel")}>
              <FontAwesomeIcon icon={faFilm} /> Carousel
            </button>
          </div>
          <div className="filter-tabs">
            {categories.map(c => (
              <button key={c} className={`filter-tab ${filter === c ? "active" : ""}`} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* ── GRID ── */}
        {viewMode === "grid" && (
          <div className="cert-grid">
            {filtered.map(cert => (
              <div key={cert.id} className="cert-card" onClick={() => setSelectedCert(cert)}>
                <div className="cert-card-scan" />
                <div className="cert-img-wrap">
                  <img src={cert.image || "/placeholder.svg"} alt={cert.title} />
                  <div className="cert-img-overlay" />
                  <span className="cert-badge">{cert.category}</span>
                </div>
                <div className="cert-body">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  <div className="cert-actions">
                    <a href={cert.downloadLink} className="cert-dl" onClick={e => e.stopPropagation()}>
                      <FontAwesomeIcon icon={faDownload} /> Download
                    </a>
                    <button className="cert-view-btn">View →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── CAROUSEL ── */}
        {viewMode === "carousel" && filtered.length > 0 && (
          <div className="carousel-wrap">
            <div className="carousel-left">
              <div className="carousel-index">
                <span>{String(currentIndex + 1).padStart(2, "0")}</span>
                / {String(filtered.length).padStart(2, "0")}
              </div>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                letterSpacing: ".12em", textTransform: "uppercase",
                padding: "3px 10px", borderRadius: 4,
                border: `1px solid ${NEON}33`, background: `${NEON}0d`, color: NEON,
                width: "fit-content",
              }}>
                {cert.category}
              </span>
              <h2 className="carousel-title">{cert.title}</h2>
              <div className="carousel-meta">
                <div className="carousel-meta-row"><span className="meta-label">issuer</span><span className="meta-value">{cert.issuer}</span></div>
                <div className="carousel-meta-row"><span className="meta-label">date</span><span className="meta-value">{cert.date}</span></div>
              </div>
              <div className="carousel-btns">
                <a href={cert.downloadLink} className="btn-primary-neon">
                  <FontAwesomeIcon icon={faDownload} /> Download
                </a>
                <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="btn-ghost-neon">
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Verify
                </a>
              </div>
            </div>

            <div className="carousel-right">
              <div className="carousel-img-wrap">
                <img src={cert.image || "/placeholder.svg"} alt={cert.title} />
              </div>
              <div className="carousel-nav">
                <span className="nav-counter"><span>{currentIndex + 1}</span> / {filtered.length}</span>
                <div className="nav-arrows">
                  <button className="nav-arrow" onClick={prev} aria-label="prev">
                    <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: 13 }} />
                  </button>
                  <button className="nav-arrow" onClick={next} aria-label="next">
                    <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: 13 }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── MODAL ── */}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedCert(null)}>
              <FontAwesomeIcon icon={faXmark} style={{ fontSize: 14 }} />
            </button>
            <h2 className="modal-title">{selectedCert.title}</h2>
            <p className="modal-issuer">{selectedCert.issuer}</p>
            <div className="modal-img-wrap">
              <img src={selectedCert.image || "/placeholder.svg"} alt={selectedCert.title} />
            </div>
            <div className="modal-grid">
              <div className="modal-row">
                <p className="modal-row-label">date</p>
                <p className="modal-row-val">{selectedCert.date}</p>
              </div>
              <div className="modal-row">
                <p className="modal-row-label">category</p>
                <p className="modal-row-val">{selectedCert.category}</p>
              </div>
            </div>
            <div className="carousel-btns">
              <a href={selectedCert.downloadLink} className="btn-primary-neon">
                <FontAwesomeIcon icon={faDownload} /> Download
              </a>
              <a href={selectedCert.verifyLink} target="_blank" rel="noopener noreferrer" className="btn-ghost-neon">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Verify
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}