document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const carouselContainer = document.querySelector(".carousel-container");

  let scrollPosition = 0;

  prevBtn.addEventListener("click", function () {
    scrollPosition -= carouselContainer.clientWidth;
    if (scrollPosition < 0) {
      scrollPosition = 0;
    }
    carouselContainer.scroll({
      left: scrollPosition,
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", function () {
    scrollPosition += carouselContainer.clientWidth;
    if (
      scrollPosition >
      carouselContainer.scrollWidth - carouselContainer.clientWidth
    ) {
      scrollPosition =
        carouselContainer.scrollWidth - carouselContainer.clientWidth;
    }
    carouselContainer.scroll({
      left: scrollPosition,
      behavior: "smooth",
    });
  });
});
