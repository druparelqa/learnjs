let firstCard = 11
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

if (sum <= 20) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21){
    console.log("Wohoo! you got Blackjack!")
    hasBlackJack = true
} else {
    console.log("You are out of the game")
    isAlive = false
}
message = "we are logging out"
console.log(hasBlackJack)
console.log(isAlive)
console.log(message)