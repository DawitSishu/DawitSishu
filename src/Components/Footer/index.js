import React from 'react'
import {Typography, Grid} from '@mui/material';
import {Link} from 'react-scroll';

const index = () => {
  return (
    <footer>
      <Grid container justifyContent='center' >
      <Typography variant="body1" >
        © {new Date().getFullYear()} 
      </Typography>
        <Typography variant="body1" sx={{fontWeight:'bold',color:'#008080'}}>&nbsp;&nbsp;Dawit</Typography>
      </Grid>
    </footer>
  )
}

export default index