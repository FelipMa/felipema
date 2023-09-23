import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Button, alpha } from "@mui/material";
import Box from "@mui/material/Box";

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

  const sections = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Resume",
      link: "#resume",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ];

  return (
    <>
      <Box
        sx={{
          position: { xs: "relative", md: "sticky" },
          top: "0px",
          left: "0px",
          bottom: "0px",
          height: { xs: "auto", md: "100vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          paddingTop: 10,
          paddingBottom: { xs: 0, md: 10 },
          color: "primary.main",
          width: { xs: "100%", md: "30%" },
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
          <Typography variant="h2" component={"h1"}>
            Felipe Ma
          </Typography>

          <Typography variant="h5" component={"h2"}>
            Software Developer
          </Typography>

          <Stack
            direction={"column"}
            gap={1}
            py={7}
            alignItems={"start"}
            display={{
              xs: "none",
              md: "flex",
            }}
          >
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
        </Box>

        <Stack
          direction="row"
          gap={2}
          paddingTop={{
            xs: 7,
            md: 0,
          }}
        >
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
      </Box>
    </>
  );
}
