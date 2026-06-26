// import "./MovieCard.css";

// function MovieCard({ movie, onClick }) {
//   return (
//     <div className="movie-card" onClick={() => onClick(movie.imdbID)}>
//       <img
//         src={
//           movie.Poster !== "N/A"
//             ? movie.Poster
//             : "https://via.placeholder.com/250x350"
//         }
//         alt={movie.Title}
//       />

//       <h4>{movie.Title}</h4>

//       <p>{movie.Year}</p>
//     </div>
//   );
// }

// export default MovieCard;
import "./MovieCard.css";

function MovieCard({ movie, onClick }) {
  return (
    <div
      className="movie-card"
      onClick={() => onClick(movie.imdbID)}
    >
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/200x300"
        }
        alt={movie.Title}
      />

      <div className="movie-info">
        <h4>{movie.Title}</h4>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;