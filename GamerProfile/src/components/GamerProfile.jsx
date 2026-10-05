import { useEffect, useRef, useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function GamerProfile() {

    const [name, setName] = useState("");
    const [disName, setDisName] = useState("");

    const [favGame, setFavGame] = useState("Minecraft");

    const [xp, setXP] = useState(0);
    const [level, setLevel] = useState(0);

    const [message, setMessage] = useState("");

    const { darkMode } = useContext(ThemeContext);

    const handleInput = (event) => {
        event.preventDefault();
        setDisName(name);
    };

    const firstRender = useRef(true);

    useEffect(() => {

        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        if (xp === 10) {
            setMessage("🔥 Keep going!");
        } else if (xp >= 100) {
            setMessage("🏆 Congratulations! You reached Level 10!");
        } else {
            setMessage("🔥 Nice! You are improving!");
        }

        const timer = setTimeout(() => {
            setMessage("");
        }, 5000);

        return () => clearTimeout(timer);
    }, [xp]);

    const addXP = () => {
        const newXp = xp + 10;
        setXP(newXp);
        setLevel(newXp / 10);
    };

    const resetXP = () => {
        setXP(0);
        setLevel(0);
        setMessage("");
    };


    return (

        <div className="gamer-page">

            <h1 className="title"> Mini Gamer Profile </h1>

            <div className="input-card">
                <label>Gamer Name </label>

                <form onSubmit={handleInput}>
                    <input
                        type="text"
                        value={name}
                        placeholder=""
                        onChange={(event) =>
                            setName(event.target.value)
                        }
                    />
                </form>

                <label>Favorite Game</label>

                <select
                    value={favGame}
                    onChange={(event) =>
                        setFavGame(event.target.value)
                    }
                >
                    <option value="Minecraft"> Minecraft </option>
                    <option value="GTA V">cGTA V </option>
                    <option value="Valorant"> Valorant </option>
                    <option value="FIFA"> FIFA </option>
                    <option value="BGMI"> BGMI </option>

                </select>

            </div>

            <div className="profile-card">

                <h2>Gamer Profile</h2>

                <p>
                    <span>Player:</span>{" "}
                    {disName || "Anonymous"}
                </p>

                <p>
                    <span>Game:</span>{" "}
                    {favGame}
                </p>

                <div className="xp-row">

                    <span>XP: {xp}</span>
                    <span>Level: {level}</span>

                </div>

                <button
                    className="xp-button"
                    onClick={addXP} >+10 XP</button>

                {message && (
                    <div className="xp-message">
                        {message}
                    </div>
                )}

                {xp > 0 && (
                    <button
                        className="reset-button"
                        onClick={resetXP} >Reset XP</button>
                )}

            </div>

        </div>
    );
}

export default GamerProfile;