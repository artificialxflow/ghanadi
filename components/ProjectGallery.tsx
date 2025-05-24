"use client";
import React, { useContext } from "react";
import { LangContext } from "./LangProvider";

const content = {
  en: {
    title: "Project Gallery",
    before: "Before",
    after: "After",
    projects: [
      {
        id: 1,
        beforeImg: "",
        afterImg: "",
        caption: "Project 1: Layout Upgrade",
        stats: "Cost reduced by 20%",
      },
      {
        id: 2,
        beforeImg: "",
        afterImg: "",
        caption: "Project 2: Equipment Modernization",
        stats: "Efficiency up by 30%",
      },
      {
        id: 3,
        beforeImg: "",
        afterImg: "",
        caption: "Project 3: Hygiene Improvement",
        stats: "Downtime reduced by 50%",
      },
    ],
  },
  fa: {
    title: "گالری پروژه‌ها",
    before: "قبل",
    after: "بعد",
    projects: [
      {
        id: 1,
        beforeImg: "",
        afterImg: "",
        caption: "پروژه ۱: ارتقاء چیدمان",
        stats: "کاهش هزینه ۲۰٪",
      },
      {
        id: 2,
        beforeImg: "",
        afterImg: "",
        caption: "پروژه ۲: مدرن‌سازی تجهیزات",
        stats: "افزایش بهره‌وری ۳۰٪",
      },
      {
        id: 3,
        beforeImg: "",
        afterImg: "",
        caption: "پروژه ۳: بهبود بهداشت",
        stats: "کاهش زمان توقف ۵۰٪",
      },
    ],
  },
};

function ImageOrPlaceholder({ src, label, placeholderText }: { src: string; label: string; placeholderText: string }) {
  return src ? (
    <>
      <img src={src} alt={label} className="img-fluid rounded shadow-sm w-100" />
      <div className="small text-center mt-2 text-muted">{label}</div>
    </>
  ) : (
    <div className="d-flex flex-column justify-content-center align-items-center bg-secondary rounded shadow-sm w-100" style={{ height: 120, opacity: 0.15 }}>
      <span className="text-muted small">{placeholderText}</span>
      <div className="small text-center mt-2 text-muted">{label}</div>
    </div>
  );
}

export default function ProjectGallery() {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "fa";
  const t = content[lang];

  return (
    <section className="container py-5" style={isRtl ? { direction: "rtl" } : {}}>
      <h2 className={`text-center fw-bold mb-4${isRtl ? " text-end" : ""}`} style={{ fontFamily: isRtl ? 'Vazirmatn, Tahoma, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
        {t.title}
      </h2>
      {/* Parallax effect placeholder */}
      <div className="mb-3" style={{ height: 30, background: 'linear-gradient(90deg, #2E86AB 0%, #FF7A45 100%)', opacity: 0.2 }} />
      <div id="projectGalleryCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {t.projects.map((project, idx) => (
            <div className={`carousel-item${idx === 0 ? ' active' : ''}`} key={project.id}>
              <div className="row g-3 align-items-center justify-content-center">
                <div className={isRtl ? "col-12 col-md-5 order-md-2" : "col-12 col-md-5"}>
                  <ImageOrPlaceholder
                    src={project.afterImg}
                    label={t.after}
                    placeholderText={isRtl ? "اینجا تصویر بعد پروژه قرار می‌گیرد" : "After project image placeholder"}
                  />
                </div>
                <div className={isRtl ? "col-12 col-md-5 order-md-1" : "col-12 col-md-5"}>
                  <ImageOrPlaceholder
                    src={project.beforeImg}
                    label={t.before}
                    placeholderText={isRtl ? "اینجا تصویر قبل پروژه قرار می‌گیرد" : "Before project image placeholder"}
                  />
                </div>
                <div className="col-12 col-md-10 mx-auto mt-3">
                  <div className="card border-0 bg-light shadow-sm p-3 text-center" style={{ fontFamily: isRtl ? 'Vazirmatn, Tahoma, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
                    <div className="fw-bold mb-1">{project.caption}</div>
                    <div className="text-primary" style={{ fontSize: 16 }}>{project.stats}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#projectGalleryCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">{isRtl ? "قبلی" : "Previous"}</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#projectGalleryCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">{isRtl ? "بعدی" : "Next"}</span>
        </button>
      </div>
    </section>
  );
} 