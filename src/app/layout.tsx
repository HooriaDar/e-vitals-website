import './globals.css';
import Header from '@/components/home/Header';
import FooterSection from '../components/home/FooterSection';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import VisualEffects from '@/components/home/VisualEffects';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

interface RootLayoutProps {
  children: ReactNode;
}

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.evitalsrpm.com"),
  title: "E-Vitals RPM | Remote Patient Monitoring & Chronic Care Management",
  description:
    "E-Vitals RPM provides remote patient monitoring, chronic care management, and healthcare technology solutions for medical practices.",
  alternates: {
    canonical: "https://www.evitalsrpm.com/",
  },
  icons: {
    icon: [
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "E-Vitals RPM",
    description:
      "Remote patient monitoring and chronic care management solutions for healthcare providers.",
    url: "https://www.evitalsrpm.com",
    siteName: "E-Vitals RPM",
    type: "website",
  },
};
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`min-h-screen flex flex-col bg-[#F5EFE6] text-primary antialiased ${plusJakarta.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: "E-Vitals RPM",
              url: "https://www.evitalsrpm.com",
              logo: "https://www.evitalsrpm.com/android-chrome-192x192.png",
              description:
                "Remote patient monitoring and chronic care management solutions for healthcare providers.",
            }),
          }}
        />
        <VisualEffects />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <FooterSection />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
