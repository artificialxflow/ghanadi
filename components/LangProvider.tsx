"use client";
import React, { createContext, useState, useEffect } from "react";

interface LangContextType {
  lang: 'en' | 'fa';
  setLang: React.Dispatch<React.SetStateAction<'en' | 'fa'>>;
}

export const LangContext = createContext<LangContextType>({
  lang: 'fa',
  setLang: () => {},
});

export const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<'en' | 'fa'>("fa");
  const dir = lang === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    if (lang === "fa") {
      const link = document.createElement("link");
      link.href = "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;700&display=swap";
      link.rel = "stylesheet";
      document.head.appendChild(link);
      document.body.style.fontFamily = 'Vazirmatn, Tahoma, Arial, sans-serif';
    } else {
      document.body.style.fontFamily = 'Lato, Poppins, Arial, sans-serif';
    }
  }, [lang, dir]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}; 