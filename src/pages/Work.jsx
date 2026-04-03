import { Link } from "react-router-dom";
import { workProjects, stats } from "../data/portfolio";
import ContactSection from "../components/ContactSection";

export default function Work() {
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

      {/* Projects grid */}
      <section style={{ padding: "100px 5vw" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: "var(--border)" }}>
          {workProjects.map((p, i) => (
            <Link key={i} to={`/work/${p.slug}`} style={{ background: "var(--bg)", display: "block", overflow: "hidden", position: "relative" }} className="work-card">
              <div style={{ overflow: "hidden", height: "300px" }}>
                <img src={p.image} alt={p.title} className="work-img" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }} />
              </div>
              <div style={{ padding: "32px" }}>
                <span className="tag" style={{ marginBottom: "10px" }}>{p.category}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "26px", color: "var(--text)", marginBottom: "10px", letterSpacing: "0.04em" }}>{p.title.toUpperCase()}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.7, marginBottom: "20px" }}>{p.description}</p>
                <div style={{ display: "flex", gap: "24px" }}>
                  {[{ l: "Client", v: p.client }, { l: "Duration", v: p.duration }].map(m => (
                    <div key={m.l}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "3px" }}>{m.l}</div>
                      <div style={{ color: "var(--text-mid)", fontSize: "13px" }}>{m.v}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Hover arrow */}
              <div style={{ position: "absolute", top: "20px", right: "20px", width: "36px", height: "36px", borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: "14px", color: "var(--bg)", opacity: 0, transition: "opacity 0.3s" }} className="card-arrow">↗</div>
            </Link>
          ))}
        </div>
        <style>{`
          .work-card:hover .work-img{transform:scale(1.05)}
          .work-card:hover .card-arrow{opacity:1}
          @media(max-width:768px){section>div>div{grid-template-columns:1fr!important}}
        `}</style>
      </section>

      <ContactSection />
    </div>
  );
}
