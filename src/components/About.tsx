import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
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
			sx={{
				paddingX: { xs: "15px", sm: "30px" },
				paddingY: { xs: "30px", sm: "60px" },
				maxWidth: { xs: "sm2", md2: "lg2" },
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
				I study computer engineering at the Federal University of Bahia.
				I like to study anything related to technology, from web
				development to hardware interaction.
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={12} md2={4}>
					<Container
						sx={{
							position: "relative",
							objectFit: "contain",
							border: "1px solid",
							borderColor: "primary.main",
							paddingTop: "100%", // 1:1
							minWidth: "260px",
							minHeight: "260px",
						}}
					>
						<Image
							src="/images/profile-img.jpg"
							alt="Picture of the author"
							fill={true}
						/>
					</Container>
				</Grid>
				<Grid item xs={12} md2={8} sx={{ padding: "0px" }}>
					<Container disableGutters sx={{ paddingRight: "0px" }}>
						<Typography
							component="h4"
							variant="h4"
							sx={{ marginBottom: "8px" }}
						>
							Web developer &amp; low-level programming enthusiast
						</Typography>
						<Typography variant="h6" sx={{ marginBottom: "15px" }}>
							Some information about me:
						</Typography>
						<Grid container spacing={0}>
							<Grid item xs={12} sm2={5}>
								<List component={"ul"} disablePadding>
									<ListItem disablePadding>
										<ListItemIcon sx={{ minWidth: "25px" }}>
											<KeyboardArrowRightIcon color="primary" />
										</ListItemIcon>
										<ListItemText
											primary="Birthday:"
											primaryTypographyProps={{
												variant: "h6",
											}}
											secondary="21 Mar 2003"
											secondaryTypographyProps={{
												variant: "h6",
											}}
											sx={{
												display: "flex",
												alignItems: "center",
												gap: "5px",
												flexWrap: {
													xs: "wrap",
													sm: "nowrap",
												},
											}}
										/>
									</ListItem>
									<ListItem disablePadding>
										<ListItemIcon sx={{ minWidth: "25px" }}>
											<KeyboardArrowRightIcon color="primary" />
										</ListItemIcon>
										<ListItemText
											primary="Age:"
											primaryTypographyProps={{
												variant: "h6",
											}}
											secondary="20"
											secondaryTypographyProps={{
												variant: "h6",
											}}
											sx={{
												display: "flex",
												alignItems: "center",
												gap: "5px",
												flexWrap: {
													xs: "wrap",
													sm: "nowrap",
												},
											}}
										/>
									</ListItem>
									<ListItem disablePadding>
										<ListItemIcon sx={{ minWidth: "25px" }}>
											<KeyboardArrowRightIcon color="primary" />
										</ListItemIcon>
										<ListItemText
											primary="City:"
											primaryTypographyProps={{
												variant: "h6",
											}}
											secondary="Salvador, BA, Brazil"
											secondaryTypographyProps={{
												variant: "h6",
											}}
											sx={{
												display: "flex",
												alignItems: "center",
												gap: "5px",
												flexWrap: {
													xs: "wrap",
													sm: "nowrap",
												},
											}}
										/>
									</ListItem>
								</List>
							</Grid>
							<Grid item xs={12} sm2={7}>
								<List component={"ul"} disablePadding>
									<ListItem disablePadding>
										<ListItemIcon sx={{ minWidth: "25px" }}>
											<KeyboardArrowRightIcon color="primary" />
										</ListItemIcon>
										<ListItemText
											primary="Degree:"
											primaryTypographyProps={{
												variant: "h6",
											}}
											secondary="(Almost) Computer Engineer"
											secondaryTypographyProps={{
												variant: "h6",
											}}
											sx={{
												display: "flex",
												alignItems: "center",
												gap: "5px",
												flexWrap: {
													xs: "wrap",
													sm: "nowrap",
												},
											}}
										/>
									</ListItem>
									<ListItem disablePadding>
										<ListItemIcon sx={{ minWidth: "25px" }}>
											<KeyboardArrowRightIcon color="primary" />
										</ListItemIcon>
										<ListItemText
											primary="Email:"
											primaryTypographyProps={{
												variant: "h6",
											}}
											secondary="felipeapenburg@gmail.com"
											secondaryTypographyProps={{
												variant: "h6",
											}}
											sx={{
												display: "flex",
												alignItems: "center",
												gap: "5px",
												flexWrap: {
													xs: "wrap",
													sm: "nowrap",
												},
											}}
										/>
									</ListItem>
									<ListItem disablePadding>
										<ListItemIcon sx={{ minWidth: "25px" }}>
											<KeyboardArrowRightIcon color="primary" />
										</ListItemIcon>
										<ListItemText
											primary="Website:"
											primaryTypographyProps={{
												variant: "h6",
											}}
											secondary="felipema.com.br"
											secondaryTypographyProps={{
												variant: "h6",
											}}
											sx={{
												display: "flex",
												alignItems: "center",
												gap: "5px",
												flexWrap: {
													xs: "wrap",
													sm: "nowrap",
												},
											}}
										/>
									</ListItem>
								</List>
							</Grid>
						</Grid>
						<Typography
							component="p"
							variant="body1"
							sx={{
								paddingTop: "16px",
							}}
						>
							I'm currently focusing on web development and a bit
							of robotics, but I'm always open to new
							opportunities. I have made some projects for
							university and personal projects, you can check them
							out on the projects section. I'm also very
							interested in low-level programming.
						</Typography>
					</Container>
				</Grid>
			</Grid>
		</Container>
	);
}
