"use client";

import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const information = [
  {
    title: "Birthday",
    content: "21 Mar 2003",
  },
  {
    title: "City",
    content: "Salvador, BA, Brazil",
  },
  {
    title: "Degree",
    content: "(Almost) Computer Engineer",
  },
  {
    title: "Email",
    content: "felipeapenburg@gmail.com",
  },
];

const paragraphs = [
  "I study computer engineering at the Federal University of Bahia, and enjoy studying anything related to technology, from web development to hardware interaction.",
  "I'm currently focusing on web development and a bit of robotics, but I'm always open to new opportunities. I've made some projects for university and some personal projects, you can check them out on the projects section. I'm also very interested in low-level programming.",
];

export default function About() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <Box id="about" component={"section"}>
      <Typography
        variant="h4"
        component={"h2"}
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
        About
      </Typography>

      <Box data-aos="fade-up" paddingTop={2}>
        {/*<Typography component="h3" variant="h4" paddingBottom={1}>
          Software Developer
        </Typography>*/}

        <Typography variant="h6" paddingBottom={1}>
          Some information about me:
        </Typography>

        <Grid container spacing={0} paddingBottom={1}>
          {information.map((info) => (
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 0, sm: 1 },
                paddingBottom: 1,
              }}
              key={info.title}
            >
              <KeyboardArrowRightIcon color="primary" />

              <Typography component="span" variant="body1">
                {info.title}: {info.content}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          {paragraphs.map((paragraph, index) => (
            <Typography
              component="p"
              variant="body1"
              textAlign={"justify"}
              key={index}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
