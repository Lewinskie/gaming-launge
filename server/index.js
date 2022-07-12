const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
// Graphql schema
const schema = require("./schema/schema");
const port = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`> Server is up and running on port ${port}`);
});
