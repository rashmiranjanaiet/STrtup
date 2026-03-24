"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type RouteTheme =
  | "home"
  | "about"
  | "problem"
  | "platform"
  | "features"
  | "benefits"
  | "revenue"
  | "government"
  | "execution"
  | "contact"
  | "proposal"
  | "dashboard"
  | "dashboard-student"
  | "dashboard-college"
  | "dashboard-sponsor";

const resolveTheme = (pathname: string): RouteTheme => {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/problem-solution")) return "problem";
  if (pathname.startsWith("/platform-structure")) return "platform";
  if (pathname.startsWith("/features")) return "features";
  if (pathname.startsWith("/benefits")) return "benefits";
  if (pathname.startsWith("/revenue-model")) return "revenue";
  if (pathname.startsWith("/government-alignment")) return "government";
  if (pathname.startsWith("/execution-plan")) return "execution";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/proposal")) return "proposal";
  if (pathname.startsWith("/dashboard/student")) return "dashboard-student";
  if (pathname.startsWith("/dashboard/college")) return "dashboard-college";
  if (pathname.startsWith("/dashboard/sponsor")) return "dashboard-sponsor";
  if (pathname.startsWith("/dashboard")) return "dashboard";
  return "home";
};

export function RouteTheme() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.dataset.routeTheme = resolveTheme(pathname);

    return () => {
      delete document.body.dataset.routeTheme;
    };
  }, [pathname]);

  return null;
}
