"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

export default function Header() {
	const [headerPos, setHeaderPos] = React.useState<string>("-300px");
	const [menuIcon, setMenuIcon] = React.useState<React.ReactNode>(
		<MenuIcon />
	);

	const handleHeader = () => {
		if (headerPos === "-300px") {
			setHeaderPos("0px");
			setMenuIcon(<CloseIcon />);
		} else {
			setHeaderPos("-300px");
			setMenuIcon(<MenuIcon />);
		}
	};

	return (
		<>
			<Container
				sx={{
					width: "300px",
					height: "100vh",
					position: "fixed",
					top: "0px",
					left: { xs: headerPos, lg: "0px" },
					bgcolor: "primary.main",
					transition: "all 0.5s",
					display: "flex",
					flexDirection: "column",
					justifyContent: "start",
					alignItems: "center",
				}}
				component={"header"}
			>
				<Avatar
					alt="Felipe Ma"
					src="/images/felipema.webp"
					sx={{ width: 120, height: 120 }}
				>
					F
				</Avatar>
				<Stack direction="row" spacing={2}>
					<IconButton
						href="https://www.instagram.com/felipema_/"
						target="_blank"
					>
						<InstagramIcon />
					</IconButton>
					<IconButton
						href="https://www.linkedin.com/"
						target="_blank"
					>
						<LinkedInIcon />
					</IconButton>
					<IconButton
						href="https://github.com/FelipMa"
						target="_blank"
					>
						<GitHubIcon />
					</IconButton>
				</Stack>
				<Stack
					direction="column"
					spacing={2}
					sx={{
						display: "flex",
						border: "1px solid red",
						alignSelf: "start",
					}}
				>
					<IconButton href="/">
						<HomeIcon />
					</IconButton>
					<IconButton href="#about">
						<PersonIcon />
					</IconButton>
				</Stack>
			</Container>

			<Fab
				onClick={handleHeader}
				sx={{
					bgcolor: "primary.main",
					position: "fixed",
					top: "15px",
					right: { xs: "15px", lg: "-100px" },
					transition: "all 0.5s",
				}}
			>
				{menuIcon}
			</Fab>
		</>
	);
}
