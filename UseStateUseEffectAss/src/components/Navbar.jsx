import {useEffect} from "react";

const Navbar = ({colour}) => {

    useEffect(() => {
        alert("Colour was changed....")
    }, [colour]);


    useEffect(() => {

        // example of cleanup function
        return () =>{
            alert("Unmounted")
        }

    }, []);

    return (
        <div>
            I am navbar of colour {colour} colour hehehe.....
        </div>
    )
}

export default Navbar