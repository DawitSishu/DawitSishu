import React from "react";
import { Grid,Box } from "@mui/material";
import {
    SiVisualstudiocode,
    SiPostman,
    SiVercel,
  } from "react-icons/si";
import { FaLinux } from 'react-icons/fa'

function ToolStack() {
  return (
    <Grid container justifyContent="center" sx={{ paddingBottom: "50px" }} spacing={5}>
        <Grid item xs={4} md={2} mb={5} >
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
            <FaLinux style={{height:'50%',width:'50%'}}/>
        </Box>
        </Grid>
            </Grid>
      <Grid item xs={4} md={2} mb={5} sx={{ textAlign: "center" }}>
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
            <SiVisualstudiocode style={{height:'50%',width:'50%'}}/>
        </Box>
      </Grid>
      </Grid>
      <Grid item xs={4} md={2} mb={5} sx={{ textAlign: "center" }}>
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
            <SiPostman style={{height:'50%',width:'50%'}}/>
        </Box>
      </Grid>
      </Grid>
      <Grid item xs={4} md={2} mb={5} sx={{ textAlign: "center" }}>
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
            <SiVercel style={{height:'50%',width:'50%'}}/>
        </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ToolStack;