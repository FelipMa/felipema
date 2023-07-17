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
import WebIcon from "@mui/icons-material/Web";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";

export default function Header() {
	const theme = useTheme();

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
				disableGutters
				sx={{
					position: "fixed",
					top: "0px",
					left: { xs: headerPos, lg: "0px" },
					bottom: "0px",
					width: "300px",
					bgcolor: "secondary.main",
					transition: "all 0.5s",
					display: "flex",
					flexDirection: "column",
					justifyContent: "start",
					alignItems: "center",
					zIndex: "100",
					paddingLeft: "15px",
					paddingRight: "15px",
					color: "primary.main",
				}}
				component={"header"}
			>
				<Avatar
					alt="Felipe Ma"
					src="/images/felipe-ma-profile-img.jpg"
					sx={{ width: 100, height: 100, m: 2 }}
				>
					F
				</Avatar>
				<Typography variant="h4">Felipe Ma</Typography>
				<Stack direction="row" spacing={2} sx={{ pt: 2 }}>
					<IconButton
						href="https://www.instagram.com/felipema_/"
						target="_blank"
						color="primary"
						sx={{
							backgroundColor: alpha(
								theme.palette.primary.main,
								0.1
							),
							borderRadius: "50%",
							width: "42px",
							height: "42px",
							"&:hover": {
								backgroundColor: alpha(
									theme.palette.primary.main,
									0.3
								),
							},
						}}
					>
						<InstagramIcon fontSize="large" />
					</IconButton>
					<IconButton
						href="https://www.linkedin.com/"
						target="_blank"
						color="primary"
						sx={{
							backgroundColor: alpha(
								theme.palette.primary.main,
								0.1
							),
							borderRadius: "50%",
							width: "42px",
							height: "42px",
							"&:hover": {
								backgroundColor: alpha(
									theme.palette.primary.main,
									0.3
								),
							},
						}}
					>
						<LinkedInIcon fontSize="large" />
					</IconButton>
					<IconButton
						href="https://github.com/FelipMa"
						target="_blank"
						color="primary"
						sx={{
							backgroundColor: alpha(
								theme.palette.primary.main,
								0.1
							),
							borderRadius: "50%",
							width: "42px",
							height: "42px",
							"&:hover": {
								backgroundColor: alpha(
									theme.palette.primary.main,
									0.3
								),
							},
						}}
					>
						<GitHubIcon fontSize="large" />
					</IconButton>
				</Stack>
				<List
					sx={{
						width: "100%",
						pt: 4,
						display: "flex",
						flexDirection: "column",
						gap: "10px",
					}}
					component={"nav"}
				>
					<ListItem disablePadding>
						<ListItemButton href="#">
							<ListItemIcon
								sx={{
									color: "primary.main",
									minWidth: "40px",
									ml: 8,
								}}
							>
								<HomeIcon fontSize="large" />
							</ListItemIcon>
							<ListItemText
								primary="Home"
								primaryTypographyProps={{ variant: "h6" }}
							/>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton href="#about">
							<ListItemIcon
								sx={{
									color: "primary.main",
									minWidth: "40px",
									ml: 8,
								}}
							>
								<PersonIcon fontSize="large" />
							</ListItemIcon>
							<ListItemText
								primary="About"
								primaryTypographyProps={{ variant: "h6" }}
							/>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton href="#projects">
							<ListItemIcon
								sx={{
									color: "primary.main",
									minWidth: "40px",
									ml: 8,
								}}
							>
								<WebIcon fontSize="large" />
							</ListItemIcon>
							<ListItemText
								primary="Projects"
								primaryTypographyProps={{ variant: "h6" }}
							/>
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton href="#contact">
							<ListItemIcon
								sx={{
									color: "primary.main",
									minWidth: "40px",
									ml: 8,
								}}
							>
								<EmailIcon fontSize="large" />
							</ListItemIcon>
							<ListItemText
								primary="Contact"
								primaryTypographyProps={{ variant: "h6" }}
							/>
						</ListItemButton>
					</ListItem>
				</List>
				<Box
					sx={{
						flexGrow: "1",
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-end",
					}}
				>
					<Typography sx={{ textAlign: "center", pb: 2 }}>
						&copy; Copyright <b>Felipe Ma</b> - 2023
					</Typography>
				</Box>
			</Container>

			<Fab
				onClick={handleHeader}
				size="small"
				sx={{
					bgcolor: "primary.main",
					position: "fixed",
					top: "15px",
					right: { xs: "15px", lg: "-100px" },
					transition: "all 0.5s",
					zIndex: "100",
				}}
			>
				{menuIcon}
			</Fab>
		</>
	);
}
