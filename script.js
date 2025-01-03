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
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll function
  function smoothScroll(target, duration = 800) {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - 100; // Adjust for header if needed
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  // Add click event to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // If href is just "#" or doesn't point to an element, let default behavior handle it
      if (href === "#" || !document.querySelector(href)) {
        return;
      }

      // Prevent default only for valid smooth scrolling targets
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        smoothScroll(target);
      }
    });
  });
});
