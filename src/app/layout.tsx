import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Footer from "@/components/custom/Footer";
import { Toaster } from "sonner";
import { Lexend_Deca } from "next/font/google";
import LinkNav from "@/components/custom/LinkNav";
import { NavDock } from "@/components/custom/Dock";

const fredoka = localFont({
    src: [
    {
        path: "../../public/fonts/Fredoka-Light.ttf",
        weight: "300",
    },
    {
        path: "../../public/fonts/Fredoka-Regular.ttf", // Correct path from public directory
        weight: "400",
    },
    {
        path: "../../public/fonts/Fredoka-Medium.ttf",
        weight: "500",
    },
    {
        path: "../../public/fonts/Fredoka-SemiBold.ttf",
        weight: "600",
    },
    {
        path: "../../public/fonts/Fredoka-Bold.ttf",
        weight: "700",
    },
    ],
    variable: "--font-fredoka", // CSS variable for font
});

const euclid = localFont({
    src: [
    {
        path: "../../public/fonts/Euclid Circular A Regular.ttf",
        weight: "500",
    },
    {
        path: "../../public/fonts/Euclid Circular A Medium.ttf",
        weight: "600",
    },
    {
        path: "../../public/fonts/Euclid Circular A SemiBold.ttf",
        weight: "700",
    },
    {
        path: "../../public/fonts/Euclid Circular A Bold.ttf",
        weight: "800",
    },
    {
        path: "../../public/fonts/Euclid Circular A Italic.ttf",
        weight: "400",
        style: "italic",
    },
    ],
    variable: "--font-euclid", // CSS variable for font
});

const lexendDeca = Lexend_Deca({
    subsets: ["latin"],
    variable: "--font-lexend-deca",
});


export const metadata: Metadata = {
  title: "Arunabh's Portfolio",
  description: "Arunabh's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${euclid.className} ${fredoka.className} ${lexendDeca.className} overflow-x-hidden  flex flex-col antialiased hidden-scrollbar`}
      >
        {children}
        {/* <LinkNav /> */}
        <NavDock />
        <Toaster richColors position="top-right" closeButton theme="dark" />
      </body>
    </html>
  );
}
