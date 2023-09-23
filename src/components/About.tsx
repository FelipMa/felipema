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
        About
      </Typography>

      <Box data-aos="fade-up">
        <Typography component="h3" variant="h4" paddingBottom={1}>
          Web developer &amp; low-level programming enthusiast
        </Typography>

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
          <Typography component="p" variant="body1" textAlign={"justify"}>
            I study computer engineering at the Federal University of Bahia, and
            enjoy studying anything related to technology, from web development
            to hardware interaction.
          </Typography>

          <Typography component="p" variant="body1" textAlign={"justify"}>
            I&apos;m currently focusing on web development and a bit of
            robotics, but I&apos;m always open to new opportunities. I have made
            some projects for university and personal projects, you can check
            them out on the projects section. I&apos;m also very interested in
            low-level programming.
          </Typography>

          <Typography component="p" variant="body1" textAlign={"justify"}>
            Good knowledge in web development, mainly in React/Next.js for front
            end and Node.js express for back end. Also have experience with
            Python and ROS/ROS2 (Robot Operating System), by developing some
            projects in the university.
          </Typography>

          <Typography component="p" variant="body1" textAlign={"justify"}>
            Currently I&apos;m development director at TITAN , Junior Enterprise
            of Computer Engineering at UFBA. We develop custom software for
            clients, mainly in web development.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
