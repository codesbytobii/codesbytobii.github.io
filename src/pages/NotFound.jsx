import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page-wrap" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 5vw", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(120px, 20vw, 240px)", color: "var(--border)", lineHeight: 1, marginBottom: "0", userSelect: "none" }}>404</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 52px)", color: "var(--text)", marginBottom: "16px", marginTop: "-20px" }}>PAGE NOT FOUND</h1>
        <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.8, maxWidth: "400px", margin: "0 auto 40px" }}>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-primary">← Back to Home</Link>
      </div>
    </div>
  );
}
