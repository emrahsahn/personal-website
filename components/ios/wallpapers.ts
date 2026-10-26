import { WallpaperOption } from "./types";

export const wallpapers: WallpaperOption[] = [
  {
    id: "ios18",
    name: { tr: "iOS 18 Dark", en: "iOS 18 Dark" },
    className:
      "bg-gradient-to-br from-[#0c0d1a] via-[#1a0f2e] to-[#0a1826] relative overflow-hidden",
    previewBg: "linear-gradient(135deg, #0c0d1a, #1a0f2e, #0a1826)",
  },
  {
    id: "aurora",
    name: { tr: "Aurora Borealis", en: "Aurora Borealis" },
    className:
      "bg-gradient-to-br from-[#05181b] via-[#092b23] to-[#040d1a] relative overflow-hidden",
    previewBg: "linear-gradient(135deg, #05181b, #092b23, #040d1a)",
  },
  {
    id: "cyber",
    name: { tr: "Cyber Dark", en: "Cyber Dark" },
    className:
      "bg-gradient-to-br from-[#08080c] via-[#121124] to-[#060c18] relative overflow-hidden",
    previewBg: "linear-gradient(135deg, #08080c, #121124, #060c18)",
  },
  {
    id: "sunset",
    name: { tr: "Sunset Glow", en: "Sunset Glow" },
    className:
      "bg-gradient-to-br from-[#240b2b] via-[#3d1326] to-[#12081f] relative overflow-hidden",
    previewBg: "linear-gradient(135deg, #240b2b, #3d1326, #12081f)",
  },
];
