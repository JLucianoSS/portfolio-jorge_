import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jorge Luciano",
  description: "Mi portafolio actualizado",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar/>

        {children}
        
      </body>
    </html>
  );
}
