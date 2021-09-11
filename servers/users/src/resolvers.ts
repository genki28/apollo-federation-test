import { MutationAddUserArgs, User } from './@types/graphql.d';
import { QueryUserArgs } from "./@types/graphql";

type DBTypes = {
  users: User[]
}

export const DB: DBTypes = {
  users: [
    { id: 1, name: "taro" },
    { id: 2, name: "jiro" },
  ],
};

export const resolvers = {
  Query: {
    users: () => DB.users,
    user: (_: unknown, params: QueryUserArgs) => {
      const id = params.id;
      return DB.users.find((u) => u.id === id)
    }
  },
  Mutation: {
    addUser: (_: unknown, params: MutationAddUserArgs) => {
      const name = params.name;
      const user = { id: DB.users.length + 1, name};
      DB.users.push(user);
      return user;
    }
  },
  User: {
    __resolveReference(user: User) {
      return DB.users.find((u) => u.id === user.id);
    },
  },
};
