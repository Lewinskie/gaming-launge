import { Data } from "../utils/data";
// import Slider from "react-slick";
import Tilts from "./TiltComponent";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import Paginations from "./Paginations";
import { useState } from "react";

export const PopularGames = () => {
  const popular = Data.filter(
    (item) =>
      item.category !== "accessories" &&
      item.category !== "consoles" &&
      item.category !== "Coming Soon"
  );
  // Paginations
  const upcoming = Data.filter((item) => item.category === "Coming Soon");
  console.log(upcoming);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const last = page * itemsPerPage;
  const first = last - itemsPerPage;
  const current = popular.slice(first, last);

  const handleClick = (pageNumber) => {
    setPage(pageNumber);
  };
  const count = popular.length;

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <Grid container>
        {current.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Tilts>
              <ProductCard img={item.img} info={item.info} title={item.title} />
            </Tilts>
          </Grid>
        ))}
      </Grid>
      <Paginations
        count={count}
        itemsPerPage={itemsPerPage}
        handleClick={handleClick}
      />
    </div>
  );
};

export const UpcomingGames = () => {
  const upcoming = Data.filter((item) => item.category === "Coming Soon");
  console.log(upcoming);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const last = page * itemsPerPage;
  const first = last - itemsPerPage;
  const current = upcoming.slice(first, last);

  const handleClick = (pageNumber) => {
    setPage(pageNumber);
  };
  const count = upcoming.length;

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <Grid container>
        {current.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Tilts>
              <ProductCard
                img={item.img}
                info={item.info}
                title={item.title}
                btn="pre-order"
              />
            </Tilts>
          </Grid>
        ))}
      </Grid>
      <Paginations
        count={count}
        itemsPerPage={itemsPerPage}
        handleClick={handleClick}
      />
    </div>
  );
};

export const AccessoriesAndConsoles = () => {
  const accessories = Data.filter(
    (item) => item.category === "accessories" && "consoles"
  );
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const last = page * itemsPerPage;
  const first = last - itemsPerPage;
  const current = accessories.slice(first, last);

  const handleClick = (pageNumber) => {
    setPage(pageNumber);
  };
  const count = accessories.length;

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <Grid container>
        {current.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Tilts>
              <ProductCard img={item.img} info={item.info} title={item.title} />
            </Tilts>
          </Grid>
        ))}
      </Grid>
      <Paginations
        count={count}
        itemsPerPage={itemsPerPage}
        handleClick={handleClick}
      />
    </div>
  );
};
