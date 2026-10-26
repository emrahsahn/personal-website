"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import { projects } from "@/lib/data";
import { ExternalLink, Github, Code, Sparkles, Filter, X } from "lucide-react";
import IOSAppWindow from "../IOSAppWindow";

interface PhotosAppProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IOSPhotosApp({ isOpen, onClose }: PhotosAppProps) {
  const locale = useLocale();
  const isTr = locale === "tr";
  const [filter, setFilter] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const filterTabs = [
    { id: "all", label: isTr ? "Tüm Projeler" : "All Projects" },
    { id: "ai", label: "AI & LLM" },
    { id: "oop", label: "C++ & Java (OOP)" },
    { id: "web", label: "Web & Full-Stack" },
  ];

  const filteredProjects = projects.filter((proj) => {
    if (filter === "all") return true;
    if (filter === "ai")
      return proj.technologies.some((t) =>
        ["Python", "PyTorch", "TensorFlow", "LLMs", "LangChain", "OpenCV", "AI Agents"].includes(t)
      );
    if (filter === "oop")
      return proj.technologies.some((t) =>
        ["C++", "Java", "OOP", "Polymorphism", "Spring Boot"].includes(t)
      );
    if (filter === "web")
      return proj.technologies.some((t) =>
        ["Next.js", "React", "TypeScript", "JavaScript", "SQL", "Spring Boot"].includes(t)
      );
    return true;
  });

  return (
    <IOSAppWindow
      isOpen={isOpen}
      onClose={() => {
        setActiveProject(null);
        onClose();
      }}
      title={isTr ? "Fotoğraflar & Projeler" : "Photos & Projects"}
      headerBg="bg-[#18181b]"
    >
      <div className="p-3.5 space-y-4 max-w-lg mx-auto">
        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setFilter(tab.id);
                setActiveProject(null);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                filter === tab.id
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white/10 text-neutral-300 hover:bg-white/15"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-2 gap-3">
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              onClick={() => setActiveProject(idx)}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-3 flex flex-col justify-between cursor-pointer transition-all duration-200 group relative overflow-hidden h-[180px]"
            >
              <div className="space-y-1.5 z-10">
                <div className="flex items-center justify-between">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Code size={13} />
                  </div>
                  {proj.period && (
                    <span className="text-[9px] text-neutral-400">{proj.period}</span>
                  )}
                </div>

                <h4 className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                  {isTr ? proj.title.tr : proj.title.en}
                </h4>

                <p className="text-[10px] text-neutral-400 line-clamp-3 leading-relaxed">
                  {isTr ? proj.description.tr : proj.description.en}
                </p>
              </div>

              <div className="z-10 flex flex-wrap gap-1 pt-2 border-t border-white/5">
                {proj.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-neutral-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
                {proj.technologies.length > 2 && (
                  <span className="text-[9px] text-neutral-400">
                    +{proj.technologies.length - 2}
                  </span>
                )}
              </div>

              {/* Ambient bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Modal for Selected Project */}
        {activeProject !== null && filteredProjects[activeProject] && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#1c1c1e] text-white rounded-3xl border border-white/15 p-5 max-w-sm w-full space-y-4 shadow-2xl relative">
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white"
              >
                <X size={15} />
              </button>

              <div className="space-y-1">
                <span className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider">
                  {isTr ? "Proje Detayı" : "Project Details"}
                </span>
                <h3 className="text-base font-bold text-white">
                  {isTr
                    ? filteredProjects[activeProject].title.tr
                    : filteredProjects[activeProject].title.en}
                </h3>
                {filteredProjects[activeProject].period && (
                  <span className="text-xs text-neutral-400 block">
                    {filteredProjects[activeProject].period}
                  </span>
                )}
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed">
                {isTr
                  ? filteredProjects[activeProject].description.tr
                  : filteredProjects[activeProject].description.en}
              </p>

              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-neutral-400">
                  {isTr ? "Kullanılan Teknolojiler:" : "Technologies:"}
                </span>
                <div className="flex flex-wrap gap-1">
                  {filteredProjects[activeProject].technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-neutral-200 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                {filteredProjects[activeProject].github && (
                  <a
                    href={filteredProjects[activeProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-9 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                )}
                {filteredProjects[activeProject].link && (
                  <a
                    href={filteredProjects[activeProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-9 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>{isTr ? "Canlı Demo" : "Live Demo"}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </IOSAppWindow>
  );
}
