import { Container, Grid, Typography, Divider } from '@mui/material';
import React from 'react';
import '../style/style.css';
import ImgProfile from '../assets/image/look-removebg-preview.png';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkIcon from '@mui/icons-material/Work';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

export default function About() {
  return (
    <div id="about" style={{ paddingTop: '100px', paddingBottom: '50px', minHeight: '100vh', height: 'max-content', backgroundColor: '#E8DBD5' }}>
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
          </Grid>
        </Grid>
        {/* Education */}
        <Container className="container">
          <Grid container flexDirection={'column'}>
            <Grid item>
              <Typography variant="h3" textAlign={'center'} color={'#B5927F'}>
                Learning Experience
              </Typography>
              <hr />
            </Grid>
            <Grid item>
              <Container>
                <Grid container>
                  <Grid item style={{ color: '#A17A69' }} spacing={2}>
                    <SchoolOutlinedIcon style={{ fontSize: '40px', background: '#EBCDC3', borderRadius: '100%', height: 'max-content', marginRight: '10px' }} />
                    {''}
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" fontWeight={'bold'} color={'#A17A69'}>
                      Education
                    </Typography>
                    <Typography variant="body-1" fontWeight={'bold'} color={'#A17A69'}>
                      High School Diploma
                    </Typography>
                    <Typography>June 2014 - June 2017</Typography>
                    <Typography color={'gray'}>SMA Kutapura</Typography>
                    <Typography variant="body-1" fontWeight={'bold'} color={'#A17A69'}>
                      Bachelor of Visual Communication Design
                    </Typography>
                    <Typography>August 2018 - February 2022</Typography>
                    <Typography color={'gray'}>Indonesian Institute of the Art Denpasar</Typography>
                  </Grid>
                </Grid>
                <Grid container paddingTop={3}>
                  <Grid item style={{ color: '#A17A69' }} spacing={2}>
                    <WorkIcon style={{ fontSize: '40px', background: '#EBCDC3', borderRadius: '100%', height: 'max-content', marginRight: '10px', padding: '5px' }} />
                    {''}
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" fontWeight={'bold'} color={'#A17A69'}>
                      Work
                    </Typography>
                    <Typography variant="body-1" fontWeight={'bold'} color={'#A17A69'}>
                      Cheeky Monkey Learning Centre
                    </Typography>
                    <Typography>May 2021 - August 2021</Typography>
                    <Typography color={'gray'}>Graphic Designer</Typography>
                    <Typography variant="body-1" fontWeight={'bold'} color={'#A17A69'}>
                      Tantraz Comic Bali
                    </Typography>
                    <Typography>October 2021 - January 2022</Typography>
                    <Typography color={'gray'}>Motion Graphic Designer Internship</Typography>
                  </Grid>
                </Grid>
                <Grid container paddingTop={3}>
                  <Grid item style={{ color: '#A17A69' }} spacing={2}>
                    <RecordVoiceOverIcon style={{ fontSize: '40px', background: '#EBCDC3', borderRadius: '100%', height: 'max-content', marginRight: '10px', padding: '5px' }} />
                    {''}
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" fontWeight={'bold'} color={'#A17A69'}>
                      Seminars & Workshop
                    </Typography>
                    <Typography variant="body-1" fontWeight={'bold'} color={'#A17A69'}>
                      National Seminar : Local Culture Packaging as Creative Economy Innovation to Improve Product Marketing
                    </Typography>
                    <Typography>29th September 2017</Typography>
                    <Typography color={'gray'}>Participant</Typography>
                    <Typography variant="body-1" fontWeight={'bold'} color={'#A17A69'}>
                      Creative Caricature Class : Scratch Spoken Figures
                    </Typography>
                    <Typography>16th March 2019</Typography>
                    <Typography color={'gray'}>Participant</Typography>
                    <Typography variant="body-1" fontWeight={'bold'} color={'#A17A69'}>
                      Digital Tipography Workshop
                    </Typography>
                    <Typography>16th - 17th May 2019</Typography>
                    <Typography color={'gray'}>Participant</Typography>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Container>
        {/* Skill */}
        <Container>
          <Grid container paddingTop={3}>
            <Grid item xs={6}>
              <Typography variant="h5" textAlign={'center'}>
                Software Skills
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" textAlign={'center'}>
                Languages
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
