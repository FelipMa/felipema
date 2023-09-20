import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Marquee from "react-fast-marquee";

export default function Hero() {
  return (
    <Container
      id="home"
      disableGutters
      component={"section"}
      maxWidth={false}
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        paddingX: { xs: "15px", sm: "30px" },
        paddingTop: { xs: "40px", sm: "80px" },
        maxWidth: { xs: "sm2", md2: "lg2" },
      }}
    >
      <Box
        maxWidth="ticker"
        sx={{
          color: "primary.main",
        }}
      >
        <Typography variant="h2">Felipe Ma</Typography>
        <Typography variant="h4" sx={{ fontWeight: 300 }}>
          Full Stack Developer
        </Typography>
        <Marquee speed={60} direction="left">
          <Typography variant="h5">&nbsp;Javascript |</Typography>
          <Typography variant="h5">&nbsp;Typescript |</Typography>
          <Typography variant="h5">&nbsp;React |</Typography>
          <Typography variant="h5">&nbsp;Next.js |</Typography>
          <Typography variant="h5">&nbsp;Node.js |</Typography>
          <Typography variant="h5">&nbsp;Express |</Typography>
          <Typography variant="h5">&nbsp;SQL |</Typography>
          <Typography variant="h5">&nbsp;Git &amp; Github |</Typography>
          <Typography variant="h5">&nbsp;Robotics |</Typography>
          <Typography variant="h5">&nbsp;C &amp; C++ |</Typography>
          <Typography variant="h5">&nbsp;Python |</Typography>
          <Typography variant="h5">&nbsp;ROS &amp; ROS2 |</Typography>
        </Marquee>
      </Box>
    </Container>
  );
}
