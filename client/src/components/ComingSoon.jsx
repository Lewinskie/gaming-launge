import { Grid, Typography } from "@mui/material";
import { Data } from "../utils/data";
import Sliders from "./Sliders";
import ProductCard from "./ProductCard";
import Tilts from "./TiltComponent";
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  const isMobile = useMediaQuery("(max-width:599px)");
  const reduceHeight = useMediaQuery("(max-width:899px)");
  //filter data by category
  const categories = Data.filter((item) => item.category === "Coming Soon");
  // display only images
  const images = categories.map((item) => item.img);

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    dots: true,
  };
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "white", margin: "2rem 0rem 2rem 0rem" }}
        >
          Coming Soon
        </Typography>
        <Link to="/shop">view more products</Link>
      </Grid>
      <Grid
        item
        container
        style={{
          background: "rgba(255,255,255,0.2)",
          backdropFilter: "blur(10px)",
          padding: "2rem",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          style={{ padding: "0rem 0.5rem 2rem 0.5rem" }}
        >
          <Sliders sliderSettings={settings}>
            {images.map((image, index) => (
              <ProductCard
                image={image}
                height={reduceHeight ? "500px" : "700px"}
                key={index}
              />
            ))}
          </Sliders>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          container
          style={{
            border: "0.5px solid gray",
            borderRadius: "0.5rem",
            height: isMobile ? "fit-content" : "700px",
          }}
        >
          {categories.slice(0, 6).map((category) => (
            <Grid item xs={6} sm={4} md={4} key={category.id}>
              <Tilts>
                <ProductCard
                  id={category.id}
                  img={category.img}
                  title={category.title}
                  genre={category.genre}
                  price={category.price}
                  info={category.info}
                  btn="pre-order"
                  height="230px"
                  left="20px"
                  bottom="100px"
                />
              </Tilts>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ComingSoon;
