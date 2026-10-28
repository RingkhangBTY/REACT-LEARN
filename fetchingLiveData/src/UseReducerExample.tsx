import {useEffect, useReducer} from "react";

const initialState = {
    show: null,
    loading: true,
    error: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "FETCH_START":
            return {...state, loading: true, error: ""};

        case "FETCH_SUCCESS":
            return {...state, loading: false, error: "", show: action.payload};

        case "FETCH_ERROR":
            return {...state, loading: false, error: action.payload};

        default :
            return state;
    }
}

function UseReducerExample() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const {show, loading, error} = state;

    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: "FETCH_START"});

            try {
                const response = await fetch(
                    "https://api.tvmaze.com/singlesearch/shows?q=" + encodeURIComponent("Reacher")
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch show data")
                }

                const data = await response.json();

                dispatch({type: "FETCH_SUCCESS", payload: data});

            } catch (err) {
                dispatch({type: "FETCH_ERROR", payload: err.message});
            }
        };

        fetchData()
    }, []);

    return (
        <div>
            <h1>🎬 TV Show Information</h1>

            {/* Loading message */}
            {loading && <p>Loading...</p>}

            {/* Error message */}
            {error && <p>{error}</p>}

            {/* Show information */}
            {show && (
                <div>
                    <h2>{show.name}</h2>

                    <p>Rating: {show.rating.average}</p>

                    <p>Language: {show.language}</p>

                    <p>Premiered: {show.premiered}</p>

                    <p>Genres: {show.genres.join(", ")}</p>

                    {show.image && (
                        <img
                            src={show.image.medium}
                            alt={show.name}
                            width="200"
                        />
                    )}

                    <div
                        dangerouslySetInnerHTML={{
                            __html: show.summary
                        }}
                    />
                </div>
            )}
        </div>
    )
};

export default UseReducerExample