"use client";

import Image from "next/image";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Grid";

export default function About() {
	return (
		<Container
			id="about"
			component={"section"}
			disableGutters
			maxWidth={false}
			sx={{
				paddingX: "50px",
				paddingY: "80px",
			}}
		>
			<Typography
				variant="h4"
				sx={{
					fontWeight: "bold",
					marginBottom: "20px",
					"&:after": {
						content: "''",
						display: "block",
						width: "50px",
						height: "3px",
						backgroundColor: "primary.main",
						marginTop: "10px",
					},
				}}
			>
				About
			</Typography>
			<Typography component={"p"} sx={{ marginBottom: "30px" }}>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur
				ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
				quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
				Quia fugiat sit in iste officiis commodi quidem hic quas.
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Box
						sx={{
							position: "relative",
							objectFit: "contain",
							border: "1px solid red",
						}}
					>
						<Image
							src="/images/profile-img.jpg"
							alt="Picture of the author"
							fill={true}
						/>
					</Box>
				</Grid>
				<Grid item xs={8} sx={{ padding: "0px" }}>
					<Container disableGutters sx={{ paddingRight: "0px" }}>
						<Typography
							component="h4"
							variant="h4"
							sx={{ marginBottom: "8px" }}
						>
							Web Developer &amp;
						</Typography>
						<Typography
							component="p"
							variant="body1"
							sx={{ fontStyle: "italic", marginBottom: "16px" }}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<List
								component={"ul"}
								disablePadding
								sx={{ minWidth: "300px" }}
							>
								<ListItem disablePadding>
									<ListItemIcon sx={{ minWidth: "25px" }}>
										<KeyboardArrowRightIcon />
									</ListItemIcon>
									<ListItemText
										primary="Home"
										primaryTypographyProps={{
											variant: "h6",
										}}
									/>
								</ListItem>
								<ListItem disablePadding>
									<ListItemIcon sx={{ minWidth: "25px" }}>
										<KeyboardArrowRightIcon />
									</ListItemIcon>
									<ListItemText
										primary="About"
										primaryTypographyProps={{
											variant: "h6",
										}}
									/>
								</ListItem>
								<ListItem disablePadding>
									<ListItemIcon sx={{ minWidth: "25px" }}>
										<KeyboardArrowRightIcon />
									</ListItemIcon>
									<ListItemText
										primary="Projects"
										primaryTypographyProps={{
											variant: "h6",
										}}
									/>
								</ListItem>
								<ListItem disablePadding>
									<ListItemIcon sx={{ minWidth: "25px" }}>
										<KeyboardArrowRightIcon />
									</ListItemIcon>
									<ListItemText
										primary="Contact"
										primaryTypographyProps={{
											variant: "h6",
										}}
									/>
								</ListItem>
							</List>

							<List
								component={"ul"}
								disablePadding
								sx={{ minWidth: "300px" }}
							>
								<ListItem disablePadding>
									<ListItemIcon sx={{ minWidth: "25px" }}>
										<KeyboardArrowRightIcon />
									</ListItemIcon>
									<ListItemText
										primary="Home"
										primaryTypographyProps={{
											variant: "h6",
										}}
									/>
								</ListItem>
								<ListItem disablePadding>
									<ListItemIcon sx={{ minWidth: "25px" }}>
										<KeyboardArrowRightIcon />
									</ListItemIcon>
									<ListItemText
										primary="About"
										primaryTypographyProps={{
											variant: "h6",
										}}
									/>
								</ListItem>
								<ListItem disablePadding>
									<ListItemIcon sx={{ minWidth: "25px" }}>
										<KeyboardArrowRightIcon />
									</ListItemIcon>
									<ListItemText
										primary="Projects"
										primaryTypographyProps={{
											variant: "h6",
										}}
									/>
								</ListItem>
								<ListItem disablePadding>
									<ListItemIcon sx={{ minWidth: "25px" }}>
										<KeyboardArrowRightIcon />
									</ListItemIcon>
									<ListItemText
										primary="Contact"
										primaryTypographyProps={{
											variant: "h6",
										}}
									/>
								</ListItem>
							</List>
						</Box>
						<Typography
							component="p"
							variant="body1"
							sx={{
								paddingTop: "16px",
							}}
						>
							Officiis eligendi itaque labore et dolorum mollitia
							officiis optio vero. Quisquam sunt adipisci omnis et
							ut. Nulla accusantium dolor incidunt officia
							tempore. Et eius omnis. Cupiditate ut dicta maxime
							officiis quidem quia. Sed et consectetur qui quia
							repellendus itaque neque. Aliquid amet quidem ut
							quaerat cupiditate. Ab et eum qui repellendus omnis
							culpa magni laudantium dolores.
						</Typography>
					</Container>
				</Grid>
			</Grid>
		</Container>
	);
}
