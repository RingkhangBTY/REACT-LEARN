import Message from './Message';
import Counter from "./Counter.tsx";
import ShowHideName from "./ShowHideName.tsx";


function App() {
    return (
        <div>
            <Message/>
            <Counter age={19} name={'Ringkhang'}/> <br/>
            <ShowHideName name={'Alice'}/>
        </div>
    )

    // return (
    //     <h1>Student profile</h1>
    // )
}

export default App;