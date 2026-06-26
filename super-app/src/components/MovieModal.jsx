import "./MovieModal.css";

function MovieModal({ movie, onClose }) {

  if (!movie) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <img src={movie.Poster} alt={movie.Title} />

        <h2>{movie.Title}</h2>

        <p>
          <strong>Year:</strong> {movie.Year}
        </p>

        <p>
          <strong>Genre:</strong> {movie.Genre}
        </p>

        <p>
          <strong>IMDb:</strong> {movie.imdbRating}
        </p>

        <p>{movie.Plot}</p>

      </div>

    </div>
  );
}

export default MovieModal;