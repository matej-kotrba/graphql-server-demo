import { UserList, MovieList } from "../FakeData.js";
import _ from "lodash";

export const resolvers = {
  Query: {
    // User resolvers
    users() {
      return UserList;
    },
    user(parent, { id }) {
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },

    // Movie resolvers
    movies() {
      return MovieList;
    },
    movie(parent, { name }) {
      const movie = _.find(MovieList, { name });
      return movie;
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
};
