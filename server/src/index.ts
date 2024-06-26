import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";

const app: Application = express();
const port = 9000;

const server = new ApolloServer({ typeDefs, resolvers});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app, path: "/api" });

  app.listen(port, () => {
    console.log(`[app] : http://localhost:${port}`);
  });
}

startServer();
