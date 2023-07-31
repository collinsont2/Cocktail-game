//lists of ingredients for drinks
let martini = ["Gin", "Dry Vermouth", "Olive"];
let pinaColada = ["White Rum", "Bacardi", "Coconut", "pineapple", "Lime Juice"];
let bloodyMary = ["Vodka", "Tomato Juice", "Lemon Juice", "Worcestershire Sause", "Tabasco"];

// list of drinks questions
const drinklist = ['martini', 'pinaColada', 'bloodyMary'];

// shuffle array of drinks to randomise question given
const shuffledArray = drinklist.sort(() => Math.random() - 0.5);
var drink = shuffledArray[0];
document.getElementById("title").innerHTML = drink + ("!")

//show the empty glass of the choosen drink
function drinkImage() {
    for (let i of shuffledArray) {
        if (drink == i) {
            var image = document.getElementById("empty-" + (i))
            image.style.display = 'inline-block';
        } else {
            break;
        }
    }
}

drinkImage();

//display ingredients with one missing