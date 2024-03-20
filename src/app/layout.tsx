import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jorge Luciano",
  description: "Mi portafolio actualizado",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="md:relative">
          <div
            className="md:bg-[#242424] md:w-full md:h-screen md:flex
            md:justify-center  md:items-center md:gap-6 md:absolute"
          >
            {children}
          </div>
          <Navbar/>
          <Footer/>
        </div>
        
      </body>
    </html>
  );
}
