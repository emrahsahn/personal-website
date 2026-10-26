"use client";

import React from "react";
import { motion } from "framer-motion";
import { useViewMode } from "@/context/ViewModeContext";
import { useLocale } from "next-intl";
import { Smartphone, Globe, Sparkles } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function ModeSwitcher() {
  const { mode, toggleMode } = useViewMode();
  const locale = useLocale();
  const isTr = locale === "tr";

  // In classic mode, Navbar handles both language switching and the iPhone mode button.
  // This guarantees there is NEVER any duplicate TR/EN button!
  if (mode === "classic") {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-[100] flex items-center gap-2 select-none">
      <LanguageSwitcher />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMode}
        className="px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-xl backdrop-blur-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all duration-300 cursor-pointer"
        title={isTr ? "Klasik Web Sayfasına Geç" : "Switch to Classic Web View"}
      >
        <Globe size={13} className="text-blue-400" />
        <span className="hidden sm:inline">
          {isTr ? "Klasik Web" : "Classic Web"}
        </span>
      </motion.button>
    </div>
  );
}
