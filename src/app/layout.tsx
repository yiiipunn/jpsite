import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="z-1000000000"><Navbar/></div>
       <Banner/>
        <Education/>
        <Skills/>
        <Contact/>
        <Footer/>
        {children}
      </body>
    </html>
  );
}
