import { QueryPostArgs, MutationAddPostArgs, Post } from './@types/graphql.d';
type DBTypes = {
  posts: Post[]
}

const DB: DBTypes = {
  posts: [
    { id: 1, title: 'foo', content: 'foooo', user: { id: 1 } },
    { id: 2, title: 'bar', content: 'baaaa', user: { id: 2 } },
    { id: 3, title: 'baz', content: 'bazzz', user: { id: 1 } },
  ],
};

export const resolvers = {
  Query: {
    post: (_: unknown, { id }: QueryPostArgs) => DB.posts.find((u) => u.id === id),
    posts: () => DB.posts
  },
  Mutation: {
    addPost: (_: unknown, { title, content, userId}: MutationAddPostArgs) => {
      const post = { id: DB.posts.length + 1, title, content, user: { id: userId }};
      DB.posts.push(post);
      return post;
    },
  },

  Post: {
    user(post: Post) {
      return { __typename: "User", id: post.user.id }
    }
  }
}
