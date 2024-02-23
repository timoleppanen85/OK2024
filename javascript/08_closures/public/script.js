window.onload = function () {
    const fontSizer = changeFontSize();
    const biggerButton = document.getElementById("bigger");
    const smallerButton = document.getElementById("smaller");

    biggerButton.onclick = fontSizer.bigger;
    smallerButton.onclick = fontSizer.smaller;
}

const changeFontSize = function () {
    let fontSize = 16;
    document.body.style.fontSize = fontSize + "px";

    function changeSize(val) {
        fontSize += val;
        document.body.style.fontSize = fontSize + "px";
    }

    return {
        bigger: function () {
            changeSize(2);
        },
        smaller: function () {
            changeSize(-2);
        }
    }
}

const makeCounter = function () {
    let privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
}

function start() {
    let counter1 = makeCounter();
    let counter2 = makeCounter();

    counter1.increment();
    counter1.increment();
    counter1.increment();

    console.log('Counter 1 value: ', counter1.value());
    console.log('Counter 2 value: ', counter2.value());
}