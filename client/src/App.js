import { Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import "./app.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SecondNav from "./components/SecondNav";
import { Hr } from "./utils/Hr";

function App() {
  return (
    <Grid container className="container">
      <Grid item xs={12} style={{ height: "fit-content" }}>
        <Navbar />
      </Grid>
      <Grid item xs={12} className="hideNavBar">
        <SecondNav />
      </Grid>
      <Grid item xs={12}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Grid>
      <Grid item xs={12}>
        <Hr />
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
