"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IOSAppId } from "./types";
import IOSDeviceFrame from "./IOSDeviceFrame";
import IOSHomeScreen from "./IOSHomeScreen";
import IOSSafariApp from "./apps/IOSSafariApp";
import IOSNotesApp from "./apps/IOSNotesApp";
import IOSPhotosApp from "./apps/IOSPhotosApp";
import IOSMailApp from "./apps/IOSMailApp";
import IOSSettingsApp from "./apps/IOSSettingsApp";
import IOSFilesApp from "./apps/IOSFilesApp";
import IOSPhoneApp from "./apps/IOSPhoneApp";
import IOSSkillsApp from "./apps/IOSSkillsApp";

export default function IOSExperience() {
  const [activeApp, setActiveApp] = useState<IOSAppId | null>(null);

  const handleOpenApp = (appId: IOSAppId) => {
    setActiveApp(appId);
  };

  const handleCloseApp = () => {
    setActiveApp(null);
  };

  const handleOpenExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const renderActiveApp = () => {
    switch (activeApp) {
      case "safari":
        return <IOSSafariApp onClose={handleCloseApp} />;
      case "notes":
        return <IOSNotesApp isOpen={true} onClose={handleCloseApp} />;
      case "photos":
        return <IOSPhotosApp isOpen={true} onClose={handleCloseApp} />;
      case "mail":
        return <IOSMailApp isOpen={true} onClose={handleCloseApp} />;
      case "settings":
        return <IOSSettingsApp isOpen={true} onClose={handleCloseApp} />;
      case "files":
        return <IOSFilesApp isOpen={true} onClose={handleCloseApp} />;
      case "phone":
        return (
          <IOSPhoneApp
            isOpen={true}
            onClose={handleCloseApp}
            onOpenMail={() => setActiveApp("mail")}
          />
        );
      case "skills":
        return <IOSSkillsApp isOpen={true} onClose={handleCloseApp} />;
      default:
        return null;
    }
  };

  return (
    <IOSDeviceFrame onOpenSafari={() => setActiveApp("safari")}>
      {/* Home Screen (Springboard) */}
      <IOSHomeScreen
        onOpenApp={handleOpenApp}
        onOpenExternal={handleOpenExternal}
      />

      {/* Centralized single active app window transition */}
      <AnimatePresence mode="wait">
        {activeApp && (
          <motion.div
            key={activeApp}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 z-30"
          >
            {renderActiveApp()}
          </motion.div>
        )}
      </AnimatePresence>
    </IOSDeviceFrame>
  );
}
