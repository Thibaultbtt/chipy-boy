// Navigation
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

document.getElementById("startBtn").addEventListener("click", () => {
    screen1.classList.remove("active");
    screen2.classList.add("active");
});

document.getElementById("ouiBtn").addEventListener("click", () => {
    screen2.classList.remove("active");
    screen3.classList.add("active");
});

// Carousel automatique
let current = 0;
const images = document.querySelectorAll(".carousel img");

setInterval(() => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
}, 3000);

// Bouton Non qui fuit
const nonBtn = document.getElementById("nonBtn");

nonBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    nonBtn.style.left = x + "px";
    nonBtn.style.top = y + "px";
});
