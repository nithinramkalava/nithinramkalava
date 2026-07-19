import type { SocialLink, GlanceRow } from "../types";

export const profile = {
  name: "Nithin Ram Kalava",
  firstName: "Nithin Ram Kalava",
  role: "Software Engineer",
  company: "SecureMachines",
  eyebrow: "Software Engineer, SecureMachines",
  location: "Bengaluru, India",
  email: "nithin@nithinram.com",
  resumeUrl: "/files/Resume.pdf",

  heroLead:
    "I'm a software engineer at SecureMachines, working on Cloud HSM: the cloud services and infrastructure that let applications use hardware security modules remotely, across both cloud and on-prem. Right now I'm the **primary engineer connecting our HSMs to a national identity system that serves over a billion people**. On the side, I maintain `pqc`, a post-quantum cryptography library that other developers use.",

  chips: [
    "Cloud services & infrastructure",
    "HSM, PKCS#11, JCE",
    "Post-Quantum Crypto",
    "Low-level systems",
  ],

  about: [
    "I studied computer science and joined SecureMachines right after. Most of what I know I learned by building things and taking them apart: web apps, data pipelines, a cryptography library, and now the cloud infrastructure behind hardware security modules.",
    "I like problems that sit close to the hardware, where a small mistake is the difference between secure and not. I'm comfortable moving between a Linux box, a cloud console and a Java stack in the same afternoon, and I care about making complicated systems simple enough for other people to actually use.",
    "Outside of work I build PCs, run a small home lab, tinker with Linux, throw darts, and watch far too many films. I recently moved to Bengaluru for this job, and I'm slowly learning Kannada.",
  ],

  glance: [
    { k: "Role", v: "Software Engineer, SecureMachines" },
    { k: "Based in", v: "Bengaluru, India" },
    { k: "Focus", v: "Cloud HSM, cryptography, systems" },
    { k: "Education", v: "B.Tech, Computer Science" },
  ] as GlanceRow[],

  interests: ["PC building", "Home lab", "Linux", "Post-quantum crypto", "Darts", "Films"],

  contactLead:
    "Happy to talk about cryptography, HSMs, cloud infrastructure, or any interesting systems problem. The quickest way to reach me is **email**.",
};

export const socials: SocialLink[] = [
  { label: "Email", href: "mailto:nithin@nithinram.com", handle: "nithin@nithinram.com" },
  { label: "GitHub", href: "https://github.com/nithinramkalava", handle: "github.com/nithinramkalava" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nithinramkalava", handle: "in/nithinramkalava" },
];
