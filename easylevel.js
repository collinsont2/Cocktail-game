//lists of ingredients for drinks
let martini = ["Gin", "Dry Vermouth", "Olive"];
let pinaColada = ["White Rum", "Bacardi", "Cocoanut", "pineapple", "Lime Juice"];
let bloodyMary = ["Vodka", "Tomato Juice", "Lemon Juice", "Worcestershire Sause", "Tabasco"];

// list of drinks questions
const drinks = ['martini', 'pinaColada', 'bloodyMary'];

// function that shuffles array of drinks to randomise question given
/*function shufflearr(list){
    const shuffledArray = list.sort(() => 0.5 - Math.random() - 0.5);
    alert(shuffledArray[0]);
    return shuffledArray;
}*/


const shuffledArray = drinks.sort(() => Math.random() - 0.5);
alert(shuffledArray);

//shufflearr(drinks);//

//let (shufflearr(drinks)) = document.createElement("title");//
