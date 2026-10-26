"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import { skillCategories } from "@/lib/data";
import { Star, Check, Layers, Cpu, Code2, Database, Terminal } from "lucide-react";
import IOSAppWindow from "../IOSAppWindow";

interface SkillsAppProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IOSSkillsApp({ isOpen, onClose }: SkillsAppProps) {
  const locale = useLocale();
  const isTr = locale === "tr";

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case "languages":
        return <Code2 size={16} className="text-amber-400" />;
      case "ai":
        return <Cpu size={16} className="text-purple-400" />;
      case "backend_web":
        return <Layers size={16} className="text-blue-400" />;
      case "data":
        return <Database size={16} className="text-emerald-400" />;
      default:
        return <Terminal size={16} className="text-pink-400" />;
    }
  };

  const getCategoryName = (key: string) => {
    switch (key) {
      case "languages":
        return isTr ? "Diller & OOP Mimari" : "Languages & OOP";
      case "ai":
        return isTr ? "AI, ML & Agentic Sistemler" : "AI, ML & Agentic Systems";
      case "backend_web":
        return isTr ? "Backend & Web Geliştirme" : "Backend & Web";
      case "data":
        return isTr ? "Veri Analitiği & SQL" : "Data & Analytics";
      case "tools":
        return isTr ? "Araçlar & DevOps" : "Tools & DevOps";
      default:
        return key;
    }
  };

  return (
    <IOSAppWindow
      isOpen={isOpen}
      onClose={onClose}
      title={isTr ? "App Store • Beceriler" : "App Store • Skills"}
      headerBg="bg-[#1c1c1e]"
    >
      <div className="p-4 pb-14 space-y-5 max-w-lg mx-auto select-none">
        {/* Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-4 text-white shadow-lg space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full inline-block">
            {isTr ? "Teknik Yetkinlikler" : "Tech Stack Portfolio"}
          </span>
          <h3 className="text-base font-bold">
            {isTr ? "Öne Çıkan Geliştirici Becerileri" : "Featured Developer Skills"}
          </h3>
          <p className="text-xs text-white/80">
            {isTr
              ? "Üretim ortamında ve projelerde aktif kullanılan teknolojiler."
              : "Technologies actively used in production and research."}
          </p>
        </div>

        {/* Categories List */}
        <div className="space-y-4">
          {skillCategories.map((cat) => (
            <div key={cat.key} className="space-y-2">
              <div className="flex items-center gap-2 px-1">
                {getCategoryIcon(cat.key)}
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  {getCategoryName(cat.key)}
                </h4>
              </div>

              <div className="bg-[#1c1c1e] rounded-2xl border border-white/10 divide-y divide-white/10 overflow-hidden shadow-md">
                {cat.skills.map((skill, i) => (
                  <div
                    key={skill}
                    className="p-3 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xs text-white">
                        {skill.slice(0, 2)}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-white">
                          {skill}
                        </span>
                        <div className="flex items-center gap-1 text-[10px] text-amber-400">
                          <Star size={10} className="fill-amber-400" />
                          <span>5.0</span>
                          <span className="text-neutral-500">• {isTr ? "Yetkin" : "Proficient"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-semibold flex items-center gap-1">
                      <Check size={11} />
                      <span>{isTr ? "Yüklendi" : "Active"}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </IOSAppWindow>
  );
}
