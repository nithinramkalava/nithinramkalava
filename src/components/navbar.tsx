"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { profile } from "@/lib/data/profile";

const LINKS = [
  { href: "#work", label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#about", label: "about" },
  { href: "#contact", label: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-in">
        <a className="brand" href="#top">
          <span className="glyph">N</span>Nithin
        </a>
        <div className={`nav-links ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="rez" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
            résumé
          </a>
        </div>
        <div className="nav-right">
          <ThemeToggle />
          <button
            className="nav-burger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
