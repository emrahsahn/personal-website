"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Sun, CloudSun, MapPin, Sparkles, Code2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface WidgetsProps {
  onOpenAbout?: () => void;
  onOpenProjects?: () => void;
}

export default function IOSWidgets({ onOpenAbout, onOpenProjects }: WidgetsProps) {
  const locale = useLocale();
  const isTr = locale === "tr";

  return (
    <div className="grid grid-cols-2 gap-3.5 px-4 mb-4 select-none">
      {/* Widget 1: Weather & Location */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="h-[135px] rounded-[24px] p-3.5 bg-gradient-to-br from-blue-500/80 via-indigo-600/80 to-purple-800/80 backdrop-blur-xl border border-white/20 text-white shadow-xl flex flex-col justify-between relative overflow-hidden"
      >
        <div className="flex items-start justify-between z-10">
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold tracking-wide text-white/80 uppercase">
              {isTr ? "Konum" : "Location"}
            </span>
            <span className="text-sm font-bold flex items-center gap-1">
              <MapPin size={12} className="text-cyan-300" />
              {siteConfig.location.split(",")[0]}
            </span>
          </div>
          <CloudSun size={26} className="text-amber-300 drop-shadow" />
        </div>

        <div className="z-10 flex items-end justify-between">
          <div>
            <div className="text-3xl font-light tracking-tighter">21°</div>
            <div className="text-[10px] text-white/80 font-medium">
              {isTr ? "Güneşli • H:24° L:15°" : "Sunny • H:24° L:15°"}
            </div>
          </div>
          <div className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm font-medium">
            TR
          </div>
        </div>

        {/* Ambient glow inside widget */}
        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-amber-400/20 rounded-full blur-xl pointer-events-none" />
      </motion.div>

      {/* Widget 2: Dev Status & AI Highlight */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onOpenAbout}
        className="h-[135px] rounded-[24px] p-3.5 bg-neutral-900/70 backdrop-blur-xl border border-white/15 text-white shadow-xl flex flex-col justify-between cursor-pointer group relative overflow-hidden"
      >
        <div className="flex items-start justify-between z-10">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-purple-500/30 border border-purple-400/40 flex items-center justify-center text-purple-300">
              <Sparkles size={11} />
            </div>
            <span className="text-[11px] font-semibold text-white/80 uppercase tracking-wider">
              {isTr ? "Mühendislik" : "Engineering"}
            </span>
          </div>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>

        <div className="z-10 flex flex-col gap-1">
          <span className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
            {siteConfig.name}
          </span>
          <span className="text-[10px] text-neutral-300 leading-tight">
            {isTr
              ? "Yüksek Lisans Öğrencisi • LLM & Agentic AI"
              : "M.Sc. Student • LLM & Agentic AI"}
          </span>
        </div>

        <div className="z-10 flex items-center justify-between pt-1 border-t border-white/10 text-[9px] text-neutral-400">
          <span className="flex items-center gap-1">
            <Code2 size={10} className="text-purple-400" />
            C++ • Java • Python
          </span>
          <span className="text-purple-400 font-semibold group-hover:underline">
            {isTr ? "Göz At →" : "View →"}
          </span>
        </div>

        {/* Ambient purple glow */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/15 rounded-full blur-2xl pointer-events-none" />
      </motion.div>
    </div>
  );
}
