let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "default message";

let messageEl = document.getElementById("message-el");
//sumEl = document.querySelector("#sum-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let player = {
    name: "Per",
    chips: 200,
    sayHello: function(){
        console.log("Howdy!");
    }
    
};

playerEl.textContent = player.name + ": $" + player.chips;

function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?";
    } else if (sum === 21){
        message = "You've got Blackjack! ";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: "
    for( let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
}

function getRandomCard(){
    randomNumber =  Math.floor( Math.random() * 13) // 0-12
    if (randomNumber >= 10){
        return 10;
    } else if (randomNumber === 0){
        return 11;
    } else {
        return randomNumber;
    }
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }

}

