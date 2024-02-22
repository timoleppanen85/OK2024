window.onload = function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", submit);
    form.addEventListener("reset", reset);
    randomNumber = Math.floor(Math.random() * 100 + 1);
    tries = 0;
    lastGuess = 0;
}

function submit(event) {
    event.preventDefault();
    let hint = document.querySelector("#hint");
    let guessedNumber = document.querySelector("#number").value;

    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
        hint.innerHTML = "Choose a number between 1 and 100!";
    } else if (guessedNumber > randomNumber) {
        if (guessedNumber >= lastGuess && lastGuess != 0) {
            hint.innerHTML = "I SAID LOWER!";
        } else {
            hint.innerHTML = "Lower!";
            tries++;
            lastGuess = guessedNumber;
        }
    } else if (guessedNumber < randomNumber) {
        if (guessedNumber <= lastGuess && lastGuess != 0) {
            hint.innerHTML = "I SAID HIGHER!";
        } else {
            hint.innerHTML = "Higher!";
            tries++;
            lastGuess = guessedNumber;
        }
    } else if (guessedNumber == randomNumber) {
        hint.innerHTML = "CORRECT! COOKIES!";
    }

    console.log(lastGuess);
    document.querySelector("#tries").innerHTML = tries;

    document.getElementById("number").value = "";
    document.getElementById("number").focus();
}

function reset(event) {
    location.reload();
}