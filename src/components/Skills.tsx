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
        Skills
      </Typography>
      <Typography
        variant="h6"
        sx={{ paddingBottom: "20px" }}
        data-aos="fade-up"
      >
        Hard Skills:
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
            <Typography>ROS/ROS2 (Robot Operating System)</Typography>
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
            <Typography>Assembly and C for microcontrollers</Typography>
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

        <Grid item xs={12} sm2={4} data-aos="fade-up">
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
          <LinearProgress variant="determinate" value={45} />
        </Grid>
      </Grid>

      <Typography variant="h6" sx={{ paddingY: "20px" }} data-aos="fade-up">
        Soft Skills:
      </Typography>
      <Grid container spacing={{ xs: 2, sm2: 2 }} data-aos="fade-up">
        <Grid item xs={12} sm2={4} data-aos="fade-up">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Product Management</Typography>
            <Typography>Experient</Typography>
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

        <Grid item xs={12} sm2={4} data-aos="fade-up">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Portuguese</Typography>
            <Typography>Fluent</Typography>
          </Box>
          <LinearProgress variant="determinate" value={100} />
        </Grid>
      </Grid>
    </Container>
  );
}
