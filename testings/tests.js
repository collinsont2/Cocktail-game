// element out of list
let data = ["Ram", "Shyam",
	"Sita", "Gita"];
/*let list =
	document.getElementById("myList");

data.forEach((item) => {
	let li =
		document.createElement("li");
	li.innerText = item;
	list.appendChild(li);
});*/

//shuffle type 1
/*const arr = ['dog', 'cat', 'dragon','slingacademy.com', 'banana'];

const shuffledArr = arr.sort(() => Math.random() - 0.5);
alert(shuffledArr);*/

//shuffle type 2
const last = data[data.length - 1];
alert("the last value =" + last);