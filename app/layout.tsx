import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurore de la Vie - British Shorthair Cattery",
  description: "British Shorthair Cattery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#222222]">
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        <div className="h-16" />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
