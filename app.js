function onReady() {
	const addToDoForm = document.getElementById('addToDoForm');
	const newToDoText = document.getElementById('newToDoText');
	const toDoList = document.getElementById('toDoList');
	const deleteButton = document.getElementById("deleteButton");
	addToDoForm.addEventListener('submit', (event) => {
		event.preventDefault();

		// get the text
		let title = newToDoText.value;

		// create a new li
		let newLi = document.createElement('li');

		//create a new input for the checkbox
		let checkbox = document.createElement('input');

		//set the input's type to checkbox
		checkbox.type = "checkbox";

		//set the title
		newLi.textContent = title;

		//attach it to the ul
		toDoList.appendChild(newLi);

		//attach the checkbox to the li
		newLi.appendChild(checkbox);

		//empty the input
		newToDoText.value = '';
	});
	
	deleteButton.addEventListener("click", function() {
		var todo = document.querySelectorAll("LI");
		var input = document.querySelectorAll("INPUT");
			for(i = 0; i < input.length; i++){
				if(input[i].checked === true){
						input[i].parentNode.remove();
				}
			}
	});
}
window.onload = function () {
	onReady() ;
}