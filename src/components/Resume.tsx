"use client";

import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const professionalExperience = [
  {
    title: "Software Developer Intern",
    date: "Feb 2024 - Present",
    place: "Avantsoft",
    content: [
      "Back-end development with NestJS",
      "Experience with API development, integration with third-party APIs and cloud computing services.",
    ],
  },
  {
    title: "Development Director",
    date: "Jan 2023 - Jan 2024",
    place:
      "TITAN Computação Inteligente, Junior Enterprise of Computer Engineering at the Federal University of Bahia",
    content: [
      "Web development with Node.js, Express.js, Prisma, Next.js and similar.",
      "API design",
      "Database modeling",
      "Product management with Scrum and Notion",
      "Business meetings and presentations",
      "Team management and leadership",
    ],
  },
  {
    title: "Software Developer",
    date: "Mar 2022 - Dec 2023",
    place:
      "TITAN Computação Inteligente, Junior Enterprise of Computer Engineering at the Federal University of Bahia",
    content: [
      "Web development with Node.js, Express.js, Prisma, Next.js and similar.",
    ],
  },
];

const education = [
  {
    title: "Bachelor's Degree in Computer Engineering",
    date: "2021 - Present",
    place: "Federal University of Bahia, Salvador, BA, Brazil",
    content: [],
  },
];

const sientificResearch = [
  {
    title: "Scientific Initiation",
    date: "Aug 2022 - Aug 2024",
    place: "Federal University of Bahia, Salvador, BA, Brazil",
    content: [
      "Cientific Initiation Scholarship - Robotics and Drone Control with ROS/ROS2",
      "The project focuses on the implementation of control algorithms in autonomous drones",
    ],
  },
];

export default function Resume() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <Box id="resume" component={"section"} data-aos="fade-up">
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
        Resume{" "}
        <IconButton
          href={"/documents/Resume-FelipeMa.pdf"}
          target="_blank"
          title="Full Resume"
        >
          <OpenInNewIcon />
        </IconButton>
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontWeight: "700",
          paddingY: 2,
        }}
      >
        Professional Experience
      </Typography>

      {professionalExperience.map((experience) => (
        <Box
          sx={{
            paddingBottom: 3,
            paddingLeft: 3,
            borderLeft: "2px solid",
            borderColor: "primary.main",
            position: "relative",
            "&:before": {
              content: "''",
              position: "absolute",
              width: "16px",
              height: "16px",
              borderRadius: "50px",
              left: "-9px",
              background: "#fff",
              border: "2px solid",
              borderColor: "primary.main",
            },
          }}
          key={experience.title}
        >
          <Typography variant="h6">{experience.title}</Typography>

          <Typography>{experience.date}</Typography>

          <Typography variant="body1" sx={{ fontStyle: "italic" }}>
            {experience.place}
          </Typography>

          <List>
            {experience.content.map((item) => (
              <ListItem disablePadding key={item}>
                <ListItemIcon
                  sx={{
                    minWidth: "15px",
                    color: "text.primary",
                  }}
                >
                  <CircleIcon sx={{ fontSize: "7px" }} />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    variant: "body1",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}

      <Typography
        variant="h5"
        sx={{
          fontWeight: "700",
          marginY: "15px",
        }}
      >
        Education
      </Typography>

      {education.map((education) => (
        <Box
          sx={{
            paddingBottom: "20px",
            paddingLeft: "20px",
            marginTop: "-2px",
            borderLeft: "2px solid",
            borderColor: "primary.main",
            position: "relative",
            "&:before": {
              content: "''",
              position: "absolute",
              width: "16px",
              height: "16px",
              borderRadius: "50px",
              left: "-9px",
              top: "0",
              background: "#fff",
              border: "2px solid",
              borderColor: "primary.main",
            },
          }}
          key={education.title}
        >
          <Typography variant="h6">{education.title}</Typography>

          <Typography>{education.date}</Typography>

          <Typography variant="body1" sx={{ fontStyle: "italic" }}>
            {education.place}
          </Typography>

          <List>
            {education.content.map((item) => (
              <ListItem disablePadding key={item}>
                <ListItemIcon
                  sx={{
                    minWidth: "15px",
                    color: "text.primary",
                  }}
                >
                  <CircleIcon sx={{ fontSize: "7px" }} />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    variant: "body1",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}

      <Typography
        variant="h5"
        sx={{
          fontWeight: "700",
          marginY: "15px",
        }}
      >
        Scientific Research
      </Typography>

      {sientificResearch.map((item) => (
        <Box
          sx={{
            paddingBottom: "20px",
            paddingLeft: "20px",
            marginTop: "-2px",
            borderLeft: "2px solid",
            borderColor: "primary.main",
            position: "relative",
            "&:before": {
              content: "''",
              position: "absolute",
              width: "16px",
              height: "16px",
              borderRadius: "50px",
              left: "-9px",
              top: "0",
              background: "#fff",
              border: "2px solid",
              borderColor: "primary.main",
            },
          }}
          key={item.title}
        >
          <Typography variant="h6">{item.title}</Typography>

          <Typography>{item.date}</Typography>

          <Typography variant="body1" sx={{ fontStyle: "italic" }}>
            {item.place}
          </Typography>

          <List>
            {item.content.map((item) => (
              <ListItem disablePadding key={item}>
                <ListItemIcon
                  sx={{
                    minWidth: "15px",
                    color: "text.primary",
                  }}
                >
                  <CircleIcon sx={{ fontSize: "7px" }} />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    variant: "body1",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
}
