"use client"

import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

const NEON = "#39ff14"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        .stt-btn {
          position:fixed; bottom:1.5rem; right:1.5rem; z-index:200;
          width:40px; height:40px; border-radius:7px;
          background:#080b0e; border:1px solid ${NEON}44;
          color:${NEON}; display:flex; align-items:center; justify-content:center;
          cursor:pointer; transition:all .25s;
          box-shadow:0 0 12px ${NEON}22;
          animation:fadeUp .3s ease;
          font-size:.85rem;
        }
        .stt-btn:hover { background:${NEON}18; box-shadow:0 0 20px ${NEON}55; transform:translateY(-2px); }
      `}</style>
      <button
        className="stt-btn"
        onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp}/>
      </button>
    </>
  )
}