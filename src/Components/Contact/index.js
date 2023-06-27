import React from 'react';
import { Canvas } from '@react-three/fiber';
import Earth from './Earth';
import ContactForm from './ContactForm';
import './style.css'
import { Container, Grid, Typography,Button } from '@mui/material';


const index = () => {
  return (
    <Container style={{height:'100vh', justifyContent: 'center', alignItems: 'center', }}>
      <Grid container spacing={2}>
        <Grid  item xs={12} sm={6}>
          <Canvas
              shadows
              frameloop='demand'
              dpr={[1, 2]}
              gl={{ preserveDrawingBuffer: true }}
              camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
              }}
          >
              <Earth />
          </Canvas>
        </Grid>
        <Grid  item xs={12} sm={6} >
          <ContactForm />
        </Grid>
      </Grid>
     </Container>
  )
}

export default index
