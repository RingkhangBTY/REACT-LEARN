import {useState} from "react";

// this tells the type of data that props will accept & proceed with that
type propsType = {
    name: string;
    age: number;
};

function Counter({name,age}: propsType) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Hello {name}, Your age {age}</h2>
            <p> Counter: {count}</p>

            <button onClick={()=> {
                setCount(count+1)
            }} >
                Increase</button>

            <button onClick={()=> setCount(count-1) }>Decrease</button>
        </div>
    )
}

export default Counter;