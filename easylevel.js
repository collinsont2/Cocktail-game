//lists of ingredients for drinks
let martini = ["Gin", "Dry Vermouth", "Olive"];
let pinaColada = ["White Rum", "Bacardi", "Coconut", "pineapple", "Lime Juice"];
let bloodyMary = ["Vodka", "Tomato Juice", "Lemon Juice", "Worcestershire Sause", "Tabasco"];

// list of drinks questions
const drinklist = ['martini', 'pinaColada', 'bloodyMary'];

// shuffle array of drinks to randomise question given
const shuffledArray = drinklist.sort(() => Math.random() - 0.3);
var drink = shuffledArray[0];
document.getElementById("title").innerHTML = drink
