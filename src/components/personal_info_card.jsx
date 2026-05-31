// هذا الملف ما عاد محتاجه في النسخة الجديدة
// المعلومات صارت inline في About.jsx مباشرة
// بس خليناه هنا لو تبي ترجع له

const NEON = "#39ff14"

export default function AboutInfo({ title, content }) {
  return (
    <div style={{
      display: "flex", alignItems: "baseline", gap: 10,
      padding: "10px 16px",
      borderBottom: "1px solid #ffffff06",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12,
    }}>
      <span style={{ color: NEON, minWidth: 80, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase" }}>
        {title}
      </span>
      <span style={{ color: "#888" }}>{content}</span>
    </div>
  )
}