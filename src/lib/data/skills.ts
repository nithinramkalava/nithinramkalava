import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Java", "C", "Python", "TypeScript", "SQL", "Bash", "Tcl"],
  },
  {
    title: "Cryptography & security",
    items: [
      "HSMs",
      "PKCS#11",
      "JCE",
      "KMS",
      "SignServer",
      "Post-quantum (ML-KEM, ML-DSA, SLH-DSA)",
    ],
  },
  {
    title: "Cloud & infrastructure",
    items: [
      "Google Cloud",
      "Cloud Run",
      "Cloud KMS",
      "Firestore",
      "HA VPN",
      "AWS",
      "Linux",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Web & data",
    items: ["Next.js", "React", "Node.js", "PostgreSQL", "REST APIs", "Pandas"],
  },
];

export const skillsNote =
  "I also have AWS and Google Cloud training and a handful of machine-learning and data-science certificates, but most of what I use day to day I learned by building the things above.";
