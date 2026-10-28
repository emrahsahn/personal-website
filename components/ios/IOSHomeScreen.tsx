"use client";

import React from "react";
import { useLocale } from "next-intl";
import { siteConfig } from "@/lib/site-config";
import IOSWidgets from "./IOSWidgets";
import IOSAppIcon, { IconType } from "./IOSAppIcon";
import { IOSAppId } from "./types";

interface HomeScreenProps {
  onOpenApp: (appId: IOSAppId) => void;
  onOpenExternal: (url: string) => void;
}

export default function IOSHomeScreen({
  onOpenApp,
  onOpenExternal,
}: HomeScreenProps) {
  const locale = useLocale();
  const isTr = locale === "tr";

  return (
    <div className="w-full h-full flex flex-col justify-between pt-12 pb-5 select-none relative z-10">
      {/* Scrollable Upper Area (Widgets + App Grid) */}
      <div className="flex-1 overflow-y-auto no-scrollbar pt-2">
        {/* iOS Widgets */}
        <IOSWidgets
          onOpenAbout={() => onOpenApp("notes")}
          onOpenProjects={() => onOpenApp("photos")}
        />

        {/* 4-Column App Grid */}
        <div className="grid grid-cols-4 gap-y-4 px-4 py-2">
          {/* Row 1 */}
          <IOSAppIcon
            name="Safari"
            iconType="safari"
            onClick={() => onOpenApp("safari")}
          />

          <IOSAppIcon
            name="GitHub"
            iconType="github"
            onClick={() => onOpenExternal(siteConfig.github)}
          />

          <IOSAppIcon
            name="LinkedIn"
            iconType="linkedin"
            onClick={() => onOpenExternal(siteConfig.linkedin)}
          />

          <IOSAppIcon
            name="Mail"
            iconType="mail"
            onClick={() => onOpenApp("mail")}
          />

          {/* Row 2 */}
          <IOSAppIcon
            name={isTr ? "Notlar" : "Notes"}
            iconType="notes"
            onClick={() => onOpenApp("notes")}
          />

          <IOSAppIcon
            name={isTr ? "Fotoğraflar" : "Photos"}
            iconType="photos"
            onClick={() => onOpenApp("photos")}
          />

          <IOSAppIcon
            name={isTr ? "Beceriler" : "Skills"}
            iconType="skills"
            onClick={() => onOpenApp("skills")}
          />

          <IOSAppIcon
            name={isTr ? "Dosyalar" : "Files"}
            iconType="files"
            onClick={() => onOpenApp("files")}
          />

          {/* Row 3 */}
          <IOSAppIcon
            name={isTr ? "Ayarlar" : "Settings"}
            iconType="settings"
            onClick={() => onOpenApp("settings")}
          />

          <IOSAppIcon
            name={isTr ? "İletişim" : "Phone"}
            iconType="phone"
            onClick={() => onOpenApp("phone")}
          />

          <IOSAppIcon
            name={isTr ? "Çeviri" : "Translate"}
            iconType="translate"
            badge={locale.toUpperCase()}
            onClick={() => onOpenApp("translate")}
          />

          <IOSAppIcon
            name={isTr ? "Klasik Web" : "Classic Web"}
            iconType="web"
            onClick={() => onOpenApp("web")}
          />
        </div>
      </div>

      {/* iOS Dock at Bottom */}
      <div className="px-4 shrink-0 pb-1">
        <div className="h-[74px] sm:h-[78px] rounded-[32px] bg-white/15 backdrop-blur-2xl border border-white/20 shadow-2xl flex items-center justify-around px-3">
          <IOSAppIcon
            name="Phone"
            iconType="phone"
            onClick={() => onOpenApp("phone")}
            isDock
          />

          <IOSAppIcon
            name="Safari"
            iconType="safari"
            onClick={() => onOpenApp("safari")}
            isDock
          />

          <IOSAppIcon
            name="Mail"
            iconType="mail"
            onClick={() => onOpenApp("mail")}
            isDock
          />

          <IOSAppIcon
            name="GitHub"
            iconType="github"
            onClick={() => onOpenExternal(siteConfig.github)}
            isDock
          />
        </div>
      </div>
    </div>
  );
}
