//select the elements
const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("todo-input");
const addBtn = document.querySelector(".add");

const time = document.getElementById("time");
const date = document.getElementById("date");

//classess name
const check = "fa-check-circle";
const uncheck = "fa-circle-thin";
const lineThrough = "lineThrough";

//show time and date

//set date
const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
date.innerHTML = today.toLocaleDateString("en-US", options);

// set time
const showTime = (time) => {
	var timeNow = new Date();
	var hours = timeNow.getHours();
	var minutes = timeNow.getMinutes();
	var timeString = "" + (hours > 12 ? hours - 12 : hours);
	timeString += (minutes < 10 ? ":0" : ":") + minutes;

	// timeString += hours >= 12 ? ` PM` : " A.M";
	time.innerHTML = timeString;
};
showTime(time);

// initial todoLsts and todos id
let todoLists = [];
let id = 0;

//get item from localStorage
let storageData = localStorage.getItem("TODO");

//check if localStorage data is empty or not
if (storageData) {
	todoLists = JSON.parse(storageData);
	id = todoLists.length; // set the id to the last one in the list
	loadList(todoLists);
} else {
	todoLists = [];
	id = 0;
}

//load items to the user's interface
function loadList(array) {
	array.forEach(function (item) {
		addToDo(item.name, item.id, item.done, item.trash);
	});
}

// clear the localStorage data
clear.addEventListener("click", function () {
	localStorage.clear();
	location.reload();
});

// add todo function
function addToDo(todo, id, done, trash) {
	if (trash) {
		return;
	}

	const DONE = done ? check : uncheck;
	const LINE = done ? lineThrough : "";

	const item = `
        <li class="item">
            <i class="fa ${DONE} ci" job="complete" id="${id}"></i>
            <p class="text ${LINE}" >${todo}</p>
            <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
        </li>
        `;

	const position = "beforeend";
	list.insertAdjacentHTML(position, item);
}
//add item to the list function
function itemToBeAdded() {
	let todo = input.value;
	if (todo) {
		addToDo(todo, id, false, false);

		todoLists.push({
			name: todo,
			id: id,
			done: false,
			trash: false,
		});

		//set item to localStorage (this code must be added where the todoLists array updated)
		localStorage.setItem("TODO", JSON.stringify(todoLists));

		id++;
	} else {
		alert("Please type your todo");
	}
	input.value = "";
}

//add an item to the list when user click enter func
addBtn.addEventListener("click", itemToBeAdded);

//add an item to the list in enter key
document.addEventListener("keyup", function (event) {
	if (event.keyCode == 13) {
		itemToBeAdded();
	}
});

// complete todo function
function completeTodo(element) {
	element.classList.toggle(check);
	element.classList.toggle(uncheck);

	element.parentNode.querySelector(".text").classList.toggle(lineThrough);

	todoLists[element.id].done = todoLists[element.id].done ? false : true;
}

// remove todo function
function removeTodo(element) {
	element.parentNode.parentNode.removeChild(element.parentNode);

	todoLists[element.id].trash = true;
}

// target the items created dynamically

list.addEventListener("click", function (event) {
	const element = event.target; //return the clicked element iniside the lists;

	const elementJob = element.attributes.job ? element.attributes.job.value : "";

	if (elementJob && elementJob === "complete") {
		completeTodo(element);
	} else if (elementJob && elementJob === "delete") {
		removeTodo(element);
	}

	//set item to localStorage (this code must be added where the todoLists array updated)
	localStorage.setItem("TODO", JSON.stringify(todoLists));
});