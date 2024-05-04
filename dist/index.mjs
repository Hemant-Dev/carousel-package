// src/index.ts
function createSlides(slideId, imgSrc) {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");
  carouselItem.id = slideId;
  const img = document.createElement("img");
  img.src = imgSrc;
  carouselItem.appendChild(img);
  return carouselItem;
}
function initializeCarousel(carouselData2) {
  const carousel = document.getElementById("carousel");
  carouselData2.forEach((element) => {
    if (carousel !== null) {
      element.slides.forEach((slide) => {
        carousel.appendChild(createSlides(slide.id, slide.imgSrc));
      });
    } else {
      console.log("No Element with Id as carousel found!");
    }
  });
  utility();
}
var carouselData = [
  {
    carouselClass: "Carousel-class",
    carouselId: "carousel-Id",
    slides: [
      {
        id: "slide-1",
        imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.CpU4-nlviGfH1eEWiEEWqwHaEK%26pid%3DApi&f=1&ipt=32cf19dbed753287019c6a02d7293fff335cfc8d223668aa25a6b8c77f7c5e41&ipo=images"
      },
      {
        id: "slide-2",
        imgSrc: "https://mala.ae/wp-content/uploads/2023/02/img.jpg"
      }
    ]
  }
];
initializeCarousel(carouselData);
function utility() {
  const slides = Array.from(
    document.querySelectorAll(".carousel-item")
  );
  let currentIndex = 0;
  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    slides[index].style.display = "block";
  }
  function navigateCarousel() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  showSlide(currentIndex);
  const autoplayInterval = 4e3;
  let autoplayTimer;
  function startAutoplay() {
    autoplayTimer = setInterval(() => navigateCarousel(), autoplayInterval);
  }
  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }
  startAutoplay();
  const carousel = document.getElementById("carousel");
  if (carousel) {
    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
  }
}
