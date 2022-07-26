import React from "react";
import {
  RocketLaunch,
  RotateLeft,
  ErrorOutline,
  Support,
} from "@mui/icons-material";
import { Typography } from "@mui/material";

const Banner = () => {
  const items = [
    {
      name: "Free Shipping",
      description: "On orders over $100",
      icon: <RocketLaunch sx={{ height: "40px", width: "40px" }} />,
    },
    {
      name: "Free Returns",
      description: "We accept returns within 7 days",
      icon: <RotateLeft sx={{ height: "40px", width: "40px" }} />,
    },
    {
      name: "20% off 1st purchase",
      description: "When you sign up",
      icon: <ErrorOutline sx={{ height: "40px", width: "40px" }} />,
    },
    {
      name: "24/7 Support",
      description: "We are here to help",
      icon: <Support sx={{ height: "40px", width: "40px" }} />,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        padding: "1rem",
        justifyContent: "center",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        marginTop: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            width: "300px",
            margin: "0.5rem",
          }}
        >
          {item.icon}&nbsp;&nbsp;
          <div>
            <Typography variant="h5" sx={{ color: "black" }}>
              {item.name}
            </Typography>
            <Typography style={{ color: "#DED1C9" }}>
              {item.description}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
