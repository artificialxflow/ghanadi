"use client";
import React, { useContext, useState } from "react";
import { LangContext } from "./LangProvider";

const content = {
  en: {
    title: "Interactive Infographic",
    timelapse: "Timelapse / Smart Layout Flow (Placeholder)",
    traditional: "Traditional Layout",
    ronac: "Ronac Layout",
    traditionalDesc: "Less efficient, more clutter",
    ronacDesc: "Optimized, modern, clean",
    floors: [
      { label: "Floor 1", details: "Equipment details for Floor 1." },
      { label: "Floor 2", details: "Equipment details for Floor 2." },
      { label: "Floor 3", details: "Equipment details for Floor 3." },
      { label: "Floor 4", details: "Equipment details for Floor 4." },
    ],
  },
  fa: {
    title: "اینفوگرافیک تعاملی",
    timelapse: "انیمیشن یا جریان چیدمان هوشمند (نمونه)",
    traditional: "چیدمان سنتی",
    ronac: "چیدمان روناک",
    traditionalDesc: "کم‌بازده، شلوغ و نامنظم",
    ronacDesc: "بهینه، مدرن و منظم",
    floors: [
      { label: "طبقه ۱", details: "جزئیات تجهیزات طبقه ۱" },
      { label: "طبقه ۲", details: "جزئیات تجهیزات طبقه ۲" },
      { label: "طبقه ۳", details: "جزئیات تجهیزات طبقه ۳" },
      { label: "طبقه ۴", details: "جزئیات تجهیزات طبقه ۴" },
    ],
  },
};

export default function Infographic() {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "fa";
  const t = content[lang];
  const [activeFloor, setActiveFloor] = useState<number | null>(null);

  return (
    <section className="container py-5" style={isRtl ? { direction: "rtl" } : {}}>
      <h2 className={`text-center fw-bold mb-4${isRtl ? " text-end" : ""}`} style={{ fontFamily: isRtl ? 'Vazirmatn, Tahoma, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
        {t.title}
      </h2>
      <div className="row g-4 align-items-center">
        {/* Right side: GIF/timelapse and comparison (RTL: order reversed) */}
        <div className={isRtl ? "col-lg-6 order-lg-2" : "col-lg-6"}>
          <div className="mb-4">
            {/* Placeholder for GIF/timelapse */}
            <div className="bg-secondary rounded mb-2" style={{ height: 120, width: '100%', opacity: 0.3 }} />
            <div className="text-center text-muted" style={{ fontSize: 14 }}>
              {t.timelapse}
            </div>
          </div>
          {/* Comparison */}
          <div className="row g-2">
            <div className={isRtl ? "col-6 order-2" : "col-6"}>
              <div className="bg-light rounded p-3 text-center shadow-sm">
                <div className="fw-bold mb-2">{t.traditional}</div>
                <div className="bg-secondary rounded mb-2" style={{ height: 60, opacity: 0.2 }} />
                <div className="text-muted" style={{ fontSize: 13 }}>{t.traditionalDesc}</div>
              </div>
            </div>
            <div className={isRtl ? "col-6 order-1" : "col-6"}>
              <div className="bg-light rounded p-3 text-center shadow-sm border border-warning">
                <div className="fw-bold mb-2 text-warning">{t.ronac}</div>
                <div className="bg-warning rounded mb-2" style={{ height: 60, opacity: 0.2 }} />
                <div className="text-muted" style={{ fontSize: 13 }}>{t.ronacDesc}</div>
              </div>
            </div>
          </div>
        </div>
        {/* Building Diagram */}
        <div className={isRtl ? "col-lg-6 order-lg-1" : "col-lg-6"}>
          <div className="bg-light rounded shadow p-4 position-relative" style={{ minHeight: 350 }}>
            {/* Placeholder SVG for 4-floor building */}
            <svg width="100%" height="320" viewBox="0 0 200 320">
              {t.floors.map((floor, idx) => (
                <rect
                  key={floor.label}
                  x="30"
                  y={30 + idx * 70}
                  width="140"
                  height="60"
                  rx="10"
                  fill={activeFloor === idx + 1 ? "#FF7A45" : "#2E86AB"}
                  opacity={activeFloor === idx + 1 ? 0.9 : 0.7}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setActiveFloor(idx + 1)}
                  onMouseLeave={() => setActiveFloor(null)}
                  onClick={() => setActiveFloor(idx + 1)}
                />
              ))}
              {/* Floor labels */}
              {t.floors.map((floor, idx) => (
                <text
                  key={floor.label}
                  x="100"
                  y={65 + idx * 70}
                  textAnchor="middle"
                  fill="#fff"
                  fontSize="18"
                  fontFamily={isRtl ? "Vazirmatn, Tahoma, Arial, sans-serif" : "Poppins, Arial, sans-serif"}
                  pointerEvents="none"
                >
                  {floor.label}
                </text>
              ))}
            </svg>
            {/* Equipment details tooltip */}
            {activeFloor && (
              <div className="position-absolute bg-white text-dark rounded shadow p-3"
                style={isRtl
                  ? { right: '110%', top: 60 + (activeFloor - 1) * 70, minWidth: 180, zIndex: 2, textAlign: 'right', fontFamily: 'Vazirmatn, Tahoma, Arial, sans-serif' }
                  : { left: '110%', top: 60 + (activeFloor - 1) * 70, minWidth: 180, zIndex: 2 }}>
                {t.floors[activeFloor - 1]?.details}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 