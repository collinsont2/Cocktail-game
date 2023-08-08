//lists of ingredients for drinks
let martini = ["Gin", "Dry Vermouth", "Olive"];
let pinaColada = ["White Rum", "Bacardi", "Coconut", "pineapple", "Lime Juice"];
let bloodyMary = ["Vodka", "Tomato Juice", "Lemon Juice", "Worcestershire Sause", "Tabasco"];

// list of drinks questions
const drinklist = ['martini', 'pinaColada', 'bloodyMary'];

// shuffle array of drinks to randomise question given
const shuffledDrink = drinklist.sort(() => Math.random() - 0.5);
var drink = shuffledDrink[0];
document.getElementById("title").innerHTML = drink + ("!")

//show the empty glass of the choosen drink
function drinkImage() {
    for (let i of shuffledDrink) {
        if (drink == i) {
            var image = document.getElementById("empty-" + (i))
            image.style.display = 'inline-block';
        } else {
            break;
        }
    }
}
function ansTrue() {
    alert("entered");
    if (drink == 'martini') {
        alert("as martini");
        var userAns = document.getElementById("missing-ingredient").value;
        const answer = [shuffledmartini.length - 1];
        alert(answer);
        const userAnsCap = userAns.toUpperCase();
        const answerCap = answer.toUpperCase();
        if (userAnsCap = answerCap) {
            correct = true;
            alert(correct);
        } else {
            correct = false;
            alert(correct);
        }
    }
}

// function that checks if input is correct answer for context





drinkImage();

//display ingredients with one missing
if (drink == 'martini') {
    const shuffledmartini = martini.sort(() => Math.random() - 0.5);
    let ingredients = document.getElementById("ingredients");
    var f = 0;
    for (let i of shuffledmartini) {
        if (f < 2) {
            let li = document.createElement("li");
            li.innerText = i;
            ingredients.appendChild(li);
            f += 1;
        } else {
            break;
        }
    }
}

if (drink == 'martini' || ansTrue == true) {
    var correct = ansCheck(shuffledmartini);
}