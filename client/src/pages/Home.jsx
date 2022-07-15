import { Grid } from "@mui/material";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import "../styles/pages/Home.css";
const Home = () => {
  return (
    <Grid container className="home">
      <Grid item xs={12}>
        <Hero />
      </Grid>
      <Grid item xs={12} style={{ height: "600px" }}>
        <Offers />
      </Grid>
    </Grid>
  );
};

export default Home;
