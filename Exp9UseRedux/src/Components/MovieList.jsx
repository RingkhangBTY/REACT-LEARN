import { useSelector, useDispatch } from "react-redux";
import { toggleWatched, deleteMovie } from "../Features/movieSlice";

function MovieList() {
    const movies = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    {movie.watched ? " " : " "} {movie.title}
                    <button onClick={() => dispatch(toggleWatched(movie.id))}>
                        Watched
                    </button>

                    <button onClick={() => dispatch(deleteMovie(movie.id))}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}
export default MovieList;