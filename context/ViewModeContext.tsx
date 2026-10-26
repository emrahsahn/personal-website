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
      // Clear legacy saved classic mode so every new open starts in iOS mode
      localStorage.removeItem("emrah_portfolio_mode");

      const params = new URLSearchParams(window.location.search);
      const queryMode = params.get("mode") || params.get("view");
      if (queryMode === "classic" || queryMode === "web") {
        setModeState("classic");
        return;
      }
      // Explicit default is always iOS
      setModeState("ios");
    }

    const savedWallpaper = localStorage.getItem("emrah_portfolio_wallpaper");
    if (savedWallpaper) {
      setWallpaperState(savedWallpaper);
    }
  }, []);

  const setMode = (newMode: ViewMode) => {
    setModeState(newMode);
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
