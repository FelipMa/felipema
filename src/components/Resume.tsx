"use client";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import Box from "@mui/material/Box";
import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const professionalExperience = [
  {
    title: "Development Director",
    date: "Jan 2023 - Present",
    place:
      "TITAN Computação Inteligente, Junior Enterprise of Computer Engineering at the Federal University of Bahia",
    content: [
      "Experience in web development with React, Next.js, Node.js, Express.js, among others.",
      "Experience in Project Management with Scrum and Notion",
      "Expericence in business meetings and presentations",
    ],
  },
];

const education = [
  {
    title: "Bachelor's Degree in Computer Engineering",
    date: "2021 - Present",
    place: "Federal University of Bahia, Salvador, BA, Brazil",
    content: ["Cientific Initiation Scholarship - Robotics and Drone Control"],
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
    <Box id="resume" component={"section"}>
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
        Resume
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
    </Box>
  );
}
