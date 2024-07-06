import React from "react";
import MovieCard from "./MovieCard";
class MovieList extends React.Component {
  render() {
    const { movies, addStars, decStars, toggleFav, toggleCart } = this.props;
    console.log(this.props);
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard
            movies={movie}
            addStars={addStars}
            decStars={decStars}
            toggleFav={toggleFav}
            toggleCart={toggleCart}
            key={index}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
