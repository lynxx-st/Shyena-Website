import { AnalyticsProvider } from "@repo/analytics/provider";
import { ThemeProvider } from "@repo/design-system/providers/theme";
import { JsonLd, type Organization, type WithContext } from "@repo/seo/json-ld";
import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import "./styles.css";

const plexSans = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-sans" });
const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shyenasec.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shyena Technologies Pvt. Ltd. | Cybersecurity",
    template: "%s | Shyena Technologies Pvt. Ltd.",
  },
  description:
    "Cybersecurity services, security products, and practical cybersecurity learning from Shyena Technologies Pvt. Ltd. in Nepal.",
  applicationName: "Shyena Technologies Pvt. Ltd.",
  openGraph: {
    type: "website",
    siteName: "Shyena Technologies Pvt. Ltd.",
    locale: "en_NP",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function LocaleLayout({ children }: { children: ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shyena Technologies Pvt. Ltd.",
    email: "whois@shyenasec.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tikathali – 5",
      addressLocality: "Lalitpur",
      addressCountry: "NP",
    },
    url: siteUrl,
  };

  const structuredOrganization = organization as WithContext<Organization>;

  return (
    <html data-scroll-behavior="smooth" lang="en" suppressHydrationWarning>
      <body
        className={`${plexSans.variable} ${plexSerif.variable} ${plexMono.variable}`}
      >
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
          storageKey="shyena-theme"
        >
          <AnalyticsProvider>
            <Header />
            {children}
            <Footer />
          </AnalyticsProvider>
        </ThemeProvider>
        <JsonLd code={structuredOrganization} />
      </body>
    </html>
  );
}
