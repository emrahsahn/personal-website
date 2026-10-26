"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import { FileText, ChevronRight, CheckSquare, Search, Calendar, Folder } from "lucide-react";
import { educations, experiences, coreHighlights } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";
import IOSAppWindow from "../IOSAppWindow";

interface NotesAppProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IOSNotesApp({ isOpen, onClose }: NotesAppProps) {
  const locale = useLocale();
  const isTr = locale === "tr";
  const [selectedNote, setSelectedNote] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const notes = [
    {
      id: 0,
      title: isTr ? "🌟 Emrah Şahin — Hakkımda & Vizyon" : "🌟 Emrah Şahin — About & Vision",
      date: isTr ? "Bugün, 09:41" : "Today, 09:41",
      preview: isTr
        ? "Kocaeli Üniversitesi Bilgisayar Mühendisliği Yüksek Lisans öğrencisi..."
        : "Software Engineering graduate & incoming M.Sc. in Computer Engineering...",
      content: (
        <div className="space-y-4 text-neutral-200 text-sm leading-relaxed">
          <p>
            {isTr
              ? "Kocaeli Üniversitesi Bilgisayar Mühendisliği Yüksek Lisans öğrencisi ve Yazılım Mühendisliği mezunuyum. Büyük Dil Modelleri (LLMs), Üretken Yapay Zeka ve Ajan İş Akışları (Agentic Workflows) alanlarında uzmanlaşırken; LangChain, LangGraph ve LlamaIndex ile otonom AI ajanları geliştiriyorum."
              : "Software Engineering graduate (incoming M.Sc. in Computer Engineering at Kocaeli University) specializing in Large Language Models (LLMs), Generative AI, and agentic workflows, with hands-on experience building AI agents using LangChain, LangGraph, and LlamaIndex."}
          </p>
          <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-3 rounded-r-lg">
            <h4 className="font-semibold text-yellow-400 mb-1">
              {isTr ? "Odak Alanlarım:" : "Core Focus:"}
            </h4>
            <div className="grid grid-cols-1 gap-1 text-xs">
              {coreHighlights.map((hl) => (
                <div key={hl} className="flex items-center gap-2">
                  <span className="text-yellow-400">•</span>
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: isTr ? "🎓 Akademik Geçmiş & Eğitim" : "🎓 Education & Academic Background",
      date: isTr ? "Dün" : "Yesterday",
      preview: isTr ? "Kocaeli Üniversitesi Yüksek Lisans & TÜBİTAK 2209 Tezi" : "Kocaeli University M.Sc. & TÜBİTAK 2209",
      content: (
        <div className="space-y-4 text-neutral-200 text-sm">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">
                  {isTr ? edu.university.tr : edu.university.en}
                </span>
                <span className="text-xs text-yellow-400 font-semibold px-2 py-0.5 rounded-full bg-yellow-400/10">
                  {isTr ? edu.level.tr : edu.level.en}
                </span>
              </div>
              <p className="text-xs text-neutral-300">
                {isTr ? edu.degree.tr : edu.degree.en} • {isTr ? edu.period.tr : edu.period.en}
              </p>
              {edu.gpa && (
                <div className="text-xs text-emerald-400 font-mono font-medium">
                  {edu.gpa} {edu.scholarship && `(${isTr ? edu.scholarship.tr : edu.scholarship.en})`}
                </div>
              )}
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 2,
      title: isTr ? "💼 Staj ve İş Deneyimleri" : "💼 Internships & Experience",
      date: isTr ? "2 gün önce" : "2 days ago",
      preview: "The Leapers, Havelsan, Solvent Yazılım, Hamle Teknoloji...",
      content: (
        <div className="space-y-3 text-neutral-200 text-sm">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-2"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white">{exp.company}</h4>
                <span className="text-[11px] text-neutral-400">{exp.period}</span>
              </div>
              <div className="text-xs text-purple-400 font-medium">
                {exp.role} • {exp.location}
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300">
                {(isTr ? exp.highlights.tr : exp.highlights.en).map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
  ];

  const filteredNotes = notes.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <IOSAppWindow
      isOpen={isOpen}
      onClose={() => {
        setSelectedNote(null);
        onClose();
      }}
      title={isTr ? "Notlar" : "Notes"}
      headerBg="bg-[#1c1c1e]"
    >
      <div className="p-4 space-y-4 max-w-lg mx-auto">
        {selectedNote === null ? (
          <>
            {/* Search Bar */}
            <div className="relative">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isTr ? "Notlarda Ara..." : "Search notes..."}
                className="w-full h-9 pl-9 pr-3 rounded-xl bg-white/10 text-white placeholder-neutral-400 text-xs border border-white/5 focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
            </div>

            {/* Folder Header */}
            <div className="flex items-center justify-between text-xs text-yellow-500 font-semibold px-1">
              <span className="flex items-center gap-1.5">
                <Folder size={14} />
                {isTr ? "Kariyer Notları" : "Career Notes"}
              </span>
              <span className="text-neutral-500">
                {notes.length} {isTr ? "not" : "notes"}
              </span>
            </div>

            {/* Notes List */}
            <div className="bg-[#1c1c1e] rounded-2xl border border-white/10 divide-y divide-white/10 overflow-hidden shadow-lg">
              {filteredNotes.map((note) => (
                <div
                  key={note.id}
                  onClick={() => setSelectedNote(note.id)}
                  className="p-3.5 hover:bg-white/5 cursor-pointer transition-colors flex items-center justify-between group"
                >
                  <div className="flex flex-col gap-0.5 truncate pr-2">
                    <span className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors truncate">
                      {note.title}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-neutral-400 truncate">
                      <span className="text-neutral-500 shrink-0">{note.date}</span>
                      <span className="truncate">{note.preview}</span>
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-neutral-500 group-hover:text-yellow-400 transition-colors shrink-0"
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Active Note Detail */
          <div className="space-y-4">
            <button
              onClick={() => setSelectedNote(null)}
              className="text-xs text-yellow-500 hover:text-yellow-400 font-medium flex items-center gap-1"
            >
              ← {isTr ? "Tüm Notlar" : "All Notes"}
            </button>

            <div className="border-b border-white/10 pb-3">
              <h2 className="text-lg font-bold text-white">
                {notes[selectedNote].title}
              </h2>
              <span className="text-xs text-neutral-400">
                {notes[selectedNote].date}
              </span>
            </div>

            <div>{notes[selectedNote].content}</div>
          </div>
        )}
      </div>
    </IOSAppWindow>
  );
}
