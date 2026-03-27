// Initialize Swiper Hero Slider
const swiper = new Swiper('.mySwiper', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
});

// Terminal Typing Effect for the About Section
const textToType = ">> Connecting to IIIT Kota mainframe... Connection secure. Welcome to CYPH3R.";
const typeTarget = document.getElementById("typewriter-text");
let index = 0;

function typeWriter() {
    if (index < textToType.length) {
        typeTarget.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, Math.floor(Math.random() * 60) + 30);
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(typeWriter, 500);
            observer.disconnect();
        }
    });
});
observer.observe(document.getElementById('about'));


// ==========================================
// NEW: Lightbox (Image Click-to-Enlarge) Logic
// ==========================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galleryImages = document.querySelectorAll('.gallery-img');
const closeBtn = document.querySelector('.close-lightbox');

// Open lightbox on image click
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Display the hidden container
        lightboxImg.src = img.src;       // Set the high-res image source
    });
});

// Close lightbox when clicking the 'X'
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking anywhere on the dark background
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});
