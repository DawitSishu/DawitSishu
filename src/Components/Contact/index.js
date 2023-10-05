import React,{Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import Earth from './Earth';
import ContactForm from './ContactForm';
import { Container, Grid } from '@mui/material';
import styled from "styled-components";
import Footer from '../Footer';
import { OrbitControls,Preload } from '@react-three/drei';
import Loader from '../Loader/Loader';



const StyledCanvas = styled(Canvas)`
  /* Add your custom styles here */
  border-radius: 8px;

  /* Media query */
  @media (max-width: 767px) {
    width: 100vw !important;
    height: 100vh !important;   
  }
`;


const index = () => {
  return (
    <div>
    <Container style={{height:'100vh', justifyContent: 'center', alignItems: 'center', }}>
      <Grid container spacing={2}>
        <Grid  item xs={12} sm={6}>
        <StyledCanvas
        shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45, 
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
       <Suspense fallback={<Loader />}>
              <Earth />
              <OrbitControls
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
             />
             <Preload all />
        </Suspense>
          </StyledCanvas>
        </Grid>
        <Grid  item xs={12} sm={6} >
          <ContactForm />
        </Grid>
      </Grid>
      <br/>
      <br/>
     <Footer />
     </Container>
    </div>
  )
}

export default index
