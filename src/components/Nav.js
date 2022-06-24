import React from 'react';
import { AppBar, Container, CssBaseline, Grid, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Hero from './Hero';
import About from './About';
import Project from './Project';

function Nav() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const StyledTabs = styled((props) => <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />)({
    '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'none',
    },
    '& .MuiTabs-indicatorSpan': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#EDE2DC',
    },
  });

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    padding: '0px',
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }));

  return (
    <>
      <CssBaseline />
      <AppBar style={{ backgroundColor: '#A7826E' }}>
        <Toolbar>
          <Container>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5, lg: 6 }}>
              <Grid item xs={2}>
                <Typography variant="h5" style={{ marginTop: '10px', fontSize: '1.5em' }}>
                  Dewi
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <StyledTabs value={selectedTab} onChange={handleChange} indicatorColor={{ className: 'red' }} centered>
                  <StyledTab label="Home" href='/' />
                  <StyledTab label="About"  />
                  <StyledTab label="Project" />
                </StyledTabs>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      {selectedTab === 0 && <Hero />}
      {selectedTab === 1 && <About />}
      {selectedTab === 2 && <Project />}
    </>
  );
}

export default Nav;
