document.addEventListener("DOMContentLoaded", () => {
  const container = document.body;

  function createBubble(id) {
    const bobbel = document.createElement("div");
    bobbel.classList.add("bobbel");
    bobbel.id = id;

    // 🎯 Random position, størrelse og delay
    const randomLeft = Math.random() * 90;
    const randomSize = 30 + Math.random() * 50;
    const randomDelay = Math.random() * 5;

    // 🎨 Stil boblen direkte via JS
    Object.assign(bobbel.style, {
      width: `${randomSize}px`,
      height: `${randomSize}px`,
      left: `${randomLeft}%`,
      position: "absolute",
      bottom: "0",
      background: "linear-gradient(#87ceeb, #f378f7)",
      opacity: "0.75",
      borderRadius: "50%",
      cursor: "pointer",
      transform: "translateX(-50%)",
      animation: `floatUp 7s linear infinite`,
      animationDelay: `${randomDelay}s`,
      transition: "opacity 0.5s ease, transform 0.5s ease",
    });

    // 🧼 Klik-effekt med "cute" animation og respawn
    bobbel.addEventListener("click", () => {
      bobbel.classList.add("bobbel-forsvind");
      setTimeout(() => {
        bobbel.remove();
        createBubble(id);
      }, 500); // svarer til CSS-transition
    });

    container.appendChild(bobbel);
  }

  // Start med tre bobler
  createBubble("bobbel_sprite1");
  createBubble("bobbel_sprite2");
  createBubble("bobbel_sprite3");
  createBubble("bobbel_sprite4");
  createBubble("bobbel_sprite5");
  createBubble("bobbel_sprite6");
  createBubble("bobbel_sprite7");
  createBubble("bobbel_sprite1");
});
