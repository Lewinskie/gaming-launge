import { Lightbulb } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./secondNav.css";

const SecondNav = () => {
  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Shop",
      to: "/shop",
    },
    {
      name: "Cart",
      to: "/cart",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backdropFilter: "blur(10px)",
        padding: "1.5rem",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
      }}
    >
      {links.map(({ name, to }) => {
        return (
          <Link
            to={to}
            key={name}
            sx={{ textDecoration: "none" }}
            className="links"
          >
            <Typography
              variant="h6"
              className="links"
              style={{ color: "#434E5A" }}
            >
              {name}
            </Typography>
          </Link>
        );
      })}
      <div style={{ height: "30px", border: "solid 1px white" }} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Lightbulb className="bulb" />
        &nbsp;&nbsp;
        <Typography variant="h6" style={{ color: "#434E5A" }}>
          Clearance up to 30% Off
        </Typography>
      </div>
    </div>
  );
};

export default SecondNav;
