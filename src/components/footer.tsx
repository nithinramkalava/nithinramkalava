import { profile, socials } from "@/lib/data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <span className="fname">{profile.name}</span>
        <span className="fmeta">Software Engineer</span>
        <div className="socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
