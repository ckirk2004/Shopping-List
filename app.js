//Selectors
const groceryItemInput = document.querySelector('.grocery-item-input');
const addButton = document.querySelector('.add-button');
const addButton2 = document.querySelector('.add-button2');
const groceryListItems = document.querySelector('.grocery-list-items');
const filterOption = document.querySelector('filter');

//Event Listeners
document.addEventListener('DOMContentLoaded', getGroceries);
addButton.addEventListener('click', addItem);
addButton2.addEventListener('click', addItem);
groceryListItems.addEventListener('click', deleteCheck);
// filterOption.addEventListener('click', filterGroceryList);
//Functions

//Adds list items
function addItem(event) {
	// prevents submission and refresh
	event.preventDefault();
	//groceryItemDiv
	const groceryItemDiv = document.createElement('div');
	groceryItemDiv.classList.add('grocery-item-listing');
	//create li
	const newGroceryItem = document.createElement('li');
	newGroceryItem.innerText = groceryItemInput.value;
	newGroceryItem.classList.add('grocery-item');
	//adds the li to the div
	groceryItemDiv.appendChild(newGroceryItem);
	//Add item to local storage
	saveLocalTodos(groceryItemInput.value);
	//Checkmark button
	// const completedButton = document.createElement('button');
	// completedButton.innerHTML = '<i class="fas fa-check"></i>';
	// completedButton.classList.add('completed-button');
	// groceryItemDiv.appendChild(completedButton);
	//Delete button
	const trashButton = document.createElement('button');
	trashButton.innerHTML = '<i class="fas fa-trash"></i>';
	trashButton.classList.add('trash-button');
	groceryItemDiv.appendChild(trashButton);
	//adds to list
	groceryListItems.appendChild(groceryItemDiv);
	//Clear Input
	groceryItemInput.value = '';
}

function deleteCheck(event) {
	const item = event.target;
	//Delete item
	if (item.classList[0] === 'trash-button') {
		const todo = item.parentElement;
		todo.classList.add('fall');
		removeLocalTodos(todo);
		todo.addEventListener('transitionend', function () {
			todo.remove();
		});
	}

	// if (item.classList[0] === 'completed-button') {
	// 	const todo = item.parentElement;
	// 	todo.classList.toggle('completed');
	// }
}

//Save to Local Storage

function saveLocalTodos(todo) {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
}

function removeLocalTodos(todo) {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	const todoIndex = todo.children[0].innerText;
	todos.splice(todos.indexOf(todoIndex), 1);
	localStorage.setItem('todos', JSON.stringify(todos));
}

function getGroceries() {
	let todos;
	if (localStorage.getItem('todos') === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	todos.forEach(function (item) {
		const groceryItemDiv = document.createElement('div');
		groceryItemDiv.classList.add('grocery-item-listing');
		//create li
		const newGroceryItem = document.createElement('li');
		newGroceryItem.innerText = item;
		newGroceryItem.classList.add('grocery-item');
		//adds the li to the div
		groceryItemDiv.appendChild(newGroceryItem);

		//Checkmark button
		// const completedButton = document.createElement('button');
		// completedButton.innerHTML = '<i class="fas fa-check"></i>';
		// completedButton.classList.add('completed-button');
		// groceryItemDiv.appendChild(completedButton);
		//Delete button
		const trashButton = document.createElement('button');
		trashButton.innerHTML = '<i class="fas fa-trash"></i>';
		trashButton.classList.add('trash-button');
		groceryItemDiv.appendChild(trashButton);
		//adds to list
		groceryListItems.appendChild(groceryItemDiv);
	});
}

//  *** WIP ***
// function filterGroceryList(event) {
//     const gItems = groceryListItems.childNodes;
//     gItems.forEach(function(itemSelect) {
//         switch(event.target.value) {
//             case "all":
//                 break;
//             case 'Completed'
//                 if()
//         }
// });
// }
