import React from 'react'
import { Canvas, } from '@react-three/fiber';
import './style.css';
import CoderModel from './Coder';
import { Container, Grid, Typography,Button } from '@mui/material';
import { Link } from "react-scroll";
import { AiOutlineMail } from "react-icons/ai";
import Type from './Type';


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
            <Typography variant="h3" style={{ paddingBottom: 15 }} className="heading">
              Hi There!{' '}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </Typography>
            <Typography variant="h2" className="heading-name">
              I'M
              <strong className="main-name"> Dawit</strong>
            </Typography>
            
            <Typography variant='h5' mt={10}>
              <Type />
            </Typography >
              <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                <Button
                  sx={{marginTop:3}}
                  variant="contained"
                  color="primary"
                  startIcon={<AiOutlineMail />}
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </Container> 
        </Grid>
        <Grid className='model-container' sx={{
            "@media (max-width: 767px)": {
              display: "none"
            },
          }}item sm={6} >
          <Canvas camera={{ position: [2, -2, 2], fov: 45 }} shadows >
            <CoderModel  />
          </Canvas>
        </Grid>
      </Grid>
    </Container>
  )
}

export default index