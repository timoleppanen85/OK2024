var dice1 = 0;
var dice2 = 0;
var total = 0;
var bet = "";

rollDice = () => {
    const dice1text = document.querySelector("#dice1");
    const dice2text = document.querySelector("#dice2");
    const totalText = document.querySelector("#total");

    dice1 = Math.floor((Math.random() * 6) + 1);
    dice2 = Math.floor((Math.random() * 6) + 1);

    total = dice1 + dice2;

    dice1text.innerHTML = dice1;
    dice2text.innerHTML = dice2;
    totalText.innerHTML = total;
}

checkWinner = () => {
    let winner = false;

    switch (total) {
        case 7:
        case 11:
            winner = true;
            break;
        case 2:
        case 3:
        case 12:
            winner = false;
            break;
        default:
            winner = 2;
            break;
    }
}