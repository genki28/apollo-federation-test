import { gql } from "apollo-server";

export const typeDefs = gql`
  type Post {
    id: Int
    title: String
    content: String
    user: User!
  }
  type DeleteResponse {
    result: Boolean
  }

  type Query {
    post(id: Int): Post
    posts: [Post]
  }

  type Mutation {
    addPost(title: String!, content: String!, userId: Int!): Post
  }

  extend type User @key(fields: "id") {
    id: Int! @external
  }
`
