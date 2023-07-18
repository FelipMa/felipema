import Image from "next/image";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function About() {
  return (
    <Container
      id="about"
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
        About
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md2={4}>
          <Container
            sx={{
              position: "relative",
              objectFit: "contain",
              border: "1px solid",
              borderColor: "primary.main",
              paddingTop: "100%", // 1:1
              minWidth: "260px",
              minHeight: "260px",
            }}
            data-aos="fade-right"
          >
            <Image
              src="/images/felipe-ma-profile-img.jpg"
              alt="Picture of the author"
              fill={true}
              sizes="300px"
            />
          </Container>
        </Grid>
        <Grid item xs={12} md2={8} sx={{ padding: "0px" }}>
          <Container
            disableGutters
            sx={{ paddingRight: "0px" }}
            data-aos="fade-up"
          >
            <Typography
              component="h4"
              variant="h4"
              sx={{ marginBottom: "8px" }}
            >
              Web developer &amp; low-level programming enthusiast
            </Typography>
            <Typography variant="h6" sx={{ paddingBottom: 1 }}>
              Some information about me:
            </Typography>
            <Grid container spacing={0}>
              <Grid item xs={12} sm2={5}>
                <List component={"ul"} disablePadding>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: "25px" }}>
                      <KeyboardArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Birthday:"
                      primaryTypographyProps={{
                        variant: "h6",
                      }}
                      secondary="21 Mar 2003"
                      secondaryTypographyProps={{
                        variant: "h6",
                      }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        flexWrap: {
                          xs: "wrap",
                          sm: "nowrap",
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: "25px" }}>
                      <KeyboardArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="City:"
                      primaryTypographyProps={{
                        variant: "h6",
                      }}
                      secondary="Salvador, BA, Brazil"
                      secondaryTypographyProps={{
                        variant: "h6",
                      }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        flexWrap: {
                          xs: "wrap",
                          sm: "nowrap",
                        },
                      }}
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm2={7}>
                <List component={"ul"} disablePadding>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: "25px" }}>
                      <KeyboardArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Degree:"
                      primaryTypographyProps={{
                        variant: "h6",
                      }}
                      secondary="(Almost) Computer Engineer"
                      secondaryTypographyProps={{
                        variant: "h6",
                      }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        flexWrap: {
                          xs: "wrap",
                          sm: "nowrap",
                        },
                      }}
                    />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon sx={{ minWidth: "25px" }}>
                      <KeyboardArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="Email:"
                      primaryTypographyProps={{
                        variant: "h6",
                      }}
                      secondary="felipeapenburg@gmail.com"
                      secondaryTypographyProps={{
                        variant: "h6",
                      }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        flexWrap: {
                          xs: "wrap",
                          sm: "nowrap",
                        },
                      }}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingTop: 1,
              }}
            >
              <Typography component="p" variant="body1">
                I study computer engineering at the Federal University of Bahia,
                and enjoy studying anything related to technology, from web
                development to hardware interaction.
              </Typography>

              <Typography component="p" variant="body1">
                I&apos;m currently focusing on web development and a bit of
                robotics, but I&apos;m always open to new opportunities. I have
                made some projects for university and personal projects, you can
                check them out on the projects section. I&apos;m also very
                interested in low-level programming.
              </Typography>

              <Typography component="p" variant="body1">
                Good knowledge in web development, mainly in React/Next.js for
                front end and Node.js express for back end. Also have experience
                with Python and ROS/ROS2 (Robot Operating System), by developing
                some projects in the university.
              </Typography>

              <Typography component="p" variant="body1">
                Currently I&apos;m development director at TITAN , Junior
                Enterprise of Computer Engineering at UFBA. We develop custom
                software for clients, mainly in web development.
              </Typography>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
