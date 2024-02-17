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

// TRANSPARÊNCIA DO MENU INDEX
window.addEventListener("scroll", function () {
  // Verifica se a largura da tela é maior que 1200 pixels
  if (window.innerWidth > 1200) {
    var navbar = document.getElementById("navbar-index");

    if (window.scrollY > 400) {
      // Define a quantidade de scroll para ativar a transparência (100 é um exemplo)
      navbar.classList.add("transparent");
    } else {
      navbar.classList.remove("transparent");
    }
  }
});


// CARROSEL PACOTES INDEX/1

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carroselindex() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 280}px)`;
}

setInterval(carroselindex, 2000);

// CARROSEL PACOTES INDEX/2
const imgs2 = document.getElementById("img2");
const img2 = document.querySelectorAll("#img2 img");

let idy = 0;

function carroselindex2() {
  idy++;

  if (idy > img.length - 1) {
    idy = 0;
  }

  imgs2.style.transform = `translateX(${-idy * 280}px)`;
}

setInterval(carroselindex2, 2000);

//CARROSEL PACOTES INDEX/3
const imgs3 = document.getElementById("img3");
const img3 = document.querySelectorAll("#img3 img");

let idz = 0;

function carroselindex3() {
  idz++;

  if (idz > img.length - 1) {
    idz = 0;
  }

  imgs3.style.transform = `translateX(${-idz * 280}px)`;
}

setInterval(carroselindex3, 2000);

// BOTÃO VOLTAR AO TOPO
window.addEventListener("scroll", function () {
  let scroll = document.querySelector(".scrollTop");
  scroll.classList.toggle("active", window.scrollY > 450);
});

function backTop() {
  window.scrollTo({
    top: 1,
    behavior: "smooth",
  });
}
