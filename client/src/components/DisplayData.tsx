import { useQuery, useLazyQuery, gql } from "@apollo/client";
import { MouseEventHandler, useState } from "react";

const QUERY_ALL_USERS = gql`
  query {
    users {
      name
    }
  }
`;

const QUERY_MOVIE = gql`
  query Movie($name: String!) {
    movie(name: $name) {
      name
    }
  }
`;

function DisplayData() {
  const [movieSearched, setMovieSearched] = useState("");

  const { loading, error, data } = useQuery(QUERY_ALL_USERS);
  const [fetchMovie, { data: movieSearchData, error: movieErrors }] =
    useLazyQuery(QUERY_MOVIE, { variables: { name: movieSearched } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <button>Create user</button>

      <div>
        {data.users.map((user: { name: string }) => {
          return <p key={crypto.randomUUID()}>{user.name}</p>;
        })}
      </div>

      <div>
        <input
          type="text"
          placeholder="Interstellar..."
          onChange={(event) => setMovieSearched(event.target.value)}
        />
        <button onClick={fetchMovie as MouseEventHandler<HTMLButtonElement>}>
          Fetch Data
        </button>
        <div>
          {movieSearchData?.movie?.name && (
            <div>
              <h2> Movie name: {movieSearchData.movie.name}</h2>
            </div>
          )}
          {movieErrors && <p>{movieErrors.message}</p>}
        </div>
      </div>
    </>
  );
}

export default DisplayData;
