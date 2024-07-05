import React from "react";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(this.props);
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard movies={movie} key={index} />
        ))}
      </>
    );
  }
}

export default MovieList;
