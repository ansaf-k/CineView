// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchMovies, setCategory } from "../redux/movieSlice";

// const MovieList = () => {
//   const dispatch = useDispatch();
//   const { movies, category, status } = useSelector((state) => state.movies);

//   useEffect(() => {
//     dispatch(fetchMovies(category));
//   }, [category, dispatch]);

//   return (
//     <div className="p-4">
//       {/* Movie Category Buttons */}
//       <div className="flex space-x-4 mb-4">
//         {["popular", "top_rated", "upcoming", "now_playing"].map((type) => (
//           <button
//             key={type}
//             className={`p-2 rounded-md ${category === type ? "bg-red-500 text-white" : "bg-gray-700 text-white"}`}
//             onClick={() => dispatch(setCategory(type))}
//           >
//             {type.replace("_", " ").toUpperCase()}
//           </button>
//         ))}
//       </div>

//       {/* Show Loading State */}
//       {status === "loading" ? (
//         <p className="text-white">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {movies.map((movie) => (
//             <div key={movie.id} className="bg-gray-800 p-4 rounded-lg">
//               <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full rounded-lg" />
//               <h3 className="text-white mt-2">{movie.title}</h3>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieList;
