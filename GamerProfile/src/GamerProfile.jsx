import {use, useEffect, useRef, useState} from "react";

function GamerProfile(){

    const [name,setName] = useState('')
    const [disName,setDisName] = useState('')
    const [favGame, setFavGame] = useState("Minecraft")

    const [xp, setXP] = useState(0)
    const [level, setLevel] = useState(0)
    const [message , setMessage] = useState('')

    const handleInput = (event) => {
        event.preventDefault()
        setDisName(name)
    }

    const firstRender = useRef(true)

    useEffect(() => {

        if (firstRender.current){
            firstRender.current = false;
            return;
        }
        setMessage("Great keep playing..")

        const timer = setTimeout(()=> {
            setMessage('')
        }, 5000)

        return () => clearTimeout(timer);
    }, [xp]);

    return (
        <div>
            <h1> Mini Gamer profile </h1>
            <div>
                <h3>Gamer name</h3>

                <form onSubmit={handleInput}>
                    <input type={"text"} value={name}
                           onChange={(event) => setName(event.target.value)}
                    />
                </form>

                <h3>Favorite game</h3>
                <select value={favGame}
                        onChange={(event) => {setFavGame(event.target.value)}}>
                    <option value={"Minecraft"}>Minecraft</option>
                    <option value={"BGMI"}>BGMI</option>
                    <option value={"God of war"}>God of war</option>
                    <option value={"Clash of clans"}>Clash of clans</option>
                    <option value={"Call of duty"}>Call of duty</option>
                </select>
            </div>

            <div>
                <h2>Gamer profile</h2>
                <p>Player: {disName}</p>
                <p>Game: {favGame}</p>

                <p>XP: {xp}</p>
                <p>Level: {level}</p>
                <button
                    onClick={()=> {
                        const newXp = xp + 10

                        setXP(newXp)
                        setLevel(newXp/10)
                    }}
                >+10 xp</button>
                {message && <p>{message}</p>}
            </div>

        </div>
    )
}

export default GamerProfile