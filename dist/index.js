"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  carouselData: () => carouselData,
  initializeCarousel: () => initializeCarousel
});
module.exports = __toCommonJS(src_exports);
function createSlides(slideId, imgSrc) {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");
  carouselItem.id = slideId;
  carouselItem.style.height = "100%";
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
      },
      {
        id: "slide-3",
        imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fcs%3Dsrgb%26dl%3Ddaylight-environment-forest-459225.jpg%26fm%3Djpg&f=1&nofb=1&ipt=850d7382bd590ac963b59837020048cbcf6cc66cb8b2f9cdc1727f98b0da7ff4&ipo=images"
      }
    ]
  }
];
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  carouselData,
  initializeCarousel
});
