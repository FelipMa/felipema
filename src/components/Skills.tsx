import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const skills = [
  {
    name: "Programming Languages",
    content: [
      "Javascript",
      "Typescript",
      "SQL",
      "Python",
      "C",
      "C++",
      "Assembly",
    ],
  },

  {
    name: "Libraries & Frameworks",
    content: ["Express.js", "React", "Next.js", "Material UI", "ROS", "ROS 2"],
  },

  {
    name: "Tools & Platforms",
    content: ["Git", "Github", "Vercel", "AWS", "Notion", "Figma"],
  },
];

export default function Skills() {
  return (
    <Box id="skills" component={"section"}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
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

      {skills.map((skill) => (
        <>
          <Typography variant="h6" sx={{ paddingY: 2 }} data-aos="fade-up">
            {skill.name}
          </Typography>

          <Grid container spacing={{ xs: 1 }}>
            {skill.content.map((item) => (
              <Grid
                item
                xs={6}
                sm={3}
                data-aos="fade-up"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  paddingBottom: 1,
                }}
                key={item}
              >
                <KeyboardArrowRightIcon color="primary" />

                <Typography component="span" variant="body1">
                  {item}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </>
      ))}
    </Box>
  );
}
