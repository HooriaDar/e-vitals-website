import './globals.css';
import Header from '@/components/home/Header';
import FooterSection from '../components/home/FooterSection';
import { ReactNode } from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';

interface RootLayoutProps {
  children: ReactNode;
}

// Load Plus Jakarta Sans font globally
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'e-Vitals - Remote Patient Monitoring',
  description: 'Care beyond clinic, always connected.',
  icons: {
    icon: 'assets/logo.png', // Path relative to public/
  },
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`min-h-screen flex flex-col bg-white text-plum antialiased ${plusJakartaSans.className}`}>
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
