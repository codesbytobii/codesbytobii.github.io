import { useState } from "react";

const inputStyle = {
  width: "100%", background: "var(--surface)",
  border: "1px solid var(--border)", borderRadius: "var(--radius)",
  padding: "14px 18px", color: "var(--text)", fontSize: "14px",
  outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
};

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact" style={{ background: "var(--bg-2)", padding: "120px 5vw", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "80px", alignItems: "start" }}>

        {/* Info side */}
        <div>
          <p className="section-label">Get in touch</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 0.95, color: "var(--text)", marginBottom: "28px" }}>
            LET'S BUILD<br /><span style={{ color: "var(--accent)" }}>SOMETHING</span><br />GREAT
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.8, maxWidth: "340px", marginBottom: "48px" }}>
            I'm always excited to take on new projects and collaborate with innovative minds. If you have a project in mind, reach out!
          </p>

          {[
            { label: "Email",    value: "contact@codesbytobi.dev" },
            { label: "Location", value: "Lagos, Nigeria" },
            { label: "Status",   value: "Open to new projects" },
          ].map(item => (
            <div key={item.label} style={{ borderTop: "1px solid var(--border)", padding: "18px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>{item.label}</span>
              <span style={{ color: "var(--text)", fontSize: "13px" }}>{item.value}</span>
            </div>
          ))}

          {/* Available indicator */}
          <div style={{ marginTop: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ position: "relative", width: "10px", height: "10px", display: "inline-block" }}>
              <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--accent)", animation: "pulse-ring 2s ease-out infinite" }} />
              <span style={{ position: "absolute", inset: "2px", borderRadius: "50%", background: "var(--accent)" }} />
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent)", letterSpacing: "0.1em" }}>Available for freelance work</span>
          </div>
        </div>

        {/* Form */}
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "44px" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "48px", color: "var(--accent)", marginBottom: "16px" }}>✓</div>
              <p style={{ color: "var(--text)", fontFamily: "var(--font-mono)", fontSize: "13px" }}>Message sent successfully!</p>
            </div>
          ) : (
            <>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "30px", color: "var(--text)", marginBottom: "28px", letterSpacing: "0.04em" }}>SEND A MESSAGE</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  {[
                    { key: "name",  placeholder: "Your name *",      type: "text" },
                    { key: "email", placeholder: "Email address *",   type: "email" },
                  ].map(f => (
                    <input key={f.key} type={f.type} placeholder={f.placeholder} style={inputStyle}
                      value={form[f.key]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      onFocus={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-dim)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  ))}
                </div>
                {[
                  { key: "phone",   placeholder: "Phone number",   type: "tel" },
                  { key: "subject", placeholder: "Subject *",       type: "text" },
                ].map(f => (
                  <input key={f.key} type={f.type} placeholder={f.placeholder} style={inputStyle}
                    value={form[f.key]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    onFocus={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-dim)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
                  />
                ))}
                <textarea placeholder="Your message *" rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  onFocus={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-dim)"; }}
                  onBlur={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
                />
                <button onClick={handleSubmit} className="btn-primary" style={{ marginTop: "8px", justifyContent: "center" }}>
                  Send Message →
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`@media(max-width:768px){#contact>div{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  );
}
