document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-element');
  const images = document.querySelectorAll('.momo-img');

  let currentImageIndex = 0;

  // Function to handle the fading effect
  function fadeInOut() {
    images[currentImageIndex].classList.remove('show');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('show');
  }

  // Initial fade-in
  fadeElements.forEach(element => {
    element.classList.add('fade-in');
  });

  // Set interval for images fade effect
  setInterval(fadeInOut, 3000); // Change image every 3 seconds
});
