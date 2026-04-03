import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/portfolio";

export default function BlogSingle() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug) ?? blogPosts[0];
  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="page-wrap">
      {/* Header */}
      <section style={{ padding: "140px 5vw 60px", background: "var(--bg-2)", borderBottom: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.15 }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link to="/blog" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "36px", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
          >← Back to Blog</Link>
          <span className="tag" style={{ marginBottom: "16px" }}>{post.category}</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 0.95, color: "var(--text)", marginBottom: "24px" }}>
            {post.title.toUpperCase()}
          </h1>
          <div style={{ display: "flex", gap: "16px", fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
            <span>Oluwatobi</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 5vw" }}>
        <div style={{ height: "420px", borderRadius: "0 0 var(--radius-md) var(--radius-md)", overflow: "hidden", border: "1px solid var(--border)", borderTop: "none" }}>
          <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Article body */}
      <section style={{ padding: "80px 5vw 100px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          {/* Intro */}
          <p style={{ fontSize: "18px", lineHeight: 1.9, color: "var(--text-mid)", marginBottom: "40px", fontStyle: "italic", borderLeft: "3px solid var(--accent)", paddingLeft: "20px" }}>{post.excerpt}</p>

          {/* Placeholder article sections */}
          {[
            { heading: "Introduction", body: "Every developer eventually hits the wall where their application becomes noticeably slower. In this article we'll explore the root causes, provide reproducible examples, and walk through battle-tested solutions you can apply today." },
            { heading: "Understanding the Problem", body: "Before we reach for solutions, we need to understand what causes the issue in the first place. Most performance problems stem from unnecessary re-renders, large bundle sizes, or unoptimized data fetching strategies. Each has its own diagnosis and treatment." },
            { heading: "The Solution", body: "The fix is almost always simpler than expected. Once you've correctly identified the bottleneck — whether it's a missing memo(), an over-fetching API call, or a missing virtualized list — the resolution is straightforward and the performance gains are dramatic." },
            { heading: "Conclusion", body: "Performance optimization is a discipline, not a checkbox. Adopt a habit of profiling before optimizing, measuring after, and documenting your findings. Your future self — and your users — will thank you." },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: "40px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--text)", marginBottom: "16px", letterSpacing: "0.04em" }}>{section.heading.toUpperCase()}</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.9 }}>{section.body}</p>
            </div>
          ))}

          {/* Tags */}
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section style={{ padding: "0 5vw 100px", background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--text)", padding: "60px 0 40px" }}>MORE ARTICLES</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--border)" }}>
            {related.map((p, i) => (
              <Link key={i} to={`/blog/${p.slug}`} style={{ background: "var(--bg)", display: "block", overflow: "hidden", transition: "background 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-3)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--bg)")}
              >
                <div style={{ height: "160px", overflow: "hidden" }}>
                  <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <span className="tag" style={{ marginBottom: "10px" }}>{p.category}</span>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "var(--text)", lineHeight: 1.2 }}>{p.title.toUpperCase()}</h4>
                </div>
              </Link>
            ))}
          </div>
          <style>{`@media(max-width:600px){section>div>div:last-child{grid-template-columns:1fr!important}}`}</style>
        </div>
      </section>
    </div>
  );
}
