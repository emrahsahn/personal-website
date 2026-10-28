"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ViewMode = "ios" | "classic";

interface ViewModeContextType {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  toggleMode: () => void;
  wallpaper: string;
  setWallpaper: (wallpaper: string) => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ViewMode>("ios");
  const [wallpaper, setWallpaperState] = useState<string>("ios18");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const queryMode = params.get("mode") || params.get("view");
      if (queryMode === "classic" || queryMode === "web") {
        setModeState("classic");
        sessionStorage.setItem("emrah_portfolio_session_mode", "classic");
        return;
      }
      if (queryMode === "ios") {
        setModeState("ios");
        sessionStorage.setItem("emrah_portfolio_session_mode", "ios");
        return;
      }

      // Check current tab session state
      const sessionMode = sessionStorage.getItem(
        "emrah_portfolio_session_mode"
      ) as ViewMode | null;
      if (sessionMode === "classic" || sessionMode === "ios") {
        setModeState(sessionMode);
      } else {
        // First-time visit in this browser tab always starts in iOS mode
        setModeState("ios");
      }

      const savedWallpaper = localStorage.getItem("emrah_portfolio_wallpaper");
      if (savedWallpaper) {
        setWallpaperState(savedWallpaper);
      }
    }
  }, []);

  const setMode = (newMode: ViewMode) => {
    setModeState(newMode);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("emrah_portfolio_session_mode", newMode);
    }
  };

  const toggleMode = () => {
    const next = mode === "ios" ? "classic" : "ios";
    setMode(next);
  };

  const setWallpaper = (newWallpaper: string) => {
    setWallpaperState(newWallpaper);
    if (typeof window !== "undefined") {
      localStorage.setItem("emrah_portfolio_wallpaper", newWallpaper);
    }
  };

  return (
    <ViewModeContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        wallpaper,
        setWallpaper,
      }}
    >
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode must be used within a ViewModeProvider");
  }
  return context;
}
