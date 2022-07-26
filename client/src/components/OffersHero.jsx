import { Grid } from "@mui/material";
import React from "react";
import { Data } from "../utils/data";
import { Btn } from "../utils/Btns";
import { ArrowForwardIos } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

const OffersHero = () => {
  const notMobile = useMediaQuery("(min-width:899px)");
  return (
    <Grid container spacing={2} style={{ paddingTop: "1rem" }}>
      {Data.map((item, index) =>
        index === 3 ? (
          <Grid
            item
            key={index}
            sm={4}
            md={5}
            lg={5}
            xl={5}
            style={{
              width: "100%",
              height: "200px",
              display: notMobile ? "block" : "none",
              position: "relative",
            }}
            sx={{
              ":hover": {
                transform: "scale(0.98) ",
                transition: "all 0.3s ease-in-out",
                cursor: "pointer",
              },
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%",
                objectFit: "cover",
                height: "100%",
                borderRadius: "0.5rem",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "5%",
                left: "5%",
              }}
            >
              <Btn
                style={{
                  color: "black",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                Buy now&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <ArrowForwardIos />
              </Btn>
            </div>
          </Grid>
        ) : (
          index === 4 && (
            <Grid
              key={index}
              item
              xs={12}
              sm={12}
              md={7}
              style={{ width: "100%", height: "200px", position: "relative" }}
              sx={{
                ":hover": {
                  transform: "scale(0.98) ",
                  transition: "all 0.3s ease-in-out",
                  cursor: "pointer",
                },
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  height: "100%",
                  borderRadius: "0.5rem",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "5%",
                  left: "5%",
                }}
              >
                <Btn
                  style={{
                    color: "black",
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Buy now&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <ArrowForwardIos />
                </Btn>
              </div>
            </Grid>
          )
        )
      )}
    </Grid>
  );
};

export default OffersHero;
