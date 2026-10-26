"use client";

import React, { useState } from "react";
import {
  Lock,
  RotateCw,
  Share2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ExternalLink,
  BookOpen,
  Copy,
  Check,
} from "lucide-react";
import { useViewMode } from "@/context/ViewModeContext";
import { useLocale } from "next-intl";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import IOSHomeBar from "../IOSHomeBar";

interface SafariAppProps {
  onClose: () => void;
}

export default function IOSSafariApp({ onClose }: SafariAppProps) {
  const { setMode } = useViewMode();
  const locale = useLocale();
  const isTr = locale === "tr";
  const [isRotating, setIsRotating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRefresh = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 700);
  };

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleExpandToClassic = () => {
    setMode("classic");
  };

  return (
    <div className="absolute inset-0 z-30 flex flex-col bg-[#0a0a0f] text-white overflow-hidden">
      {/* Top spacer for status bar & dynamic island */}
      <div className="w-full h-11 shrink-0 pointer-events-none" />

      {/* Safari Top Browser Bar */}
      <div className="w-full shrink-0 bg-[#141419]/95 backdrop-blur-xl border-b border-white/10 px-3 py-2 flex flex-col gap-1.5 shadow-md z-20">
        <div className="flex items-center gap-2">
          {/* Back to iOS Home */}
          <button
            onClick={onClose}
            className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center shrink-0 pr-1"
          >
            <ChevronLeft size={18} />
            <span>{isTr ? "Ana Ekran" : "Home"}</span>
          </button>

          {/* URL Pill */}
          <div className="flex-1 h-9 rounded-full bg-white/10 border border-white/10 px-3 flex items-center justify-between shadow-inner">
            <div className="flex items-center gap-1.5 text-xs text-neutral-300 truncate">
              <Lock size={12} className="text-emerald-400 shrink-0" />
              <span className="font-medium text-white tracking-tight truncate">
                emrahsahin.dev
              </span>
              <span className="text-[10px] text-neutral-400">/{locale}</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleRefresh}
                className={`text-neutral-400 hover:text-white transition-all ${
                  isRotating ? "rotate-180 duration-700" : ""
                }`}
                title={isTr ? "Yenile" : "Refresh"}
              >
                <RotateCw size={13} />
              </button>
            </div>
          </div>

          {/* Tam Ekrana Genişlet (Klasik Web'e Geçiş) Butonu */}
          <button
            onClick={handleExpandToClassic}
            className="h-8 px-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-[11px] font-semibold flex items-center gap-1 shadow-md transition-all shrink-0"
            title="Klasik tam sayfa görünüme geç"
          >
            <Maximize2 size={12} />
            <span className="hidden sm:inline">
              {isTr ? "Tam Ekran" : "Full Screen"}
            </span>
          </button>
        </div>
      </div>

      {/* Safari Notice Banner */}
      <div className="bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-indigo-900/40 border-b border-white/10 px-4 py-2 flex items-center justify-between text-[11px] text-neutral-300">
        <div className="flex items-center gap-1.5 truncate">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shrink-0" />
          <span className="truncate">
            {isTr
              ? "🧭 Klasik Portfolyo Görünümü (Safari içinde çalışıyor)"
              : "🧭 Classic Portfolio View (Running inside Safari)"}
          </span>
        </div>
        <button
          onClick={handleExpandToClassic}
          className="text-purple-400 hover:text-purple-300 font-semibold underline shrink-0 ml-2"
        >
          {isTr ? "Dışarı Çıkar ↗" : "Expand Web ↗"}
        </button>
      </div>

      {/* Safari Web Content (The real classic website!) */}
      <div className="flex-1 overflow-y-auto overscroll-contain pb-24 scroll-smooth ios-scrollbar">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>

      {/* Safari Bottom Toolbar */}
      <div className="w-full h-12 shrink-0 bg-[#141419]/95 backdrop-blur-xl border-t border-white/10 px-6 flex items-center justify-between text-blue-400 z-20">
        <div className="flex items-center gap-6">
          <button
            onClick={onClose}
            className="hover:text-blue-300 transition-colors"
            title="Ana Ekran"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleRefresh}
            className="hover:text-blue-300 transition-colors"
            title="İleri"
          >
            <ChevronRight size={20} className="opacity-40" />
          </button>
        </div>

        <button
          onClick={handleCopy}
          className="hover:text-blue-300 transition-colors flex items-center gap-1 text-xs"
          title="Bağlantıyı Kopyala"
        >
          {copied ? (
            <Check size={18} className="text-emerald-400" />
          ) : (
            <Share2 size={18} />
          )}
        </button>

        <div className="flex items-center gap-6">
          <button
            onClick={handleExpandToClassic}
            className="hover:text-blue-300 transition-colors"
            title="Klasik Görünüm"
          >
            <ExternalLink size={18} />
          </button>
          <button
            onClick={onClose}
            className="w-5 h-5 rounded border border-blue-400 flex items-center justify-center text-[10px] font-bold hover:bg-blue-400/20 transition-colors"
            title="Sekmeler"
          >
            1
          </button>
        </div>
      </div>

      {/* Home Indicator */}
      <IOSHomeBar onHomeClick={onClose} />
    </div>
  );
}
