import type { Metadata } from "next";
import { AnimatedCursor } from "@/components/AnimatedCursor";
import { FloatingAIBox } from "@/components/FloatingAIBox";
import { RouteTheme } from "@/components/RouteTheme";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "TEAM FLOW | Odisha Student Innovation Network",
  description:
    "TEAM FLOW connects students, colleges, industries, and government to build Odisha's largest innovation network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RouteTheme />
        <div className="page-bg" aria-hidden>
          <span className="mesh mesh-one" />
          <span className="mesh mesh-two" />
          <span className="mesh mesh-three" />
          <span className="grid-overlay" />
        </div>
        <AnimatedCursor />
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingAIBox />
      </body>
    </html>
  );
}
