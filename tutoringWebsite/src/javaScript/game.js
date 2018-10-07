//To make your homepage interesting, provide a link to a page that allows the users to play a game. This game generates
//integer between 0(inclusive) and 1000(exclusive) and prompts the user to enter an integer with at most 3 digits. This
//game needs to user pay $1 to play. If the integer entered by the user matches the integer generated in any order, the
//user wins $249 and s/he losses the $1 payed.

function start() {
    document.getElementById("enterButton").onclick = function() {playGame()};
}

function playGame() {
    var userInput = document.getElementById("userInput").value;

    if(parseInt(userInput) > 0 && parseInt(userInput) < 1000){
        var randomNumber = Math.floor(Math.random() * 1000);//is this how long

        if(parseInt(userInput) === Math.floor(Math.random() * 1000))//might be a BUG
            document.getElementById("displayOutput").innerHTML = "You Win!!!";
        else
            document.getElementById("displayOutput").innerHTML = "You Lose!!! The Winning Number Was: " + randomNumber;
    } else
        document.getElementById("displayOutput").innerHTML = "Invalid Input! Try Again";
}