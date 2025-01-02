function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".phone-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let currentSlideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const slideText = document.querySelectorAll('.slide-text');

  currentSlideIndex += n;

  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  } else if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }

  slides.forEach(slide => slide.style.display = 'none');
  slideText.forEach(text => text.style.display = 'none');

  slides[currentSlideIndex].style.display = 'block';
  slideText[currentSlideIndex].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  moveSlide(0);
});

