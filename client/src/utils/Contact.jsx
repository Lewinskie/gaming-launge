import { Grid, Typography } from "@mui/material";
import { Call } from "@mui/icons-material";
import React from "react";

const Contact = () => {
  return (
    <Grid container>
      <Grid item xs={1} style={{ display: "flex", justifyContent: "center" }}>
        <Call />
      </Grid>
      <Grid item xs={11}>
        <Typography className="tracking-in-contract-bck">
          Call: +254 705 313 785{" "}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Contact;
