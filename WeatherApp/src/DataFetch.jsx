import { useEffect, useReducer, useState } from "react";

const apiKey = "04f8657056b37c5e527a87d8aa122ba5";

const initialState = {
    data: null,
    loading: false,
    error: ""
};

function reducer(state, action) {
    switch (action.type) {

        case "FETCH_START":
            return {
                ...state,
                loading: true,
                error: "",
            };

        case "FETCH_SUCCESS":
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: "",
            };

        case "FETCH_ERROR":
            return {
                ...state,
                data: null,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

function DataFetch() {

    const [city, setCity] = useState("Kokrajhar");
    const [searchCity, setSearchCity] = useState("Kokrajhar");

    const [state, dispatch] = useReducer(reducer, initialState);

    const { data, loading, error } = state;

    useEffect(() => {

        const fetchData = async () => {

            dispatch({ type: "FETCH_START" });

            try {

                const weatherURL =
                    `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`;

                const response = await fetch(weatherURL);

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await response.json();

                dispatch({
                    type: "FETCH_SUCCESS",
                    payload: result
                });

            } catch (err) {

                dispatch({
                    type: "FETCH_ERROR",
                    payload: err.message
                });

            }
        };

        fetchData();

    }, [searchCity]);


    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchCity(city);
    };


    return (
        <div>

            <h1>Welcome to Weather App</h1>

            <form onSubmit={handleSubmit}>

                <input
                    placeholder="Enter name of the city"
                    value={city}
                    type="text"
                    onChange={(event) => setCity(event.target.value)}
                />

                <button type="submit">
                    Submit
                </button>

            </form>


            {loading && (
                <p>Loading data ......</p>
            )}

            {error && (
                <p>{error}</p>
            )}


            {data && (
                <div>

                    <h2>
                        {data.name}, {data.sys.country}
                    </h2>

                    <p>
                        🌡 Temperature: {data.main.temp}°C
                    </p>

                    <p>
                        ☁ Weather: {data.weather[0].description}
                    </p>

                    <p>
                        💧 Humidity: {data.main.humidity}%
                    </p>

                    <p>
                        🌬 Wind: {data.wind.speed} m/s
                    </p>

                </div>
            )}

        </div>
    );
}

export default DataFetch;