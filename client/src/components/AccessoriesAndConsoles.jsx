import { Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
// import { Btn } from "../utils/Btns";
import { Data } from "../utils/data";
import ProductCard from "./ProductCard";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const AccessoriesAndConsoles = () => {
  // Here we filtered out the products that are in the category "Accessories and Consoles"
  const filteredData = Data.filter(
    (item) => item.category === "accessories" || item.category === "consoles"
  );
  console.log(filteredData);
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
  const tiltSettings = {
    glare: true,
    maxGlare: 1,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 1000,
    flipHorizontal: true,
  };

  return (
    <div style={{ padding: "3rem" }}>
      <div
        style={{
          margin: "2rem 0rem 2rem 0rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h5">ACCESSORIES & CONSOLES</Typography>
        <Typography>
          <Link to="/shop">view more products</Link>
        </Typography>
      </div>

      <div>
        <Slider {...settings}>
          {filteredData.map((item) => (
            <Tilt {...tiltSettings}>
              <div
                style={{
                  margin: "0.5rem",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(5px)",
                  borderRadius: "0.5rem",
                }}
              >
                <ProductCard
                  key={item.id}
                  height="250px"
                  img={item.img}
                  border="1px solid #ccc"
                  price={item.price}
                  title={item.title}
                  info={item.info}
                  bottom="70px"
                  left="5px"
                />
              </div>
            </Tilt>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AccessoriesAndConsoles;
