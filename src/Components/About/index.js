import React from 'react';
import { Container, Grid, Typography,Button } from '@mui/material';
import Techstack from './Techs';
import ToolStack from './Tools';
import Github from './GitHub';


const index = () => {
  return (
    <Container style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid container  sx={{height:'100%'}}>
          <Grid container justifyContent='center' mt={2}>
              <Typography variant="h2"  >
                Know who 
                <strong style={{fontWeight:'bold',color:'#008080'}}> I'M</strong>
              </Typography>
          </Grid>
          <Grid container justifyContent='center'>
              <Typography paragraph={true}  sx={{fontSize:'18px'}}>
              I'm Dawit, and I'm a developer. I'm the middle child 
              in a house of three children. I have always been fascinated 
              by technology and computers, which led me to pursue a career
               in development. Being the middle child in a household of 
               three children has its perks and challenges. Growing up, I 
               learned the importance of compromise and communication, as I 
               often found myself mediating between my older and younger siblings. 
               This experience has shaped me into a patient and understanding individual, 
               qualities that are essential in the field of development. As a developer, I 
               thrive on problem-solving and finding innovative solutions to complex issues. 
               Whether it's coding a new application or debugging existing software, I am 
               constantly seeking ways to improve efficiency and the user experience. 
               My passion for development extends beyond just writing code; I also enjoy 
               collaborating with others and learning from their perspectives. This collaborative 
               mindset allows me to approach projects with an open mind and embrace different ideas. 
               In my free time, I like to <strong>play chess and watch football</strong>. I believe that through 
               continuous learning and practicing, I can continue to develop innovative solutions 
               and contribute to the ever-evolving field of technology.
              </Typography>
          </Grid>
          <Grid> 
          <Grid container justifyContent='center'mb={5}>
              <Typography variant="h2" >
                Proffesional 
                <strong style={{fontWeight:'bold',color:'#008080'}}> Skillset</strong>
              </Typography>
          </Grid>
            <Techstack />
          </Grid>
          <Grid container justifyContent='center'mb={5}>
              <Typography variant="h2" >
                <strong style={{fontWeight:'bold',color:'#008080'}}>Tools </strong>
                I use 
              </Typography>
          </Grid>
            <ToolStack />
            <Grid container justifyContent='center'mb={5}>
              <Typography variant="h2" >
                Days I
                <strong style={{fontWeight:'bold',color:'#008080'}}> Code</strong>
              </Typography>
          </Grid>
          <Github />
      </Grid>
    </Container>
  )
}

export default index