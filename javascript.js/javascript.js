document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const carouselContainer = document.querySelector(".carousel-container-index");

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

// TRANSPARÊNCIA DO MENU
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar-index");

  if (window.scrollY > 400) {
    // Define a quantidade de scroll para ativar a transparência (100 é um exemplo)
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
});
