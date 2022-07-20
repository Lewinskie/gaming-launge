import { Grid } from "@mui/material";
import { useMediaQuery, Typography } from "@mui/material";
import "./offers.css";
import { Data } from "../utils/data";
import { Btn } from "../utils/Btns";
import { ArrowForwardIos } from "@mui/icons-material";
import Categories from "./Categories";

const Offers = () => {
  const notMobile = useMediaQuery("(min-width:1200px)");
  const hideCategories = useMediaQuery("(max-width:899px)");

  return (
    <Grid container style={{ height: "600px" }} spacing={1}>
      <Grid
        item
        md={4}
        lg={4}
        xl={4}
        style={{
          width: "100%",
          height: "600px",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          alignItems: "center",
          display: hideCategories ? "none" : "flex",
        }}
      >
        <Categories />
      </Grid>
      <Grid
        container
        spacing={1}
        item
        xs={12}
        sm={12}
        md={8}
        lg={8}
        xl={8}
        style={{ height: "600px", width: "100%" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          style={{
            width: "100%",
            height: notMobile ? "600px" : "350px",
            margin: 0,
          }}
        >
          {Data.map(
            (item, index) =>
              index === 0 && (
                <div
                  className="item"
                  key={index}
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <div style={{ position: "absolute", top: "40%", left: "2%" }}>
                    <Typography style={{ fontWeight: "bold" }}>
                      PRE-ORDER NOW
                    </Typography>
                    <Typography variant="h3" style={{ color: "#fff" }}>
                      {item.title}
                    </Typography>
                    <Btn
                      sx={{
                        bgcolor: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        color: "black",
                        marginTop: "1rem",
                      }}
                    >
                      Buy now&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <ArrowForwardIos />
                    </Btn>
                  </div>
                </div>
              )
          )}
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          style={{
            display: "flex",
            width: "100%",
            height: notMobile ? "600px" : "245px",
            flexDirection: notMobile ? "column" : "row",
          }}
        >
          {Data.map((item, index) =>
            index === 1 ? (
              <div
                key={index}
                style={{
                  position: "relative",
                  width: "100%",
                  padding: "0.2rem",
                }}
                className="item"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: notMobile ? "290px" : "245px",
                    borderRadius: "0.5rem",
                  }}
                />
                <div style={{ position: "absolute", top: "20%", left: "2%" }}>
                  <Typography style={{ color: "black", fontSize: "bold" }}>
                    WEEKEND OFFER
                  </Typography>
                  <Typography variant="h5" sx={{ color: "white" }}>
                    {item.title}
                  </Typography>
                  <Typography>save&nbsp;{item.discount}% off</Typography>
                  <Btn
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(10px)",
                      color: "black",
                      marginTop: "1rem",
                    }}
                  >
                    Buy now&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <ArrowForwardIos />
                  </Btn>
                </div>
              </div>
            ) : (
              index === 2 && (
                <div
                  className="item"
                  key={index}
                  style={{
                    position: "relative",
                    width: "100%",
                    padding: "0.2rem",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: notMobile ? "290px" : "245px",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <div style={{ position: "absolute", top: "20%", left: "2%" }}>
                    <Typography variant="h5" sx={{ color: "white" }}>
                      {item.title}
                    </Typography>

                    <Btn
                      sx={{
                        bgcolor: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        color: "black",
                        marginTop: "1rem",
                      }}
                    >
                      Buy now&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <ArrowForwardIos />
                    </Btn>
                  </div>
                </div>
              )
            )
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Offers;
