import { Link } from "react-router-dom";
import { blogPosts } from "../data/portfolio";

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="page-wrap">
      {/* Hero */}
      <section style={{ padding: "160px 5vw 80px", background: "var(--bg-2)", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p className="section-label fade-up">Blog & Thoughts</p>
          <h1 className="fade-up-1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 0.92, color: "var(--text)", maxWidth: "700px" }}>
            WRITING ON<br />CODE & <span style={{ color: "var(--accent)" }}>CRAFT</span>
          </h1>
          <p className="fade-up-2" style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.8, maxWidth: "460px", marginTop: "24px" }}>
            Thoughts on frontend development, career advice for Nigerian developers, and lessons from building real products.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section style={{ padding: "80px 5vw", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "24px" }}>Featured</p>
          <Link to={`/blog/${featured.slug}`} style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center",
            background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
            overflow: "hidden", transition: "border-color 0.3s",
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            <div style={{ height: "360px", overflow: "hidden" }}>
              <img src={featured.image} alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
            <div style={{ padding: "0 40px 0 0" }}>
              <span className="tag" style={{ marginBottom: "16px" }}>{featured.category}</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 40px)", color: "var(--text)", lineHeight: 1.1, marginBottom: "16px" }}>{featured.title.toUpperCase()}</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.8, marginBottom: "24px" }}>{featured.excerpt}</p>
              <div style={{ display: "flex", gap: "16px", fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
            </div>
          </Link>
          <style>{`@media(max-width:768px){section>div>a{grid-template-columns:1fr!important}section>div>a>div:first-child{height:220px!important}section>div>a>div:last-child{padding:0 24px 24px!important}}`}</style>
        </div>
      </section>

      {/* All posts */}
      <section style={{ padding: "80px 5vw 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1px", background: "var(--border)" }}>
            {rest.map((post, i) => (
              <Link key={i} to={`/blog/${post.slug}`} style={{ background: "var(--bg)", display: "block", overflow: "hidden", transition: "background 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-3)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--bg)")}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <div style={{ padding: "28px" }}>
                  <span className="tag" style={{ marginBottom: "12px" }}>{post.category}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--text)", marginBottom: "10px", lineHeight: 1.15 }}>{post.title.toUpperCase()}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "13px", lineHeight: 1.7, marginBottom: "20px" }}>{post.excerpt.slice(0, 100)}...</p>
                  <div style={{ display: "flex", gap: "12px", fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em", justifyContent: "space-between" }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
