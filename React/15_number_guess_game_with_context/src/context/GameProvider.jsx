import { useState } from "react";
import GameContext from "./GameContext";
import { useNavigate } from "react-router-dom";

const GameProvider = (props) => {
    const [state, setState] = useState({
        playerName: "",
        noOfGuesses: 0,
        minGuess: 1,
        maxGuess: 100,
        targetNumber: 0,
        message: "",
    });

    const navigate = useNavigate();

    const startGame = (name) => {
        if (!name) {
            setState((state) => {
                return {
                    ...state,
                    message: "Please enter your name",
                };
            });
            return;
        }

        const target = Math.floor(Math.random() * 100) + 1;
        const message =
            "Hello " +
            name +
            ", Can you guess a number between " +
            state.minGuess +
            " and " +
            state.maxGuess +
            "?";
        setState((state) => {
            return {
                ...state,
                name: name,
                message: message,
                targetNumber: target,
            };
        });
        navigate("/game");
    };

    const guess = (guess) => {
        if (state.targetNumber === 0) {
            setState({
                targetNumber: 0,
                playerName: "",
                noOfGuesses: 0,
                minGuess: 1,
                maxGuess: 100,
                message: "",
            });
            navigate("/");
        }

        if (isNaN(guess)) {
            let message =
                "Please enter a valid number between " +
                state.minGuess +
                " and " +
                state.maxGuess;
            setState((state) => {
                return {
                    ...state,
                    message: message,
                };
            });
            return;
        }

        let tempGuess = parseInt(guess, 10);
        if (tempGuess < state.minGuess || tempGuess > state.maxGuess) {
            let message =
                "Please enter a number between " +
                state.minGuess +
                " and " +
                state.maxGuess;
            setState((state) => {
                return {
                    ...state,
                    message: message,
                };
            });
            return;
        }

        if (tempGuess < state.targetNumber && tempGuess >= state.minGuess) {
            let message =
                "You guess too low. Guess between " +
                guess +
                " and " +
                state.maxGuess;
            setState((state) => {
                return {
                    ...state,
                    minGuess: guess,
                    message: message,
                    noOfGuesses: state.noOfGuesses + 1,
                };
            });
            return;
        }

        if (tempGuess > state.targetNumber && tempGuess <= state.maxGuess) {
            let message =
                "You guess too high. Guess between " +
                state.minGuess +
                " and " +
                guess;
            setState((state) => {
                return {
                    ...state,
                    maxGuess: guess,
                    message: message,
                    noOfGuesses: state.noOfGuesses + 1,
                };
            });
            return;
        }

        if (tempGuess === state.targetNumber) {
            let noOfGuesses = state.noOfGuesses + 1;
            alert(
                "Congrats " +
                    state.playerName +
                    "! You guessed the number in " +
                    noOfGuesses +
                    " attempts."
            );
            setState({
                targetNumber: 0,
                playerName: "",
                noOfGuesses: 0,
                minGuess: 1,
                maxGuess: 100,
                message: "",
            });
            navigate("/");
            return;
        }
        console.log("Should not come here!");
    };

    return (
        <GameContext.Provider
            value={{
                startGame: startGame,
                guess: guess,
                message: state.message,
            }}>
            {props.children}
        </GameContext.Provider>
    );
};

export default GameProvider;
