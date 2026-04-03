import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { stats, services, projects, skills } from "../data/portfolio";
import ContactSection from "../components/ContactSection";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Product Designer",
];

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    if (paused) {
      const pause = setTimeout(() => { setPaused(false); setDeleting(true); }, 1800);
      return () => clearTimeout(pause);
    }

    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }
  }, [displayed, deleting, paused, roleIndex]);

  return (
    <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 2.5vw, 32px)", color: "var(--text-muted)", marginBottom: "28px", letterSpacing: "0.06em", minHeight: "1.4em" }}>
      {"{ "}
      <span style={{ color: "var(--text)" }}>{displayed}</span>
      <span style={{ color: "var(--accent)", animation: "blink 1.1s steps(1) infinite" }}>_</span>
      {" }"}
    </div>
  );
}

const techTicker = ["React", "TypeScript", "Node.js", "Laravel", "PostgreSQL", "Next.js", "Docker", "AWS", "Figma", "Paystack"];

export default function Home() {
  return (
    <div className="page-wrap">

      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 5vw 80px", position: "relative", overflow: "hidden" }}>
        {/* Grid bg */}
        <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.25, zIndex: 0 }} />
        {/* Glow orb */}
        <div style={{ position: "absolute", top: "5%", right: "-10%", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,245,66,0.06) 0%, transparent 65%)", zIndex: 0, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(200,245,66,0.03) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          {/* Left */}
          <div>
            <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <span style={{ width: "28px", height: "1px", background: "var(--accent)", display: "block" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)" }}>Software Developer</span>
            </div>
            <h1 className="fade-up-1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(60px, 8vw, 108px)", lineHeight: 0.92, color: "var(--text)", marginBottom: "10px" }}>
              HEY, I'M<br />
              {/* <span style={{ WebkitTextStroke: "1px var(--accent)", color: "transparent" }}>OLUWA</span>
              <span style={{ color: "var(--accent)" }}>TOBI</span> */}
              <span style={{ color: "var(--accent)" }}>OLUWATOBI</span>
            </h1>
            <div className="fade-up-2">
              <Typewriter />
            </div>
            <p className="fade-up-3" style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.85, maxWidth: "460px", marginBottom: "40px" }}>
              With expertise in JavaScript, React, PHP, Laravel, Product Design and more — I deliver web solutions that are both innovative and robust for the Nigerian market and beyond.
            </p>
            <div className="fade-up-4" style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <Link to="/work" className="btn-primary">View My Work →</Link>
              <a href="/#contact" className="btn-outline">Get in touch</a>
            </div>
          </div>

          {/* Right - image */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }} className="hide-mobile">
            {/* Decorative frame */}
            <div style={{ position: "absolute", top: "-16px", right: "40px", width: "100px", height: "100px", border: "1px solid var(--accent)", borderRadius: "var(--radius)", opacity: 0.5, zIndex: 0 }} />
            <div style={{ position: "absolute", bottom: "-16px", left: "40px", width: "160px", height: "2px", background: "var(--accent)" }} />
            <div style={{ position: "absolute", top: "50%", right: "-20px", width: "2px", height: "100px", background: "linear-gradient(to bottom, transparent, var(--accent), transparent)", transform: "translateY(-50%)" }} />

            <div style={{ width: "380px", height: "480px", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", overflow: "hidden", position: "relative", animation: "float 6s ease-in-out infinite", boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px var(--border)" }}>
              <img src="https://tobiportfolio-chi.vercel.app/assets/imgs/home-page-2/hero-1/ay.png" alt="Oluwatobi" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 50%)" }} />
              {/* Overlay badge */}
              <div style={{ position: "absolute", bottom: "20px", left: "20px", background: "rgba(8,8,8,0.9)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "10px 16px", backdropFilter: "blur(10px)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--accent)", letterSpacing: "0.12em", marginBottom: "2px" }}>STATUS</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text)", display: "flex", alignItems: "center", gap: "6px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
                  Open to work
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){section>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ── Stats ticker ─────────────────────────────────── */}
      <div className="marquee-wrap" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-2)", padding: "14px 0", overflow: "hidden" }}>
        <div className="marquee-inner" style={{ gap: "0" }}>
          {[...techTicker, ...techTicker, ...techTicker].map((t, i) => (
            <span key={i} style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", padding: "0 32px", borderRight: "1px solid var(--border)", flexShrink: 0 }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section style={{ padding: "80px 5vw", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "var(--border)" }}>
          {stats.map(s => (
            <div key={s.label} style={{ background: "var(--bg)", textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 5vw, 72px)", color: "var(--accent)", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "10px" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:600px){section>div{grid-template-columns:repeat(2,1fr)!important}}`}</style>
      </section>

      {/* ── Services ──────────────────────────────────────── */}
      <section style={{ padding: "120px 5vw" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p className="section-label">What I do</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.0, color: "var(--text)", maxWidth: "560px" }}>
                DESIGNING SOLUTIONS FOR YOUR REQUIREMENTS
              </h2>
            </div>
            <Link to="/services" className="btn-outline" style={{ whiteSpace: "nowrap" }}>All Services →</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--border)" }}>
            {services.map((svc, i) => (
              <div key={i} style={{ background: "var(--bg)", padding: "40px 32px", transition: "background 0.3s, transform 0.3s", cursor: "default", position: "relative", overflow: "hidden" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--bg-3)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--bg)"; }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: "20px" }}>0{i + 1}</div>
                <div style={{ fontSize: "24px", marginBottom: "16px", filter: "grayscale(0.3)" }}>{svc.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--text)", marginBottom: "12px", letterSpacing: "0.04em", lineHeight: 1.1 }}>{svc.title.toUpperCase()}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.75 }}>{svc.description}</p>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "var(--accent)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s ease" }} className="svc-line" />
              </div>
            ))}
          </div>
          <style>{`.bg:hover .svc-line{transform:scaleX(1)!important}@media(max-width:900px){section>div>div:last-child{grid-template-columns:1fr!important}}@media(max-width:600px){section>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      {/* ── Projects ───────────────────────────────────────── */}
      <section style={{ padding: "120px 5vw", background: "var(--bg-2)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p className="section-label">Projects</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.0, color: "var(--text)" }}>MY RECENT WORKS</h2>
            </div>
            <Link to="/work" className="btn-outline">View All →</Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {projects.map((p, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "72px 120px 1fr auto",
                alignItems: "center", gap: "28px",
                padding: "28px 0",
                borderBottom: "1px solid var(--border)",
                transition: "padding-left 0.35s ease",
                cursor: "pointer",
              }}
                onMouseEnter={e => (e.currentTarget.style.paddingLeft = "12px")}
                onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0")}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>0{i + 1}</span>
                <div style={{ width: "120px", height: "76px", borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--border)", flexShrink: 0 }}>
                  <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <div>
                  <span className="tag" style={{ marginBottom: "8px" }}>{p.category}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 2.5vw, 32px)", color: "var(--text)", letterSpacing: "0.04em", lineHeight: 1.1 }}>{p.title.toUpperCase()}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "12px", marginTop: "6px", maxWidth: "480px", lineHeight: 1.6 }}>{p.description.slice(0, 110)}...</p>
                  <div style={{ display: "flex", gap: "6px", marginTop: "10px", flexWrap: "wrap" }}>
                    {p.tech.map(t => <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.1em", color: "var(--text-muted)", border: "1px solid var(--border)", padding: "2px 8px", borderRadius: "2px" }}>{t}</span>)}
                  </div>
                </div>
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "10px 18px", fontSize: "10px", whiteSpace: "nowrap" }}
                  onClick={e => e.stopPropagation()}
                >Live ↗</a>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div>div:last-child>div{grid-template-columns:1fr!important}section>div>div:last-child>div>*:first-child{display:none}}`}</style>
      </section>

      {/* ── Skills ─────────────────────────────────────────── */}
      <section style={{ padding: "120px 5vw" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "80px", alignItems: "start" }}>
          <div style={{ position: "sticky", top: "100px" }}>
            <p className="section-label">Expertise</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.0, color: "var(--text)", marginBottom: "24px" }}>MY SKILLS</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.8 }}>A carefully curated stack built through years of shipping real products for real clients.</p>
          </div>
          <div>
            {skills.map((s, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--border)", padding: "28px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", transition: "padding-left 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.paddingLeft = "8px")}
                onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0")}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)", width: "110px", flexShrink: 0 }}>{s.category}</span>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "flex-end" }}>
                  {s.items.map(item => (
                    <span key={item} style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text)", border: "1px solid var(--border-light)", padding: "5px 12px", borderRadius: "var(--radius)", transition: "all 0.2s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.color = "var(--text)"; }}
                    >{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div{grid-template-columns:1fr!important}section>div>div:first-child{position:static!important}}`}</style>
      </section>

      <ContactSection />
    </div>
  );
}
