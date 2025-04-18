const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(idx) {
  slides.forEach((sl, i) => {
    sl.style.transform = `translateX(${100 * (i - idx)}%)`;
  });
  current = idx;
}

function nextSlide() {
  const next = (current + 1) % slides.length;
  showSlide(next);
}

function goToSlide(id) {
  const idx = Array.from(slides).findIndex(sl => sl.id === id);
  if (idx >= 0) showSlide(idx);
}

// প্রথমে Intro দেখাবে
showSlide(0);
