import { Component } from "react";
import MovieCard from "./MovieCard";
class MovieList extends Component {
  constructor() {
    super();
    //Creating the state object
    this.state = {
      movies: [
        {
          title: "The Avengers",
          plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          rating: "8.0",
          price: 199,
          star: 0,
          fav: false,
          isInCart: false,
        },
        {
          title: "Iron Man",
          plot: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5Z",
          rating: "8.5",
          price: 399,
          star: 0,
          fav: false,
          isInCart: false,
        },
        {
          title: "The Dark Knight",
          plot: "When the menace known as the joker wreaks havoc and chos on the people of Gotham.",
          poster:
            "https://m.media-amazon.com/images/I/91z1aHBN4tS._SL1500_.jpg",
          rating: "9.0",
          price: 299,
          star: 0,
          fav: false,
          isInCart: false,
        },
        {
          title: "The Avengers",
          plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          rating: "8.0",
          price: 199,
          star: 0,
          fav: false,
          isInCart: false,
        },
      ],
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


