import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

// Layout Components
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AIConsultant from "@/components/features/AIConsultant";
import FloatingMobileBooking from "@/components/ui/FloatingMobileBooking";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SLBA | Saroj Luxe Beauty Atelier",
  description: "Experience global luxury bridal makeup and styling with Saroj Sharma at SLBA - Saroj Luxe Beauty Atelier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-black-matte text-ivory">
        <SmoothScroll>
          <CustomCursor>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <FloatingMobileBooking />
            <AIConsultant />
            <FloatingWhatsApp />
          </CustomCursor>
        </SmoothScroll>
      </body>
    </html>
  );
}
