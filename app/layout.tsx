import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe — Financial infrastructure to grow your revenue",
  description:
    "A Next.js recreation of Stripe’s homepage. Explore payments, billing, and financial tools for businesses of every size.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Stripe — Financial infrastructure to grow your revenue",
    description: "Payments and financial tools, built for your next chapter.",
    images: [{ url: "/assets/stripe-wave.webp", width: 1388, height: 975 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
