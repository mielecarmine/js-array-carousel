// HTML ELEMENTS

const slidesContainerEl = document.getElementById("slides-container");
const arrowNextEl = document.querySelector(".arrow-next");
const arrowPrevEl = document.querySelector(".arrow-prev");
const allSlides = document.getElementsByClassName("slide");

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
  nextSlide();
  slideActive();
});

arrowPrevEl.addEventListener("click", function () {
  prevSlide();
  slideActive();
});

// FUNZIONE SCORRIMENTO OGNI 3 S
let caoruselTime;
caoruselTime = setInterval(function () {
  nextSlide();
  slideActive();
}, 3000);

slidesContainerEl.addEventListener("mouseenter", function () {
  clearInterval(caoruselTime);
});

slidesContainerEl.addEventListener("mouseout", function () {
  caoruselTime = setInterval(function () {
    nextSlide();
    slideActive();
  }, 3000);
});
