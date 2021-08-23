import axios from "axios";
import React from "react";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=ratingb"
    );
    console.log(movies);
    this.setState((state) => ({
      isLoading: false,
      movies,
    }));
  };
  componentDidMount() {
    // React DOM이 Mount 된 후에 json파일을 가져와서 사용할 것이기 때문에 여기 작성
    this.getMovies();
  }
  render() {
    //구조 분해 할당
    console.log(this.state.movies);
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        <div>
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default App;
