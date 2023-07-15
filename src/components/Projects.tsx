import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material";

export default function Projects() {
	const theme = useTheme();
	return (
		<Container
			id="Projects"
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
				Projects
			</Typography>
			<Typography component={"p"} sx={{ marginBottom: "30px" }}>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur
				ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
				quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
				Quia fugiat sit in iste officiis commodi quidem hic quas.
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Container
						component={"a"}
						href="#Projects"
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							border: "1px solid",
							borderColor: "#fff",
							boxShadow: "0px 10px 29px 0px rgba(68,88,144,0.1)",
							padding: "30px",
							textDecoration: "none",
							color: "text.primary",
							"&:hover": {
								border: "1px solid red",
								borderColor: "primary.main",
								transition: "all 0.3s ease-in-out",
							},
						}}
					>
						<Box
							sx={{
								backgroundColor: alpha(
									theme.palette.primary.main,
									0.2
								),
								borderRadius: "50%",
								width: "72px",
								height: "72px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<PrecisionManufacturingIcon
								color="primary"
								fontSize="large"
							/>
						</Box>
						<Typography variant="h5" sx={{ paddingY: "9px" }}>
							Project
						</Typography>
						<Typography variant="body1">
							Voluptatum deleniti atque corrupti quos dolores et
							quas molestias excepturi sint occaecati cupiditate
							non provident
						</Typography>
					</Container>
				</Grid>
				<Grid item xs={4}>
					<Container
						component={"a"}
						href="#Projects"
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							border: "1px solid",
							borderColor: "#fff",
							boxShadow: "0px 10px 29px 0px rgba(68,88,144,0.1)",
							padding: "30px",
							textDecoration: "none",
							color: "text.primary",
							"&:hover": {
								border: "1px solid red",
								borderColor: "primary.main",
								transition: "all 0.3s ease-in-out",
							},
						}}
					>
						<Box
							sx={{
								backgroundColor: alpha(
									theme.palette.primary.main,
									0.2
								),
								borderRadius: "50%",
								width: "72px",
								height: "72px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<PrecisionManufacturingIcon
								color="primary"
								fontSize="large"
							/>
						</Box>
						<Typography variant="h5" sx={{ paddingY: "9px" }}>
							Project
						</Typography>
						<Typography variant="body1">
							Voluptatum deleniti atque corrupti quos dolores et
							quas molestias excepturi sint occaecati cupiditate
							non provident
						</Typography>
					</Container>
				</Grid>
				<Grid item xs={4}>
					<Container
						component={"a"}
						href="#Projects"
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							border: "1px solid",
							borderColor: "#fff",
							boxShadow: "0px 10px 29px 0px rgba(68,88,144,0.1)",
							padding: "30px",
							textDecoration: "none",
							color: "text.primary",
							"&:hover": {
								border: "1px solid red",
								borderColor: "primary.main",
								transition: "all 0.3s ease-in-out",
							},
						}}
					>
						<Box
							sx={{
								backgroundColor: alpha(
									theme.palette.primary.main,
									0.2
								),
								borderRadius: "50%",
								width: "72px",
								height: "72px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<PrecisionManufacturingIcon
								color="primary"
								fontSize="large"
							/>
						</Box>
						<Typography variant="h5" sx={{ paddingY: "9px" }}>
							Project
						</Typography>
						<Typography variant="body1">
							Voluptatum deleniti atque corrupti quos dolores et
							quas molestias excepturi sint occaecati cupiditate
							non provident
						</Typography>
					</Container>
				</Grid>
				<Grid item xs={4}>
					<Container
						component={"a"}
						href="#Projects"
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							border: "1px solid",
							borderColor: "#fff",
							boxShadow: "0px 10px 29px 0px rgba(68,88,144,0.1)",
							padding: "30px",
							textDecoration: "none",
							color: "text.primary",
							"&:hover": {
								border: "1px solid red",
								borderColor: "primary.main",
								transition: "all 0.3s ease-in-out",
							},
						}}
					>
						<Box
							sx={{
								backgroundColor: alpha(
									theme.palette.primary.main,
									0.2
								),
								borderRadius: "50%",
								width: "72px",
								height: "72px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<PrecisionManufacturingIcon
								color="primary"
								fontSize="large"
							/>
						</Box>
						<Typography variant="h5" sx={{ paddingY: "9px" }}>
							Project
						</Typography>
						<Typography variant="body1">
							Voluptatum deleniti atque corrupti quos dolores et
							quas molestias excepturi sint occaecati cupiditate
							non provident
						</Typography>
					</Container>
				</Grid>
				<Grid item xs={4}>
					<Container
						component={"a"}
						href="#Projects"
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							border: "1px solid",
							borderColor: "#fff",
							boxShadow: "0px 10px 29px 0px rgba(68,88,144,0.1)",
							padding: "30px",
							textDecoration: "none",
							color: "text.primary",
							"&:hover": {
								border: "1px solid red",
								borderColor: "primary.main",
								transition: "all 0.3s ease-in-out",
							},
						}}
					>
						<Box
							sx={{
								backgroundColor: alpha(
									theme.palette.primary.main,
									0.2
								),
								borderRadius: "50%",
								width: "72px",
								height: "72px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<PrecisionManufacturingIcon
								color="primary"
								fontSize="large"
							/>
						</Box>
						<Typography variant="h5" sx={{ paddingY: "9px" }}>
							Project
						</Typography>
						<Typography variant="body1">
							Voluptatum deleniti atque corrupti quos dolores et
							quas molestias excepturi sint occaecati cupiditate
							non provident
						</Typography>
					</Container>
				</Grid>
				<Grid item xs={4}>
					<Container
						component={"a"}
						href="#Projects"
						sx={{
							textAlign: "center",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							border: "1px solid",
							borderColor: "#fff",
							boxShadow: "0px 10px 29px 0px rgba(68,88,144,0.1)",
							padding: "30px",
							textDecoration: "none",
							color: "text.primary",
							"&:hover": {
								border: "1px solid red",
								borderColor: "primary.main",
								transition: "all 0.3s ease-in-out",
							},
						}}
					>
						<Box
							sx={{
								backgroundColor: alpha(
									theme.palette.primary.main,
									0.2
								),
								borderRadius: "50%",
								width: "72px",
								height: "72px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<PrecisionManufacturingIcon
								color="primary"
								fontSize="large"
							/>
						</Box>
						<Typography variant="h5" sx={{ paddingY: "9px" }}>
							Project
						</Typography>
						<Typography variant="body1">
							Voluptatum deleniti atque corrupti quos dolores et
							quas molestias excepturi sint occaecati cupiditate
							non provident
						</Typography>
					</Container>
				</Grid>
			</Grid>
		</Container>
	);
}
