"use client";

import React from "react";
import { useLocale } from "next-intl";
import { Phone, Mail, MessageSquare, Video, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import IOSAppWindow from "../IOSAppWindow";

interface PhoneAppProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenMail?: () => void;
}

export default function IOSPhoneApp({ isOpen, onClose, onOpenMail }: PhoneAppProps) {
  const locale = useLocale();
  const isTr = locale === "tr";

  return (
    <IOSAppWindow
      isOpen={isOpen}
      onClose={onClose}
      title={isTr ? "Kişi Kartı" : "Contact Card"}
      headerBg="bg-[#1c1c1e]"
    >
      <div className="p-4 pb-14 space-y-5 max-w-lg mx-auto select-none">
        {/* Contact Avatar & Header */}
        <div className="flex flex-col items-center text-center space-y-2 pt-2">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 flex items-center justify-center text-white font-bold text-2xl shadow-xl border-2 border-white/20">
            EŞ
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">{siteConfig.name}</h2>
            <p className="text-xs text-neutral-400">
              {isTr ? "Yazılım Mühendisi • LLMs & AI" : "Software Engineer • LLMs & AI"}
            </p>
          </div>
        </div>

        {/* 4 Action Buttons */}
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => {
              if (onOpenMail) {
                onClose();
                onOpenMail();
              } else {
                window.open(`mailto:${siteConfig.email}`, "_blank");
              }
            }}
            className="flex flex-col items-center gap-1.5 p-2 rounded-2xl bg-[#1c1c1e] border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white shadow">
              <MessageSquare size={16} />
            </div>
            <span className="text-[10px] font-medium text-blue-400">
              {isTr ? "Mesaj" : "Message"}
            </span>
          </button>

          <a
            href={`mailto:${siteConfig.email}`}
            className="flex flex-col items-center gap-1.5 p-2 rounded-2xl bg-[#1c1c1e] border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white shadow">
              <Mail size={16} />
            </div>
            <span className="text-[10px] font-medium text-blue-400">
              {isTr ? "E-Posta" : "Mail"}
            </span>
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1.5 p-2 rounded-2xl bg-[#1c1c1e] border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white shadow">
              <Video size={16} />
            </div>
            <span className="text-[10px] font-medium text-blue-400">LinkedIn</span>
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1.5 p-2 rounded-2xl bg-[#1c1c1e] border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="w-9 h-9 rounded-full bg-neutral-700 flex items-center justify-center text-white shadow">
              <Github size={16} />
            </div>
            <span className="text-[10px] font-medium text-neutral-300">GitHub</span>
          </a>
        </div>

        {/* Info Rows */}
        <div className="bg-[#1c1c1e] rounded-2xl border border-white/10 divide-y divide-white/10 overflow-hidden text-xs shadow-md">
          <div className="p-3.5 space-y-0.5">
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
              {isTr ? "E-Posta" : "Email"}
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-blue-400 hover:underline block font-medium"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="p-3.5 space-y-0.5">
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
              {isTr ? "Konum" : "Location"}
            </span>
            <span className="text-white block font-medium flex items-center gap-1">
              <MapPin size={12} className="text-neutral-400" />
              {siteConfig.location}
            </span>
          </div>

          <div className="p-3.5 space-y-0.5">
            <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
              {isTr ? "Sosyal Bağlantılar" : "Social Links"}
            </span>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white flex items-center gap-1"
              >
                <Github size={13} />
                <span>GitHub</span>
              </a>
              <span className="text-neutral-600">•</span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white flex items-center gap-1"
              >
                <Linkedin size={13} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </IOSAppWindow>
  );
}
