"use client";
import React from "react";

const steps = [
  {
    title: "انتخاب محل مناسب و دریافت مجوزها",
    desc: "یافتن مکان مناسب برای قنادی و دریافت مجوزهای لازم از سازمان‌های مربوطه اولین گام است.",
    icon: null, // جای آیکون یا تصویر
  },
  {
    title: "طراحی چیدمان و انتخاب تجهیزات",
    desc: "چیدمان بهینه و انتخاب تجهیزات مدرن و استاندارد نقش مهمی در موفقیت قنادی دارد.",
    icon: null,
  },
  {
    title: "رعایت اصول بهداشتی و ایمنی",
    desc: "رعایت کامل اصول بهداشتی و ایمنی در تمامی مراحل تولید و فروش الزامی است.",
    icon: null,
  },
  {
    title: "استخدام نیروی متخصص",
    desc: "نیروی انسانی ماهر و آموزش‌دیده کیفیت محصولات و رضایت مشتریان را تضمین می‌کند.",
    icon: null,
  },
  {
    title: "راه‌اندازی فروشگاه و تبلیغات",
    desc: "راه‌اندازی فروشگاه و استفاده از تبلیغات مؤثر برای جذب مشتریان بیشتر اهمیت دارد.",
    icon: null,
  },
];

export default function InfographicSteps() {
  return (
    <section className="container py-5" style={{ direction: "rtl" }}>
      <h2 className="fw-bold text-center mb-5" style={{ color: '#FF7A45', fontFamily: 'Vazirmatn, Tahoma, Arial, sans-serif' }}>
        مراحل راه‌اندازی قنادی
      </h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="position-relative" style={{ paddingRight: 32 }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 24,
              width: 5,
              height: '100%',
              background: 'linear-gradient(180deg, #43B97F 0%, #2E86AB 100%)',
              borderRadius: 3,
              zIndex: 0,
              boxShadow: '0 0 8px #43B97F55'
            }} />
            {steps.map((step, idx) => (
              <div key={idx} className="d-flex align-items-start mb-5 position-relative" style={{ zIndex: 1 }}>
                {/* Step number circle */}
                <div style={{
                  minWidth: 48,
                  minHeight: 48,
                  background: '#43B97F',
                  color: '#fff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  fontWeight: 700,
                  boxShadow: '0 4px 16px #43B97F55',
                  marginLeft: 16,
                  marginRight: 0,
                  fontFamily: 'Vazirmatn, Tahoma, Arial, sans-serif',
                }}>
                  {idx + 1}
                </div>
                <div className="flex-grow-1 bg-white rounded shadow-sm p-4 ms-3" style={{ borderRight: '5px solid #2E86AB', fontFamily: 'Vazirmatn, Tahoma, Arial, sans-serif' }}>
                  <div className="d-flex align-items-center mb-2">
                    {/* Icon/image placeholder */}
                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center me-2" style={{ width: 40, height: 40, fontSize: 18, color: '#FF7A45', border: '1.5px dashed #FF7A45' }}>
                      {/* اگر آیکون واقعی ندارید */}
                      <span style={{ fontSize: 12 }}>آیکون</span>
                    </div>
                    <h5 className="fw-bold mb-0" style={{ color: '#2E86AB' }}>{step.title}</h5>
                  </div>
                  <div className="text-secondary" style={{ fontSize: 15, lineHeight: 2 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 