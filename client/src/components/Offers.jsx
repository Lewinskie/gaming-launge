import React from "react";
import { Grid } from "@mui/material";
import { Data } from "../utils/data";
import "../styles/components/Offers.css";
import { useMediaQuery } from "@mui/material";

const Offers = () => {
  const notMobile = useMediaQuery("(min-width:900px)");

  return (
    <Grid
      container
      className="container"
      spacing="2"
      style={{
        height: "100%",
        width: "100%",
        padding: "1rem",
        overflow: "hidden",
      }}
    >
      {Data.map((item, index) => {
        return (
          index === 0 && (
            <Grid
              item
              className="first flicker-in-1 background"
              key={index}
              xs={12}
              sm={12}
              md={7}
              lg={7}
              xl={7}
              style={{
                minHeight: "70%",
                maxHeight: "100%",
                width: "100%",
                background: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no repeat",
                borderRadius: "0.5rem",
                // overflow: "hidden",
              }}
            />
          )
        );
      })}
      <Grid
        item
        className="second bounce-in-top "
        xs={12}
        sm={12}
        md={5}
        lg={5}
        xl={5}
        style={{
          minHeight: "30%",
          maxHeight: "100%",
          width: "100%",
          display: "flex",
          flexDirection: notMobile ? "column" : "row",
        }}
      >
        {Data.map((item, index) => {
          return index === 1 ? (
            <div
              className="secondInner"
              key={index}
              style={{
                height: "100%",
                width: "100%",
                background: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no repeat",
                margin: "0.5px",
                borderRadius: "0.5rem",
              }}
            />
          ) : (
            index === 2 && (
              <div
                className="secondInner"
                key={index}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "scale-down",
                  background: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  backgroundRepeat: "no repeat",
                  margin: "0.5px",
                  borderRadius: "0.5rem",
                }}
              />
            )
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Offers;
