import dotenv from "dotenv"
import {ApolloServer} from "apollo-server"
import typeDefs from "./graphql/typeDefs.js"
import resolvers from "./graphql/resolvers.js"
import mongoose from "mongoose";

dotenv.config()

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(process.env.mongodb_url).then(() => {
    console.log("Connected to database");
    server
  .listen({ port: 8000 })
  .then(({ url }) => console.log(`Server running at ${url}`));
})
