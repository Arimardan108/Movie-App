import React from "react";
import MovieCard from "./MovieCard";
import { movies } from "./moviesData";

class MovieList extends React.Component {
  constructor() {
    super();
    //Creating the state object
    this.state = {
      movies: movies,
    };
  }

  handleAddStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars < 5) {
      movies[movieId].stars += 0.5;
    }

    this.setState({
      movies,
    });
  };

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars > 0) {
      movies[movieId].stars -= 0.5;
    }

    this.setState({
      movies,
    });
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies,
    });
  };

  handleAddtocart = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].isInCart = !movies[movieId].isInCart;

    this.setState({
      movies,
    });
  };
  render() {
    const { movies } = this.state;

    return (
      <div className="main">
        {movies.map((movie, index) => (
          <MovieCard
            movies={movie}
            key={index}
            onIncStars={this.handleAddStars}
            onDecStars={this.handleDecStars}
            onClickFav={this.handleToggleFav}
            onClickAddtocart={this.handleAddtocart}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
