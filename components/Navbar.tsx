"use client";
import Link from "next/link";
import { useEffect, useContext } from "react";
import AuthButtons from "./AuthButtons";
import { LangContext } from "./LangProvider";

const navLabels = {
  en: {
    home: "Home",
    about: "About",
    contact: "Contact",
    brand: "Ronac Electronics"
  },
  fa: {
    home: "خانه",
    about: "درباره ما",
    contact: "تماس",
    brand: "روناک الکترونیک"
  }
};

export default function Navbar() {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const { lang, setLang } = useContext(LangContext);
  const labels = navLabels[lang as 'en' | 'fa'];
  const isRtl = lang === "fa";

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-2${isRtl ? ' flex-row-reverse' : ''}`}
      style={isRtl ? { direction: 'rtl' } : {}}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white me-4" href="/" style={{letterSpacing: '1px', fontSize: '1.3rem'}}>{labels.brand}</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav ${isRtl ? 'ms-auto' : 'me-auto'} mb-2 mb-lg-0 gap-lg-2`}>
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" href="/">{labels.home}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" href="/about">{labels.about}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white-50" href="/contact">{labels.contact}</Link>
            </li>
          </ul>
          <div className={`d-flex align-items-center gap-2 ${isRtl ? 'me-lg-auto' : 'ms-lg-auto'}`}>
            <AuthButtons />
            {/* Language Switcher */}
            <div className="d-flex align-items-center ms-2">
              <button
                className={`btn btn-sm ${lang === 'en' ? 'btn-light' : 'btn-outline-light'} me-1`}
                onClick={() => setLang('en')}
                aria-label="Switch to English"
              >
                English
              </button>
              <button
                className={`btn btn-sm ${lang === 'fa' ? 'btn-light' : 'btn-outline-light'}`}
                onClick={() => setLang('fa')}
                aria-label="Switch to Persian"
              >
                فارسی
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
