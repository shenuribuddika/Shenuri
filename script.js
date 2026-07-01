/* =========================
   Typing Effect
========================= */

const words = ["IT Undergraduate", "Web Developer"];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        charIndex++;
    } else {
        charIndex--;
    }

    document.getElementById("typing").textContent =
        currentWord.substring(0, charIndex);

    if (!deleting && charIndex === currentWord.length) {

        deleting = true;

        setTimeout(typeEffect, 1200);

        return;

    }

    if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex++;

        if (wordIndex === words.length) {

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 70 : 120);

}

typeEffect();



/* =========================
   Dark / Light Mode
========================= */

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        toggleBtn.innerHTML = "🌙 Dark Mode";

    } else {

        toggleBtn.innerHTML = "☀️ Light Mode";

    }

});



/* =========================
   Project Filter
========================= */

const filterButtons = document.querySelectorAll(".filter-tabs button");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        // Add active class
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            if (filter === "all" || card.dataset.category === filter) {

                card.style.display = "flex";

                card.style.animation = "fadeIn .5s ease";

            } else {

                card.style.display = "none";

            }

        });

    });

});



/* =========================
   Fade Animation
========================= */

const style = document.createElement("style");

style.innerHTML = `

@keyframes fadeIn{

    from{

        opacity:0;
        transform:translateY(30px);

    }

    to{

        opacity:1;
        transform:translateY(0);

    }

}
`;

document.head.appendChild(style);



/* =========================
   Initial Animation
========================= */

projectCards.forEach((card, index) => {

    card.style.animation =
        `fadeIn .6s ease ${index * 0.12}s both`;

});