let martini = ["Gin", "Dry Vermouth", "Olive"];
let list = document.getElementById("martiniArray");
martini.forEach((item) => {
    let li =
        document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
});
let pinaColada = ["White Rum", "Bacardi", "Coconut", "pineapple", "Lime Juice"];
let listp = document.getElementById("pinaColadaArray");
pinaColada.forEach((item) => {
    let li =
        document.createElement("li");
    li.innerText = item;
    listp.appendChild(li);
});
let bloodyMary = ["Vodka", "Tomato Juice", "Lemon Juice", "Worcestershire Sause", "Tabasco"];
let listb = document.getElementById("bloodyMaryArray");
bloodyMary.forEach((item) => {
    let li =
        document.createElement("li");
    li.innerText = item;
    listb.appendChild(li);
});
