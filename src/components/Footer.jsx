import { Link } from "react-router-dom";
import { navLinks } from "../data/portfolio";

const techStack = ["React", "TypeScript", "Vite", "Laravel", "PostgreSQL", "Tailwind"];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
      {/* Marquee */}
      <div className="marquee-wrap" style={{ borderBottom: "1px solid var(--border)", padding: "16px 0", overflow: "hidden" }}>
        <div className="marquee-inner" style={{ gap: "48px" }}>
          {[...techStack, ...techStack, ...techStack, ...techStack].map((t, i) => (
            <span key={i} style={{
              fontFamily: "var(--font-display)", fontSize: "18px",
              color: i % 2 === 0 ? "var(--text-muted)" : "var(--border-light)",
              letterSpacing: "0.1em", flexShrink: 0, paddingRight: "48px",
            }}>{t} ✦</span>
          ))}
        </div>
      </div>

      <div className="container" style={{ padding: "64px 5vw 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "60px", marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--accent)", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "24px", height: "24px", borderRadius: "3px", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--bg)", fontSize: "10px", fontWeight: 700 }}>CT</span>
              codesbytobi
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.8, maxWidth: "280px", marginBottom: "28px" }}>
              Senior software developer delivering innovative, robust web solutions tailored for the Nigerian market and beyond.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {["GitHub", "LinkedIn", "Twitter"].map(s => (
                <a key={s} href="#" style={{
                  fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em",
                  color: "var(--text-muted)", border: "1px solid var(--border)", padding: "6px 12px", borderRadius: "var(--radius)",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                >{s}</a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "20px" }}>Pages</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map(link => (
                <Link key={link.label} to={link.href} style={{ color: "var(--text-mid)", fontSize: "14px", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-mid)")}
                >{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "20px" }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Email", value: "contact@codesbytobi.dev" },
                { label: "Location", value: "Lagos, Nigeria" },
                { label: "Status", value: "Open to work ✦" },
              ].map(item => (
                <div key={item.label}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em", display: "block", marginBottom: "2px" }}>{item.label}</span>
                  <span style={{ color: "var(--text-mid)", fontSize: "13px" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ color: "var(--text-muted)", fontSize: "12px", fontFamily: "var(--font-mono)" }}>© {year} Oluwatobi. All rights reserved.</span>
          <span style={{ color: "var(--text-muted)", fontSize: "12px", fontFamily: "var(--font-mono)" }}>Built with React + Vite ✦ TypeScript</span>
        </div>
      </div>

      <style>{`@media(max-width:768px){footer > div:last-child > div:first-child{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}
