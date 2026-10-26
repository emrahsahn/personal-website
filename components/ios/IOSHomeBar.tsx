"use client";

import React from "react";
import { motion } from "framer-motion";

interface HomeBarProps {
  onHomeClick?: () => void;
  lightBackground?: boolean;
}

export default function IOSHomeBar({ onHomeClick, lightBackground = false }: HomeBarProps) {
  return (
    <div
      onClick={onHomeClick}
      className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50 py-2 px-6 cursor-pointer group flex items-center justify-center select-none"
      title="Ana Ekrana Dön (Swipe up / Tap to close app)"
    >
      <motion.div
        whileHover={{ scale: 1.15, height: 6 }}
        whileTap={{ scale: 0.95 }}
        className={`w-32 h-[4.5px] rounded-full transition-colors duration-200 shadow-sm ${
          lightBackground
            ? "bg-neutral-800/80 group-hover:bg-neutral-900"
            : "bg-white/80 group-hover:bg-white"
        }`}
      />
    </div>
  );
}
