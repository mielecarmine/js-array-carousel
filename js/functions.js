function slideActive() {
  const newSlide = allSlides[slideIndex];
  newSlide.classList.add("active");
}

function nextSlide() {
  const currentSlide = document.querySelector(".slide.active");
  currentSlide.classList.remove("active");

  if (slideIndex >= slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
}

function prevSlide() {
  const currentSlide = document.querySelector(".slide.active");
  currentSlide.classList.remove("active");

  if (slideIndex <= 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
}
