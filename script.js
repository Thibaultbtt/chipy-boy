// Éléments DOM
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const surpriseBtn = document.getElementById('surpriseBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Carousel
const carouselImages = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentImageIndex = 0;

// Fonction pour changer de page
function goToPage(fromPage, toPage) {
    fromPage.classList.remove('active');
    toPage.classList.add('active');
}

// Bouton Surprise - Passage à la page 2
surpriseBtn.addEventListener('click', () => {
    goToPage(page1, page2);
});

// Carousel - Navigation
function showImage(index) {
    carouselImages.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + carouselImages.length) % carouselImages.length;
    showImage(currentImageIndex);
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(currentImageIndex);
});

// Carousel automatique (optionnel)
setInterval(() => {
    if (page2.classList.contains('active')) {
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
        showImage(currentImageIndex);
    }
}, 4000);

// Bouton Oui - Passage à la page 3
yesBtn.addEventListener('click', () => {
    goToPage(page2, page3);
    
    // Effet de confettis (optionnel - créer des coeurs qui tombent)
    createHearts();
});

// Bouton Non - Se déplace aléatoirement
noBtn.addEventListener('mouseenter', () => {
    moveNoButton();
});

// Déplacer le bouton "Non" aléatoirement
function moveNoButton() {
    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Dimensions de la zone disponible
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;
    
    // Position aléatoire
    const randomX = Math.random() * maxX - (maxX / 2);
    const randomY = Math.random() * maxY - (maxY / 2);
    
    // Appliquer la position
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Créer des coeurs qui tombent (effet bonus)
function createHearts() {
    const heartsCount = 30;
    
    for (let i = 0; i < heartsCount; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.fontSize = Math.random() * 30 + 20 + 'px';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '-50px';
            heart.style.zIndex = '1000';
            heart.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
            heart.style.opacity = Math.random() * 0.5 + 0.5;
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 100);
    }
}

// Animation de chute des coeurs
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        to {
            top: 100vh;
            transform: translateY(100px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);