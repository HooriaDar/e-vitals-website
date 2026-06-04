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
  title: 'e-Vitals - Remote Patient Monitoring',
  description: 'Care beyond clinic, always connected.',
  icons: {
    icon: 'assets/logo.png',
  },
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`min-h-screen flex flex-col bg-[#F5EFE6] text-primary antialiased ${plusJakarta.className}`}>
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
