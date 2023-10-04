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
      "This project focuses on the implementation of movement algorithms in autonomous drones. The packages have been developed in Python and C++, using ROS2.",
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
            <Box display={"flex"} alignItems={"center"}>
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
