import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material";
import Button from "@mui/material/Button";
import TabIcon from "@mui/icons-material/Tab";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

export default function Projects() {
  const theme = useTheme();
  return (
    <Container
      id="projects"
      component={"section"}
      disableGutters
      sx={{
        paddingX: { xs: "15px", sm: "30px" },
        paddingTop: { xs: "40px", sm: "80px" },
        maxWidth: { xs: "sm2", md2: "lg2" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          paddingBottom: "20px",
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} sm2={4} data-aos="fade-up">
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
              "&:hover": {
                border: "1px solid red",
                borderColor: "primary.main",
                transition: "all 0.3s ease-in-out",
              },
              height: "350px",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                backgroundColor: alpha(theme.palette.primary.main, 0.2),
                borderRadius: "50%",
                width: "72px",
                height: "72px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TabIcon color="primary" fontSize="large" />
            </Box>
            <Typography variant="h5">My site, felipema.com.br</Typography>
            <Typography variant="body1">
              This site was built with Next.js and Material UI
            </Typography>
            <Button
              variant="contained"
              href="https://github.com/FelipMa"
              target="_blank"
            >
              View the source code
            </Button>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} sm2={4} data-aos="fade-up">
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
              "&:hover": {
                border: "1px solid red",
                borderColor: "primary.main",
                transition: "all 0.3s ease-in-out",
              },
              height: "350px",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                backgroundColor: alpha(theme.palette.primary.main, 0.2),
                borderRadius: "50%",
                width: "72px",
                height: "72px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FlightTakeoffIcon color="primary" fontSize="large" />
            </Box>
            <Typography variant="h5">
              Algorithim for drone path planning and control
            </Typography>
            <Typography variant="body1">
              This project was developed as part of my Cientific Initiation at
              UFBA, and implemented in C++ and Python, using ROS and Gazebo.
            </Typography>
            <Button
              variant="contained"
              href="https://github.com/FelipMa"
              target="_blank"
            >
              View the source code
            </Button>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
