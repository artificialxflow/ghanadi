"use client";
import React, { useContext, useState } from "react";
import { LangContext } from "./LangProvider";

const content = {
  en: {
    title: "Consultation Form",
    name: "Name",
    contact: "Contact Number",
    area: "Proposed Area (m²)",
    budget: "Budget (Million Tomans)",
    submit: "Submit",
    nameRequired: "Name is required.",
    contactInvalid: "Enter a valid number (10-15 digits).",
    areaUnit: "m²",
    budgetUnit: "M",
    submitted: "Form submitted! (Demo)",
    minBudget: 500,
    maxBudget: 5000,
  },
  fa: {
    title: "فرم مشاوره",
    name: "نام و نام خانوادگی",
    contact: "شماره تماس",
    area: "متراژ پیشنهادی (متر مربع)",
    budget: "بودجه (میلیون تومان)",
    submit: "ارسال فرم",
    nameRequired: "وارد کردن نام الزامی است.",
    contactInvalid: "شماره تماس معتبر وارد کنید (۱۰ تا ۱۵ رقم).",
    areaUnit: "متر مربع",
    budgetUnit: "میلیون",
    submitted: "فرم با موفقیت ارسال شد! (نمونه)",
    minBudget: 500,
    maxBudget: 5000,
  },
};

export default function ConsultationForm() {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "fa";
  const t = content[lang];

  const [form, setForm] = useState({
    name: "",
    contact: "",
    area: 100,
    budget: t.minBudget,
  });
  const [touched, setTouched] = useState<{ [k: string]: boolean }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === "range" ? Number(value) : value,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched(t => ({ ...t, [e.target.name]: true }));
  };

  const validate = () => {
    return {
      name: !form.name,
      contact: !/^\d{10,15}$/.test(form.contact),
    };
  };
  const errors = validate();
  const isValid = !Object.values(errors).some(Boolean);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, contact: true });
    setSubmitted(true);
    if (isValid) {
      // TODO: Handle form submission (demo only)
      alert(t.submitted);
    }
  };

  return (
    <section className="container py-5" id="consult" style={isRtl ? { direction: "rtl" } : {}}>
      <h2 className={`text-center fw-bold mb-4${isRtl ? " text-end" : ""}`} style={{ fontFamily: isRtl ? 'Vazirmatn, Tahoma, Arial, sans-serif' : 'Poppins, Arial, sans-serif' }}>
        {t.title}
      </h2>
      <form className="mx-auto" style={{ maxWidth: 500, fontFamily: isRtl ? 'Vazirmatn, Tahoma, Arial, sans-serif' : undefined }} onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">{t.name}</label>
          <input
            type="text"
            className={`form-control${touched.name && errors.name ? " is-invalid" : ""}${isRtl ? " text-end" : ""}`}
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            required
          />
          <div className="invalid-feedback">{t.nameRequired}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label fw-bold">{t.contact}</label>
          <input
            type="tel"
            className={`form-control${touched.contact && errors.contact ? " is-invalid" : ""}${isRtl ? " text-end" : ""}`}
            id="contact"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            required
            pattern="\d{10,15}"
          />
          <div className="invalid-feedback">{t.contactInvalid}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="area" className="form-label fw-bold">
            {t.area}: <span className="text-primary">{form.area}</span> <span className="small">{t.areaUnit}</span>
          </label>
          <input
            type="range"
            className="form-range"
            id="area"
            name="area"
            min={50}
            max={1000}
            step={10}
            value={form.area}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="budget" className="form-label fw-bold">
            {t.budget}: <span className="text-primary">{form.budget}</span> <span className="small">{t.budgetUnit}</span>
          </label>
          <input
            type="range"
            className="form-range"
            id="budget"
            name="budget"
            min={t.minBudget}
            max={t.maxBudget}
            step={100}
            value={form.budget}
            onChange={handleChange}
          />
          <div className="d-flex justify-content-between small text-muted">
            <span>{t.minBudget}{t.budgetUnit}</span>
            <span>{t.maxBudget}{t.budgetUnit}</span>
          </div>
        </div>
        <button type="submit" className="btn btn-warning w-100 fw-bold" style={{ backgroundColor: '#FF7A45', border: 'none' }}>
          {t.submit}
        </button>
        {submitted && isValid && (
          <div className="alert alert-success mt-3">{t.submitted}</div>
        )}
      </form>
    </section>
  );
} 