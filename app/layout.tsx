import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import "./globals.css";
import JoinModalProvider from "@/app/components/JoinModalProvider";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ACHII — Africa Climate and Health Innovation Institute",
  description:
    "ACHII trains healthcare professionals, funds African researchers, and builds climate-resilient health systems across the continent.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${montserrat.variable} font-body antialiased`}>
        <JoinModalProvider>{children}</JoinModalProvider>
      </body>
    </html>
  );
}
