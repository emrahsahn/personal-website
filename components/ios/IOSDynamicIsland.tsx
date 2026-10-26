"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";
import { Sparkles, Terminal, X, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

interface DynamicIslandProps {
  onOpenSafari?: () => void;
}

export default function IOSDynamicIsland({ onOpenSafari }: DynamicIslandProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const locale = useLocale();
  const isTr = locale === "tr";

  return (
    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center">
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        onClick={() => setIsExpanded(!isExpanded)}
        className={`bg-black text-white cursor-pointer select-none shadow-2xl border border-white/10 ${
          isExpanded
            ? "w-[310px] sm:w-[340px] rounded-[32px] p-3.5"
            : "w-[125px] h-[32px] rounded-full px-2.5 py-1 hover:w-[135px]"
        } flex items-center transition-all duration-300`}
      >
        {!isExpanded ? (
          <div className="w-full flex items-center justify-between">
            {/* Front Camera Lens */}
            <div className="w-3 h-3 rounded-full bg-[#0a0a0f] border border-neutral-800 flex items-center justify-center relative overflow-hidden">
              <div className="w-1.5 h-1.5 rounded-full bg-[#05101a] opacity-80" />
              <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-blue-500/40 blur-[0.5px]" />
            </div>

            {/* Sensor Dot */}
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-neutral-800" />
            </div>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full flex flex-col gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                    <Sparkles size={16} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-semibold text-white tracking-wide">
                      {siteConfig.name}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {isTr ? "İş Birliklerine Açık" : "Open for Opportunities"}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsExpanded(false)}
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <X size={13} />
                </button>
              </div>

              {/* Status / Activity info */}
              <div className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-1.5 border border-white/5 text-[11px]">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <Terminal size={12} className="text-purple-400" />
                  <span className="truncate max-w-[170px]">
                    {isTr ? "LLMs & Agentic Systems" : "LLMs & Agentic Systems"}
                  </span>
                </div>
                {onOpenSafari && (
                  <button
                    onClick={() => {
                      setIsExpanded(false);
                      onOpenSafari();
                    }}
                    className="text-[10px] font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-0.5"
                  >
                    <span>Safari</span>
                    <ExternalLink size={10} />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}
