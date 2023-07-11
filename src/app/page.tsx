"use client";

import Container from "@mui/material/Container";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
    <Header />
    <Container sx={{marginLeft: {xs: "0px", lg: "300px"}}} component={"main"}>
      <h1>NextJs + MUI aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
    </Container>
    </>
  );
}
