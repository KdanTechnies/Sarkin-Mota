import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

// Montserrat for headlines (gives a premium, wide-track look)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "900"],
});

// Inter for clean, readable body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sarkin Mota | Premium Luxury Automotive Marketplace",
  description: "Discover verified luxury and affordable vehicles from Nigeria's most trusted automotive marketplace.",
  keywords: ["Luxury Cars Nigeria", "Buy Cars Lagos", "Sarkin Mota", "Verified Vehicles"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased bg-dark text-white`}
      >
        {children}
      </body>
    </html>
  );
}