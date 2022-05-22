import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import '../style/style.css';
import ImgProfile from '../assets/image/look-removebg-preview.png';

export default function About() {
  return (
    <div id="about" style={{ paddingTop: '100px', paddingBottom: '50px', minHeight: '100vh', height: 'max-content', backgroundColor: '#EDE2DC' }}>
      <Container>
        <Grid container className="profile" sx={{ justifyContent: 'center' }} spacing={2}>
          <Grid item style={{ textAlign: 'center' }}>
            <img src={ImgProfile} height={400} alt="Image Profile" />
            <Typography variant="h3">Ni Putu Dewi Anggraeni</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" style={{ textAlign: 'center', width: '80%', margin: 'auto' }}>
              Hi, there! I am 22 years old, was born on November 2nd 1999. Recents University graduate with a passion for <span>graphic design</span> and <span>illustration</span>. Always looking forward to <span>improve</span> my self and{' '}
              <span>learn</span> {''}
              something new to improving my <span>skills</span>. I <span>loved</span> to learning by doing and capable to <span>work in team</span> well.
            </Typography>
            <hr />
          </Grid>
        </Grid>
        {/* Skill */}
        <Grid container></Grid>
      </Container>
    </div>
  );
}
