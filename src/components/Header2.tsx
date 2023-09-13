"use client";

import * as React from "react";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WebIcon from "@mui/icons-material/Web";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import { Box, Button, alpha } from "@mui/material";
import NavTabs from "./NavTabs";

export default function Header() {
  const theme = useTheme();

  const socials = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/felipema_/",
      icon: <InstagramIcon fontSize="large" />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/",
      icon: <LinkedInIcon fontSize="large" />,
    },
    {
      name: "Github",
      link: "https://github.com/FelipMa",
      icon: <GitHubIcon fontSize="large" />,
    },
  ];

  return (
    <Box
      component={"header"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingX: "15px",
        color: "primary.main",
      }}
    >
      <Typography variant="h4">Felipe Ma</Typography>
      <NavTabs />

      <Typography sx={{ textAlign: "center", pb: 2 }}>
        &copy; Copyright <b>Felipe Ma</b> - 2023
      </Typography>
    </Box>
  );
}
