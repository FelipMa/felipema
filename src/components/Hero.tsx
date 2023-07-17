import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Marquee from "react-fast-marquee";

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
				/*background: "url(/images/hero-bg.png) top center",
				backgroundSize: "cover",*/
				backgroundColor: "secondary.main",
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
			<Container
				maxWidth="ticker"
				sx={{
					zIndex: "2",
					color: "primary.main",
				}}
			>
				<Typography variant="h2">Felipe Ma</Typography>
				<Typography variant="h4" sx={{ fontWeight: 300 }}>
					Full Stack Developer
				</Typography>
				<Marquee speed={60} direction="left">
					<Typography variant="h5">&nbsp;Student |</Typography>
					<Typography variant="h5">&nbsp;Javascript |</Typography>
					<Typography variant="h5">&nbsp;Typescript |</Typography>
					<Typography variant="h5">&nbsp;React |</Typography>
					<Typography variant="h5">&nbsp;Next.js |</Typography>
					<Typography variant="h5">&nbsp;Gamer |</Typography>
					<Typography variant="h5">&nbsp;Node.js |</Typography>
					<Typography variant="h5">&nbsp;Express |</Typography>
					<Typography variant="h5">&nbsp;SQL |</Typography>
					<Typography variant="h5">
						&nbsp;Git &amp; Github |
					</Typography>
					<Typography variant="h5">&nbsp;Robotics |</Typography>
					<Typography variant="h5">&nbsp;C &amp; C++ |</Typography>
					<Typography variant="h5">&nbsp;Python |</Typography>
					<Typography variant="h5">&nbsp;ROS &amp; ROS2 |</Typography>
				</Marquee>
			</Container>
		</Container>
	);
}
