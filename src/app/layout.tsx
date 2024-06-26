import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";

export const metadata: Metadata = {
  title: "LibriMente | La tua libreria online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = getServerSession();
  return (
    <html lang="en" data-theme="synthwave">
      <head>
        <meta name="title" content="LibriMente | La tua libreria online!" />
        <meta name="description" content="Sei stanco di tutti i quei libri in giro per casa? Abbiamo la soluzione per te! Con il nostro servizio potrai accedere a più di 10.000+ libri di tutti i generi che vuoi." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://librimente.it/" />
        <meta property="og:title" content="LibriMente | La tua libreria online!" />
        <meta property="og:description" content="Sei stanco di tutti i quei libri in giro per casa? Abbiamo la soluzione per te! Con il nostro servizio potrai accedere a più di 10.000+ libri di tutti i generi che vuoi." />
        <meta property="og:image" content="https://t4.ftcdn.net/jpg/05/81/69/91/360_F_581699110_zG6mpCdtyK0lAvXg89DTrbAFbEdhCrVb.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://librimente.it/" />
        <meta property="twitter:title" content="LibriMente | La tua libreria online!" />
        <meta property="twitter:description" content="Sei stanco di tutti i quei libri in giro per casa? Abbiamo la soluzione per te! Con il nostro servizio potrai accedere a più di 10.000+ libri di tutti i generi che vuoi." />
        <meta property="twitter:image" content="https://t4.ftcdn.net/jpg/05/81/69/91/360_F_581699110_zG6mpCdtyK0lAvXg89DTrbAFbEdhCrVb.jpg" />
      </head>
      <body className="min-h-screen flex flex-col justify-between">
        <SessionProvider session={session as any}>
          <Navbar />
          <section className="flex-grow">
            <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
              {children}
            </Suspense>
          </section>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
