import React from 'react'
import { Canvas, } from '@react-three/fiber';
import './style.css';
import CoderModel from './Coder';
import { Grid, Typography,useMediaQuery } from '@mui/material';


const index = () => {
  return (
      <Grid container className='main'>
        <Grid className='content' item xs={12} sm={6}>
           <Typography>hi</Typography>
        </Grid>
        <Grid className='model-container' sx={{
            "@media (max-width: 767px)": {
              display: "none"
            },
          }}item sm={6} >
          <Canvas camera={{ position: [2, -2, 2], fov: 45 }} shadows alpha>
            <CoderModel  />
          </Canvas>
        </Grid>
      </Grid>
  )
}

export default index