"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Compass,
  Mail,
  FileText,
  Image as ImageIcon,
  Settings,
  Folder,
  Phone,
  Layers,
} from "lucide-react";

export type IconType =
  | "safari"
  | "notes"
  | "photos"
  | "settings"
  | "mail"
  | "files"
  | "phone"
  | "skills"
  | "github"
  | "linkedin";

interface AppIconProps {
  name: string;
  iconType: IconType;
  onClick: () => void;
  badge?: string | number;
  isDock?: boolean;
}

export default function IOSAppIcon({
  name,
  iconType,
  onClick,
  badge,
  isDock = false,
}: AppIconProps) {
  const renderIconGraphic = () => {
    switch (iconType) {
      case "safari":
        return (
          <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden">
            <Image
              src="/safari.png"
              alt="Safari"
              width={64}
              height={64}
              className="w-full h-full object-cover scale-[1.04]"
              priority
            />
          </div>
        );

      case "github":
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#24292e] to-[#0f1115] flex items-center justify-center text-white border border-white/10">
            <svg
              className="w-7 h-7 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </div>
        );

      case "linkedin":
        return (
          <div className="w-full h-full bg-[#0a66c2] flex items-center justify-center text-white font-bold text-2xl tracking-tighter">
            <span className="font-serif italic font-black text-2xl">in</span>
          </div>
        );

      case "mail":
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#3a88f7] via-[#1d70e8] to-[#1259c6] flex items-center justify-center text-white">
            <Mail size={28} className="drop-shadow stroke-[1.8]" />
          </div>
        );

      case "notes":
        return (
          <div className="w-full h-full bg-white flex flex-col overflow-hidden relative border border-neutral-300">
            {/* Yellow Apple Notes Header Band */}
            <div className="h-4 w-full bg-[#f6ca3f] border-b border-[#dfb32e]" />
            <div className="p-1 flex flex-col gap-1">
              <div className="h-1 w-3/4 bg-neutral-200 rounded-full" />
              <div className="h-1 w-5/6 bg-neutral-200 rounded-full" />
              <div className="h-1 w-1/2 bg-neutral-200 rounded-full" />
            </div>
            <div className="absolute bottom-1.5 right-1.5 text-amber-600">
              <FileText size={16} />
            </div>
          </div>
        );

      case "photos":
        return (
          <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden border border-neutral-200">
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Petals of iOS photos */}
              <div className="absolute w-2 h-4 rounded-full bg-red-500 opacity-80 -top-1" />
              <div className="absolute w-2 h-4 rounded-full bg-orange-400 opacity-80 top-0 right-0 rotate-45" />
              <div className="absolute w-4 h-2 rounded-full bg-yellow-400 opacity-80 right-0" />
              <div className="absolute w-2 h-4 rounded-full bg-green-500 opacity-80 bottom-0 right-0 -rotate-45" />
              <div className="absolute w-2 h-4 rounded-full bg-teal-400 opacity-80 -bottom-1" />
              <div className="absolute w-2 h-4 rounded-full bg-blue-500 opacity-80 bottom-0 left-0 rotate-45" />
              <div className="absolute w-4 h-2 rounded-full bg-indigo-500 opacity-80 left-0" />
              <div className="absolute w-2 h-4 rounded-full bg-purple-500 opacity-80 top-0 left-0 -rotate-45" />
              <ImageIcon size={14} className="text-neutral-700 z-10" />
            </div>
          </div>
        );

      case "settings":
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#8e8e93] via-[#636366] to-[#3a3a3c] flex items-center justify-center text-white/90">
            <Settings size={28} className="animate-spin-slow stroke-[1.8]" />
          </div>
        );

      case "files":
        return (
          <div className="w-full h-full bg-white flex flex-col items-center justify-center relative overflow-hidden">
            <div className="w-8 h-7 bg-[#2388f6] rounded-t-sm rounded-b-md flex items-center justify-center text-white shadow-sm">
              <Folder size={16} className="fill-white/20" />
            </div>
          </div>
        );

      case "phone":
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#3cd260] via-[#34c759] to-[#279f44] flex items-center justify-center text-white">
            <Phone size={26} className="fill-white stroke-none drop-shadow" />
          </div>
        );

      case "skills":
        return (
          <div className="w-full h-full bg-gradient-to-b from-[#1b81fc] via-[#0b6ce7] to-[#0451b8] flex items-center justify-center text-white">
            <Layers size={26} className="drop-shadow stroke-[1.8]" />
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-white">
            <FileText size={24} />
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center select-none group">
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
        onClick={onClick}
        className={`relative ${
          isDock ? "w-[56px] h-[56px] sm:w-[58px] sm:h-[58px]" : "w-[58px] h-[58px] sm:w-[60px] sm:h-[60px]"
        } rounded-[22%] shadow-lg shadow-black/40 overflow-hidden cursor-pointer focus:outline-none`}
      >
        {renderIconGraphic()}

        {/* Specular glass reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/15 pointer-events-none rounded-[22%]" />

        {/* Notification badge */}
        {badge !== undefined && (
          <div className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow border border-white">
            {badge}
          </div>
        )}
      </motion.button>

      {/* App title underneath icon (hidden in dock) */}
      {!isDock && (
        <span className="mt-1.5 text-[11px] font-medium text-white tracking-tight text-center max-w-[68px] truncate drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
          {name}
        </span>
      )}
    </div>
  );
}
