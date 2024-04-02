import useGame from "../hooks/useGame";
import { useState } from "react";

const StartPage = (props) => {
    const [state, setState] = useState({
        name: "",
    });

    const { message, startGame } = useGame();

    const onChange = (event) => {
        setState({
            name: event.target.value,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        startGame(state.name);
    };

    return (
        <div style={{ margin: "auto" }}>
            <h3>Number Guessing Game</h3>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Enter your name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={state.name}
                    onChange={onChange}
                />
                <br />
                <input type="submit" value="Start Game" />
                <h3>{message}</h3>
            </form>
        </div>
    );
};

export default StartPage;
