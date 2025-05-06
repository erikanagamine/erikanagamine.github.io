document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const items = carousel.querySelectorAll('.carousel-item');
  
  let currentIndex = 0;
  
  setInterval(() => {
      if (currentIndex >= items.length - 1) {
          currentIndex = 0;
      } else {
          currentIndex++;
      }
      carousel.scrollTo({
          left: items[currentIndex].offsetLeft,
          behavior: 'smooth'
      });
  }, 3000); // Scroll every 3 seconds
});
