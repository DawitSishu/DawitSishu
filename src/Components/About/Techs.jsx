import React from "react";
import { Grid,Box } from "@mui/material";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiFlutter
} from "react-icons/si";
import { FaDocker } from "react-icons/fa";

function Techstack() {
  return (
    <Grid container justifyContent="center" sx={{ paddingBottom: "50px" }} >
        <Grid item xs={6} md={4} mb={5} >
        <Grid container justifyContent="center">
        <Box
            sx={{
                width: 180,
                height: 180,
                borderRadius: 5,
            backdropFilter: 'blur(55px)',
            backgroundColor: 'transparent',
            elevation:3,
            boxShadow: '0 0 10px #008080',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            <DiJavascript1 style={{height:'50%',width:'50%'}}/>
        </Box>
        </Grid>
            </Grid>
      <Grid item xs={6} md={4} mb={5} sx={{ textAlign: "center" }}>
      <Grid container justifyContent="center">
        <Box
            sx={{
                width: 180,
                height: 180,
                borderRadius: 5,
            backdropFilter: 'blur(55px)',
            backgroundColor: 'transparent',
            elevation:3,
            boxShadow: '0 0 10px #008080',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            <DiNodejs style={{height:'50%',width:'50%'}}/>
        </Box>
      </Grid>
      </Grid>
      <Grid item xs={6} md={4} mb={5} sx={{ textAlign: "center" }}>
      <Grid container justifyContent="center">
        <Box
            sx={{
                width: 180,
                height: 180,
                borderRadius: 5,
            backdropFilter: 'blur(55px)',
            backgroundColor: 'transparent',
            elevation:3,
            boxShadow: '0 0 10px #008080',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            <DiReact style={{height:'50%',width:'50%'}}/>
        </Box>
      </Grid>
      </Grid>
      <Grid item xs={6} md={4} mb={5} sx={{ textAlign: "center" }}>
      <Grid container justifyContent="center">
        <Box
            sx={{
                width: 180,
                height: 180,
                borderRadius: 5,
            backdropFilter: 'blur(55px)',
            backgroundColor: 'transparent',
            elevation:3,
            boxShadow: '0 0 10px #008080',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            <DiMongodb style={{height:'50%',width:'50%'}}/>
        </Box>
        </Grid>
      </Grid>
      <Grid item xs={6} md={4} mb={5} sx={{ textAlign: "center" }}>
      <Grid container justifyContent="center">
        <Box
            sx={{
                width: 180,
                height: 180,
                borderRadius: 5,
            backdropFilter: 'blur(55px)',
            backgroundColor: 'transparent',
            elevation:3,
            boxShadow: '0 0 10px #008080',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            <DiGit style={{height:'50%',width:'50%'}}/>
        </Box>
      </Grid>
      </Grid>
      <Grid item xs={6} md={4} mb={5} sx={{ textAlign: "center" }}>
      <Grid container justifyContent="center">
        <Box
            sx={{
                width: 180,
                height: 180,
                borderRadius: 5,
            backdropFilter: 'blur(55px)',
            backgroundColor: 'transparent',
            elevation:3,
            boxShadow: '0 0 10px #008080',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            <SiFirebase style={{height:'50%',width:'50%'}}/>
        </Box>
        </Grid>
      </Grid>
      <Grid item xs={6} md={4} mb={5} sx={{ textAlign: "center" }}>
      <Grid container justifyContent="center">
        <Box
            sx={{
                width: 180,
                height: 180,
                borderRadius: 5,
            backdropFilter: 'blur(55px)',
            backgroundColor: 'transparent',
            elevation:3,
            boxShadow: '0 0 10px #008080',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            <SiFlutter style={{height:'50%',width:'50%'}}/>
        </Box>
        </Grid>
      </Grid>
      <Grid item xs={6} md={4} mb={5} sx={{ textAlign: "center" }}>
      <Grid container justifyContent="center">
        <Box
            sx={{
                width: 180,
                height: 180,
                borderRadius: 5,
            backdropFilter: 'blur(55px)',
            backgroundColor: 'transparent',
            elevation:3,
            boxShadow: '0 0 10px #008080',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            <FaDocker style={{height:'50%',width:'50%'}}/>
        </Box>
      </Grid>
      </Grid>
    </Grid>
  );
}

export default Techstack;