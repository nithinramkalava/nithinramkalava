import type { ExperienceItem } from "../types";

export const experience: ExperienceItem[] = [
  {
    org: "SecureMachines",
    role: "Software Engineer",
    date: "Since Nov 2025",
    location: "Cryptographic security · Bengaluru",
    bullets: [
      "As the **primary engineer** on our national identity work, I integrate our HSMs into a biometric identity system that serves **over a billion people**, and into an open-source identity platform that governments deploy.",
      "I'm building SecureMachines' **enterprise Cloud HSM**: the cloud services and infrastructure that let organizations use our hardware security modules remotely, staying compatible with the KMS, SignServer and PKCS#11 tooling they already run, across both cloud and on-prem.",
      "I designed and built parts of **Augha**, a customer-facing Entropy-as-a-Service platform on **Google Cloud** (Compute Engine, Cloud Run, Cloud KMS, Firestore, Memorystore, API Gateway, load balancers and HA VPN).",
      "I built a **JCE provider** and helped bring HSM support to **Linux**, writing C shared libraries (`.so`) and wiring up PKCS#11 so existing applications use the hardware with no code changes.",
      "I optimized the protocol and implementation for our cryptographic operations, bringing the latency down from around **1.8 seconds to about 11 milliseconds**.",
      "On the side, I built a lightweight REST API over PKCS#11 so developers can try our post-quantum HSM without wiring up the native interface first.",
    ],
    tags: [
      "Java / JCE",
      "C",
      "PKCS#11",
      "Google Cloud",
      "Cloud KMS",
      "HA VPN",
      "SignServer",
      "Linux",
    ],
  },
];
