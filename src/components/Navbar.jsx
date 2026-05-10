import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/portfolio";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        height: "68px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 5vw",
        background: scrolled ? "rgba(8,8,8,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: "var(--font-mono)", fontSize: "13px",
          letterSpacing: "0.06em", color: "var(--accent)",
          display: "flex", alignItems: "center", gap: "6px",
        }}>
          <span style={{
            width: "28px", height: "28px", borderRadius: "4px",
            background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--bg)", fontWeight: 700, fontSize: "11px",
          }}>CT</span>
          codesbytobi
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "36px" }} className="hide-mobile">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} style={{
              fontFamily: "var(--font-mono)", fontSize: "11px",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: isActive(link.href) ? "var(--accent)" : "var(--text-mid)",
              transition: "color 0.2s", position: "relative", padding: "4px 0",
            }}
              onMouseEnter={e => { if (!isActive(link.href)) e.currentTarget.style.color = "var(--text)"; }}
              onMouseLeave={e => { if (!isActive(link.href)) e.currentTarget.style.color = "var(--text-mid)"; }}
            >
              {link.label}
              {isActive(link.href) && (
                <span style={{
                  position: "absolute", bottom: "-2px", left: 0, right: 0,
                  height: "1px", background: "var(--accent)",
                  borderRadius: "1px",
                }} />
              )}
            </Link>
          ))}
          <a href="/contact" className="btn-primary" style={{ padding: "10px 22px", fontSize: "10px" }}>
            Hire Me ↗
          </a>
          <ThemeToggle theme={theme} toggle={toggle} />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hide-desktop"
          style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "6px" }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              width: "22px", height: "1.5px", background: "var(--text)", display: "block",
              transition: "all 0.3s ease",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                : i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)" : "scaleX(0)"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 190,
        background: "rgba(8,8,8,0.98)",
        backdropFilter: "blur(20px)",
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "flex-start",
        padding: "0 10vw",
        transition: "opacity 0.35s ease, visibility 0.35s ease",
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? "visible" : "hidden",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
          {navLinks.map((link, i) => (
            <Link key={link.label} to={link.href} style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(36px, 10vw, 60px)",
              color: isActive(link.href) ? "var(--accent)" : "var(--text-muted)",
              lineHeight: 1.2, letterSpacing: "0.04em",
              transition: "color 0.2s, transform 0.2s",
              transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
              transitionDelay: `${i * 0.05}s`,
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.transform = "translateX(8px)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = isActive(link.href) ? "var(--accent)" : "var(--text-muted)"; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div style={{ marginTop: "48px", borderTop: "1px solid var(--border)", paddingTop: "32px", width: "100%", display: "flex", alignItems: "center", gap: "16px" }}>
          <a href="/#contact" className="btn-primary">Get in touch ↗</a>
          <ThemeToggle theme={theme} toggle={toggle} />
        </div>
      </div>
    </>
  );
}

function ThemeToggle({ theme, toggle }) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        width: "44px",
        height: "24px",
        borderRadius: "12px",
        background: isDark ? "var(--surface)" : "var(--border)",
        border: "1px solid var(--border-light)",
        position: "relative",
        cursor: "pointer",
        flexShrink: 0,
        transition: "background 0.3s, border-color 0.3s",
        display: "flex",
        alignItems: "center",
        padding: "2px",
      }}
    >
      {/* Track icons */}
      <span style={{
        position: "absolute",
        left: "5px",
        fontSize: "10px",
        opacity: isDark ? 0.4 : 0,
        transition: "opacity 0.3s",
        userSelect: "none",
      }}>☀️</span>
      <span style={{
        position: "absolute",
        right: "5px",
        fontSize: "10px",
        opacity: isDark ? 0 : 0.4,
        transition: "opacity 0.3s",
        userSelect: "none",
      }}>🌙</span>
      {/* Thumb */}
      <span style={{
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        background: "var(--accent)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "9px",
        transform: isDark ? "translateX(0px)" : "translateX(20px)",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), background 0.3s",
        flexShrink: 0,
        boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
      }}>
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
