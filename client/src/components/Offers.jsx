import { Grid } from "@mui/material";
import React from "react";
import "./offers.css";

const Offers = () => {
  return (
    <Grid container style={{ height: "100vh" }}>
      <Grid
        className="categories"
        item
        md={4}
        lg={4}
        xl={4}
        style={{
          width: "100%",
          background: "pink",
          minHeight: "50vh",
          maxHeight: "80vh",
        }}
      >
        <h1>Offers</h1>
      </Grid>
      <Grid container item xs={12} sm={12} md={8} lg={8} xl={8}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          style={{ background: "red", minHeight: "50vh" }}
        >
          <h1>Offers</h1>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className="offersInner"
          style={{
            display: "flex",
            width: "100%",
            maxHeight: "80vh",
            minHeight: "30vh",
            direction: "row",
          }}
        >
          <div style={{ background: "blue", width: "100%", height: "100%" }}>
            <h2>Offers</h2>
          </div>
          <div style={{ background: "yellow", width: "100%", height: "100%" }}>
            <h3>Offers</h3>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Offers;
