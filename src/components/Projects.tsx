import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import BoltIcon from "@mui/icons-material/Bolt";

const projects = [
  {
    name: "My site, felipema.com.br",
    description: "This site was built with Next.js and Material UI",
  },
  {
    name: "Algorithim for drone path planning and control",
    description:
      "This project was developed as part of my Cientific Initiation at UFBA, and implemented in C++ and Python, using ROS and Gazebo.",
  },
];

export default function Projects() {
  const theme = useTheme();
  return (
    <Box id="projects" component={"section"}>
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
        Projects
      </Typography>
      <Stack direction={"column"} gap={4}>
        {projects.map((project) => (
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={6}
            key={project.name}
          >
            <Box display={"flex"} alignItems={"center"}>
              <BoltIcon fontSize="large" />
            </Box>

            <Box display={"flex"} flexDirection={"column"} gap={1}>
              <Typography variant={"h5"}>{project.name}</Typography>

              <Typography variant={"subtitle1"}>
                {project.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
