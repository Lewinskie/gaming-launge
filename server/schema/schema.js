const {
  GraphQLEnumType,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
} = require("graphql");
const Product = require("../models/Product");

const ProductType = new GraphQLObjectType({
  name: "Product",
  // fields are the data that is returned from the database
  fields: () => ({
    id: { type: GraphQLID },
    category: { type: GraphQLString },
    title: { type: GraphQLString },
    price: { type: GraphQLFloat },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

// Root query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // get all products
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent, args) {
        // return all products
        return Product.find();
      },
    },

    // get a single product
    product: {
      type: ProductType,
      // args is the data that is passed in the query
      // args.id is the id of the product
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Product.findById(args.id);
      },
    },

    // get products by category
    productsByCategory: {
      type: new GraphQLList(ProductType),
      // args is the data that is passed in the query
      // args.category is the category of the product
      args: { category: { type: GraphQLString } },
      resolve(parent, args) {
        return Product.find({ category: args.category });
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: "Mutation",

  // different types of mutations
  fields: {
    // create a new product
    addProduct: {
      type: ProductType,
      args: {
        category: {
          type: new GraphQLEnumType({
            name: "Categories",
            values: {
              ComingSoon: { value: "Coming Soon" },
              NowTrending: { value: "Now Trending" },
              BestRated: { value: "Best Rated" },
            },
          }),
        },
        title: { type: GraphQLString },
        price: { type: GraphQLFloat },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        genre: {
          type: new GraphQLEnumType({
            name: "Genres",
            values: {
              Action: { value: "Action" },
              Adventure: { value: "Adventure" },
              TacticalShooter: { value: "Tactical Shooter" },
              FirstPersonShooter: { value: "First Person Shooter" },
              Horror: { value: "Horror" },
              ActionAdventure: { value: "Action Adventure" },
              RPG: { value: "RPG" },
              Simulation: { value: "Simulation" },
              Strategy: { value: "Strategy" },
              Sports: { value: "Sports" },
              Racing: { value: "Racing" },
              Platformer: { value: "Platformer" },
              Puzzle: { value: "Puzzle" },
              Shooter: { value: "Shooter" },
              Arcade: { value: "Arcade" },
            },
          }),
        },
      },
      resolve(parent, args) {
        const product = new Product({
          category: args.category,
          title: args.title,
          price: args.price,
          description: args.description,
          image: args.image,
          genre: args.genre,
        });

        // return the new product
        return product.save();
      },
    },

    // delete a product
    deleteProduct: {
      type: ProductType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Product.findByIdAndRemove(args.id);
      },
    },

    // update a product
    updateProduct: {
      type: ProductType,
      // args is the data that is passed in the query.contains data that is to be updated

      args: {
        id: { type: GraphQLID },
        category: {
          type: new GraphQLEnumType({
            name: "updatedCategories",
            values: {
              ComingSoon: { value: "Coming Soon" },
              NowTrending: { value: "Now Trending" },
              BestRated: { value: "Best Rated" },
            },
          }),
        },
        title: { type: GraphQLString },
        price: { type: GraphQLFloat },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
        genre: {
          type: new GraphQLEnumType({
            name: "updatedGenres",
            values: {
              Action: { value: "Action" },
              Adventure: { value: "Adventure" },
              TacticalShooter: { value: "Tactical Shooter" },
              FirstPersonShooter: { value: "First Person Shooter" },
              Horror: { value: "Horror" },
              ActionAdventure: { value: "Action Adventure" },
              RPG: { value: "RPG" },
              Simulation: { value: "Simulation" },
              Strategy: { value: "Strategy" },
              Sports: { value: "Sports" },
              Racing: { value: "Racing" },
              Platformer: { value: "Platformer" },
              Puzzle: { value: "Puzzle" },
              Shooter: { value: "Shooter" },
              Arcade: { value: "Arcade" },
            },
          }),
        },
      },
      resolve(parent, args) {
        return Product.findByIdAndUpdate(
          args.id,
          {
            $set: {
              category: args.category,
              title: args.title,
              price: args.price,
              description: args.description,
              image: args.image,
              genre: args.genre,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
