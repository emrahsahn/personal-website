"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "tr" | "en") => {
    router.replace(pathname, { locale: newLocale, scroll: false });
  };

  return (
    <div className="flex items-center gap-1 glass rounded-full p-1">
      <button
        onClick={() => switchLocale("tr")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          locale === "tr"
            ? "bg-gradient-to-r from-accent-purple to-accent-pink text-white"
            : "text-white/60 hover:text-white"
        }`}
      >
        TR
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          locale === "en"
            ? "bg-gradient-to-r from-accent-purple to-accent-pink text-white"
            : "text-white/60 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}
