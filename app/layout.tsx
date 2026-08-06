import '../styles/globals.css';
import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'SmokeGrill — Parrilladas por encargo',
  description: 'SmokeGrill — Parrilladas premium, ahumados y parrilla. Ordena en línea.',
  openGraph: {
    title: 'SmokeGrill',
    description: 'Parrilladas premium y ahumados por encargo.',
    url: 'https://tusitio.com',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
