// script.js
const titles = [
    "An UI Designer",
    "A Frontend Developer",
    "A Competitive Programmer"

];

const titleElement = document.querySelector('.title');
let currentIndex = 0;

function typeTitle(title, index, charIndex) {
    if (charIndex <= title.length) {
        titleElement.textContent = title.substring(0, charIndex);
        setTimeout(() => {
            typeTitle(title, index, charIndex + 1);
        }, 100); // Typing speed: 100 milliseconds per character
    } else {
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % titles.length;
            typeTitle(titles[currentIndex], currentIndex, 0);
        }, 2000); // Wait for 2 seconds before typing the next title
    }
}

typeTitle(titles[currentIndex], currentIndex, 0);
