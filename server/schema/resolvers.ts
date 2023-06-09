import { UserList, MovieList } from "../FakeData.js";
import _ from "lodash";
import type { Resolvers } from "./types.js"

export const resolvers: Resolvers = {
  Query: {
    // User resolvers
    users() {
      if (UserList) return { users: UserList };
      return { message: "Error" };
    },
    user(parent, { id }) {
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },

    // Movie resolvers
    movies() {
      return MovieList.map((movie) => {
        return { ...movie, id: String(movie.id) }
      });
    },
    movie(parent, { name }) {
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },

  Mutation: {
    createUser(parent, { input }) {
      const lastId = UserList[UserList.length - 1].id;
      let id = lastId + 1;
      UserList.push({ id, ...input });
      return { id, ...input };
    },
    updateUsername(parent, { input }) {
      const { id, newUsername } = input;
      return UserList.find((user) => {
        if (user.id == id) {
          user.username = newUsername;
          return user;
        }
      });
    },
    deleteUser(parent, { id }) {
      return UserList.find((user) => {
        if (user.id == id) {
          UserList.splice(UserList.indexOf(user), 1);
          return user;
        }
      });
    },
  },

  User: {
    favoriteMovies() {
      return _.filter(
        MovieList,
        (movie) => movie.year >= 2000 && movie.year <= 2010
      );
    },
  },

  UsersResult: {
    __resolveType(obj) {
      if (obj.users) {
        return { users: obj.users };
      }
      return obj.message;
    },
  },
};
