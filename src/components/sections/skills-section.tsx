import { skillGroups, skillsNote } from "@/lib/data/skills";

export function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">03</span>
          <div>
            <h2 className="sec-title">What I work with</h2>
            <p className="sec-sub">The tools I reach for most.</p>
          </div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div className="skill-group" key={g.title}>
              <h3>{g.title}</h3>
              <div className="tags">
                {g.items.map((it) => (
                  <span key={it}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="skills-note">{skillsNote}</p>
      </div>
    </section>
  );
}
