import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";

export default function Resume() {
	return (
		<Container
			id="Resume"
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
				Resume
			</Typography>
			<Typography component={"p"} sx={{ marginBottom: "30px" }}>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur
				ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
				quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
				Quia fugiat sit in iste officiis commodi quidem hic quas.
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography
						variant="h5"
						sx={{
							fontWeight: "700",
							marginBottom: "15px",
						}}
					>
						Summary
					</Typography>
					<Container
						disableGutters
						sx={{
							paddingBottom: "20px",
							paddingLeft: "20px",
							marginTop: "-2px",
							borderLeft: "2px solid",
							borderColor: "primary.main",
							position: "relative",
							"&:before": {
								content: "''",
								position: "absolute",
								width: "16px",
								height: "16px",
								borderRadius: "50px",
								left: "-9px",
								top: "0",
								background: "#fff",
								border: "2px solid",
								borderColor: "primary.main",
							},
						}}
					>
						<Typography variant="h6">Felipe Ma</Typography>
						<Typography
							variant="body1"
							sx={{ fontStyle: "italic" }}
						>
							Innovative and deadline-driven Graphic Designer with
							3+ years of experience designing and developing
							user-centered digital/print marketing material from
							initial concept to final, polished deliverable.
						</Typography>
						<List>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
						</List>
					</Container>

					<Typography
						variant="h5"
						sx={{
							fontWeight: "700",
							marginY: "15px",
						}}
					>
						Education
					</Typography>
					<Container
						disableGutters
						sx={{
							paddingBottom: "20px",
							paddingLeft: "20px",
							marginTop: "-2px",
							borderLeft: "2px solid",
							borderColor: "primary.main",
							position: "relative",
							"&:before": {
								content: "''",
								position: "absolute",
								width: "16px",
								height: "16px",
								borderRadius: "50px",
								left: "-9px",
								top: "0",
								background: "#fff",
								border: "2px solid",
								borderColor: "primary.main",
							},
						}}
					>
						<Typography variant="h6">Felipe Ma</Typography>
						<Typography
							variant="body1"
							sx={{ fontStyle: "italic" }}
						>
							Innovative and deadline-driven Graphic Designer with
							3+ years of experience designing and developing
							user-centered digital/print marketing material from
							initial concept to final, polished deliverable.
						</Typography>
						<List>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
						</List>
					</Container>
					<Container
						disableGutters
						sx={{
							paddingBottom: "20px",
							paddingLeft: "20px",
							marginTop: "-2px",
							borderLeft: "2px solid",
							borderColor: "primary.main",
							position: "relative",
							"&:before": {
								content: "''",
								position: "absolute",
								width: "16px",
								height: "16px",
								borderRadius: "50px",
								left: "-9px",
								top: "0",
								background: "#fff",
								border: "2px solid",
								borderColor: "primary.main",
							},
						}}
					>
						<Typography variant="h6">Felipe Ma</Typography>
						<Typography
							variant="body1"
							sx={{ fontStyle: "italic" }}
						>
							Innovative and deadline-driven Graphic Designer with
							3+ years of experience designing and developing
							user-centered digital/print marketing material from
							initial concept to final, polished deliverable.
						</Typography>
						<List>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
						</List>
					</Container>
				</Grid>
				<Grid item xs={6}>
					<Typography
						variant="h5"
						sx={{
							fontWeight: "700",
							marginY: "15px",
						}}
					>
						Education
					</Typography>
					<Container
						disableGutters
						sx={{
							paddingBottom: "20px",
							paddingLeft: "20px",
							marginTop: "-2px",
							borderLeft: "2px solid",
							borderColor: "primary.main",
							position: "relative",
							"&:before": {
								content: "''",
								position: "absolute",
								width: "16px",
								height: "16px",
								borderRadius: "50px",
								left: "-9px",
								top: "0",
								background: "#fff",
								border: "2px solid",
								borderColor: "primary.main",
							},
						}}
					>
						<Typography variant="h6">Felipe Ma</Typography>
						<Typography
							variant="body1"
							sx={{ fontStyle: "italic" }}
						>
							Innovative and deadline-driven Graphic Designer with
							3+ years of experience designing and developing
							user-centered digital/print marketing material from
							initial concept to final, polished deliverable.
						</Typography>
						<List>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
						</List>
					</Container>
					<Container
						disableGutters
						sx={{
							paddingBottom: "20px",
							paddingLeft: "20px",
							marginTop: "-2px",
							borderLeft: "2px solid",
							borderColor: "primary.main",
							position: "relative",
							"&:before": {
								content: "''",
								position: "absolute",
								width: "16px",
								height: "16px",
								borderRadius: "50px",
								left: "-9px",
								top: "0",
								background: "#fff",
								border: "2px solid",
								borderColor: "primary.main",
							},
						}}
					>
						<Typography variant="h6">Felipe Ma</Typography>
						<Typography
							variant="body1"
							sx={{ fontStyle: "italic" }}
						>
							Innovative and deadline-driven Graphic Designer with
							3+ years of experience designing and developing
							user-centered digital/print marketing material from
							initial concept to final, polished deliverable.
						</Typography>
						<List>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
						</List>
					</Container>
					<Container
						disableGutters
						sx={{
							paddingBottom: "20px",
							paddingLeft: "20px",
							marginTop: "-2px",
							borderLeft: "2px solid",
							borderColor: "primary.main",
							position: "relative",
							"&:before": {
								content: "''",
								position: "absolute",
								width: "16px",
								height: "16px",
								borderRadius: "50px",
								left: "-9px",
								top: "0",
								background: "#fff",
								border: "2px solid",
								borderColor: "primary.main",
							},
						}}
					>
						<Typography variant="h6">Felipe Ma</Typography>
						<Typography
							variant="body1"
							sx={{ fontStyle: "italic" }}
						>
							Innovative and deadline-driven Graphic Designer with
							3+ years of experience designing and developing
							user-centered digital/print marketing material from
							initial concept to final, polished deliverable.
						</Typography>
						<List>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
							<ListItem disablePadding>
								<ListItemIcon
									sx={{
										minWidth: "15px",
										color: "text.primary",
									}}
								>
									<CircleIcon sx={{ fontSize: "7px" }} />
								</ListItemIcon>
								<ListItemText
									primary="Home"
									primaryTypographyProps={{
										variant: "body1",
									}}
								/>
							</ListItem>
						</List>
					</Container>
				</Grid>
			</Grid>
		</Container>
	);
}
