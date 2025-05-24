"use client";
import React, { useContext } from "react";
import { LangContext } from "./LangProvider";

const partners = [
  { name: "Partner 1", logo: "https://via.placeholder.com/80x40?text=Logo+1" },
  { name: "Partner 2", logo: "https://via.placeholder.com/80x40?text=Logo+2" },
  { name: "Partner 3", logo: "https://via.placeholder.com/80x40?text=Logo+3" },
];

const content = {
  en: {
    legal: "Legal permits and certifications available. Trusted by industry leaders.",
    rights: `All rights reserved. Ronac Electronics © ${new Date().getFullYear()}`,
  },
  fa: {
    legal: "دارای مجوزها و تاییدیه‌های قانونی. مورد اعتماد سازمان‌های معتبر.",
    rights: `تمام حقوق محفوظ است. روناک الکترونیک © ${new Date().getFullYear()}`,
  },
};

export default function Footer() {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "fa";
  const t = content[lang];

  return (
    <footer className="bg-light border-top py-4 mt-5" style={isRtl ? { direction: "rtl" } : {}}>
      <div className="container">
        <div className="row align-items-center justify-content-between g-3">
          <div className={`col-12 col-md-6 text-center mb-3 mb-md-0${isRtl ? " text-md-end order-md-2" : " text-md-start"}`}>
            <div className="fw-bold mb-2" style={{ fontFamily: isRtl ? 'Vazirmatn, Tahoma, Arial, sans-serif' : 'Poppins, Arial, sans-serif', color: '#2E86AB' }}>
              {t.legal}
            </div>
            <div className="small text-muted">
              {t.rights}
            </div>
          </div>
          <div className={`col-12 col-md-6 d-flex justify-content-center align-items-center gap-3${isRtl ? " justify-content-md-start order-md-1" : " justify-content-md-end"}`}>
            {partners.map((p, idx) => (
              <img key={idx} src={p.logo} alt={p.name} className="img-fluid rounded bg-white shadow-sm p-1" style={{ maxHeight: 40, maxWidth: 80 }} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 