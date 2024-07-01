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

    //Binding the event handler in the constructor if event handler is not an arrow function
    // this.addStars = this.addStars.bind(this)
  }
  render() {
    const { title, plot, price, rating, stars, fav, isIncart } = this.state;
    return (
      <>
        <MovieCard movies={this.state} />
      </>
    );
  }
}
export default MovieList;
