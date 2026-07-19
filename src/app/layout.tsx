import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://nithinram.com";
const DESCRIPTION =
  "Nithin Ram Kalava is a software engineer at SecureMachines working on Cloud HSM: the cloud services and infrastructure that make hardware security modules usable remotely. He also maintains pqc, a post-quantum cryptography library for JavaScript.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nithin Ram Kalava — Software Engineer",
  description: DESCRIPTION,
  keywords: [
    "Nithin Ram Kalava",
    "Software Engineer",
    "Cloud HSM",
    "Hardware Security Module",
    "Cryptography",
    "PKCS#11",
    "JCE",
    "Post-Quantum Cryptography",
    "SecureMachines",
  ],
  authors: [{ name: "Nithin Ram Kalava" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Nithin Ram Kalava — Software Engineer",
    description: DESCRIPTION,
    siteName: "Nithin Ram Kalava",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithin Ram Kalava — Software Engineer",
    description: DESCRIPTION,
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.classList.add(t);}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
