"use client";

import React from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useViewMode } from "@/context/ViewModeContext";
import { wallpapers } from "../wallpapers";
import {
  Globe,
  Smartphone,
  Monitor,
  Image as ImageIcon,
  Info,
  Check,
  ChevronRight,
  Shield,
  Wifi,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import IOSAppWindow from "../IOSAppWindow";

interface SettingsAppProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IOSSettingsApp({ isOpen, onClose }: SettingsAppProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const isTr = locale === "tr";

  const { mode, setMode, wallpaper, setWallpaper } = useViewMode();

  const handleLanguageChange = (newLocale: "tr" | "en") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <IOSAppWindow
      isOpen={isOpen}
      onClose={onClose}
      title={isTr ? "Ayarlar" : "Settings"}
      headerBg="bg-[#1c1c1e]"
    >
      <div className="p-4 pb-14 space-y-5 max-w-lg mx-auto select-none">
        {/* Apple ID Profile Card */}
        <div className="bg-[#1c1c1e] rounded-2xl p-4 border border-white/10 flex items-center gap-3.5 shadow-md">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 flex items-center justify-center text-white font-bold text-lg shadow-inner">
            EŞ
          </div>
          <div className="flex flex-col truncate">
            <span className="text-sm font-semibold text-white truncate">
              {siteConfig.name}
            </span>
            <span className="text-[11px] text-neutral-400 truncate">
              Apple ID, Portfolyo & Ayarlar
            </span>
          </div>
        </div>

        {/* Section 1: Dil / Language */}
        <div className="space-y-1.5">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400 px-3">
            {isTr ? "Genel > Dil Seçimi" : "General > Language"}
          </span>
          <div className="bg-[#1c1c1e] rounded-2xl border border-white/10 divide-y divide-white/10 overflow-hidden shadow-md">
            <div
              onClick={() => handleLanguageChange("tr")}
              className="p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center text-xs font-bold">
                  TR
                </div>
                <span className="text-xs font-medium text-white">Türkçe (TR)</span>
              </div>
              {locale === "tr" && <Check size={16} className="text-blue-400" />}
            </div>

            <div
              onClick={() => handleLanguageChange("en")}
              className="p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">
                  EN
                </div>
                <span className="text-xs font-medium text-white">English (US)</span>
              </div>
              {locale === "en" && <Check size={16} className="text-blue-400" />}
            </div>
          </div>
        </div>

        {/* Section 2: Duvar Kağıtları (Wallpapers) */}
        <div className="space-y-1.5">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400 px-3">
            {isTr ? "Duvar Kağıtları" : "Wallpapers"}
          </span>
          <div className="bg-[#1c1c1e] rounded-2xl border border-white/10 p-3.5 shadow-md">
            <div className="grid grid-cols-4 gap-2">
              {wallpapers.map((wp) => (
                <button
                  key={wp.id}
                  onClick={() => setWallpaper(wp.id)}
                  className={`flex flex-col items-center gap-1.5 p-1 rounded-xl transition-all ${
                    wallpaper === wp.id
                      ? "ring-2 ring-blue-500 bg-white/10"
                      : "hover:bg-white/5"
                  }`}
                >
                  <div
                    className="w-full h-14 rounded-lg shadow-inner border border-white/20"
                    style={{ background: wp.previewBg }}
                  />
                  <span className="text-[9px] text-neutral-300 truncate max-w-full">
                    {isTr ? wp.name.tr.split(" ")[0] : wp.name.en.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: Görünüm Modu Değiştirici */}
        <div className="space-y-1.5">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400 px-3">
            {isTr ? "Arayüz Tercihi" : "Interface Mode"}
          </span>
          <div className="bg-[#1c1c1e] rounded-2xl border border-white/10 p-3.5 shadow-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Monitor size={16} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">
                  {isTr ? "Klasik Web Görünümü" : "Classic Web View"}
                </span>
                <span className="text-[10px] text-neutral-400">
                  {isTr ? "Geleneksel kaydırmalı portfolyo" : "Traditional scrollable layout"}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setMode("classic");
                onClose();
              }}
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-[11px] font-semibold transition-all shadow"
            >
              {isTr ? "Geçiş Yap" : "Switch"}
            </button>
          </div>
        </div>

        {/* Section 4: Hakkında (About Device / Dev) */}
        <div className="space-y-1.5">
          <span className="text-[11px] uppercase tracking-wider text-neutral-400 px-3">
            {isTr ? "Cihaz ve Sistem Bilgisi" : "Device & System Specs"}
          </span>
          <div className="bg-[#1c1c1e] rounded-2xl border border-white/10 divide-y divide-white/10 overflow-hidden text-xs shadow-md">
            <div className="p-3 flex items-center justify-between text-neutral-300">
              <span className="text-neutral-400">{isTr ? "Model" : "Model"}</span>
              <span className="font-medium text-white">iPhone 16 Pro (Emrah Edition)</span>
            </div>
            <div className="p-3 flex items-center justify-between text-neutral-300">
              <span className="text-neutral-400">{isTr ? "Yazılım Sürümü" : "Software"}</span>
              <span className="font-medium text-white">iOS 18.2 (Next.js 14)</span>
            </div>
            <div className="p-3 flex items-center justify-between text-neutral-300">
              <span className="text-neutral-400">{isTr ? "Çip & Motor" : "Chip"}</span>
              <span className="font-medium text-white">A18 Pro • 16-Core Neural Engine</span>
            </div>
            <div className="p-3 flex items-center justify-between text-neutral-300">
              <span className="text-neutral-400">{isTr ? "Geliştirici" : "Engineer"}</span>
              <span className="font-medium text-purple-400">{siteConfig.name}</span>
            </div>
          </div>
        </div>
      </div>
    </IOSAppWindow>
  );
}
