//lists of ingredients for drinks
let martini = ["Gin", "Dry Vermouth", "Olive"];
let pinaColada = ["White Rum", "Bacardi", "Coconut", "pineapple", "Lime Juice"];
let bloodyMary = ["Vodka", "Tomato Juice", "Lemon Juice", "Worcestershire Sause", "Tabasco"];
// list of drinks questions
const drinklist = ['martini', 'pinaColada', 'bloodyMary'];
// shuffle array of drinks to randomise question given
const shuffledDrink = drinklist.sort(() => Math.random() - 0.5);
var drink1 = shuffledDrink[0];
var drink2 = (shuffledDrink[1]);
var drink3 = (shuffledDrink[2]);
let level1 = true;
let level2 = false;
let level3 = false;
var correct = "nothing";
var score = 0

//show the empty glass of the choosen drink
function drinkTitle(drink) {
    document.getElementById("title").innerHTML = drink + ("!")
}
function drinkImage(drink) {
    var image = document.getElementById("empty-" + (drink))
    image.style.display = 'inline-block';
}
function ansTrue() {
    var userAns = document.getElementById("missing-ingredient").value;
    const userAnsCap = userAns.toUpperCase();
    const answerCap = answer.toUpperCase();
    if (userAnsCap == answerCap) {
        correct = "CORRECT";
        score++;
        document.getElementById("answerReveal").style.border = '3px solid #13bd46';
        document.getElementById("answerReveal").style.color = "#13bd46";
        document.getElementById("answerReveal").innerHTML = (correct);
        if (level1 === true) {
            var image = document.getElementById("empty-" + (drink1))
            image.style.display = 'none';
            var newImage = document.getElementById(drink1)
            newImage.style.display = 'inline-block';
        } else if (level2 === true) {
            var image = document.getElementById("empty-" + (drink2))
            image.style.display = 'none';
            var newImage = document.getElementById(drink2)
            newImage.style.display = 'inline-block';
        } else if (level3 === true) {
            var image = document.getElementById("empty-" + (drink3))
            image.style.display = 'none';
            var newImage = document.getElementById(drink3)
            newImage.style.display = 'inline-block';
        }
    } else {
        correct = "INCORRECT";
        document.getElementById("answerReveal").innerHTML = (correct);
    }
}

function levelTwo() {
    drinkTitle(drink2);
    drinkImage(drink2);
    if (drink2 == 'martini') {
        answer = questionForm(martini);
    } else if (drink2 == 'pinaColada') {
        answer = questionForm(pinaColada);
    } else if (drink2 == 'bloodyMary') {
        answer = questionForm(bloodyMary);
    }
}

function levelThree() {
    drinkTitle(drink3);
    drinkImage(drink3);
    if (drink3 == 'martini') {
        answer = questionForm(martini);
    } else if (drink3 == 'pinaColada') {
        answer = questionForm(pinaColada);
    } else if (drink3 == 'bloodyMary') {
        answer = questionForm(bloodyMary);
    }
}
function nextQuestion() {
    correct = 'nothing';
    document.getElementById("ingredients").innerHTML = '';
    var resetReveal = document.getElementById("answerReveal")
    resetReveal.style.display = 'none';
    for (let i of shuffledDrink) {
        var newImage = document.getElementById(i)
        newImage.style.display = 'none';
    }
    if (level1 === true) {
        level1 = false;
        level2 = true;
        levelTwo();
    } else if (level2 === true) {
        level2 = false;
        level3 = true;
        levelThree()
    }


}
function questionForm(levelDrink) {
    var shuffledingredients = levelDrink.sort(() => Math.random() - 0.5);
    for (let i of shuffledingredients) {
        if (f < (shuffledingredients.length - 1)) {
            let li = document.createElement("li");
            li.innerText = i;
            ingredients.appendChild(li);
            f += 1;
        } else {
            var answer = shuffledingredients[shuffledingredients.length - 1];
            f = 0;
            break;
        }
    }
    return answer;
}

let ingredients = document.getElementById("ingredients");
var f = 0;
if (level1 = true) {
    drinkTitle(drink1);
    drinkImage(drink1);
    if (drink1 == 'martini') {
        answer = questionForm(martini);
    } else if (drink1 == 'pinaColada') {
        answer = questionForm(pinaColada);
    } else if (drink1 == 'bloodyMary') {
        answer = questionForm(bloodyMary);
    }
}

export var endScore = score;

