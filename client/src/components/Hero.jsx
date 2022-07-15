import { Grid } from "@mui/material";
import "../styles/components/Hero.css";
import Contact from "../utils/Contact";
import SearchInput from "../utils/SearchInput";

const Hero = () => {
  return (
    <Grid container className="hero">
      <Grid item xs={4}>
        <Contact />
      </Grid>
      <Grid item xs={4}>
        <SearchInput
          style={{
            color: "black",
            background: "#6a6a6b",
            borderRadius: "0.5rem",
          }}
          size="small"
          placeholder=" Search"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default Hero;
