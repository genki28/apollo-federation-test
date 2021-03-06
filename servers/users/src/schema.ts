import { gql } from "apollo-server";

export const typeDefs = gql`
  type User @key(fields: "id") {
    id: Int!
    name: String!
  }

  type Query {
    user(id: Int): User
    users: [User]
  }

  type Mutation {
    addUser(name: String!): User
  }
`
