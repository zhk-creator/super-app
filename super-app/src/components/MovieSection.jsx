import MovieCard from "./MovieCard";
import "./MovieSection.css";

function MovieSection({ title, movies, onMovieClick }) {
  return (
    <div className="movie-section">

      <h2>{title}</h2>

      <div className="movie-row">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onClick={onMovieClick}
          />
        ))}
      </div>

    </div>
  );
}

export default MovieSection;