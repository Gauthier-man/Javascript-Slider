const image = document.querySelectorAll("img");
const nbSlide = image.length;
const suivant = document.querySelector(".droit");
const precedent = document.querySelector(".gauche");

let count = 0;

function SlideSuivante() {
  image[count].classList.remove("active");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  image[count].classList.add("active");
  console.log(count);
}

suivant.addEventListener("click", SlideSuivante);

function SlidePrecedente() {
  image[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  image[count].classList.add("active");
  console.log(count);
}
precedent.addEventListener("click", SlidePrecedente);
setInterval(SlideSuivante, 3500);
