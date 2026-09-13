import {useState} from "react";

type propsType = {
    name: string;
};

function ShowHideName({name}: propsType){
    const [currentName, setName] = useState(name);

    return(
        <div>
            <p>{currentName}</p>
            <button onClick={()=> setName(name)}>Show</button> <br/>
            <button onClick={()=> setName("")}>Hide</button>
        </div>
    )
}

export default ShowHideName;