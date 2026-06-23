import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alaa Jomaa",
  description: "Software Engineer",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black">
        <Header />
        <main className="flex-1 mx-24  px-8 lg:px-16 py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
