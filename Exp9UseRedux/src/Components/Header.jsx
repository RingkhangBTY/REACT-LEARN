import { useSelector } from "react-redux";

function Header() {
    const movies = useSelector((state) => state.movies);
    const watched = movies.filter((m) => m.watched).length;
    return (
        <h1>
            My Movies ({watched}/{movies.length} watched)
        </h1>
    );
}
export default Header;