import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <button
        onClick={scrollUp}
        aria-label="Scroll to top"
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          zIndex: 300,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "var(--accent)",
          color: "var(--bg)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: 700,
          boxShadow: "0 4px 24px rgba(200,245,66,0.3)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.8)",
          transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)",
          pointerEvents: visible ? "auto" : "none",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = "var(--accent-hover)";
          e.currentTarget.style.transform = "translateY(-3px) scale(1.08)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = "var(--accent)";
          e.currentTarget.style.transform = "translateY(0) scale(1)";
        }}
      >
        ↑
      </button>
    </>
  );
}
