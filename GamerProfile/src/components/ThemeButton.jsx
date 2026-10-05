import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeButton() {

    const { darkMode, toggleTheme } =
        useContext(ThemeContext);
    return (
        <button
            className="theme-button"
            onClick={toggleTheme}
        >

            {darkMode
                ? "Light Mode"
                : "Dark Mode"
            }

        </button>

    );
}

export default ThemeButton;