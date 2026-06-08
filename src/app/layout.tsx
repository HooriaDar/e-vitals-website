import './globals.css';
import Header from '@/components/home/Header';
import FooterSection from '../components/home/FooterSection';
import { ReactNode } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import VisualEffects from '@/components/home/VisualEffects';

interface RootLayoutProps {
  children: ReactNode;
}

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: "E-Vitals RPM | Remote Patient Monitoring & Chronic Care Management",
  description:
    "E-Vitals RPM provides remote patient monitoring, chronic care management, and healthcare technology solutions for medical practices.",
  openGraph: {
    title: "E-Vitals RPM",
    description:
      "Remote patient monitoring and chronic care management solutions for healthcare providers.",
    url: "https://evitalsrpm.com",
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
              url: "https://evitalsrpm.com",
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
      </body>
    </html>
  );
};

export default RootLayout;
