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
    name: "family-tree-api",
    description:
      "This project is a simple API to manage a family tree. It was built with Rust, Axum and SQLx.",
    href: "https://github.com/FelipMa/family-tree-api",
  },
  {
    name: "felipema.dev.br",
    description: "This site was built with Next.js and Material UI",
    href: "https://github.com/FelipMa/felipema",
  },
  {
    name: "tello_ros2_packages",
    description:
      "This project focuses on the implementation of control algorithms in autonomous drones. The packages have been developed in Python and C++, using ROS2",
    href: "https://github.com/FelipMa/tello_ros2_packages",
  },
  {
    name: "tt-scheduling-app",
    description:
      "The purpose of this project is to create a simple tweet scheduler that can be used to schedule tweets.",
    href: "https://github.com/FelipMa/tt-scheduling-app",
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
    <Box id="projects" component={"section"} data-aos="fade-up">
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
        Personal Projects
      </Typography>

      <Stack direction={"column"} gap={4} paddingTop={2} data-aos="fade-up">
        {projects.map((project) => (
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={4}
            key={project.name}
          >
            <Box display={"flex"} alignItems={"center"}>
              <BoltIcon fontSize="large" />
            </Box>

            <Box display={"flex"} flexDirection={"column"}>
              <Typography variant={"h5"}>
                {project.name}

                <IconButton
                  href={project.href}
                  target="_blank"
                  title="View code"
                >
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
