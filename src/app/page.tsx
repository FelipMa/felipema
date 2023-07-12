"use client";

import Container from "@mui/material/Container";
import Header from "@/components/Header";
import About from "@/components/About";

export default function Home() {
	return (
		<>
			<Header />
			<h1>
				Hero
				aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
			</h1>
			<Container
				sx={{ marginLeft: { xs: "0px", lg: "300px" } }}
				component={"main"}
			>
				<About />
			</Container>
		</>
	);
}
