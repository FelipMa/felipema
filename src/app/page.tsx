import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: { xs: 7, lg: 15 },
          paddingX: { xs: 3, sm: 6 },
        }}
      >
        <Header />
        <Box
          component={"main"}
          paddingTop={{ xs: 0, md: 10 }}
          paddingBottom={10}
          display={"flex"}
          flexDirection={"column"}
          gap={7}
          width={{ xs: "100%", md: "70%" }}
        >
          <About />
          <Skills />
          <Resume />
          <Projects />
        </Box>
      </Container>
    </>
  );
}
