"use client";

import Container from "@mui/material/Container";
import Header from "@/components/Header";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Container
        disableGutters
        sx={{ paddingLeft: { xs: "0px", lg: "300px" }, margin: "0px" }}
        maxWidth={false}
        component={"main"}
      >
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}
