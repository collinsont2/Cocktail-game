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
//var drink3 = (shuffledDrink[2]);
let level1 = true;
let level2 = false;
let level3 = false;
var correct = "nothing";

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
    //alert("user answer = " + userAns);
    //alert("the correct answer = " + answer);
    const userAnsCap = userAns.toUpperCase();
    //alert("comparing user answer = " + userAnsCap);
    const answerCap = answer.toUpperCase();
    //alert("comparing answer = " + answerCap);
    if (userAnsCap == answerCap) {
        correct = "CORRECT";
        //alert("correct");
        document.getElementById("answerReveal").innerHTML = (correct);
        if (level1 === true) {
            //alert("level 1 true");
            var image = document.getElementById("empty-" + (drink1))
            image.style.display = 'none';
            var newImage = document.getElementById(drink1)
            newImage.style.display = 'inline-block';
        } else if (level2 === true) {
            //alert("level 2 true");
            var image = document.getElementById("empty-" + (drink2))
            image.style.display = 'none';
            var newImage = document.getElementById(drink2)
            newImage.style.display = 'inline-block';
        } else if (level3 === true) {
            //alert("level 3 true");
            var image = document.getElementById("empty-" + (drink3))
            image.style.display = 'none';
            var newImage = document.getElementById(drink3)
            newImage.style.display = 'inline-block';
        }
    } else {
        correct = "INCORRECT";
        document.getElementById("answerReveal").innerHTML = (correct);
        //alert("incorrect");
    }
}

function levelTwo() {
    //alert("level 2 started");
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
    //alert("level 3 started");
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
    //var resetTitle = document.getElementById("title")
    //resetTitle.style.display = 'none';
    for (let i of shuffledDrink) {
        //if (drink1 == i) {
        var newImage = document.getElementById(i)
        newImage.style.display = 'none';
        /*} else if (drink2 == i) {
        var newImage = document.getElementById(i)
        newImage.style.display = 'none';*/
    }
    if (level1 === true) {
        //alert("level 1 complete");
        level1 = false;
        level2 = true;
        levelTwo();
    } else if (level2 === true) {
        //alert("level 2 complete");
        level2 = false;
        level3 = true;
        levelThree()
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

//display ingredients with one missing
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


