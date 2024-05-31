/**
 * @description
 * @param {string , string} carouselId, carouselClass
 * @returns {HTMLDivElement}
 *  */

function createCarouselContainer(
  carouselId: string,
  carouselClass: string
): HTMLDivElement {
  const carouselContainer = document.createElement("div");
  carouselContainer.classList.add(carouselClass);
  carouselContainer.id = carouselId;
  // Apply global stlye to container if required
  return carouselContainer;
}

/**
 * @description
 * @param {slideId, imgSrc} slideId, image src
 * @returns {HTMLDivElement}
 */

function createSlides(slideId: string, imgSrc: string): HTMLDivElement {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");
  carouselItem.id = slideId;
  carouselItem.style.height = "100%";
  const img = document.createElement("img");
  img.src = imgSrc;
  carouselItem.appendChild(img);
  // Add Global style
  return carouselItem;
}

/**
 *
 * @param carouselData
 */
function initializeCarousel(carouselData: any[]) {
  const carousel = document.getElementById("carousel");
  carouselData.forEach((element) => {
    // element.slides.forEach((s: { id: string; imgSrc: string }) => {
    //   const carouselContainer = createCarouselContainer(
    //     element.carouselId,
    //     element.carouselClass
    //   );
    //   const slide = createSlides(s.id, s.imgSrc);
    //   carousel?.appendChild(slide);
    //   carouselContainer.appendChild(slide);
    // });
    if (carousel !== null) {
      element.slides.forEach((slide: { id: string; imgSrc: string }) => {
        carousel.appendChild(createSlides(slide.id, slide.imgSrc));
      });
    } else {
      console.log("No Element with Id as carousel found!");
    }
  });

  utility();
}

const carouselData = [
  {
    carouselClass: "Carousel-class",
    carouselId: "carousel-Id",
    slides: [
      {
        id: "slide-1",
        imgSrc:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.CpU4-nlviGfH1eEWiEEWqwHaEK%26pid%3DApi&f=1&ipt=32cf19dbed753287019c6a02d7293fff335cfc8d223668aa25a6b8c77f7c5e41&ipo=images",
      },
      {
        id: "slide-2",
        imgSrc: "https://mala.ae/wp-content/uploads/2023/02/img.jpg",
      },
      {
        id: "slide-3",
        imgSrc:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fcs%3Dsrgb%26dl%3Ddaylight-environment-forest-459225.jpg%26fm%3Djpg&f=1&nofb=1&ipt=850d7382bd590ac963b59837020048cbcf6cc66cb8b2f9cdc1727f98b0da7ff4&ipo=images",
      },
    ],
  },
];

initializeCarousel(carouselData);

function utility() {
  const slides: HTMLElement[] = Array.from(
    document.querySelectorAll(".carousel-item")
  ); // Select all slides
  let currentIndex = 0; // Track the current slide index

  function showSlide(index: number) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    // Show the slide at the given index
    slides[index].style.display = "block";
  }

  function navigateCarousel() {
    // Increment the current index
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  // Initial rendering of carousel
  showSlide(currentIndex);

  // Autoplay functionality
  const autoplayInterval = 4000; // Adjust the interval as needed (5 seconds in this example)
  let autoplayTimer: any;

  function startAutoplay(): void {
    autoplayTimer = setInterval(() => navigateCarousel(), autoplayInterval);
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }

  // Start autoplay when the page loads
  startAutoplay();

  // Pause autoplay when the user interacts with the carousel
  const carousel = document.getElementById("carousel");
  if (carousel) {
    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
  }
}
