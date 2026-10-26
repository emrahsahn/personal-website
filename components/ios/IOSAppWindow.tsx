"use client";

import React from "react";
import { useLocale } from "next-intl";
import { X, ChevronLeft } from "lucide-react";
import IOSHomeBar from "./IOSHomeBar";

interface AppWindowProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  headerRight?: React.ReactNode;
  headerBg?: string;
  lightMode?: boolean;
}

export default function IOSAppWindow({
  isOpen = true,
  onClose,
  title,
  children,
  headerRight,
  headerBg = "bg-[#161618]/90",
  lightMode = false,
}: AppWindowProps) {
  const locale = useLocale();
  const isTr = locale === "tr";

  if (!isOpen) return null;

  return (
    <div
      className={`w-full h-full flex flex-col overflow-hidden select-none ${
        lightMode ? "bg-[#f2f2f7] text-neutral-900" : "bg-[#0d0d10] text-white"
      }`}
    >
      {/* Top spacer to preserve status bar & dynamic island space */}
      <div className="w-full h-11 shrink-0 pointer-events-none" />

      {/* iOS App Navigation Bar */}
      <div
        className={`w-full h-12 px-4 shrink-0 flex items-center justify-between backdrop-blur-xl border-b ${
          lightMode
            ? "border-neutral-300/80 " + headerBg
            : "border-white/10 " + headerBg
        }`}
      >
        <button
          onClick={onClose}
          className={`flex items-center gap-1 text-sm font-medium transition-colors ${
            lightMode
              ? "text-blue-600 hover:text-blue-700"
              : "text-blue-400 hover:text-blue-300"
          }`}
        >
          <ChevronLeft size={20} />
          <span>{isTr ? "Geri" : "Back"}</span>
        </button>

        {title && (
          <span
            className={`text-sm font-semibold truncate max-w-[170px] ${
              lightMode ? "text-neutral-900" : "text-white"
            }`}
          >
            {title}
          </span>
        )}

        <div className="flex items-center gap-2">
          {headerRight}
          <button
            onClick={onClose}
            className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
              lightMode
                ? "bg-neutral-200 hover:bg-neutral-300 text-neutral-700"
                : "bg-white/10 hover:bg-white/20 text-white/80"
            }`}
            title={isTr ? "Kapat" : "Close"}
          >
            <X size={15} />
          </button>
        </div>
      </div>

      {/* App Body Content */}
      <div className="flex-1 overflow-y-auto overscroll-contain pb-10 ios-scrollbar">
        {children}
      </div>

      {/* Home Bar to close */}
      <IOSHomeBar onHomeClick={onClose} lightBackground={lightMode} />
    </div>
  );
}
