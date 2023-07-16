import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

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

			<Grid container spacing={{ xs: 2, sm2: 4 }}>
				<Grid item xs={12} sm2={6} data-aos="fade-up">
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Javascript/Typescript</Typography>
						<Typography>90%</Typography>
					</Box>
					<LinearProgress variant="determinate" value={90} />

					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							paddingTop: "13px",
						}}
					>
						<Typography>Python</Typography>
						<Typography>60%</Typography>
					</Box>
					<LinearProgress variant="determinate" value={60} />

					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							paddingTop: "13px",
						}}
					>
						<Typography>
							ROS/ROS2 (Robot Operating System)
						</Typography>
						<Typography>50%</Typography>
					</Box>
					<LinearProgress variant="determinate" value={50} />
				</Grid>

				<Grid
					item
					xs={12}
					sm2={6}
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>
							Assembly and C for microcontrollers
						</Typography>
						<Typography>40%</Typography>
					</Box>
					<LinearProgress variant="determinate" value={40} />

					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							paddingTop: "13px",
						}}
					>
						<Typography>Java</Typography>
						<Typography>20%</Typography>
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
			<Grid container spacing={{ xs: 2, sm2: 4 }} data-aos="fade-up">
				<Grid item xs={12} sm2={6}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Git/Github</Typography>
						<Typography>95%</Typography>
					</Box>
					<LinearProgress variant="determinate" value={65} />

					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							paddingTop: "13px",
						}}
					>
						<Typography>
							AWS and other cloud computing platforms
						</Typography>
						<Typography>60%</Typography>
					</Box>
					<LinearProgress variant="determinate" value={60} />
				</Grid>

				<Grid
					item
					xs={12}
					sm2={6}
					data-aos="fade-up"
					data-aos-delay="70"
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography>Product Management</Typography>
						<Typography>55%</Typography>
					</Box>
					<LinearProgress variant="determinate" value={55} />

					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							paddingTop: "13px",
						}}
					>
						<Typography>English</Typography>
						<Typography>90%</Typography>
					</Box>
					<LinearProgress variant="determinate" value={90} />
				</Grid>
			</Grid>
		</Container>
	);
}
