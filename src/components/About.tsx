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
  'I am a computer engineering student at the Federal University of Bahia (UFBA) with professional experience as a Software Developer. My core expertise lies in backend development, specifically utilizing Node.js frameworks and cloud technologies to build scalable solutions.',
  'Beyond web development, I possess a deep technical interest in the hardware-software interface. I am actively expanding my proficiency in low-level programming, operating systems, and embedded systems, with a special attention on the Rust programming language and its application in performance-critical environments.',
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
              size={{ xs: 12, sm: 6 }}
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
