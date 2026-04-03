import { Link } from "react-router-dom";
import { caseStudy, workProjects } from "../data/portfolio";
import ContactSection from "../components/ContactSection";

export default function WorkSingle() {
  return (
    <div className="page-wrap">
      {/* Hero */}
      <section style={{ padding: "140px 5vw 0", background: "var(--bg-2)", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.15 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link to="/work" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "40px", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
          >← Back to Work</Link>
          <p className="section-label">Work Details</p>
          <h1 className="fade-up" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 6vw, 80px)", lineHeight: 0.95, color: "var(--text)", marginBottom: "24px", maxWidth: "800px" }}>
            {caseStudy.title.toUpperCase()}
          </h1>
          <p className="fade-up-1" style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.8, maxWidth: "580px", marginBottom: "48px" }}>{caseStudy.subtitle}</p>

          {/* Meta strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--border)", marginBottom: "0" }}>
            {[
              { label: "Client",   value: caseStudy.client },
              { label: "Start",    value: caseStudy.start },
              { label: "Complete", value: caseStudy.complete },
              { label: "Services", value: caseStudy.services },
            ].map(m => (
              <div key={m.label} style={{ background: "var(--bg-3)", padding: "20px 24px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "6px" }}>{m.label}</div>
                <div style={{ color: "var(--text)", fontSize: "14px" }}>{m.value}</div>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:600px){section>div>div:last-child{grid-template-columns:repeat(2,1fr)!important}}`}</style>
        </div>
      </section>

      {/* Hero image */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5vw" }}>
        <div style={{ height: "480px", borderRadius: "0 0 var(--radius-md) var(--radius-md)", overflow: "hidden", border: "1px solid var(--border)", borderTop: "none" }}>
          <img src={caseStudy.image} alt={caseStudy.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Case study body */}
      <section style={{ padding: "80px 5vw" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "80px" }}>
          <div>
            {/* Description */}
            <div style={{ marginBottom: "60px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--text)", marginBottom: "20px", letterSpacing: "0.04em" }}>DESCRIPTION</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9 }}>{caseStudy.description}</p>
            </div>

            {/* Key Features */}
            <div style={{ marginBottom: "60px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--text)", marginBottom: "28px", letterSpacing: "0.04em" }}>KEY FEATURES</h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {caseStudy.keyFeatures.map((f, i) => (
                  <div key={i} style={{ padding: "24px 0", borderBottom: "1px solid var(--border)", display: "flex", gap: "20px", transition: "padding-left 0.25s" }}
                    onMouseEnter={e => (e.currentTarget.style.paddingLeft = "8px")}
                    onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0")}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--accent)", flexShrink: 0, marginTop: "2px" }}>0{i + 1}</span>
                    <div>
                      <h4 style={{ color: "var(--text)", fontSize: "15px", fontWeight: 500, marginBottom: "6px" }}>{f.title}</h4>
                      <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.7 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar — Technologies */}
          <div>
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "32px", position: "sticky", top: "100px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--text)", marginBottom: "24px", letterSpacing: "0.04em" }}>TECHNOLOGIES</h3>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {caseStudy.technologies.map((t, i) => (
                  <div key={i} style={{ padding: "16px 0", borderBottom: "1px solid var(--border)" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "4px" }}>{t.label}</div>
                    <div style={{ color: "var(--text)", fontSize: "13px" }}>{t.value}</div>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn-primary" style={{ marginTop: "28px", justifyContent: "center", width: "100%" }}>Start a Project →</a>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* More work */}
      <section style={{ padding: "0 5vw 80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "60px", marginBottom: "40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--text)" }}>MORE WORK</h2>
            <Link to="/work" className="btn-outline">View All →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)" }}>
            {workProjects.slice(0, 3).map((p, i) => (
              <Link key={i} to={`/work/${p.slug}`} style={{ background: "var(--bg)", display: "block", overflow: "hidden" }}>
                <div style={{ height: "180px", overflow: "hidden" }}>
                  <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <span className="tag" style={{ marginBottom: "8px" }}>{p.category}</span>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "var(--text)" }}>{p.title.toUpperCase()}</h4>
                </div>
              </Link>
            ))}
          </div>
          <style>{`@media(max-width:600px){section>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
