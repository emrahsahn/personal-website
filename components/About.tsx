"use client";

import { useLocale, useTranslations } from "next-intl";
import {
  GraduationCap,
  Award,
  BookOpen,
  Languages as LanguagesIcon,
  Sparkles,
} from "lucide-react";
import { educations, spokenLanguages } from "@/lib/data";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale() as "tr" | "en";

  return (
    <SectionWrapper id="about">
      <SectionTitle title={t("title")} />

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Summary & Languages */}
        <div className="lg:col-span-6 space-y-6">
          <div className="glass rounded-2xl p-6 md:p-8 glow-purple">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-accent-purple" size={24} />
              <h3 className="text-xl font-semibold text-white">
                {locale === "tr" ? "Profesyonel Özet" : "Professional Summary"}
              </h3>
            </div>
            <p className="text-white/70 leading-relaxed text-base md:text-lg">
              {t("summary")}
            </p>
          </div>

          {/* Languages Card */}
          <div className="glass rounded-2xl p-6 md:p-8 glow-purple">
            <div className="flex items-center gap-3 mb-4">
              <LanguagesIcon className="text-accent-blue" size={24} />
              <h3 className="text-lg font-semibold text-white">
                {t("languagesTitle")}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {spokenLanguages.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between hover:border-accent-blue/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-white font-medium text-sm">
                      {lang.name[locale]}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent-blue/20 text-accent-blue font-medium">
                      {lang.tag}
                    </span>
                  </div>
                  <span className="text-white/50 text-xs leading-tight">
                    {lang.level[locale]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Education & Coursework */}
        <div className="lg:col-span-6 space-y-6">
          <div className="glass rounded-2xl p-6 md:p-8 glow-orange">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-accent-purple" size={28} />
              <h3 className="text-xl font-semibold text-white">
                {t("education.title")}
              </h3>
            </div>

            <div className="space-y-6 divide-y divide-white/10">
              {educations.map((edu, index) => (
                <div key={index} className={index > 0 ? "pt-6" : ""}>
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        {edu.degree[locale]}
                      </h4>
                      <p className="text-white/60 text-sm">
                        {edu.university[locale]}
                      </p>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-accent-purple/20 text-accent-purple text-xs font-medium border border-accent-purple/30 shrink-0">
                      {edu.level[locale]}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 rounded-full bg-accent-purple/20 text-accent-purple text-xs">
                      {edu.period[locale]}
                    </span>
                    {edu.gpa && (
                      <span className="px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue text-xs">
                        {edu.gpa}
                      </span>
                    )}
                    {edu.scholarship && (
                      <span className="px-3 py-1 rounded-full bg-accent-orange/20 text-accent-orange text-xs">
                        {edu.scholarship[locale]}
                      </span>
                    )}
                    {edu.status && (
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs border border-emerald-500/30">
                        {edu.status[locale]}
                      </span>
                    )}
                  </div>

                  {edu.thesis && (
                    <div className="flex items-center gap-2 pt-3">
                      <Award className="text-accent-pink shrink-0" size={16} />
                      <span className="text-white/80 text-xs font-medium">
                        {edu.thesis[locale]}
                      </span>
                    </div>
                  )}

                  {edu.coursework && (
                    <div className="mt-4 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen size={14} className="text-accent-orange" />
                        <span className="text-xs font-medium text-white/50 uppercase tracking-wider">
                          {t("courseworkTitle")}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework[locale].map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2.5 py-0.5 rounded-md bg-white/5 text-white/70 text-xs border border-white/5"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}


