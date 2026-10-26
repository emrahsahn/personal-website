"use client";

import React from "react";
import { useLocale } from "next-intl";
import { FileText, Download, Folder, Eye, CheckCircle, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import IOSAppWindow from "../IOSAppWindow";

interface FilesAppProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IOSFilesApp({ isOpen, onClose }: FilesAppProps) {
  const locale = useLocale();
  const isTr = locale === "tr";

  const handleDownload = () => {
    // If a CV file exists in public or external link, trigger it:
    window.open("https://github.com/emrahsahn", "_blank");
  };

  return (
    <IOSAppWindow
      isOpen={isOpen}
      onClose={onClose}
      title={isTr ? "Dosyalar" : "Files"}
      headerBg="bg-[#1c1c1e]"
    >
      <div className="p-4 pb-14 space-y-4 max-w-lg mx-auto select-none">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-neutral-400 px-1">
          <Folder size={14} className="text-blue-400" />
          <span>{isTr ? "iCloud Drive > Belgeler" : "iCloud Drive > Documents"}</span>
        </div>

        {/* File Card: CV / Resume */}
        <div className="bg-[#1c1c1e] rounded-2xl p-4 border border-white/10 space-y-3 shadow-lg">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-14 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 flex flex-col items-center justify-center shrink-0">
              <FileText size={22} />
              <span className="text-[8px] font-bold font-mono uppercase mt-0.5">PDF</span>
            </div>

            <div className="flex flex-col truncate">
              <h3 className="text-sm font-bold text-white truncate">
                Emrah_Sahin_CV.pdf
              </h3>
              <span className="text-[11px] text-neutral-400">
                {isTr ? "Yazılım Mühendisi Özgeçmiş • 2 sayfa" : "Software Engineer Resume • 2 pages"}
              </span>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                <CheckCircle size={10} />
                {isTr ? "Güncel Versiyon (2026)" : "Latest Version (2026)"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-white/10">
            <button
              onClick={handleDownload}
              className="flex-1 h-9 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow"
            >
              <Download size={14} />
              <span>{isTr ? "Özgeçmişi İndir" : "Download CV"}</span>
            </button>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <ExternalLink size={14} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Academic / Thesis Attachment */}
        <div className="bg-[#1c1c1e] rounded-2xl p-4 border border-white/10 space-y-2 text-xs shadow-md">
          <span className="text-neutral-400 font-semibold uppercase tracking-wider text-[10px]">
            {isTr ? "Ek Belgeler & Tezler" : "Additional Documents & Thesis"}
          </span>
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-2.5 truncate">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                <FileText size={16} />
              </div>
              <div className="flex flex-col truncate">
                <span className="text-white font-medium truncate">
                  TÜBİTAK 2209 Proje Raporu
                </span>
                <span className="text-[10px] text-neutral-400">
                  EKG Sinyal Analizi & ML
                </span>
              </div>
            </div>
            <span className="text-[10px] text-purple-400 font-medium">Onaylı</span>
          </div>
        </div>
      </div>
    </IOSAppWindow>
  );
}
