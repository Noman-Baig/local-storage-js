const nameInput = document.getElementById("name");
const namesContainerJS = document.getElementById("namesContainer");

let friendNames = [];
if (JSON.parse(localStorage.getItem("names")) === null) {
	console.log("asd");
	friendNames = [];
} else {
	friendNames = JSON.parse(localStorage.getItem("names"));
}

function onBtnClick() {
	friendNames.push(nameInput.value);
	localStorage.setItem("names", JSON.stringify(friendNames));
}

function fetchFromStorage() {
	const namesArray = JSON.parse(localStorage.getItem("names"));
	for (name of namesArray) {
		const h2 = document.createElement("h2");
		h2.innerText = name;
		namesContainerJS.appendChild(h2);
	}
}
