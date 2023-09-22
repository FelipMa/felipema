import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const programmingLanguages = [
  {
    name: "Javascript",
  },
  {
    name: "Typescript",
  },
  {
    name: "SQL",
  },
  {
    name: "Python",
  },
  {
    name: "C",
  },
  {
    name: "C++",
  },
  {
    name: "Assembly",
  },
];

export default function Skills() {
  return (
    <Box id="skills" component={"section"}>
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
        Programming Languages:
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 2 }}>
        {programmingLanguages.map((language) => (
          <Grid
            item
            xs={12}
            sm={4}
            data-aos="fade-up"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              paddingBottom: 1,
            }}
          >
            <KeyboardArrowRightIcon color="primary" />

            <Typography component="span" variant="body1">
              {language.name}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" sx={{ paddingY: "20px" }} data-aos="fade-up">
        Soft Skills:
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 2 }} data-aos="fade-up">
        <Grid item xs={12} sm={4} data-aos="fade-up">
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

        <Grid item xs={12} sm={4} data-aos="fade-up">
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

        <Grid item xs={12} sm={4} data-aos="fade-up">
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
    </Box>
  );
}
