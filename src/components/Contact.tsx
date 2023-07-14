import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ShareIcon from "@mui/icons-material/Share";
import { alpha } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export default function Contact() {
	const theme = useTheme();
	const handleSubmit = (event: any) => {
		console.log("foi");
		console.log(event);
	};
	return (
		<Container
			id="contact"
			component={"section"}
			disableGutters
			maxWidth={"lg2"}
			sx={{
				paddingX: "30px",
				paddingBottom: "60px",
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
				Contact
			</Typography>
			<Typography component={"p"} sx={{ marginBottom: "30px" }}>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur
				ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
				quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
				Quia fugiat sit in iste officiis commodi quidem hic quas.
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Container
								sx={{
									textAlign: "center",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
									border: "1px solid",
									borderColor: "#fff",
									boxShadow:
										"0px 10px 29px 0px rgba(68,88,144,0.1)",
									padding: "30px",
									textDecoration: "none",
									color: "text.primary",
								}}
							>
								<Box
									sx={{
										backgroundColor: alpha(
											theme.palette.primary.main,
											0.2
										),
										borderRadius: "50%",
										width: "54px",
										height: "54px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<ShareIcon
										color="primary"
										fontSize="medium"
									/>
								</Box>
								<Typography
									variant="h5"
									sx={{ paddingY: "9px" }}
								>
									Social Profiles
								</Typography>
								<Stack direction="row" spacing={2}>
									<IconButton
										href="https://www.instagram.com/felipema_/"
										target="_blank"
										color="primary"
									>
										<InstagramIcon fontSize="large" />
									</IconButton>
									<IconButton
										href="https://www.linkedin.com/"
										target="_blank"
										color="primary"
									>
										<LinkedInIcon fontSize="large" />
									</IconButton>
									<IconButton
										href="https://github.com/FelipMa"
										target="_blank"
										color="primary"
									>
										<GitHubIcon fontSize="large" />
									</IconButton>
								</Stack>
							</Container>
						</Grid>
						<Grid item xs={6}>
							<Container
								sx={{
									textAlign: "center",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
									border: "1px solid",
									borderColor: "#fff",
									boxShadow:
										"0px 10px 29px 0px rgba(68,88,144,0.1)",
									padding: "30px",
									textDecoration: "none",
									color: "text.primary",
								}}
							>
								<Box
									sx={{
										backgroundColor: alpha(
											theme.palette.primary.main,
											0.2
										),
										borderRadius: "50%",
										width: "54px",
										height: "54px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<EmailIcon
										color="primary"
										fontSize="medium"
									/>
								</Box>
								<Typography
									variant="h5"
									sx={{ paddingY: "9px" }}
								>
									Email Me
								</Typography>
								<Typography variant="body1">
									felipeapenburg@gmail.com
								</Typography>
							</Container>
						</Grid>
						<Grid item xs={6}>
							<Container
								sx={{
									textAlign: "center",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
									border: "1px solid",
									borderColor: "#fff",
									boxShadow:
										"0px 10px 29px 0px rgba(68,88,144,0.1)",
									padding: "30px",
									textDecoration: "none",
									color: "text.primary",
								}}
							>
								<Box
									sx={{
										backgroundColor: alpha(
											theme.palette.primary.main,
											0.2
										),
										borderRadius: "50%",
										width: "54px",
										height: "54px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<WhatsAppIcon
										color="primary"
										fontSize="medium"
									/>
								</Box>
								<Typography
									variant="h5"
									sx={{ paddingY: "9px" }}
								>
									Chama no zap
								</Typography>
								<Typography variant="body1">
									71 99205-9517
								</Typography>
							</Container>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Container
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							border: "1px solid",
							borderColor: "#fff",
							boxShadow: "0px 10px 29px 0px rgba(68,88,144,0.1)",
							padding: "30px",
							textDecoration: "none",
							color: "text.primary",
							height: "100%",
						}}
					>
						<FormControl
							component={"form"}
							onSubmit={handleSubmit}
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
								height: "100%",
								gap: "20px",
							}}
						>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField
										id="name"
										label="Name"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										id="email"
										label="Email"
										variant="outlined"
									/>
								</Grid>
							</Grid>
							<TextField
								id="subject"
								label="Subject"
								variant="outlined"
							/>
							<TextField
								id="message"
								label="Message"
								variant="outlined"
								multiline
								rows={6}
							/>
							<button type="submit">Send Message</button>
						</FormControl>
					</Container>
				</Grid>
			</Grid>
		</Container>
	);
}
