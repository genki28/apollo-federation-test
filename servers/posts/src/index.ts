import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { buildFederatedSchema } from "@apollo/federation";

const server = new ApolloServer({
  schema: buildFederatedSchema([{typeDefs}]),
  resolvers: resolvers
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀Server ready at ${url}`)
})