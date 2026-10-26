"use client";

import React, { useEffect, useState } from "react";
import { Wifi } from "lucide-react";

export default function IOSStatusBar() {
  const [time, setTime] = useState("09:41");
  const [batteryLevel, setBatteryLevel] = useState<number>(98);
  const [isCharging, setIsCharging] = useState(true);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    // Try battery API if available
    try {
      interface NavigatorWithBattery extends Navigator {
        getBattery?: () => Promise<{
          level: number;
          charging: boolean;
          addEventListener: (event: string, fn: () => void) => void;
        }>;
      }
      const nav = navigator as NavigatorWithBattery;
      if (typeof nav !== "undefined" && typeof nav.getBattery === "function") {
        nav.getBattery().then((battery) => {
          setBatteryLevel(Math.round(battery.level * 100));
          setIsCharging(battery.charging);

          battery.addEventListener("levelchange", () => {
            setBatteryLevel(Math.round(battery.level * 100));
          });
          battery.addEventListener("chargingchange", () => {
            setIsCharging(battery.charging);
          });
        });
      }
    } catch {
      // ignore
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-11 px-6 flex items-center justify-between text-white text-xs font-semibold select-none z-40 pointer-events-none">
      {/* Time */}
      <div className="w-20 pl-1 text-left tracking-tight font-medium text-[13px]">
        {time}
      </div>

      {/* Center Spacer for Dynamic Island */}
      <div className="flex-1" />

      {/* Right icons: Cellular, WiFi, Battery */}
      <div className="w-24 flex items-center justify-end gap-1.5 pr-1">
        {/* Cellular Signal (4 bars) */}
        <div className="flex items-end gap-[1.5px] h-3">
          <span className="w-[3px] h-[3px] bg-white rounded-[0.5px]" />
          <span className="w-[3px] h-[5px] bg-white rounded-[0.5px]" />
          <span className="w-[3px] h-[8px] bg-white rounded-[0.5px]" />
          <span className="w-[3px] h-[11px] bg-white rounded-[0.5px]" />
        </div>

        {/* 5G label */}
        <span className="text-[10px] font-bold tracking-tighter opacity-90">5G</span>

        {/* WiFi */}
        <Wifi size={13} className="stroke-[2.5]" />

        {/* Battery */}
        <div className="flex items-center gap-1">
          <div className="relative w-5 h-2.5 rounded-[4px] border border-white/80 p-[1px] flex items-center">
            <div
              className={`h-full rounded-[2px] transition-all duration-500 ${
                isCharging ? "bg-emerald-400" : batteryLevel < 20 ? "bg-red-500" : "bg-white"
              }`}
              style={{ width: `${Math.min(100, Math.max(10, batteryLevel))}%` }}
            />
            {/* Battery nipple */}
            <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1 bg-white/80 rounded-r-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
