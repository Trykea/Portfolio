// template_o9s0c5h
// service_cqa1mef
// WQriVG6fo3KIxiJMR
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 30;
function toggleContrast() {
  contrastToggle = !contrastToggle;
  const linkHoverEffect = document.querySelectorAll(
    ".link__hover-effect--black"
  );
  if (contrastToggle) {
    linkHoverEffect.forEach((Element) => {
      Element.classList += " link__hover-effect--white";
    });
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
    linkHoverEffect.forEach((Element) => {
      Element.classList.remove("link__hover-effect--white");
    });
  }
}
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  const failed = document.querySelector(".modal__overlay--failed");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_cqa1mef",
      "template_paif8vp",
      event.target,
      "WQriVG6fo3KIxiJMR"
    )
    .then(() => {
      // throw new Error("error");
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      failed.classList += " modal__overlay--visible";
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal__open");
  }
  isModalOpen = true;
  document.body.classList += " modal__open";
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  // console.log(x, y);
  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x}deg)`;
    shapes[i].style.transform = ` `;
  }
}
