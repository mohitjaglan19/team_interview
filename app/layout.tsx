import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
<<<<<<< HEAD
=======
import { Toaster } from "@/components/ui/sonner"

>>>>>>> 39684c2 (setup app, file and folder structure, routing and auth page)

import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrepWise",
<<<<<<< HEAD
  description: "An AI-powered platform for preparing for mock interviews",
=======
  description: "A platform for preparing for mock interviews",
>>>>>>> 39684c2 (setup app, file and folder structure, routing and auth page)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>
<<<<<<< HEAD
        {children}

        <Toaster />
=======
        
        
        {children}

        <Toaster/>

>>>>>>> 39684c2 (setup app, file and folder structure, routing and auth page)
      </body>
    </html>
  );
}
