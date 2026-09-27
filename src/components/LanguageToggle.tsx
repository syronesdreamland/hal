"use client";

import { useLang } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      className="inline-flex items-center rounded-lg border border-neutral-200 bg-white/70 p-0.5 backdrop-blur"
      role="group"
      aria-label="Language"
    >
      {(["en", "id"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={`rounded-md px-2.5 py-1 font-mono text-xs uppercase tracking-wider transition ${
            lang === code
              ? "bg-medical-green text-white shadow-sm"
              : "text-neutral-500 hover:text-medical-green"
          }`}
          aria-pressed={lang === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
