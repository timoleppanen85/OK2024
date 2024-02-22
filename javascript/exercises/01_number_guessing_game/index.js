var randomNumber = Math.floor((Math.random() * 100) + 1);
var tries = 0;
var lowest = 0;
var highest = 100;

window.onload = function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", submit);
    form.addEventListener("reset", reset);

    document.getElementById("number").focus();
}

function submit(event) {
    event.preventDefault();
    let hint = document.querySelector("#hint");
    let guessedNumber = parseInt(document.querySelector("#number").value);

    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
        hint.innerHTML = "Choose a number between 1 and 100!";
    } else if (guessedNumber > randomNumber) {
        if (guessedNumber < highest) {
            hint.innerHTML = "Lower!";
            highest = guessedNumber;
            tries++;
        } else {
            hint.innerHTML = "I SAID LOWER!";
        }
    } else if (guessedNumber < randomNumber) {
        if (guessedNumber > lowest) {
            hint.innerHTML = "Higher!";
            lowest = guessedNumber;
            tries++;
        } else {
            hint.innerHTML = "I SAID HIGHER!";
        }
    } else if (guessedNumber == randomNumber) {
        hint.innerHTML = "CORRECT! COOKIES!";
    }

    document.querySelector("#tries").innerHTML = tries;

    document.getElementById("number").value = "";
    document.getElementById("number").focus();
}

function reset(event) {
    location.reload();
}