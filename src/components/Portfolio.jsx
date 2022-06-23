import { Container, Grid } from "@mui/material";
import React from "react";

export default function Portfolio() {
    return (
        <Portfolio style={{ heigh:'100vh' }}>
            <Container>
                <Grid container>
                    <Grid item>
                        Gambar
                        <hr/>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item>Gambar</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Portfolio>
    )
}

