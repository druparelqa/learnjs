// let person = {
//     name: "Devansh",
//     age: 15,
//     country: "USA"
// }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
let greetingEl = document.getElementById("greeting-el")

// let hands = ["rock", "paper", "scissor"]

// function randomItem() {
//     let random =  Math.floor(Math.random()*3)
//     return hands[random]
// }
// //greetingEl.textContent = randomItem()

// function logData() {
//     return person.name + " is " + person.age + " years old and lives in " + person.country   
// }

// function getDiscount() {
//     if (person.age < 6) {
//         return "Free"
//     } else if (person.age < 18){
//         return "Child Discount"
//     } else if (person.age < 27){
//         return "Student Discount"
//     } else if (person.age < 67){
//         return "Full Price"
//     } else {
//         return "Senior Citizen Discount"
//     }
// }

// function largestCountries() {
//     for (i=0; i < largeCountries.length; i++) {
//         largeCountries[i] = "- " + largeCountries[i] 
//     }
//    greetingEl.textContent = largeCountries
// }

// largeCountries2.pop()
// largeCountries2.push("Pakistan")
// largeCountries2.shift()
// largeCountries2.unshift("China")
// console.log(largeCountries2)



// //greetingEl.textContent = logData()
// //greetingEl.textContent = getDiscount()

let fruit = ["apple", "orange","apple","apple","orange" ]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")
greetingEl.textContent = "Welcome to Fruit Market"

function sortFruit() {
    for (i = 0; i < fruit.length; i++) {
        if (fruit[i] === "apple") {
            appleShelf.textContent += fruit[i] + ", "
        } else {
            orangeShelf.textContent += fruit[i] + ", "
        }
    }

}

sortFruit()