import React from 'react';
import { Box, Typography,Grid,OutlinedInput,InputLabel,Button } from '@mui/material';
import { AiOutlineSend } from 'react-icons/ai';


const ContactForm = () => {
  return (
    <Box
        sx={{
            // position: 'relative'
            padding:3,
            borderRadius: 5,
            backdropFilter: 'blur(55px)',
            backgroundColor: 'transparent',
            // backgroundColor: 'rgba(0, 0, 0, 0.1)', // or 2555 make it white
            elevation:3,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            // display: 'flex',
            // flexDirection:'column',
            // alignItems: 'flex-start',
            // position:'absolute',
            height:'100%',
        }}
    >
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='h5' mb={1}>Get in Touch</Typography>
                <strong><Typography variant='h3' mb={5} sx={{color:'#008080',fontWeight:'bold'}}>Contact.</Typography></strong>
            </Grid>
            <Grid item xs={12}>
                <InputLabel htmlFor="Name">
                    <Typography variant='body1' mb={1} sx={{fontWeight:'bold'}}>Name</Typography>
                </InputLabel>
                <OutlinedInput
                    fullWidth={true}
                    placeholder="what is your Name?"
                    id="Name"
                />
            </Grid>
            <Grid item xs={12}>
                <InputLabel htmlFor="Email">
                    <Typography variant='body1' mb={1} mt={2} sx={{fontWeight:'bold'}}>Email</Typography>
                </InputLabel>
                <OutlinedInput
                    fullWidth={true}
                    placeholder="what is your Email?"
                    id="Email"
                />
            </Grid>
            <Grid item xs={12}>
                <InputLabel htmlFor="Message">
                    <Typography variant='body1' mb={1} mt={2} sx={{fontWeight:'bold'}}>Your Message</Typography>
                </InputLabel>
                <OutlinedInput
                    fullWidth={true}
                    placeholder="what do you want to say?"
                    id="Message"
                    multiline
                    rows={4}
                />
            </Grid>
        </Grid>
        <Button
            sx={{marginTop:3}}
            variant="contained"
            color="primary"
            startIcon={<AiOutlineSend />}
        >
            Send
        </Button>
    </Box>
  )
}

export default ContactForm