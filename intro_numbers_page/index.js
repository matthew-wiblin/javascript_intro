// COUNTER Program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

// Random roll 1 to 10

const randomButton = document.getElementById("randomButton");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");
const min = 1;
const max = 10;
let randomNum1;
let randomNum2;
let randomNum3;

randomButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    Label1.textContent = randomNum1 + " -- ";
    Label2.textContent = randomNum2 + " -- ";
    Label3.textContent = randomNum3;
}

// Checkbox and radio

const myCheckBox = document.getElementById("myCheckBox")
const visaBtn = document.getElementById("visaBtn")
const mastercardBtn = document.getElementById("mastercardBtn")
const subSubmit = document.getElementById("subSubmit")
const subResult = document.getElementById("subResult")
const paymentResult = document.getElementById("paymentResult")

subSubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "you are subscribed"
    }else{
        subResult.textContent = "you are not subscribed"
    }
    if(visaBtn.checked){
        paymentResult.textContent = "you are paying with visa"
    }else if(mastercardBtn.checked){
        paymentResult.textContent = "you are paying with mastercard"
    }else{
        paymentResult.textContent = "you must select a payment type"
    }
}

// Number Guessing game

const minNum = 1;
const maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

document.getElementById("submitGuess").onclick = function(){
    let guess = Number(document.getElementById("guessInput").value);
    const onSubmitMessage = document.getElementById("onSubmitMessage");

    if(isNaN(guess)){
        onSubmitMessage.textContent = "Please enter a valid number";
    }else if(guess < minNum || guess > maxNum){
        onSubmitMessage.textContent = "Please enter a valid number";
    }else{
        attempts++;
        if(guess < answer){
            onSubmitMessage.textContent = `${guess} is too low! Try a higher number`;
        }else if(guess > answer){
            onSubmitMessage.textContent = `${guess} is too high! Try a lower number`;
        }else{
            onSubmitMessage.textContent = `${guess} is correct! It took ${attempts} attempts`;
            attempts = 0;
            answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        }
    }
}

/** Alternate number guessing game

while(running){
    guess = window.prompt(`guess number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    }else{
        attempts++;
        if(guess < answer){
            window.alert("Too low! Guess a higher number");
        }else if(guess > answer){
            window.alert("Too high! Guess a lower number");
        }else{
            window.alert(`Correct! it took ${attempts} attempts`);
            running = false;
        }
    }
}

*/

