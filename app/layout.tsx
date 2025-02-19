import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
{/*import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { RightAppSidebar } from "@/components/right-sidebar";*/}


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
        {/*<SidebarProvider>*/}
        {/*<RightAppSidebar />*/}
        {/*<AppSidebar />*/}
        
        <main className="min-h-screen">
        {/*<SidebarTrigger />*/}
        {children}
        </main>
        {/*</SidebarProvider>*/}
        {/* footer */}
        <div className="container mx-auto p-4 text-center text-gray-700">
          <p>Made by Ashreeta Patra</p>
        </div>
      </body>
    </html>
  );
}
