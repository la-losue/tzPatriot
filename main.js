let slideIndex = 1;
const slider = document.getElementById('slider');

function showSlides(n) {
  if (n > 4) { slideIndex = 1; }
  if (n < 1) { slideIndex = 4; }

  let transformValue = -(slideIndex - 1) * 100;
  slider.style.transform = `translateX(${transformValue}%)`;
}

function nextSlide() {
  showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

showSlides(slideIndex);