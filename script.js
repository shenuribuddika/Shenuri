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

  document.getElementById("typing").textContent = currentWord.substring(
    0,
    charIndex,
  );

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
