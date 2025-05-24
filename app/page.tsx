"use client";
import { useContext } from "react";
import { LangContext } from "../components/LangProvider";

const content = {
  en: {
    title: "Welcome to the Next.js Template",
    desc: "This is a plain starter project with Bootstrap navigation."
  },
  fa: {
    title: "به قالب نکست‌جی‌اس خوش آمدید",
    desc: "این یک پروژه شروع ساده با ناوبری بوت‌استرپ است."
  }
};

export default function HomePage() {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "fa";
  const t = content[lang];
  return (
    <div className={`container py-5${isRtl ? ' text-end' : ''}`}
      style={isRtl ? { direction: 'rtl' } : {}}>
      <h1 className="mb-3">{t.title}</h1>
      <p>{t.desc}</p>
    </div>
  );
}
