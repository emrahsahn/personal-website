"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import {
  Languages,
  Check,
  ArrowRightLeft,
  Sparkles,
  Globe2,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import IOSAppWindow from "../IOSAppWindow";

interface TranslateAppProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IOSTranslateApp({ isOpen, onClose }: TranslateAppProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const isTr = locale === "tr";

  const [isSwitching, setIsSwitching] = useState(false);

  const handleSelectLanguage = (newLocale: "tr" | "en") => {
    if (newLocale === locale) return;
    setIsSwitching(true);
    router.replace(pathname, { locale: newLocale });
    setTimeout(() => {
      setIsSwitching(false);
    }, 400);
  };

  const handleToggle = () => {
    const nextLocale = isTr ? "en" : "tr";
    handleSelectLanguage(nextLocale);
  };

  return (
    <IOSAppWindow
      isOpen={isOpen}
      onClose={onClose}
      title={isTr ? "Çeviri & Dil" : "Translate & Language"}
      headerBg="bg-[#1c1c1e]"
    >
      <div className="p-4 pb-14 space-y-4 max-w-lg mx-auto select-none">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 rounded-2xl p-4 text-white shadow-lg space-y-1 relative overflow-hidden">
          <div className="flex items-center justify-between z-10 relative">
            <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
              <Languages size={11} />
              <span>{isTr ? "Sistem Dili" : "System Language"}</span>
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20">
              {isTr ? "🇹🇷 Türkçe Aktif" : "🇬🇧 English Active"}
            </span>
          </div>

          <h3 className="text-base font-bold z-10 relative pt-1">
            {isTr ? "Portfolyo Dil Tercihi" : "Portfolio Language"}
          </h3>
          <p className="text-xs text-white/85 z-10 relative leading-relaxed">
            {isTr
              ? "Tüm projeler, özgeçmiş detayları ve iOS uygulamaları anında seçtiğiniz dilde görüntülenir."
              : "All projects, biography details and iOS apps are instantly rendered in your selected language."}
          </p>

          <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
        </div>

        {/* Quick Toggle Button */}
        <button
          type="button"
          onClick={handleToggle}
          disabled={isSwitching}
          className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-[0.98]"
        >
          <ArrowRightLeft size={13} className="text-cyan-400" />
          <span>
            {isTr
              ? "Tek Tıkla İngilizce'ye Geç (TR ➔ EN)"
              : "Switch to Turkish with One Click (EN ➔ TR)"}
          </span>
        </button>

        {/* Language Selection Cards */}
        <div className="space-y-2.5">
          <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 px-1">
            {isTr ? "Kullanılabilir Diller" : "Available Languages"}
          </span>

          {/* Option 1: Türkçe */}
          <div
            onClick={() => handleSelectLanguage("tr")}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
              locale === "tr"
                ? "bg-blue-600/15 border-blue-500/50 shadow-md ring-1 ring-blue-500/30"
                : "bg-[#1c1c1e] border-white/10 hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-lg shadow-inner">
                🇹🇷
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">Türkçe</span>
                  <span className="text-[10px] text-neutral-400 font-mono">TR</span>
                </div>
                <span className="text-[11px] text-neutral-400">
                  {isTr
                    ? "Anadil • Projeler ve deneyimler Türkçe"
                    : "Native • Portfolio and projects in Turkish"}
                </span>
              </div>
            </div>

            {locale === "tr" ? (
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shadow">
                <Check size={14} className="stroke-[3]" />
              </div>
            ) : (
              <span className="text-xs text-blue-400 font-semibold px-2 py-1 rounded-lg bg-white/5">
                {isTr ? "Seç" : "Select"}
              </span>
            )}
          </div>

          {/* Option 2: English */}
          <div
            onClick={() => handleSelectLanguage("en")}
            className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
              locale === "en"
                ? "bg-blue-600/15 border-blue-500/50 shadow-md ring-1 ring-blue-500/30"
                : "bg-[#1c1c1e] border-white/10 hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-lg shadow-inner">
                🇬🇧
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white">English</span>
                  <span className="text-[10px] text-neutral-400 font-mono">EN</span>
                </div>
                <span className="text-[11px] text-neutral-400">
                  {isTr
                    ? "Uluslararası • Projeler ve teknik vaka analizleri"
                    : "International • Engineering case studies & resume"}
                </span>
              </div>
            </div>

            {locale === "en" ? (
              <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center shadow">
                <Check size={14} className="stroke-[3]" />
              </div>
            ) : (
              <span className="text-xs text-blue-400 font-semibold px-2 py-1 rounded-lg bg-white/5">
                {isTr ? "Seç" : "Select"}
              </span>
            )}
          </div>
        </div>

        {/* Live Translation Preview Card */}
        <div className="bg-[#1c1c1e] rounded-2xl p-3.5 border border-white/10 space-y-2 shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1">
              <Sparkles size={11} />
              <span>{isTr ? "Canlı Çeviri Önizlemesi" : "Live Translation Preview"}</span>
            </span>
            <span className="text-[9px] text-neutral-500 font-mono">
              {locale.toUpperCase()} ACTIVE
            </span>
          </div>

          <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs text-neutral-200 leading-relaxed font-mono">
            {isTr
              ? "“Yazılım Mühendisi — LLMs, Agentic AI & Full-Stack. C++ ve Java ile sağlam OOP mimarileri.”"
              : "“Software Engineer — LLMs, Agentic AI & Full-Stack. Robust OOP architectures in C++ & Java.”"}
          </div>

          <p className="text-[10px] text-neutral-400 leading-relaxed">
            {isTr
              ? "Dil değiştirildiğinde tüm sayfa yeniden yüklenmeden içerikler dinamik olarak güncellenir."
              : "Content updates dynamically without requiring a full page refresh."}
          </p>
        </div>

        {/* Back to Home Button */}
        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow shadow-blue-500/20 cursor-pointer"
        >
          <span>{isTr ? "Ana Ekrana Dön" : "Back to Home Screen"}</span>
        </button>
      </div>
    </IOSAppWindow>
  );
}
