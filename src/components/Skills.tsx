import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function Skills() {
	return (
		<Container
			id="skills"
			component={"section"}
			disableGutters
			sx={{
				paddingX: "30px",
				paddingBottom: "60px",
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
				Skills
			</Typography>
			<Typography component={"p"} sx={{ marginBottom: "30px" }}>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur
				ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
				quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
				Quia fugiat sit in iste officiis commodi quidem hic quas.
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Typography>Progress</Typography>

					<Typography>Progress</Typography>

					<Typography>Progress</Typography>
				</Grid>

				<Grid item xs={6}>
					<Typography>Progress</Typography>

					<Typography>Progress</Typography>

					<Typography>Progress</Typography>
				</Grid>
			</Grid>
		</Container>
	);
}
