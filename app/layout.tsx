import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Montserrat } from "next/font/google";

const raleway = Raleway({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Firehouse BBQ & Blues",
  description:
    "The official website for Firehouse BBQ & Blues in Richmond, Indiana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
