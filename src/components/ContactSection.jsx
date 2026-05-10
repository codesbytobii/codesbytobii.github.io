import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// ─────────────────────────────────────────────
// 🔧 PASTE YOUR EMAILJS CREDENTIALS HERE
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // e.g. "aBcDeFgHiJkLmNoPq"
// ─────────────────────────────────────────────

const inputStyle = {
  width: "100%", background: "var(--surface)",
  border: "1px solid var(--border)", borderRadius: "var(--radius)",
  padding: "14px 18px", color: "var(--text)", fontSize: "14px",
  outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
};

const STATUS = { IDLE: "idle", SENDING: "sending", SUCCESS: "success", ERROR: "error" };

export default function ContactSection() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState(STATUS.IDLE);

  const handleFocus = (e) => {
    e.currentTarget.style.borderColor = "var(--accent)";
    e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-dim)";
  };
  const handleBlur = (e) => {
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.boxShadow = "none";
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setStatus(STATUS.SENDING);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    form.name,
          email:   form.email,
          phone:   form.phone || "Not provided",
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus(STATUS.SUCCESS);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });

      // Reset back to form after 5 seconds
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus(STATUS.ERROR);
      setTimeout(() => setStatus(STATUS.IDLE), 5000);
    }
  };

  return (
    <section id="contact" style={{ background: "var(--bg-2)", padding: "120px 5vw", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "80px", alignItems: "start" }}>

        {/* ── Info side ── */}
        <div>
          <p className="section-label">Get in touch</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 0.95, color: "var(--text)", marginBottom: "28px" }}>
            LET'S BUILD<br /><span style={{ color: "var(--accent)" }}>SOMETHING</span><br />GREAT
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.8, maxWidth: "340px", marginBottom: "48px" }}>
            I'm always excited to take on new projects and collaborate with innovative minds. If you have a project in mind, reach out!
          </p>

          {[
            { label: "Email",    value: "codesbytobi@gmail.com" },
            { label: "Location", value: "Lagos, Nigeria" },
            { label: "Status",   value: "Open to new projects" },
          ].map(item => (
            <div key={item.label} style={{ borderTop: "1px solid var(--border)", padding: "18px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>{item.label}</span>
              <span style={{ color: "var(--text)", fontSize: "13px" }}>{item.value}</span>
            </div>
          ))}

          {/* Availability pulse */}
          <div style={{ marginTop: "32px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ position: "relative", width: "10px", height: "10px", display: "inline-block" }}>
              <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--accent)", animation: "pulse-ring 2s ease-out infinite" }} />
              <span style={{ position: "absolute", inset: "2px", borderRadius: "50%", background: "var(--accent)" }} />
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent)", letterSpacing: "0.1em" }}>Available for freelance work</span>
          </div>
        </div>

        {/* ── Form ── */}
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "44px" }}>

          {/* Success state */}
          {status === STATUS.SUCCESS && (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "64px", color: "var(--accent)", lineHeight: 1, marginBottom: "16px" }}>✓</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--text)", marginBottom: "10px" }}>MESSAGE SENT!</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.7 }}>
                Thanks for reaching out. I'll get back to you at <strong style={{ color: "var(--text)" }}>{form.email || "your email"}</strong> within 24 hours.
              </p>
            </div>
          )}

          {/* Error state */}
          {status === STATUS.ERROR && (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "64px", color: "#ff4444", lineHeight: 1, marginBottom: "16px" }}>✗</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--text)", marginBottom: "10px" }}>SOMETHING WENT WRONG</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
                The message couldn't be sent. Please email me directly at{" "}
                <a href="mailto:codesbytobi@gmail.com" style={{ color: "var(--accent)" }}>codesbytobi@gmail.com</a>
              </p>
              <button onClick={() => setStatus(STATUS.IDLE)} className="btn-outline" style={{ fontSize: "11px" }}>
                Try Again
              </button>
            </div>
          )}

          {/* Form */}
          {(status === STATUS.IDLE || status === STATUS.SENDING) && (
            <>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "30px", color: "var(--text)", marginBottom: "28px", letterSpacing: "0.04em" }}>SEND A MESSAGE</h3>
              <div ref={formRef} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                  {[
                    { key: "name",  placeholder: "Your name *",    type: "text" },
                    { key: "email", placeholder: "Email address *", type: "email" },
                  ].map(f => (
                    <input key={f.key} type={f.type} placeholder={f.placeholder}
                      style={inputStyle} value={form[f.key]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                      onFocus={handleFocus} onBlur={handleBlur}
                      disabled={status === STATUS.SENDING}
                    />
                  ))}
                </div>

                {[
                  { key: "phone",   placeholder: "Phone number (optional)", type: "tel" },
                  { key: "subject", placeholder: "Subject *",                type: "text" },
                ].map(f => (
                  <input key={f.key} type={f.type} placeholder={f.placeholder}
                    style={inputStyle} value={form[f.key]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    onFocus={handleFocus} onBlur={handleBlur}
                    disabled={status === STATUS.SENDING}
                  />
                ))}

                <textarea placeholder="Your message *" rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  onFocus={handleFocus} onBlur={handleBlur}
                  disabled={status === STATUS.SENDING}
                />

                <button
                  onClick={handleSubmit}
                  disabled={status === STATUS.SENDING}
                  className="btn-primary"
                  style={{
                    marginTop: "8px", justifyContent: "center",
                    opacity: status === STATUS.SENDING ? 0.7 : 1,
                    cursor: status === STATUS.SENDING ? "not-allowed" : "pointer",
                  }}
                >
                  {status === STATUS.SENDING ? (
                    <>
                      <span style={{ display: "inline-block", width: "12px", height: "12px", border: "2px solid var(--bg)", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
                      Sending...
                    </>
                  ) : "Send Message →"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){#contact>div{grid-template-columns:1fr!important;gap:48px!important}}
        @keyframes spin{to{transform:rotate(360deg)}}
      `}</style>
    </section>
  );
}
