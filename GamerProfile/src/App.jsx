import { useContext } from "react";

import GamerProfile from "./components/GamerProfile";
import ThemeButton from "./components/ThemeButton";

import { ThemeContext } from "./context/ThemeContext";

function App() {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={darkMode ? "app dark" : "app"}>
            <GamerProfile />
            <ThemeButton />
        </div>
    );
}

export default App;