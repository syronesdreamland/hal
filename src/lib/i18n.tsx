"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "id";

const STORAGE_KEY = "hal-lang";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
};

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  toggle: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "id" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const toggle = useCallback(() => {
    setLangState((current) => {
      const next: Lang = current === "en" ? "id" : "en";
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

/* ── UI strings ── */
export const ui = {
  nav: {
    projects: { en: "Projects", id: "Proyek" },
    experience: { en: "Experience", id: "Pengalaman" },
    certifications: { en: "Certifications", id: "Sertifikasi" },
  },
  hero: {
    connect: { en: "Connect on LinkedIn", id: "Terhubung di LinkedIn" },
    viewWork: { en: "View Work", id: "Lihat Karya" },
  },
  sections: {
    selectedWork: { en: "Selected Work", id: "Karya Terpilih" },
    projects: { en: "Projects", id: "Proyek" },
    projectsSub: {
      en: "Shipped systems and products — several running live in production right now.",
      id: "Sistem dan produk yang sudah dirilis — beberapa berjalan live di produksi saat ini.",
    },
    experience: { en: "Experience & Roles", id: "Pengalaman & Peran" },
    experienceSub: {
      en: "Capstones, internships, and production operations — from campus teams to real customers.",
      id: "Capstone, magang, dan operasi produksi — dari tim kampus sampai pelanggan nyata.",
    },
    proofOfLearning: { en: "Proof of Learning", id: "Bukti Belajar" },
    certifications: { en: "Certifications", id: "Sertifikasi" },
    certificationsSub: (n: number) => ({
      en: `${n} certifications across cloud, networking, AI, and software engineering fundamentals.`,
      id: `${n} sertifikasi mencakup cloud, jaringan, AI, dan fundamental software engineering.`,
    }),
  },
  cta: {
    open: {
      en: "Open to backend, cloud, and AI integration opportunities.",
      id: "Terbuka untuk peluang backend, cloud, dan integrasi AI.",
    },
    bestFit: {
      en: "Best fit: practical product teams that need reliable APIs and cloud-aware implementation.",
      id: "Paling cocok: tim produk praktis yang butuh API andal dan implementasi cloud-aware.",
    },
    start: { en: "Start a Conversation", id: "Mulai Percakapan" },
  },
  detail: {
    back: { en: "Back to portfolio", id: "Kembali ke portfolio" },
    whatIBuilt: { en: "What I Built", id: "Apa yang Saya Bangun" },
    snapshot: { en: "Snapshot", id: "Sekilas" },
    openLive: { en: "Open Live", id: "Buka Live" },
    openCredential: { en: "Open Credential Link", id: "Buka Link Kredensial" },
  },
  footerBuilt: {
    en: "Built with Next.js.",
    id: "Dibangun dengan Next.js.",
  },
} as const;
