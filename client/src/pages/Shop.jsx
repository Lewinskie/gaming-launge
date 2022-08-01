import { Typography } from "@mui/material";
import SearchInput from "../utils/SearchInput";
import { useMediaQuery } from "@mui/material";
import { Btn } from "../utils/Btns";
import {
  AccessoriesAndConsoles,
  PopularGames,
  UpcomingGames,
} from "../components/ShopCategories";

const Shop = () => {
  //search
  //popular games
  //upcoming games
  //accessories and consoles
  const smallScreen = useMediaQuery("(max-width:768px)");

  // console.log(Data.map((item) => item.category));

  return (
    <div>
      <div
        style={{
          display: smallScreen ? "flex" : "none",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <SearchInput placeholder="Search" />
        <Btn style={{ marginLeft: "1rem" }} sx={{ color: "#B59A03" }}>
          Search Shop
        </Btn>
      </div>
      <div style={{ padding: "2rem" }}>
        <Typography variant="h4" style={{ marginTop: "1rem" }}>
          POPULAR GAMES
        </Typography>
        <PopularGames />
      </div>
      <div style={{ padding: "2rem" }}>
        <Typography variant="h4" style={{ marginTop: "1rem" }}>
          UPCOMING GAMES
        </Typography>
        <UpcomingGames />
      </div>
      <div style={{ padding: "2rem" }}>
        <Typography variant="h4" style={{ marginTop: "1rem" }}>
          ACCESSORIES
        </Typography>
        <AccessoriesAndConsoles />
      </div>
    </div>
  );
};

export default Shop;
