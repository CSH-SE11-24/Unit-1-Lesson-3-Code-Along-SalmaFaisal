// Code Along Norms: 
// 1. Only be on Repl.it/classroom resources
// 2. Actively follow along and engage
// 3. Ask questions and flag if you get stuck
// 4. Take notes as needed!

let name = prompt("What's your name?")
//Concatenation
// With a + sign , need to add a space
console.log("Welcome to my game, "+ name)
// with a , sign spaces added automatically 
console.log("Welcome to my game", name)
//string INTERPOLATION
//with backticks you can input variabls directly
console.log(`Welcome to my game,${name}`)

let role =prompt ("What role do you want?( magigican,fighter, queen)")
console.log(`Okay, ${name}, your role is now ${role}`)

//Prompt assume the input is a string
let powerLevel = prompt("What is your power level?")
//To change to a number, use parseInt/parseFloat
powerLevel= parseInt(powerLevel)
console.log(typeof powerLevel)
// let powerLevelNum = parseInt(powerLevel)