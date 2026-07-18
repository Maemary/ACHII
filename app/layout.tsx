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

const siteName = "ACHII — Africa Climate and Health Innovation Institute";
const siteDescription =
  "ACHII trains healthcare professionals, funds African researchers, and builds climate-resilient health systems across the continent.";
const ogImage =
  "https://res.cloudinary.com/davuaeyxb/image/upload/c_fill,w_1200,h_630/v1784124075/achii/images/Slides1.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://achii.co"),
  title: siteName,
  description: siteDescription,
  openGraph: {
    type: "website",
    url: "https://achii.co",
    siteName: "ACHII",
    title: siteName,
    description: siteDescription,
    images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [ogImage],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Africa Climate and Health Innovation Institute",
  alternateName: "ACHII",
  url: "https://achii.co",
  logo: "https://achii.co/icon.png",
  description: siteDescription,
  sameAs: [
    "https://www.linkedin.com/company/ecodoctr",
    "https://x.com/ACHII_Ecodoctr",
    "https://www.instagram.com/achii_ecodoctr/",
    "https://www.tiktok.com/@achii_institute",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${montserrat.variable} font-body antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <JoinModalProvider>{children}</JoinModalProvider>
      </body>
    </html>
  );
}
