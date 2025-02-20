import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Caprasimo, Crimson_Text } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const caprasimo = Caprasimo({
  weight: '400',
  variable: "--font-caprasimo",
  subsets: ['latin'],
});

const crimsonText = Crimson_Text({
  weight: ['400', '600', '700'],
  variable: "--font-crimson-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Midas Website",
  description: "Created by Ian Mann and Erick Alvarez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${caprasimo.variable} ${crimsonText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
