"use client";

import Container from "@mui/material/Container";
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

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              marginY: "15px",
            }}
          >
            Education
          </Typography>
          <Container
            disableGutters
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
          >
            <Typography variant="h6">
              Bachelor&apos;s Degree in Computer Engineering
            </Typography>
            <Box>
              <Typography>2021 - Present</Typography>
            </Box>
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              Federal University of Bahia, Salvador, BA, Brazil
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemIcon
                  sx={{
                    minWidth: "15px",
                    color: "text.primary",
                  }}
                >
                  <CircleIcon sx={{ fontSize: "7px" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Cientific Initiation Scholarship - Robotics and Drone Control"
                  primaryTypographyProps={{
                    variant: "body1",
                  }}
                />
              </ListItem>
            </List>
          </Container>
          <Container
            disableGutters
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
          >
            <Typography variant="h6">High School</Typography>
            <Box>
              <Typography>2018 - 2020</Typography>
            </Box>
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              Colégio São Paulo, Salvador, BA, Brazil
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              marginY: "15px",
            }}
          >
            Professional Experience
          </Typography>
          <Container
            disableGutters
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
          >
            <Typography variant="h6">TITAN Computação Inteligente</Typography>
            <Box>
              <Typography>2022 - Present</Typography>
            </Box>
            <Typography variant="body1" sx={{ fontStyle: "italic" }}>
              Junior Enterprise of Computer Engineering at the Federal
              University of Bahia
            </Typography>
            <List>
              <ListItem disablePadding>
                <ListItemIcon
                  sx={{
                    minWidth: "15px",
                    color: "text.primary",
                  }}
                >
                  <CircleIcon sx={{ fontSize: "7px" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Development Director"
                  primaryTypographyProps={{
                    variant: "body1",
                  }}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon
                  sx={{
                    minWidth: "15px",
                    color: "text.primary",
                  }}
                >
                  <CircleIcon sx={{ fontSize: "7px" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Experience in web development with React, Next.js, Node.js, Express.js, among others."
                  primaryTypographyProps={{
                    variant: "body1",
                  }}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon
                  sx={{
                    minWidth: "15px",
                    color: "text.primary",
                  }}
                >
                  <CircleIcon sx={{ fontSize: "7px" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Experience Project Management with Scrum and Notion"
                  primaryTypographyProps={{
                    variant: "body1",
                  }}
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon
                  sx={{
                    minWidth: "15px",
                    color: "text.primary",
                  }}
                >
                  <CircleIcon sx={{ fontSize: "7px" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Experience in python desktop development with Pandas, Numpy, Tkinter, among others."
                  primaryTypographyProps={{
                    variant: "body1",
                  }}
                />
              </ListItem>
            </List>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}
