import { Container, Typography, Grid, Link } from '@mui/material';
import React from 'react';
import '../style/style.css';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MailIcon from '@mui/icons-material/Mail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <footer style={{ background: '#A7826E', fontWeight: 'bold', paddingTop: '10px', paddingBottom: '20px' }}>
      <Container>
        <Typography variant="h3" style={{ textAlign: 'center', color: '#EDE2DC' }}>
          Contact Me:
        </Typography>
        <Grid container sx={{ justifyContent: 'center', alignContent: 'center' }} spacing={2}>
          <Grid item>
            <Link href="#" underline="none" color={'#EDE2DC'}>
              <Typography variant="body-1">
                <FacebookIcon style={{ fontSize: '50' }} />
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none" color={'#EDE2DC'}>
              <Typography variant="body-1">
                <WhatsAppIcon style={{ fontSize: '50' }} />
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" underline="none" color={'#EDE2DC'}>
              <Typography variant="body-1">
                <InstagramIcon style={{ fontSize: '50' }} />
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid container className="contactDewi" style={{ color: '#EDE2DC' }} sx={{ flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }} spacing={2}>
          <Grid item>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>
              <AddLocationAltIcon /> Indonesia, Bali, Denpasar, Pemogan, Gelogor Carik
            </Typography>
          </Grid>
          <Grid item>
            <Link href="#" underline="none" color={'#EDE2DC'}>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                <MailIcon /> anggraenidewi784@gmail.com
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>
              <ContactPhoneIcon /> [+62] 815 293 326 53
            </Typography>
          </Grid>
        </Grid>
        <br />
        <br />
        <Typography variant="h5">
          Made with ❤️ by
          <Link href="https://github.com/webstriiix/" underline="none" color={'#EDE2DC'}>
            {' '}
            Webstriix
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};
