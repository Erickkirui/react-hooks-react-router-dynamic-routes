import React from "react";
import { Route , useRouteMatch} from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  console.log(match)
  return (
    <div>
      <h3>Choose a movie</h3>
      <MoviesList movies={movies} />
      <Route path ={`${match.url}/:movieId`}>
        <MovieShow  movies={movies}/>
        </Route>
    </div>

  );
}
export default MoviesPage;
