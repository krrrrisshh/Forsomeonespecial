/* ==========================================
   FOR MY COCO ❤️
   SCRIPT.JS
   CHUNK 1
   Loading • Scroll • Intro
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    // =============================
    // ELEMENTS
    // =============================

    const loadingScreen = document.getElementById("loading-screen");
    const startButton = document.getElementById("startJourney");
    const fadeElements = document.querySelectorAll(".fade");

    // =============================
    // LOADING SCREEN
    // =============================

    window.addEventListener("load", () => {

        setTimeout(() => {

            loadingScreen.style.opacity = "0";
            loadingScreen.style.visibility = "hidden";

        }, 2200);

    });

    // =============================
    // CONTINUE BUTTON
    // =============================

    if (startButton) {

        startButton.addEventListener("click", () => {

            const nextSection = startButton.closest("section").nextElementSibling;

            if (nextSection) {

                nextSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }

    // =============================
    // FADE-IN ON SCROLL
    // =============================

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    fadeElements.forEach(element => {

        observer.observe(element);

    });

    // Show hero immediately
    if (fadeElements.length > 0) {

        fadeElements[0].classList.add("show");

    }

});

/* ==========================================
   SCRIPT.JS
   CHUNK 2
   Love Timer • Hearts • Petals
==========================================*/

// =============================
// LOVE TIMER
// =============================

const loveDate = new Date("January 17, 2025 00:00:00").getTime();

function updateLoveTimer() {

    const now = new Date().getTime();
    const difference = now - loveDate;

    if (difference < 0) return;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateLoveTimer();
setInterval(updateLoveTimer, 1000);


// =============================
// FLOATING HEARTS
// =============================

const heartsContainer = document.getElementById("hearts-container");

function createHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (18 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 900);


// =============================
// FALLING PETALS
// =============================

const petalsContainer = document.getElementById("petals-container");

function createPetal() {

    if (!petalsContainer) return;

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize =
        (18 + Math.random() * 18) + "px";

    petal.style.animationDuration =
        (8 + Math.random() * 4) + "s";

    petalsContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 12000);

}

setInterval(createPetal, 1500);

/* ==========================================
   SCRIPT.JS
   CHUNK 3
   Heart Game • Moon Secret
==========================================*/

// =============================
// HEART REVEAL GAME
// =============================

const heartCards = document.querySelectorAll(".heart-card");

heartCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

        card.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.08)" },
            { transform: "scale(1)" }
        ], {
            duration: 350
        });

    });

});


// =============================
// MOON SECRET MESSAGE
// =============================

const moon = document.getElementById("moon");
const secretLetter = document.getElementById("secret-letter");

let moonClicks = 0;

if (moon && secretLetter) {

    moon.addEventListener("click", () => {

        moonClicks++;

        moon.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.15)" },
            { transform: "scale(1)" }
        ], {
            duration: 300
        });

        // Reveal after 7 taps
        if (moonClicks >= 7) {

            secretLetter.classList.add("show");

            secretLetter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

}


// =============================
// LITTLE BUTTON ANIMATION
// =============================

document.querySelectorAll(".love-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.animate([
            { transform: "scale(1)" },
            { transform: "scale(1.05)" }
        ], {
            duration: 200,
            fill: "forwards"
        });

    });

    button.addEventListener("mouseleave", () => {

        button.animate([
            { transform: "scale(1.05)" },
            { transform: "scale(1)" }
        ], {
            duration: 200,
            fill: "forwards"
        });

    });

});


// =============================
// PAGE TITLE HEART ANIMATION
// =============================

setInterval(() => {

    if (document.title.includes("❤️")) {

        document.title = "For My Coco 🤍";

    } else {

        document.title = "For My Coco ❤️";

    }

}, 1500);

/* ==========================================
   SCRIPT.JS
   CHUNK 4
   Final Polish
==========================================*/

// =============================
// SMOOTH SCROLL FOR LINKS
// =============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =============================
// MOBILE BUTTON TAP EFFECT
// =============================

document.querySelectorAll(".love-btn").forEach(button => {

    button.addEventListener("touchstart", () => {

        button.style.transform = "scale(0.96)";

    });

    button.addEventListener("touchend", () => {

        button.style.transform = "";

    });

});


// =============================
// PAGE VISIBILITY
// =============================

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        document.title = "Come back, Coco ❤️";

    } else {

        document.title = "For My Coco ❤️";

    }

});


// =============================
// CONSOLE MESSAGE ❤️
// =============================

console.log(`
==========================================
        FOR MY COCO ❤️
==========================================

If you're reading this...

Every line of code here
was written with love.

❤️
`);


// =============================
// INITIALIZE FIRST HEART/PETAL
// =============================

setTimeout(() => {

    if (typeof createHeart === "function") {

        createHeart();

    }

    if (typeof createPetal === "function") {

        createPetal();

    }

}, 800);


// =============================
// SAFETY CHECK
// =============================

window.addEventListener("error", (event) => {

    console.error("Website Error:", event.message);

});

