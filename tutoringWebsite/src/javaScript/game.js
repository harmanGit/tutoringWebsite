function start() {
    document.getElementById("enterButton").onclick = function () {
        playGame()
    };
}

function playGame() {
    var userInput = document.getElementById("userInput").value;

    if (parseInt(userInput) >= 0 && parseInt(userInput) < 1000) {
        didUserWin(parseInt(userInput));
    } else
        document.getElementById("displayOutput").innerHTML = "Invalid Input! Try Again";
}

function didUserWin(userInput) {
    var outputNumber = Math.floor(Math.random() * 1000);
    var randomNumber = outputNumber;
    var partialRandomNumber;
    var partialUserInput;
    var userInputArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var randomNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (var i = 0; randomNumber > 0; i++) {
        partialRandomNumber = randomNumber % 10;
        randomNumber = Math.floor(randomNumber / 10);

        randomNumberArray[partialRandomNumber]++;
    }
    for (var i = 0; userInput > 0; i++) {

        partialUserInput = userInput % 10;
        userInput = Math.floor(userInput / 10);

        userInputArray[partialUserInput]++;
    }

    if (userInputArray.toString() === randomNumberArray.toString()) {
        document.getElementById("enterButton").disabled = true;
        document.getElementById("displayOutput").innerHTML = "You Win $249!!! This amount will automatically be added to your account";
        document.getElementById("redirecting").innerText = "Redirecting in 5 seconds...";
        setTimeout(function () {
            window.location = 'index.html'
        }, 5000);
    } else {
        document.getElementById("enterButton").disabled = true;
        document.getElementById("displayOutput").innerHTML = "You Lose!!! The Winning Number Was: " + outputNumber;
        document.getElementById("redirecting").innerText = "Redirecting in 5 seconds...";
        setTimeout(function () {
            window.location = 'index.html'
        }, 5000);
    }
}