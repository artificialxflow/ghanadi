"use client";
import React, { useContext } from "react";
import { LangContext } from "./LangProvider";

const content = {
  en: {
    title: "Key Services",
    services: [
      {
        key: "area",
        icon: "bi bi-aspect-ratio",
        title: "Area Optimization",
        desc: "Maximize your confectionery space with smart area planning.",
      },
      {
        key: "equipment",
        icon: "bi bi-gear",
        title: "Modern Equipment",
        desc: "Upgrade to efficient, reliable, and modern confectionery equipment.",
      },
      {
        key: "insect",
        icon: "bi bi-bug",
        title: "Insect Control",
        desc: "Ensure hygiene and safety with advanced insect control solutions.",
      },
    ],
  },
  fa: {
    title: "خدمات کلیدی",
    services: [
      {
        key: "insect",
        icon: "bi bi-bug",
        title: "کنترل حشرات",
        desc: "حفظ بهداشت و ایمنی با راهکارهای پیشرفته کنترل حشرات.",
      },
      {
        key: "equipment",
        icon: "bi bi-gear",
        title: "تجهیزات مدرن",
        desc: "ارتقاء به تجهیزات مدرن، کارآمد و قابل اطمینان قنادی.",
      },
      {
        key: "area",
        icon: "bi bi-aspect-ratio",
        title: "بهینه‌سازی فضا",
        desc: "حداکثر استفاده از فضای قنادی با برنامه‌ریزی هوشمندانه.",
      },
    ],
  },
};

export default function KeyServices() {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "fa";
  const t = content[lang];

  return (
    <section className="container py-5" style={isRtl ? { direction: "rtl" } : {}}>
      <h2 className={`text-center fw-bold mb-4${isRtl ? " text-end" : ""}`} style={{ fontFamily: isRtl ? 'Vazirmatn, Tahoma, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
        {t.title}
      </h2>
      <div className="row g-4 justify-content-center">
        {t.services.map((service, idx) => (
          <div key={service.key} className="col-12 col-md-4 d-flex align-items-stretch">
            <div className={`card border-0 shadow-sm w-100 text-center p-4 animate__animated animate__fadeInUp${isRtl ? ' text-end' : ''}`} style={{ animationDelay: `${idx * 0.2 + 0.2}s`, fontFamily: isRtl ? 'Vazirmatn, Tahoma, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
              {/* Animated icon placeholder */}
              <div className="mb-3">
                <i className={`${service.icon} display-3 text-primary animate__animated animate__bounceIn`}
                  style={{ animationDelay: `${idx * 0.3 + 0.3}s` }}
                  aria-hidden="true"
                ></i>
              </div>
              <h5 className="fw-bold mb-2">{service.title}</h5>
              <p className="text-muted mb-0" style={{ fontFamily: isRtl ? 'Vazirmatn, Tahoma, Arial, sans-serif' : 'Lato, Arial, sans-serif' }}>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 