import { useTheme } from "@mui/material/styles";
import { Box, IconButton, Stack, alpha } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function SocialStack() {
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
    <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
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
  );
}
