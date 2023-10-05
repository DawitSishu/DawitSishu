import React from "react";
import ProjectCard from "./ProjectCard";
import placeholder from "../../Assets/Images/logo.png";
import bored from "../../Assets/Images/boredome.png";
import code from "../../Assets/Images/code.png";
import contact from "../../Assets/Images/contact.png";
import mm from "../../Assets/Images/mm.png";
import adane from "../../Assets/Images/adane.png";
import { Container, Grid, Typography } from "@mui/material";

const index = () => {
  return (
    <Container
      style={{ justifyContent: "center", alignItems: "center" }}
      mb={20}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid mt={5} container justifyContent="center" xs={12}>
          <Typography variant="h3">
            My Recent
            <strong style={{ color: "#008080" }}> Works</strong>
          </Typography>
          <br />
        </Grid>
        <Grid xs={12} container justifyContent="center" mb={4} mt={1}>
          <Typography variant="h6">
            Here are a few projects I've recenty worked on.
          </Typography>
        </Grid>
        <Grid container spacing={2} justifyContent="center" id="proj">
          <Grid item xs={12} sm={6} mb={5}>
            <Grid container justifyContent="center">
              <ProjectCard
                imgPath={mm}
                title="Adane International Hotel"
                description="A fully functional deployed portfolio website for the notorious adane international HOtel."
                demoLink="https://adaneinternationalhotel.com/"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} mb={5}>
            <Grid container justifyContent="center">
              <ProjectCard
                imgPath={adane}
                title="MM Hotel"
                description="A fully functional deployed portfolio website MM Hotel."
                demoLink="https://mmhoteldire.com/"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} mb={5}>
            <Grid container justifyContent="center">
              <ProjectCard
                imgPath={bored}
                title="Boredom Reliever App"
                description="The Boredom Reliever App is an application designed to alleviate boredom and provide entertainment through jokes, insults, quotes, and memes. It utilizes various APIs to fetch and display content for a fun and engaging user experience."
                ghLink="https://github.com/DawitSishu/boredome-reliver"
                demoLink="https://boredome-reliver.web.app/"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} mb={5}>
            <Grid container justifyContent="center">
              <ProjectCard
                imgPath={code}
                title="Code Discussion App"
                description="The Code Discussion App is a collaborative platform for developers to engage in real-time code discussions.With real-time messaging, secure authentication, and a user-friendly interface, it's the perfect place to learn and discuss code."
                ghLink="https://github.com/DawitSishu/code-discussion"
                demoLink="https://code-discussion.vercel.app/"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} mb={5}>
            <Grid container justifyContent="center">
              <ProjectCard
                imgPath={contact}
                title="Contact Manager App"
                description="A modern and intuitive contact manager app developed with React.js and Material-UI. Seamlessly create, edit, and delete contacts, while also providing user account management and authentication. Stay organized and connected with this powerful React contact manager app."
                ghLink="https://github.com/DawitSishu/contact-manger-app-client"
                demoLink="https://contact-manager-app-8223f.web.app/"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default index;
