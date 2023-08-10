//lists of ingredients for drinks
let martini = ["Gin", "Dry Vermouth", "Olive"];
let pinaColada = ["White Rum", "Bacardi", "Coconut", "pineapple", "Lime Juice"];
let bloodyMary = ["Vodka", "Tomato Juice", "Lemon Juice", "Worcestershire Sause", "Tabasco"];
// list of drinks questions
const drinklist = ['martini', 'pinaColada', 'bloodyMary'];

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
        correct = true;
        alert("correct");
    } else {
        correct = false;
        alert("incorrect");
    }
}
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

// shuffle array of drinks to randomise question given
const shuffledDrink = drinklist.sort(() => Math.random() - 0.5);

for (let drink of shuffledDrink) {
    document.getElementById("title").innerHTML = drink + ("!")

    drinkImage();
    //display ingredients with one missing
    let ingredients = document.getElementById("ingredients");
    var f = 0;
    //for martini
    if (drink == 'martini') {
        var shuffledmartini = martini.sort(() => Math.random() - 0.5);
        for (let i of shuffledmartini) {
            if (f < 2) {
                let li = document.createElement("li");
                li.innerText = i;
                ingredients.appendChild(li);
                f += 1;
            } else {
                var answer = shuffledmartini[shuffledmartini.length - 1];
                //alert("the correct answer = " + answer);
                f = 0;
                break;
            }
        }
    }
    //for bloodymary
    if (drink == 'bloodyMary') {
        var shuffledBM = bloodyMary.sort(() => Math.random() - 0.5);
        for (let i of shuffledBM) {
            if (f < 4) {
                let li = document.createElement("li");
                li.innerText = i;
                ingredients.appendChild(li);
                f += 1;
            } else {
                var answer = shuffledBM[shuffledBM.length - 1];
                //alert("the correct answer = " + answer);
                f = 0;
                break;
            }
        }
    }
    // for pinacolada
    if (drink == 'pinaColada') {
        var shuffledPC = pinaColada.sort(() => Math.random() - 0.5);
        for (let i of shuffledPC) {
            if (f < 4) {
                let li = document.createElement("li");
                li.innerText = i;
                ingredients.appendChild(li);
                f += 1;
            } else {
                var answer = shuffledPC[shuffledPC.length - 1];
                //alert("the correct answer = " + answer);
                f = 0;
                break;
            }
        }
    }

}


