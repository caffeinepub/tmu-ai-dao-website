import type React from "react";
import { createContext, useContext, useState } from "react";

export type Language = "EN" | "FR";

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: "EN",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const stored = sessionStorage.getItem("tmu-language");
    return (stored === "FR" ? "FR" : "EN") as Language;
  });

  const setLanguage = (lang: Language) => {
    sessionStorage.setItem("tmu-language", lang);
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
