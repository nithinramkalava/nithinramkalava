import { featuredProject, otherProjects } from "@/lib/data/projects";
import { rich } from "@/lib/rich";

export function ProjectsSection() {
  const fp = featuredProject;
  return (
    <section className="section" id="work">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">02</span>
          <div>
            <h2 className="sec-title">Things I&apos;ve built</h2>
            <p className="sec-sub">A few projects I made end to end, outside of work.</p>
          </div>
        </div>
        <div className="work-grid">
          <article className="feat">
            <span className="id">FEATURED · 01</span>
            <h3>{fp.name}</h3>
            <p className="sub">{fp.tagline}</p>
            <p className="body">{rich(fp.description)}</p>
            {fp.stats && (
              <ul className="stats">
                {fp.stats.map((s) => (
                  <li key={s.label}>
                    {s.label}
                    <span className="tab">{s.accent ? <em>{s.value}</em> : s.value}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="wtags">
              {fp.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="wlinks">
              {fp.links.map((l) => (
                <a
                  key={l.href}
                  className={`wlink ${l.primary ? "pri" : ""}`}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </article>

          <div className="idx">
            {otherProjects.map((p, i) => (
              <a
                key={p.slug}
                className="idx-item"
                href={p.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="top">
                  <h4>{p.name}</h4>
                  <span className="n">{String(i + 2).padStart(2, "0")}</span>
                </div>
                <p>{rich(p.description)}</p>
                <div className="t">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
