import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "M. Zaedan Al Ghifari | Full-stack Engineer",
    template: "%s | M. Zaedan Al Ghifari",
  },
  description:
    "Full-stack engineer building reliable, maintainable web products with Next.js, Laravel, and ASP.NET Core.",
  keywords: [
    "Full-stack engineer",
    "Next.js developer",
    "Laravel developer",
    "ASP.NET Core developer",
    "Indonesia",
  ],
  authors: [{ name: "M. Zaedan Al Ghifari" }],
  openGraph: {
    type: "website",
    title: "M. Zaedan Al Ghifari | Full-stack Engineer",
    description:
      "Reliable web products built for real world workflows and long-term maintainability.",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Zaedan Al Ghifari | Full-stack Engineer",
    description:
      "Reliable web products built for real world workflows and long-term maintainability.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} flex min-h-screen flex-col bg-background text-foreground antialiased`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
