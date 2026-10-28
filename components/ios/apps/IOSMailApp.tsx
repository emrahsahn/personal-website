"use client";

import React, { useState } from "react";
import { useLocale } from "next-intl";
import {
  Send,
  CheckCircle2,
  Mail,
  Inbox,
  PenSquare,
  ChevronRight,
  Copy,
  Check,
  User,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import IOSAppWindow from "../IOSAppWindow";

interface MailAppProps {
  isOpen?: boolean;
  onClose: () => void;
}

export default function IOSMailApp({ isOpen = true, onClose }: MailAppProps) {
  const locale = useLocale();
  const isTr = locale === "tr";

  const [activeTab, setActiveTab] = useState<"inbox" | "compose">("compose");
  const [selectedInboxMail, setSelectedInboxMail] = useState<number | null>(null);

  // Form State
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    if (typeof navigator !== "undefined") {
      setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
    }
  }, []);

  const inboxMails = [
    {
      id: 0,
      from: "Havelsan AI Team",
      email: "ai-eval@havelsan.com.tr",
      subject: isTr
        ? "LLM Değerlendirme & Benchmark Sistemi Başarısı"
        : "LLM Evaluation & Benchmarking System Milestone",
      date: isTr ? "Bugün, 11:20" : "Today, 11:20",
      preview: isTr
        ? "Emrah merhaba, 5+ model üzerinde kurduğun toksisite ve doğruluk pipeline'ı..."
        : "Hi Emrah, the toxicity and accuracy pipeline built on 5+ models...",
      content: isTr
        ? "Merhaba Emrah,\n\nStaj sürecinde geliştirdiğin LLM benchmark ve test altyapısı sayesinde kalite kontrol süreçlerimizde manuel iş yükü %40 oranında azaldı. Eline sağlık, çalışmalarında başarılar dileriz!\n\nHavelsan Yapay Zeka Ekibi"
        : "Hi Emrah,\n\nThanks to the automated LLM evaluation framework you developed, manual QA time was reduced by ~40%. Great work and congratulations!\n\nHavelsan AI Engineering Team",
    },
    {
      id: 1,
      from: "The Leapers (London)",
      email: "engineering@theleapers.co.uk",
      subject: isTr
        ? "Hybrid Agent Platform Karar Ağacı Pipeline'ı"
        : "Hybrid Agent Platform Decision Tree Pipeline",
      date: isTr ? "Dün" : "Yesterday",
      preview: isTr
        ? "Otonom müşteri talebi yönlendirme mimarisi başarıyla entegre edildi..."
        : "Autonomous routing decision pipelines have been integrated...",
      content: isTr
        ? "Hi Emrah,\n\nHybrid Agent platform projesindeki karar destek ve otonom yönlendirme mimarisi entegrasyonu başarıyla tamamlandı. Detaylı teknik dökümantasyon için teşekkürler.\n\nThe Leapers Team"
        : "Hi Emrah,\n\nThe decision routing architecture on the Hybrid Agent Platform has been successfully deployed. Thank you for the clean technical documentation.\n\nThe Leapers Team",
    },
    {
      id: 2,
      from: "TÜBİTAK 2209 Kurulu",
      email: "destek@tubitak.gov.tr",
      subject: isTr
        ? "Proje Desteği & Sonuç Raporu Kabulü"
        : "Research Grant & Project Report Approval",
      date: isTr ? "3 gün önce" : "3 days ago",
      preview: isTr
        ? "EKG Sinyal Analizi & Derin Öğrenme Karar Destek Sistemi..."
        : "ECG Signal Analysis & Deep Learning Decision Support...",
      content: isTr
        ? "Sayın Emrah Şahin,\n\nTÜBİTAK 2209-A kapsamında yürüttüğünüz EKG Sinyal Analizi ve Derin Öğrenme Tabanlı Karar Destek Sistemi projenizin ara değerlendirmesi başarıyla tamamlanmıştır.\n\nTÜBİTAK Bilim İnsanı Destek Programı"
        : "Dear Emrah Şahin,\n\nYour TÜBİTAK 2209-A funded research project on ECG Signal Analysis and Deep Learning Decision Support has been successfully approved.\n\nTÜBİTAK Scientific Support Directorate",
    },
  ];

  const quickTemplates = [
    {
      label: isTr ? "💼 İş Fırsatı" : "💼 Job Opportunity",
      subject: isTr ? "İş Teklifi / Pozisyon Görüşmesi" : "Job Offer / Role Opportunity",
      template: isTr
        ? "Merhaba Emrah,\n\nProfilinizi ve projelerinizi inceledik. Ekibimiz bünyesindeki açık pozisyonumuz için sizinle görüşmek isteriz.\n\nUygun olduğunuz bir zaman aralığında online toplantı planlayabilir miyiz?"
        : "Hi Emrah,\n\nWe reviewed your portfolio and background. We would like to discuss an engineering role with you.\n\nCould we schedule a brief introductory call?",
    },
    {
      label: isTr ? "🤝 Proje Ortaklığı" : "🤝 Collaboration",
      subject: isTr ? "Proje Ortaklığı / Freelance İşbirliği" : "Project Collaboration / Freelance",
      template: isTr
        ? "Merhaba Emrah,\n\nGeliştirmekte olduğumuz bir yapay zeka / full-stack projesinde mimari danışmanlık ve geliştirme desteği almak istiyoruz.\n\nDetayları paylaşmak üzere görüşebilir miyiz?"
        : "Hi Emrah,\n\nWe are looking for AI / full-stack engineering consulting for our upcoming project.\n\nWould you be open to a quick chat to discuss details?",
    },
    {
      label: isTr ? "💡 Danışmanlık" : "💡 AI Consulting",
      subject: isTr ? "LLM & AI Danışmanlık Talebi" : "LLM & AI Consulting Request",
      template: isTr
        ? "Merhaba Emrah,\n\nLLM değerlendirme, benchmark ve otonom karar mekanizmaları konusundaki deneyiminiz ilgimizi çekti. Bir konuda fikrinizi almak isteriz."
        : "Hi Emrah,\n\nYour experience with LLM evaluation and autonomous agents is very relevant to what we are building. We would love to get your input.",
    },
    {
      label: isTr ? "👋 Tanışma" : "👋 Networking",
      subject: isTr ? "Merhaba / Tanışma" : "Hello / Networking",
      template: isTr
        ? "Merhaba Emrah,\n\nPortfolyonuzu inceledim, iPhone arayüzü konsepti çok başarılı olmuş! Tebrik etmek ve ağımıza eklemek istedim."
        : "Hi Emrah,\n\nI really enjoyed exploring your portfolio and the iPhone experience! Just wanted to connect and say hi.",
    },
  ];

  const applyTemplate = (t: (typeof quickTemplates)[0]) => {
    setSubject(t.subject);
    if (!body || body.trim().length === 0) {
      setBody(t.template);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleOpenGmail = () => {
    const emailSubject = subject || (isTr ? "Portfolyo İletişim Mesajı" : "Portfolio Contact");
    const emailBody = `Merhaba Emrah,\n\nGönderen: ${senderName || "Ziyaretçi"} (${senderEmail || "E-posta girilmedi"})\n\n${body}`;
    const encTo = encodeURIComponent(siteConfig.email);
    const encSubject = encodeURIComponent(emailSubject);
    const encBody = encodeURIComponent(emailBody);

    const isMobileDevice =
      typeof navigator !== "undefined" &&
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobileDevice) {
      const isIOS =
        typeof navigator !== "undefined" &&
        /iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isIOS) {
        // iOS Gmail app URI scheme
        const gmailAppUrl = `googlegmail:///co?to=${encTo}&subject=${encSubject}&body=${encBody}`;
        const webFallback = `https://mail.google.com/mail/?view=cm&fs=1&to=${encTo}&su=${encSubject}&body=${encBody}`;

        const startTime = Date.now();
        window.location.href = gmailAppUrl;

        // Fallback to web if Gmail app is not installed
        setTimeout(() => {
          if (Date.now() - startTime < 1600) {
            window.open(webFallback, "_blank");
          }
        }, 700);
        return;
      } else {
        // Android native mailto (triggers Gmail app automatically on Android)
        const mailtoUrl = `mailto:${siteConfig.email}?subject=${encSubject}&body=${encBody}`;
        window.location.href = mailtoUrl;
        return;
      }
    }

    // Desktop: Open Gmail in web browser directly
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encTo}&su=${encSubject}&body=${encBody}`;
    window.open(gmailUrl, "_blank");
  };

  const handleOpenMailto = () => {
    const emailSubject = subject || (isTr ? "Portfolyo İletişim Mesajı" : "Portfolio Contact");
    const emailBody = `Merhaba Emrah,\n\nGönderen: ${senderName || "Ziyaretçi"} (${senderEmail || "E-posta girilmedi"})\n\n${body}`;
    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoUrl, "_blank");
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <IOSAppWindow
      isOpen={isOpen}
      onClose={onClose}
      title={isTr ? "Apple Mail" : "Apple Mail"}
      headerBg="bg-[#1c1c1e]"
    >
      <div className="p-3.5 space-y-3.5 max-w-lg mx-auto select-none">
        {/* Segmented Control */}
        <div className="flex rounded-xl bg-white/10 p-1 border border-white/5 text-xs font-semibold">
          <button
            type="button"
            onClick={() => {
              setActiveTab("compose");
              setSelectedInboxMail(null);
            }}
            className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              activeTab === "compose"
                ? "bg-blue-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <PenSquare size={13} />
            <span>{isTr ? "Emrah'a E-Posta Yaz" : "Compose to Emrah"}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("inbox");
              setSelectedInboxMail(null);
            }}
            className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
              activeTab === "inbox"
                ? "bg-blue-600 text-white shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Inbox size={13} />
            <span>{isTr ? "Gelen Kutusu (3)" : "Inbox (3)"}</span>
          </button>
        </div>

        {/* TAB 1: COMPOSE (EMRAH'A YAZ) */}
        {activeTab === "compose" && (
          <div>
            {isSent ? (
              <div className="py-8 px-4 flex flex-col items-center justify-center text-center space-y-4 bg-[#1c1c1e] rounded-2xl border border-white/10 shadow-lg">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">
                    {isTr ? "Mesajınız Alındı!" : "Message Prepared!"}
                  </h3>
                  <p className="text-xs text-neutral-300 max-w-xs leading-relaxed">
                    {isTr ? (
                      <>
                        <span className="text-white font-semibold">{senderName || "Ziyaretçi"}</span>, iletiniz Emrah Şahin&apos;in gelen kutusuna yönlendirildi.
                      </>
                    ) : (
                      <>
                        Thank you <span className="text-white font-semibold">{senderName || "Visitor"}</span>, your message has been routed to Emrah Şahin.
                      </>
                    )}
                  </p>
                </div>

                {/* Quick actions after sending */}
                <div className="w-full pt-2 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={handleOpenGmail}
                    className="w-full py-2.5 px-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <ExternalLink size={13} />
                    <span>
                      {isMobile
                        ? (isTr ? "Gmail Uygulamasında Aç (Taslak)" : "Open in Gmail App (Draft)")
                        : (isTr ? "Gmail'de Aç (Yeni Sekme)" : "Open in Gmail (New Tab)")}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenMailto}
                    className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-200 text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Mail size={13} />
                    <span>{isTr ? "Varsayılan Mail Uygulamasıyla Gönder" : "Open in Default Email App"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSent(false);
                      setSubject("");
                      setBody("");
                    }}
                    className="text-xs text-neutral-400 hover:text-white pt-1"
                  >
                    {isTr ? "Yeni Bir Mesaj Yaz" : "Write Another Message"}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-3">
                {/* Visual Explanation Banner */}
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-xl p-2.5 flex items-start gap-2.5 text-xs text-blue-200">
                  <ShieldCheck size={16} className="text-blue-400 shrink-0 mt-0.5" />
                  <div className="space-y-0.5 text-[11px] leading-relaxed">
                    <p className="font-semibold text-white">
                      {isTr ? "Emrah Şahin'e Doğrudan İletişim Formu" : "Direct Contact to Emrah Şahin"}
                    </p>
                    <p className="text-neutral-300">
                      {isTr
                        ? "Bu ekrandan yazılan mesajlar doğrudan Emrah Şahin'e ulaşır. Sizinle iletişime geçebilmesi için lütfen bilgilerinizi eksiksiz giriniz."
                        : "Messages written here are sent directly to Emrah Şahin. Please provide your contact info so he can reply."}
                    </p>
                  </div>
                </div>

                {/* 1. ALICI (KİME) - Fixed to Emrah with Badge */}
                <div className="bg-[#1c1c1e] rounded-xl border border-white/10 p-2.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1">
                      <Mail size={11} />
                      <span>{isTr ? "Alıcı (Mesajın Ulaşacağı Kişi)" : "Recipient (To)"}</span>
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-[10px] text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 px-2 py-0.5 rounded flex items-center gap-1 transition-colors"
                    >
                      {copied ? <Check size={10} className="text-emerald-400" /> : <Copy size={10} />}
                      <span>{copied ? (isTr ? "Kopyalandı!" : "Copied!") : (isTr ? "E-Postayı Kopyala" : "Copy Email")}</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white text-[10px] font-bold shrink-0">
                      EŞ
                    </div>
                    <div className="truncate text-xs">
                      <span className="text-white font-semibold">{siteConfig.name}</span>
                      <span className="text-neutral-400 ml-1.5 font-mono text-[11px]">&lt;{siteConfig.email}&gt;</span>
                    </div>
                  </div>
                </div>

                {/* 2. GÖNDEREN (SİZİN BİLGİLERİNİZ) */}
                <div className="bg-[#1c1c1e] rounded-xl border border-white/10 p-2.5 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400 flex items-center gap-1">
                    <User size={11} />
                    <span>{isTr ? "Gönderen (Sizin Bilgileriniz)" : "Sender (Your Details)"}</span>
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <label className="block text-[10px] text-neutral-400 mb-1">
                        {isTr ? "Adınız & Şirketiniz:" : "Your Name & Company:"}
                      </label>
                      <input
                        type="text"
                        required
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder={isTr ? "Örn: Ahmet Yılmaz" : "e.g. Alex Miller"}
                        className="w-full bg-white/5 rounded-lg px-2.5 py-1.5 text-white placeholder-neutral-500 border border-white/10 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-neutral-400 mb-1">
                        {isTr ? "Yanıt Alacağınız E-Postanız:" : "Your Reply Email:"}
                      </label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder={isTr ? "ornek@sirketiniz.com" : "you@company.com"}
                        className="w-full bg-white/5 rounded-lg px-2.5 py-1.5 text-white placeholder-neutral-500 border border-white/10 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. KONU VE HIZLI ŞABLONLAR */}
                <div className="bg-[#1c1c1e] rounded-xl border border-white/10 p-2.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                      {isTr ? "Konu & Hızlı Şablonlar:" : "Subject & Quick Templates:"}
                    </label>
                    <span className="text-[10px] text-neutral-500 flex items-center gap-1">
                      <Sparkles size={10} className="text-amber-400" />
                      <span>{isTr ? "Şablona tıkla" : "Click to fill"}</span>
                    </span>
                  </div>

                  {/* Quick Template Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {quickTemplates.map((t, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => applyTemplate(t)}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 border border-white/10 transition-colors"
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>

                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={isTr ? "Mesajınızın konusu" : "Subject of your message"}
                    className="w-full bg-white/5 rounded-lg px-2.5 py-1.5 text-white placeholder-neutral-500 border border-white/10 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* 4. MESAJ GÖVDESİ */}
                <div>
                  <textarea
                    required
                    rows={4}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder={
                      isTr
                        ? "Merhaba Emrah,\n\nProjelerini inceledim ve şu konu hakkında görüşmek isteriz..."
                        : "Hi Emrah,\n\nI reviewed your portfolio and would like to discuss..."
                    }
                    className="w-full bg-[#1c1c1e] rounded-xl p-3 text-white placeholder-neutral-500 border border-white/10 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                  />
                </div>

                {/* 5. GÖNDER BUTONLARI */}
                <div className="pt-1 space-y-2">
                  <button
                    type="submit"
                    className="w-full h-10 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                  >
                    <Send size={14} />
                    <span>{isTr ? "Emrah'a Gönder" : "Send to Emrah"}</span>
                  </button>

                  {/* Alternative quick send triggers */}
                  <div className="flex items-center justify-between text-[11px] px-1 text-neutral-400">
                    <span>{isTr ? "Veya doğrudan açın:" : "Or open directly:"}</span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleOpenGmail}
                        className="text-red-400 hover:text-red-300 flex items-center gap-1 font-medium transition-colors"
                      >
                        <ExternalLink size={11} />
                        <span>{isMobile ? "Gmail App" : "Gmail"}</span>
                      </button>
                      <span className="text-neutral-600">•</span>
                      <button
                        type="button"
                        onClick={handleOpenMailto}
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium transition-colors"
                      >
                        <Mail size={11} />
                        <span>Mail App</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        )}

        {/* TAB 2: INBOX (GELEN KUTUSU) */}
        {activeTab === "inbox" && (
          <div className="space-y-3">
            {selectedInboxMail === null ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1 text-xs text-neutral-400">
                  <span>{isTr ? "Emrah Şahin'in Gelen Kutusu" : "Emrah Şahin's Inbox"}</span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full font-semibold">
                    {isTr ? "3 Önemli Başarı" : "3 Milestones"}
                  </span>
                </div>

                <div className="bg-[#1c1c1e] rounded-2xl border border-white/10 divide-y divide-white/10 overflow-hidden shadow-md">
                  {inboxMails.map((m) => (
                    <div
                      key={m.id}
                      onClick={() => setSelectedInboxMail(m.id)}
                      className="p-3.5 hover:bg-white/5 cursor-pointer transition-colors flex items-center justify-between group"
                    >
                      <div className="flex flex-col gap-0.5 truncate pr-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                            {m.from}
                          </span>
                          <span className="text-[10px] text-neutral-500">{m.date}</span>
                        </div>
                        <span className="text-xs text-neutral-300 font-medium truncate">
                          {m.subject}
                        </span>
                        <span className="text-[10px] text-neutral-400 truncate">
                          {m.preview}
                        </span>
                      </div>
                      <ChevronRight
                        size={15}
                        className="text-neutral-500 group-hover:text-blue-400 transition-colors shrink-0"
                      />
                    </div>
                  ))}
                </div>

                {/* Quick button to switch to compose */}
                <button
                  type="button"
                  onClick={() => setActiveTab("compose")}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-blue-400 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <PenSquare size={13} />
                  <span>{isTr ? "Emrah'a Yeni E-Posta Yaz" : "Compose New Email to Emrah"}</span>
                </button>
              </div>
            ) : (
              <div className="bg-[#1c1c1e] rounded-2xl border border-white/10 p-4 space-y-3 shadow-md">
                <button
                  type="button"
                  onClick={() => setSelectedInboxMail(null)}
                  className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                >
                  ← {isTr ? "Gelen Kutusu" : "Inbox"}
                </button>

                <div className="border-b border-white/10 pb-2 space-y-1">
                  <h3 className="text-sm font-bold text-white">
                    {inboxMails[selectedInboxMail].subject}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="text-neutral-300 font-medium">
                      {inboxMails[selectedInboxMail].from} &lt;{inboxMails[selectedInboxMail].email}&gt;
                    </span>
                    <span className="text-[10px] text-neutral-500">
                      {inboxMails[selectedInboxMail].date}
                    </span>
                  </div>
                  <div className="text-[10px] text-emerald-400">
                    {isTr ? "Alıcı: Emrah Şahin <sahinemrah3344@gmail.com>" : "To: Emrah Şahin <sahinemrah3344@gmail.com>"}
                  </div>
                </div>

                <div className="text-xs text-neutral-200 leading-relaxed whitespace-pre-line pt-1">
                  {inboxMails[selectedInboxMail].content}
                </div>

                <div className="pt-2 border-t border-white/10 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedInboxMail(null);
                      setActiveTab("compose");
                      setSubject(
                        isTr
                          ? `Re: ${inboxMails[selectedInboxMail].subject}`
                          : `Re: ${inboxMails[selectedInboxMail].subject}`
                      );
                    }}
                    className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 font-medium transition-colors"
                  >
                    <PenSquare size={12} />
                    <span>{isTr ? "Emrah'a Yaz" : "Write to Emrah"}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </IOSAppWindow>
  );
}
