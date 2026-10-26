"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X, Smartphone } from "lucide-react";
import { Link } from "@/i18n/routing";
import { navLinks } from "@/lib/site-config";
import { useViewMode } from "@/context/ViewModeContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isTr = locale === "tr";
  const { setMode } = useViewMode();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      const isMobile = window.innerWidth < 768;
      if (!isMobile || isOpen) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (scrollDelta > 8) {
        setIsVisible(false);
      } else if (scrollDelta < -8) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full md:translate-y-0"
      } ${
        scrolled || isOpen
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/15 shadow-lg shadow-accent-purple/5 md:glass md:border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            ES
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors relative group"
              >
                {t(link.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-purple to-accent-orange group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMode("ios")}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white flex items-center gap-1.5 shadow-md shadow-purple-500/20 transition-all cursor-pointer"
              title={isTr ? "iPhone arayüzüne dön" : "Switch to iPhone mode"}
            >
              <Smartphone size={13} className="text-purple-200" />
              <span>{isTr ? "iPhone Modu" : "iPhone Mode"}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/15">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/70 hover:text-white transition-colors py-2"
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="pt-3 flex items-center justify-between border-t border-white/10">
              <LanguageSwitcher />
              <button
                onClick={() => {
                  setIsOpen(false);
                  setMode("ios");
                }}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center gap-1.5 shadow"
              >
                <Smartphone size={13} className="text-purple-200" />
                <span>{isTr ? "iPhone Modu" : "iPhone Mode"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
