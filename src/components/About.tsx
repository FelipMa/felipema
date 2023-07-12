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

export default function About() {
	return (
		<>
			<Container id="about" component={"section"}>
				<Typography
					variant="h4"
					sx={{
						fontWeight: "bold",
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
				<Typography component={"p"}>
					Magnam dolores commodi suscipit. Necessitatibus eius
					consequatur ex aliquid fuga eum quidem. Sit sint consectetur
					velit. Quisquam quos quisquam cupiditate. Et nemo qui
					impedit suscipit alias ea. Quia fugiat sit in iste officiis
					commodi quidem hic quas.
				</Typography>

				<Box sx={{ display: "flex", flexDirection: "row" }}>
					<Box>
						<Image
							src="/images/profile-img.jpg"
							width={400}
							height={400}
							alt="Picture of the author"
						/>
					</Box>
					<Box>
						<Typography component="h4" variant="h4">
							Web Developer &amp;
						</Typography>
						<Typography
							component="p"
							variant="body1"
							sx={{ fontStyle: "italic" }}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "row" }}>
							<Box>
								<List component={"ul"}>
									<ListItem disablePadding>
										<ListItemIcon>
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
										<ListItemIcon>
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
										<ListItemIcon>
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
										<ListItemIcon>
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
							<Box>
								<List component={"ul"}>
									<ListItem disablePadding>
										<ListItemIcon>
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
										<ListItemIcon>
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
										<ListItemIcon>
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
										<ListItemIcon>
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
						</Box>
						<Typography component="p" variant="body1">
							Officiis eligendi itaque labore et dolorum mollitia
							officiis optio vero. Quisquam sunt adipisci omnis et
							ut. Nulla accusantium dolor incidunt officia
							tempore. Et eius omnis. Cupiditate ut dicta maxime
							officiis quidem quia. Sed et consectetur qui quia
							repellendus itaque neque. Aliquid amet quidem ut
							quaerat cupiditate. Ab et eum qui repellendus omnis
							culpa magni laudantium dolores.
						</Typography>
					</Box>
				</Box>
			</Container>
		</>
	);
}
