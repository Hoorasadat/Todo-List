var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var listItems = document.querySelectorAll("span");
var delBtns = ul.querySelectorAll("button");

for (i=0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", addLineThrough);
}

function addLineThrough(event) {
	event.target.classList.toggle("done");
}

for (i=0; i < delBtns.length; i++) {
	delBtns[i].addEventListener("click", delItem);
}

function delItem(event) {
	event.target.parentElement.remove();
}

button
.addEventListener("click", addItemAfterClick);
input.addEventListener("keypress", addItemAfterKeypress);

function addItemAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addItemAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");

	var spn = document.createElement("span");
	spn.appendChild(document.createTextNode(input.value));
	spn.addEventListener("click", addLineThrough);
	li.appendChild(spn);

	var btn = document.createElement("button");
	btn.innerHTML = 'Delete';
	btn.addEventListener("click", delItem);
	btn.classList.add("delete");
	li.appendChild(btn);

	ul.appendChild(li);
	input.value = "";
}
