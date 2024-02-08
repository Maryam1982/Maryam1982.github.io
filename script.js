const images = [168, 170, 195, 215, 278, 312, 350, 351, 392];
const technologies = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "React.js",
  "Kendo React - Telerik",
];

let i = 0;

setInterval(() => {
  const cards = document.querySelectorAll(".header__card-inner");
  cards.forEach((card) => {
    card.style.transform = "rotateY(180deg)";
  });
  cards.forEach((card, idx) => {
    const img = card.querySelector(".header__card-back .header__card-image");

    img.src = `img/images/${images[i % 9]}/images/${images[i % 9]}_0${
      idx + 1
    }.jpg`;
  });
  setTimeout(() => {
    cards.forEach((card) => {
      card.style.transform = "rotateY(360deg)";
    });
  }, 3500);
  i++;
}, 7000);

function onFullSacleViewClick(event) {
  const container = document.querySelector("#full-scale-container");
  const img_element = document.querySelector("#full-scale-img");
  container.style.height = "100%";
  const img_src = event.target.dataset.imgSrc;
  img_element.src = img_src;
  console.log(img_src);
}

function onCloseFullScaleView() {
  document.querySelector("#full-scale-container").style.height = "0%";
}

const video = document.querySelector(".professional-projects__demo-video");
video.addEventListener("click", () => {
  video.play();
});

const tech = document.querySelector(".header__tech");
const speed = 50;
let counter = 0;
let techIndex = 0;
let techTitle = "";
function typeWriter() {
  if (counter < techTitle.length) {
    tech.innerHTML += techTitle[counter];
    counter++;
    setTimeout(typeWriter, speed);
  }
}

setInterval(() => {
  tech.innerHTML = "";
  techTitle = technologies[techIndex];
  typeWriter();
  setTimeout(() => {
    techIndex++;
    if (techIndex >= technologies.length) {
      techIndex = 0;
    }
    counter = 0;
  }, 1550);
}, 3000);

const headerSection = document.querySelector(".header");
const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  { root: null, threshold: 0 }
);
observer.observe(headerSection);

function linkClick() {
  const checkbox = document.querySelector(".navigation__checkbox");
  console.log(checkbox);
  checkbox.checked = false;
}
