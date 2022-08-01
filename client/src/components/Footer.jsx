import { Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  const socials = [
    { name: "Facebook", icon: <Facebook />, to: "https://www.facebook.com/" },
    {
      name: "Instagram",
      icon: <Instagram />,
      to: "https://www.instagram.com/",
    },
    { name: "LinkedIn", icon: <LinkedIn />, to: "https://www.linkedin.com/" },
    { name: "Twitter", icon: <Twitter />, to: "https://www.twitter.com/" },
    { name: "Youtube", icon: <YouTube />, to: "https://www.youtube.com/" },
  ];
  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Shop", to: "/shop" },
    { name: "Cart", to: "/cart" },
  ];
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        style={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Logo />
        <Typography sx={{ color: "gray" }}>
          fulfilling your gaming needs
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        style={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" style={{ color: "white" }}>
          FOLLOW US
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          {socials.map((item) => (
            <Typography
              variant="h3"
              key={item.name}
              sx={{
                color: "white",
                marginBottom: "0.5rem",
                textDecoration: "none",
                "&:hover": {
                  cursor: "pointer",
                  color: "white",
                  transform: "scale(1.1) translateY(-0.2rem)",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              <a href={item.to}>{item.icon}</a>
            </Typography>
          ))}
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        style={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          style={{ color: "white", marginBottom: "1rem" }}
        >
          USEFUL LINKS
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: "0.5rem",
            width: "100%",
          }}
        >
          {links.map((item) => (
            <Typography
              key={item.name}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  color: "white",
                  transform: "scale(1.1) translateY(-0.2rem)",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              <Link to={item.to}>{item.name}</Link>
            </Typography>
          ))}
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          marginTop: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Typography>
          lewinskie © {new Date().getFullYear()} - All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
