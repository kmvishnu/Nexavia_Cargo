import type { Metadata } from "next";
import { ProposalProvider } from "@/components/marketing/ProposalModal";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "../styles.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: "Nexavia Global Cargo LLC — Aviation Services & Freight Brokerage",
    template: "%s | Nexavia Global Cargo LLC",
  },
  description:
    "Dubai-based aviation services and freight brokerage company connecting airlines, operators and global cargo markets.",
  openGraph: {
    title: "Nexavia Global Cargo LLC",
    description: "Aviation Expertise. Global Connections. Commercial Excellence.",
    type: "website",
    url: "https://nexaviaglobalcargo.com",
    siteName: "Nexavia Global Cargo",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google:'JX13vU6SGvGYyjqWKK5SzJagEYUqCn3Yk9ZtJG5xGIQ'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <ProposalProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster position="top-center" richColors />
        </ProposalProvider>
        <GoogleAnalytics gaId="G-78VL0R97FZ" />
      </body>
    </html>
  );
}
