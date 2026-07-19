import { experience } from "@/lib/data/experience";
import { rich } from "@/lib/rich";

export function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">01</span>
          <div>
            <h2 className="sec-title">What I do at work</h2>
            <p className="sec-sub">Where I spend my days right now.</p>
          </div>
        </div>
        <div className="xp">
          {experience.map((e) => (
            <div className="xp-row" key={e.org}>
              <div className="xp-meta">
                <p className="org">{e.org}</p>
                <p className="role">{e.role}</p>
                <p className="date">{e.date}</p>
                <p className="loc">{e.location}</p>
              </div>
              <div>
                <ul className="xp-bul">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{rich(b)}</li>
                  ))}
                </ul>
                <div className="xp-tags">
                  {e.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
