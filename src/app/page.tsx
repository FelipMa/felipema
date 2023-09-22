"use client";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "@/components/Header";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
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
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 8,
          paddingX: 6,
        }}
      >
        <Header />
        <Box
          component={"main"}
          paddingY={10}
          display={"flex"}
          flexDirection={"column"}
          gap={10}
          width={{ xs: "100%", md: "70%" }}
        >
          {/*<Hero />*/}
          <About />
          <Skills />
          <Resume />
          <Projects />
        </Box>
      </Container>
    </>
  );
}
