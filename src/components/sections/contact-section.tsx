import { profile, socials } from "@/lib/data/profile";
import { rich } from "@/lib/rich";
import { ContactForm } from "../contact-form";

export function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">05</span>
          <div>
            <h2 className="sec-title">Get in touch</h2>
            <p className="sec-sub">I read everything that comes in.</p>
          </div>
        </div>
        <div className="contact-grid">
          <div>
            <p className="contact-lead">{rich(profile.contactLead)}</p>
            <div className="contact-links">
              {socials.map((s) => (
                <a
                  key={s.label}
                  className="clink"
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <span className="k">{s.label}</span>
                  <span className="v">
                    {s.handle} <span className="arr">→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
