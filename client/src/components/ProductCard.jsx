import { ShoppingCart } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import { Btn } from "../utils/Btns";

const ProductCard = ({
  id,
  height,
  image,
  img,
  title,
  genre,
  price,
  info,
  btn,
  bottom,
  left,
  right,
  top,
}) => {
  return (
    <div
      style={{
        padding: "0.5rem",
        position: "relative",
      }}
    >
      {image ? (
        <div style={{ height: height }}>
          <img
            src={image}
            alt="title"
            height={height}
            style={{
              height: height,
              width: "100%",
              objectFit: "cover",
              borderRadius: "0.2rem",
            }}
          />
        </div>
      ) : (
        <>
          <div
            style={{
              height: height ? height : "300px",
              padding: "0.5rem",
              position: "relative",
            }}
          >
            <img
              src={img}
              alt={title}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "0.2rem",
              }}
            />
          </div>
          <div style={{ position: "relative" }}>
            <Typography sx={{ color: "gray" }}>{genre}</Typography>

            <Typography style={{ marginTop: "0.5rem" }}>{title}</Typography>

            <Typography>{price}</Typography>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: bottom ? bottom : "10%",
              left: left ? left : "5%",
              top: top,
              right: right,
            }}
          >
            {btn ? (
              <Btn
                sx={{
                  color: "black",
                  bgcolor: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                }}
                size="small"
              >
                <ShoppingCart />
              </Btn>
            ) : (
              <Btn
                sx={{
                  color: "black",
                  bgcolor: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                buy now&nbsp;&nbsp;
                <ShoppingCart />
              </Btn>
            )}
          </div>

          <div
            style={{
              position: "absolute",
              top: "6%",
              left: left ? left : "5%",
              background: "#610813",
              padding: "0.2rem",
              borderRadius: "0.2rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography variant="caption" sx={{ color: "white" }}>
              {info}
            </Typography>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
