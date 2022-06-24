import { Container, Grid, Typography} from '@mui/material';
import React from 'react';

export default function Project() {
  return (
    <div id='portfolio' style={{ height:'100vh', backgroundColor:'#DABCB2', paddingTop:100 }}>
        <Container>
            <Grid container>
                <Typography variant='h5'>Gambar</Typography>
                <div style={{ height:'5px', width:'80vw', background:'blue' }}></div>
            </Grid>
            <Grid container>
                <Grid item>
                    Gambar
                </Grid>
                <Grid item>
                    Gambar
                </Grid>
                <Grid item>
                    Gambar
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}
