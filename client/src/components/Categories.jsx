import { Typography } from "@mui/material";
import { Data } from "../utils/data";

const Categories = () => {
  // get categoies from Data array
  const categories = Data.map((item) => item.category);

  // remove duplicates from categories array
  const uniqueCategories = [...new Set(categories)];
  console.log(uniqueCategories);

  return (
    <div
      style={{
        backdropFilter: "blur(10px)",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <Typography variant="h4" style={{ color: "white", marginBottom: "2rem" }}>
        Browse categories
      </Typography>

      {uniqueCategories.map((item, index) => (
        <div key={index} style={{ marginBottom: "0.5rem" }}>
          <Typography
            variant="h6"
            style={{
              padding: "0.5rem",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "0.3rem",
            }}
            sx={{
              "&:hover": {
                cursor: "pointer",
                transform: "scale(1.1) translateY(-0.2rem)",
                transition: "all 0.3s ease-in-out",
              },
            }}
          >
            {item}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default Categories;
