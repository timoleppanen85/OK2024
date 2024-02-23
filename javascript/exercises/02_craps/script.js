var dice1 = 0;
var dice2 = 0;
var total = 0;
var pointValue = 0;
betType = true;
var betbuttons;
var crapStatus = "";
var totalMoney = 100;
var betAmount = 20;

window.onload = function () {
    wintext = document.querySelector("#wintext");
    betbuttons = document.querySelectorAll("input[type='radio']");
    betAmountSlider = document.querySelector("#betamountslider");
    betLabel = document.querySelector("#betlabel");
    totalMoneyLabel = document.querySelector("#totalmoney");
}

rollDice = () => {
    const dice1text = document.querySelector("#dice1");
    const dice2text = document.querySelector("#dice2");
    const totalText = document.querySelector("#total");
    betType = document.querySelector("input[name='bet']:checked").value;

    dice1 = Math.floor((Math.random() * 6) + 1);
    dice2 = Math.floor((Math.random() * 6) + 1);

    total = dice1 + dice2;

    dice1text.innerHTML = dice1;
    dice2text.innerHTML = dice2;
    totalText.innerHTML = total;

    if (crapStatus === "point") {
        playPoint(total);
    } else {
        checkWinner(total);
    }
}

playPoint = (total) => {
    switch (total) {
        case 7:
            betType === "true" ? lose() : win();
            break;
        case pointValue:
            betType === "true" ? win() : lose();
            break;
        default:
            break;
    }
}

checkWinner = (total) => {

    switch (total) {
        case 7:
        case 11:
            betType === "true" ? win() : lose();
            break;
        case 2:
        case 3:
        case 12:
            betType === "true" ? lose() : win();
            break;
        default:
            point(total);
            break;
    }
}

win = () => {
    wintext.innerHTML = "WINNER!";
    totalMoney += betAmount;
    roundOver();
}

lose = () => {
    wintext.innerHTML = "CRAP OUT!";
    totalMoney -= betAmount;
    roundOver();
}

point = (total) => {
    crapStatus = "point";
    pointValue = total;
    wintext.innerHTML = "POINT at " + pointValue;
    disableRadios();
}

disableRadios = () => {
    for (let i = 0; i < betbuttons.length; i++) {
        betbuttons[i].disabled = true;
    }
}

roundOver = () => {
    for (let i = 0; i < betbuttons.length; i++) {
        betbuttons[i].disabled = false;
    }
    crapStatus = "";
    totalMoneyLabel.innerHTML = totalMoney + "€";

    if (totalMoney === 0) {
        gameOver();
    }
}

changeBet = () => {
    betLabel.innerHTML = betAmountSlider.value + "€";
    betAmount = parseInt(betAmountSlider.value);

    if (betAmount > totalMoney) {
        document.querySelector("#rolldice").disabled = true;
    } else {
        document.querySelector("#rolldice").disabled = false;
    }
}

gameOver = () => {
    disableRadios();
    document.querySelector("#rolldice").disabled = true;
    document.querySelector("#betamountslider").disabled = true;
}
