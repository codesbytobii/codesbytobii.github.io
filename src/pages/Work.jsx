import { useState } from "react";
import { Link } from "react-router-dom";
import { projects, stats } from "../data/portfolio";
import ContactSection from "../components/ContactSection";

const FILTERS = ["All", "Web Development", "Product Design"];

export default function Work() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter(p =>
        active === "Product Design"
          ? p.category === "Product Design"
          : p.category !== "Product Design"
      );

  return (
    <div className="page-wrap">
      {/* Hero */}
      <section style={{ padding: "160px 5vw 80px", background: "var(--bg-2)", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p className="section-label fade-up">Recent Work</p>
          <h1 className="fade-up-1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 8vw, 100px)", lineHeight: 0.92, color: "var(--text)", maxWidth: "800px" }}>
            EXPLORE MY<br /><span style={{ color: "var(--accent)" }}>LATEST</span><br />WORK
          </h1>
          <p className="fade-up-2" style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.8, maxWidth: "480px", marginTop: "28px" }}>
            A detailed look into how I bring innovation and creativity to life — from concept to finished product.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{ borderBottom: "1px solid var(--border)", display: "grid", gridTemplateColumns: "repeat(4,1fr)", background: "var(--border)", gap: "1px" }}>
        {stats.map(s => (
          <div key={s.label} style={{ background: "var(--bg)", padding: "32px 24px", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", color: "var(--accent)", lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "6px" }}>{s.label}</div>
          </div>
        ))}
        <style>{`@media(max-width:600px){div{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </div>

      {/* Filter tabs */}
      <div style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5vw", display: "flex", gap: "0" }}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "18px 28px",
                color: active === f ? "var(--accent)" : "var(--text-muted)",
                background: "transparent",
                border: "none",
                borderBottom: active === f ? "2px solid var(--accent)" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
                marginBottom: "-1px",
              }}
              onMouseEnter={e => { if (active !== f) e.currentTarget.style.color = "var(--text)"; }}
              onMouseLeave={e => { if (active !== f) e.currentTarget.style.color = "var(--text-muted)"; }}
            >
              {f}
              <span style={{
                marginLeft: "8px",
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: active === f ? "var(--accent)" : "var(--text-muted)",
                background: active === f ? "var(--accent-dim)" : "var(--surface)",
                padding: "2px 7px",
                borderRadius: "10px",
              }}>
                {f === "All" ? projects.length : f === "Product Design" ? projects.filter(p => p.category === "Product Design").length : projects.filter(p => p.category !== "Product Design").length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <section style={{ padding: "80px 5vw 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: filtered.length ? "var(--border)" : "transparent" }}>
          {filtered.map((p, i) => (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
              style={{ background: "var(--bg)", display: "block", overflow: "hidden", position: "relative", textDecoration: "none" }}
              className="work-card"
            >
              {/* Image */}
              <div style={{ overflow: "hidden", height: "280px", background: "var(--surface)" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="work-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}
                  onError={e => { e.currentTarget.style.display = "none"; }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "28px 32px 32px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <span className="tag">{p.category}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>{p.year}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "26px", color: "var(--text)", marginBottom: "10px", letterSpacing: "0.04em" }}>
                  {p.title.toUpperCase()}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.7, marginBottom: "20px" }}>
                  {p.description}
                </p>

                {/* Tech/tools */}
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "20px" }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      fontFamily: "var(--font-mono)", fontSize: "9px",
                      letterSpacing: "0.1em", color: "var(--text-muted)",
                      border: "1px solid var(--border)", padding: "3px 10px", borderRadius: "2px",
                    }}>{t}</span>
                  ))}
                </div>

                {/* CTA */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)" }}>
                  View Case Study <span style={{ fontSize: "14px" }}>→</span>
                </div>
              </div>

              {/* Hover arrow */}
              <div style={{
                position: "absolute", top: "20px", right: "20px",
                width: "36px", height: "36px", borderRadius: "50%",
                background: "var(--accent)", display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: "14px", color: "var(--bg)",
                opacity: 0, transition: "opacity 0.3s",
              }} className="card-arrow">↗</div>
            </Link>
          ))}
        </div>

        <style>{`
          .work-card:hover .work-img { transform: scale(1.05); }
          .work-card:hover .card-arrow { opacity: 1; }
          @media(max-width: 768px) { section > div { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <ContactSection />
    </div>
  );
}
