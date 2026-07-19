import { Lattice } from "../lattice";
import { profile } from "@/lib/data/profile";
import { rich } from "@/lib/rich";

export function HeroSection() {
  return (
    <header className="hero" id="top">
      <Lattice />
      <div className="hero-scrim" />
      <div className="wrap hero-in">
        <div className="hero-main">
          <span className="eyebrow">
            <span className="live" />
            {profile.eyebrow}
          </span>
          <h1 className="hl">
            Hi, I&apos;m <span className="em">{profile.firstName}</span>.
          </h1>
          <p className="lead">{rich(profile.heroLead)}</p>
          <div className="cta">
            <a className="btn pri" href="#work">
              See my work <span className="arr">→</span>
            </a>
            <a className="btn sec" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
              Résumé
            </a>
          </div>
          <div className="chips">
            {profile.chips.map((c) => (
              <span className="chip" key={c}>
                <b>◈</b> {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
