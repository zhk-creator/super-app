// import { useEffect, useState } from "react";
// import useStore from "../store/useStore";
// import { getMovies, getMovieDetails } from "../services/movieApi";
// import MovieCard from "../components/MovieCard";
// import MovieModal from "../components/MovieModal";

// function Movies() {

//   const { categories } = useStore();

//   const [movies, setMovies] = useState([]);

//   const [selectedMovie, setSelectedMovie] = useState(null);

//   useEffect(() => {

//     loadMovies();

//   }, []);

//   const loadMovies = async () => {

//     let allMovies = [];

//     for (const category of categories) {

//       const data = await getMovies(category);

//       allMovies = [...allMovies, ...data];

//     }

//     setMovies(allMovies);

//   };

//   const openModal = async (id) => {

//     const movie = await getMovieDetails(id);

//     setSelectedMovie(movie);

//   };

//   return (

//     <div
//       style={{
//         background:"#000",
//         minHeight:"100vh",
//         padding:"30px"
//       }}
//     >

//       <h1
//         style={{
//           color:"white",
//           marginBottom:"30px"
//         }}
//       >
//         Entertainment
//       </h1>

//       <div
//         style={{
//           display:"grid",
//           gridTemplateColumns:"repeat(auto-fill,minmax(180px,1fr))",
//           gap:"20px"
//         }}
//       >

//         {movies.map((movie)=>(

//           <MovieCard
//             key={movie.imdbID}
//             movie={movie}
//             onClick={openModal}
//           />

//         ))}

//       </div>

//       <MovieModal
//         movie={selectedMovie}
//         onClose={()=>setSelectedMovie(null)}
//       />

//     </div>

//   );

// }

// export default Movies;
import { useEffect, useState } from "react";
import useStore from "../store/useStore";
import { getMovies, getMovieDetails } from "../services/movieApi";
import MovieSection from "../components/MovieSection";
import MovieModal from "../components/MovieModal";
import "./Movies.css";

function Movies() {

  const { categories } = useStore();

  const [movieData, setMovieData] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const data = {};

    for (const category of categories) {
      data[category] = await getMovies(category);
    }

    setMovieData(data);
  };

  const openMovie = async (id) => {
    const movie = await getMovieDetails(id);
    setSelectedMovie(movie);
  };

  return (
    <div className="movies-page">

      <h1>Entertainment According to Your Choice</h1>

      {categories.map((category) => (
        <MovieSection
          key={category}
          title={category}
          movies={movieData[category] || []}
          onMovieClick={openMovie}
        />
      ))}

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

    </div>
  );
}

export default Movies;