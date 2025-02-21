import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Music Player App",
  description: "Generated by Ashreeta Patra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* header */} 
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main className="min-h-screen">
          
    {children}
        </main>
        </ThemeProvider> 
        {/* footer */}
        {/* <div className="container mx-auto p-24 text-center text-gray-700">
          <p>Made by Ashreeta Patra</p>
        </div> */}
      </body>
    </html>
  );
}
