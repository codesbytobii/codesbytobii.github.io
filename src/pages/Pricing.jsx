import { pricingPlans } from "../data/portfolio";
import ContactSection from "../components/ContactSection";

export default function Pricing() {
  return (
    <div className="page-wrap">
      {/* Hero */}
      <section style={{ padding: "160px 5vw 80px", background: "var(--bg-2)", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <p className="section-label fade-up" style={{ justifyContent: "center" }}>Transparent Pricing</p>
          <h1 className="fade-up-1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 0.92, color: "var(--text)", marginBottom: "24px" }}>
            SIMPLE,<br /><span style={{ color: "var(--accent)" }}>HONEST</span><br />PRICING
          </h1>
          <p className="fade-up-2" style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.8, maxWidth: "480px", margin: "0 auto" }}>
            No hidden fees, no surprises. Choose the plan that fits your project — or reach out for a custom quote.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section style={{ padding: "100px 5vw" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)", alignItems: "stretch" }}>
          {pricingPlans.map((plan, i) => (
            <div key={i} style={{
              background: plan.highlight ? "var(--accent)" : "var(--bg)",
              padding: "48px 36px",
              position: "relative",
              display: "flex", flexDirection: "column",
            }}>
              {plan.highlight && (
                <div style={{ position: "absolute", top: "-1px", left: "50%", transform: "translateX(-50%)", background: "var(--bg)", border: "1px solid var(--border)", borderBottom: "none", fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", padding: "6px 16px", whiteSpace: "nowrap" }}>
                  ★ Most Popular
                </div>
              )}

              <div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: plan.highlight ? "rgba(8,8,8,0.6)" : "var(--text-muted)", marginBottom: "12px" }}>{plan.name}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "6px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5vw, 60px)", color: plan.highlight ? "var(--bg)" : "var(--text)", lineHeight: 1 }}>{plan.price}</span>
                </div>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: plan.highlight ? "rgba(8,8,8,0.5)" : "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "24px" }}>{plan.period}</p>
                <p style={{ fontSize: "13px", lineHeight: 1.75, color: plan.highlight ? "rgba(8,8,8,0.7)" : "var(--text-muted)", marginBottom: "32px" }}>{plan.desc}</p>
              </div>

              <div style={{ borderTop: `1px solid ${plan.highlight ? "rgba(8,8,8,0.15)" : "var(--border)"}`, paddingTop: "28px", marginBottom: "36px", flex: 1 }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "14px" }}>
                    <span style={{ color: plan.highlight ? "var(--bg)" : "var(--accent)", flexShrink: 0, marginTop: "2px", fontSize: "14px" }}>✓</span>
                    <span style={{ fontSize: "13px", color: plan.highlight ? "rgba(8,8,8,0.8)" : "var(--text-mid)", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href="/#contact" style={{
                display: "block", textAlign: "center",
                fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "14px 24px", borderRadius: "var(--radius)",
                transition: "all 0.2s",
                background: plan.highlight ? "var(--bg)" : "transparent",
                color: plan.highlight ? "var(--accent)" : "var(--text-mid)",
                border: plan.highlight ? "1px solid var(--bg)" : "1px solid var(--border-light)",
              }}
                onMouseEnter={e => { if (!plan.highlight) { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}}
                onMouseLeave={e => { if (!plan.highlight) { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.color = "var(--text-mid)"; }}}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:900px){section>div{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* FAQ strip */}
      <section style={{ padding: "0 5vw 100px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "60px" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", color: "var(--text)", marginBottom: "40px" }}>FREQUENTLY ASKED</h2>
            {[
              { q: "What's included in the delivery?",       a: "All plans include production-ready source code, documentation, deployment assistance, and a handover call." },
              { q: "Do you work with clients outside Nigeria?", a: "Yes — I work with clients globally. Payments can be made via Paystack, Flutterwave, or international wire transfer." },
              { q: "Can I request changes after delivery?",   a: "Yes. Each plan includes a set number of revision rounds. Additional revisions are billed at an hourly rate." },
              { q: "How do we get started?",                  a: "Simply reach out via the contact form below. I'll reply within 24 hours to discuss your project requirements." },
            ].map((item, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--border)", padding: "24px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", transition: "padding-left 0.25s" }}
                onMouseEnter={e => (e.currentTarget.style.paddingLeft = "8px")}
                onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0")}
              >
                <h4 style={{ color: "var(--text)", fontSize: "15px" }}>{item.q}</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
          <style>{`@media(max-width:600px){div>div{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
