
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

// const modeButton = document.querySelector("#mode");
// const main = document.querySelector("main");

// modeButton.addEventListener("click", () => {
//     main.classList.toggle("dark-mode");
//     if (modeButton.textContent.includes("🌓")) {
//         modeButton.textContent = "🌗";
//     } else {
//         modeButton.textContent = "🌓";
//     }
// });


let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// event listeners for next and previous buttons
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     const slides = document.querySelectorAll('.slide');
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1; }
//     slides[slideIndex - 1].style.display = 'block';
//     setTimeout(showSlides, 3000); // Change image every 3 seconds
// }

// function nextSlide() {
//     const slides = document.querySelectorAll('.slide');
//     slides[slideIndex - 1].style.display = 'none';
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1; }
//     slides[slideIndex - 1].style.display = 'block';
// }

// function prevSlide() {
//     const slides = document.querySelectorAll('.slide');
//     slides[slideIndex - 1].style.display = 'none';
//     slideIndex--;
//     if (slideIndex < 1) { slideIndex = slides.length; }
//     slides[slideIndex - 1].style.display = 'block';
// }
