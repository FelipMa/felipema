import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function Skills() {
	return (
		<Container
			id="skills"
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
				Skills
			</Typography>
			<Typography component={"p"} sx={{ marginBottom: "30px" }}>
				Good knowledge in web development, mainly in React/Next.js for
				front end and Node.js express for back end.
				<br />
				Also have experience with Python and ROS/ROS2 (Robot Operating
				System), by developing some projects in the university.
			</Typography>

			<Grid container spacing={{ xs: 2, sm2: 2 }}>
				<Grid item xs={12} sm2={4} data-aos="fade-up">
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Javascript/Typescript</Typography>
						<Typography>Advanced</Typography>
					</Box>
					<LinearProgress variant="determinate" value={90} />
				</Grid>

				<Grid item xs={12} sm2={4} data-aos="fade-up">
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Python</Typography>
						<Typography>Good</Typography>
					</Box>
					<LinearProgress variant="determinate" value={60} />
				</Grid>

				<Grid item xs={12} sm2={4} data-aos="fade-up">
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>
							ROS/ROS2 (Robot Operating System)
						</Typography>
						<Typography>Good</Typography>
					</Box>
					<LinearProgress variant="determinate" value={50} />
				</Grid>

				<Grid item xs={12} sm2={4} data-aos="fade-up">
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>
							Assembly and C for microcontrollers
						</Typography>
						<Typography>Avarage</Typography>
					</Box>
					<LinearProgress variant="determinate" value={40} />
				</Grid>

				<Grid item xs={12} sm2={4} data-aos="fade-up">
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Java</Typography>
						<Typography>Just a few</Typography>
					</Box>
					<LinearProgress variant="determinate" value={20} />
				</Grid>
			</Grid>

			<Typography
				component={"p"}
				sx={{ marginBottom: "30px", marginTop: "30px" }}
				data-aos="fade-up"
			>
				Some other skills I adquired during my studies and works:
			</Typography>
			<Grid container spacing={{ xs: 2, sm2: 2 }} data-aos="fade-up">
				<Grid item xs={12} sm2={4}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Git/Github</Typography>
						<Typography>Advanced</Typography>
					</Box>
					<LinearProgress variant="determinate" value={95} />
				</Grid>

				<Grid item xs={12} sm2={4} data-aos="fade-up">
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>AWS and similar</Typography>
						<Typography>Used in some projects</Typography>
					</Box>
					<LinearProgress variant="determinate" value={60} />
				</Grid>

				<Grid item xs={12} sm2={4} data-aos="fade-up">
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Product Management</Typography>
						<Typography>(A Bit) Experient</Typography>
					</Box>
					<LinearProgress variant="determinate" value={55} />
				</Grid>

				<Grid item xs={12} sm2={4} data-aos="fade-up">
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>English</Typography>
						<Typography>Very Good</Typography>
					</Box>
					<LinearProgress variant="determinate" value={90} />
				</Grid>
			</Grid>
		</Container>
	);
}
