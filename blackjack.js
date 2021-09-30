let firstCard = 10
let secondCard = 4
let cards =[firstCard, secondCard] //array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame() {
    renderGame()
}

function renderGame() {

    cardsEl.textContent = "Cards:" 
    for (i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " " 
    }
    //cardsEl.textContent = "Cards:" + cards[0] + " " + cards[1]

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message ="You got Blackjack!"
        hasBlackJack = true
    } else {
        message ="You are out of the game"
        isAlive = false
    }

    messageEl.textContent = message

}

function newCard() {
    let newCard = 6
    sum += newCard
    cards.push(newCard)
    renderGame()
}