import React from 'react';
import { Container, Grid, Typography,Button } from '@mui/material';


const index = () => {
  return (
    <Container style={{ height:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container className='main' sx={{height:'100%'}}>
        <Grid className='content' item xs={12} sm={6}  >
          <Container className='main-text' sx={{
              "@media (max-width: 767px)": {
                height:'100vh'
              },
          }}>
            <div>
            <Typography variant="h2" className="heading-name">
              Know who 
              <strong className="main-name"> I'M</strong>
            </Typography>
            
            </div>
          </Container> 
        </Grid>
      </Grid>
    </Container>
  )
}

export default index