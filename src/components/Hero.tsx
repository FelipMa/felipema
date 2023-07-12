"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Hero() {
	return (
		<Container
			disableGutters
			id="hero"
			component={"section"}
			maxWidth={false}
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				background: "url(/images/hero-bg.jpg) top center",
				backgroundSize: "cover",
				width: "100%",
				height: "100vh",
				backgroundAttachment: { xs: "scroll", lg: "fixed" },
				margin: "0px",
				paddingTop: "60px",
				paddingBottom: "60px",
				"&:before": {
					content: "''",
					position: "absolute",
					top: "0",
					bottom: "0",
					left: "0",
					right: "0",
					background: "rgba(0,0,0,0.5)",
					zIndex: 1,
				},
			}}
		>
			<Box sx={{ zIndex: "2" }}>
				<Typography component={"h1"} variant="h2">
					Felipe Ma
				</Typography>
				<Typography component={"h2"} variant="h4">
					Full Stack Developer
				</Typography>
			</Box>
		</Container>
	);
}
