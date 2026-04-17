import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat_Brush } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveatBrush = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caveat-brush",
});

export const metadata: Metadata = {
  title: "I’m Akhirudin Salasa – Web Developer Who Loves Building Things",
  description:
    "Welcome! I'm Akhirudin Salasa, a web developer who’s passionate about clean design, thoughtful code, and building digital experiences that matter.",
  keywords: [
    "Akhirudin Salasa",
    "Web Developer",
    "Software Engineer",
    "Full-stack Developer",
    "Semarang",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveatBrush.variable} bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
