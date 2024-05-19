
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