"use client";

import React from "react";
import { ViewModeProvider, useViewMode } from "@/context/ViewModeContext";
import { usePathname } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ModeSwitcher from "@/components/ModeSwitcher";
import HashScrollHandler from "@/components/HashScrollHandler";

function InnerLayout({ children }: { children: React.ReactNode }) {
  const { mode } = useViewMode();
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "";

  // Show classic navbar & footer on blog pages or when in classic mode
  const showClassicChrome = !isHomePage || mode === "classic";

  return (
    <div className="flex min-h-screen flex-col relative">
      <HashScrollHandler />
      {/* Ever-present mode switcher & language selector */}
      <ModeSwitcher />

      {showClassicChrome && <Navbar />}
      <main className="flex-1">{children}</main>
      {showClassicChrome && <Footer />}
    </div>
  );
}

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewModeProvider>
      <InnerLayout>{children}</InnerLayout>
    </ViewModeProvider>
  );
}
