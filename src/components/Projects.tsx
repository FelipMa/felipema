'use client';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Button from '@mui/material/Button';

const projects = [
  {
    name: 'Breast News',
    description:
      'This project is a mobile app that provides news and information about breast cancer and related topics. It was developed by a small independent team for a client, and I was responsible for the backend using NestJS.',
    href: 'https://apps.apple.com/br/app/breast-news/id6737872475',
  },
  {
    name: 'Dre Metrics',
    description:
      'It is a project I participated as project owner and developer during my time at TITAN. It is an mobile application that helps you to track your company revenue and expenses. It was built with Flutter for frontend and Express.js for backend.',
    href: 'https://dremetrics.com.br/',
  },
  {
    name: 'tello_ros2_packages',
    description:
      'This project focuses on the implementation of control algorithms in autonomous drones. The packages have been developed in Python and C++, using ROS2.',
    href: 'https://github.com/FelipMa/tello_ros2_packages',
  },
  {
    name: 'pipe-cleaning-robot',
    description:
      'This project is a simulation of a pipe cleaning robot, part of a college work. It was made with verilog hdl and tested with modelsim.',
    href: 'https://github.com/FelipMa/pipe-cleaning-robot',
  },
  {
    name: 'snake_game',
    description: 'A terminal-based snake game built with Rust.',
    href: 'https://github.com/FelipMa/snake_game',
  },
  {
    name: 'felipema.dev.br',
    description: 'This site was built with Next.js and Material UI.',
    href: 'https://github.com/FelipMa/felipema',
  },
];

export default function Projects() {
  const [projectsNumber, setProjectsNumber] = React.useState(4);

  const handleShowMoreProjects = () => {
    if (projectsNumber < projects.length) {
      setProjectsNumber(projectsNumber + 4);
    }
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <Box id="projects" component={'section'} data-aos="fade-up">
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          '&:after': {
            content: "''",
            display: 'block',
            width: '50px',
            height: '3px',
            backgroundColor: 'primary.main',
            marginTop: '10px',
          },
        }}
      >
        Projects
      </Typography>

      <Stack direction={'column'} gap={3} paddingTop={2} data-aos="fade-up">
        {projects.slice(0, projectsNumber).map((project) => (
          <Box
            display={'flex'}
            flexDirection={'row'}
            key={project.name}
            sx={{
              '&:before': {
                flex: '0 0 auto',
                content: "''",
                display: 'inline-block',
                width: '3px',
                height: '40px',
                backgroundColor: 'primary.main',
                marginRight: '16px',
                marginTop: '8px',
              },
            }}
          >
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant={'h5'}>
                {project.name}

                <IconButton
                  href={project.href}
                  target="_blank"
                  title="View code"
                >
                  <OpenInNewIcon />
                </IconButton>
              </Typography>

              <Typography variant={'subtitle1'} textAlign={'justify'}>
                {project.description}
              </Typography>
            </Box>
          </Box>
        ))}
        <Button
          variant="outlined"
          onClick={
            projectsNumber < projects.length
              ? handleShowMoreProjects
              : undefined
          }
          disabled={projectsNumber >= projects.length}
          sx={{
            maxWidth: '160px',
          }}
        >
          {projectsNumber < projects.length ? 'Show more' : 'No more projects'}
        </Button>
      </Stack>
    </Box>
  );
}
