"use client";

import React from "react";
import { motion } from "framer-motion";
import { useViewMode } from "@/context/ViewModeContext";
import { wallpapers } from "./wallpapers";
import IOSStatusBar from "./IOSStatusBar";
import IOSDynamicIsland from "./IOSDynamicIsland";

interface DeviceFrameProps {
  children: React.ReactNode;
  onOpenSafari?: () => void;
}

export default function IOSDeviceFrame({
  children,
  onOpenSafari,
}: DeviceFrameProps) {
  const { wallpaper } = useViewMode();
  const currentWp = wallpapers.find((w) => w.id === wallpaper) || wallpapers[0];

  return (
    <div className="relative flex items-center justify-center min-h-[100dvh] py-0 sm:py-6 px-0 sm:px-4">
      {/* Outer Phone Shell (Desktop Realistic Hardware) */}
      <div className="relative w-full sm:w-[395px] h-[100dvh] sm:h-[830px] sm:max-h-[92vh] sm:rounded-[55px] p-0 sm:p-[11px] bg-gradient-to-b from-[#4a4d55] via-[#242528] to-[#121316] shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(139,92,246,0.15)] flex flex-col justify-center transition-all duration-300">
        {/* Left Side Buttons (Action & Volume) - visible on desktop */}
        <div className="hidden sm:block absolute -left-[14px] top-28 w-[3.5px] h-8 bg-neutral-600 rounded-l-md shadow-sm" />
        <div className="hidden sm:block absolute -left-[14px] top-40 w-[3.5px] h-12 bg-neutral-600 rounded-l-md shadow-sm" />
        <div className="hidden sm:block absolute -left-[14px] top-56 w-[3.5px] h-12 bg-neutral-600 rounded-l-md shadow-sm" />

        {/* Right Side Buttons (Power & Camera Control) - visible on desktop */}
        <div className="hidden sm:block absolute -right-[14px] top-36 w-[3.5px] h-16 bg-neutral-600 rounded-r-md shadow-sm" />
        <div className="hidden sm:block absolute -right-[14px] top-64 w-[3.5px] h-14 bg-neutral-700 rounded-r-md shadow-sm" />

        {/* Inner Phone Screen */}
        <div
          className={`relative w-full h-full sm:rounded-[45px] overflow-hidden ${currentWp.className} shadow-inner flex flex-col`}
        >
          {/* Subtle iOS Wallpaper Atmospheric Glows */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/4 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Status Bar & Dynamic Island */}
          <IOSStatusBar />
          <IOSDynamicIsland onOpenSafari={onOpenSafari} />

          {/* Screen Content (Springboard or Active App) */}
          <div className="relative flex-1 w-full h-full overflow-hidden flex flex-col">
            {children}
          </div>

          {/* Screen Glass Specular Highlight (Subtle Diagonal Sheen on Desktop) */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
