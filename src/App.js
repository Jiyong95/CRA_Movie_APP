import axios from "axios";
import React from "react";
import Movie from "./Movie";

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
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading"
          : movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.image}
              />
            ))}
      </div>
    );
  }
}

export default App;
