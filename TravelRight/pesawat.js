
// Ambil semua elemen dengan class 'card'
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  // Saat mouse bergerak di atas card
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // posisi x dalam card
    const y = e.clientY - rect.top;  // posisi y dalam card

    // Hitung rotasi berdasarkan posisi mouse
    const rotateX = ((y / rect.height) - 0.5) * 15; 
    const rotateY = ((x / rect.width) - 0.5) * -15;

    // Terapkan transformasi
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    card.style.transition = 'transform 0.05s ease';
  });

  // Saat mouse keluar dari card
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.transition = 'transform 0.5s ease';
  });

  // Saat mouse masuk ke card (efek halus zoom in)
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.2s ease';
  });
});

