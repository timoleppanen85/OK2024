import useGame from "../hooks/useGame";
import { useState } from "react";

const GamePage = (props) => {
    const [state, setState] = useState({
        guess: 0,
    });

    const { message, guess } = useGame();

    const onChange = (event) => {
        setState({
            guess: event.target.value,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        guess(state.guess);
    };

    return (
        <div style={{ margin: "auto" }}>
            <form onSubmit={onSubmit}>
                <label htmlFor="guess">Guess a number</label>
                <input
                    type="number"
                    name="guess"
                    id="guess"
                    value={state.guess}
                    onChange={onChange}
                />
                <br />
                <input type="submit" value="Guess" />
                <h3>{message}</h3>
            </form>
        </div>
    );
};

export default GamePage;
