'use client';

import Typography from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import * as React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const information = [
  {
    title: 'Birthday',
    content: '21 Mar 2003',
  },
  {
    title: 'City',
    content: 'Salvador, BA, Brazil',
  },
  {
    title: 'Degree',
    content: '(Almost) Computer Engineer',
  },
  {
    title: 'Email',
    content: 'felipeapenburg@gmail.com',
  },
];

const paragraphs = [
  'I study computer engineering at the Federal University of Bahia, and enjoy studying anything related to technology, from web development to hardware interaction.',
  'I currently work as a software developer and have experience in Node.js frameworks. Additionally, I also have knowledge and a lot of interest in areas that involve low-level programming with C, C++ or Rust, such as robotics, microcontrollers and operating systems.',
  'My background includes hands-on experience with web development, some personal projects and robotics knowledge gained from my scientific initiation.',
];

export default function About() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <Box id="about" component={'section'}>
      <Typography
        variant="h4"
        component={'h2'}
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
        data-aos="fade-up"
      >
        About
      </Typography>

      <Box paddingTop={2} data-aos="fade-up">
        <Typography variant="h6" paddingBottom={1}>
          Some information about me:
        </Typography>

        <Grid container spacing={0} paddingBottom={1}>
          {information.map((info) => (
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 0, sm: 1 },
                paddingBottom: 1,
              }}
              key={info.title}
            >
              <KeyboardArrowRightIcon color="primary" />

              <Typography component="span" variant="body1">
                {info.title}: {info.content}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          {paragraphs.map((paragraph, index) => (
            <Typography
              component="p"
              variant="body1"
              textAlign={'justify'}
              key={index}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
