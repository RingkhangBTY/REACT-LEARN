import {useEffect, useState} from "react";
import Navbar from "./components/Navbar.jsx";

function Counter() {
    const [count, setCount] = useState(0);
    const [colour, setColour] = useState(0)

    // useEffect runs whenever "count" changes
    useEffect(() => {
        alert("Hey the count is changed")
        setColour(colour + 1)
    }, [count]);

    return (
        <div>̵

            <Navbar colour={" blue " + " blue " + colour}/>
            <h1>Counter App</h1>

            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}> Increase</button>

            <button onClick={() => {
                if (count > 0)
                    setCount(count - 1)
            }}> Decrease
            </button>

            <button onClick={() => setCount(0)}> Reset</button>

            <button onClick={() => setCount(count * 2)}> Double</button>

        </div>
    );
}

export default Counter