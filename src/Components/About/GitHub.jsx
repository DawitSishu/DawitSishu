import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Grid,Typography } from "@mui/material";

function Github() {
  return (
    <Grid container justifyContent='center' mb={5}>
          <GitHubCalendar
                username="DawitSishu"
                blockSize={15}
                blockMargin={5}
                fontSize={16}
            /> 
    </Grid>
  );
}

export default Github;