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
          plot: "After being held captive an afghan cave , billioaire engineer Tony Stack create a unique weaponized suit of amor to fight evil.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          rating: "8.5",
          price: 399,
          star: 0,
          fav: false,
          isInCart: false,
        },

        {
          title: "The Dark Knight",
          plot: "When the means known as the joker weaks havoc on the poeple of Gotham.Batman must accept on of the gretest psychological and physical tests of his ability to fight injustice.",
          poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          rating: "9.0",
          price: 299,
          star: 0,
          fav: false,
          isInCart: false,
        },
      ],
    };

    //Binding the event handler in the constructor if event handler is not an arrow function
    // this.addStars = this.addStars.bind(this)
  }
  render() {
    const { movies } = this.state;
    // const { title, plot, price, rating, stars, fav, isIncart,poster } = this.state.movies;
    return (
      <>
        {movies.map((movie) => (
          <MovieCard movies={movie} />
        ))}
      </>
    );
  }
}
export default MovieList;
