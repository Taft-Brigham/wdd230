// script.js

// document.addEventListener('DOMContentLoaded', function() {
//     const lastModifiedDiv = document.getElementById('lastModified');
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
//     lastModifiedDiv.textContent = 'Last Modified: ' + new Date(document.lastModified).toLocaleDateString('en-US', options);
// });

// getDates.js

document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    const yearSpan = document.querySelector('.date');
    yearSpan.textContent = new Date().getFullYear();

    // Update last modified date
    const lastModifiedParagraph = document.getElementById('lastModified');
    lastModifiedParagraph.textContent = "Last modification: " + document.lastModified;
});

const hamButton = document.querySelector('#menubutton');
const navigation = document.querySelector('#anime');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    main.classList.toggle("dark-mode");
    if (modeButton.textContent.includes("🌓")) {
        modeButton.textContent = "🌗";
    } else {
        modeButton.textContent = "🌓";
    }
});

