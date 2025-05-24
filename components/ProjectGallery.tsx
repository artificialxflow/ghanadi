"use client";
import React, { useContext } from "react";
import { LangContext } from "./LangProvider";

const projects = [
  {
    id: 1,
    title: "پروژه ۱: ارتقاء چیدمان",
    beforeLabel: "قبل از بهینه‌سازی",
    afterLabel: "بعد از بهینه‌سازی",
    beforeDesc: "چیدمان قدیمی، فضای ناکافی و مسیرهای غیر اصولی.",
    afterDesc: "چیدمان جدید، افزایش فضای مفید و بهبود مسیر حرکت کارکنان.",
    stats: "کاهش هزینه ۲۰٪ | افزایش راندمان ۱۵٪",
    color: "#FF7A45",
  },
  {
    id: 2,
    title: "پروژه ۲: مدرن‌سازی تجهیزات",
    beforeLabel: "قبل از ارتقاء",
    afterLabel: "بعد از ارتقاء",
    beforeDesc: "تجهیزات قدیمی و پرمصرف، خرابی مکرر.",
    afterDesc: "تجهیزات مدرن، مصرف انرژی کمتر و کیفیت بالاتر.",
    stats: "افزایش بهره‌وری ۳۰٪ | کاهش مصرف انرژی ۲۵٪",
    color: "#2E86AB",
  },
  {
    id: 3,
    title: "پروژه ۳: بهبود بهداشت و کنترل آفات",
    beforeLabel: "قبل از اصلاح",
    afterLabel: "بعد از اصلاح",
    beforeDesc: "مشکلات بهداشتی و وجود آفات.",
    afterDesc: "محیط کاملاً بهداشتی و کنترل کامل آفات.",
    stats: "کاهش زمان توقف ۵۰٪ | افزایش رضایت مشتریان",
    color: "#F7B801",
  },
];

export default function ProjectGallery() {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "fa";

  return (
    <section className="container py-5" style={{ direction: "rtl" }}>
      <h2 className="fw-bold text-center mb-5" style={{ color: '#FF7A45', fontFamily: 'Vazirmatn, Tahoma, Arial, sans-serif' }}>
        نمونه پروژه‌های موفق روناک
      </h2>
      <div className="row g-4 justify-content-center">
        {projects.map((project) => (
          <div key={project.id} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="w-100 shadow rounded-4 overflow-hidden position-relative" style={{ background: '#fcfcfc', fontFamily: 'Vazirmatn, Tahoma, Arial, sans-serif', borderTop: `5px solid ${project.color}`, boxShadow: '0 4px 24px #0001' }}>
              <div className="p-3 text-center" style={{ background: project.color, color: '#fff', fontWeight: 700, fontSize: 18 }}>
                {project.title}
              </div>
              <div className="p-4">
                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <div className="bg-white rounded-3 d-flex flex-column align-items-center justify-content-center p-2" style={{ height: 110, border: `2.5px solid ${project.color}`, boxShadow: '0 2px 8px #0001' }}>
                      <span className="fw-bold mb-1" style={{ color: project.color }}>{project.beforeLabel}</span>
                      <span className="text-muted small mb-2">اینجا تصویر قبل پروژه قرار می‌گیرد</span>
                      <span className="text-dark small text-center" style={{ fontWeight: 500 }}>{project.beforeDesc}</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="bg-white rounded-3 d-flex flex-column align-items-center justify-content-center p-2" style={{ height: 110, border: `2.5px solid ${project.color}`, boxShadow: '0 2px 8px #0001' }}>
                      <span className="fw-bold mb-1" style={{ color: project.color }}>{project.afterLabel}</span>
                      <span className="text-muted small mb-2">اینجا تصویر بعد پروژه قرار می‌گیرد</span>
                      <span className="text-dark small text-center" style={{ fontWeight: 500 }}>{project.afterDesc}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-3 shadow-sm p-3 text-center mt-2" style={{ border: `2px solid ${project.color}`, fontWeight: 700, color: project.color, fontSize: 17, letterSpacing: 0.5 }}>
                  {project.stats}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 