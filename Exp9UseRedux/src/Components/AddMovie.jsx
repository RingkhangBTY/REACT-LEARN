import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../Features/movieSlice";

function AddMovie() {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    function handleAdd() {
        if (title.trim() === "") return;
        dispatch(addMovie(title));
        setTitle("");
    }
    return (
        <div>
            <input
                placeholder="Movie title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}
export default AddMovie;