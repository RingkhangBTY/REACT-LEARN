import {useState} from "react";

type Types = {
    name: string;
    age: number;
};

function Counter({name,age}: Types) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Hello {name}, Your age {age}</h2>
            <p> Counter: {count}</p>

            <button onClick={()=> {
                setCount(count+1)
            }} >Increase</button>

            <button onClick={()=> setCount(count-1) }>Decrease</button>
        </div>
    )
}

export default Counter;