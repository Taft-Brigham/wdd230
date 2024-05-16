// Get references to input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create click event listener for Add Chapter button
button.addEventListener('click', () => {
    // Check if input is not blank
    if (input.value !== '') {
        // Create li element
        const li = document.createElement('li');
        // Create delete button
        const deleteButton = document.createElement('button');
        // Populate li element textContent with input value
        li.textContent = input.value;
        // Populate button textContent with ❌
        deleteButton.textContent = '❌';
        // Append li element with delete button
        li.appendChild(deleteButton);
        // Append li element to the unordered list in HTML
        list.appendChild(li);
        // Add event listener to delete button to remove li element when clicked
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });
        // Send focus to the input element
        input.focus();
        // Clear the input value
        input.value = '';
    } else {
        // If input is blank, provide a message or focus on input
        input.focus();
    }
});
