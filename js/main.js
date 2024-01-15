// HTML ELEMENTS

const slidesContainerEl = document.getElementById("slides-container");

// ON LOAD
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

let slidesHTML = " ";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  let activeClass = i == 0 ? "active" : "";

  slidesHTML += `<img src="./consegna/img/${slide}" class="slide ${activeClass}" alt="slide ${i}" />`;
}

slidesContainerEl.innerHTML = slidesHTML;
