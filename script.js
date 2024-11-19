const left = document.querySelector("#arrow-left");
const right = document.querySelector("#arrow-right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider-image");

let slideNumber = 1;
let length = images.length;

const nextSlide = () => {
  slider.style.transform = `translateX(-${slideNumber * 100}%)`;
  slideNumber++;
};
const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber-2) * 100}%)`;
    slideNumber--;
  };
const returnToFirstSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideNumber = 1;
};

const goToLastSlide = () => {
    slider.style.transform = `translateX(-${(length-1)*100}%)`;
    slideNumber = length;
  };
  
right.addEventListener("click", () => {
  slideNumber < length ? nextSlide() : returnToFirstSlide();
});

left.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : goToLastSlide();
  });

// Side Menu Functionality
let openmenu = document.getElementById("menu-icon");
let closemenu = document.getElementById("cross-icon");
let sidemenu = document.getElementById('sidemenu');

openmenu.addEventListener("click",() =>{
  sidemenu.style.right = '0px';
});

closemenu.addEventListener("click",() =>{
sidemenu.style.right = '-150px';
});
