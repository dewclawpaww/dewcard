import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dew — Commissions",
  description: "Furry artist · 2D and 3D animation commissions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
