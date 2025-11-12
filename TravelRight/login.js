document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".login-card");

  // Efek muncul pertama kali
  setTimeout(() => {
    card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 200);

  // Hover interaktif
  card.addEventListener("mouseenter", () => {
    card.classList.add("active");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("active");
  });
});
