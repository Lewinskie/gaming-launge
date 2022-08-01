import React from "react";
import SearchInput from "../utils/SearchInput";
import { Btn } from "../utils/Btns";
import { Grid, Typography } from "@mui/material";

const Newsletter = () => {
  return (
    <div style={{ margin: "2rem" }}>
      <Grid container>
        <Grid item xs={12} style={{ padding: "0.5rem", marginBottom: "1rem" }}>
          <Typography variant="h5">JOIN OUR NEWSLETTER</Typography>
        </Grid>
        <Grid item xs={12} style={{ padding: "0.5rem" }}>
          <Typography sx={{ color: "gray" }}>
            Subscribe to get more information about products and coupons
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} style={{ padding: "0.5rem" }}>
          <SearchInput fullWidth placeholder="Enter Email Address" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          style={{
            padding: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Btn
            sx={{
              bgcolor: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              color: "#B59A04",
            }}
            fullWidth
          >
            Subscribe
          </Btn>
        </Grid>
      </Grid>
    </div>
  );
};

export default Newsletter;
