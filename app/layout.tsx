import Preloader from "@/app/Components/Preloader";
import CustomCursor from "./Components/ui/CustomCursor";
import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
export const metadata: Metadata = {
  title: "Nexus",
  description: "Crafting Premium Digital Ecosystems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Preloader />
        
        <Header/>
        {/* আপনার মূল ওয়েবসাইটের কনটেন্ট */}
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}