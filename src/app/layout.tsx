import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Shiftcivic",
  description: "Shiftcivic - A new experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
