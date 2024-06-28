import { Component } from "react";
import MovieCard from "./MovieCard";
class MovieList extends Component {
  constructor() {
    super();
    //Creating the state object
    this.state = {
      title: "The Avengers",
      plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      rating: "8.0",
      price: 199,
      star: 0,
      fav: false,
      isInCart: false,
    };
  }
  render() {
    const { title, poster, plot, price, rating, star, isIncart } = this.state;
    return (
      <>
        <MovieCard movies={this.state} />
      </>
    );
  }
}

export default MovieList;
