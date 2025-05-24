"use client";
import React, { useContext } from "react";
import { LangContext } from "./LangProvider";

const services = [
  {
    key: "area",
    icon: "bi bi-aspect-ratio",
    title: "بهینه‌سازی فضا",
    desc: "استفاده حداکثری از فضای قنادی با طراحی هوشمندانه و چیدمان اصولی، باعث افزایش راندمان تولید و رضایت مشتریان می‌شود.",
    color: "#FF7A45",
  },
  {
    key: "equipment",
    icon: "bi bi-gear",
    title: "تجهیزات مدرن",
    desc: "انتخاب و استفاده از تجهیزات مدرن و استاندارد، کیفیت محصولات و سرعت تولید را به طور چشمگیری افزایش می‌دهد.",
    color: "#2E86AB",
  },
  {
    key: "insect",
    icon: "bi bi-bug",
    title: "کنترل بهداشت و آفات",
    desc: "رعایت کامل اصول بهداشتی و کنترل آفات، سلامت محصولات و اعتماد مشتریان را تضمین می‌کند.",
    color: "#F7B801",
  },
];

export default function KeyServices() {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "fa";

  return (
    <section className="container py-5" style={{ direction: "rtl" }}>
      <h2 className="fw-bold text-center mb-5" style={{ color: '#2E86AB', fontFamily: 'Vazirmatn, Tahoma, Arial, sans-serif' }}>
        مزایای کلیدی خدمات روناک
      </h2>
      <div className="row g-4 justify-content-center">
        {services.map((service, idx) => (
          <div key={service.key} className="col-12 col-md-4 d-flex align-items-stretch">
            <div className="card border-0 shadow-lg w-100 text-center p-4 position-relative" style={{ borderTop: `5px solid ${service.color}`, fontFamily: 'Vazirmatn, Tahoma, Arial, sans-serif', background: '#fff' }}>
              {/* Icon circle */}
              <div className="d-flex justify-content-center mb-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center shadow" style={{ width: 64, height: 64, background: service.color, color: '#fff', fontSize: 32, border: `3px solid #fff`, boxShadow: `0 2px 8px ${service.color}33` }}>
                  {/* آیکون بوت‌استرپ */}
                  <i className={service.icon}></i>
                </div>
              </div>
              <h5 className="fw-bold mb-3" style={{ color: service.color }}>{service.title}</h5>
              <div className="text-secondary mb-2" style={{ fontSize: 15, lineHeight: 2 }}>{service.desc}</div>
              {/* جایگاه تصویر یا اینفوگرافیک */}
              <div className="bg-light rounded d-flex align-items-center justify-content-center mt-3" style={{ height: 60 }}>
                <span className="text-muted small">اینجا جای تصویر یا اینفوگرافیک است</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 