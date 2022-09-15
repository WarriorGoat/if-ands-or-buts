let pinCode = 5678

const prompt = require('prompt-sync')({sigint: true});

console.log("Please enter the pin for the lock-box:");
let pin = Number(prompt(">> "));

if (pinCode === pin) {
    console.log("Success!!");
}else {
    console.log("Your entry is a failure!!");
}
