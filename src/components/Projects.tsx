"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import BoltIcon from "@mui/icons-material/Bolt";
import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const projects = [
  {
    name: "My site, felipema.vercel.app",
    description:
      "This site was built with Next.js and Material UI (soon I'll buy a domain)",
    href: "https://github.com/FelipMa/felipema",
  },
  {
    name: "Algorithim for drone path planning and control",
    description:
      "This project was developed as part of my cientific initiation at UFBA. The goal was to develop and implement an algorithim for autonomous drone path planning and control. The algorithim was developed in Python, and the drone was controlled using ROS2. (no link to repository yet)",
    href: "",
  },
];

export default function Projects() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <Box id="projects" component={"section"}>
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
        Projects
      </Typography>

      <Stack direction={"column"} gap={4} paddingTop={2}>
        {projects.map((project) => (
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={4}
            key={project.name}
            data-aos="fade-up"
          >
            <Box display={"flex"}>
              <BoltIcon fontSize="large" />
            </Box>

            <Box display={"flex"} flexDirection={"column"}>
              <Typography variant={"h5"}>
                {project.name}

                <IconButton href={project.href} target="_blank">
                  <OpenInNewIcon />
                </IconButton>
              </Typography>

              <Typography variant={"subtitle1"} textAlign={"justify"}>
                {project.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
