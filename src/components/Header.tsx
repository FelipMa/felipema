"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Header() {
  return (
    <Container fixed>
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>teste</div>
        <div>teste 2</div>
      </Box>
    </Container>
  );
}
