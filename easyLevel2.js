//lists of ingredients for drinks
let martini = ["Gin", "Dry Vermouth", "Olive"];
let pinaColada = ["White Rum", "Bacardi", "Coconut", "pineapple", "Lime Juice"];
let bloodyMary = ["Vodka", "Tomato Juice", "Lemon Juice", "Worcestershire Sause", "Tabasco"];
// list of drinks questions
const drinklist = ['martini', 'pinaColada', 'bloodyMary'];
// shuffle array of drinks to randomise question given
const shuffledDrink = drinklist.sort(() => Math.random() - 0.5);
var drink = shuffledDrink[0];
var correct = "nothing";
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
    var userAns = document.getElementById("missing-ingredient").value;
    alert("user answer = " + userAns);
    alert("the correct answer = " + answer);
    const userAnsCap = userAns.toUpperCase();
    alert("comparing user answer = " + userAnsCap);
    const answerCap = answer.toUpperCase();
    alert("comparing answer = " + answerCap);
    if (userAnsCap == answerCap) {
        correct = "CORRECT";
        alert("correct");
        document.getElementById("answerReveal").innerHTML = (correct);
        for (let i of shuffledDrink) {
            if (drink == i) {
                var image = document.getElementById("empty-" + (i))
                image.style.display = 'none';
                var newImage = document.getElementById(i)
                newImage.style.display = 'inline-block';
            } else {
                break;
            }
        }
    } else {
        correct = "INCORRECT";
        alert("incorrect");
    }
}

function nextQuestion() {
    correct = 'nothing';
    drinkImage();
    for (let i of shuffledDrink) {
        if (drink == i) {
            var newImage = document.getElementById(i)
            newImage.style.display = 'none';
        }
    }
}
function questionForm(levelDrink) {
    // works // alert(levelDrink);
    var shuffledingredients = levelDrink.sort(() => Math.random() - 0.5);
    //alert(shuffledingredients[0]);
    for (let i of shuffledingredients) {
        if (f < (shuffledingredients.length - 1)) {
            let li = document.createElement("li");
            li.innerText = i;
            ingredients.appendChild(li);
            f += 1;
        } else {
            var answer = shuffledingredients[shuffledingredients.length - 1];
            //alert("the correct answer = " + answer);
            f = 0;
            break;
        }
    }
    return answer;
}

drinkImage();
//display ingredients with one missing
let ingredients = document.getElementById("ingredients");
var f = 0;
if (drink == 'martini') {
    answer = questionForm(martini);
} else if (drink == 'pinaColada') {
    answer = questionForm(pinaColada);
} else if (drink == 'bloodyMary') {
    answer = questionForm(bloodyMary);
}




