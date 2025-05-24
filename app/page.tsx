"use client";
import { useContext } from "react";
import { LangContext } from "../components/LangProvider";
import Hero from "../components/Hero";
import Infographic from "../components/Infographic";
import KeyServices from "../components/KeyServices";
import ProjectGallery from "../components/ProjectGallery";
import ConsultationForm from "../components/ConsultationForm";
import Footer from "../components/Footer";
import InfographicSteps from "../components/InfographicSteps";

const content = {
  en: {
    title: "Welcome to the Next.js Template",
    desc: "This is a plain starter project with Bootstrap navigation."
  },
  fa: {
    title: "به قالب نکست‌جی‌اس خوش آمدید",
    desc: "این یک پروژه شروع ساده با ناوبری بوت‌استرپ است."
  }
};

export default function HomePage() {
  const { lang } = useContext(LangContext);
  const isRtl = lang === "fa";
  return (
    <>
      <Hero />
      <InfographicSteps />
      <Infographic />
      <KeyServices />
      <ProjectGallery />
      <ConsultationForm />
      <Footer />
    </>
  );
}
