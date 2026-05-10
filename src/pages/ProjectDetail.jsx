import { Link, useParams, Navigate } from "react-router-dom";
import { projects } from "../data/portfolio";
import ContactSection from "../components/ContactSection";
import ImageCarousel from "../components/ImageCarousel";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const others = projects.filter(p => p.slug !== slug);

  if (!project) return <Navigate to="/work" replace />;

  return (
    <div className="page-wrap">

      {/* ── Hero ── */}
      <section style={{ padding: "140px 5vw 0", background: "var(--bg-2)", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.15 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Back link */}
          <Link to="/work" style={{
            fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em",
            textTransform: "uppercase", color: "var(--text-muted)",
            display: "inline-flex", alignItems: "center", gap: "8px",
            marginBottom: "40px", transition: "color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
          >← Back to Work</Link>

          <p className="section-label">Case Study</p>
          <h1 className="fade-up" style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 7vw, 88px)",
            lineHeight: 0.92, color: "var(--text)",
            marginBottom: "24px", maxWidth: "900px",
          }}>
            {project.title.toUpperCase()}
          </h1>
          <p className="fade-up-1" style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.8, maxWidth: "560px", marginBottom: "48px" }}>
            {project.description}
          </p>

          {/* Meta strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--border)" }}>
            {[
              { label: "Role",     value: project.role },
              { label: "Category", value: project.category },
              { label: "Duration", value: project.duration },
              { label: "Year",     value: project.year },
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

      {/* ── Image Carousel ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 5vw" }}>
        <ImageCarousel images={project.images || [project.image]} alt={project.title} />
      </div>

      {/* ── Body ── */}
      <section style={{ padding: "80px 5vw" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: "80px", alignItems: "start" }}>

          {/* Left — main content */}
          <div>
            {/* Overview */}
            <div style={{ marginBottom: "56px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--text)", marginBottom: "20px", letterSpacing: "0.04em" }}>OVERVIEW</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.95 }}>{project.overview}</p>
            </div>

            {/* Challenge */}
            <div style={{ marginBottom: "56px", borderLeft: "3px solid var(--accent)", paddingLeft: "24px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--text)", marginBottom: "20px", letterSpacing: "0.04em" }}>THE CHALLENGE</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.95 }}>{project.challenge}</p>
            </div>

            {/* Solution */}
            <div style={{ marginBottom: "56px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--text)", marginBottom: "20px", letterSpacing: "0.04em" }}>THE SOLUTION</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.95 }}>{project.solution}</p>
            </div>

            {/* Key Features */}
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--text)", marginBottom: "28px", letterSpacing: "0.04em" }}>KEY FEATURES</h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {project.keyFeatures.map((f, i) => (
                  <div key={i} style={{
                    padding: "24px 0", borderBottom: "1px solid var(--border)",
                    display: "grid", gridTemplateColumns: "32px 1fr", gap: "20px",
                    transition: "padding-left 0.25s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.paddingLeft = "8px")}
                    onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0")}
                  >
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent)", paddingTop: "2px" }}>0{i + 1}</span>
                    <div>
                      <h4 style={{ color: "var(--text)", fontSize: "15px", fontWeight: 600, marginBottom: "6px" }}>{f.title}</h4>
                      <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.75 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — sidebar */}
          <div style={{ position: "sticky", top: "100px" }}>
            {/* Tech stack */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "32px", marginBottom: "16px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--text)", marginBottom: "24px", letterSpacing: "0.04em" }}>TECH STACK</h3>
              {project.technologies.map((t, i) => (
                <div key={i} style={{ padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "4px" }}>{t.label}</div>
                  <div style={{ color: "var(--text)", fontSize: "13px" }}>{t.value}</div>
                </div>
              ))}

              {/* Tags */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "20px" }}>
                {project.tech.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            {/* Live site CTA */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", marginBottom: "12px", boxSizing: "border-box" }}
            >
              View Live Site ↗
            </a>
            <Link to="/work" className="btn-outline" style={{ width: "100%", justifyContent: "center", boxSizing: "border-box" }}>
              ← All Projects
            </Link>
          </div>
        </div>
        <style>{`@media(max-width:900px){section>div{grid-template-columns:1fr!important}section>div>div:last-child{position:static!important}}`}</style>
      </section>

      {/* ── Other Projects ── */}
      {others.length > 0 && (
        <section style={{ padding: "0 5vw 100px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "60px", marginBottom: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--text)" }}>OTHER PROJECTS</h2>
              <Link to="/work" className="btn-outline">View All →</Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: `repeat(${others.length}, 1fr)`, gap: "2px", background: "var(--border)" }}>
              {others.map((p, i) => (
                <Link key={i} to={`/work/${p.slug}`} style={{ background: "var(--bg)", display: "block", overflow: "hidden", textDecoration: "none" }} className="other-card">
                  <div style={{ height: "200px", overflow: "hidden" }}>
                    <img src={p.image} alt={p.title} className="other-img" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} />
                  </div>
                  <div style={{ padding: "24px" }}>
                    <span className="tag" style={{ marginBottom: "10px" }}>{p.category}</span>
                    <h4 style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--text)", marginBottom: "8px" }}>{p.title.toUpperCase()}</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "12px", lineHeight: 1.6 }}>{p.description.slice(0, 90)}...</p>
                  </div>
                </Link>
              ))}
            </div>
            <style>{`.other-card:hover .other-img{transform:scale(1.05)}@media(max-width:600px){section>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
          </div>
        </section>
      )}

      <ContactSection />
    </div>
  );
}
