import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "NovaIPTV | Premium Futuristic Streaming",
  description: "The ultimate 4K Ultra HD streaming platform providing 20,000+ live channels, zero buffering, and cinematic VOD libraries.",
  openGraph: {
    title: "NovaIPTV | Premium Futuristic Streaming",
    description: "The ultimate 4K Ultra HD streaming platform providing 20,000+ live channels, zero buffering, and cinematic VOD libraries.",
    url: "https://novaiptv.com",
    siteName: "NovaIPTV",
    images: [{ url: "https://novaiptv.com/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} bg-background font-sans text-slate-100 min-h-screen flex flex-col antialiased selection:bg-primary/30 selection:text-white`}>
        <NoiseOverlay />
        <Toaster theme="dark" position="bottom-right" toastOptions={{ style: { background: '#111827', border: '1px solid rgba(255,255,255,0.1)' } }} />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
