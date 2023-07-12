"use client";

import Container from "@mui/material/Container";
import Header from "@/components/Header";
import About from "@/components/About";
import Hero from "@/components/Hero";

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
			</Container>
		</>
	);
}
