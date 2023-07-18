"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TerminalIcon from "@mui/icons-material/Terminal";

export default function Facts() {
  return (
    <Container
      id="facts"
      component={"section"}
      disableGutters
      sx={{
        paddingX: { xs: "15px", sm: "30px" },
        paddingTop: { xs: "40px", sm: "80px" },
        maxWidth: { xs: "sm2", md2: "lg2" },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginBottom: "20px",
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
        Facts
      </Typography>
      <Typography component={"p"} sx={{ marginBottom: "30px" }}>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Container disableGutters>
            <TerminalIcon />
            <Typography>Years of experience consequuntur</Typography>
          </Container>
        </Grid>

        <Grid item xs={3}>
          <Container disableGutters>
            <TerminalIcon />
            <Typography>Years of experience consequuntur</Typography>
          </Container>
        </Grid>

        <Grid item xs={3}>
          <Container disableGutters>
            <TerminalIcon />
            <Typography>Years of experience consequuntur</Typography>
          </Container>
        </Grid>

        <Grid item xs={3}>
          <Container disableGutters>
            <TerminalIcon />
            <Typography>Years of experience consequuntur</Typography>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
