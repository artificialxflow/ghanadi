"use client";
import React, { useContext } from "react";
import { LangContext } from "./LangProvider";

const content = {
  en: {
    title: "Modern Confectionery Design & Equipment",
    desc: "Optimize your confectionery with Ghanadi Rahmani – innovative layouts, smart equipment, and expert consulting.",
    cta1: "Get Consultation",
    cta2: "View Gallery"
  },
  fa: {
    title: "طراحی و تجهیز مدرن قنادی",
    desc: "قنادی خود را با قنادی رحمانی بهینه کنید؛ چیدمان نوین، تجهیزات هوشمند و مشاوره تخصصی.",
    cta1: "دریافت مشاوره",
    cta2: "مشاهده گالری"
  }
};

export default function Hero() {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "fa";
  const t = content[lang];

  return (
    <section
      className="bg-primary position-relative text-white py-5"
      style={isRtl ? { direction: "rtl" } : {}}
    >
      {/* Placeholder for animated/3D background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: "linear-gradient(135deg, #2E86AB 60%, #FF7A45 100%)",
          opacity: 0.15,
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <div className="container position-relative z-1 text-center">
        <h1 className="display-4 fw-bold mb-3" style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>
          {t.title}
        </h1>
        <p className="lead mb-4" style={{ fontFamily: 'Lato, Arial, sans-serif' }}>
          {t.desc}
        </p>
        <div className={`d-flex flex-column flex-sm-row justify-content-center gap-3${isRtl ? ' flex-row-reverse' : ''}`}>
          <a href="#consult" className="btn btn-lg btn-warning fw-bold px-4" style={{ color: '#fff', backgroundColor: '#FF7A45', border: 'none' }}>
            {t.cta1}
          </a>
          <a href="#gallery" className="btn btn-lg btn-outline-light fw-bold px-4">
            {t.cta2}
          </a>
        </div>
      </div>
    </section>
  );
} 