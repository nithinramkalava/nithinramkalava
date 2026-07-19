import { profile } from "@/lib/data/profile";
import { rich } from "@/lib/rich";

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">04</span>
          <div>
            <h2 className="sec-title">About me</h2>
            <p className="sec-sub">The short version.</p>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-prose">
            {profile.about.map((p, i) => (
              <p key={i}>{rich(p)}</p>
            ))}
          </div>
          <aside>
            <div className="glance">
              {profile.glance.map((r) => (
                <div className="row" key={r.k}>
                  <span className="k">{r.k}</span>
                  <span className="v">{r.v}</span>
                </div>
              ))}
            </div>
            <div className="interests">
              <h4>Also into</h4>
              <div className="tags">
                {profile.interests.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
