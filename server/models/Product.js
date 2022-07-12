const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["Coming Soon", "Now Trending", "Best Rated"],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: [
        "Action",
        "Adventure",
        "Tactical Shooter",
        "First Person Shooter",
        "Horror",
        "Action Adventure",
        "RPG",
        "Simulation",
        "Strategy",
        "Sports",
        "Racing",
        "Platformer",
        "Puzzle",
        "Shooter",
        "Arcade",
      ],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
