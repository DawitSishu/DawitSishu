import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  OutlinedInput,
  InputLabel,
  Button,
} from "@mui/material";
import { AiOutlineSend } from "react-icons/ai";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Loader from "../Spinner/Spinner";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [waiting, setWaiting] = useState(false);

  const handleUserData = async (data) => {
    setWaiting(true);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      alert("Please provide a valid email!!");
      return;
    }
    try {
      const response = await emailjs.send(
        "service_go8gr4u",
        "template_iy26d4b",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "sbZ4_ZBdtoGSG8K_K"
      );
      alert("message successfully sent, I'll get back to you soon!");
    } catch (error) {
      alert("ERROR: Please try again!!");
    }
    setWaiting(false);
  };

  return waiting ? (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center'
    }}>
      <Loader />
    </div>
  ) : (
    <Box
      component="form"
      onSubmit={handleSubmit(handleUserData)}
      sx={{
        // position: 'relative'
        padding: 3,
        borderRadius: 5,
        backdropFilter: "blur(55px)",
        backgroundColor: "transparent",
        // backgroundColor: 'rgba(0, 0, 0, 0.1)', // or 2555 make it white
        elevation: 3,
        boxShadow: "0 0 10px #008080",
        // display: 'flex',
        // flexDirection:'column',
        // alignItems: 'flex-start',
        // position:'absolute',
        height: "100%",
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h5" mb={1}>
            Get in Touch
          </Typography>
          <strong>
            <Typography
              variant="h3"
              mb={5}
              sx={{ color: "#008080", fontWeight: "bold" }}
            >
              Contact.
            </Typography>
          </strong>
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="Name">
            <Typography variant="body1" mb={1} sx={{ fontWeight: "bold" }}>
              Name
            </Typography>
          </InputLabel>
          <OutlinedInput
            fullWidth={true}
            placeholder="what is your Name?"
            id="Name"
            {...register("name", { required: "Name can't be empty" })}
          />
          {errors.name ? (
            <Typography color="error" variant="h7">
              {errors.name.message}
            </Typography>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="Email">
            <Typography
              variant="body1"
              mb={1}
              mt={2}
              sx={{ fontWeight: "bold" }}
            >
              Email
            </Typography>
          </InputLabel>
          <OutlinedInput
            fullWidth={true}
            placeholder="what is your Email?"
            id="Email"
            {...register("email", { required: "Email can't be empty" })}
          />
          {errors.email ? (
            <Typography color="error" variant="h7">
              {errors.email.message}
            </Typography>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="Message">
            <Typography
              variant="body1"
              mb={1}
              mt={2}
              sx={{ fontWeight: "bold" }}
            >
              Your Message
            </Typography>
          </InputLabel>
          <OutlinedInput
            fullWidth={true}
            placeholder="what do you want to say?"
            id="Message"
            multiline
            rows={4}
            {...register("message", { required: "Message can't be empty" })}
          />
          {errors.message ? (
            <Typography color="error" variant="h7">
              {errors.message.message}
            </Typography>
          ) : null}
        </Grid>
      </Grid>
      <Button
        sx={{ marginTop: 3 }}
        variant="contained"
        color="primary"
        startIcon={<AiOutlineSend />}
        type="submit"
      >
        Send
      </Button>
    </Box>
  );
};

export default ContactForm;
