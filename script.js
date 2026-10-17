document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.textContent = open ? "✕" : "☰";
    });
  }

  document.querySelectorAll(".reason-card").forEach(card => {
    card.addEventListener("click", () => {
      const open = card.classList.toggle("open");
      const small = card.querySelector("small");
      if (small) small.textContent = open ? "a little piece of my heart ♡" : "tap to open";
    });
  });

  const surpriseButton = document.getElementById("surprise-button");
  const surpriseMessage = document.getElementById("surprise-message");
  if (surpriseButton && surpriseMessage) {
    surpriseButton.addEventListener("click", () => {
      surpriseMessage.hidden = false;
      surpriseButton.textContent = "A thousand hugs for you ♡";
      for (let i = 0; i < 18; i++) createHeart(true);
    });
  }

  document.querySelectorAll(".footer-year").forEach(el => el.textContent = "♡");

  // Soft floating hearts add a little motion without distracting from the message.
  for (let i = 0; i < 9; i++) createHeart(false);
});

function createHeart(burst) {
  const layer = document.querySelector(".sparkle-layer");
  if (!layer) return;
  const heart = document.createElement("span");
  heart.className = "sparkle";
  heart.textContent = ["♡", "♥", "✧", "·"][Math.floor(Math.random() * 4)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 17}px`;
  heart.style.animationDuration = `${burst ? 2 + Math.random() * 2 : 8 + Math.random() * 10}s`;
  heart.style.animationDelay = `${burst ? Math.random() * .7 : Math.random() * 8}s`;
  layer.appendChild(heart);
  heart.addEventListener("animationend", () => heart.remove());
}
