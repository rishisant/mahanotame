// Floating hearts animation on page load
(function () {
  const count = 14;
  const container = document.createElement("div");
  container.style.cssText = "position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:9999";
  document.body.appendChild(container);

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    const size = 16 + Math.random() * 24;
    const left = Math.random() * 100;
    const delay = Math.random() * 0.8;
    const duration = 2.5 + Math.random() * 1.5;

    heart.textContent = "\u2665";
    heart.style.cssText = `
      position: absolute;
      bottom: -40px;
      left: ${left}%;
      font-size: ${size}px;
      color: rgba(200, 160, 155, ${0.25 + Math.random() * 0.35});
      animation: floatUp ${duration}s ${delay}s ease-out forwards;
      pointer-events: none;
    `;
    container.appendChild(heart);
  }

  // Clean up after animation
  setTimeout(() => container.remove(), 5500);
})();
