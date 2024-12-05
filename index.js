document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('textinput'); // Input field
    const todoList = document.getElementById('todo-list'); // List container
    const addButton = document.getElementById('add'); // Button with ID 'add'

    // Function to add a new to-do item
    function addTodoItem() {
        const todoText = input.value.trim(); // Get and trim input value

        if (todoText === '') {
            alert('Please enter a task.'); // Alert if input is empty
            return;
        }

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = todoText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove';

        // Add remove functionality
        removeButton.addEventListener('click', () => {
            listItem.remove(); // Remove the list item on click
        });

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Add the list item to the to-do list
        todoList.appendChild(listItem);

        // Clear the input field
        input.value = '';
    }

    // Attach the addTodoItem function to the Add button's click event
    addButton.addEventListener('click', addTodoItem);
});
