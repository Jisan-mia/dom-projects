// Get references to the HTML elements
const nameInput = document.getElementById('nameInput');
const reverseButton = document.getElementById('reverseButton');
const reversedNameDisplay = document.getElementById('reversedNameDisplay');

// Add an event listener to the button for the 'click' event
reverseButton.addEventListener('click', () => {
    // Get the value from the input field
    const name = nameInput.value;

    // Reverse the string value
    const reversedName = name.split('').reverse().join('');

    // Set the textContent of the display element to the reversed string
    reversedNameDisplay.textContent = reversedName;
});
