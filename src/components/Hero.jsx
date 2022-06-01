import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import brush from '../assets/image/paintbrush.png';
import '../style/style.css';
import ImgProfile from '../assets/image/look-removebg-preview.png';

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sx')]: {
    flexDirection: 'column-reverse',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const StyledTypo = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));

const Hero = () => {
  return (
    <div id="hero" style={{ paddingTop: '100px', paddingBottom: '50px', minHeight: '100vh', height: 'max-content', backgroundColor: '#E8DBD5' }}>
      <Container>
        <StyledGrid sx={{ flexGrow: 1, margin: 'auto' }} container spacing={2} flexDirection={'column-reverse'}>
          <Grid item xs={12} md={6}>
            <StyledTypo variant="caption">Lorem ipsum, dolor sit </StyledTypo>
            <Typography variant="h2" style={{ fontWeight: 'bold', marginTop: '10px', marginBottom: '50px' }}>
              Dewi Anggraeni, Digital Ilustrator{' '}
            </Typography>
            <Typography variant="h6">Welcome to my portfolio</Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
            <img src={ImgProfile} height={300} alt="Image Profile" />
          </Grid>
        </StyledGrid>
        <Grid container sx={{ justifyContent: 'center' }} style={{ marginTop: '50px' }} spacing={2}>
          <Grid item>
            <Card className="card-hero" sx={{ maxWidth: 345 }} style={{ background: '#E4DCCC', color: '#A7826E', textAlign: 'center', minWidth: 250 }}>
              <CardActionArea>
                <CardMedia component="img" image={brush} alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Babi
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className="card-hero" sx={{ maxWidth: 345 }} style={{ background: '#E4DCCC', color: '#A7826E', textAlign: 'center', minWidth: 250 }}>
              <CardActionArea>
                <CardMedia component="img" image={brush} alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Babi
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className="card-hero" sx={{ maxWidth: 345 }} style={{ background: '#E4DCCC', color: '#A7826E', textAlign: 'center', minWidth: 250 }}>
              <CardActionArea>
                <CardMedia component="img" image={brush} alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Babi
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className="card-hero" sx={{ maxWidth: 345 }} style={{ background: '#E4DCCC', color: '#A7826E', textAlign: 'center', minWidth: 250 }}>
              <CardActionArea>
                <CardMedia component="img" image={brush} alt="green iguana" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Babi
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
