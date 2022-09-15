const prompt = require('prompt-sync')({sigint: true});

console.log("Player 1, enter 'rock' 'paper' or 'scissors'.");
let pl1 = (prompt(">> "));

console.log("Player 2, enter 'rock' 'paper' or 'scissors'.");
let pl2 = (prompt(">> "));


if (pl1 === "rock" || pl1 ==="paper" || pl1 === "scissors" ) {
    console.log(`Player 1, you entered ${pl1}!`);
} else {
    console.log("Player 1, your entry was invalid!!");
}

if (pl2 === "rock" || pl2 ==="paper" || pl2 === "scissors" ) {
    console.log(`Player 2, you entered ${pl2}!`);
} else {
    console.log("Player 2, your entry was invalid!!");
}

if (pl1 === "rock") {
    if (pl2 === "scissors") {
        console.log("Player 1, you win!!");
    } else if (pl2 === "paper") {
        console.log("Player 2, you win!!")
    } else if (pl2 === "rock") {
        console.log("It's a draw!!")}
}

if (pl1 === "paper") {
    if (pl2 === "scissors") {
        console.log("Player 2, you win!!");
    } else if (pl2 === "paper") {
        console.log("It's a draw!!")
    } else if (pl2 === "rock") {
        console.log("Player 1, you win!!")
    }
}

if (pl1 === "scissors") {
    if (pl2 === "scissors") {
        console.log("It's a draw!!");
    } else if (pl2 === "paper") {
        console.log("Player 1, you win!!")
    } else if (pl2 === "rock") {
        console.log("Player 2, you win!!")
    }
}