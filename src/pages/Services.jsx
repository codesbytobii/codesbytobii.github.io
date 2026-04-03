import { servicePageServices, stats } from "../data/portfolio";
import ContactSection from "../components/ContactSection";

export default function Services() {
  return (
    <div className="page-wrap">
      {/* Hero */}
      <section style={{ padding: "160px 5vw 80px", background: "var(--bg-2)", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "end" }}>
          <div>
            <p className="section-label fade-up">My Services</p>
            <h1 className="fade-up-1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 96px)", lineHeight: 0.92, color: "var(--text)" }}>
              TRANSFORMING<br />IDEAS INTO<br /><span style={{ color: "var(--accent)" }}>INTUITIVE</span><br />DESIGNS
            </h1>
          </div>
          <div className="fade-up-2">
            <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.85, marginBottom: "32px" }}>
              With expertise in mobile app and web design, I transform ideas into visually stunning and user-friendly interfaces that captivate and retain users.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1px", background: "var(--border)" }}>
              {stats.map(s => (
                <div key={s.label} style={{ background: "var(--bg-3)", padding: "24px", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "40px", color: "var(--accent)", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "6px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){section>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Services List */}
      <section style={{ padding: "120px 5vw" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {servicePageServices.map((svc, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
              {/* Alternate layout */}
              {i % 2 === 0 ? (
                <>
                  <Content svc={svc} index={i} />
                  <ImageBlock src={svc.image} alt={svc.title} />
                </>
              ) : (
                <>
                  <ImageBlock src={svc.image} alt={svc.title} />
                  <Content svc={svc} index={i} />
                </>
              )}
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){section>div>div{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
      </section>

      <ContactSection />
    </div>
  );
}

function ImageBlock({ src, alt }) {
  return (
    <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border)", position: "relative" }}>
      <img src={src} alt={alt} style={{ width: "100%", height: "380px", objectFit: "cover", transition: "transform 0.6s ease", display: "block" }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      />
    </div>
  );
}

function Content({ svc, index }) {
  return (
    <div>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: "14px" }}>0{index + 1}</span>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 52px)", color: "var(--text)", marginBottom: "6px", lineHeight: 1.05 }}>{svc.title.toUpperCase()}</h2>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "36px" }}>{svc.subtitle}</p>
      {svc.items.map((item, j) => (
        <div key={j} style={{ padding: "20px 0", borderTop: "1px solid var(--border)", transition: "padding-left 0.25s" }}
          onMouseEnter={e => (e.currentTarget.style.paddingLeft = "8px")}
          onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0")}
        >
          <h4 style={{ color: "var(--text)", fontSize: "14px", fontWeight: 500, marginBottom: "6px" }}>{item.name}</h4>
          <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.7 }}>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
