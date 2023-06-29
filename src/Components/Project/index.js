import React from 'react'
import ProjectCard from "./ProjectCard";
import chatify from '../../Assets/Images/logo.png';
import { Container, Grid, Typography,Button } from '@mui/material';

const index = () => {
  return (
    <Container  style={{justifyContent: 'center', alignItems: 'center' }} mb={20}>
        <Grid container  sx={{height:'100%'}}>
        <Grid mt={5} container  justifyContent="center" xs={12} >
            <Typography variant="h3">
              My Recent 
              <strong style={{color:'#008080'}}> Works</strong>
            </Typography><br />
        </Grid>
        <Grid xs={12} container  justifyContent="center" mb={4} mt={1}>
            <Typography variant="h6">Here are a few projects I've recenty worked on.</Typography>
        </Grid>
      <Grid container spacing={2} justifyContent="center" id='proj'>
        <Grid item xs={12} sm={6} mb={5} >
                <Grid container justifyContent="center">
                    <ProjectCard
                            imgPath={chatify}
                            title="Chatify"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink="https://github.com/soumyajit4419/Chatify"
                            demoLink="https://chatify-49.web.app/"
                        />
                </Grid>
        </Grid>
        <Grid item xs={12} sm={6} mb={5} >
                <Grid container justifyContent="center">
                    <ProjectCard
                            imgPath={chatify}
                            title="Chatify"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink="https://github.com/soumyajit4419/Chatify"
                            demoLink="https://chatify-49.web.app/"
                        />
                </Grid>
        </Grid>
        <Grid item xs={12} sm={6} mb={5} >
                <Grid container justifyContent="center">
                    <ProjectCard
                            imgPath={chatify}
                            title="Chatify"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink="https://github.com/soumyajit4419/Chatify"
                            demoLink="https://chatify-49.web.app/"
                        />
                </Grid>
        </Grid>
        <Grid item xs={12} sm={6} mb={5} >
                <Grid container justifyContent="center">
                    <ProjectCard
                            imgPath={chatify}
                            title="Chatify"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            ghLink="https://github.com/soumyajit4419/Chatify"
                            demoLink="https://chatify-49.web.app/"
                        />
                </Grid>
        </Grid>
        
        </Grid>
        </Grid>
    </Container>    
  )
}

export default index