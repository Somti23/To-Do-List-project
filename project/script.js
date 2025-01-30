// Function to add a new task
function addtask() {
    let taskInput = document.getElementById('input-box').value;
    
    // Check if input is empty
    if (taskInput === '') {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    let li = document.createElement('li');
    li.textContent = taskInput;

    // Create a delete button inside each list item
    let deleteBtn = document.createElement('span');
    deleteBtn.textContent = '×';
    deleteBtn.onclick = function() {
        li.remove(); // Remove the task when the delete button is clicked
    };
    
    // Add delete button to the list item
    li.appendChild(deleteBtn);

    // Add an event listener to mark tasks as completed
    li.addEventListener('click', function() {
        li.classList.toggle('checked'); // Toggle the 'checked' class when clicked
    });

    // Add the new task to the task list
    document.getElementById('tasklist').appendChild(li);

    // Clear the input field after adding the task
    document.getElementById('input-box').value = '';
}
