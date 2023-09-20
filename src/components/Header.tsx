import * as React from "react";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Fab from "@mui/material/Fab";
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
import { Button, alpha } from "@mui/material";
import Box from "@mui/material/Box";

export default function Header() {
  const theme = useTheme();

  const [headerPos, setHeaderPos] = React.useState<string>("-300px");
  const [menuIcon, setMenuIcon] = React.useState<React.ReactNode>(<MenuIcon />);

  const handleHeader = () => {
    if (headerPos === "-300px") {
      setHeaderPos("0px");
      setMenuIcon(<CloseIcon />);
    } else {
      setHeaderPos("-300px");
      setMenuIcon(<MenuIcon />);
    }
  };

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

  const sections = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
      <Container
        disableGutters
        sx={{
          position: "fixed",
          top: "0px",
          left: { xs: headerPos, lg: "0px" },
          bottom: "0px",
          width: "300px",
          backgroundColor: "background.default",
          transition: "all 0.5s",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "100",
          paddingLeft: "15px",
          paddingRight: "15px",
          color: "primary.main",
        }}
        component={"header"}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4">Felipe Ma</Typography>
          <Typography variant="subtitle1">Software Developer</Typography>
          <Stack direction={"column"} gap={1} py={7} alignItems={"start"}>
            {sections.map((section) => (
              <Button
                href={section.link}
                key={section.name}
                sx={{
                  fontSize: 18,
                  color: "primary.main",
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.3),
                  },
                }}
              >
                {section.name}
              </Button>
            ))}
          </Stack>
          <Stack direction="row" gap={2}>
            {socials.map((social) => (
              <IconButton
                key={social.name}
                href={social.link}
                target="_blank"
                color="primary"
                sx={{
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  borderRadius: "50%",
                  width: "42px",
                  height: "42px",
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, 0.3),
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
        {/*<Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Typography sx={{ textAlign: "center", pb: 2 }}>
            &copy; Copyright <b>Felipe Ma</b> - 2023
          </Typography>
        </Box>*/}
      </Container>

      <Fab
        onClick={handleHeader}
        size="small"
        sx={{
          bgcolor: "primary.main",
          position: "fixed",
          top: "15px",
          right: { xs: "15px", lg: "-100px" },
          transition: "all 0.5s",
          zIndex: "100",
        }}
      >
        {menuIcon}
      </Fab>
    </>
  );
}
