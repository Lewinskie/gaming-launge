import { Typography } from "@mui/material";
import { Phone, Person } from "@mui/icons-material";
import React from "react";

const Topnav = () => {
  const items = [
    {
      name: "Call",
      icon: <Phone />,
      desc: "tel:+254-705-313-785",
    },
    {
      name: "Login",
      icon: <Person />,
      desc: "Login",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        borderBottom: "1px solid #ccc",
      }}
    >
      {items.map((item) => (
        <div key={item.name} style={{ display: "flex" }}>
          <Typography>{item.icon}</Typography>
          &nbsp;&nbsp;
          <Typography>{item.desc}</Typography>
        </div>
      ))}
    </div>
  );
};

export default Topnav;
