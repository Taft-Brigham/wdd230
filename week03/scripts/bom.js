// Get references to input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

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

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

button.addEventListener('click', () => {
if (input.value != '') {  // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
}
});
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; // note the use of the displayList parameter 'item'
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
      list.removeChild(li);
      deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
      input.focus(); // set the focus back to the input
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
  }

  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

  function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
  }
  chapter = chapter.slice(0, chapter.length - 1);

  chaptersArray = chaptersArray.filter((item) => item !== chapter);

  function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }