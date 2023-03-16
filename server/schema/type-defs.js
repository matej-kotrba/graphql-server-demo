import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User!]
    favoriteMovies: [Movie!]
  }

  type Movie {
    id: ID!
    name: String!
    year: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: UsersResult
    user(id: ID!): User
    movies: [Movie!]!
    movie(name: String!): Movie
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = CZECHIA
    # Cant use created types in input types
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUsername(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
  }

  enum Nationality {
    AMERICA
    CANADA
    GERNMANY
    FRANCE
    POLAND
    ENGLAND
  }

  type UsersSuccessfulResult {
    users: [User!]!
  }

  type UsersErrorResult {
    message: String!
  }

  union UsersResult = UsersSuccessfulResult | UsersErrorResult
`;
