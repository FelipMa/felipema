"use client";

import Container from "@mui/material/Container";
import Header from "@/components/Header";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
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
