// import { ApolloServer } from "apollo-server-micro";
import { ApolloServer } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

const PORT = 8080;

export const config = {
  api: {
    bodyParser: false,
  }
}

const gateway = new ApolloGateway({
  serviceList: [
    { name: "posts", url: "http://localhost:4001" },
    { name: "users", url: "http://localhost:4002" },
  ],
});

const server = new ApolloServer({
  gateway,
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀Server ready at ${url}`)
})
