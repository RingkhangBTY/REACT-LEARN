import {useState, useEffect} from "react";

function MovieDetails () {

    const [show, setShow] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [query, setQuery] = useState("Reacher")
    const [searchQuery, setSearchQuery] = useState("Reacher")

    useEffect(() => {
        const fetchShow = async () => {
            try {
                const response = await fetch(
                    "https://api.tvmaze.com/singlesearch/shows?q=" + encodeURIComponent(searchQuery)
                );

                if (!response.ok) {
                    setShow(null)
                    throw new Error("Failed to fetch data");
                }else{
                    setError('')
                }

                const data = await response.json();
                setShow(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchShow();
    }, [searchQuery]);

    const handleInput = (event) =>{
        event.preventDefault()
        setSearchQuery(query)
    }

    return (
        <div>
            <h1>🎬 TV Show Information</h1>

            <form onSubmit={handleInput}>

                <input
                    type={"text"}
                    value={query}
                    placeholder={"Enter name of the movie"}
                    onChange={(event) => setQuery(event.target.value)}
                />

                <button type={"submit"} >Submit</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {show && (
                <div>
                    <h2>{show.name}</h2>
                    <p>Rating: {show.rating.average}</p>
                    <p>Language: {show.language}</p>
                    <p>Premiered: {show.premiered}</p>
                    <p>Genres: {show.genres.join(", ")}</p>

                    {show.image && (
                        <img src={show.image.medium} alt={show.name} width="200" />
                    )}

                    <div dangerouslySetInnerHTML={{ __html: show.summary }} />
                </div>
            )}
        </div>
    );
}

export default MovieDetails