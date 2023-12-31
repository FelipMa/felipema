"use client";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    name: "Programming Languages",
    content: ["Rust", "C", "C++", "Javascript", "Typescript", "Python", "SQL"],
  },

  {
    name: "Libraries & Frameworks",
    content: ["ROS/ROS2", "Axum", "Express.js", "Prisma", "React", "Next.js"],
  },

  {
    name: "Tools & Platforms",
    content: ["Git", "Github", "Vercel", "AWS", "Notion", "Figma"],
  },
  {
    name: "Soft Skills",
    content: [
      "Problem solving",
      "Adaptability",
      "Continuous learning",
      "Effective communication",
      "Leadership",
    ],
  },
  {
    name: "Other",
    content: ["Scrum", "Software Architecture"],
  },
];

export default function Skills() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
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
        data-aos="fade-up"
      >
        Skills
      </Typography>

      {skills.map((skill) => (
        <Box key={skill.name} data-aos="fade-up">
          <Typography variant="h6" sx={{ paddingY: 2 }}>
            {skill.name}
          </Typography>

          <Grid container spacing={{ xs: 1 }}>
            {skill.content.map((item) => (
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: "4px",
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
        </Box>
      ))}
    </Box>
  );
}
