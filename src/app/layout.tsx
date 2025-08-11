import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper"; // client-side component
import Footer from "@/components/common/Footer";
import { Loader } from '../components/common/Loader'
import FluidCursor from "@/components/FluidCursor"; // client-side component
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Crystal Knot Films",
  description: "Crystal Knot Films is a professional video editing company specializing in cinematic edits for weddings, Instagram reels, podcasts, and corporate events — crafting engaging stories that captivate every audience.",
  icons: {
    icon: "./images/Ck logo.png", // Path from public/
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Loader loadingTime={3000}>

          <FluidCursor />

          <NavbarWrapper />

          {children}
          <section className="relative z-10 bg-[#f5f5f5]">
            <Footer />
          </section>
        </Loader>

      </body>
    </html>
  );
}
