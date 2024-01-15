// HTML ELEMENTS

const slidesContainerEl = document.getElementById("slides-container");
const arrowNextEl = document.querySelector(".arrow-next");
const arrowPrevEl = document.querySelector(".arrow-prev");

// ON LOAD
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
let slideIndex = 0;

let slidesHTML = " ";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  let activeClass = i == slideIndex ? "active" : "";

  slidesHTML += `<img src="./consegna/img/${slide}" class="slide ${activeClass}" alt="slide ${i}" />`;
}

slidesContainerEl.innerHTML = slidesHTML;

arrowNextEl.addEventListener("click", function () {
  const currentSlide = document.querySelector(".slide.active");
  currentSlide.classList.remove("active");

  if (slideIndex >= slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }

  const allSlides = document.getElementsByClassName("slide");
  const newSlide = allSlides[slideIndex];
  newSlide.classList.add("active");
});

arrowPrevEl.addEventListener("click", function () {
  const currentSlide = document.querySelector(".slide.active");
  currentSlide.classList.remove("active");

  if (slideIndex <= 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }

  const allSlides = document.getElementsByClassName("slide");
  const newSlide = allSlides[slideIndex];
  newSlide.classList.add("active");
});
