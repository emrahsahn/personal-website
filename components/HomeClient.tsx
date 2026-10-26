"use client";

import React from "react";
import { useViewMode } from "@/context/ViewModeContext";
import IOSExperience from "@/components/ios/IOSExperience";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function HomeClient() {
  const { mode } = useViewMode();

  if (mode === "ios") {
    return <IOSExperience />;
  }

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
