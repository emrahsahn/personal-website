import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ViewModeProvider } from "@/context/ViewModeContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Emrah Şahin | Software Engineer",
  description:
    "Portfolio of Emrah Şahin - Software Engineer specializing in AI, Computer Vision, and Agentic Workflows.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ViewModeProvider>{children}</ViewModeProvider>
      </body>
    </html>
  );
}
