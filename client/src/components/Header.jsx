import "../styles/components/Header.css";
import { AppBar, Grid, Toolbar } from "@mui/material";
import Logo from "./Logo";
import { Links } from "../utils/Links";

const Header = () => {
  return (
    <div className="header flicker-in-1">
      <AppBar style={{ background: "black" }} position="static">
        <Toolbar className="toolBar">
          <Grid container spacing={3}>
            <Grid item xs={3} sm={3}>
              <Logo />
            </Grid>
            <Grid item xs={9} sm={9} style={{ display: "flex" }}>
              <Links className="navLink" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
