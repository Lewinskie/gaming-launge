import { Typography } from "@mui/material";
import React from "react";
import { Btn } from "../utils/Btns";
import { Data } from "../utils/data";
import ProductCard from "./ProductCard";
import Sliders from "./Sliders";
import Tilt from "react-parallax-tilt";
import { useMediaQuery } from "@mui/material";

const ProdCategories = () => {
  const isMobile = useMediaQuery("(max-width:750px)");
  const categories = Data.map((item) => item.category);
  const uniqueCategories = [...new Set(categories)];
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
        },
      },
    ],
  };
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.2)",
        backdropFilter: "blur(10px)",
        padding: "1rem",
        borderRadius: "0.5rem",
        marginTop: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {uniqueCategories.map((category) => (
          <Btn key={category}>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                "&:hover": {
                  color: "gray",
                  cursor: "pointer",
                },
              }}
            >
              {category}
            </Typography>
          </Btn>
        ))}
      </div>
      <div style={{ paddingBottom: "1rem" }}>
        <Sliders sliderSettings={settings}>
          {Data.map((item) => (
            <Tilt key={item.id}>
              <ProductCard
                top="275px"
                left="20px"
                img={item.img}
                info={item.info}
                genre={item.genre}
                title={item.title}
                price={item.price}
              />
            </Tilt>
          ))}
        </Sliders>
      </div>
    </div>
  );
};

export default ProdCategories;
